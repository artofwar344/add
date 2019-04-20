<style lang="less" scoped>
html,body{height:100%;}
  .infoCheck {
    height:100%;
  }
  .list .title{margin-top: .2rem; height: .44rem; padding-left: 0.36rem;text-align: left;color: #999;font-size: .24rem;}
  .list>li{background: #fff;padding: 0.1rem 0.36rem 0.1rem;height:0.7rem;line-height: 0.7rem;}
  .list p{text-align: left;zoom:1;font-size: 0.28rem; color: #333;}
  .list p:after{content: '';display: block;clear: both;}
  .list span{float: right;}
  .list img{height:2.12rem;float: right}
</style>

<template>
    <div class="infoCheck">
<myheader :my-header="headerData"></myheader>
<div class="content">
    <ul class="list" v-for="item in loanData" :key="item.id">
        <div class="title">月还款额</div>
                <li><p>公积金贷款<span>{{item.month_fundLoan}}</span></p></li>
                <li><p>商业贷款<span>{{item.month_businessLoan}}</span></p></li>
                <li><p>差额<span>{{item.month_gap}}</span></p></li>

            <div class="title">还款总额</div>
                <li><p>公积金贷款<span>{{item.fundLoan}}</span></p></li>
                <li><p>商业贷款<span>{{item.businessLoan}}</span></p></li>
                <li><p>差额<span>{{item.gap}}</span></p></li>
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
        title: "与商贷比较",
        backUrl: "/ReimbursementTrialResult"
      },
      loanData:[
          {
              id:0,
              month_fundLoan:'1,293.38',
              month_businessLoan:'1,293.38',
              month_gap:'586.76',
              fundLoan:'1,293.38',
              businessLoan:'1,293.38',
              gap:'4486.76'
          }
      ]
    }
  }
    
}
</script>
