<template>
  <section>
    <div class="wrap">
      <h1 v-html="$t('message.projectIntroduction')">
        Project <br> Introduction
      </h1>
      <vline></vline>
      <p v-html="$t('message.introduction1')">
        DLucky Chain is a global project initiated by DOUBLE LUCKY BIOPHARMACEUTICAL LTD, focusing on the pharmaceutical industry. It is atraceability application developed based on EOS technical standards, and USES the irreversible distributed ledger record feature of block Chain to solve the problems of information traceability, anti-foraging and authenticity in the process of raw material warehousing production and consumption in the industry.
      </p>
      <p v-html="$t('message.introduction2')">
        Therefore, in October 2018, the company took control of a pharmaceutica company(which was mainly engaged in the research and development and production of periplaneta Americana related products), took the pharmaceutical company as the first application scenario, and started the research and development of block chain traceability technology combined with production equipment and production line.
      </p>
      <h2>
        <img v-lazy="require('../assets/download.png')" alt="" srcset=""><span v-html="$t('message.downloadWhitePaper')">Download White Paper</span>
      </h2>
      <div class="btn">
        <a @click="downloadEnglish" v-html="$t('message.englishVersion')">English version</a><a @click="downloadChinese" v-html="$t('message.chineseVersion')">Chinese version</a>
      </div>
    </div>
  </section>
</template>

<script>
import Vline from "./utilCom/line"
import { download } from "vue-downloader";
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  mounted() {
  },
  methods:{
    show(){
      
    },
    downloadEnglish(){
        download(require("../assets/DLucky-Chain-White-Paper-V3.0-190705.pdf"), "DLucky-Chain-White-Paper-V3.0-190705.pdf");
    },
    downloadChinese(){
        download(require("../assets/DLucky-Chain-白皮书-V3.0-190705.pdf"), "DLucky-Chain-白皮书-V3.0-190705.pdf");
    }
  },
  components:{
    Vline
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      background-image: url("../assets/project.png");
      background-size: 100% 100%;
      .wrap{
        width: 1200px;
        margin: 0 auto;
        color:white;
      }
      h1{
        font-size: 56px;
        padding: 103px 0 29px 0;
      }
      p{
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 32px;
      }
      p:nth-of-type(1){
        margin-top: 20px;
      }
      h2{
        padding: 74px 0 30px 0;
        font-size: 28px;
        color: #1bdeb8;
        img{
          margin-right: 14px;
          width: 20px;
          height: 22px;
        }
      }
      .btn{
        padding-bottom: 104px;
        a{
          margin-right: 56px;
          display: inline-block;
          width: 236px;
          height: 52px;
          border: 1px solid #1bdeb8;
          text-align: center;
          line-height: 52px;
          font-size: 24px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
</style>
