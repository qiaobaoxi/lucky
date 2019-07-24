<template>
    <section>
        <img v-lazy="require('../assets/logo.png')" alt="">
        <ul>
          <li v-for="(item,index) in menus">
            <input type="radio" name="menu" :id="index" :checked="index===selectMenu?true:fasle">
            <label :for="index">
              <a :href="item.toTarget" @click="selectMenuFn(index)">{{item.val}}</a>
              <span></span>
            </label>
          </li>
        </ul>
        <div class="languase">
          <input type="radio" name="lan" id="English" checked>
          <label for="English" @click="switchLanguage(0)" >English</label>
          <em></em>
          <input type="radio" name="lan" id="chinese">
          <label for="chinese"  @click="switchLanguage(1)" >中文</label>
        </div>
    </section>
</template>
<script>
export default {
  name: 'Home',
  data(){
    return{
      menus:[
        {
          val:this.$t('message.menuHome'),
          toTarget:"",
        },
        {
         val:this.$t('message.menuWhitePaper'),
         toTarget:"#whitePaper", 
        },
        {
         val:this.$t('message.menuSolution'),
         toTarget:"#solution", 
        },
        {
         val:this.$t('message.menuTeam'),
         toTarget:"#team", 
        },
        {
         val:this.$t('message.menuPartner'),
         toTarget:"#companies", 
        },
        {
         val:this.$t('message.menuContactUs'),
         toTarget:"#contactUs", 
        }
      ],
      toTarget:[
        "javascript:;",
        "#whitePaper",
        "#team",
        "#companies",
        "#contactUs",
        "javascript:;"
      ],
      selectLan:0,
      selectMenu:0
    }
  },
  mounted() {
  },
  methods:{
    show(){
      
    },
    selectMenuFn(i){
      this.selectMenu=i
      if(i===2){
        this.$router.push("/news")
      }
    },
    //切换语言
    switchLanguage(n){
      this.$i18n.locale = n===0?'en':"cn"
      this.$set(this.menus,0,{
          val:this.$t('message.menuHome'),
          toTarget:"",
        });
      this.$set(this.menus,1,{
         val:this.$t('message.menuWhitePaper'),
         toTarget:"#whitePaper", 
        });
      this.$set(this.menus,2,{
         val:this.$t('message.menuSolution'),
         toTarget:"#solution", 
        });
      this.$set(this.menus,3,{
         val:this.$t('message.menuTeam'),
         toTarget:"#team", 
        });
      this.$set(this.menus,4, {
         val:this.$t('message.menuPartner'),
         toTarget:"#companies", 
        });
      this.$set(this.menus,5,{
         val:this.$t('message.menuContactUs'),
         toTarget:"#contactUs", 
        });
    }
  },
  watch:{
   
  }
}
</script>

<style lang="less" scoped>
        section{
          display: flex;
          justify-content: center;
          height: 54px;
          text-align: center;
        }
        img{
            width: 164px;
            height: 52px;
            margin-right: 70px;
        }
        ul{
          width:850px;
          display: flex;
          li{
            position: relative;
            padding: 0 20px;
            height: 54px;
            line-height: 54px;
            color: white;
            font-size: 22px;
            label{
              cursor: pointer;
              display: block;
              a{
                text-decoration:none;
                color: white;
              }
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
                a{
                   color: #1bdeb8;
                }
                span{
                  display: block;
                }
              }
          }
        }
        .languase{
          width: 150px;
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
        input{
            display: none;
        }
</style>

