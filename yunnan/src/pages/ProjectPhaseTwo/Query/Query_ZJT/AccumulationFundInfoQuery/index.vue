

<template>
    <div class="infoCheck">
        <myheader :my-header="headerData"></myheader>
        <div class="content">
            <ul class="list" v-show="resultData.length!=0">
                <li v-for="item in resultData"><p>{{item.title}}<span>{{item.info}}</span></p></li>
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
      resultData:[]
    };
  },
  created() {
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
    this.getInfo();
  },
  methods:{
    getInfo(){
      let setdata = {
      txnBodyCom: {
        buzType: "5001",
        matter_id:window.sessionStorage.getItem("matterid"),
        userId: window.sessionStorage.getItem("MpfUserId"),
      }
    };
    this.$ajaxRequest("post", "/gsp/mng19005", setdata)
      .then(res => {
          console.log(res);
          this.resultData = res.result;
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
