<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} - Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQuantity}">
        </div>

        <div class="pull-right">
          <button class="btn btn-primary" @click="sellStock" :disabled="buyDisabled || insufficientQuantity">
            {{insufficientQuantity ? 'Insufficient' : 'Sell'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['stock'],
  data(){
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellOrder(order)
      this.quantity = 0;
    }
  },
  computed: {
    buyDisabled(){
      return this.quantity <= 0 || this.quantity % 1 != 0
    },
    insufficientQuantity(){
      return this.quantity > this.stock.quantity
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
