import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuetest-7c1c8.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'something'
axios.defaults.headers.get['Accepts'] = 'application/json' // Targets only get requests

const reqInt = axios.interceptors.request.use(config => {
  console.log(config)
  config.headers['Custom'] = 'foo'
  return config
})
const resInt = axios.interceptors.response.use(res => {
  console.log(res)
  return res
})

axios.interceptors.request.eject(reqInt)
axios.interceptors.request.eject(resInt)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
