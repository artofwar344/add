<style scoped>
html,body{height:100%;}
  .infoCheck {
    background:#f1f3f6;
    height:100%;
  }
  .list{background: #fff;padding-top: .2rem;margin-top: .16rem;}
  .list>li{padding: 0.1rem 0.36rem 0.1rem;height:0.7rem;line-height: 0.7rem;}
  .list p{text-align: left;zoom:1;font-size: 0.28rem; color: #333;}
  .list p:after{content: '';display: block;clear: both;}
  .list span{float: right;color: #999}
  .list img{height:2.12rem;float: right}
</style>

<template>
    <div class="infoCheck">
        <myheader :my-header="headerData"></myheader>
        <div class="content">
            <ul class="list">
                <li><p>借款合同号<span>{{loanData.contract}}</span></p></li>
                <li><p>借款人姓名<span>{{loanData.name}}</span></p></li>
                <li><p>贷款金额<span>{{loanData.loanMoney}}</span></p></li>
                <li><p>还款银行<span>{{loanData.bank}}</span></p></li>
                <li><p>已还本金 <span>{{loanData.paidMoney}}</span></p></li>
                <li><p>已还利息 <span>{{loanData.paidInterest}}</span></p></li>
                <li><p>贷款余额 <span>{{loanData.loanLast}}</span></p></li>
                <li><p>贷款期限 <span>{{loanData.loanTime}}</span></p></li>
                <li><p>贷款利率 <span>{{loanData.loanInterest}}</span></p></li>
                <li><p>还款方式 <span>{{loanData.paidWay}}</span></p></li>
                <li><p>借款日期 <span>{{loanData.borrowDate}}</span></p></li>
                <li><p>止贷日期 <span>{{loanData.stopDate}}</span></p></li>
                <li><p>逾期期数 <span>{{loanData.overdueTime}}</span></p></li>
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
        title: "贷款信息查询",
        backUrl: "/gongjijin"
      },
     loanData: {
        contract: '21****0487',
        name: '何洋洋',
        loanMoney: '400,000.00',
        bank: '省直建行青年路支行',
        paidMoney: '0.00',
        paidInterest: '0.00',
        loanLast: '589,485.38',
        loanTime: '312',
        loanInterest: '3.25%',
        paidWay: '等额本息',
        borrowDate: '2018-05-17',
        stopDate: '2034-04-16',
        overdueTime: '0天'
      }
    };
  }
};
</script>
