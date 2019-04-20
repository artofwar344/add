<template>
  <div>
    <Field type="text" :value="selectInfo" v-model="selectInfo" placeholder="请输入">
      <div class="field-append_text" style="float: right;" slot="append" @click="shut">
        <Icon type="delete" size="16" color="#999999"></Icon>
      </div>
      <div class="field-append_text" style="float: right" slot="append" @click="sousuoadd">
        <Icon type="search" size="16" color="#999999"></Icon>
      </div>
    </Field>
    <div class="addlistcen" v-if="cyzc">
      <div class="example-loadmore_wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <Loadmore
          :top-method="loadTop"
          @top-status-change="handleTopChange"
          :bottom-method="loadBottom"
          @bottom-status-change="handleBottomChange"
          :bottom-all-loaded="allLoaded"
          ref="loadmore"
        >
          <!-- <ul class="example-loadmore_list" v-for="data in searchListData">  -->
          <ul class="example-loadmore_list">
            <li
              v-for="item in searchListData"
              class="example-loadmore_listitem"
              v-text="item.industryName"
              @click="shut(item.fId,item.industryName)"
            ></li>
          </ul>
        </Loadmore>
      </div>
    </div>
    <div class="addlistcen" v-if="gbhy">
      <div class="example-loadmore_wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <Loadmore
          :top-method="loadTop"
          @top-status-change="handleTopChange"
          :bottom-method="loadBottom"
          @bottom-status-change="handleBottomChange"
          :bottom-all-loaded="allLoaded"
          ref="loadmore"
        >
          <!-- <ul class="example-loadmore_list" v-for="data in searchListData">  -->
          <ul class="example-loadmore_list">
            <li
              v-for="item in searchListData"
              class="example-loadmore_listitem"
              v-text="item.Industry_Name"
              @click="shut(item.Industry_Id,item.Industry_Name)"
            ></li>
          </ul>
        </Loadmore>
      </div>
    </div>
    <div class="addlistcen" v-if="sshy">
      <div class="example-loadmore_wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <Loadmore
          :top-method="loadTop"
          @top-status-change="handleTopChange"
          :bottom-method="loadBottom"
          @bottom-status-change="handleBottomChange"
          :bottom-all-loaded="allLoaded"
          ref="loadmore"
        >
          <!-- <ul class="example-loadmore_list" v-for="data in searchListData">  -->
          <ul class="example-loadmore_list">
            <li
              v-for="item in searchListData"
              class="example-loadmore_listitem"
              v-text="item.treeName"
              @click="shut(item.treeCode,item.treeName)"
            ></li>
          </ul>
        </Loadmore>
      </div>
    </div>
    <!-- <div class="example-loadmore_wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <Loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul class="example-loadmore_list">
                <li v-for="item in list" class="example-loadmore_listitem" v-text="item"></li>
            </ul>
        </Loadmore>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: "",
      textValue: "",
      selectInfo: "",
      searchListData: [],
      cyzc:false,
      gbhy:false,
      sshy:false,

  
      list: [],
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      topStatus: "",
      pageJump: 1,
      pageNumber: 10
    };
  },
  methods: {
    shut(val, cen) {
      console.log("关闭");
      console.log(val);
      console.log(cen);

      this.$emit("endaddlist", { name: cen, cent: val, type: this.types });
      this.searchListData = [];
    },
    sousuoadd(callback) {
      console.log(this.url);
      console.log(this.selectInfo);
      console.log(this.types);
      console.log(2);
      this.pageNumber = '10'
      this.pageJump='1'
      // let data = {
      //   txnBodyCom: {
      //     matter_id: "1",
      //     chann_id: "1",
      //     keywords: "建筑用灰岩矿扩建项目",
      //     matchdegree: "90%",
      //     size: "5"
      //   }
      // };
      // let pages = {
      //   txnIttChnlId: "1",
      //   txnIttChnlCgyCode: "1",
      //   tRecInPage: "10",
      //   tPageJump: "1"
      // };
      let data;
      if (this.url == "/gsp/mng50007") {
        this.gbhy = true
        data = {
          txnBodyCom: {
            matter_id: "1",
            chann_id: "1",
            member_id: "1",
            industryName: this.selectInfo,
            parentIndustryId: this.cent,
            matter_id: "1"
          }
        };
      }
      if (this.url == "/gsp/mng90060") {
        this.cyzc = true

        data = {
          txnBodyCom: {
            id: "",
            f_id: this.cent,
            industry_name: this.selectInfo,
            // f_id: '',
            // industry_name: '',
            industry_code: "",
            parent_industry_id: "",
            is_industry: "",
            matter_id: "1"
          }
        };
      }
      if (this.url == "/gsp/mng70060") {
        this.sshy = true
        data = {
          txnBodyCom: {
            matter_id: "1",
            chann_id: "1",
            id: "",
            treeId: "",
            treeName: this.selectInfo,
            treeCode: "",
            treeDesc: "",
            treePid: this.cent,
            treeSort: "",
            treeType: "industry",
            validStsCd: "",
            matter_id: "1"
          }
        };
      }
      let pages = {
        txnIttChnlId: "1",
        txnIttChnlCgyCode: "1",
        tRecInPage: this.pageNumber,
        tPageJump: this.pageJump
      };
      this.$ajaxRequest("post", this.url, data, pages)
        .then(res => {
          if (this.url == "/gsp/mng50007") {
            // this.searchListData.push(res.Matter_S_Industry_Type_Dos);
            this.searchListData=res.Matter_S_Industry_Type_Dos;
            console.log(this.searchListData);
          }
          if (this.url == "/gsp/mng90060") {
             if (res) {
          callback(res)
        } else {
          this.$toast("没有查询到结果")
        }
            // this.searchListData.push(res.list);
            // this.searchListData = res.list;
            // console.log(this.searchListData);
          }
          if (this.url == "/gsp/mng70060") {
            // this.searchListData.push(res.MatterSTreeList);
            this.searchListData.push(res.MatterSTreeList);
            console.log(this.searchListData);
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    sousuo() {
      console.log(this.url);
      console.log(this.selectInfo);
      console.log(this.types);
      console.log(2);
      // let data = {
      //   txnBodyCom: {
      //     matter_id: "1",
      //     chann_id: "1",
      //     keywords: "建筑用灰岩矿扩建项目",
      //     matchdegree: "90%",
      //     size: "5"
      //   }
      // };
      // let pages = {
      //   txnIttChnlId: "1",
      //   txnIttChnlCgyCode: "1",
      //   tRecInPage: "10",
      //   tPageJump: "1"
      // };
      let data;
      if (this.url == "/gsp/mng50007") {
        this.gbhy = true
        data = {
          txnBodyCom: {
            matter_id: "1",
            chann_id: "1",
            member_id: "1",
            industryName: this.selectInfo,
            parentIndustryId: this.cent,
            matter_id: "1"
          }
        };
      }
      if (this.url == "/gsp/mng90060") {
        this.cyzc = true
        data = {
          txnBodyCom: {
            id: "",
            f_id: this.cent,
            industry_name: this.selectInfo,
            // f_id: '',
            // industry_name: '',
            industry_code: "",
            parent_industry_id: "",
            is_industry: "",
            matter_id: "1"
          }
        };
      }
      if (this.url == "/gsp/mng70060") {
        this.sshy = true
        data = {
          txnBodyCom: {
            matter_id: "1",
            chann_id: "1",
            id: "",
            treeId: "",
            treeName: this.selectInfo,
            treeCode: "",
            treeDesc: "",
            treePid: this.cent,
            treeSort: "",
            treeType: "industry",
            validStsCd: "",
            matter_id: "1"
          }
        };
      }
      let pages = {
        txnIttChnlId: "1",
        txnIttChnlCgyCode: "1",
        tRecInPage: this.pageNumber,
        tPageJump: this.pageJump
      };
      this.$ajaxRequest("post", this.url, data, pages)
        .then(res => {
          if (this.url == "/gsp/mng50007") {
            // this.searchListData.push(res.Matter_S_Industry_Type_Dos);
            this.searchListData = res.Matter_S_Industry_Type_Dos;
            console.log(this.searchListData);
          }
          if (this.url == "/gsp/mng90060") {
        //      if (res) {
        //   callback(res)
        // } else {
        //   this.$toast("没有查询到结果")
        // }
            // this.searchListData.push(res.list);
            this.searchListData = res.list;
            // console.log(this.searchListData);
          }
          if (this.url == "/gsp/mng70060") {
            // this.searchListData.push(res.MatterSTreeList);
            this.searchListData = res.MatterSTreeList;
            console.log(this.searchListData);
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },


  },
  created() {
    this.sousuo();
  },
  mounted() {
    console.log(this.url);
    console.log(this.cent);
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  },
  props: ["url", "cent", "types"]
};
</script>
<style lang="less" scoped>
.addlistcen {
  background: #fff;
  text-align: left;
  ul li {
    height: auto;
    text-align: left;
    line-height: 0.5rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
}

.example-loadmore_top {
  height: 50px;
  background: green;
  color: #fff;
}
.example-loadmore_wrapper {
  overflow: scroll;
}
.example-loadmore_listitem {
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #e1e2e6;
}
.example-formgroup_btn-wrapper {
  margin-top: 20px;
}
.field-append_text,
.field-prepend_text {
  padding: 8px;
  color: #ccc;
}
.field-append_text .hui-icon {
  line-height: normal;
  vertical-align: middle;
}
.example-formgroup .hui-form_title-top .example-formgroup_btn-wrapper {
  padding: 0 15px;
}
</style>

