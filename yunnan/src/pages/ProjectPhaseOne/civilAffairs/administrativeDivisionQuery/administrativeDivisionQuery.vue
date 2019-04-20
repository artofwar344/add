<template>
  <div class="administrativeDivisionQuery">
    <myheader :my-header="headerData"></myheader>
    <div class="administrativeDivisionQueryContent" id="administrativeDivisionQueryContent">
      <div class="inputField">
        <Field
          readonly
          label="州/市"
          type="text"
          placeholder="请选择"
          :value="confirmCity"
          @click.native="open('pickercity')"
        >
          <span slot="append" class="example-select_arrowRight"></span>
        </Field>
        <HuiselectNew
          ref="pickercity"
          position="bottom"
          :dataslots="selectCity"
          class="example-select_item"
          @confirms="selectConfirmCity"
          @reset="resetSelectCity"
        ></HuiselectNew>

        <Field
          readonly
          label="县/市/区"
          type="text"
          placeholder="请选择"
          :value="confirmCounty"
          @click.native="open('pickerCounty')"
        >
          <span slot="append" class="example-select_arrowRight"></span>
        </Field>
        <HuiselectNew
          ref="pickerCounty"
          position="bottom"
          :dataslots="selectCounty"
          class="example-select_item"
          @confirms="selectConfirmCounty"
          @reset="resetSelectCounty"
        ></HuiselectNew>

        <Field
          readonly
          label="街道/乡镇"
          type="text"
          placeholder="请选择"
          :value="confirmStreet"
          @click.native="open('pickerStreet')"
        >
          <span slot="append" class="example-select_arrowRight"></span>
        </Field>
        <HuiselectNew
          ref="pickerStreet"
          position="bottom"
          :dataslots="selectStreet"
          class="example-select_item"
          @confirms="selectConfirmStreet"
          @reset="resetSelectStreet"
        ></HuiselectNew>
        <!-- <button class="commonBtn" @click="queryData">查询</button> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="queryData"/>
        </div>
      </div>
      <div class="administrativeDivisionQueryList">
        <ul>
          <li>
            <span>州/市</span>
            <span>县/市/区</span>
            <span>街道/乡镇</span>
            <span>行政区划代码</span>
          </li>
          <div v-if="showResult">
            <li v-if="level!=3">
              <span>{{currCity}}</span>
              <span>{{level == 1?"-":currCounty}}</span>
              <span>{{level != 3?"-":currStreet}}</span>
              <span>{{level==1?currCityCode:(level==2?currCountyCode:currStreetCode)}}</span>
            </li>
            <li v-for="item in resultData" class="dataItem">
              <span>{{currCity}}</span>
              <span>{{level == 1?item.regnNm:currCounty}}</span>
              <span>{{level != 1?item.regnNm:"-"}}</span>
              <span>{{item.regnCode}}</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from "@/components/header/header";
import icon from "@/assets/iconSound.png";
import noDataImg from "@/assets/noDataImg.png";
import { cenurl } from "@/components/toptow.js";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      code: "",
      headerData: {
        title: "行政区划查询",
        backUrl: "/"
      },
      selectCity: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],
      confirmCity: "",
      confirmCityCode: "",
      selectCounty: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],
      confirmCounty: "",
      confirmCountyCode: "",
      selectStreet: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],
      confirmStreet: "",
      confirmStreetCode: "",
      resultData: [],
      queryUrl: "/gsp/mng19021",
      level: "", //1,2,3代表需求中的三种查询情况
      showResult: false,
      //以下data用于与comfirmCity等形成区分，以防下拉框更改时展示数据同时被更改
      currCity: "",
      currCityCode: "",
      currCounty: "",
      currCountyCode: "",
      currStreet: "",
      currStreetCode: ""
    };
  },
  created() {
    // this.getData("530000", this.getCity);
    this.getData("-1", this.getprovince);
  },
  computed: {},
  components: {
    mybutton,
    myheader: Header
  },
  methods: {
    resetSelectCity() {
      console.log("city");
      this.confirmCity = "";
      this.confirmCityCode = "";
      this.confirmCounty = "";
      this.confirmStreet = "";
      this.confirmCountyCode = "";
      this.confirmStreetCode = "";
    },
    resetSelectCounty() {
      console.log("county");
      this.confirmCounty = "";
      this.confirmCountyCode = "";
      this.confirmStreet = "";
      this.confirmStreetCode = "";
    },
    resetSelectStreet() {
      console.log("street");
      this.confirmStreet = "";
      this.confirmStreetCode = "";
    },
    //将获取数据加载到下拉框中
    getprovince(data) {
      this.selectprovince[0].values[0].value = this.formatSelect(data);
    },
    getCity(data) {
      this.selectCity[0].values = this.formatSelect(data);
    },
    getCounty(data) {
      this.selectCounty[0].values = this.formatSelect(data);
    },
    getStreet(data) {
      this.selectStreet[0].values = this.formatSelect(data);
    },
    formatSelect(data) {
      console.log(data);
      var temp = [];
      for (var i = 0; i < data.length; i++) {
        temp.push({
          text: data[i].regnNm,
          value: data[i].regnCode
        });
      }
      return temp;
    },
    open(picker) {
      if (picker == "pickerCounty" && this.confirmCity == "昆明市") {
        console.log(this.confirmCity);
        this.getData("530100", this.getCounty);
      } else if (picker == "pickerCounty" && this.confirmCity == "") {
        this.$toast("请先选择州/市");
        return;
      } else if (picker == "pickerStreet" && this.confirmCity == "") {
        this.$toast("请先选择州/市");
        return;
      } else if (picker == "pickerStreet" && this.confirmCounty == "") {
        this.$toast("请先选择县/市/区");
        return;
      }
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmCity(selectedVal) {
      console.log(selectedVal);
      if (typeof selectedVal[0] === "object") {
        this.confirmCity = selectedVal[0].text;
        this.confirmCityCode = selectedVal[0].value;
        this.confirmCounty = "";
        this.confirmStreet = "";
        this.confirmCountyCode = "";
        this.confirmStreetCode = "";
        this.getData(this.confirmCityCode, this.getCounty);
      } else {
        this.confirmCity = selectedVal;
      }
    },
    selectConfirmCounty(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmCounty = selectedVal[0].text;
        this.confirmCountyCode = selectedVal[0].value;
        this.confirmStreet = "";
        this.confirmStreetCode = "";
        this.getData(this.confirmCountyCode, this.getStreet);
      } else {
        this.confirmCounty = selectedVal;
      }
    },
    selectConfirmStreet(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmStreet = selectedVal[0].text;
        this.confirmStreetCode = selectedVal[0].value;
      } else {
        this.confirmStreet = selectedVal;
      }
    },
    //点击查询按钮
    //判断当前是情况1,2,3中的哪种查询
    queryData: function() {
      this.showResult = false;
      console.log(this.confirmCity);
      if (this.confirmStreetCode != "") {
        this.getData("", this.formatData, this.confirmStreetCode);
        this.currCity = this.confirmCity;
        this.currCityCode = this.confirmCityCode;
        this.currCounty = this.confirmCounty;
        this.currCountyCode = this.confirmCountyCode;
        this.currStreet = this.confirmStreet;
        this.currStreetCode = this.confirmStreetCode;
        this.level = 3;
      } else if (this.confirmCountyCode != "") {
        this.getData(this.confirmCountyCode, this.formatData);
        this.currCity = this.confirmCity;
        this.currCityCode = this.confirmCityCode;
        this.currCounty = this.confirmCounty;
        this.currCountyCode = this.confirmCountyCode;
        this.level = 2;
      } else if (this.confirmCityCode != "") {
        this.getData(this.confirmCityCode, this.formatData);
        this.currCity = this.confirmCity;
        this.currCityCode = this.confirmCityCode;
        this.level = 1;
      } else {
        this.$toast("请先选择州市");
      }
    },
    //获取地域数据
    getData(code, callback, streetCode) {
      let _self = this;
      let sendData = {
        txnBodyCom: {
          oType: "MZT",
          areaCode: streetCode,
          parentCode: code,
          regnName: "",
          regnLevel: "",
          matter_id: sessionStorage.getItem("matterid")
        }
      };
      let page = {
        tRecInPage: _self.pageSize,
        tPageJump: _self.current
      };
      _self
        .$ajaxRequest("post", this.queryUrl, sendData, page)
        .then(res => {
          console.log(res);
          if (code == "-1" && res[0].regnNm != null && res[0].regnNm != "") {
            this.code = res[0].regnCode;
            this.getData(this.code, this.getCity);
          }
          if (res) {
            callback(res);
          } else {
            alert("error");
          }
        })
        .catch(response => {});
    },
    formatData(data) {
      this.resultData = data;
      this.showResult = true;
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
.administrativeDivisionQuery {
  height: 100%;
}
.administrativeDivisionQueryContent {
  margin-top: -0.2rem;
  height: calc(100% - 1.1rem);
}
.searchFrom {
  padding: 0.1rem 1rem 0.34rem;
  background: #fff;
}
.hui-search_searchbtn {
  display: none;
}
.example-search_menu {
  position: absolute;
  right: 14px;
  top: 12px;
}
.example-search_menu img {
  height: 0.44rem;
}
.hui-search_bar {
  position: relative;
  padding: 8px 0;
}
.hui-search_barInner {
  border-radius: 50px;
  padding: 0 20px;
}
.hui-search_icon-clear {
  right: 30px;
}
.hui-search_bar:after {
  border: none;
}
.administrativeDivisionQueryList {
  height: calc(100% - 1.5rem);
}
.administrativeDivisionQueryList img {
  width: 5.56rem;
  margin: 1.08rem auto;
}
.administrativeDivisionQueryList ul {
  text-align: left;
}
.administrativeDivisionQueryList li {
  margin-top: 0.16rem;
  background: #fff; /*height: 1.36rem;*/
  padding: 0.26rem 0.1rem 0.36rem;
}
.administrativeDivisionQueryList h4 {
  font-size: 0.28rem;
  color: #333;
  margin-bottom: 0.14rem;
}
.administrativeDivisionQueryList p {
  font-size: 0.24rem;
  color: #999;
}
</style>
<style lang="less" scoped>
.inputField {
  background: #fff;
  .commonBtn {
    margin: 0.5rem;
  }
}
.administrativeDivisionQueryList {
  li {
    display: flex;
    font-size: 0.28rem;
    span {
      flex: 1 1 20%;
      text-align: center;
    }
  }
  .dataItem {
    margin-top: 0;
  }
}
</style>



