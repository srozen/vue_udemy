import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehaviour(to, from, savedPosition){
    if(to.hash){
      return { selector: to.hash }
    }
    return {x: 0, y: 700}
  }
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
