<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>

        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>


        <div class="form-group">
          <label>Email</label>
          <input class="form-control" type="email" v-model="user.email">
        </div>

        <button class="btn btn-primary" name="button" @click.prevent="submit">Submit</button>
        <hr>
        <input class="form-control" type="email" v-model="node">
        <button class="btn btn-primary" name="button" @click.prevent="fetchData">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users">{{user.username}} - {{user.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resource: {},
      node: 'data'
    }
  },
  methods: {
    submit(){
      // this.$http.post(
      //   'data.json',
      //   this.user
      // ).then(response => {
      //   console.log(response)
      // }, error => {
      //   console.log("Error occured !")
      // })
      // this.resource.save({}, this.user)
      this.resource.saveOlt(this.user)
    },
    fetchData(){
      // this.$http.get(
      //   'data.json'
      // ).then(response => {
      //   return response.json()
      // })
      // .then(data =>{
      //   const resultArray = []
      //   for (let key in data){
      //     resultArray.push(data[key])
      //   }
      //   this.users = resultArray
      // })
      this.resource.getData({node: this.node})
        .then(response => {
          return response.json()
        })
        .then(data =>{
          const resultArray = []
          for (let key in data){
            resultArray.push(data[key])
          }
          this.users = resultArray
        })
    }
  },
  created(){
    const customActions = {
      saveAlt: {method: 'POST', url: 'alternative.json'},
      saveOlt: {method: 'POST', url: 'altrnotove.json'},
      getData: {method: 'GET'}
    }
    this.resource = this.$resource('{node}.json', {}, customActions)
  }
}
</script>

<style>
</style>
