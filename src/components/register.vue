<template>
    <div>
      <mt-header fixed title="用户注册">
        <router-link to="/" slot="left">
          <mt-button>返回</mt-button>
        </router-link>
      </mt-header><br>
      <div id="div1">
        <img src="../assets/img/building.png">
      </div>
      <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="门牌号" placeholder="请输入门牌号" v-model="houseNum"></mt-field>
        <div style="display: flex;padding-left: 10px">
          <span>性别：</span>
        <van-radio-group v-model="sex" style="display: flex;margin-left: 40px">
          <van-radio name="1">男</van-radio>&nbsp;&nbsp;&nbsp;
          <van-radio name="0">女</van-radio>
        </van-radio-group>
        </div>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="password1"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phoneNum"></mt-field>

        <van-cell-group>
          <van-field
            v-model="checkCode"
            center
            clearable
            label="验证码"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary" @click="sendSms">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <mt-button @click="register()" type="primary" size="large">注册</mt-button>
      </div>
      <router-link to="/login"><p style="text-align: center">已有账号？请点击登录</p></router-link>
    </div>
</template>

<script>
   import Axios from "axios";
    export default {
        name: "register",
      data(){

          return{
            sex: '1',
            user:[],
            password:"",
            username:"",
            phoneNum:"",
            houseNum:"",

          }
      },
      mounted() {


      },
      methods:{
          //注册
          register(){
            if(this.username===""){
              alert("用户名不能为空");
              return;
            }
            if(this.password===""){
              alert("密码不能为空");
              return;
            }
            if(this.phoneNum===""){
              alert("手机号不能为空");
              return;
            }
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(this.phoneNum)) {
              alert("请输入有效的手机格式");
              return;
            }
              var api="http://39.108.106.29:8088/mobile/user/register";
            // var api="http://localhost:8088/mobile/user/register";
            Axios({
              method: 'post',
              url: api,
              data: {
                name:this.username,
                password: this.password,
                sex:this.sex,
                phoneNum:this.phoneNum,
                houseNum:this.houseNum,
                checkCode:this.checkCode
              }

            }).then( (response)=> {
              console.log(1,response.data)
              if(response.data.code==200){
                alert("注册成功");
                this.login();

              }
              // this.$router.push("/member");
            }).catch( (error)=> {
                console.log(error);
              alert("注册失败")
              });;
          },
        //发送验证码
        sendSms(){
            var api="http://39.108.106.29:8088/mobile/user/sendCheckCode";
            Axios.get(api,{params:{
              phoneNum:this.phoneNum
              }}).then((res)=>{
                if(res.data.code==200){
                  alert("发送验证码成功");
                }else{
                  alert("发送验证码失败")
                }
            }).catch((error)=>{
              alert("发送验证码失败")
            })
        },
        //登录函数
        login(){
          if(this.username==null||this.username==""){
            alert("用户名不能为空");
            return
          }
          if(this.password==null||this.password==""){
            alert("密码不能为空");
            return
          }
          var api="http://39.108.106.29:8088/mobile/user/login";
          // var api="http://localhost:8088/mobile/user/login";
          //    var api="user/login";
          Axios.get(api,{
            params:{
              name:this.username,
              password:this.password
            }
          }).then((response)=>{
            if(response.data.code==200){
              // alert("登录成功");
              console.log(response);
              this.user=response.data;
              localStorage.setItem("admin",JSON.stringify(this.user));
              this.$router.push("/member");
            }else{
              // alert("登录失败");
            }
          }).catch((error)=>{
            // alert("登录失败");
          })
        }
      }

    }
</script>

<style scoped>
  #div1{
    margin-top: 20px;
    text-align: center;
  }
  .van-field__button .van-button--primary {
    background-color:rgb(38,162,255);
    border: 1px solid rgb(38,162,255);
  }
</style>
