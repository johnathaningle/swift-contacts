import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import './registerServiceWorker'
import configureFakeBackend from './helpers/fake-backend';

require('bootstrap/dist/css/bootstrap.min.css');
require('lato-font/css/lato-font.css')

Vue.use(VeeValidate);
Vue.config.productionTip = false


configureFakeBackend();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
