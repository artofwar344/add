<style lang="less" scoped>
.list {
  margin-top: 0.16rem;
  li {
    border-top: 0.02rem solid #e2e0e0;
    background: white;
    padding: 0.32rem 0.35rem 0.3rem 0.38rem;
    h4 {
      color: #333333;
      font-size: 0.28rem;
      line-height: 0.35rem;
      margin-bottom: 0.14rem;
      text-align: left;
      display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
    }
    p {
      font-size: 0.24rem;
      color: #999999;
      text-align: left;
      span {
        float: right;
      }
    }
  }
}
</style>

<template>
    <div class="list_wrap">
        <myheader :my-header="headerData"></myheader>
      <Loadmore  :bottom-method="loadBottom"
                 :bottomPullText="loadmoreBottomPullText"
                 @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="list">
          <li @click='tolink(item)' :to="{name:'detailInfo',params:{detailData:item}}" v-for="item in datatext" :key="item.id">
            <h4>公告名称：{{item.bulletinName}}</h4>
            <p>标段编号：{{item.bidSectionCodes}}</p>
            <p>发布时间：{{item.bulletinIssueTime}}</p>
          </li>
        </ul>
      </Loadmore>
      <div style="padding-top: .8rem">当前第{{currentpage}}页，共{{totalData}}条， 共{{totalPage}}页</div>
    </div>
</template>

<script>
import Header from "@/components/header/header";
import { cenurl } from "../../../../components/toptow.js";
export default {
  data() {
    return {
      params: this.$route.params,
      headerData: {
        title: "工程建设中标结果查询",
        backUrl: "/projectCheck"
      },
      datatext: {},
      currentpage: 1,
      totalData: 0,
      totalPage: 0,
      loadmoreBottomPullText: "上拉加载",
      allLoaded: false
    };
  },
  methods: {
    handleBottomChange (status) {
      console.log(status)
    },
    loadBottom() {
      let _self = this;
      if(this.totalPage == 1) {
        let _self = this;
        _self.allLoaded = true
        _self.$refs.loadmore.onBottomLoaded();
        return;
      }
      if(_self.currentpage == _self.totalPage) {
        _self.$refs.loadmore.onBottomLoaded();
        _self.loadmoreBottomPullText = "没有更多内容";
        return;
      }
      let setdata = {
        txnBodyCom : JSON.parse(window.sessionStorage.getItem("ggj_query"))
      }
      let pagejump = {
        "tRecInPage": "15",
        "tPageJump": ++ _self.currentpage +"",
      }
      this.$ajaxRequest("post", "/gsp/mng30021", setdata, pagejump).then((res) => {
        this.totalData = res.txnCommCom.totalRec;
        this.totalPage = res.txnCommCom.totalPage;
        if (!parseInt(res.txnCommCom.totalRec) <= 0) {
          _self.datatext = _self.datatext.concat(res.list);
          _self.totalrec = res.txnCommCom.totalRec;
          _self.$refs.loadmore.onBottomLoaded();
        }
      });
    },
    parameter() {
      console.log(this.params.datatext.list);
      this.datatext = JSON.parse(this.params.datatext).list;
      this.totalData = JSON.parse(this.params.datatext).txnCommCom.totalRec;
      this.totalPage = JSON.parse(this.params.datatext).txnCommCom.totalPage;
    },
    tolink(item) {
      let setdata={
        "txnCommCom": {
            "tRecInPage": "",
            "tPageJump": "",
            "tStsTraceId": ""
          },
          "txnBodyCom": {
            "matter_id": window.sessionStorage.getItem("matterid"),
            "chann_id": "0",
            "guid": item.guid,
            "bulletinType": "4"
          }
      }
//       let setdata={"txnCommCom":{
// "tRecInPage":"",
// "tPageJump":"",
// "tStsTraceId":""
// },"txnBodyCom":{"matter_id":"000","chann_id":"0","guid":item.guid,"bulletinType":"4"}}
      console.log(setdata)
      this.$ajaxRequest("post","/gsp/mng30022", setdata).then(res => {
          console.log(res);
          this.$router.push({
            name: "detailInfo",
            params: { datatext: res }
          });
        })
        .catch(error => {
          console.log(error);
          this.$toast('查询失败！');
        });
    }
  },
  created() {
    this.parameter();
  },
  components: {
    myheader: Header
  }
};
</script>
