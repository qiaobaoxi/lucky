<template>
  <div class="hello" >
    <canvas ref="canvas" width="1600" height="600"></canvas>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  name: 'HelloWorld',
  mounted() {
    this.show();
  },
  methods:{
    show(){
        this.canvas = this.$refs.canvas;//指定canvas
        let ctx = this.canvas.getContext("2d");//设置2D渲染区域
        let dataRect=[
          [{
            x:10,
            y:10,
            w:100,
            h:50,
            c:"rgb(200,0,0)",
            r:5
          },
          {
            x:8,
            y:8,
            w:100,
            h:50,
            c:"rgba(0, 0, 200)",
            r:5
          }
          ],
          [{
            x:10,
            y:10,
            w:100,
            h:50,
            c:"rgb(200,0,0)",
            r:5
          },
          {
            x:8,
            y:8,
            w:100,
            h:50,
            c:"rgba(0, 0, 200)",
            r:5
          }
          ],[{
            x:10,
            y:10,
            w:100,
            h:50,
            c:"rgb(200,0,0)",
            r:5
          },
          {
            x:8,
            y:8,
            w:100,
            h:50,
            c:"rgba(0, 0, 200)",
            r:5
          }
          ],[{
            x:10,
            y:10,
            w:100,
            h:50,
            c:"rgb(200,0,0)",
            r:5
          },
          {
            x:8,
            y:8,
            w:100,
            h:50,
            c:"rgba(0, 0, 200)",
            r:5
          }
          ],[{
            x:10,
            y:10,
            w:100,
            h:50,
            c:"rgb(200,0,0)",
            r:5
          },
          {
            x:8,
            y:8,
            w:100,
            h:50,
            c:"rgba(0, 0, 200)",
            r:5
          }
          ],[{
            x:10,
            y:10,
            w:100,
            h:50,
            c:"rgb(200,0,0)",
            r:5
          },
          {
            x:8,
            y:8,
            w:100,
            h:50,
            c:"rgba(0, 0, 200)",
            r:5
          }
          ],[{
            x:10,
            y:10,
            w:100,
            h:50,
            c:"rgb(200,0,0)",
            r:5
          },
          {
            x:8,
            y:8,
            w:100,
            h:50,
            c:"rgba(0, 0, 200)",
            r:5
          }
          ],
        ]
        // this.rederRect(ctx,10,10,100,50,"","",5)
        for(let i=0;i<dataRect.length;i++){
          for(let j=0;j<dataRect[i].length;j++){
            this.redenRect(ctx,dataRect[i][j].x+i*200,dataRect[i][j].y,dataRect[i][j].w,dataRect[i][j].h,dataRect[i][j].c,dataRect[i][j].r)
          }
          this.redenArrow(ctx, dataRect[i][0].x+(i+1)*200, dataRect[i][0].y+25, dataRect[i][0].x+(i+1)*300,dataRect[i][0].y+25,30,30,1,'#f36');
        }
    },
    redenRect(ctx,x,y,w,h,c1,radius){
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);   
        ctx.lineTo(w - radius + x, y);   
        ctx.arc(w - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);   
        ctx.lineTo(w + x, h + y - radius);   
        ctx.arc(w - radius + x, h - radius + y, radius, 0, Math.PI * 1 / 2);   
        ctx.lineTo(radius + x, h +y);   
        ctx.arc(radius + x, h - radius + y, radius, Math.PI * 1 / 2, Math.PI);
        ctx.closePath(); 
        // ctx.strokeStyle = c1; 
        // ctx.stroke();
        ctx.fillStyle=c1;
        ctx.fill()    
    },
    redenArrow(ctx, fromX, fromY, toX, toY,theta,headlen,width,color){
         var theta = theta || 30,
            headlen = headlen || 10,
            width = width || 1,
            color = color || '#000',
            angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
            angle1 = (angle + theta) * Math.PI / 180,
            angle2 = (angle - theta) * Math.PI / 180,
            topX = headlen * Math.cos(angle1),
            topY = headlen * Math.sin(angle1),
            botX = headlen * Math.cos(angle2),
            botY = headlen * Math.sin(angle2);
        ctx.save();
        ctx.beginPath();
        var arrowX, arrowY;
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        arrowX = toX + topX;
        arrowY = toY + topY;
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(toX, toY);
        arrowX = toX + botX;
        arrowY = toY + botY;
        ctx.lineTo(arrowX, arrowY);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.restore();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
