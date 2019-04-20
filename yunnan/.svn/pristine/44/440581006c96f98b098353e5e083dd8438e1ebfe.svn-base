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
                <li><p>公贷月还款额<span>{{resultData.month_fundLoan}}</span></p></li>
                <li><p>公贷应还款利息总额<span>{{resultData.month_businessLoan}}</span></p></li>
                <li><p>工代还款总额<span>{{resultData.month_gap}}</span></p></li>
            </ul>
            <div class="btn_wrap">
                <router-link tag="div" to="/">
                    <Btn size="large">还款计划</Btn>
                </router-link>
                <router-link tag="div" to="/ReimbursementTrialCompare">
                    <Btn type="danger" size="large">与商贷比较</Btn>
                </router-link>
            </div>
    <ul class="list" >
                <li><p>商贷月还款额<span>{{resultData.fundLoan}}</span></p></li>
                <li><p>商贷应还款利息总额<span>{{resultData.businessLoan}}</span></p></li>
                <li><p>商贷还款总额<span>{{resultData.gap}}</span></p></li>
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
      resultData: {
        id: 0,
        month_fundLoan: "1,293.38",
        month_businessLoan: "1,293.38",
        month_gap: "586.76",
        fundLoan: "1,293.38",
        businessLoan: "1,293.38",
        gap: "4486.76"
      }
    };
  }
};
</script>
