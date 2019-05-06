<template>
    <div>

        <mt-header fixed title="报修信息填写">
          <router-link to="/repairMenu" slot="left">
            <mt-button>返回</mt-button>
          </router-link>
        </mt-header><br>
      <hr>

      <div id="div1">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="门牌号" placeholder="请输入门牌号" type="text" v-model="houseNum"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phoneNum"></mt-field>
      <mt-field label="详细描述" placeholder="详细描述" type="textarea" rows="4" v-model="detail"></mt-field>
      <a @click="open()">
        <mt-field label="预约时间" placeholder="预约时间" type="text" v-model="preTimeDto"></mt-field>
      </a>
        <hr>
        <van-uploader :after-read="onRead">
          上传图片
          <van-icon name="photograph" />
          <div style="height: 30px;width: 30px;">

          </div>
        </van-uploader>
        <mt-button @click="commit()" type="primary" size="large">提交申请</mt-button>

        <mt-datetime-picker
          @confirm="hashconfirm"
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
        name: "repair",
      data(){
          return{
            user:JSON.parse(localStorage.getItem("user")),
            houseNum:"",
            username:"",
            phoneNum:"",
            detail:"",
            preTimeDto:"",
            pickerVisible:"",
          }
      },
      methods:{
          open(){
            this.$refs.picker.open();
          },
        commit(){

          var api="http://39.108.106.29:8088/mobile/v1/user/repair/";
          if(localStorage.getItem("user")==null||this.user.data.id==null){
            alert("用户ID为空，请先登录");
            return;

          }
          Axios({
            method:"post",
            url:api,
            data:{
              userId:this.user.data.id,
              name:this.username,
              phoneNum:this.phoneNum,
              detail:this.detail,
              preTimeDto:this.preTimeDto,
              houseNum:this.houseNum
            }
          }).then((response)=>{
            if(response.data.code==200){
              alert("提交成功")
              this.$router.push("/repairMenu");
            }
          }).catch((error)=>{
            alert("提交失败")
          })
        },
        //讲datetimePicker 组件返回的值进行格式化
        dateformate(val){
          var t = new Date(val)
          var year = t.getFullYear()
          var month = t.getMonth() + 1
          if (month < 10) { month = '0' + month }
          var date = t.getDate()
          if (date < 10) { date = '0' + date }
          var hour = t.getHours()
          if (hour < 10) { hour = '0' + hour }
          var minute = t.getMinutes()
          if (minute < 10) { minute = '0' + minute }
          var second = t.getSeconds()
          if (second < 10) { second = '0' + second }
          return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
        },
        hashconfirm(val){
            this.preTimeDto=this.dateformate(val);
        }
      }
    }
</script>

<style scoped>
#div1{


}
</style>
