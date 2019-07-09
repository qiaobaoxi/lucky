<template>
  <section >
    <div class="menus">
      <div class="wrap">
        <img src="../assets/logo.png" alt="">
        <ul>
          <li v-for="(item,index) in menus">
            <input type="radio" name="menu" :id="index" :checked="index===0?true:fasle">
            <label :for="index">
              {{item}}
              <span></span>
            </label>
          </li>
        </ul>
        <div class="languase">
          <input type="radio" name="lan" id="English" checked>
          <label for="English" @click="switchLanguage(0)" v-html="$t('message.languangeEn')">English</label>
          <em></em>
          <input type="radio" name="lan" id="chinese">
          <label for="chinese"  @click="switchLanguage(1)" v-html="$t('message.languangeCn')">chinese</label>
        </div>
      </div>
    </div>
    <div class="seach">
      <input type="text">
      <a>
        <img src="../assets/seach.png" alt="" srcset="">
      </a>
    </div>
    <el-carousel height="910px" class="carousel">
      <el-carousel-item v-for="item in scrollChart" >
        <img :src="item" alt="" >
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      scrollChart:[
        require("../assets/scrollChart1.png"),
        require("../assets/scrollChart2.png"),
        require("../assets/scrollChart3.png")
      ],
      menus:[
        this.$t('message.home'),
        this.$t('message.whitePaper'),
        this.$t('message.newsTitle')
      ],
      selectLan:0
    }
  },
  mounted() {
  },
  methods:{
    show(){
      
    },
    switchLanguage(n){
      this.$i18n.locale = n===0?'en':"cn"
      this.$set(this.menus,0,this.$t('message.home'));
      this.$set(this.menus,1,this.$t('message.whitePaper'));
      this.$set(this.menus,2,this.$t('message.newsTitle'));
    }
  },
  watch:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      position: relative;
      height: 910px;
    }
    .wrap{
      width: 1200px;   
    } 
    .menus{
      position: relative;
      display: flex;
      justify-content: center;
      .wrap{
        display: flex;
        padding-top: 28px;
        img{
          margin-right: 70px;
        }
        ul{
          width:630px;
          display: flex;
          li{
            position: relative;
            flex: 1;
            margin: 0 35px;
            height: 54px;
            line-height: 54px;
            color: white;
            font-size: 22px;
            label{
              cursor: pointer;
              display: block;
            }
            span{
              display: none;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              width: 14px;
              height: 2px;
              background-color:#1bdeb8;
            }
              
              input:checked+label{
                color: #1bdeb8;
                span{
                  display: block;
                }
              }
          }
        }
        .languase{
          height: 54px;
          line-height: 54px;
          label{
            padding: 0 14px;
            color: #72777c;
          }
          input:checked+label{
             color: #1bdeb8;
          }
          em{
            display: inline-block;
            height: 12px;
            width: 2px;
            background-color: white;
          }
        }
      }
      input{
        display: none;
      }
      text-align: center;
      position: relative;
      z-index: 100;
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
        height: 100%;
      } 
    }
</style>
