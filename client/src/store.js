import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "",
    password: "",
  },
  mutations: {
    loginUser(state) {
      let x = state;
      x.toString();
    }
  },
  actions: {
    loginUser(context) {
      context.commit('loginUser');
    }
  },
  getters: {

  }
})
