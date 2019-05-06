<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="新增评论" left-text="返回" left-arrow>
        <van-icon name="more-o" slot="right" />
      </van-nav-bar>
      <br>
      <van-cell-group>
        <textarea v-model="content" placeholder=" 请输入评论" name="" id=""  style=" height: 150px; width: 98%; border-color: white"></textarea>
      </van-cell-group>
      <br>
      <mt-button @click="commit()" style="margin-top: 350px;" type="primary" size="large">提交评论</mt-button>
    </div>
</template>

<script>
  import Axios from "axios";
    export default {
        name: "addComment",
      data(){
          return{
            user:JSON.parse(localStorage.getItem("user")),
            content:""
          }
      },
      mounted(){

      },
      methods:{
        onClickLeft(){
          this.$router.push("/dynamic");
        },
        commit(){
          var api="http://39.108.106.29:8088/mobile/api/comment/add"
          Axios({
            method: "post",
            url:api,
            data:{
              userId:this.user.data.id,
              userName:this.user.data.name,
              dId:localStorage.getItem("did"),
              content:this.content
            }
          }).then((res)=>{
            alert("评论成功")
            this.$router.push("/dynamic");
          }).catch((error)=>{
            alert("评论失败，请重试")
          })
        }
      }
    }
</script>

<style scoped>

</style>
