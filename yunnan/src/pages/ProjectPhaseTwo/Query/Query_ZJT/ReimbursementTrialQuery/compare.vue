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
  .infoCheck .hui-field_title{
    width: 2.5rem;
  }
</style>

<template>
  <div class="infoCheck">
    <myheader :my-header="headerData"></myheader>
    <div class="content">
        <ul class="list">
            <div class="title">月还款额</div>
            <li><p>公积金贷款<span>{{res.surplusMonthRepaymentAmount}}元</span></p></li>
            <li><p>商业贷款<span>{{res.commercialMonthRepaymentAmount}}元</span></p></li>
            <li><p>差额<span>{{res.balanceMonthRepaymentAmount}}元</span></p></li>
            <div class="title">还款总额</div>
            <li><p>公积金贷款<span>{{res.surplusRepaymentSum}}元</span></p></li>
            <li><p>商业贷款<span>{{res.commercialRepaymentSum}}元</span></p></li>
            <li><p>差额<span>{{res.balanceRepaymentSum}}元</span></p></li>
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
        backUrl: "/ReimbursementTrialResult",
      },
      res:this.$route.query.res,
    }
  },
  created(){
    console.log(this.$route.query)
  },
  mounted(){

  },
  methods:{

  },
  computed:{
    loanData(){
      return  this.$route.query.result
    }
  }
    
}
</script>
