<template>
  <div >
    <h3>Edit the User</h3>
    <p>Locale : {{ $route.query.locale }}</p>
    <p>Analyics : {{ $route.query.q}}</p>
    <button class="btn btn-primary" name="button" @click="confirmed = true">Confirm</button>
    <div style="height: 1000px">

    </div>
    <p id="data"> Some extra data </p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirmed){
        next()
      } else {
        next(false)
      }
    }
  }
</script>
