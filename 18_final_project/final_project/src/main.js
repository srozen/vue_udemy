import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'
import store from './store/store.js'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vuetest-7c1c8.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
