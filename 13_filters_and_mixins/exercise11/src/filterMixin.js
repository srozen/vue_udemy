export const filterMixin = {
  data(){
    return {
      toReverse: "reverse me",
      toCount: "countMe"
    }
  },
  computed: {
    countWordLength(){
      return this.toCount.length
    },
    reverseWord(){
      return this.toReverse.split("").reverse().join("")
    }
  }
}
