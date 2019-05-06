<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="填写动态" left-text="返回" left-arrow>
        <van-icon name="more-o" slot="right" />
      </van-nav-bar>
      <van-cell-group>
        <van-field v-model="title" placeholder="请输入标题" />
      </van-cell-group>
      <br>
      <van-cell-group>
        <textarea v-model="content" placeholder=" 请输入详细描述" name="" id=""  style=" height: 150px; width: 98%; border-color: white"></textarea>
      </van-cell-group>
      <br>
      <van-uploader :after-read="onRead" style="padding-left: 10px">
        <p style="margin-bottom: 0px">图片上传</p>
        <img src="../assets/img/upload.png">
      </van-uploader>
      <br>
        <mt-button @click="commit()" style="margin-top: 150px;" type="primary" size="large">发布动态</mt-button>

    </div>
</template>

<script>
  import Axios from "axios";
    export default {
        name: "addDynamic",
      data(){
          return{
            content:"",
            title:"",
            user:JSON.parse(localStorage.getItem("user")),
          }
      },
      methods:{
        onClickLeft(){
          this.$router.push("/dynamic");
        },
        onClickRight(){
          this.$router.push("/dynamic");
        },
        commit(){
          if(this.user.data.id==null){
            alert("请先登录");
            return;
          }
          if(this.content==null){
            alert("内容不能为空");
            return;
          }
          if(this.title==null){
            alert("标题不能为空");
            return;
          }
          var api="http://39.108.106.29:8088/mobile/api/dynamic/add"
          Axios({
            method:"post",
            url:api,
            data:{
              content:this.content,
              title:this.title,
              name:this.user.data.name,
              userId:this.user.data.id
            }
          }).then((res)=>{
            alert("发布成功");
            this.$router.push("/dynamic");
          }).catch((error)=>{
            alert("发布失败")
          })
        }
      }
    }
</script>

<style scoped>

</style>
