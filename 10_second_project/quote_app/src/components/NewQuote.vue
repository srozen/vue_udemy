<template lang="html">
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button type="btn btn-primary" @click.prevent="createQuote" name="button">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      quote: ''
    }
  },
  methods: {
    createQuote(){
      this.$emit('quoteAdded', this.quote)
      this.quote = ''
    }
  }
}
</script>

<style lang="css" scoped>

</style>
