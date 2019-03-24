<template>
    <div class="login">
        <login-form></login-form>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
    export default {
        name: "login",
        components: {
            LoginForm: LoginForm,
        },
    }
</script>

<style lang="scss">
    html,
    body {
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

    nav {
        background: #fff;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        -webkit-box-shadow: 0px 1px 5px #b9b9b9;
        -moz-box-shadow: 0px 1px 5px #b9b9b9;
        box-shadow: 0px 1px 5px #b9b9b9;
    }
</style>