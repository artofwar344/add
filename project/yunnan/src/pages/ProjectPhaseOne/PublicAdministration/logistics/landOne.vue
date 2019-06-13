<template>
	<div class="listTop">
		<towtop :name='titlename'/>
    <Loadmore  :bottom-method="loadBottom"
               :bottomPullText="loadmoreBottomPullText"
               @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
       <div class="listOne" @click='tolink(list)' v-for="list in datatext" :key="list.guid"
        style="padding: .2rem; background-color: white; text-align: left"
       >
       	    <p>公示标题：{{list.announcementTitle}}</p>
            <h1>公示编号：{{list.announcementCode}}</h1>
            <h1>发布时间：{{list.publishingTime}}</h1>
       </div>
    </Loadmore>
    <div style="padding-top: .8rem">当前第{{currentpage}}页，共{{totalData}}条， 共{{totalPage}}页</div>
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
      titlename: "土地使用权出让公告查询",
      datatext: {},
      params: this.$route.params,
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
      this.$ajaxRequest("post", "/gsp/mng30041", setdata, pagejump).then((res) => {
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
      console.log(JSON.parse(this.params.datatext).list);
      this.datatext = JSON.parse(this.params.datatext).list;
      this.totalData = JSON.parse(this.params.datatext).txnCommCom.totalRec;
      this.totalPage = JSON.parse(this.params.datatext).txnCommCom.totalPage;
    },
    tolink(item) {
      console.log(item.announcementGuid);
      let setdata = {
        txnCommCom: {
          tRecInPage: "",
          tPageJump: "",
          tStsTraceId: ""
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "0",
          announcementGuid: item.announcementGuid,
          guid: item.announcementGuid,
          bulletinType: "14"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng30042", setdata)
        .then(res => {
          this.$router.push({
            name: "landdetails",
            params: { datatext: res }
          });
        })
        .catch(error => {
          console.log(error);
          this.$toast("查询失败！");
        });
    }
  },
  mounted() {
    this.parameter();
  }
};
</script>

<style  scoped>
.listOne {
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
  text-align: left;
  border-bottom: 1px solid #f1f3f6;
  background: white;
}
.listOne p {
  font-family: PingFangSC-Regular;
  font-size: 0.25rem;
  color: #333333;
  line-height: 0.4rem;
  letter-spacing: 0;
  padding: 0rem 0.38rem;
  box-sizing: border-box;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  margin-left: 2.6rem;
}
</style>
