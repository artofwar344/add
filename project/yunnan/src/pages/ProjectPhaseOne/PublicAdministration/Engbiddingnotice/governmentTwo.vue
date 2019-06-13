<template>
	<div>
		<towtop :name='titlename' />
    <!--<div class="alllist">我们为您找到相关结果约{{totalrec}}条</div>-->
		<div  class="bidding_main" ref="wrapper"  >
      <Loadmore  :bottom-method="loadBottom"
                 v-if="true"
                 :bottomPullText="loadmoreBottomPullText"
                @bottom-status-change="handleBottomChange"
                 :bottom-all-loaded="allLoaded"
                 ref="loadmore">
        <ul>
          <li @click='tolink(list)' class="bor_b bidding_list" v-for="list in datatext" :key="list.guid">
            <p class="dis_flex margin_b16">

              <span class="flex_1 corporate_name">公告名称：{{list.bulletinName}}</span></p>

            <!-- <p class="dis_flex font-24"> -->
              <p class="dis_flex margin_b16">
              <span class="col_999 flex_1">项目编号：{{list.tenderProjectCode}}</span></p>
              <p class="dis_flex margin_b16"><span class="col_999 flex_1">发布时间：{{list.bulletinIssueTime}}</span></p>
              <p class="dis_flex "><span class="col_999 flex_1">截止时间：{{list.bidDocReferEndTime}}</span>
              </p>
              <p class="dis_flex margin_b16"><span class="col_fb flex_1">发布状态：{{statusClass[list.tenderStatus]}}</span></p>
          </li>
        </ul>
      </Loadmore>
      <div style="padding-top: .8rem">当前第{{currentpage}}页，共{{totalData}}条， 共{{totalPage}}页</div>
    </div>
    <!--<unfind></unfind>-->
	</div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
//	import unfind from '../../../../components/undifun/'
export default {
  components: {
    towtop
    //			unfind
  },
  data() {
    return {
      titlename: "工程建设招标公告查询",
      datatext: {},
      params: this.$route.params,
      statusClass: ["招标中", "已截止"],
      cent: true,
      totalrec:'0',
      allLoaded: false,
      currentpage: 1,
      totalData: 0,
      totalPage: 0,
      loadmoreBottomPullText: "上拉加载",
      wrapperHeight: 0
    };
  },
  methods: {
    handleBottomChange (status) {
      console.log(status)
    },
    loadBottom() {
      let _self = this;
      if(this.totalPage == 1) {
        _self.allLoaded = true
        _self.$refs.loadmore.onBottomLoaded();
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
      this.$ajaxRequest("post", "/gsp/mng30015", setdata, pagejump).then((res) => {
        this.totalData = res.txnCommCom.totalRec;
        this.totalPage = res.txnCommCom.totalPage;
        if (!parseInt(res.txnCommCom.totalRec) <= 0 && this.currentpage != this.totalPage) {
          _self.datatext = _self.datatext.concat(res.list);
          _self.totalrec = res.txnCommCom.totalRec;
        }
        _self.$refs.loadmore.onBottomLoaded();
      });
    },
    parameter() {
      console.log(this.params.datatext);
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
          bulletinType: "1"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng30016", setdata)
        .then(res => {
          console.log(res)
          this.$router.push({
            name: "governmentThree",
            params: {
              datatext: res
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    // this.$refs.wrapper.getBoundingClientRect().top;
    // this.wrapperHeight =
    //   document.documentElement.clientHeight -
    //   this.$refs.wrapper.getBoundingClientRect().top;
    this.wrapperHeight = 640;
    console.log(this.wrapperHeight)
    this.parameter();
  }
};
</script>

<style lang='less' scoped>
@import "../../../../assets/css/Affairs.less";
/*半通用less文件*/
.alllist{ text-align: left;color: #999; padding-bottom: .2rem; padding-left: .2rem;}

.corporate_name {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.bidding_list{
  text-align: left;
}
</style>
