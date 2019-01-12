<template lang="html">
  <div class="row">
    <server-list></server-list>
    <server-details></server-details>
  </div>
</template>

<script>
import ServerDetails from './ServerDetails.vue'
import ServerList from './ServerList.vue'
export default {
  components: {
    'server-list': ServerList,
    'server-details': ServerDetails
  }
}
</script>

<style lang="css" scoped>
</style>
