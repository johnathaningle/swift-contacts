<template>
  <div class="app">
    <nav-component></nav-component>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import WelcomeForm from "./components/WelcomeForm.vue"

export default {
  name: "app",
  components: {
    NavComponent: Nav,
  },
}
</script>

<style>
html, body {
    width: 100%;
    height: 100%;
    width: 100%;
    height: 100%;
    font-size: 17px;
    font-family: "Lato", Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #555459;
    overflow: hidden;
    background: #f3f3f3 !important;
}

</style>
