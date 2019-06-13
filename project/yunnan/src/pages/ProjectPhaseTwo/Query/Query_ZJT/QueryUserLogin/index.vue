<template>
  <div class="userloginContanier">
    <myheader :my-header="headerData"></myheader>
    <Field type="text" label="手机号码" :value="enddata.usertel" placeholder="请输入用户手机号" ></Field>
    <Field type="password" label="公积金密码" :value="enddata.userpwd" v-model="enddata.userpwd" placeholder="请输入密码"></Field>
    <div class="subbtn"> 
      <mybutton :btnData="btnData" @click="goto"/>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header'
import mybutton from "@/components/MyButton";
export default {
  components: {
    myheader: Header,
    mybutton
  },
  data () {
    return {
      headerData: {
        title: '公积金查询登录',
        backUrl: '/QueryUserCity'
      },
      isdisabled:Boolean,
      enddata:{
        usertel:"",
        userpwd:"",//992311 113060219029
      },
      pwd:"",
      btnData: [
        {
          text: "确认提交",
          disabled: false,
          isSure: true,
          // click:'func2'
        },
      ],
    }
  },
  conputed: {},
  created(){
    let _this = this;
    _this.init()
  },
  methods: {
    init(){
      let _this = this;
      // 何健，440922197105280012，13888072520，113060219029，
      // sessionStorage.setItem("userphone","13888072520")
      // sessionStorage.setItem("userphone","13888503126")
      // sessionStorage.setItem("cardid","440922197105280012")
      // sessionStorage.setItem("cardid","530121199203010340")
      let usertel = sessionStorage.getItem("userphone")
      if(usertel != "null"){
        _this.enddata.usertel = usertel;
      }
    },
    goto(){
      let _this = this;
      var tel = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!tel.test(this.enddata.usertel)) {
        _this.$toast("请输入正确手机号")
        return false;
      }
      if(_this.enddata.userpwd == ""){
        _this.$toast("请输入公积金密码")
        return false
      }
      let sendData = {
        "txnBodyCom":{
          "chann_id": "1",
          "matter_id": window.sessionStorage.getItem('matterid'),
          "userId": window.sessionStorage.getItem("userId"),
          "bodyCardNumber": sessionStorage.getItem("cardid"),
          "tel": sessionStorage.getItem("userphone"),
          "buzType":"5432",
          "logintype":"1",
          "password": _this.enddata.userpwd
        }
      }
      let sendDatatwo = {
          "tRecInPage": "",
          "tPageJump": "",
          "tStsTraceId": "110567890"
      }
      _this.$ajaxRequest("post","gsp/mng80103" ,sendData,sendDatatwo)
      .then(res => {
        if(res.userid){
          let src = sessionStorage.getItem("cmnSrc");
          sessionStorage.setItem("CmnRouter",src)
          sessionStorage.setItem("MpfUserId",res.userid)
          _this.$router.push({
            path: src,
            query:{
              data: _this.$route.query.data
            }
          })
        }
      })
      .catch(error => {
        _this.$toast("网络错误,请重试")
      });
    }
  }
}
</script>
<style>
.userloginContanier .subbtn{
  margin-top: .5rem;
}
</style>

