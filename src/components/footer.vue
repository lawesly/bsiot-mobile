<template>
    <div>
      <!--<mt-tabbar v-model="selected" fixed="true">-->
        <!--<mt-tab-item id="home">-->
          <!--<img slot="icon" src="../assets/img/button1.png">-->
          <!--首页-->
        <!--</mt-tab-item>-->
        <!--<mt-tab-item id="login">-->
          <!--<img slot="icon" src="../assets/img/button2.png">-->
          <!--实时数据-->
        <!--</mt-tab-item>-->
        <!--<mt-tab-item id="register">-->
          <!--<img slot="icon" src="../assets/img/button3.png">-->
          <!--小区动态-->
        <!--</mt-tab-item>-->
        <!--<mt-tab-item id="member">-->
          <!--<img slot="icon" src="../assets/img/button4.png">-->
          <!--个人中心-->
        <!--</mt-tab-item>-->
      <!--</mt-tabbar>-->
      <van-tabbar  v-model="active"  >
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="search"><a href="http://39.108.106.29:8088/mobile/nbiot/demo">实时数据</a></van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/dynamic" >小区动态</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/member">个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
  import Axios from "axios";
    export default {
        name: "footer",
      data(){
        return{
          // selected:"home"
          active:0
        }
      },
      methods:{

      },
      // watch:{
      //   selected:function (val,oldval) {
      //     switch (val) {
      //       case "login":
      //         this.$router.push("/login");
      //         break;
      //       case "register":
      //         this.$router.push("/register");
      //         break;
      //       case "member":
      //         this.$router.push("/member");
      //         break;
      //     }
      //
      //     }
      // }
    }
</script>

<style scoped>

</style>
