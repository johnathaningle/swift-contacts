<template>
    <div>
        <nav-component></nav-component>
        <authentication-form :formTitle="name">
            <div slot="fields">
                <div class="form-group">
                    <p>Email</p>
                    <input type="email" class="form-input" v-model="email">
                </div>
                <div class="form-group">
                    <p>Password</p>
                    <input type="password" class="form control form-input" v-model="password">
                </div>
                <div class="form-group remember">
                    <p>Remember Me</p>
                    <input type="checkbox" class="form-input checkmark">
                </div>
                <hr>
                <button class="btn btn-primary btn-block mb-4" @click="submitForm">Login</button>
            </div>

            <p id="new-account" slot="form-link">Need an account? <router-link to="/register">Register</router-link>
            </p>
        </authentication-form>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
    import AuthenticationForm from "../components/Index/AuthenticationForm.vue";
    import Nav from '../components/Index/Nav.vue'
    export default {
        components: {
            AuthenticationForm,
            NavComponent: Nav,
        },
        data() {
            return {
                name: "Login",
                email: "",
                password: "",
            }
        },
        methods: {
            submitForm() {
                console.log(this.email);
                console.log(this.password);
            }
        },
    }
</script>

<style lang="scss">

</style>