new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0
  },
  // Handle asynchronous
  watch: {
    counter: function(value){
      var dis = this;
      setTimeout(function(){
        dis.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result: function(){
      return this.counter > 5 ? 'Greater than 5' : 'Lower than 5';
    }
  },
  // Synchronous !
  computed: {
    output: function(){
      return this.counter > 5 ? 'Greater than 5' : 'Lower than 5';
    }
  }
});
