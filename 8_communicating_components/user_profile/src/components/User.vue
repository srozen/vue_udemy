<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User! </p>
    <button @click="changeName">Change my name</button>
    <p>Name is : {{ name }}</p>
    <p>Age is : {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :name="name"
          @nameReset="name = $event"
          :resetFn="resetName"
          :age="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :age="age"
          @ageChanged="age = $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';
  import { eventBus } from '../main'

  export default {
    data: function(){
      return {
        name: 'Sam',
        age: 26
      };
    },
    methods: {
      changeName(){
        this.name = 'Rezy'
      },
      resetName(){
        this.name = 'Sam'
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    },
    created(){
      eventBus.$on('ageChanged', (data) => {
        this.age = data;
      })
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
