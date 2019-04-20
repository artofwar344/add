<template>
  <div class="settleFormmake">
    <towtop :name="titlename"/>
    <div class="header noMarginTop">男方信息</div>
    <div class="input_outside_box">
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            申请人姓名
          </label>
          <input type="text" placeholder="请输入姓名" v-model="manname">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            性别
          </label>
          <input type="text" disabled v-model="sexs">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box withflex">
          <label>
            身份证号码
          </label>
          <input type="text" placeholder="请输入身份证号码" v-model="mancardid">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            户籍所在地(省)
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input type="text" :value="mancity" placeholder="请选择" @click="open('pickerselect01')">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            户籍所在地(州/市)
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input type="text" :value="manadds" placeholder="请选择" @click="open('pickerselect02')">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            户籍所在地(区/县)
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input type="text" :value="manaddx" placeholder="请选择" @click="open('pickerselect03')">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box  withflex">
          <label>
            联系电话
          </label>
          <input type="text" placeholder="请输入手机号码" v-model="manphone">
        </div>
      </div>
    </div>

    <div class="header">
      女方信息
    </div>
    <div class="input_outside_box">
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            申请人姓名
          </label>
          <input type="text" placeholder="请输入姓名" v-model="femaleName">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            性别
          </label>
          <input type="text" :value="sex" disabled>
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box  withflex">
          <label>
            身份证号码
          </label>
          <input type="text" placeholder="请输入身份证号码" v-model="idNumber">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            户籍所在地(省)
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input type="text" :value="femalecity" placeholder="请选择" @click="open('pickerselect04')">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            户籍所在地(州/市)
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input type="text" :value="femaleadds" placeholder="请选择" @click="open('pickerselect05')">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            户籍所在地(区/县)
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input type="text" :value="address" placeholder="请选择" @click="open('pickerselect06')">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box  withflex">
          <label>
            联系电话
          </label>
          <input type="text" placeholder="请输入联系电话" v-model="phone">
        </div>
      </div>
    </div>

    <div class="input_outside_box littileMargin">
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            预约地市
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input type="text" :value="city" placeholder="请选择" @click="open('pickerselect07')">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            预约县区
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input type="text" :value="county" placeholder="请选择" @click="open('pickerselect08')">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            预约机构
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input
            type="text"
            placeholder="请选择预约机构"
            :value="policestation"
            @click="open('pickerselect09')"
          >
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            机构地址
          </label>
          <input type="text" v-model="ressadrr" placeholder="请输入机构地址">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            预约咨询电话
          </label>
          <input type="text" placeholder="请输入预约咨询电话" v-model="registel">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>
            预约时间
          </label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input
            type="text"
            v-model="confirmValDate"
            placeholder="请选择"
            @click="open('pickerselect10')"
          >
        </div>
      </div>
      <!--<div class="checklistWrap" v-show="showTime">
        <Radios
          :propserror="errorRadio"
          :error="errorRadioText"
          :desc="radiosDesc"
          title
          v-model="timevalue"
          :options="data"
          v-on:errorchange="handleErrorChangesRadio"
        ></Radios>
      </div>-->
      <!-- <div class="input_box vcode">
        <Field
          type="text"
          required
          label="验证码"
          :value="codeCheck"
          v-model="codeCheck"
          placeholder="请输入验证码"
        >
          <RandomCode slot="prepend" :codeCheck="codeCheck" @getCode="getCode" ref="checkCode"></RandomCode>
        </Field>
      </div> -->
    </div>
    <button class="commonBtn" @click="reserve()">确定预约</button>
    <!-- 户籍地(省) -->
    <Selectpopup
      ref="pickerselect01"
      position="bottom"
      :dataslots="selectAddcity"
      class="example-select_item"
      @confirms="selectConfirmAddcity"
      @reset="selectAddcity"
    ></Selectpopup>
    <!-- 户籍地(市) -->
    <Selectpopup
      ref="pickerselect02"
      position="bottom"
      :dataslots="selectAdds"
      class="example-select_item"
      @confirms="selectConfirmAdds"
      @reset="resetAdds"
    ></Selectpopup>
    <!-- 户籍地 -->
    <Selectpopup
      ref="pickerselect03"
      position="bottom"
      :dataslots="selectAddx"
      class="example-select_item"
      @confirms="selectConfirmAddx"
      @reset="resetAddx"
    ></Selectpopup>
    <!-- 户籍地 -->
    <Selectpopup
      ref="pickerselect04"
      position="bottom"
      :dataslots="selectAddfemalecity"
      class="example-select_item"
      @confirms="selectConfirmAddfemalecity"
      @reset="resetAddfemalecity"
    ></Selectpopup>
    <!-- 户籍地 -->
    <Selectpopup
      ref="pickerselect05"
      position="bottom"
      :dataslots="selectAddfemaleadds"
      class="example-select_item"
      @confirms="selectConfirmAddfemaleadds"
      @reset="resetAddfemaleadds"
    ></Selectpopup>
    <!-- 户籍地 -->
    <Selectpopup
      ref="pickerselect06"
      position="bottom"
      :dataslots="selectAddress"
      class="example-select_item"
      @confirms="selectConfirmAddress"
      @reset="resetAddress"
    ></Selectpopup>
    <!-- 选择地州市 -->
    <Selectpopup
      ref="pickerselect07"
      position="bottom"
       :dataslots="selectCity"
      class="example-select_item"
      @confirms="selectConfirmCity"
      @reset="resetCity"
    ></Selectpopup>
    <!-- 选择区县 -->
    <Selectpopup
      ref="pickerselect08"
      position="bottom"
       :dataslots="selectCounty"
      class="example-select_item"
      @confirms="selectConfirmCounty"
      @reset="resetCounty"
    ></Selectpopup>
    <!-- 选择预约地址 -->
    <Selectpopup
      ref="pickerselect09"
      position="bottom"
       :dataslots="selectPoliceStation"
      class="example-select_item"
      @confirms="selectConfirmPoliceStation"
      @reset="resetPoliceStation"
    ></Selectpopup>
    <Datetime
      ref="pickerselect10"
      type="date"
      v-model="valueDate"
      position="bottom"
      :start-date="startDate"
      @confirm="handleChangeConfirmDate"
    ></Datetime>
    <Popupprompt
      v-model="popupVisible6"
      :confirm-btn="{}"
      :cancel-btn="{}"
      :btn-list="content2.btnList"
      @click="clickbtn2"
    >
      <div slot="othercontent">
        <div class="popTitle">您的预约已提交成功！</div>
        <div class="popText">预约号：{{datatext.rsrvtn_no}}</div>
      </div>
    </Popupprompt>
  </div>
</template>

<script>
function dateFormat(time, format) {
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
import RandomCode from "./../common/randomCode.vue";
import towtop from "../../../components/HederTwo";
export default {
  data: function() {
    return {
      mancity: "",
      manadds: "",
      manaddx: "",
      manname: "",
      mancardid: "",
      manphone: "",
      titlename: "预约婚姻登记",
      femaleName: "",
      sex: ["女"],
      sexs: "男",
      idNumber: "",
      datatext: "",
      address: "",
      femalecity: "",
      femaleadds: "",
      phone: "",
      city: "",
      county: "",
      policestation: "",
      policestationid: "",
      registel: "",
      valueDate: "",
      confirmValDate: "",
      startDate: new Date(),
      vcode: "",
      ressadrr: "",
      codeCheck: "",
      codeModel: "",
      showTime: false,
      selectAddcity: [
        {
          flex: 1,
          values: [],
          showText: "regnNm",
          className: "slot1"
        }
      ],
      selectAdds: [
        {
          flex: 1,
          values: [],
          showText: "regnNm",
          className: "slot1"
        }
      ],
      selectAddx: [
        {
          flex: 1,
          values: [],
          showText: "regnNm",
          className: "slot1"
        }
      ],
      selectAddfemalecity: [
        {
          flex: 1,
          values: [],
          showText: "regnNm",
          className: "slot1"
        }
      ],
      selectAddfemaleadds: [
        {
          flex: 1,
          values: [],
          showText: "regnNm",
          className: "slot1"
        }
      ],
      selectAddress: [
        {
          flex: 1,
          values: [],
          showText: "regnNm",
          className: "slot1"
        }
      ],
      selectCity: [
        {
          flex: 1,
          values: [],
          showText: "regnNm",
          className: "slot1"
        }
      ],
      selectCounty: [
        {
          flex: 1,
          values: [],
          showText: "regnNm",
          className: "slot1"
        }
      ],
      selectPoliceStation: [
        {
          flex: 1,
          values: [],
          showText: "Org_Name",
          className: "slot1"
        }
      ],
      popupVisible6: false,
      content2: {
        title: "您的预约已提交成功！",
        text: "请关注受理结果！",
        btnList: [
          {
            id: "btn1",
            text: "返回首页",
            primary: true
          }
        ]
      },
      timevalue: "",
      radiosDesc: "",
      errorRadio: false, //示例1的错误校验状态
      errorRadioText: "", //示例1的错误提示文字
      // data: [
      //   {
      //     label: "09:00-10:00",
      //     value: "0",
      //     disabled: false
      //   },
      //   {
      //     label: "10:00-11:00",
      //     value: "1",
      //     disabled: false
      //   },
      //   {
      //     label: "11:00-12:00",
      //     value: "2",
      //     disabled: false
      //   },
      //   {
      //     label: "14:00-15:00",
      //     value: "3",
      //     disabled: false
      //   },
      //   {
      //     label: "15:00-16:00",
      //     value: "4",
      //     disabled: false
      //   },
      //   {
      //     label: "16:00-17:00",
      //     value: "5",
      //     disabled: false
      //   },
      //   {
      //     label: "17:00-18:00",
      //     value: "6",
      //     disabled: false
      //   }
      // ],
      timeValue: []
    };
  },
  components: {
    towtop,
    RandomCode
  },
  watch: {
    confirmValDate: function(val) {
      this.showTime = true;
    }
  },
  created() {
    // window.sessionStorage.setItem("cardid",'130433199008042715')
    this.cardid = window.sessionStorage.getItem("cardid");
    this.birth =
      this.cardid.substring(6, 10) +
      "-" +
      this.cardid.substring(10, 12) +
      "-" +
      this.cardid.substring(12, 14);
    if (window.sessionStorage.getItem("cardid")) {
      if (parseInt(this.cardid.substr(16,1)) % 2 == 1) {
        //男
        this.manname =
          window.sessionStorage.getItem("username") != "null"
            ? window.sessionStorage.getItem("username")
            : "";
        this.mancardid =
          window.sessionStorage.getItem("cardid") != "null"
            ? window.sessionStorage.getItem("cardid")
            : "";
        this.manphone =
          window.sessionStorage.getItem("userphone") != "null"
            ? window.sessionStorage.getItem("userphone")
            : "";
      } else {
        //女
        this.femaleName =
          window.sessionStorage.getItem("username") != "null"
            ? window.sessionStorage.getItem("username")
            : "";
        this.idNumber =
          window.sessionStorage.getItem("cardid") != "null"
            ? window.sessionStorage.getItem("cardid")
            : "";
        this.phone =
          window.sessionStorage.getItem("userphone") != "null"
            ? window.sessionStorage.getItem("userphone")
            : "";
      }
    }
    this.querycity("GAT", "156", "1");
    // this.querycity("GAT", "156", "1");
  },
  mounted() {
    $(".picker").on("touchmove", function(event) {
      event.stopPropagation();
      event.preventDefault();
    });
  },
  methods: {
    handleErrorChangesRadio(val) {
      //示例1的密码错误状态接收，
      this.errorRadio = val;
      console.log(this.timevalue);
    },
    clickSubmitFun() {
      //示例1的点击提交回调
      if (this.timevalue === "") {
        this.errorRadio = true;
        this.errorRadioText = "请选择！";
      }
    },
    getCode(code) {
      console.log(code, "code");
      this.codeCheck = code;
    },
    open(picker) {
      if (!this.mancity && picker == "pickerselect02") {
        this.$toast("请先选择户籍所在地(省)!");
        return;
      } else if (!this.manadds && picker == "pickerselect03") {
        this.$toast("请先选择户籍所在地(市)!");
        return;
      } else if (!this.femalecity && picker == "pickerselect05") {
        this.$toast("请先选择户籍所在地(省)!");
        return;
      } else if (!this.femaleadds && picker == "pickerselect06") {
        this.$toast("请先选择户籍所在地(市)!");
        return;
      } else if (!this.city && picker == "pickerselect08") {
        this.$toast("请先选择预约地市!");
        return;
      } else if (!this.county && picker == "pickerselect09") {
        this.$toast("请先选择预约区县!");
        return;
      }
      if(picker == "pickerselect07"||picker == "pickerselect08"||picker == "pickerselect09"||picker == "pickerselect10"){
         window.scrollTo(0,9999)
      }
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmSex(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.sex = selectedVal[0].text;
      } else {
        this.sex = selectedVal;
      }
    },
    selectConfirmSexs(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.sexs = selectedVal[0].text;
      } else {
        this.sexs = selectedVal;
      }
    },
    selectConfirmAddcity(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.mancity = selectedVal[0].regnNm;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "2");
      } else {
        this.mancity = selectedVal;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "2");
      }
    },
    selectConfirmAdds(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.manadds = selectedVal[0].regnNm;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "3");
      } else {
        this.manadds = selectedVal;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "3");
      }
    },
    selectConfirmAddx(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.manaddx = selectedVal[0].regnNm;
      } else {
        this.manaddx = selectedVal;
      }
    },
    selectConfirmAddfemalecity(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.femalecity = selectedVal[0].regnNm;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "4");
      } else {
        this.femalecity = selectedVal;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "4");
      }
    },
    selectConfirmAddfemaleadds(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.femaleadds = selectedVal[0].regnNm;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "5");
      } else {
        this.femaleadds = selectedVal;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "5");
      }
    },
    selectConfirmAddress(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.address = selectedVal[0].regnNm;
      } else {
        this.address = selectedVal;
      }
    },
    selectConfirmCity(selectedVal) {

      if (typeof selectedVal[0] === "object") {
        this.city = selectedVal[0].regnNm;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "7");
      } else {
        this.city = selectedVal;
        this.querycity(selectedVal[0].type, selectedVal[0].regnCode, "7");
      }
    },
    selectConfirmCounty(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.county = selectedVal[0].regnNm;
      } else {
        this.county = selectedVal;
      }
      let data = {
        txnCommCom: {
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          region_code: selectedVal[0].regnCode,
          keyword: ""
        }
      };
      let pagejump = {
        tRecInPage: "1",
        tPageJump: "1"
      };
      this.$ajaxRequest("post", "/gsp/mng70011", data, pagejump)
        .then(res => {
          console.log("这是预约婚姻登记的res", res.List);
          // console.log(res)
          this.selectPoliceStation[0].values = res.List;
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectConfirmPoliceStation(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.policestation = selectedVal[0].Org_Name;
        this.policestationid = selectedVal[0].Id;
        this.registel = selectedVal[0].Tel;
        this.ressadrr = selectedVal[0].Addr;
      } else {
        this.policestation = selectedVal;
      }
    },
    resetAddcity() {
      this.address = "";
    },
    resetAdds() {
      this.address = "";
    },
    resetAddx() {
      this.address = "";
    },
    resetAddfemalecity() {
      this.femalecity = "";
    },
    resetAddfemaleadds() {
      this.femaleadds = "";
    },
    resetAddress() {
      this.address = "";
    },
    resetCity() {
      this.city = "";
    },
    resetCounty() {
      this.county = "";
    },
    resetPoliceStation() {
      this.policestation = "";
    },
    handleChangeConfirmDate(value) {
      //日期确定值
      this.confirmValDate = dateFormat(value, "yyyy-MM-dd");
    },
    reserve() {
      console.log(this.timevalue);
      if (!this.$VerifyCardId.test(this.mancardid)) {
        this.$toast("男方身份证号码为空或格式错误!");
        return;
      } else if (!this.$VerifyName.test(this.manname)) {
        this.$toast("男方姓名为空或格式错误!");
        return;
      } else if (!this.$VerifyPhone.test(this.manphone)) {
        this.$toast("男方手机号码为空或格式错误!");
        return;
      } else if (!this.$VerifyCardId.test(this.idNumber)) {
        this.$toast("女方身份证号码为空或格式错误!");
        return;
      } else if (!this.$VerifyName.test(this.femaleName)) {
        this.$toast("女方姓名为空或格式错误!");
        return;
      } else if (!this.$VerifyPhone.test(this.phone)) {
        this.$toast("女方手机号码为空或格式错误!");
        return;
      } else if (!this.confirmValDate) {
        this.$toast("请选择预约时间!");
        return;
      }
      // else if (
      //   this.timevalue == "" ||
      //   this.timevalue == "null" ||
      //   this.timevalue == null
      // ) {
      //   this.$toast("请选择预约时间段!");
      //   return;
      // }

      else if (!this.policestation) {
        this.$toast("请选择预约机构!");
        return;
      }
      let setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          member_id: window.sessionStorage.getItem("userid"),
          matter_id: window.sessionStorage.getItem("matterid"),
          // chann_id: "1",
          m_crdt_no: this.mancardid,
          m_nm: this.manname,
          m_tel: this.manphone,
          f_crdt_no: this.idNumber,
          f_nm: this.femaleName,
          f_tel: this.phone,
          rsrvtn_dt: this.confirmValDate,
          // rsrvtn_tm: this.data[this.timevalue].label,
          rsrvtn_rgs_site: this.policestationid,
          //apply_time: "123",
          city_name: this.city,
          cnty_name: this.county,
          addr: this.ressadrr,
          org_name: this.policestation,
          tel: this.registel
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80015", setdata)
        .then(res => {
          console.log(res);
          if(res.errorinfo==undefined||res.errorinfo=='undefined'){
            this.datatext = res;
            this.popupVisible6 = true;
          }
        })
        .catch(response => {});
    },
    querycity(oType, parentCode, typecode) {
      console.log(typecode);
      console.log(oType);
      let setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          oType: oType,
          areaCode: "",
          parentCode: parentCode,
          regnName: "",
          regnLevel: ""
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", setdata)
        .then(res => {
          console.log(res);
          if (typecode == 1) {
            // debugger
            this.selectAddcity[0].values = res;
            // console.log(res)
            this.selectAddfemalecity[0].values = res;
            this.femalecity = this.selectAddfemalecity[0].values[0].regnNm;
            this.mancity = this.selectAddfemalecity[0].values[0].regnNm;
            this.querycity(
              this.selectAddfemalecity[0].values[0].type,
              this.selectAddfemalecity[0].values[0].regnCode,
              "2"
            );
            this.querycity(
              this.selectAddfemalecity[0].values[0].type,
              this.selectAddfemalecity[0].values[0].regnCode,
              "4"
            );
            this.querycity(
              this.selectAddfemalecity[0].values[0].type,
              this.selectAddfemalecity[0].values[0].regnCode,
              "6"
            );
          } else if (typecode == 2) {
            this.selectAdds[0].values = res;
            // this.manadds = this.selectAddfemalecity[0].values[0].regnNm;
            // this.querycity(
            //   this.selectAddfemalecity[0].values[0].type,
            //   this.selectAddfemalecity[0].values[0].regnCode,
            //   "3"
            // );
          } else if (typecode == 3) {
            this.selectAddx[0].values = res;
          } else if (typecode == 4) {
            this.selectAddfemaleadds[0].values = res;
            // this.femaleadds = this.selectAddfemalecity[0].values[0].regnNm;
            // this.querycity(
            //   this.selectAddfemalecity[0].values[0].type,
            //   this.selectAddfemalecity[0].values[0].regnCode,
            //   "5"
            // );
          } else if (typecode == 5) {
            this.selectAddress[0].values = res;
          } else if (typecode == 6) {
            this.selectCity[0].values = res;
          } else if (typecode == 7) {
            this.selectCounty[0].values = res;
          }
        })

        .catch(response => {});
    },
    clickbtn2(id) {
      this.popupVisible6 = false;
      //裕农通APP功能，勿删！
      if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
        PJF.ynt.A0161G058()
      }else{
        this.$CallModule('close','关闭')
      }
      //this.$router.push("/service");
    }
  }
};
</script>


<style>
.settleFormmake .hui-field {
  padding: 0 !important;
}
/* .settleFormmake .hui-datetime{
  position:absolute;
} */
.settleFormmake .hui-radios_label {
  flex: 1;
  text-align: right;
  line-height: 0.5rem;
}
.settleFormmake .hui-datetime {
  overflow: hidden;
}
.settleFormmake .withflex{
  display: flex;
}
.settleFormmake .withflex label{
  display: block;
  width: 20% !important;
}
.settleFormmake .withflex input{
  flex: 1;
}
</style>
<style scoped lang="less">
@import "../../../assets/css/Engagement.less";
.input_outside_box .input_box input {
  width: auto !important;
}
.hui-field .hui-field_border .hui-field_borderRight {
  border-right: none;
}
.hui-field .hui-field_border .hui-field_value {
  border: none;
  margin: 0;
}
.littlestarbig{
  position: relative;
}
.littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0.1rem;
  top: 0.36rem;
}
// .settleFormmake{
//   overflow: hidden;
//   position: relative;
// }
</style>
