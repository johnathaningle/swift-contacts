<template>
    <div>
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
                <div class="form-group">
                    <p>Confirm Password</p>
                    <input type="password" class="form control form-input" v-model="confirmPassword">
                </div>
                <div class="form-group remember">
                    <p>Remember Me</p>
                    <input type="checkbox" class="form-input checkmark">
                </div>
                <hr>
                <button class="btn btn-primary btn-block mb-4" @click="register">Register</button>
            </div>

            <p id="new-account" slot="form-link">Already have an account? <router-link to="/login">Login</router-link>
            </p>
        </authentication-form>
    </div>
</template>

<script>
    import AuthenticationForm from "../components/AuthenticationForm.vue";
    import AuthenticationService from "../services/AuthenticationService";
    export default {
        components: {
            AuthenticationForm,
        },
        data() {
            return {
                name: "Register",
                email: "",
                password: "",
                confirmPassword: "",
            }
        },
        methods: {
            async register() {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password,
                });
                console.log(response.data);
            }
        },
    }
</script>

<style lang="scss">

</style>