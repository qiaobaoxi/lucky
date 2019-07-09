<template>
  <div id="app">
    <home/>
    <about-us></about-us>
    <project-introduction></project-introduction>
    <solution></solution>
    <dlucky-chain></dlucky-chain>
    <our></our>
    <road-map></road-map>
    <future-prospect></future-prospect>
    <contact-us></contact-us>
    <news></news>
    <vfooter></vfooter>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import AboutUs from './components/AboutUs.vue'
import DluckyChain from './components/DluckyChain.vue'
import ProjectIntroduction from './components/ProjectIntroduction.vue'
import Solution from './components/Solution.vue'
import Our from './components/Our.vue'
import RoadMap from './components/RoadMap.vue'
import FutureProspect from './components/FutureProspect.vue'
import ContactUs from './components/ContactUs.vue'
import News from './components/News.vue'
import Vfooter from './components/Vfooter.vue'
export default {
  name: 'app',
  components: {
    Home,
    AboutUs,
    DluckyChain,
    ProjectIntroduction,
    Solution,
    Our,
    RoadMap,
    FutureProspect,
    ContactUs,
    News,
    Vfooter
  }
}
</script>

<style>

</style>
