

<template>
    <div class="infoCheck">
        <myheader :my-header="headerData"></myheader>
        <div class="content">
            <ul class="list">
                <li><p>个人公积金账号<span>{{loanData.contract}}</span></p></li>
                <li><p>个人姓名<span>{{loanData.name}}</span></p></li>
                <li><p>证件号码<span>{{loanData.loanMoney}}</span></p></li>
                <li><p>个人手机号码<span>{{loanData.bank}}</span></p></li>
                <li><p>最后汇缴月 <span>{{loanData.paidMoney}}</span></p></li>
                <li><p>上次提取日 <span>{{loanData.paidInterest}}</span></p></li>
                <li><p>缴存基数 <span>{{loanData.loanLast}}</span></p></li>
                <li><p>单位比例 <span>{{loanData.loanTime}}</span></p></li>
                <li><p>个人比例 <span>{{loanData.loanInterest}}</span></p></li>
                <li><p>月缴额合计 <span>{{loanData.paidWay}}</span></p></li>
                <li><p>余额 <span>{{loanData.borrowDate}}</span></p></li>
                <li><p>账户状态 <span>{{loanData.stopDate}}</span></p></li>
                <li><p>单位名称 <span>{{loanData.overdueTime}}</span></p></li>
                <li><p>单位账号 <span>{{loanData.overdueTime}}</span></p></li>
                <li><p>所属机构 <span>{{loanData.overdueTime}}</span></p></li>
                <li><p>所缴存住房公积金银行 <span>{{loanData.overdueTime}}</span></p></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Header from "@/components/header/header";
import { cenurl } from "@/components/toptow.js";
export default {
  components: {
    myheader: Header
  },
  data() {
    return {
      headerData: {
        title: "公积金信息查询",
        backUrl: "/gongjijin"
      },
      loanData:{}
    };
  },
  created() {
    
  },
  methods:{
    getInfo(){
      let setdata = {
      txnCommCom: {
        tRecInPage: "",
        tPageJump: "",
        tStsTraceId: "110567890"
      },
      txnBodyCom: {
        org_id: "1",
        chann_id: "1",
        matter_id: window.sessionStorage.getItem("matterid"),
        work_id: "1",
        member_id: "1",
        OrganizationCode: "1"
      }
    };
    this.$ajaxRequest("post", "/gsp/mng19005", setdata)
      .then(res => {
        if (res.status == 200) {
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>
<style lang="less" scoped>
html,body{height:100%;}
.infoCheck{
    background:#f1f3f6;
    height:100%;

  .list{background: #fff;padding: .2rem 0 ;margin-top: .16rem;}
  .list>li{padding: 0.1rem 0.36rem 0.1rem;height:0.7rem;line-height: 0.7rem;}
  .list p{text-align: left;zoom:1;font-size: 0.28rem; color: #333;}
  .list p:after{content: '';display: block;clear: both;}
  .list span{float: right;color: #999}
  .list img{height:2.12rem;float: right}
}
</style>
