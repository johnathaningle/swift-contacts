<template>
  <div>
    <nav-component></nav-component>
  <welcome-form></welcome-form>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeForm from "../components/Index/WelcomeForm"
import Nav from "../components/Index/Nav"
import "bootstrap/dist/css/bootstrap.min.css"

export default {
  name: 'home',
  components: {
    WelcomeForm: WelcomeForm,
    NavComponent: Nav
  }
}
</script>

<style>
html, body, {
  padding: 0 !important;
}
</style>

