<template lang="html">
  <div class="">
    <h1>The Portfolio Component</h1>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    'app-stock': Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>

<style lang="css" scoped>
</style>
