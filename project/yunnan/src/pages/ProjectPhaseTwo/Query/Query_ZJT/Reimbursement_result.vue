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
            <ul class="list" v-for="item in ReimData" :key="item.id">
                <li><p>业务日期<span>{{item.Date}}</span></p></li>
                <li><p>期数<span>{{item.time}}</span></p></li>
                <li><p>业务类型<span>{{item.type}}</span></p></li>
                <li><p>本金金额<span>{{item.corpus}}</span></p></li>
                <li><p>利息金额 <span>{{item.interest}}</span></p></li>
                <li><p>罚息金额 <span>{{item.default_Money}}</span></p></li>
                <li><p>合计金额 <span>{{item.total}}</span></p></li>
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
        title: "还款明细查询",
        backUrl: "/Reimbursement"
      },
      ReimData:[
          {
              id:0,
              Date:'2018-05-17',
              time:'1',
              type:'日终公积金代扣还款',
              corpus:'1,293.38',
              interest:'1,293.38',
              default_Money:'0',
              total:'2,586.76'
          },
          {
              id:1,
              Date:'2018-05-17',
              time:'1',
              type:'日终公积金代扣还款',
              corpus:'1,293.38',
              interest:'1,293.38',
              default_Money:'0',
              total:'2,586.76'
          }
      ]
    }
  }
    
}
</script>
