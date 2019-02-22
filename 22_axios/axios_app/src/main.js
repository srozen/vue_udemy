import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuetest-7c1c8.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'something'
axios.defaults.headers.get['Accept'] = 'application/json' // Targets only get requests

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
