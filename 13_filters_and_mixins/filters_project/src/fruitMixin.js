export const fruitMixin = {
  data(){
    return {
      fruits: ['Mango', 'Apple', 'Banana', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits(){
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      })
    }
  },
  created(){
    console.log("Created")
  }
}
