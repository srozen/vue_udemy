<template>
  <div class="container">
        <app-header></app-header>
        <hr>
        <app-main></app-main>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import ServerMain from './ServerMain.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-main': ServerMain
  }
}
</script>

<style>

</style>
