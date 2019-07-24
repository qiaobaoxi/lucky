<template>
  <section >
    <div class="left">
      <h1  v-html="$t('message.aboutUs')">ABOUT US</h1>
      <vline></vline>
      <h2 >DOUBLE LUCKY BIOPHARMACEUTICAL LTD</h2>
      <h3 v-html="$t('message.conpany')">AN AMERICAN BIOPHARMACEUTICAL TECHNOLOGY TECHNOLOGY COMPANY</h3>
      <p v-html="$t('message.originator')">The initiator of the Dlucky Chain project, the company tookcontrol of a pharmaceutical company in mainland China inOctober 2018.</p>
      <!-- <p v-html="$t('message.des')">(mainly engaged in the research and development and production of periplaneta Americana products)Taking this pharmaceutical company as the first applicationscenario, start the research and development of block chain.traceability technology combined with production equipmentand production line.</p> -->
    </div>
    <div class="right">
      <el-carousel height="466px" class="carousel">
        <el-carousel-item v-for="item in scrollChart" >
          <img v-lazy="item" alt="" >
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

<script>
import Vline from "./utilCom/line"
export default {
  name: 'Home',
  data(){
    return{
      scrollChart:[
        require("../assets/aboutUs1.jpg"),
        require("../assets/aboutUs2.jpg"),
        require("../assets/aboutUs3.jpg"),
        require("../assets/aboutUs4.jpg"),
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.show, true);
  },
  methods:{
    show(){
      
    },
  },
  components:{
    Vline
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      width: 1200px;
      margin: 0 auto;
      padding:120px 0 160px 0;
      display: flex;
      .left{
        width: 686px;
      }
      h1{
        padding: 66px 0 30px 0;
        font-size: 60px;
        color: #323232; 
      }
      h2{
        font-size: 28px;
        margin-top: 20px;
      }
      h2,h3{
        padding: 12px 0;
        color: #323232;
      }
      h3{
        font-size: 17px;
        margin-bottom: 42px;
      }
      p{
        line-height: 30px;
        font-size: 18px;
        color: #999999;
      }
      p:nth-of-type(2){
        margin: 26px 0 120px 0;
      }
      .right{
        margin: 50px 0 0 104px;
        flex: 1;
        .carousel,img{
          width: 372px;
          height: 466px;
        }
      } 
    }
</style>
