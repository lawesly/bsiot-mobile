<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()"  title="消息详情" left-text="返回" left-arrow>
      </van-nav-bar>
      <br>
      <div style="margin: 10px">
        <span>尊敬的住户您好！</span><br><br><br>
        <span>
          当前小区环境的室外温度已经超过30摄氏度，请您注意防晒。
        </span><br><br><br>
        <span style="float: right;">双林物业管理处</span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "msgDetail",
      data(){
          return{
            user:JSON.parse(localStorage.getItem("user")),
          }
      },
      methods:{
        onClickLeft(){
          this.$router.push("/msgList");
        },
      }
    }
</script>

<style scoped>

</style>
