<template>
    <div>

        <mt-header fixed title="报修记录详情">
          <router-link to="/Inrepairing" slot="left">
            <mt-button>返回</mt-button>
          </router-link>
        </mt-header><br>
      <hr>

      <div id="div1">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" disabled></mt-field>
      <mt-field label="门牌号" placeholder="请输入门牌号" type="text" v-model="houseNum" disabled></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phoneNum" disabled></mt-field>
      <mt-field label="详细描述" placeholder="详细描述" type="textarea" rows="4" v-model="repairDetail" disabled></mt-field>
      <a>
        <mt-field label="预约时间" placeholder="预约时间" type="text" v-model="preTimeDto" disabled></mt-field>
      </a>
        <hr>
        <van-uploader :after-read="onRead">
          上传图片
          <van-icon name="photograph" />
          <div style="height: 30px;width: 30px;">

          </div>
        </van-uploader>
        <mt-button  type="primary" size="large">{{msgButton}}</mt-button>

        <mt-datetime-picker

          ref="picker"
          v-model="pickerVisible"
          type="datetime"
          year-format="{value}"
          month-format="{value}"
          date-format="{value}"
          hour-format="{value}"
          minute-format="{value}">
        </mt-datetime-picker>
      </div>

      </div>
</template>

<script>

    import Axios from "axios";
    export default {
        name: "repairDetail",
      data(){
          return{
            user:JSON.parse(localStorage.getItem("user")),
            repairDetail:"",
            houseNum:"",
            username:"",
            phoneNum:"",
            repairDetail:"",
            preTimeDto:"",
            pickerVisible:"",
            msgButton:""
          }
      },
      mounted(){
        this.Detail()
      },
      methods:{

        Detail(){
          var id=this.$route.query.id;
          var api="http://39.108.106.29:8088/mobile/v1/user/repair/"+id;

          Axios.get(api
          ).then((response)=>{
            console.log(response);
              this.username=response.data.data.name;
              this.houseNum=response.data.data.houseNum;
              this.phoneNum=response.data.data.phoneNum;
              this.repairDetail=response.data.data.detail;
              this.preTimeDto=response.data.data.preTimeDto;
              if(response.data.data.status=="completed"){
                this.msgButton="点击评价"
              }else{
                this.msgButton="取消申请"
              }

          }).catch((error)=>{
            console.log(error);
            alert("查看失败")
          })
        }
      }
    }
</script>

<style scoped>
#div1{


}
</style>
