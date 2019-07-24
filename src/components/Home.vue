<template>
  <section >
    <div class="menus">
      <div class="wrap">
        <vmenu></vmenu>
      </div>
    </div>
    <div class="seach">
      <input type="text">
      <a>
        <img v-lazy="require('../assets/seach.png')" alt="" srcset="">
      </a>
    </div>
    <el-carousel height="910px" class="carousel">
      <el-carousel-item v-for="item in scrollChart" >
        <img v-lazy="item" alt="" >
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
import Vmenu from "./Menu"
export default {
  name: 'Home',
  data(){
    return{
      scrollChart:[
        require("../assets/scrollChart1.png"),
        require("../assets/scrollChart2.png"),
      ],
      n:-1
    }
  },
  mounted() {
  },
  computed:{
    a:{
      get(){
        console.log(11)
        this.n++
        return this.$t('message.menuHome');
      }
    }
  },
  methods:{
    show(){
      
    },
    selectMenuFn(i){
      this.selectMenu=i
    },
  },
  watch:{
    a(){
           //滚动图切换
     this.scrollChart=this.n%2===0?[
        require("../assets/scrollChart1.png"),
        require("../assets/scrollChart2.png"),
      ]:[require("../assets/scrollChart3.png"),
        require("../assets/scrollChart4.png")]
    }
  },
  components:{
    Vmenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      position: relative;
      height: 912px;
      overflow: hidden;
    }
    .wrap{
      width: 1200px;   
    } 
    .menus{
      position: relative;
      display: flex;
      justify-content: center;
      .wrap{
        padding-top: 28px;
        position: relative;
        z-index: 100;
      }
    }
    .seach{
      width: 400px;
      height: 40px;
      position: absolute;
      left: 0;
      top: 516px;
      right: 0;
      margin: auto;
      z-index: 1000;
      input{
        padding: 0 10px;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: none;
        outline: none;
      }
      a{
        cursor: pointer;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        top: 0;
        bottom: 0;
        margin: auto;
        img{
          width: 30px;
          height: 30px;
        }
      }
    }
    .carousel{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      z-index: 1;
      img{
        width: 100%;
        height: 910px;
      } 
    }
</style>
