<template>
    <div>
      <div >
        <mt-header fixed title="用户登录">
          <router-link to="/" slot="left">
            <mt-button>返回</mt-button>
          </router-link>
        </mt-header>
      </div><br>
      <div id="div1">
        <img src="../assets/img/building.png">
      </div>

      <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <!--<mt-field label="验证码" v-model="captcha">-->
          <!--<img src="../assets/img/checkcode.png" style="border-radius: 5px" height="40px" width="100px">-->
        <!--</mt-field>-->
        <mt-button @click="login()" type="primary" size="large">登录</mt-button>
      </div>
      <router-link to="/register"><p style="text-align: center">没有账户？请点击注册</p></router-link>
    </div>
</template>

<script>
  import Axios from "axios";
    export default {
        name: "login",
      data(){
          return{
            user:"",
            username:"",
            password:""
          }
      },
      mounted:{
          //todo
          //校验用户名是否重复
      },
      methods:{

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
              alert("登录成功");
              console.log(response);
              this.user=response.data;
              localStorage.setItem("user",JSON.stringify(this.user));
              this.$router.push("/member");
            }else{
              alert("登录失败");
            }
          }).catch((error)=>{
            alert("登录失败");
          })
         }
         //
      }
    }
</script>

<style scoped>
#div1{
  margin-top: 20px;
  text-align: center;
}
</style>
