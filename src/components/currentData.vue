<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="实时数据" left-text="返回" left-arrow>
        <van-icon name="more-o" slot="right" />
      </van-nav-bar>
      <div v-if="user.type==='household'" >
        <van-panel title="" :desc="tmepdesc+temp+'℃'" :status="status">

          <!--<div slot="footer">-->
            <!--<van-button size="small">开启</van-button>-->
            <!--<van-button size="small" type="danger">停止</van-button>-->
          <!--</div>-->
        </van-panel>
        <van-panel title="" :desc="humitdesc+humit+'%'" :status="status">

        </van-panel>
        <van-panel title="" :desc="weatherdesc+yudi" :status="status">

        </van-panel>

      </div>
      <div v-else>
        <h3 style="margin-left: 20px">温馨提示</h3>
        <p style="margin:30px">
          您不是本小区的业主，暂时无法使用此功能，请先找管理员审核身份。
        </p>
      </div>
      <v-footer></v-footer>
    </div>
</template>

<script>
  import Footer from "./Footer.vue";
    export default {
        name: "currentData",
      data(){
          return{
            status:"监控中",
            tmepdesc:"当前温度：",
            humitdesc:"当前湿度：",
            weatherdesc:"当前天气：",
            temp:"28",
            humit:"80",
            yudi:"晴",
            user:JSON.parse(localStorage.getItem("user")).data
          }
      },
      components:{
        "v-footer":Footer
      },
      mounted(){
        this.initWebpack();
      },
      methods:{
        onClickLeft(){
          this.$router.push("/");
        },
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
            if(b==0){
              this.yudi="雨天"
            }else{
              this.yudi="晴"
            }
          }

        },
        websocketclose() {  //关闭
          console.log("WebSocket关闭");
        },
        websocketerror() {  //失败
          console.log("WebSocket连接失败");
        },
        //

      }
    }
</script>

<style scoped>
  .van-cell{
    padding-top: 30px;
    font-size: 15px;

  }
  .van-cell__label {
font-size: 25px;
    width:200px;
  }
  .van-button--small{
    margin-left: 70px;

  }
  .van-cell[data-v-1ea12963]{
    padding-bottom: 30px;
  }

</style>
