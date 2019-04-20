<template>
  <div class="RAERegistrationSuccess">
    <myheader :my-header="headerData"></myheader>
    <div class="RAERegistrationSuccessContent">
      <div class="RAERegistrationSuccessBox">
        <img :src="successIMg" alt="">
        <h4>报名成功</h4>
      </div>
      <div class="successDetails"  v-if="showDetails">
        <ul class="userDetails">
          <li>
            <p>姓名 <span>{{queryData.xm}}</span></p>
          </li>
          <li>
            <p>身份证号<span>{{hiddenIdNumber(queryData.zjhm)}}</span></p>
          </li>
          <li>
            <p>考试级别<span>{{UnformatLevel(queryData.bkjb)}}</span></p>
          </li>
          <li>
            <p>地区<span>{{queryData.kqdm}}</span></p>
          </li>
          <li>
            <p>报名点<span>{{queryData.bmddh}}</span></p>
          </li>
          <li>
            <p>学历<span>{{queryData.xl}}</span></p>
          </li>
          <li v-if="UnformatLevel(params.sendData.level) === '高级'">
            <p>专业资格<span>{{queryData.zyzg}}</span></p>
          </li>
          <li v-if="UnformatLevel(params.sendData.level) === '高级'">
            <p>专业资格取得时间<span>{{queryData.zyzg_year}}-{{queryData.zyzg_month}}</span></p>
          </li>
          <li v-if="UnformatLevel(params.sendData.level) === '高级'">
            <p>工作单位<span>{{queryData.gzdw}}</span></p>
          </li>
          <li v-if="UnformatLevel(params.sendData.level) === '中级'">
            <p>毕业院校<span>{{queryData.byyx}}</span></p>
          </li>
          <li v-if="UnformatLevel(params.sendData.level) === '中级'">
            <p>报考类别<span>{{getProjectArr(queryData.zjbkkm)}}</span></p>
          </li>
          <li v-if="UnformatLevel(params.sendData.level) === '中级' || UnformatLevel(params.sendData.level) === '高级'">
            <p>会计工作年限<span>{{queryData.kjnx}}</span></p>
          </li>
          <li>
            <p>电话号码<span>{{queryData.telnum}}</span></p>
          </li>
          <li>
            <p>报名注册号<span>{{queryData.nbmxh}}</span></p>
          </li>
        </ul>
        <ul class="orderFormDetails" v-if="UnformatLevel(params.sendData.level) != '高级'">
          <li>
            <p>客户订单号 <span>{{queryData.ordid}}</span></p>
          </li>
          <li>
            <p>订单交易时间<span>{{queryData.jfdate}}</span></p>
          </li>
          <li>
            <p>交易金额<span>{{queryData.transamt}}</span></p>
          </li>
        </ul>
      </div>
      <div class="btns">
        <Btn type="primary" @click="queryDetails">{{btnText}}</Btn>
      </div>
      <div class="friendlyReminder">
        <p>
          提示：您已报名成功，若需订购教材，请于报名期间在PC端登录教材征订网站：http://60.208.116.164:9001/kjbook 选购。
        </p>
      </div>
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from '@/components/header/header'
import successIMg from '@/assets/images/bureauFinance/RegistrationAccountingExamination/successImg.png'
import {cenurl} from '@/components/toptow.js'

export default {
  data () {
    return {
      params: this.$route.params,
      headerData: {
        title: '报名成功',
        backUrl: ''
      },
      successIMg,
      showDetails: false,
      queryData: {
        xm: '姓名',
        ssfh: '1326546132',
        ksjb: '好几级',
        bklx: '报考类型',
        dq: '西山区',
        bkd: '海埂中心',
        xl: '高中',
        byyx: '民族大学',
        kjgznx: '无',
        phoneNumber: '1236546165',
        ddh: '134565134',
        ddjysjm: '2018-11-21',
        jyje: '100￥'
      },
      projectArr: [], //文字版报考科目
      projectText: {
        "1": "财务管理",
        "2": "经济法",
        "3": "中级会计实务"
      },
    }
  },
  created () {
    const _self = this
    console.log(_self.params.sendData.level)
    _self.getExamineeDetails()
  },
  mounted () {
  },
  computed: {
    btnText(){
      return this.showDetails?"返回":"查看详情";
    }
  },
  components: {
    myheader: Header
  },
  methods: {
    getProjectArr(zjbkkm) {
      var arr = zjbkkm.split("");
      var res = [];
      for (let i = 0; i < arr.length; i++) {
        res.push(this.projectText[arr[i]]);
      }
      return res.join(",")
    },
    queryDetails () {
      let _self = this
      _self.showDetails = !_self.showDetails
    },
    getExamineeDetails () {
      let _self = this
      let level = _self.formatLevel(_self.params.sendData.level)
      let sendData = {
        'txnCommCom': {
          'tenant': '530000000000',
          'txn_itt_chnl_id': '00',
          'txn_itt_chnl_type': '11',
          'C-Business-Id': '111111111'
        },
        'txnBodyCom': {
          'matter_id': sessionStorage.getItem('matterid'),
          'bkjb': level,
          'chann_id': '1',
          'oper_id': '1009',
          'xm': sessionStorage.getItem('username') || '李童',
          'zjhm': sessionStorage.getItem('cardid') || '430623198304208139'
        }
      }
      _self.$ajaxRequest('post', '/gsp/mng19023', sendData).then((res) => {
        console.log(res)
        if (!res.error_msg) {
          _self.queryData = res
        } else {
          _self.$toast(res.error_msg)
        }
      })
    },
    formatLevel (level) {
      const _self = this
      let str = ''
      switch (level) {
        case '初级':
          str = '2'
          break
        case '中级':
          str = '1'
          break
        case '高级':
          str = '3'
          break
        default:
          return level;
      }
      return str
    },
    UnformatLevel(level){
      const _self = this
      let str = ''
      switch (level) {
        case '2':
          str = '初级'
          break
        case '1':
          str = '中级'
          break
        case '3':
          str = '高级'
          break
        default:
          return level;
      }
      return str
    },
    hiddenIdNumber(idNumber){
			console.log(idNumber)
			return idNumber.substring(0,3)+"***********"+idNumber.substring(idNumber.length-4,idNumber.length)
		}
  }
}
</script>

<style>
  html,body{min-height:100%;}
</style>
<style lang="less" scoped>
  .RAERegistrationSuccess {
    background: #F1F3F6;
    height:100%;
    .RAERegistrationSuccessContent{
      margin-top: 1.32rem;
      .RAERegistrationSuccessBox{
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
      .friendlyReminder{
        p{color:red;font-size: .2rem;margin-top: .5rem;text-indent:.2rem;text-align: center;}
      }
    }
  }
</style>
