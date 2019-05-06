<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()" @click-right="onClickRight()" title="滴卡记录" left-text="返回" left-arrow>
        <van-icon name="more-o" slot="right" />
      </van-nav-bar>
          <div>
            <van-cell-group v-for="(item,index) in postCardList" :key="index" >
              <van-swipe-cell :right-width="65" :left-width="65" :on-close="onClose">
              <van-cell @click="" :title="'滴卡记录'+(index+1)" :value="item.createdAt" :label="'滴卡人：'+(item.userName)" />
              <van-button slot="right" type="danger" @click="deleteRecord(item.id)">删除</van-button>
              </van-swipe-cell>
            </van-cell-group>
          </div>

    </div>
</template>

<script>
  import Axios from "axios";
    export default {
        name: "postCartData",
      data(){
          return{
            postCardList:"",
            user:JSON.parse(localStorage.getItem("user")),
          }
      },
      mounted(){
          this.getpostCardList(this.user.data.id);
      },
      methods:{
        onClickLeft(){
          this.$router.push("/home");
        },
        //获取滴卡记录
        getpostCardList(id){
          var api="http://39.108.106.29:8088/mobile/card/list?id="+id;
          Axios.get(api).then((res)=>{
            this.postCardList=res.data.data;

          }).catch((error=>{

          }))
        },
        //删除
        deleteRecord(id){
          var api="http://39.108.106.29:8088/mobile/card/delete?id="+id;
          Axios.get(api).then((res)=>{
            if(res.data.code==200){
              alert("删除成功");
              location.reload();
            }
          }).catch((error=>{
            alert("删除失败");
          }))
        }
      }
    }
</script>

<style scoped>

</style>
