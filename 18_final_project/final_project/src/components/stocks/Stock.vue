<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientFunds}">
        </div>

        <div class="pull-right">
          <button class="btn btn-success" @click="buyStock" :disabled="buyDisabled || insufficientFunds">
            {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data(){
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order)
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  },
  computed: {
    buyDisabled(){
      return this.quantity <= 0 || this.quantity % 1 != 0
    },
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds
    },
    funds(){
      return this.$store.getters.funds
    }
  }
}
</script>

<style lang="css" scoped>
  .danger {
    border: 1px solid red;
  }
  .danger:focus{
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(253,51,51,.6);
  }
</style>
