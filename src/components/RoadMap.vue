<template>
  <section >
    <h1 v-html="$t('message.roadMap')">ROAD MAP</h1>
    <vline></vline>
    <div ref="ulWrap" class="ulWrap">
      <ul ref="ul">
          <li v-for="(item,index) in roadMapData">
            <div v-for="(year,key) in item" class="wrap">
                <div :class="index%2===0?'year':'year1'" class="animateYear">{{key}}</div>
                <ol class="list">
                  <li v-for="month in year" :class="month.num===0?'month':'month1'" class="animateYear">
                    <h5>{{month.month}}</h5>
                    <div class="year2">{{key}}</div>
                  </li>
                </ol>
                <ol class="list1">
                  <li v-for="month in year" :class="month.num===0?'border month':'border1 month1'" class="animateYear1">
                    <p class="animateYear2" :class="month.num===0?'month':'month1'">{{month.content}}</p>
                    <span class="point"></span>
                  </li>
                </ol>
                <div class="line animateYear1"></div>
            </div>
          </li>
      </ul>
    </div>
    <div class="btn">
        <div><a @click="leftFN"></a></div><div><a @click="rightFN"></a></div>        
    </div>
  </section>
</template>

<script>
import Vline from "./utilCom/line"
export default {
  name: 'Home',
  data(){
    return{
      roadMapData:[],
      month:[0,1,2,3,4,5,6,7,8,9,10,11],
      num:0,
      scrollNum:0,
      wNum:6,
      scrollDistance:0,
    }
  },
  computed:{
    engMonth(){
      return this.$t('message.month').split(',');
    }
  },
  mounted() {
    this.init();
  },
  methods:{
    init(){
        let roadMapData=[
                {
                2017:[{
                  month:7,
                  content:this.$t('message.y20177')
                },{
                  month:11,
                  content:this.$t('message.y201711')
                }]
                },
                {
                2018:[
                  {
                  month:0,
                  content:this.$t('message.y20180')
                },{
                  month:3,
                  content:this.$t('message.y20183')
                },{
                  month:9,
                  content:this.$t('message.y20189')
                },{
                  month:10,
                  content:this.$t('message.y201810')
                },{
                  month:11,
                  content:this.$t('message.y201811')
                }]
                },
                {
                2019:[{
                  month:0,
                  content:this.$t('message.y20190')
                },{
                  month:1,
                  content:this.$t('message.y20191')
                },{
                  month:3,
                  content:this.$t('message.y20193')
                },{
                  month:4,
                  content:this.$t('message.y20194')
                },{
                  month:5,
                  content:this.$t('message.y20195')
                },{
                  month:7,
                  content:this.$t('message.y20197')
                },{
                  month:9,
                  content:this.$t('message.y20199')
                },{
                  month:10,
                  content:this.$t('message.y201910')
                },{
                  month:11,
                  content:this.$t('message.y201911')
                }]
                },
                {
                2020:[{
                  month:0,
                  content:this.$t('message.y20200')
                },{
                  month:2,
                  content:this.$t('message.y20202')
                },{
                  month:3,
                  content:this.$t('message.y20203')
                },{
                  month:4,
                  content:this.$t('message.y20204')
                },{
                  month:6,
                  content:this.$t('message.y20206')
                }]
                }
        ]
        this.contrast(roadMapData);
    },
    contrast(roadMapData){
        for(let i=0;i<roadMapData.length;i++){
            for(let key in roadMapData[i]){
                let data=roadMapData[i][key].sort((a,b)=>{
                   if(a.month>b.month){
                     return 1; 
                   }else if(a===b){
                     return 0;
                   }else{
                     return -1
                   }
                });
                let newData=data.map((item)=>{
                  this.num++;
                  let nowDate = new Date();
                  let now = new Date(nowDate.getFullYear()+'-'+nowDate.getMonth());
                  let contrastTime = new Date(key+'-'+(item.month+1));
                  if(now.getTime()>contrastTime.getTime()){
                    // item.border="2px solid #a6a6a6"
                    item.num=0
                    
                  }else{
                    // item.border="2px solid #323232"
                    item.num=1
                  }
                  item.month=this.engMonth[item.month];
                  return item;
                })
                roadMapData[i][key]=newData;
                this.roadMapData=roadMapData;
        }
      }
      this.scrollNum=this.num-this.wNum;
    },
    leftFN(){
      let ul=this.$refs.ul;
      if(this.scrollDistance>0){
        this.scrollDistance-=200;
        ul.style.transform=`translateX(-${this.scrollDistance}px)` 
      }
    },
    rightFN(){
      let ul=this.$refs.ul;
      if(this.scrollDistance<this.scrollNum*200){
        this.scrollDistance+=200;
        ul.style.transform=`translateX(-${this.scrollDistance}px)` 
      }
    }
  },
  components:{
    Vline
  },
  watch:{
    engMonth(){
      this.init();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    section{
      width: 1200px;
      height: 769px;
      margin: 0 auto;
      h1{
        padding: 66px 0 30px 0;
        font-size: 60px;
        color: #323232; 
      }
      .ulWrap{
        margin-top: 74px;
        width: 1200px;
        overflow: hidden;
      }
      ul{
        display: flex;
        transition: 1s;
        .year{
          padding:0 30px 30px 0;
          padding-right: 30px;
          text-align: right;
          font-size: 36px;
          color: #c6c6c6;
        }
        .year1{
          padding:0 30px 30px 0;
          text-align: left;
          font-size: 36px;
          color: #c6c6c6;
        }
        
      }
      .wrap{
        position: relative;
        .line{
          position: absolute;
          right: 15px;
          top: 0;
          background-color: #eeeeee;
          width: 2px;
          height: 300px;
        }
      }
      .list{
        display: flex;
        .month{
          color: #999999
        }
        .month1{
          color: #323232
        }
        li{
          width: 200px;
          h5{
            font-size: 36px;
          }
          .year2{
            margin: 16px 0;
            font-size: 18px;
          }
        }
      }
      .list1{
        display: flex;
        .border{
          border-top:2px solid #a6a6a6
        }
        .border1{
          border-top:2px solid #323232
        }
        .month{
          color: #999999
        }
        .month1{
          color: #323232
        }
        li{
          position: relative;
          width: 200px;
          h5{
            font-size: 36px;
          }
          .year2{
            margin: 16px 0;
            font-size: 18px;
          }
          p{
            padding-top: 30px;
            font-size: 16px;
            color: #999999;
            line-height: 22px;
          }
          .point{
            position: absolute;
            top: -3px;
            left: -18px;
            width: 4px;
            height: 4px;
            background-color: #a6a6a6;
          }
        }
      }
      @keyframes animateYear
        {
          0%   {
              opacity: 0;
              transform: translateX(100px)
          }
          100% {
              opacity: 1;
              transform: translateX(0)
          }
        }

        @-moz-keyframes animateYear /* Firefox */
        {
         0%   {
              opacity: 0;
              transform: translateX(100px)
          }
        
          100% {
              opacity: 1;
              transform: translateX(0)
          }
        }

        @-webkit-keyframes animateYear /* Safari 和 Chrome */
        {
          0%   {
              opacity: 0;
              transform: translateX(100px)
          }
         
          100% {
              opacity: 1;
              transform: translateX(0)
          }
        }

        @-o-keyframes animateYear /* Opera */
        {
          0%   {
            opacity: 0;
            transform: translateX(100px)
          }
       
          100% {
              opacity: 1;
              transform: translateX(0)
          }
        }
        @keyframes animateYear1
        {
          0%   {
              opacity: 0;
              transform: translateX(-100px)
          }
          100% {
              opacity: 1;
              transform: translateX(0)
          }
        }

        @-moz-keyframes animateYear1 /* Firefox */
        {
          0%   {
              opacity: 0;
              transform: translateX(-100px)
          }
          100% {
              opacity: 1;
              transform: translateX(0)
          }
        }

        @-webkit-keyframes animateYear1 /* Safari 和 Chrome */
        {
           0%   {
              opacity: 0;
              transform: translateX(-100px)
          }
          100% {
              opacity: 1;
              transform: translateX(0)
          }
        }

        @-o-keyframes animateYear1 /* Opera */
        {
           0%   {
              opacity: 0;
              transform: translateX(-100px)
          }
          100% {
              opacity: 1;
              transform: translateX(0)
          }
        }
        @keyframes animateYear2
        {
          0%   {
              opacity: 0;
              transform: translateY(50px)
          }
          100% {
              opacity: 1;
              transform: translateY(0)
          }
        }

        @-moz-keyframes animateYear2 /* Firefox */
        {
         0%   {
              opacity: 0;
              transform: translateY(50px)
          }
        
          100% {
              opacity: 1;
              transform: translateY(0)
          }
        }

        @-webkit-keyframes animateYear2 /* Safari 和 Chrome */
        {
          0%   {
              opacity: 0;
              transform: translateY(50px)
          }
         
          100% {
              opacity: 1;
              transform: translateY(0)
          }
        }

        @-o-keyframes animateYear2 /* Opera */
        {
          0%   {
            opacity: 0;
            transform: translateY(50px)
          }
       
          100% {
              opacity: 1;
              transform: translateY(0)
          }
        }
        .animateYear
        {
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -o-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        animation: animateYear 1s ease;
        -moz-animation: animateYear 1s ease;	/* Firefox */
        -webkit-animation: animateYear 1s ease;	/* Safari 和 Chrome */
        -o-animation: animateYear 1s ease;	/* Opera */
        }
        .animateYear1{
          -webkit-transform: translate3d(0,0,0);
          -moz-transform: translate3d(0,0,0);
          -ms-transform: translate3d(0,0,0);
          -o-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
          animation: animateYear1 1s ease;
          -moz-animation: animateYear1 1s ease;	/* Firefox */
          -webkit-animation: animateYear1 1s ease;	/* Safari 和 Chrome */
          -o-animation: animateYear1 1s ease;
        }
         .animateYear2{
           opacity: 0;
          -webkit-transform: translate3d(0,0,0);
          -moz-transform: translate3d(0,0,0);
          -ms-transform: translate3d(0,0,0);
          -o-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
          animation: animateYear2 0.8s 1s ease;
          -moz-animation: animateYear2 0.8s 1s ease;	/* Firefox */
          -webkit-animation: animateYear2 0.8s 1s ease;	/* Safari 和 Chrome */
          -o-animation: animateYear2 0.8s 1s ease;
          animation-fill-mode : forwards 
        }
        .btn{
          margin-top: 50px;
          display: flex;
          >div{
            flex: 1;
            a{
              display: inline-block;
              width: 88px;
              height: 88px;
              border-radius: 100%;
              box-shadow: 0 0 2px #91939a;
            }
          }
          div:nth-of-type(1){
            text-align: right;
            a{
              margin-right: 60px;
              background: url("../assets/leftArrow.png") no-repeat 26px 29px;
            }
          }
           div:nth-of-type(2){
            a{
              background: url("../assets/rightArrow.png") no-repeat 26px 29px;
            }
          }
        }
    }
</style>
