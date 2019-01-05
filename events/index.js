new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increment: function(i, event){
      this.counter += i;
    },
    updateCoordinates: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(event){
      alert('Alert !')
    }
  }
});
