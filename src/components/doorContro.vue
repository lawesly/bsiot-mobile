<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="智能门禁" left-text="返回" left-arrow>
        <van-icon name="more-o" slot="right" />
      </van-nav-bar>
      <br>
      <div v-if="user.type==='household'" style="margin-top: 150px;">

        <div @click="openClock" style="float: left;margin-left:70px;margin-right: 20px">
          <img style="width: 100px;height: 100px" src="../assets/img/open.png" alt="">
          <p>开门</p>
        </div>

        <div @click="closeClock" style="float: left;margin-left: 20px">
          <img style="width: 100px;height: 100px" src="../assets/img/clock.png" alt="">
          <p>关门</p>
        </div>
      </div>
      <div v-else>
        <h3 style="margin-left: 20px">温馨提示</h3>
        <p style="margin:30px">
          您不是本小区的业主，暂时无法使用此功能，请先找管理员审核身份。
        </p>
      </div>
      <div>
        <v-footer></v-footer>
      </div>
    </div>
</template>

<script>
  import Footer from "./Footer.vue";
  import Axios from "axios";
    export default {
        name: "doorContro",
      data(){
          return{
            user:JSON.parse(localStorage.getItem("user")).data
          }
      },
      components:{
        "v-footer":Footer
      },
      methods:{
        onClickLeft(){
          this.$router.push("/");
        },
        closeClock(){
          var api="http://39.108.106.29:8088/mobile/v1/admin/usrCloud/unClock"
          Axios({
            method:"post",
            url:api,
            data:{},
          }).then((res)=>{
            alert("上锁成功")
          }).catch((error)=>{
            alert("上锁失败")
          })
        },
        //    开锁
        openClock(){
          var api="http://39.108.106.29:8088/mobile/v1/admin/usrCloud/onClock"
          Axios({
            method:"post",
            url:api,
            data:{},
          }).then((res)=>{
            alert("开锁成功")
          }).catch((error)=>{
            alert("开锁失败")
          })
        }

      }
    }
</script>

<style scoped>

</style>
