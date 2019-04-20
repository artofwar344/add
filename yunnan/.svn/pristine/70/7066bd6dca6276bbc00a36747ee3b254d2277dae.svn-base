
<template>
	<div>
		<towtop :name='titlename'/>
		<div class="bidding_main">
      <Loadmore  :bottom-method="loadBottom"
                 :bottomPullText="loadmoreBottomPullText"
                 @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
		<ul>
			<li @click='tolink(list)' class="bor_b bidding_list" v-for="list in datatext" :key="list.guid">
				<p class="dis_flex margin_b16"><span class="flex_1 corporate_name">公告名称：{{list.projectName}}</span></p>

				<p class="dis_flex font-24 margin_b16">
          <span class="col_999 flex_1 tx_left">项目编号：{{list.projectCode}}</span></p>
        <p class="dis_flex font-24"><span class="col_999 flex_1 tx_left">发布时间：{{list.tradeDate}}</span></p>
        <p class="dis_flex margin_b16"><span class="col_fb " v-if="list.type=='sw'">产权类型：{{typeClass[0]}}</span>
				<span class="col_fb " v-else-if="list.type=='gq'">产权类型：{{typeClass[1]}}</span>
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
      titlename: "国有产权成交结果查询",
      datatext: {},
      params: this.$route.params,
      statusClass: ["sw", "gq"],
      typeClass: ["实物", "股权"],
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
      this.$ajaxRequest("post", "/gsp/mng30035", setdata, pagejump).then((res) => {
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
      let setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "1",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "0",
          guid: item.guid,
          bulletinType: "11",
          gycqType: item.type
        }
      };
      this.$ajaxRequest("post", "/gsp/mng30036", setdata)
        .then(res => {
          console.log(res);
          this.$router.push({
            name: "stateownedTwo",
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

<style lang='less' scoped>
@import "../../../../assets/css/Affairs.less";
.corporate_name{display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;}
</style>
