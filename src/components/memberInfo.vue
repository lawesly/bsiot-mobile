<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="我的资料" left-text="返回" left-arrow>
        <van-icon name="more-o" slot="right" />

      </van-nav-bar>
      <div style="display: flex;justify-content: space-between;align-items: center;">
        <div style="margin-left: 40px;">
          <span>头像</span>
        </div>
        <!--<img :src="this.user.data.imgUrl" alt="" style="width: 80px;height: 80px;border-radius: 30px;vertical-align:middle;">-->
        <div>
          <van-uploader :after-read="onRead">
            <img style="height: 100px;width: 100px;border-radius: 50px" :src="this.user.data.imgUrl">
          </van-uploader>
        </div>
          <!--<input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @click="update"/>-->
      </div>

      <div >
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            :placeholder="this.user.data.name"
          />

          <van-field
            v-model="houseNum"
            type="text"
            label="门牌号"
            :placeholder="this.user.data.houseNum"
            required
          />
        </van-cell-group>
      </div>
      <br>
      <div style="display: flex;padding-left: 10px">
        <span>性别：</span>
        <van-radio-group v-model="sex" style="display: flex;margin-left: 40px">
          <van-radio name="1">男</van-radio>&nbsp;&nbsp;&nbsp;
          <van-radio name="0">女</van-radio>
        </van-radio-group>

      </div>
      <br>
      <van-cell-group>
        <van-field
          v-model="phoneNum"
          required
          clearable
          label="手机号"
          :placeholder="this.user.data.phoneNum"
        />
      </van-cell-group>
      <mt-button style="margin-top: 220px" @click="updatedInfo()" type="primary" size="large">提交</mt-button>
    </div>
</template>

<script>
  import Axios from "axios";
    export default {
        name: "memberInfo",
      data(){
          return{
            user:JSON.parse(localStorage.getItem("user")),
            sex: '1',
            username:"",
            houseNum:"",
            phoneNum:"",
            file:"",
            imgUrl:"",
            config:""
          }
      },
      methods: {
        onRead(file) {
          this.file=file.file;
          this.submit();
        },
        submit(){
          var api="http://39.108.106.29:8088/mobile/user/upload";
          let param = new FormData(); //创建form对象
          param.append("file",this.file);
          // console.log(param.get('file'));
          Axios({
            method:"post",
            url:api,
            data:param,
            headers:{
              "Content-Type":"multipart/form-data;boundary=7d33a816d302b6;charset=utf-8"
            }

          }).then((res)=>{
            console.log(res.data.data);
            this.imgUrl=res.data.data
          })

        },
        updatedInfo(){
          var api="http://39.108.106.29:8088/mobile/user/updatedInfo";
          Axios({
            method:"post",
            url:api,
            data:{
              id:this.user.data.id,
              imgUrl:this.imgUrl,
              name:this.username,
              sex:1,
              phoneNum:this.phoneNum,
              houseNum:this.houseNum
            }
          }).then((res)=>{
            alert("更新成功");

          }).catch((error)=>{
            alert("更新失败")
          })
        },
        onClickLeft(){
          this.$router.push("/member");
        }
      }
    }
</script>

<style scoped>
  .van-nav-bar__title{
    font-size: 20px;
  }
  .van-uploader{

    float: right;
    /*border-radius: 50px;*/
  }
  /*.van-icon van-icon-photograph{*/
    /*width: 50px;*/
    /*height: 50px;*/
  /*}*/
</style>
