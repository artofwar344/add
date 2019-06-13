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
        <mybutton  :btnData="btnData" @func1="startCountdown" @func2="gotoApp" />
      </div>
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script> // waitImg.png
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
        backUrl: '/PersonalInformation'
      },
      btnData:[
					{
						text:'继续查询',
						disabled: false,
            isSure: true,
            click:'func1'
					},
					{
						text:'重新申请',
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

    }
  },
  created () {
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
    ...mapGetters("bureauFinanceStore", [
      "workId",
      "sendDataSave",
      "pageDataSave"
    ])
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
      _self.info = "正在更新您的考试状态，请稍候";
      _self.query();
      _self.countdownTimer = setInterval(function(){
        if(_self.countdown == 0){
          _self.clearTimer();
          _self.info = "未查询到您的报考记录"
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
        var state = _self.getPayState();
        if(_self.payState == '2'){
          _self.clearTimer();
          _self.$router.push({
              name:'RAERegistrationSuccess',
              params:{
                sendData:{
                  level: _self.sendData.level
                }
              }
            })
        }else if(_self.payState == '3'){
          _self.clearTimer();
          _self.info = "查询到您的报考未支付费用，请重新申请"
        }
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
