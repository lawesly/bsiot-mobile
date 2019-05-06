<template>
  <div>
    <van-nav-bar @click-left="onClickLeft()"  title="消息通知" left-text="返回" left-arrow>
    </van-nav-bar>
    <van-tabs v-model="active" >
      <van-tab >
        <div slot="title" @click="getComMsgList()">
          <van-icon name="more-o" />公告通知
        </div>
        <div>
          <van-cell-group v-for="(item,index) in msgList" :key="index" >
            <van-cell @click="showDetail(item.id)" :title="'记录'+index" :value="item.preTimeDto" :label="item.detail" />
          </van-cell-group>
        </div>
      </van-tab>
      <van-tab >
        <div slot="title" @click="getTipMsgList()">
          <van-icon name="more-o" />消息通知
        </div>
        <div>
          <van-cell-group v-for="(item,index) in msgList" :key="index" >
            <van-cell @click="showDetail(item.id)" :title="'记录'+index" :value="item.preTimeDto" :label="item.detail" />
          </van-cell-group>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Axios from "axios";
    export default {
        name: "msgList",
      data(){
          return{
          msgList:""
          }
      },
      methods:{
        onClickLeft(){
          this.$router.push("/home");
        },
        //获取消息列表
        getTipMsgList(){
          var api="http://39.108.106.29:8088/mobile/msg/tip/list";
          Axios.get(api).then((res)=>{
            this.msgList=res.data.data;
          }).catch((error)=>{

          })
        },
        //获取公告信息列表
        getComMsgList(){
          var api="http://39.108.106.29:8088/mobile/msg/com/list";
          Axios.get(api).then((res)=>{
            this.msgList=res.data.data;
          }).catch((error)=>{

          })
        }
      }
    }
</script>

<style scoped>

</style>
