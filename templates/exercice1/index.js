new Vue({
  el: '#exercise',
  data: {
    name: 'Bill',
    age: 20,
    image: "http://www.snowmonkeyresorts.com/wp-content/uploads/2015/11/Main2.jpg"
  },
  methods: {
    myRandom: function(){
      return Math.random()
    }
  }
});
