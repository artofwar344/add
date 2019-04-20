<template>
	<div class="bureau_sports_search">
		<towtop :name="title" />
		
    <div class="bureau_sports_list">
		<div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <Loadmore :bottom-method="loadBottom"
                v-if="!searchListData.length == 0"
                    @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
				<div class="bureau_sports_search_list" v-for="item in searchListData">
					<div class="search_list_header">
						<em class="tip"></em>
						<p class="tipName">{{item.Spg_Events_Name}}</p>
					</div>
					<div class="detailList" @click="goDetail(item.Spg_Id)">
						<Grid>
							<Gridcol :cols="4">承办单位</Gridcol>
							<Gridcol :cols="8">{{item.Spg_Undertaker}}</Gridcol>
						</Grid>
						<Grid>
							<Gridcol :cols="4">举办时间</Gridcol>
							<Gridcol :cols="8">{{item.Spg_Hold_Time}}</Gridcol>
						</Grid>
					</div>

				</div>
			</Loadmore>
		</div>
    </div>
	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import Button from "./../common/button.vue";

export default {
  data() {
    return {
      title: "云南省公益性体育赛事",
      searchListData: [],
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      topStatus: "",
      pageJump: 1,
      pageNumber: 10
    };
  },
  components: {
    towtop,
    Button
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
    this.getData(this.formatData);
  },
  methods: {
    formatData(data){
      let _self = this
      if (data["Matter_S_Spgs_List"] && data["Matter_S_Spgs_List"].length != 0) {
        console.log(_self.searchListData.concat(data["Matter_S_Spgs_List"]))
        _self.searchListData = _self.searchListData.concat(data["Matter_S_Spgs_List"])
      }else{
        this.$toast("没有查询到结果")
      }
    },
    getData (callback) {
      let _self = this
      let sendData = {
          "txnBodyCom": {
            matter_id: window.sessionStorage.getItem("matterid"),
            "spg_start_time": this.$route.query["spg_start_time"],
            "province": "",
            "city": this.$route.query.city
          }
        };
        let page = {
            "tRecInPage": this.pageNumber,
            "tPageJump": this.pageJump,
          };
      _self.$ajaxRequest("post","/gsp/mng30045", sendData, {
        tRecInPage: this.pageNumber,
        tPageJump: this.pageJump
      }).then((res) => {
        console.log(res)
        if (res) {
          callback(res)
        } else {
          this.$toast("没有查询到结果")
        }
      }).catch((error) => {console.log(error)});
    },
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    loadBottom () {
      console.log("1");
      const _self = this
      // 模拟加载中
      let dataSum = parseInt(_self.pageJump) * parseInt(_self.pageNumber)
      if (_self.searchListData.length!=0 && _self.searchListData.length< dataSum) {
        _self.allLoaded = true// 若数据已全部获取完毕
      } else {
        _self.pageJump = (parseInt(_self.pageJump) + 1).toString()
        _self.getData(loadBottom)
      }
      function loadBottom (data) {
        _self.$nextTick(function () {
          _self.formatData(data)
          _self.$refs.loadmore.onBottomLoaded()
        })
      }
    },
    goDetail(index) {
      this.$router.push({
        name: "welfareResultDetail",
        params: {
          spg_Id: index
        }
      });
    },
    dateFormat(time, format) {
      const t = new Date(time);
      const tf = function(i) {
        return (i < 10 ? "0" : "") + i;
      };
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, a => {
        switch (a) {
          case "yyyy":
            return tf(t.getFullYear());
          case "MM":
            return tf(t.getMonth() + 1);
          case "mm":
            return tf(t.getMinutes());
          case "dd":
            return tf(t.getDate());
          case "HH":
            return tf(t.getHours());
          case "ss":
            return tf(t.getSeconds());
          default:
            break;
        }
      });
    }
  }
};
</script>
<style>
.bureau_sports_search_list {
  width: 100%;
  min-height: 2.4rem;
  background: #ffffff;
  border-bottom: 0.01rem solid #edeef2;
}
</style>
<style scoped>
.bureau_sports_list{
  overflow: auto;height: calc(100% - 1.5rem)
}
.bureau_sports_search_list {
  width: 100%;
  min-height: 2.4rem;
  background: #ffffff;
  border-bottom: 0.01rem solid #edeef2;
}

.search_list_header {
  text-align: left;
  height: 0.88rem;
  width: 100%;
}

.search_list_header .tip {
  display: inline-block;
  height: 0.24rem;
  width: 0.06rem;
  background: #257bff;
  margin: 0 0.2rem;
}

.search_list_header .tipName {
  display: inline-block;
  text-align: left;
  font-size: 0.28rem;
  color: #333333;
  line-height: 0.88rem;
}

.bureau_sports_search .columns {
  min-height: 0.62rem;
  font-size: 0.28rem;
  line-height: 0.62rem;
  color: #999999;
  font-family: PingFangSC-Regular;
}

.bureau_sports_search .columns:nth-child(odd) {
  text-align: left;
}

.bureau_sports_search .columns:nth-child(even) {
  text-align: right;
}
</style>