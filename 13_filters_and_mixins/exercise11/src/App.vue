<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        {{ toReverse | reverse }}
        {{ toCount | wordCount }}
        {{ countWordLength }}
        {{ reverseWord }}
      </div>
    </div>
  </div>
</template>

<script>
import {filterMixin} from './filterMixin.js'
export default {
  mixins: [filterMixin],
  filters: {
    reverse(value){
      return value.split("").reverse().join("")
    }
  }
}
</script>
