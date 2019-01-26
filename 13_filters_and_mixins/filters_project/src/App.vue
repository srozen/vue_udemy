<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        {{ text | toUppercase | to-lower-case }}
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits" > {{ fruit }} </li>
        </ul>
        <button @click="removeObject" name="button"></button>
      </div>
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
  import List from './List.vue'
  import {fruitMixin} from './fruitMixin.js'

  export default {
    mixins: [fruitMixin],
    components: {
      'app-list' : List
    },
    data(){
      return {
        text: "Hello there!"
      }
    },
    methods: {
      removeObject(){
        this.fruits.pop()
      }
    },
    filters: {
      toUppercase(value){
        return value.toUpperCase()
      },
      toLowercase(value){
        return value.toLowerCase()
      }
    }
  }
</script>

<style>

</style>
