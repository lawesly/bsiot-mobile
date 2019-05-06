<template>
    <div>
      <div>
        <mt-header fixed title="双林物业" style="font-size: 25px" ></mt-header>
      </div><br>
      <div id="swipediv" style="height: 180px;">
        <mt-swipe :show-indicators="false" auto="5000">
          <mt-swipe-item >
            <img src="../assets/img/ad1.png">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/img/ad2.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/img/ad3.jpg">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/img/ad4.jpg">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div style="height: 20px;margin-top: 5px">
        <mt-swipe :show-indicators="false" style="text-align: center" >
          <!--<mt-swipe-item>-->
            <!--<a>小林物业祝广大业主新年快乐</a>-->
          <!--</mt-swipe-item>-->
          <mt-swipe-item>
            <a>关于小区明日停水通知</a>
          </mt-swipe-item>
          <mt-swipe-item v-if="this.temp>'28'">
            <a>当前温度为{{temp}},已超过28度，请业主们多加注意</a>
          </mt-swipe-item>
          <mt-swipe-item v-if="this.humit>'90'">
            <a>当前湿度为{{humit}}已经超过90，请业主们多加注意</a>
          </mt-swipe-item>
          <!--<mt-swipe-item>-->
            <!--<a>关于构建文明社区一文通知</a>-->
          <!--</mt-swipe-item>-->
        </mt-swipe>
      </div>
      <hr>
      <div id="menudiv">
       <table>
         <tr>
           <td>
             <router-link to="/postCardData">
               <img src="../assets/img/icon1.png">
               <p>滴卡记录</p>
             </router-link>
           </td>
           <td>
             <router-link to="/doorContro">
               <img src="../assets/img/icon2.png">
               <p>智能门禁</p>
             </router-link>
           </td>
           <td>
             <router-link to="/msgList">
               <img src="../assets/img/icon3.png">
               <p>信息公告</p>
             </router-link>
           </td>
           <td>
             <router-link to="/repairMenu">
               <img src="../assets/img/icon4.png">
               <p>实时报修</p>
             </router-link>
           </td>
         </tr>
         <tr>
           <td>
             <a href="#">
               <!--晴天-->
               <img v-if="weatherStatus==='1'" src="../assets/img/qt.png">
               <!--潮湿-->
               <img v-if="weatherStatus==='2'" src="../assets/img/cx.png">
               <!--高温-->
               <img v-if="weatherStatus==='3'" src="../assets/img/gr.png">
               <!--高温雨天-->
               <img v-if="weatherStatus==='4'" src="../assets/img/gy.png">
               <!--雨天-->
               <img v-if="weatherStatus==='5'" src="../assets/img/yt.png">
               <p>实时天气</p>
               <p></p>
             </a>
           </td>
           <td>
             <router-link to="/currentData">
               <img src="../assets/img/icon6.png">
               <p>环境数据</p>
             </router-link>
           </td>
           <td>
             <router-link to="/repairOrder">
               <img src="../assets/img/icon8.png">
               <p>上门报修</p>
             </router-link>
           </td>
           <td>
             <a href="#">
               <img src="../assets/img/icon7.png">
               <p>更多</p>
             </a>
           </td>
         </tr>
       </table>
      </div>
      <hr>
      <div>
        <span>热门动态</span>
        <hr>
            <!--<div v-for="item in list" id="flexdiv">-->
              <!--<div style="display: flex">-->
                <!--<span style="flex: 1;">#丢失物品</span>-->
                <!--<span style="flex: 1;font-size: 12px">2019-02-14 14:09:00</span>-->
              <!--</div>-->
              <!--<div style="display: flex">-->
                <!--<span style="flex: 1;"><img src="../assets/img/head.png" style="height: 50px;width: 50px;"></span>-->
                <!--<span style="flex: 2;">小区门口捡到一部手机<br><a style="font-size: 12px">共有0条评论</a></span>-->
              <!--</div>-->
              <!--<hr>-->
            <!--</div>-->
        <div v-for="(item,key) in dynamic" id="flexdiv">
          <div style="display: flex">
            <span style="flex: 1;">#{{item.title}}</span>
            <span style="flex: 1;font-size: 12px">{{item.createdAt}}</span>
          </div>
          <div style="display: flex">
            <span style="flex: 1;"><img :src="item.userImgUrl" style="height: 50px;width: 50px;"></span>
            <span style="flex: 2;">{{item.content}}<br><a style="font-size: 12px">共有{{item.commentCount}}条评论</a></span>
          </div>
          <hr>
        </div>
      </div>
      <div>
        <v-footer></v-footer>
      </div>
    </div>
</template>

<script>
     import Axios from "axios";
    import Footer from "./Footer.vue";
    export default {
      data(){
        return{
          list:[1,2,3],
          falg:"",
          humit:"90",
          temp:"27",
          yudi:"1",
          weatherStatus:"1",
          dynamic:""
        }

      },
      mounted(){
        this.initWebpack();
        this.showDynamicList();
      },
      methods: {
        initWebpack() {//初始化websocket
          const wsuri = "ws://39.108.106.29:8088/ws/websocket";
          this.websock = new WebSocket("ws://39.108.106.29:8088/mobile/ws/websocket");//这里面的this都指向vue
          this.websock.onopen = this.websocketopen;
          this.websock.onmessage = this.websocketonmessage;
          this.websock.onclose = this.websocketclose;
          this.websock.onerror = this.websocketerror;
        },
        websocketopen() {//打开
          console.log("WebSocket连接成功")
        },
        websocketonmessage(e) { //数据接收
          console.log(e);
          var a=e.data;
          if(a.indexOf("#")>-1){
            var b=a.replace("#","");
            this.humit=b;
          }
          if(a.indexOf("@")>-1){
            var b=a.replace("@","");
            this.temp=b;
          }
          if(a.indexOf("$")>-1){
            var b=a.replace("$","");
            this.yudi=b;
            // alert(this.yudi)
          }
          this.judgeWeather();
        },
        websocketclose() {  //关闭
          console.log("WebSocket关闭");
        },
        websocketerror() {  //失败
          console.log("WebSocket连接失败");
        },
        //判断天气函数
        judgeWeather(){
          //高温
          if(this.temp>=28){
              if(this.humit<90&&this.yudi===1){
                this.weatherStatus="3";
              }
          }
          //潮湿
          if(this.humit>90&&this.temp<28&&this.yudi==1){
            this.weatherStatus="2";
          }
          //下雨
          if(this.yudi==0){
            //高温雨天
            if(this.temp>28){
              this.weatherStatus="4";
            }
            //普通雨天
            if(this.temp<28){
              this.weatherStatus="5";
            }
          }
        },
        //获取评论列表
        showDynamicList(){
          var api="http://39.108.106.29:8088/mobile/api/dynamic/list";
          // var api="http://localhost:8088/mobile/api/dynamic/list";
          Axios.get(api).then((res)=>{
            this.dynamic=res.data.data;
          }).catch((error)=>{
            alert("显示失败，请重新刷新页面");
          })
        },
      },
      components:{
          "v-footer":Footer
      }

    }
</script>

<style scoped>
#swipediv img{
  width: 100%;
  height: 180px;
  border-radius: 5px;
}
#menudiv{
  border: solid 1px;
  height: 180px;
}
#menudiv img{
  text-align: center;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  display: block;
}
#menudiv td{
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;

    /*padding-top: 10px;*/
    /*padding-left: 15px;*/
    /*padding-right: 15px;*/

    height: 45px;
  width: 70px;
  }
 #menudiv p{
   margin-bottom: 0px;
   margin-top: 0px;
   font-size: 12px;
 }
#flexdiv{
  /*display: flex;*/
}

</style>
