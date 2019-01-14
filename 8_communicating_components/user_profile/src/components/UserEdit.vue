<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>{{ age }}</p>
    <button @click="editAge" type="button" name="button">Edit Age</button>
  </div>
</template>

<script>
  export default {
    props: ['age'],
    methods: {
      editAge(){
        this.$emit("ageChanged", 30)
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
