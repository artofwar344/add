<style lang="less" scoped>
html,
body {
  height: 100%;
}
.infoCheck {
  height: 100%;
}
.content {
  margin-top: 0.16rem;
}
.list .title {
  margin-top: 0.2rem;
  height: 0.44rem;
  padding-left: 0.36rem;
  text-align: left;
  color: #999;
  font-size: 0.24rem;
}
.list > li {
  background: #fff;
  padding: 0.1rem 0.36rem 0.1rem;
  height: 0.7rem;
  line-height: 0.7rem;
}
.list p {
  text-align: left;
  zoom: 1;
  font-size: 0.28rem;
  color: #333;
}
.list p:after {
  content: "";
  display: block;
  clear: both;
}
.list span {
  float: right;
}
.list img {
  height: 2.12rem;
  float: right;
}
.btn_wrap{
    padding: 1rem 0rem;
    display: flex;
    justify-content:space-evenly;
    width: 100%;
}
.hui-btn-large{
    height: .9rem;
    width: 2.8rem;
    font-size: .32rem;
    color: white;
}
</style>

<template>
    <div class="infoCheck">
<myheader :my-header="headerData"></myheader>
<div class="content">
    <ul class="list" >
                <li><p>公贷月还款额<span>{{resultData.monthRepaymentAmount}}元</span></p></li>
                <li><p>公贷应还款利息总额<span>{{resultData.repaymentRateSum}}元</span></p></li>
                <li><p>公贷还款总额<span>{{resultData.repaymentSum}}元</span></p></li>
            </ul>
            <div class="btn_wrap">
              <Btn size="large" @click="reimbursementPlan">还款计划</Btn>
              <Btn type="danger" size="large" @click="compare">与商贷比较</Btn>
            </div>
            <ul class="list" v-if="state == true">
                <li><p>商贷月还款额<span>{{resultData.sdmonthRepaymentAmount}}元</span></p></li>
                <li><p>商贷应还款利息总额<span>{{resultData.sdrepaymentRateSum}}元</span></p></li>
                <li><p>商贷还款总额<span>{{resultData.sdrepaymentSum}}元</span></p></li>
            </ul>
</div>
    </div>
</template>

<script>
import Header from "@/components/header/header";
export default {
  components: {
    myheader: Header
  },
  data() {
    return {
      headerData: {
        title: "还款结果",
        backUrl: "/ReimbursementTrialQuery"
      },
      state:false,
      resultData:{},
      ReimbursementPlan:{},
    };
  },
  created(){
    let MpfNum = sessionStorage.getItem("MpfNum");
    let MpfNumTwo = sessionStorage.getItem("MpfNumTwo");
    let MpfNumState = sessionStorage.getItem("MpfNumState");
    this.resultData = JSON.parse(MpfNum);
    this.ReimbursementPlan = JSON.parse(MpfNumTwo);
    if(MpfNumState == "组合贷款"){
      this.state = true;
    }
  },
  mounted(){
  },
  methods:{
    reimbursementPlan(){
      let _this = this;
      let sendData = {
        "txnBodyCom":{
          matter_id: window.sessionStorage.getItem('matterid'),
          userId: window.sessionStorage.getItem("MpfUserId"),
          surplusLoanAmount: _this.ReimbursementPlan.gongjijinSum,
          loanDuration: _this.ReimbursementPlan.loanDuration,
          surplusLoanInterestRate: _this.ReimbursementPlan.gongjijinInterest,
          repaymentType: _this.ReimbursementPlan.repaymentType,
          buzType:"5082"
        }
      }
      debugger
      _this.$ajaxRequest("post", "gsp/mng19051",sendData)
      .then(res => {
        // debugger
        if(res.recode == '000000'){
          _this.$router.push({
            name: 'ReimbursementPlan',
            query:{
              res:res.result,
            }
          });
        }else{
          _this.$toast(res.msg)
        }
      })
      .catch(error => {
        _this.$toast("网络错误,请重试")
      });
    },//还款计划查询
    compare(){
      let _this = this;
      let sendData = {
        "txnBodyCom":{
          matter_id: window.sessionStorage.getItem('matterid'),
          userId: window.sessionStorage.getItem("MpfUserId"),
          monthRepaymentAmount: _this.resultData.monthRepaymentAmount,
          repaymentSum: _this.resultData.repaymentSum,
          commercialLoanAmount: _this.ReimbursementPlan.gongjijinSum,
          loanDuration: _this.ReimbursementPlan.loanDuration,
          repaymentType: _this.ReimbursementPlan.repaymentType,
          commercialLoanInterestRate: _this.ReimbursementPlan.commercialLoanInterestRate,
          buzType:"5082",
        }
      }
      _this.$ajaxRequest("post", "gsp/mng19032",sendData)
      .then(res => {
        // debugger
        if(res.recode == '000000'){
          _this.$router.push({
            name: 'ReimbursementTrialCompare',
            query:{
              res:res.result
            }
          });
        }else{
          _this.$toast(res.msg)
        }
      })
      .catch(error => {
        _this.$toast("网络错误,请重试")
      });
    } //与商贷比较
  },
  computed:{
    // resultData(){
    //   return  this.$route.query.result
    // }
  }
};
</script>
