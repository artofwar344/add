<template>
  <div class="box">
    <towtop :name="hadertow"/>
    <div class="content">
      <Field
        v-model="nima_unit_name"
        class="mt"
        type="text"
        label="单位名称"
        :value="nima_unit_name"
        placeholder="请输入单位名称关键字"
        required
      ></Field>
      <div class="checklistWrapper">
        <Checklist
          v-model="nima_grade"
          title="资质等级"
          :options="[
    				{label: '甲级', value: '甲级'},
    				{label: '乙级', value: '乙级'},
    				{label: '丙级', value: '丙级'},
    				{label: '丁级', value: '丁级'}]"
        ></Checklist>
      </div>
      <div @click="onshow(1)">
        <Field
          type="text"
          readonly
          label="选择地区"
          :value="selectRegister"
          placeholder="请选择地区"
          v-model="selectRegister"
        ></Field>
      </div>
    </div>
    <div class="popupWrap" v-if="popupVisible">
      <div class="popupContent">
        <div class="pop_btn_wrap">
          <div class="pop_btn" @click="popupVisible = false">取消</div>
          <div class="pop_btn" @click="getRegister">确定</div>
        </div>
        <div class="popContent">
          <Field
            readonly
            label="省级"
            type="text"
            placeholder="请选择省级"
            :value="selectProvice"
            @click.native="open('provicePicker')"
          >
            <span slot="append" class="example-select_arrowRight"></span>
          </Field>
          <HuiselectNew
            ref="provicePicker"
            @touchmove.prevent
            position="bottom"
            :dataslots="provicePicker"
            class="example-select_item"
            @confirms="selectedProvice"
            @reset="Provice"
          ></HuiselectNew>

          <Field
            readonly
            label="市级"
            type="text"
            placeholder="请选择市级"
            :value="selectCity"
            @click.native="open('cityPicker')"
          >
            <span slot="append" class="example-select_arrowRight"></span>
          </Field>
          <HuiselectNew
            ref="cityPicker"
            @touchmove.prevent
            position="bottom"
            :dataslots="cityPicker"
            class="example-select_item"
            @confirms="selectedCity"
            @reset="City"
          ></HuiselectNew>

          <Field
            readonly
            label="区/县"
            type="text"
            placeholder="请选择区/县"
            :value="selectCounty"
            @click.native="open('countyPicker')"
          >
            <span slot="append" class="example-select_arrowRight"></span>
          </Field>
          <HuiselectNew
            ref="countyPicker"
            @touchmove.prevent
            position="bottom"
            :dataslots="countyPicker"
            class="example-select_item"
            @confirms="selectedCounty"
            @reset="County"
          ></HuiselectNew>
        </div>
      </div>
    </div>
    <!-- <Btn block @click="tocompanyname">查询</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="tocompanyname"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
import mybutton from "../../../components/MyButton";
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
      hadertow: "测绘单位资质信息查询",
      province: "",
      nima_unit_name: "",
      mapshi: "",
      nima_grade: [],
      registerPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        },
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        },
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectRegister: "",
      provinceList: [],
      cityList: [],
      countyList: [],
      popupVisible: false,
      provicePicker: [
        {
          flex: 1,
          values: ["云南省"],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectProvice: "云南省1",
      confirmProvice: [],
      cityPicker: [
        {
          flex: 1,
          values: [""],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectCity: "云南省昆明市",
      confirmCity: [],
      countyPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectCounty: "",
      confirmCounty: []
    };
  },
  methods: {
    Provice() {
      this.selectProvice = "";
      
    },
    City() {
      this.selectCity = "";
    },
    County() {
      this.selectCounty = "";
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      window.scrollTo(0, 99999);
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    tocompanyname() {
      /* if(this.nima_unit_name == ''){
                    this.$toast('请输入单位名称');
                    return;
                } */
      var nima_grade = "";
      var grade = this.nima_grade;
      for (var i = 0; i < grade.length; i++) {
        nima_grade += grade[i] + "@";
      }
      nima_grade = nima_grade.substring(0, nima_grade.length - 1);
      var params = {
        nima_unit_name: this.nima_unit_name,
        nima_grade: nima_grade,
        province: this.selectRegister
      };
      this.$router.push({
        name: "companyname",
        params: { datalist: JSON.stringify(params) }
      });
    },
    onshow(val) {
      document.activeElement.blur();
      this.popupVisible = true;
      window.scrollTo(0, 99999);
      $('.popupWrap').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    addprovince() {
      let setdata = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          parentCode: "-1",
          oType: "GAT"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", setdata)
        .then(res => {
          console.log(res);
        })
        .catch(response => {});
    },
    selectedProvice(selectedVal) {
      let _self = this;
      _self.cityPicker[0].values.splice(0, _self.cityPicker[0].values.length);
      this.confirmProvice = selectedVal[0];
      if (typeof selectedVal[0] === "object") {
        this.selectProvice = selectedVal[0].text;
      } else {
        this.selectProvice = selectedVal;
      }
      this.selectCity = "";
      this.selectCounty = "";
      //   获取市级
      let setdata = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          parentCode: "530000",
          oType: "GAT"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", setdata)
        .then(res => {
          for (var i = 0, len = res.length; i < len; i++) {
            let temOb = { text: res[i].regnNm, value: res[i].regnCode };
            _self.cityPicker[0].values.push(temOb);
          }
          if (_self.cityPicker[0].values[0].value == "530100") {
            this.selectedCity(_self.cityPicker[0].values[0].text, 1);
          }
        })
        .catch(response => {});
    },
    selectedCity(selectedVal, two) {
      let cont = "";
      if (two == 1) {
        cont = "530100";
      } else {
        cont = selectedVal[0].value;
      }
      let _self = this;
      _self.countyPicker[0].values.splice(
        0,
        _self.countyPicker[0].values.length
      );
      this.confirmCity = selectedVal[0];
      if (typeof selectedVal[0] === "object") {
        this.selectCity = selectedVal[0].text;
      } else {
        this.selectCity = selectedVal;
      }
      this.selectCounty = "";
      //   获取市级
      let setdata = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          parentCode: cont,
          oType: "GAT"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", setdata)
        .then(res => {
          for (var i = 0, len = res.length; i < len; i++) {
            let temOb = { text: res[i].regnNm, value: res[i].regnCode };
            _self.countyPicker[0].values.push(temOb);
          }
        })
        .catch(response => {});
    },
    selectedCounty(selectedVal) {
      this.confirmCounty = selectedVal;
      if (typeof selectedVal[0] === "object") {
        this.selectCounty = selectedVal[0].text;
      } else {
        this.selectCounty = selectedVal;
      }
    },
    getRegister() {
      this.popupVisible = false;
      if (this.selectCounty) {
        this.selectRegister = this.selectCounty;
      } else if (this.selectCity) {
        this.selectRegister = this.selectCity;
      } else {
        this.selectRegister = this.selectProvice[0];
      }
    }
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    this.addprovince();
  },
  mounted() {
    let val = ["云南省"];
    this.selectedProvice(val, 0);
  }
};
</script>
<style lang="less">
.box {
  .hui-field {
    height: 1rem;
    padding: 0rem 0.2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
  }
  .hui-checklist_titleBox {
    width: auto;
  }
  .hui-checklist {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .hui-checklist_item {
    display: inline-block;
  }
  .hui-checklist_itemWrapper {
    padding-top: 0;
  }
  .hui-field_main {
    font-size: 0.28rem;
    height: 100%;
    border-bottom: 1px solid #e1e2e6;
  }

  .hui-checklist_title,
  .hui-checklist_item {
    font-size: 0.28rem;
  }

  .checklistWrapper {
    .hui-checklist {
      border-bottom: 1px solid #e1e2e6;
      padding: 0.2rem;
    }
  }
}

.box .example-select_btn-wrapper {
  margin-top: 15px;
}
.box .example-select_arrowRight {
  display: block;
  margin-left: 0.1rem;
  width: 0.16rem;
  height: 0.26rem;
  background: url(../../../assets/images/arrow.png) 0px center no-repeat;
  background-size: 100%;
}
.box .textleft input {
  text-align: left;
}

.box .popupWrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  z-index: 1;
}
.box .popupWrap .popupContent {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
}
.box .popupWrap .pop_btn_wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.box .popupWrap .pop_btn_wrap .pop_btn {
  width: 50%;
  font-size: 0.33rem;
  line-height: 0.9rem;
  text-align: center;
  color: #2d7ffc;
  border-bottom: 1px solid #ececec;
}
.box .popupWrap .pop_btn_wrap .pop_btn:first-child {
  border-right: 1px solid #ececec;
}
</style>
<style scoped>
.hui-field_core {
  text-align: right;
}

.mt {
  margin-top: 0.3rem;
  height: 1rem;
  display: flex;
}

.hui-btn.is-block {
  width: 5.9rem;
  height: 0.8rem;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
  background-color: #2d7ffc;
  font-size: 0.3rem;
}

.content {
  background-color: #fff;
}
</style>