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
    <div class="infoCheck" >
        <myheader :my-header="headerData"></myheader>
        <MsgList :list="msgList" v-if="state == true"/>
    </div>
</template>
<script>
import Header from "@/components/header/header";
import MsgList from "./components/MsgList";
import Common from "./components/Common.js";
export default {
  components: {
    myheader: Header,
    MsgList
  },
  data() {
    return {
      headerData: {
        title: "贷款信息查询",
        backUrl: "/gongjijin"
      },
      msgList:[],
      title:[
        '借款合同号',
        '借款人姓名',
        '贷款金额',
        '还款银行',
        '已还本金',
        '已还利息',
        '贷款余额',
        '贷款期限',
        '贷款利率',
        '还款方式',
        '借款日期',
        '止贷日期',
        '逾期期数',
        '欠还本金',
        '欠还利息',
        '欠还罚息'
      ],
      state:Boolean
    };
  },
  created(){
    const _this = this;
    let CmnRouter = sessionStorage.getItem("CmnRouter")
    if(CmnRouter != _this.$route.path){
      sessionStorage.setItem("cmnSrc",_this.$route.path)
      _this.$router.push({
          path: "QueryUserCity"
      })
      return false
    }
    sessionStorage.removeItem("CmnRouter");
    _this.init()
  },
  mounted(){},
  methods:{
    init(){
      let _this = this;
      let sendData = {
        "txnBodyCom": {
          matter_id:window.sessionStorage.getItem('matterid'),
          userId: window.sessionStorage.getItem("MpfUserId"),
          buzType:"5071"
        }
      }
      _this.$ajaxRequest("post", "gsp/mng19007",sendData)
      .then(res => {
        if(res.recode == '000000'){
          _this.msgList = Common.filter(_this.title,res.result);
          _this.state = true;
        }else{
          _this.$toast('无个人贷款信息')
        }
      })
      .catch(error => {
        _this.$toast("网络错误,请重试")
      });
    }
  },
  computed:{},
  watch:{}
};
</script>
