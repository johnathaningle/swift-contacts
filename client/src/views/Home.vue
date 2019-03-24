<template>
  <welcome-form></welcome-form>
</template>

<script>
// @ is an alias to /src
import WelcomeForm from "../components/WelcomeForm"

export default {
  name: 'home',
  components: {
    WelcomeForm: WelcomeForm,
  }
}
</script>
