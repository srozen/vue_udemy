<template lang="html">
  <div class="">
    <h1>The Stocks Component</h1>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
  components: {
    'app-stock': Stock
  },
  computed: {
    stocks(){
      return this.$store.getters.stocks
    }
  }
}
</script>

<style lang="css" scoped>
</style>
