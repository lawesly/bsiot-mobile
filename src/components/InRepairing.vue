<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="报修记录" left-text="返回" left-arrow>
        <van-icon name="more-o" slot="right" />
      </van-nav-bar>
      <van-tabs v-model="active" >
        <van-tab >
          <div slot="title" @click="clickReviewing()">
            <van-icon name="more-o" />进行中
          </div>
          <div>
          <van-cell-group v-for="(item,index) in inRepairList" :key="index" >
            <van-cell @click="showDetail(item.id)" :title="'记录'+index" :value="item.preTimeDto" :label="item.detail" />
          </van-cell-group>
          </div>
        </van-tab>
        <van-tab >
          <div slot="title" @click="clickCompleted()">
            <van-icon name="more-o" />已完成
          </div>
          <van-cell-group v-for="(item,index) in inRepairList" :key="index">
            <van-cell @click="showDetail(item.id)" :title="'记录'+index" :value="item.preTimeDto" :label="item.detail" />
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>

</template>


<script>
  import Axios from "axios";
    export default {
        name: "InRepairing",
      data(){
          return{
            currentPage: 1,
            msg:[{"time":"2019-02-14 12:00:01","title":"记录"}],
            inRepairList:[],
            user:JSON.parse(localStorage.getItem("user")),
            status:"under_review",
            active:0
          }
      },
      mounted(){
        this.showInfo();
        this.iflogin();
      },
      methods:{
        //判断是否登录
        iflogin(){
          if(localStorage.getItem("user")==null){
            alert("请先登录");
            return;
          }
        },
        //顶部导航的两个左右函数
        onClickLeft(){
          this.$router.push("/repairMenu");
        },
        onClickRight(){
          this.$router.push("/msgList");
        },
        clickCompleted() {
          this.active=1;
          this.status="completed";
          this.showInfo()
        },
        clickReviewing(){

          this.status="under_review";
          this.showInfo()
        },
        showInfo(){
          var api="http://39.108.106.29:8088/mobile/v1/user/repair/list";
          Axios.get(api,{params:{
              userId:this.user.data.id,
              status:this.status
            }
          }) .then((response)=>{
             console.log(response);
            this.inRepairList=response.data.data;
            console.log(this.inRepairList)
          }).catch((error)=>{
            console.log(error);
            alert("加载失败，请重新");
          })
        },
        showDetail(id){
          this.$router.push({path:"/repairDetail",query:{id:id}})
        }

      }
    }
</script>

<style scoped>
  .van-nav-bar__title{
    font-size: 20px;
  }

</style>
