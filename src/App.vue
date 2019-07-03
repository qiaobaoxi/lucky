<template>
  <div id="app">
    <home/>
    <about-us></about-us>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import AboutUs from './components/AboutUs.vue'
export default {
  name: 'app',
  components: {
    Home,
    AboutUs
  }
}
</script>

<style>

</style>
