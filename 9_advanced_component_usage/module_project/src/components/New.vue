<template lang="html">
  <div>
    <h3>New Quote</h3>
    <button @click="displayed = !displayed" type="button" name="button"> Display me !</button>
    <div v-if="displayed">
      Hello !
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      displayed: false
    }
  },
  destroyed(){
    console.log("DESTROYED !!")
  },
  deactivated(){
    console.log("DEACTIVATED !!")
  },
  activated(){
    console.log("ACTIVATED !!")
  }
}
</script>

<style lang="css" scoped>
</style>
