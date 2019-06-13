<template>
  <div class="RAERegistrationWait">
    <myheader :my-header="headerData"></myheader>
    <div class="RAERegistrationWaitContent">
      <div class="RAERegistrationWaitBox">
        <img :src="waitIMg" alt="">
        <h4>{{countdown}}s</h4>
        <p>{{info}}</p>
      </div>
      <div class="btns">
        <mybutton v-if="!isFail" :btnData="btnData" @func1="startCountdown" @func2="gotoApp" />
        <mybutton v-if="isFail" :btnData="btnData2" @func1="payFor" @func2="gotoApp" />
      </div>
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script> // waitImg.png
function dateFormat(time, format) {
  const t = new Date(time);
  const tf = function(i) {
    return (i < 10 ? "0" : "") + i;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, a => {
    switch (a) {
      case "yyyy":
        return tf(t.getFullYear());
      case "MM":
        return tf(t.getMonth() + 1);
      case "mm":
        return tf(t.getMinutes());
      case "dd":
        return tf(t.getDate());
      case "HH":
        return tf(t.getHours());
      case "ss":
        return tf(t.getSeconds());
      default:
        break;
    }
  });
}
import Header from '@/components/header/header'
import waitIMg from '@/assets/images/bureauFinance/RegistrationAccountingExamination/waitImg.png'
import {cenurl} from '@/components/toptow.js'
import { mapGetters } from "vuex";
import { setInterval, clearTimeout } from 'timers';
import mybutton from "../../../../components/MyButton";
export default {
  data () {
    return {
      headerData: {
        title: '受理中',
      },
      btnData:[
					{
						text:'继续更新状态',
						disabled: false,
            isSure: true,
            click:'func1'
					},
					{
						text:'返回',
						disabled: false,
						isSure: true,
            click:'func2'
					}
        ],
        btnData2:[
					{
						text:'重新支付',
						disabled: false,
            isSure: true,
            click:'func1'
					},
					{
						text:'返回',
						disabled: false,
						isSure: true,
            click:'func2'
					}
        ],
      waitIMg,
      showDetails: false,
      sendData: {
        certificateType: '',
        TestTitle: [],
        district: '',
        registrationPoint: '',
        professionalQualification: '',
        educationBackground: '',
        kjgznx: '',
        startWork: '',
        GraduationDate: '',
        school: '',
        diplomaNUm: '',
        postalCode: '',
        email: '',
        xlxz: '',
        pgtj: '',
        hqzyzgsj: '',
        company: '',
        companyAddress: '',
        companyNature: ''
      },
      info:"",
      queryTimer:"",
      countdown:10,
      countdownTimer:"",
      payState:"",
      isFail:false,
      orderId:"",
      orderNo: "", //支付订单号
      appId: "", //支付跳转小程序appid
      pagePath: "", //支付跳转小程序页面


    }
  },
  created () {
    window.MiniProgramCallBack = this.MiniProgramCallBack;
    const _self = this
    _self.sendData = _self.sendDataSave
    console.log(_self.workId);
    _self.startCountdown();
  },
  mounted () {
  },
  beforeRouteLeave (to, from, next) {
    this.clearTimer();
    next();
  },
  computed: {
    ...mapGetters("reapplyStore", ["workId", "sendDataSave"])
  },
  components: {
    myheader: Header,
    mybutton
  },
  methods: {
    gotoApp(){
      this.clearTimer();
      this.$CallModule("close")
    },
    //开始倒计时
    startCountdown(){
      var _self = this;
      _self.clearTimer()
      _self.countdown = 10;
      _self.info = "正在更新您的缴费状态，请稍候";
      _self.query();
      _self.countdownTimer = setInterval(function(){
        if(_self.countdown == 0){
          _self.clearTimer();
          _self.info = "未查询到您的缴费记录"
        }else{
          _self.countdown = _self.countdown-1;
        }
      },1000)
    },
    //每2.5秒查询一次支付状态
    query(){
      var _self = this;
      _self.queryTimer = setInterval(function(){
        console.log("query");
        _self.getPayState();
        /* if(_self.payState == '2'){
          _self.clearTimer();
          _self.$router.push({
              name:'reapplyPaySuccess',
            })
        }else if(_self.payState == '5'){
          _self.clearTimer();
          _self.info = "未查询到您的缴费记录"
        }else{
          _self.clearTimer();
          _self.info = "您未缴费，请重新支付"
          _self.isFail = true;
        } */
      },2500)
    },
    clearTimer(){
        var _self = this;
        clearTimeout(_self.queryTimer);
        clearTimeout(_self.countdownTimer);
        _self.countdown = 0;
    },
    getPayState(){
      let _self = this;
      let sendData = {
        txnBodyCom: {
          workid:_self.workId
        }
      };
      _self.$ajaxRequest('post','/gsp/mng99502',sendData)
      .then((res)=>{
        console.log(res);
        _self.payState =  res.orderStcd;
        if(_self.payState == '2'){
          _self.clearTimer();
          _self.$router.push('/reapplyPaySuccess')
        }else if(_self.payState == '5'){
          _self.clearTimer();
          _self.info = "未查询到您的缴费记录"
        }else{
          _self.clearTimer();
          _self.info = "您未缴费，请重新支付"
          _self.isFail = true;
        }
        /* switch(res.orderStcd){
          case '1'://未支付
            self.$router.push('/confirmationInformation');
            break;
          case '2'://支付成功
            self.$router.push({
              name:'RAERegistrationSuccess',
              params:{
                sendData:{
                  level: _self.params.level
                }
              }
            })
            break;
          case '3'://支付失败
            self.$router.push('/confirmationInformation');
            break;
          case '5'://受理中
            break;
        } */
      })
    },
    //统一下单
    payFor(data) {

      // 处理appForm0001的错误
      if (data === 'error') {
        this.$router.push({name: 'reapplyFail', params: {msg: '材料填写有误，请稍后重试...'}})
      }

      let _self = this;
      let sendData = {
        txnBodyCom: {
          payChannel: "1",
          payMode: "1",
          channelType: "1",
          tollData: {
            bizDesc: {
              fullName: _self.sendData.name,
              remark: ""
            },
            bizID: _self.workId,
            certificateType: 1,
            certificateNum: _self.sendData.idcard,
            telNumber: _self.sendData.phone,
            ticketInfo: {
              payer: _self.sendData.name
            },
            businessSiteNo: _self.sendData.registerCode,
            businessSiteName: _self.sendData.registerName,
            tollItemList: [{}],
          },
          matter_id: sessionStorage.getItem("matterid"),
          chann_id: "1",
          jmsfzslyydm: _self.sendData.type,
          workid:_self.workId,
          memberid:sessionStorage.getItem("userid"),
        }
      };

      _self.$ajaxRequest("post", "/gsp/mng30075", sendData).then(res => {
        console.log(res);
        clearInterval(_self.timer)
        _self.popupVisible1 = false
        if(res["C-API-Status"] == "01"){
          return;
        }
        _self.orderId = res.orderId;
        _self.orderNo = res.orderNo;
        _self.appId = res.appId; //支付跳转小程序appid
        _self.pagePath = res.pagePath;

        //通知状态为受理中
        _self.tellPayState();

        _self.isFail = false;
        _self.startCountdown();

        //跳转小程序
        _self.toMiniProgram();
      });
    },
    //跳转小程序
    toMiniProgram() {
      var _self = this;
      console.log("跳转小程序");

      let miniData = {
        path: _self.pagePath,
        miniProgramType: 0,
        userName: _self.appId
      };
      _self.$CallModule("miniProgram", miniData);
    },
    //小程序回调函数
    MiniProgramCallBack() {
      this.$router.push("/reapplyWait");
    },
    //通知状态为受理中
    tellPayState() {
      let payData = {
        txnBodyCom: {
          orderNo: this.orderNo, //支付交易订单号
          businessNo:this.orderId,//业务系统订单号
          payState: 5, //受理中,
          settleDate: dateFormat(new Date(), "yyyyMMdd"),
        }
      };
      this.$ajaxRequest("post", "/gsp/mng99501", payData).then(res => {
        console.log(res);
      });
    },
    goBack () {
      const _self = this
      _self.$router.go(-1)
    }
  }
}
</script>

<style>
  html,body{min-height:100%;}
</style>
<style lang="less" scoped>
  .RAERegistrationWait {
    background: #eee;
    height:100%;
    .RAERegistrationWaitContent{
      margin-top: 1.32rem;
      .RAERegistrationWaitBox{
        margin-bottom: .96rem;
        padding: 0 .86rem;
        img{width:3.48rem;margin: 0 auto;margin-bottom: .3rem;}
        h4{color:#2D7FFC;font-size: .34rem;margin-bottom: .44rem;}
        p{color:#2D7FFC;font-size: .26rem;}
      }
      .successDetails{
        padding: 0 .36rem;
        background: #fff;
        margin-bottom:1.2rem;
        ul{
          li{
            padding: .15rem 0;
            p{
              &:after{content: '';display: block;clear: both;}
              text-align: left;
              span{float: right;}
            }
          }
        }
        .userDetails{
          border-bottom: 1px solid #ececec;
        }
      }
      .btns{
        padding: 0 .8rem;
        button{width:100%;height:0.9rem;}
        label{font-size: 0.32rem;}
      }
    }
  }
</style>
