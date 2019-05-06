<template>
    <div style="background-color: ghostwhite">
      <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="小区动态" left-text="返回" left-arrow>
        <van-icon name="more-o" slot="right" />
      </van-nav-bar>
      <br>

      <div style="background-color: ghostwhite"  v-for="(item,key) in list">

        <div  style="background-color: white;" >
        <!--<span id="span1"><img :src="user.data.imgUrl" style="width: 50px;"></span>-->
        <span id="span1"><img :src="item.userImgUrl" style="width: 50px;"></span>
        <span id="span2">{{item.name}}</span>
        <span id="span3">{{item.createdAt}}</span><br>
        <span id="span4">#{{item.title}}</span>
        </div>
        <div  style="height: auto;padding: 5px;background-color: white">
          <p>{{item.content}}</p>
          <span @click="addComment(list[key].id)" style="padding-left: 250px"><van-icon name="more-o" slot="right" /><a style="font-size: 14px">{{item.commentCount}}</a></span>
          <br>


        </div>
        <div v-if="item.list !=null" style=";padding: 5px;" >
          <div v-for="(item1,index) in item.list" v-if="index <3">
            <span style="color: deepskyblue">{{item1.userName}}:</span>&nbsp;&nbsp;<span>{{item1.content}}</span>

          </div>
          <div v-if="item.list.length >2">
            <span style="color:deepskyblue;">查看更多评论>>></span>
          </div>
        </div>
        <div style="height: 10px;padding: 5px;background-color: white">

        </div>
      <br>

      </div>
      <router-link to="/addDynamic"><img id="img1" src="../assets/img/add.png" ></router-link>
      <footer>
        <v-footer></v-footer>
      </footer>
    </div>
</template>

<script>
  import Footer from "./Footer.vue";
  import Axios from 'axios';
  import VueEvent from "../assets/js/VueEvent.js";

    export default {
        name: "dynamic",
      data(){
          return{
            content:"",
            list:[],
            user:JSON.parse(localStorage.getItem("user"))
          }
      },
      mounted(){
          this.showDynamicList();
      },
      methods:{
          showDynamicList(){
            var api="http://39.108.106.29:8088/mobile/api/dynamic/list";
            // var api="http://localhost:8088/mobile/api/dynamic/list";
            Axios.get(api).then((res)=>{
              this.list=res.data.data;
            }).catch((error)=>{
              alert("显示失败，请重新刷新页面");
            })
          },
        addComment(id){
          localStorage.setItem("did",id);
            this.$router.push("/addComment");
        }
      },
      components:{
        "v-footer":Footer
      },
    }
</script>

<style scoped>
  .van-button {
    float: right;

  }
  .van-panel__header-value{
    color: black;
  }
  .van-cell__label{
    color: red;
  }
  #div1{
  border-bottom: solid 1px;

  }

 #span1 img{
   vertical-align:middle;//设置img和span在同一水平线
   width: 50px;
   height: 50px;
   border-radius: 25px;
 }
  #span2 {

  }
  #span3{
    padding-left: 120px;
    font-size: 14px;
  }
  #span4{
    font-size: 14px;
    color: red;
  }
  #img1{
    width:50px;
    height: 50px;
    position: fixed;
    right: 30px;
    bottom: 100px;
  }
</style>
