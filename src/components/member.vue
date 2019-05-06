<template>
    <div>
      <div >
        <mt-header fixed title="个人中心" style="font-size: 25px" ></mt-header>
      </div><br>
      <div id="headdiv">
        <img v-if="user!=null" :src="this.user.data.imgUrl" style="width: 100px;height:100px;border-radius: 50px;border: solid 1px">
        <img v-else src="../assets/img/userhead.png" style="width: 100px;height:100px;border-radius: 50px;border: solid 1px">
        <p v-if="user">{{user.data.name}}</p>
        <p v-else><router-link to="/login">登录/</router-link><router-link to="/register">注册</router-link></p>

      </div>
      <hr>
        <div>
        <van-cell title="我的资料" icon="comment-o" is-link to="/memberInfo" />
        <van-cell title="我的缴费记录" icon="balance-list" is-link />
        <van-cell title="我的报修记录" icon="service" is-link />
        <van-cell title="设置" icon="setting" is-link />
        <van-cell v-if="user" @click="logout()" title="注销" icon="clear" is-link />
        </div>
      <footer>
        <v-footer></v-footer>
      </footer>
    </div>

</template>

<script>

    import Footer from "./Footer.vue";
    export default {
        name: "member",
      data(){
        return {
          user:JSON.parse(localStorage.getItem("user")),
        }
      },
      mounted(){

      },
      components:{
          "v-footer":Footer
      },
      methods:{
          logout(){
            if(!confirm("确认退出当前账户？")){
              return;
            }
            localStorage.removeItem("user");
            this.$router.go(0);
          },

      }
    }
</script>

<style scoped>
#headdiv{
  margin-top: 25px;
  text-align: center;
}

#headdiv p{
  margin-top: 0px;
  margin-bottom: 0px;
}

  #infoul img{
    margin-bottom: 0px;
    width: 25px;
    height: 25px;
    /*list-style-image: url("../assets/img/information.png");*/
  }
.van-cell{
    font-size: 18px;
  }
</style>
