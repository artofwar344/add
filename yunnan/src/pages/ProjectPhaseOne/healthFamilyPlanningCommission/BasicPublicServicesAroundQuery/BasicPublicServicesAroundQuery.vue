<template>
  <div class="BasicPublicServicesAroundQuery">
    <myheader :my-header="headerData"></myheader>
    <div class="BasicPublicServicesAroundQueryContent" id="BasicPublicServicesAroundQueryContent">
      <div class="searchFrom">
        <!--<Search
          ref="compsSearch"
          autofocus
          v-model="searchKey"
          @search="queryData"
        >
          <Extendselect class='field-select_noBorder' @getval="selectedItem" slot="prepend" :options="options" ></Extendselect>
          <span slot="otherMenu" class="example-search_menu">
            <img :src="iconUrl" alt="">
          </span>
        </Search>-->
        <Field desc-class="richText" type="text" placeholder="搜索" v-model="searchKey">
          <!--前置元素 选择器-->
          <Extendselect class='field-select_noBorder' @getval="selectedItem" slot="prepend" :options="options" ></Extendselect>
          <!--默认后置插槽-->
          <div class="field-append_text" slot="append" @click="queryData">
            查询
          </div>
        </Field>
      </div>
      <div class="BasicPublicServicesAroundQueryList">
        <ul>
          <li v-for="item in ResultData" :key="item.id" @click.stop.prevent="gotoDetails(item)" v-if="item">
            <h4>{{item.unitName}} <span v-if="item.distance">{{item.distance}}m</span></h4>
            <p ><Icon type="signin" size="14"  color="#999999"></Icon>{{item.address}}
             <a @click.stop.prevent="aaa(item)">
               <img :src="phoneUrl" alt="">
               </a>
               </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import phone from "@/assets/phone.png";
import { cenurl } from "../../../../components/toptow.js";

export default {
  data() {
    return {
      headerData: {
        title: "身边的基本公共卫生服务中心查询",
        backUrl: "/"
      },
      phoneUrl: phone,
      searchKey: "",
      options: ["西区", "南区", "北区", "西北区"],
      ResultData: []
    };
  },
  created() {},
  mounted() {
    this.resetCss();
    let _self = this;
    let longitude = window.sessionStorage.getItem("longitude");
    let latitude = window.sessionStorage.getItem("latitude");
    longitude = "102.346140";
    latitude = "25.084460";
    let setdata = {
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "3",
        tStsTraceId: "1"
      },
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        chann_id: "1",
        longitude: longitude,
        latitude: latitude
        // "radius":1000
      }
    };
    this.$ajaxRequest("post", "/gsp/mng70035", setdata)
      .then(res => {
        _self.ResultData = res.list;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {},
  components: {
    myheader: Header
  },
  methods: {
    queryData: function() {
      let _self = this;
      _self.ResultData = _self.filterData();
      console.log(_self.ResultData);
    },
    filterData: function() {
      let _self = this;
      return this.allData.filter(value =>
        new RegExp(_self.searchKey, "i").test(value.number)
      );
    },
    selectedItem: function(index, item) {
      // 获取被选择的选项
      console.log(index, item);
    },
    resetCss: function() {
      // let _self = this
      let searchBtn = document.getElementsByClassName("hui-extendSelect")[0];
      // searchBtn.style.width = '1.29rem'
    },
    gotoDetails: function(data) {
      let _self = this;
      console.log(data);
      _self.$router.push({
        path: "/BasicPublicServicesAroundMap",
        name: "BasicPublicServicesAroundMap",
        params: {
          datatext: data
        }
      });
    },
    aaa(item) {
      window.location.href = "tel:" + item.phone;
    }
  }
};
</script>

<style  scoped>
html,
body {
  height: 100%;
}
.BasicPublicServicesAroundQuery {
  background: #ccc;
  height: 100%;
}
.BasicPublicServicesAroundQueryContent {
}
/**********/
.hui-field .hui-field_border .hui-field_title {
  display: none;
}
.hui-field .hui-field_border .hui-field_borderRight {
  /*width: 1.14rem;*/
  border: 0;
  font-size: 0.28rem;
}
.hui-extendSelect_placeHolder {
  font-size: 0.28rem;
}
#BasicPublicServicesAroundQueryContent .hui-field_core {
  width: 3.38rem;
  margin: 0 0.32rem 0 0.34rem;
  flex: 0;
  -webkit-flex: 0;
  padding: 0;
  border-radius: 50px;
  background: #f5f5f5;
  padding-left: 0.44rem;
  font-size: 0.28rem;
  height: 0.64rem;
}
.hui-extendSelect_placeHolder,
.hui-extendSelect_value {
  margin: 0 0.16rem 0 0;
  font-size: 0.28rem;
  overflow: hidden;
}
.hui-extendSelect-itemIcon {
  margin: 0;
  border-top: 6px solid #e1e2e6;
  border-left: 6px dashed transparent;
  border-right: 6px dashed transparent;
}
.hui-extendSelect_list {
  padding: 0;
}
.hui-extendSelect_item {
  padding: 5px 0;
}
.hui-extendSelect {
  min-width: inherit;
}
.hui-field {
  padding: 5px 10px;
}
.hui-field_core {
}
.hui-field .hui-field_border .hui-field_value {
  border: none;
  position: relative;
}
.hui-field .hui-field_border .hui-field_clear {
  position: absolute;
  right: 1.5rem;
}
.hui-field .hui-field_border .hui-field_borderLeft {
  border: none;
  background: #4991fd;
  border-radius: 30px;
  width: 1.22rem;
  height: 0.64rem;
  color: #fff;
  font-size: 0.28rem;
}
/**********/
.BasicPublicServicesAroundQuery {
}
.BasicPublicServicesAroundQuery ul {
  text-align: left;
}
.BasicPublicServicesAroundQuery li {
  margin-top: 0.16rem;
  background: #fff; /*height: 1.36rem;*/
  padding: 0 0.36rem;
}
.BasicPublicServicesAroundQuery h4 {
  height: 0.87rem;
  line-height: 0.87rem;
  font-size: 0.28rem;
  color: #333;
  border-bottom: 1px solid #f1f3f6;
}
.BasicPublicServicesAroundQuery h4:after {
  content: "";
  display: block;
  clear: both;
}
.BasicPublicServicesAroundQuery h4 span {
  display: block;
  float: right;
}
.BasicPublicServicesAroundQuery p {
  padding: 0.22rem 0;
  color: #999;
  height: 0.72rem;
  line-height: 0.72rem;
  font-size: 0.24rem;
}
.BasicPublicServicesAroundQuery p:after {
  content: "";
  display: block;
  clear: both;
}
.BasicPublicServicesAroundQuery p i {
  margin-right: 0.14rem;
}
.BasicPublicServicesAroundQuery p a {
  display: block;
  float: right;
  padding-left: 0.56rem;
  border-left: 1px solid #f1f3f6;
}
.BasicPublicServicesAroundQuery p img {
  width: 0.36rem;
}
</style>
