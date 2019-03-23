var current_workspace = '';
var current_channel = '';
var baseURL = `http://${document.domain}:${location.port}`;
var socket = io.connect(baseURL);
var private_message = false;
var private_username = '';

document.addEventListener("DOMContentLoaded", function() {
    //Query Selectors
    const sendButton = document.querySelector('#message-send');
    const messageInput = document.querySelector('#message-input');
    const mainArea = document.querySelector('.main-area');
    var x = document.querySelectorAll(".team-name");
    const heading = document.querySelector(".navbar-brand");
    var channel_links = document.querySelectorAll('.channel-list');
    const addChannelButton = document.querySelector('#add-channel-button');

    //Socket functions
    socket.on('connect', function(){
        console.log("socket connected");
        socket.send('User connected');
    });

    socket.on('message', function(msg){
        console.log(msg);
        if (msg.status == 1) {
            getChannelUrl(current_channel);
        } 
        if (msg.status == 2) {
            getPrivateMessages(private_username);
        }
    });
    //send message
    sendButton.addEventListener("click", function(e){
        let msgText = messageInput.value;
        if (private_message) {
            let message = {'private_message': "True", "reciever": private_username, 'workspace': current_workspace, 'channel': current_channel, 'message': msgText };
            console.log(message);
            socket.send(message); 
        } else {
            let message = {'private_message': "False", "reciever": "",  'workspace': current_workspace, 'channel': current_channel, 'message': msgText };
            console.log(message);
            socket.send(message);
        }
       
    });


    //EVENT LISTENERS
    //adding a new channel
    addChannelButton.addEventListener('click', function(e) {
        let newChannelField = document.querySelector('#new-channel-name')
        let name = newChannelField.value;
        name = name.replace(" ", "_");
        getChannelUrl(name);
    });

    //changing workspace
    x.forEach(element => {
        element.addEventListener("click", function(e){
            removeActive();
            clearChannels();
            clearUsers();
            text = this.id;
            current_workspace = text;
            this.parentElement.className = "team active";
            heading.innerText = `# ${text.replace('_',' ')}`;
            load_page(text);
        });
    });

    document.addEventListener('click', function(e){
        let element = e.target;
        //load messages and change UI when user clicks on a channel
        if (element.className == "channel-list") {
            removeChannelActive();
            removeUserActive();
            heading.innerText = element.firstElementChild.innerText;
            let channelName = element.firstElementChild.innerText.replace("# ", "");
            private_username = '';
            private_message = false;
            current_channel = channelName;
            getChannelUrl(channelName);
            in_room = true;
            element.className = "channel-list active";
        } else if (element.className == "channel-item") {
            removeChannelActive();
            removeUserActive();
            heading.innerText = element.innerText;
            let channelName = element.innerText.replace("# ", "");
            private_username = '';
            private_message = false;
            current_channel = channelName;
            in_room = true;
            getChannelUrl(channelName);
            element.parentElement.className = "channel-list active";
        }
        //direct message - if user clicks on username in list for direct message
        if (element.className == "user-list") {
            clearMessages();
            removeChannelActive();
            removeUserActive();
            username = element.firstElementChild.getAttribute('id');
            private_username = username;
            private_message = true;
            getPrivateMessages(username);
            element.className = "user-list active";
        } else if (element.className == "user-item") {
            clearMessages();
            removeChannelActive();
            removeUserActive();
            username = element.getAttribute('id');
            private_username = username;
            private_message = true;
            getPrivateMessages(username);
            element.parentElement.className = "user-list active";
        }
        //close the flashed message
        if (element.className == "far fa-times-circle flash-close") {
            const flashMessage = document.querySelector('.flash-message');
            const currClasses = flashMessage.className;
            flashMessage.className = `${currClasses} hiding`;
        }
        //remove message
        if (element.className == "far fa-times-circle message-close") {
            let messageDivId = element.parentElement.getAttribute('id');
            removeMessage(messageDivId);
            getChannelUrl(current_channel);
        }
    });

    //API REQUEST FUNCTIONS
    //get the list of channels
    function load_page(text) {
        console.log('searching');
        if (text != "Home" && text != "add-team") {
            var channel_container = document.querySelector('.channel-container');
            var user_container = document.querySelector('.user-container');
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText;
                data = JSON.parse(data);
                if (data) {
                    channels = data.channels;
                    users = data.users;
                    channels.forEach(item => {
                        let newDiv = document.createElement('div');
                        let ptag = document.createElement("p");
                        newDiv.className = 'channel-list';
                        ptag.innerHTML = `# ${item}`;
                        ptag.className = 'channel-item';
                        newDiv.appendChild(ptag);
                        channel_container.appendChild(newDiv);
                    });
                    users.forEach(item => {
                        let newDiv = document.createElement('div');
                        let ptag = document.createElement("p");
                        let indicator = document.createElement('i')
                        indicator.className = 'fas fa-circle indicator';
                        newDiv.className = 'user-list';
                        ptag.innerHTML = `<i class="fas fa-circle indicator" id="inactive"></i>${item}`;
                        ptag.id = item;
                        ptag.className = 'user-item';
                        newDiv.appendChild(ptag);
                        user_container.appendChild(newDiv);
                    });
                }
            }
        }
        request.open('GET', `/${text}`, true);
        request.send();
        }
    };
    // remove a message 
    function removeMessage(id) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                clearMessages();
                getChannelUrl(current_channel);
            }
        }
        let url = `/rm/${id}`;
        console.log(url);
        request.open('GET', url, true);
        request.send();
    };

    //get messages when user clicks on channel
    function getChannelUrl(name) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText;
                data = JSON.parse(data);
                clearMessages()
                data.forEach(element => {
                    createMessage(element.content, element.username, element.id);
                });
            }
        }
        let url = `/${current_workspace}/${name}`;
        console.log(url);
        request.open('GET', url, true);
        request.send();
    }
    //load private messages
    function getPrivateMessages(private_username) {
        console.log('getting private messages');
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText;
                data = JSON.parse(data);
                clearMessages()
                data.forEach(element => {
                    createMessage(element.content, element.username, element.id);
                });
            }
        }
        let url = `/pm/${private_username}`;
        console.log(url);
        request.open('GET', url, true);
        request.send();
    }
    function removeActive() {
        let icons = document.querySelectorAll('.team');
        icons.forEach(element => {
            element.className = 'team';
        });
    }
    function clearChannels() {
        var channel_container = document.querySelector('.channel-container');
        channel_container.innerHTML='';
    }
    function clearUsers() {
        var user_container = document.querySelector('.user-container');
        user_container.innerHTML = '';
    }
    function clearMessages() {
        mainArea.innerHTML = '';
    }

    function removeChannelActive() {
        let channel_links = document.querySelectorAll('.channel-list');
            channel_links.forEach(element => {
                element.className = "channel-list";
        });
    }
    function removeUserActive() {
        let user_links = document.querySelectorAll('.user-list');
        user_links.forEach(element => {
            element.className = 'user-list';
        });
    }

    function createMessage(content, username, id) {
        let messageDiv = document.createElement('div');
        messageDiv.className = "message shadow-sm";
        messageDiv.id = id;
        let closeButton = document.createElement('i');
        closeButton.classList = "far fa-times-circle message-close";
        messageDiv.appendChild(closeButton);
        let rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        let picDiv = document.createElement('div');
        picDiv.className = 'col-md-1';
        picDiv.innerHTML = '<img src="../static/img/icon.png" alt="profilepic" class="profile-picture">'
        let contentDiv = document.createElement('div');
        contentDiv.className = 'col-md-11';
        contentDiv.innerHTML = `<p>${username}</p><hr><p>${content}</p>`;
        rowDiv.appendChild(picDiv);
        rowDiv.appendChild(contentDiv);
        messageDiv.appendChild(rowDiv);
        mainArea.appendChild(messageDiv);
    }
});
    
