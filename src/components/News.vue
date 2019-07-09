<template>
  <section >
    <div class="wrap">
      <h1 v-html="$t('message.news')">NEWS</h1>
      <vline></vline>
      <div class="box">
          <ul>
            <li v-for="item in newsDaa">
              <a>
                <div class="title">
                  <span></span><h2>{{item.title}}</h2><em>{{item.date}}</em>
                </div>  
                <div class="contect">
                  <p>{{item.contect}}</p><img class="img" src="../assets/newsArrow.png" alt="" srcset="">
                </div> 
              </a>
            </li>
          </ul>
          <div class="pageWrap">
              <el-pagination
                class="page"
                background
                layout="prev, pager, next"
                :total="newsDaa.length">
              </el-pagination> 
          </div>
      </div> 
    </div>
  </section>
</template>

<script>
import Vline from "./utilCom/line"
export default {
  name: 'Home',
  data(){
    return{
        newsDaa:[
          {
            title:"Or send us email",
            contect:"Shandong university,majoring in biological engineering Dessert Zhendong pharmaceutical Co",
            date:"6-27",
            link:""
          },
          {
            title:"Or send us email",
            contect:"Shandong university,majoring in biological engineering Dessert Zhendong pharmaceutical Co",
            date:"6-27",
            link:""
          },
          {
            title:"Or send us email",
            contect:"Shandong university,majoring in biological engineering Dessert Zhendong pharmaceutical Co",
            date:"6-27",
            link:""
          }
        ]
    }
  },
  mounted() {
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
      background-color: #181c2b;
      h1{
        font-size: 56px;
        padding: 103px 0 29px 0;
      }
    }
    .wrap{
      width: 1200px;
      margin: 0 auto;
      color: white;
      ul{
        margin-top: 24px;
        overflow: hidden;
        li{
          padding: 40px 0;
          float: left;
          width: 50%;
          .title{
            display: flex;
            align-items: center;
            span{
              margin: 0 22px 0 8px; 
              display: inline-block;
              width: 6px;
              height: 6px;
              background-color: white;
              border-radius: 100%;
            }
            h2{
              font-size: 28px;
              width: 420px;
            }
            em{
              margin-left: 24px;
              font-size: 24px;
            }
          }
          .contect{
            display: flex;
            align-items: center;
            p{
              margin:16px 0 0 36px;
              font-size: 16px;
              width: 420px;
              height: 48px;
              line-height: 24px;
            }
            img{
              margin: 16px 0 0 42px;
              width: 40px;
              height: 22px;
              opacity: 0;
            }
          }
        }
      }
      li:hover h2{
         color: #1bdeb8;
      }
      li:hover .img{
        opacity: 1;
      }
      li:not(:last-of-type){
        border-bottom: 1px solid #5e616b;
      }
      .pageWrap{
        padding: 10px 76px;
        text-align: center;
        // .page{
        //   button{background-color: #1bdeb8;}
        // }
      }
    }
</style>
