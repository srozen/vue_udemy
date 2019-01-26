import Vue from 'vue'
import App from './App.vue'

Vue.filter('wordCount', function(value) {
    return value.split('').length;
});

new Vue({
  el: '#app',
  render: h => h(App)
})
