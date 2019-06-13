<template>
    <div>
		<towtop :name="hadertow" />
      <div class="seek example-grid">
        <Grid>
          <Gridcol :cols="9"><label><input type="text" v-model="seek" placeholder="请输入内容"></label></Gridcol>
          <Gridcol :cols="3">
            <button class="textWhat button blueButton" @click="queryData">搜索</button>
          </Gridcol>
        </Grid>
      </div>
      <div class="recruitBox">
        <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <Loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom"
                    v-if="!arr.length == 0"
                    @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul>
              <li v-for=" list in arr" class="recruitList" @click="goUrl(list.NewsContentURL)">
                <p>{{list.NewsTitle}}</p>
                <span>{{list.NewsTime}}</span>
              </li>
            </ul>
          </Loadmore>
        </div>
      </div>
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";

export default {
  data() {
    return {
      hadertow: "招聘公告查询",
      seek: "",
      arr: [],
      queryUrl: "/gsp/mng60024",
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      topStatus: "",
      pageSize: "10",
      current: "1"
    };
  },
  components: { towtop },
  created() {
    let _self = this;
    _self.goto(_self.setDom);
  },
  methods: {
    init(data) {
      let _self = this;
      _self.arr = data;
    },
    queryData() {
      let _self = this;
      _self.goto(_self.setDom);
    },
    goto(callback) {
      let _self = this;
      let sendData = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "1",
          KeyWord: _self.seek,
          PageNumber: "1",
          PageSize: "10"
        }
      };
      let setdata = {};
      this.$ajaxRequest("post", this.queryUrl, sendData)
        .then(res => {
          console.log(res.NewsListResponse.length)
          if(res.NewsListResponse.length){
            //裕农通APP功能，勿删！
            if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
              PJF.ynt.A0161G058()
            }
            callback(res);
          }else{
            this.$toast('未查询到数据');
          }
          
        })
        .catch(error => {
          console.log(error);
        });
    },
    setDom(data) {
      let _self = this;
      _self.init(data.NewsListResponse);
    },
    goUrl(url) {
      location.href = url;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom() {
      const _self = this;
      // 模拟加载中
      let dataSum = parseInt(_self.pageSize) * parseInt(_self.current);
      if (_self.arr.length < dataSum) {
        _self.allLoaded = true; // 若数据已全部获取完毕
      } else {
        _self.current = (parseInt(_self.current) + 1).toString();
        _self.goto(loadBottom);
      }
      function loadBottom(data) {
        _self.formetData(data);
        _self.$nextTick(function() {
          _self.$refs.loadmore.onBottomLoaded();
        });
      }
    },
    formetData(data) {
      let _self = this;
      if (data.NewsListResponse) {
        console.log(_self.ResultData.concat(data.NewsListResponse));
        _self.ResultData = _self.ResultData.concat(data.NewsListResponse);
      }
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      const _self = this;
      _self.current = "1";
      _self.goto(ladTopCallBack);
      function ladTopCallBack(data) {
        _self.arr = data.NewsListResponse;
        _self.$refs.loadmore.onTopLoaded();
      }
    }
  }
};
</script>

<style lang='less' scoped>
@import url("../../../../assets/css/style.less");
html,
body,
#app {
  height: 100%;
}
.seek {
  background: #fff;
  line-height: 0.64rem;
  padding: 0.32rem 0;
  border-bottom: 0.16rem solid #f1f3f6;
  .button {
    border: 0;
    border-radius: 0.5rem;
    width: auto;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    height: 0.64rem;
    line-height: 0.64rem;
    box-shadow: 0;
    margin: 0;
  }
  input {
    height: 0.64rem;
    width: 99%;
    line-height: 0.64rem;
    border: 0;
    border-radius: 0.5rem;
    background: #f5f5f5;
    padding-left: 1%;
    font-size: 0.32rem;
  }
}
.recruitBox {
  background: #fff;
  text-align: left;
  overflow: auto;
  height: calc(100% - 1.1rem);
  div {
    height: 100% !important;
  }
  .recruitList {
    min-height: 1rem;
    padding: 0.36rem;
    border-bottom: 1px solid #f1f3f6;
    color: #333;
    font-size: 0.28rem;
    span {
      color: #999;
      font-size: 0.24rem;
      display: block;
      width: 100%;
      text-align: right;
      padding-top: 0.16rem;
    }
  }
}
</style>
