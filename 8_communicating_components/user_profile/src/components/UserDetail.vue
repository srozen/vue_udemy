<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name : {{ switchName() }}</p>
    <p>User Age : {{ age }}</p>
    <button type="button" @click="nameReset" name="button"> Switch Name </button>
    <button type="button" @click="resetFn()" name="button"> Reset Name </button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      resetFn: Function,
      age: {
        type: Number,
        required: true
      }
    },
    methods: {
      switchName(){
        return this.name.split("").reverse().join("");
      },
      nameReset(){
        this.$emit('nameReset', "Max")
      }
    },
    computed: {
      thisAge(){
        return
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
