<template>
    <div>
      <van-nav-bar @click-left="onClickLeft()"  title="报修订单" left-text="返回" left-arrow>
      </van-nav-bar>
      <div v-if="user.data.type==='maintainner'">
      <van-tabs v-model="active" >
        <van-tab >
          <div slot="title" @click="getUnConfirmOrder()">
            <van-icon name="more-o" />未确认
          </div>
          <div>
            <van-cell-group v-for="(item,index) in repairList" :key="index" >
              <van-cell @click="showDetail(item.id)" :title="'记录'+index" :value="item.preTimeDto" :label="item.detail" />
            </van-cell-group>
          </div>
        </van-tab>
        <van-tab >
          <div slot="title" @click="getCompleteOrder()">
            <van-icon name="more-o" />已确认
          </div>
          <div>
            <van-cell-group v-for="(item,index) in repairList" :key="index" >
              <van-cell @click="showDetail(item.id)" :title="'记录'+index" :value="item.preTimeDto" :label="item.detail" />
            </van-cell-group>
          </div>
        </van-tab>
      </van-tabs>
      </div>
        <div v-else>
          <h3 style="margin-left: 20px">温馨提示</h3>
          <p style="margin:30px">
            您不是本小区的维修师傅，暂时无法使用此功能，请先找管理员审核身份。
          </p>
        </div>
      </div>
</template>

<script>
    import Axios from "axios";
    export default {
        name: "repairOrder",
      data(){
          return{
            repairList:"",
            active:0,
            user:JSON.parse(localStorage.getItem("user")),
          }
      },
      mounted(){
          this.getUnConfirmOrder();
      },
      methods:{
          //将ID发送过去，传值
        showDetail(id){
          this.$router.push({path:"/repairOrderDetail",query:{id:id}})
        },

        onClickLeft(){
          this.$router.push("/");
        },
        //获取未确认的报修订单
        getUnConfirmOrder(){
          var api="http://39.108.106.29:8088/mobile/v1/user/repair/order/list";
          Axios.get(api,{params:{
              status:"under_review"
            }}).then((res)=>{
              this.repairList=res.data.data;
          }).catch((error)=>{

          })

        },
        //获取进行中的报修订单
        getCompleteOrder(){
          var api="http://39.108.106.29:8088/mobile/v1/user/repair/order/findComplete";
          Axios.get(api,{params:{
              id:this.user.data.id,
            }}).then((res)=>{
            this.repairList=res.data.data;
          }).catch((error)=>{

          })

        }
      }
    }
</script>

<style scoped>

</style>
