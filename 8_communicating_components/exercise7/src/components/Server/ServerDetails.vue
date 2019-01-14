<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="currentServer">
      <h2>Server #{{ this.currentServer.id }}</h2>
      <p>Status : {{ this.currentServer.status}}</p>
      <button type="button" name="button" @click="restoreStatus">Restore Status</button>
    </div>
    <div v-else>No server selected</div>
  </div>

</template>

<script>
import { eventBus } from '../../main.js'
export default {
  data: function(){
    return {
      currentServer: null
    }
  },
  created(){
    eventBus.$on('displayDetails', (data) => {
      this.currentServer = data;
    })
  },
  methods: {
    restoreStatus(){
      this.currentServer.status = 'Normal'
    }
  }
}
</script>

<style>
</style>
