<template>
	<div class="listTop">
		<towtop :name="titlename"/>
       <!-- <div class="listOne">
       	<div @click='tolink(list)' v-for="list in datatext" :key="list.guid">
       	   <p>{{list.bulletinTitle}}</p><span>{{statusClass[list.tenderStatus]}}</span>
           <h1>{{list.purchaseProjectCode}}<a>{{list.bulletinStartTime}}–{{list.bidDocReferEndTime}}</a></h1>
       	</div>
       </div> -->

        <div class="bidding_main">
          <Loadmore  :bottom-method="loadBottom"
                     :bottomPullText="loadmoreBottomPullText"
                     @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul>
                <li @click='tolink(list)' class="bor_b bidding_list" v-for="list in datatext" :key="list.guid">
                    <p class="dis_flex margin_b16">
                        <span class="flex_1 corporate_name">公告名称：{{list.bulletinTitle}}</span>
                    </p>

                    <p class="dis_flex font-24 margin_b16">
                        <span class="col_999 flex_1 tx_left">项目编号：{{list.purchaseProjectCode}}</span>
                    </p>
                    <p class="dis_flex font-24 margin_b16">
                        <span class="col_999 flex_1 tx_left">发布时间：{{list.bulletinStartTime}}</span></p>
                    <p class="dis_flex font-24">
                        <span class="col_999 flex_1 tx_left">截止时间：{{list.bulletinEndTime}}</span>
                    </p>
                     <p class="dis_flex margin_b16">
                        <span class="col_fb ">发布状态：{{statusClass[list.tenderStatus]}}</span>
                    </p>
                </li>
            </ul>
          </Loadmore>
          <div style="padding-top: .8rem">当前第{{currentpage}}页，共{{totalData}}条， 共{{totalPage}}页</div>
        </div>
	</div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  components: {
    towtop
  },
  data() {
    return {
      titlename: "政府采购采购公告查询",
      datatext: {},
      params: this.$route.params,
      statusClass: ["招标中", "已截止"],
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
      this.$ajaxRequest("post", "/gsp/mng30025", setdata, pagejump).then((res) => {
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
            "bulletinType": "6",
          }
      }
      this.$ajaxRequest("post","/gsp/mng30026", setdata).then(res => {
          console.log(res);
          this.$router.push({
            name: "buildingThree",
            params: { datatext: res }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.parameter();
  }
};
</script>
<style lang='less' scoped>
 @import  "../../../../assets/css/Affairs.less";
 .corporate_name{display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;}
.listOne {
  width: 100%;
  height: 1.5rem;
  text-align: left;
  border-bottom: 1px solid #f1f3f6;
}
.listOne div {
  padding: 0.2rem 0rem;
  background: white;
}
.listOne p {
  font-family: PingFangSC-Regular;
  font-size: 0.25rem;
  color: #333333;
  letter-spacing: 0;
  margin-top: 0.32rem;
  margin-left: 0.38rem;
  width: 5.2rem;
}
.listOne h1 {
  font-family: PingFangSC-Regular;
  font-size: 0.22rem;
  color: #999999;
  letter-spacing: 0;
  margin-top: 0.16rem;
  margin-left: 0.38rem;
}
.listOne h1 a {
  text-align: right;
  font-family: PingFangSC-Regular;
  font-size: 0.22rem;
  color: #999999;
  letter-spacing: 0;
  text-align: right;
  margin-left: 2rem;
}
.listOne span {
  display: block;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #2d7ffc;
  letter-spacing: 0;
  text-align: right;
  margin-right: 0.4rem;
  margin-top: -0.3rem;
}
</style>
