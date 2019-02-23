import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signup({commit}, authData){
      axios.post('/signupNewUser?key=AIzaSyDwnB4_7iZWQpVqylnHqy5-TPgf4mFWxjk', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    login({commit}, authData){
      axios.post('/verifyPassword?key=AIzaSyDwnB4_7iZWQpVqylnHqy5-TPgf4mFWxjk', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  },
  getters: {

  }
})
