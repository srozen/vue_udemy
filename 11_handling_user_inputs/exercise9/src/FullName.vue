<template lang="html">
  <div class="">
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input :value="firstName" type="text" id="firstName" class="form-control" @input="changeName(true, $event)">
    </div>
    <div class="form-group">
      <label for="lastname">Last Name</label>
      <input :value="lastName" type="text" id="lastName" class="form-control" @input="changeName(false, $event)">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    firstName(){
      return this.value.split(" ")[0]
    },
    lastName(){
      return this.value.split(" ")[1]
    }
  },
  methods: {
    changeName(isFirst, event){
      var name = ''
      if(isFirst){
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value + ' ';
      }
      this.$emit('input', name)
  }
  }
}
</script>

<style lang="css" scoped>
</style>
