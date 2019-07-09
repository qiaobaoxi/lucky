<template>
  <section >
    <div class="wrap">
      <h1 v-html="$t('message.contactUs')">CONTACT US</h1>
      <vline></vline>
      <div class="box">
        <div class="left">
          <ul>
            <li class="contact">
              <h4>
                <span>I</span> <em v-html="$t('message.community')"> JOIN OUR COMMUNITY</em>
              </h4>
              <ol>
                <li>
                  <img class="icon" src="../assets/twitter.png" alt="">
                  <img class="code" src="../assets/twitterCode.png" alt="../assets/twitterCode.png">
                </li>
                <li>
                  <img class="icon" src="../assets/telegram.png" alt="">
                  <img class="code" src="../assets/twitterCode.png" alt="../assets/twitterCode.png">
                </li>
                <li>
                  <img class="icon" src="../assets/github.png" alt="">
                  <img class="code" src="../assets/twitterCode.png" alt="../assets/twitterCode.png">
                </li>
                <li>
                  <img class="icon" src="../assets/in.png" alt="">
                  <img class="code" src="../assets/twitterCode.png" alt="../assets/twitterCode.png">
                </li>
                <li>
                  <img class="icon" src="../assets/fire.png" alt="">
                  <img class="code" src="../assets/twitterCode.png" alt="../assets/twitterCode.png">
                </li>
              </ol>
            </li>
            <li class="contact">
              <h4>
                <span>I</span> <em v-html="$t('message.email')"> SEND US EMAIL</em>
              </h4>
              <P>support@dlucky. one</P>
            </li>
            <li class="contact">
              <h4>
                <span>I</span> <em v-html="$t('message.information')"> INFORMATION</em>
              </h4>
              <div class="contactFuntion"><span v-html="$t('message.address')">Address:</span><a> 815 BRAZOS ST AUSTIN, TX 78701</a></div>
              <div class="contactFuntion"><span v-html="$t('message.phone')">Phone:</span><a> 323-5104660</a> </div>
            </li>
          </ul>
        </div>
        <div class="right">
             <div class="line"></div>
             <div class="customerService">
                <div class="customerServiceIcon">
                  <img src="../assets/customerService.png" alt="" srcset="">
                  <h5 v-html="$t('message.customerService')">CUSTOMER SERVICE</h5>
                </div>
             </div>
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
      background-color: #1d202f
    }
    .wrap{
      width: 1200px;
      margin: 0 auto;
      color: white;
      .box{
        display: flex;
        >div{
          flex: 1;
        }
        .right{
          position: relative;
          .line{
            position: absolute;
            top: 230px;
            left: 78px;
            height: 230px;
            width: 2px;
            border-left:2px dashed #8e9097; 
          }
          .customerServiceIcon{
            width: 100%;
            height: 188px;
            position: absolute;
            top: 0;
            // left: 252px;
            text-align: center;
            bottom: 0;
            margin: auto;
            img{
              width: 188px;
              height: 188px;
            }
            h5{
              margin: 34px 0 0 0;
              font-size: 32px;
            }
          }
        }
      }
      h1{
        font-size: 56px;
        padding: 103px 0 29px 0;
      }
      .contact{
        h4{
          font-size: 32px;
          span{
            color: #1bdeb8;
          }
        }
      }
      .contact:nth-of-type(1){
         margin: 74px  0 56px 0;
         ol{
          margin-top: 38px;
          display: flex;
          li{
            margin-left: 20px;
            position: relative;
            width: 62px;
            height: 62px;
            border-radius: 100%;
            background-color: #3f546a;
            border: 2px solid #1bdeb8;
            transition: 0.2s;
            cursor: pointer;
            .icon{
              position: absolute;
              z-index: 100;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
            }
            .code{
              position: absolute;
              top: 0;
              left: 0;
              width: 62px;
              height: 62px;
              transition: 1s;
              opacity: 0;
            }
          }
          li:hover .code{
            opacity: 1;
            top: -70px;
          }
          li:nth-of-type(1){
            .icon{
              width: 36px;
              height: 30px;
            }
          }
          li:nth-of-type(2){
            .icon{
              width: 40px;
              height: 34px;
            }
          }
          li:nth-of-type(3){
            .icon{
              width: 44px;
              height: 44px;
            }
          }
          li:nth-of-type(4){
            .icon{
              width: 36px;
              height: 36px;
            }
          }
          li:nth-of-type(5){
            .icon{
              width: 42px;
              height: 42px;
            }
          }
        }
      }
      .contact:nth-of-type(2){
        p{
          font-size: 24px;
          color: #1bdeb8;
          padding: 34px 0 0 24px;
        }
      }
      .contact:nth-of-type(3){
        padding:  36px  0 132px 0;
        .contactFuntion{
          margin-top: 32px;
          padding-left: 20px;
          span{
             font-size: 24px;
          }
          a{
            color: #1bdeb8;
            font-size: 24px;
          }
        }
      }
    }
</style>
