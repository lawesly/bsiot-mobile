<template>
<div>
  <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="报修中心" left-text="返回" left-arrow>
    <van-icon name="more-o" slot="right" />
  </van-nav-bar>
  <div id="div2">
    <h2 style="margin-left: 5px">致广大业主：</h2>
    <h3 style="margin: 5px">业主请按规定填写相关申请信息，提交申请后物业部门会尽快安排相关维修师傅上门维修。
      也请各位业主请真实填写相关信息，避免资源浪费。</h3>
    <h4 style="float: right">谢谢合作！</h4>
  </div>
  <hr>
  <div id="div1">
    <van-row type="flex" justify="space-around">
      <van-col span="6">
        <router-link to="/repair">
          <img src="../assets/img/提交报修.png"><br>
          <span>申请报修</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/Inrepairing">
        <img src="../assets/img/进行中.png"><br>
        <span>进行中ing</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <img src="../assets/img/记录.png"><br>
        <span>历史记录</span>
      </van-col>

    </van-row>
    <br>
    <van-row type="flex" justify="space-around">
      <van-col span="6">
        <img src="../assets/img/评价-好评.png"><br>
        <span>服务评价</span>
      </van-col>
      <van-col span="6">
        <img src="../assets/img/进行中.png"><br>
        <span>开发ing</span>
      </van-col>
      <van-col span="6">
        <img src="../assets/img/进行中.png"><br>
        <span>开发ing</span>
      </van-col>

    </van-row>
  </div>
<v-footer></v-footer>
</div>
</template>

<script>
  import Footer from "./Footer.vue";
    export default {
        name: "repairMenu",
      data(){
          return{}
      },
      methods:{
          //顶部导航的两个左右函数
        onClickLeft(){
          this.$router.push("/home");
        },
        onClickRight(){
          this.$router.push("/home");
        },
        //几个按钮导航跳转函数
        commit(){
          this.$router.push("/repair");
        }
      },
      components:{
          "v-footer":Footer,
      }
    }
</script>

<style scoped>
  .van-nav-bar__title{
    font-size: 20px;
  }
  #div2{
    /*border:solid 1px;*/
    height: 250px;
  }
  #div1{
    border-radius: 10px;
    /*border:solid 1px;*/
    height: 250px;
  }
  #div1 img{

    /*border-radius: 40px;*/
  }

</style>
