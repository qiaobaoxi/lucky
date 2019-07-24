<template>
  <div id="app">
    <home/>
    <about-us ></about-us>
    <project-introduction id="whitePaper"></project-introduction>
    <solution id="solution"></solution>
    <dlucky-chain v-if="show1"></dlucky-chain>
    <our ></our>
    <road-map></road-map>
    <future-prospect v-if="show2"></future-prospect>
    <contact-us id="contactUs"></contact-us>
    <news></news>
    <vfooter></vfooter>
  </div>
</template>

<script>
import Home from './Home.vue'
import AboutUs from './AboutUs.vue'
import DluckyChain from './DluckyChain.vue'
import ProjectIntroduction from './ProjectIntroduction.vue'
import Solution from './Solution.vue'
import Our from './Our.vue'
import RoadMap from './RoadMap.vue'
import FutureProspect from './FutureProspect.vue'
import ContactUs from './ContactUs.vue'
import News from './News.vue'
import Vfooter from './Vfooter.vue'
export default {
  name: 'app',
  data(){
    return{
      show1:false,
      show2:false,
    }
  },
  mounted() {
    //输入框
    window.addEventListener('scroll', this.show, true);
  },
  methods:{
    show(){
        var scrollTop = document.documentElement.scrollTop ||     document.body.scrollTop
        if(scrollTop>2700&&!this.show1){
          this.show1=true
        }
        if(scrollTop>8300&&!this.show2){
          this.show2=true
        }
    },
  },
  components: {
    Home: () => import('./Home.vue'),
    AboutUs: () => import('./AboutUs.vue'),
    DluckyChain: () => import('./DluckyChain.vue'),
    ProjectIntroduction: () => import('./ProjectIntroduction.vue'),
    Solution: () => import('./Solution.vue'),
    Our: () => import('./Our.vue'),
    RoadMap: () => import('./RoadMap.vue'),
    FutureProspect: () => import('./FutureProspect.vue'),
    ContactUs: () => import('./ContactUs.vue'),
    News: () => import('./News.vue'),
    Vfooter: () => import('./Vfooter.vue')
  }
}
</script>

<style>

</style>
