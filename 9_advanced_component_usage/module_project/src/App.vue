<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <button @click="selectedComponent = 'appQuote'"ype="button" name="button">Quote</button>
          <button @click="selectedComponent = 'appAuthor'"ype="button" name="button">Author</button>
          <button @click="selectedComponent = 'appNew'"ype="button" name="button">New</button>

          <hr>
          <p>{{ selectedComponent }}</p>
          <keep-alive>
            <component :is="selectedComponent">
              <p>Default Content</p>
            </component>
          </keep-alive>
          <!--
          <app-quote>
            <h1 slot="title">{{ quoteTitle }}</h1>
            <p>A wonderful quote</p>
          </app-quote>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import New from './components/New.vue'
import Author from './components/Author.vue'

export default {
  data: function(){
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appNew: New,
    appAuthor: Author
  }
}
</script>

<style scoped>

</style>
