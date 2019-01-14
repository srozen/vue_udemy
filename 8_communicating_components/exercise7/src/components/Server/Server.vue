<template lang="html">
  <li class="list-group-item" @click="displayDetails">
      Server #{{ server.id }} | Status : {{ server.status }}
  </li>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
  props: ['server'],
  methods: {
    displayDetails(){
      eventBus.displayDetails(this.server)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
