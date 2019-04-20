<template>
	<div class="medicineTwo">
		<towtop :name="titlename" />
		<div class="medicinebox">
		<div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <Loadmore :bottom-method="loadBottom"
                v-if="!list.length == 0"
                    @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
		<div class="medicineTop" @click="detailsOne(item)" v-for="item in list">
			<h1 style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{item.producer_name}}</h1>
			<p><Icon type="arrow-right" color="#999999"></Icon></p>
		</div>
		</Loadmore>
		</div>
		</div>
	</div>
</template>

<script>
import "../../../../static/css/medicine/medicineTwo.css";
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
export default {
  data() {
    return {
      titlename: "食品生产许可获证企业查询",
      list: [],
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      pageJump: 1,
      pageNumber: 15
    };
  },
  components: {
    towtop
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
    this.getData(this.formatData);
  },

  methods: {
    formatData(data) {
      let _self = this;
      if (data["certList"]) {
        console.log(_self.list.concat(data["certList"]));
        _self.list = _self.list.concat(data["certList"]);
      }
    },
    getData(callback) {
      let _self = this;
      this.cardid = window.sessionStorage.getItem("cardid");
      this.matterid = window.sessionStorage.getItem("matterid");
      let setdata = {
        txnBodyCom: {
         matter_id: window.sessionStorage.getItem("matterid"), //window.sessionStorage.getItem("matterid"),
          chann_id: "123",
          producer_name: this.$route.query.textValue,
          li_is_authority: this.$route.query.carMsg,
          license_number: this.$route.query.comeReason
        }
      };
      let page = {
        tRecInPage: this.pageNumber,
        tPageJump: this.pageJump
      };
      _self
        .$ajaxRequest("post", "/gsp/mng30047", setdata, page)
        .then(res => {
          console.log(res);
          if (res["certList"]!=null && res["certList"].length != 0) {
            callback(res);
          } else {
            this.$toast("未查询到数据！");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom() {
      const _self = this;
      // 模拟加载中
      let dataSum = parseInt(_self.pageJump) * parseInt(_self.pageNumber);
      if (_self.list.length != 0 && _self.list.length < dataSum) {
        _self.allLoaded = true; // 若数据已全部获取完毕
      } else {
        _self.pageJump = (parseInt(_self.pageJump) + 1).toString();
        _self.getData(loadBottom);
      }
      function loadBottom(data) {
        _self.$nextTick(function() {
          _self.formatData(data);
          _self.$refs.loadmore.onBottomLoaded();
        });
      }
    },
    detailsOne(id) {
      this.$router.push({
        name: "medicineThree",
        params: { data: id }
      });
    }
  }
};
</script>

<style scoped>
</style>
