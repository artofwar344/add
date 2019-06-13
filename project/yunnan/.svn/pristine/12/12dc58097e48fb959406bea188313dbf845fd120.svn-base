<template>
  <div class="ReiinfoCheck">
    <myheader :my-header="headerData"></myheader>
    <div class="content">
      <ul class="list">
        <li>
          <Field
            readonly
            :error="errorselectTypeInfo"
            :propserror="errorselectTypeData" label="贷款类型"
            disableclear type="text" :value="selectTypeDefaultData" class="selectTypeData"
            v-model="selectTypeDefaultData"
            v-on:errorchange="errorChangeFun" @click.native="open('typeSelect')">
            <span slot="append">
              <Icon type="arrow-right" size="14"  color="#757575"></Icon>
            </span>
          </Field>
          <Selectpopup
            ref="typeSelect"
            position="bottom"  
            :dataslots="selectTypeData"
            @confirms="selectInTypeData"
          ></Selectpopup>
        </li>
        <li>
          <Field v-model="gongjijinSum" type="number" label="公积金贷款金额" :value="gongjijinSum" placeholder="">
            <span slot="append">
              万元
            </span>
          </Field>
        </li>
        <li v-if="state == false">
          <Field v-model="shangyedaiSum" type="number" label="商业贷款金额" :value="shangyedaiSum" placeholder="">
            <span slot="append">
              万元
            </span>
          </Field>
        </li>
        <li>
          <Field readonly :error="errorselectTypeInfo" :propserror="errorselectTypeData"  label="贷款期限"
                 disableclear type="text" v-model="selectDeadlineDefaultData"  :value="selectDeadlineDefaultData" class="selectTypeData"
                 v-on:errorchange="errorChangeFun" @click.native="open('DeadlineSelect')">
            <span slot="append">
              <Icon type="arrow-right" size="14"  color="#757575"></Icon>
            </span>
          </Field>
          <Selectpopup
            ref="DeadlineSelect"
            position="bottom"  
            :dataslots="selectDeadlineData"
            :visible-item-count="5"
            @selectval="selectChangeFun2"
            @confirms="selectInDeadlineData"
          ></Selectpopup>
        </li>
        <li>
          <Field v-model="gongjijinInterest" type="number" :disabled="disabled" label="公积金贷款利率" :value="gongjijinInterest">
            <span slot="append">
              %
            </span>
          </Field>
        </li>
        <li>
          <Field v-model="shanyedaiInterest" type="number" :disabled="disabled"  label="商业贷款利率" :value="shanyedaiInterest">
            <span slot="append">
              %
            </span>
          </Field>
        </li>
        <li>
          <Field readonly :error="errorselectTypeInfo" :propserror="errorselectTypeData"  label="还款方式"
                 disableclear type="text"  v-model="selectHuankuanDefaultData" :value="selectHuankuanDefaultData"
                 v-on:errorchange="errorChangeFun" @click.native="open('HuankuanSelect')">
            <span slot="append">
              <Icon type="arrow-right" size="14"  color="#757575"></Icon>
            </span>
          </Field>
          <Selectpopup
            ref="HuankuanSelect"
            position="bottom"  
            :dataslots="selectHuankuanData"
            @confirms="selectInHuankuanData"
          ></Selectpopup>
        </li>
      </ul>
       <div class="btn_wrap">
          <div @click="goto">
              <Btn size="large" >计算</Btn>
          </div>
          <div>
              <Btn type="danger" size="large" @click="reset">重置</Btn>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header'
import Common from "../LoanInfoQuery/components/Common"
import { isSymbol, debug } from 'util';
const deadlineData = {
        '10年': ['120期', '100期', '90期'],
        '15年': ['180期', '150期', '120期']
      }
export default {
  components: {
    myheader: Header
  },
  data () {
    return {
      headerData: {
        title: '还款试算',
        backUrl: '/'
      },
      deadlineData: [
        '10年',
        '15年'
      ],
      errorselectTypeData: false,
      errorselectTypeInfo: '',
      selectTypeData: [
        {
          flex: 1,
          values: ['公积金贷款', '组合贷款'],
          className: 'slot1',
          defaultIndex: 0
        }
      ],
      selectHuankuanData: [
        {
          flex: 1,
          values: ['等额本息', '等额本金'],
          className: 'slot1',
          defaultIndex: 0
        }
      ],
      selectDeadlineData: [{
        flex: 1,
        values: [],
        className: 'slot1',
        showText: 'text',
        defaultIndex: 0
      }],
      selectTypeDefaultData: ['公积金贷款'],
      selectHuankuanDefaultData: ['等额本息'],
      selectDeadlineDefaultData: "20年 240期",
      // selectDeadlineDefaultData: [],
      gongjijinSum: '',
      shangyedaiSum: '0',
      gongjijinInterest: '',
      shanyedaiInterest: '',
      endDate: {
          loanDuration: "10",
      },
      state:true,
      disabled:true,
    }
  },
  conputed: {},
  created(){
    let _this = this;
    let CmnRouter = sessionStorage.getItem("CmnRouter")
    if(CmnRouter != this.$route.path){
      sessionStorage.setItem("cmnSrc",_this.$route.path)
      _this.$router.push({
          path: "QueryUserCity"
      })
      return false
    }
    sessionStorage.removeItem("CmnRouter");
    this.init()
    this.interestRate("20")
  },
  methods: {
    init(){
      let _this = this;
      var arr = []
      for (let i = 1; i <= 30; i++) {
        if(i>=1 && i<=9){
          i = "0"+i
        }
        if(i>=10){
          i = JSON.stringify(i)
        }
        arr.push({
            value: i,
            text: i+"年"+" "+i*12+"期"
        })
      }
      _this.selectDeadlineData[0].values = arr
    },
    setVaule: function () {
      let _self = this
      _self.selectDeadlineData[0].values = Object.keys(_self.deadlineData)
    },
    open: function (picker) {
      this.$refs[picker].open()
      document.activeElement.blur()
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectChangeFun2: function (picker, val) { // 只有是二级的时候才有这个方法
      let _self = this
      let data = _self.deadlineData[val[0]]
      picker.setSlotValues(1, data)
    },
    errorChangeFun (val) {
      this.errorselectTypeData = val
    },
    selectInTypeData (selectedVal) {
      if(selectedVal[0] == "组合贷款"){
        this.state = false;
        this.shangyedaiSum = ""
      }else{
        this.state = true;
        this.shangyedaiSum = "0";
      }
      if (typeof selectedVal[0] === 'object') {
        this.selectTypeDefaultData = selectedVal[0].text
      } else {
        this.selectTypeDefaultData = selectedVal
      }
    },
    selectInDeadlineData (selectedVal) {
      console.log(selectedVal)
      this.interestRate(selectedVal[0].value)
      if (typeof selectedVal[0] === 'object') {
        this.selectDeadlineDefaultData = selectedVal[0].text
      } else {
        this.selectDeadlineDefaultData = selectedVal
      }
    }, //贷款期限选择
    selectInHuankuanData (selectedVal) {
      if (typeof selectedVal[0] === 'object') {
        this.selectHuankuanDefaultData = selectedVal[0].text
      } else {
        this.selectHuankuanDefaultData = selectedVal
      }
    },
    interestRate(data){
      let _this = this;
      // data = data.substr(0, data.length - 1);
      _this.endDate.loanDuration = data;
      let sendData = {
        "txnBodyCom":{
          matter_id: window.sessionStorage.getItem('matterid'),
          userId: window.sessionStorage.getItem("MpfUserId"),
          buzType:"5082",
          loanDuration:data
        }
      }
      _this.$ajaxRequest("post", "gsp/mng19030",sendData)
      .then(res => {
        if(res.recode == '000000'){
          this.gongjijinInterest = res.result.surplusLoanInterestRate
          this.shanyedaiInterest = res.result.commercialLoanInterestRate     
        }else{
          _this.$toast(res.msg)
        }
      })
      .catch(error => {
        _this.$toast("网络错误,请重试")
      });
    }, //获取利率
    goto(){
      let _this = this;
      if(_this.gongjijinSum == ''){
        _this.$toast("请输入公积金贷款金额")
        return
      }
      if(this.selectTypeDefaultData[0] == "组合贷款" && _this.shangyedaiSum == ""){
        _this.$toast("请输入商业贷款金额")
        return
      }
      let selectHuankuanDefaultData
      if(_this.selectHuankuanDefaultData[0] == "等额本金"){
        selectHuankuanDefaultData = "20";
      }else{
        selectHuankuanDefaultData = "10"
      }
      let sendData = {
        "txnBodyCom":{
          matter_id: window.sessionStorage.getItem('matterid'),
          userId: window.sessionStorage.getItem("MpfUserId"),
          surplusLoanAmount: JSON.stringify(_this.gongjijinSum *10000),
          commercialLoanAmount: JSON.stringify(_this.shangyedaiSum *10000),
          loanDuration: _this.endDate.loanDuration,
          surplusLoanInterestRate: _this.gongjijinInterest,
          commercialLoanInterestRate: _this.shanyedaiInterest,
          repaymentType: selectHuankuanDefaultData,
          buzType: "5082"
        },
      }    
      _this.$ajaxRequest("post", "gsp/mng19031",sendData)
      .then(res => {
        if(res.recode == '000000'){
            let MpfNumTwo = {
                gongjijinSum: JSON.stringify(_this.gongjijinSum *10000),
                loanDuration: _this.endDate.loanDuration,
                gongjijinInterest: _this.gongjijinInterest,
                repaymentType: selectHuankuanDefaultData,
                commercialLoanInterestRate: _this.shanyedaiInterest
              }
            sessionStorage.setItem("MpfNum",JSON.stringify(res.result))
            sessionStorage.setItem("MpfNumTwo",JSON.stringify(MpfNumTwo))
            sessionStorage.setItem("MpfNumState",_this.selectTypeDefaultData[0])
            _this.$router.push({
              name: 'ReimbursementTrialResult',
            });
        }else{
          _this.$toast(res.msg)
        }
      })
      .catch(error => {
        _this.$toast("网络错误,请重试")
      });
    },
    reset(){
      let _this = this;
      _this.selectTypeDefaultData[0] = "公积金贷款";
      _this.selectDeadlineDefaultData = "20年 240期";
      _this.endDate.loanDuration = "20";
      _this.selectHuankuanDefaultData[0] = "等额本息";
      _this.gongjijinSum = "";
      _this.shangyedaiSum = "0";
      _this.state = true;
      _this.interestRate("20");
    }
  }
}
</script>

<style scoped>
.ReiinfoCheck .hui-field_title{
  font-size: .28rem;
  width: 2rem;
}
.ReiinfoCheck .hui-field_core{text-align: right;font-size: 0.28rem;}
.ReiinfoCheck .hui-field_append span{font-size: 0.28rem;}
.ReiinfoCheck .infoCheck {background: #f1f3f6;height: 100%;}
.ReiinfoCheck .list {background: rgb(255, 255, 255);margin-top: .16rem;}
.ReiinfoCheck .list > li {line-height: 0.7rem;border-bottom: 1px solid #ececec}
.ReiinfoCheck .list p {text-align: left;zoom: 1;font-size: 0.28rem;color: #333;}
.ReiinfoCheck .list p:after {content: '';display: block;clear: both;}
.ReiinfoCheck .list span {float: right;color: #999;}
.ReiinfoCheck .list img {height: 2.12rem;float: right;}
.ReiinfoCheck .btn_wrap{
    padding: 1rem 0rem;
    display: flex;
    justify-content:space-evenly;
    width: 100%;
}
.ReiinfoCheck .hui-btn-large{
    height: .9rem;
    width: 2.8rem;
    font-size: .32rem;
    color: white;
}


</style>


<style>
.ReiinfoCheck .hui-field_title{
  width: 3rem;
}
</style>
