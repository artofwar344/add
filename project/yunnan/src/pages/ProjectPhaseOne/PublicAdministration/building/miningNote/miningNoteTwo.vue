<style lang='less' scoped>
@import "../../../../../assets/css/Affairs.less";
.corporate_name{display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;}
</style>

<template>
    <div class="list_wrap">
        <myheader :my-header="headerData"></myheader>
        <!-- <ul class="list">
          <li @click='tolink(item)' v-for="item in datatext" :key="item.id">
            <h4>{{item.naAppName}}</h4>
            <p>{{item.jyptId}}<span>{{item.publishingTime}}</span></p>
          </li>
        </ul> -->
        <div class="bidding_main">
          <Loadmore  :bottom-method="loadBottom"
                     :bottomPullText="loadmoreBottomPullText"
                     @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul>
            <li @click='tolink(list)' class="bor_b bidding_list" v-for="list in datatext" :key="list.guid">
              <p class="dis_flex margin_b16"><span class="flex_1 corporate_name">矿山/项目名称：{{list.naAppName}}</span></p>

              <!-- <p class="dis_flex font-24"><span class="col_999 flex_1 tx_left">宗地编号：{{list.jyptId}}</span></p> -->
              <p class="dis_flex font-24"><span class="col_999 flex_1 tx_left">发布时间：{{list.publishingTime}}</span></p>
               <p class="dis_flex margin_b16"><span class="col_fb " v-if="list.type=='tkq'">产权类型：{{typeClass[0]}}</span>
              <span class="col_fb " v-else-if="list.type=='ckq'">产权类型：{{typeClass[1]}}</span>
              </p>
            </li>
          </ul>
          </Loadmore>
          <div style="padding-top: .8rem">当前第{{currentpage}}页，共{{totalData}}条， 共{{totalPage}}页</div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/header/header";
import { cenurl } from "@/components/toptow.js";
export default {
  data() {
    return {
      params: this.$route.params,
      headerData: {
        title: "矿业权出（转）让公告查询",
        backUrl: "/miningNoteOne"
      },
      datatext: {},
      statusClass: ["tkq", "ckq"],
      typeClass: ["探矿权", "采矿权"],
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
      this.$ajaxRequest("post", "/gsp/mng30037", setdata, pagejump).then((res) => {
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
      let setdata = {
        txnCommCom: {
          tRecInPage: "",
          tPageJump: "",
          tStsTraceId: ""
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "0",
          guid: item.guid,
          bulletinType: "12",
          kyqType: item.type
        }
      };
      this.$ajaxRequest("post", "/gsp/mng30038", setdata)
        .then(res => {
          this.$router.push({
            name: "miningNoteThree",
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
  },
  components: {
    myheader: Header
  }
};
</script>
