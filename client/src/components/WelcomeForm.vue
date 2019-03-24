<template>
    <main>
        <div class="login-form">
            <h3 class="text-center mb-4">Welcome to Flack</h3>
            <a href="/login" class="btn btn-success btn-block">Login</a>
            <a href="/register" class="btn btn-info btn-block">Register</a>
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
html, body {
    display: flex;
    width: 100%;
    height: 100%;
    width: 100%;
    height: 100%;
    font-size: 17px;
    font-family: "Lato", Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #555459;
    overflow: hidden;
    background: #f8f8f8;
}
main {
    position: relative;
    top: 300px;
    display: flex !important;
    align-items: center !important;
    align-content: center;
    justify-content: center !important;
}
form {
    margin-top: 30px;
}

img {
    height: 60px;
    width: 60px;
    padding-right: 60px;
}

p {
    padding: 0px;
    margin: 0px;
    font-weight: bold;
}

#new-account {
    font-weight: 400;
}

.login-form {
    background: white;
    border-radius: 8px;
    margin-top: -8%;
    padding: 20px;
    width: 400px;
    margin-top: -200px !important;
    -webkit-box-shadow:0px 1px 5px #b9b9b9;
    -moz-box-shadow:0px 1px 5px #b9b9b9;
    box-shadow:0px 1px 5px #b9b9b9;
}

.form-group {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}

.form-input {
    margin-top: 8px;
    background: #fff;
    color: #4d4c4d;
    border-radius: 5px;
    padding: 6px;
    font-size: 15px;
    font-family: inherit;
    border: 2px solid #dddddd;
    font-weight: 600;
}

.form-button {
    background: #dddddd;
    color: #4d4c4d;
    border-radius: 3px;
    padding: 10px;
    font-size: 15px;
    font-family: inherit;
    border: 1px solid #dddddd;
    font-weight: 600;
}

.checkmark {
    position: relative;
    left: 20px;
}

.remember {
    display: flex;
    flex-direction: row;
}

hr {
    border: 1px solid #dddddd;
    margin-bottom: 20px;
}
</style>
