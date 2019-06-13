<template>
  <div>

    <div class="nav_title">男方信息</div>
    <!-- <form action="" id="subform"> -->
    <div class="example-field">
      <!-- <FormGroup v-on:accept-submit="submitEvent" title-position="left"> -->
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
        :propserror="errorText1"
        :error="errorTextInfo1"
        desc=""
        desc-class="richText"
        type="text"
        label="姓名"
        :value="textValue"
        v-model='textValue'
        placeholder="请输入姓名"

        class='example-size'>
        </Field>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
         readonly
          :error="errorSelectInfo"
          :propserror="errorSelect01"
          label="证件类型"
          disableclear
          type="text"
          placeholder="请选择"

          :value="confirmValSelect01"
          v-on:errorchange="errorChangeFun"
          @click.native="open('pickerselect01')">
        </Field>
      </div>
        <Selectpopup
        ref="pickerselect01"
        position="bottom"

        :dataslots="selectData01"
        class="example-select_item"
        @confirms="selectConfirmFun01">
        </Selectpopup>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
         :propserror="errorText2"
         :error="errorTextInfo2"
         desc=""
         desc-class="richText"
         type="text"
         label="证件号"
         :value="textValue2"
         v-model='textValue2'
         placeholder="请输入身份证号"
         >
        </Field>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
         readonly
          :error="errorSelectInfo"
          :propserror="errorDate"
          label="出生日期"
          desc=""
          disableclear
          type="text"
          placeholder="请选择出生日期"

          :value="confirmValDate"
          v-on:errorchange="handleErrorChangesDate"
          @click.native="open('picker2')">

        </Field>
      </div>
        <Datetime
          ref="picker2"
          type="date"
          v-model="valueDate"

          position="middle"
          :start-date=startDate
          :end-date=endDate
          @confirm="handleChangeConfirmDate">
        </Datetime>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
          readonly
          :error="errorSelectInfo"
          :propserror="errorSelect"
          label="户口性质"
          disableclear
          type="text"
          placeholder="请选择户口性质"

          :value="confirmValSelect"
          v-on:errorchange="errorChangeFun"
          @click.native="open('pickerselect')">
        </Field>
      </div>
        <Selectpopup
        ref="pickerselect"
        position="bottom"

        :dataslots="selectData"
        class="example-select_item"
        @confirms="selectConfirmFun">
        </Selectpopup>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
         readonly
          :error="errorSelectInfo"
          :propserror="errorSelect04"
          label="民族"
          disableclear
          type="text"
          placeholder="请选择民族"

          :value="confirmValSelect04"
          v-on:errorchange="errorChangeFun"
          @click.native="open('pickerselect04')">
        </Field>
      </div>
        <Selectpopup
        ref="pickerselect04"
        position="bottom"

        :dataslots="selectData04"
        class="example-select_item"
        @confirms="selectConfirmFun04">
        </Selectpopup>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
         readonly
          :error="errorSelectInfo"
          :propserror="errorSelect03"
          label="婚姻状况"
          disableclear
          type="text"
          placeholder="请选择婚姻状况"

          :value="confirmValSelect03"
          v-on:errorchange="errorChangeFun"
          @click.native="open('pickerselect03')">
        </Field>
      </div>
        <Selectpopup
        ref="pickerselect03"
        position="bottom"

        :dataslots="selectData03"
        class="example-select_item"
        @confirms="selectConfirmFun03">
        </Selectpopup>
        <!--<Field
         :propserror="errorEmail"
         :error="errorEmailInfo"
         type="text"
         label="婚姻变动年月"
         :value="emailValue"
         v-model='emailValue'
         placeholder="请输入婚姻变动年月"
         required>-->
        <!--</Field>-->
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
         readonly
          :error="errorSelectInfo"
          :propserror="errorDate"
          label="婚姻变动年月"
          desc=""
          disableclear
          type="text"
          placeholder="请选择婚姻变动年月"

          :value="confirmValDate01"
          v-on:errorchange="handleErrorChangesDate01"
          @click.native="open('picker3')">
        </Field>
      </div>
        <Datetime
        ref="picker3"
        type="date"
        v-model="valueDate01"
        position="middle"

        :start-date=startDate
        :end-date=endDate
        @confirm="handleChangeConfirmDate01">
        </Datetime>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
         :propserror="errorTel"
         :error="errorTelInfo"
         type="tel"
         label="联系电话"
         :value="telValue"
         v-model='telValue'
         placeholder="请输入联系电话"
         >
        </Field>
      </div>
        <div @click='onshow(1)'>
          <div class="littlestarbig">
            <span class="littlestar">*</span>
          <Field
           :propserror="errorEmail"
           :error="errorEmailInfo"
           type="text"
           label="户籍地"

           :value="oneMapValue"
          placeholder="请选择户籍地"

           v-model='oneMapValue'
          @click.native="onshow(1)">
          </Field>
          </div>
        </div>

        <div @click='onshow(2)'>
          <div class="littlestarbig">
            <span class="littlestar">*</span>
          <Field
           :propserror="errorEmail"
           :error="errorEmailInfo"
           type="text"
           label="现居住"
           :value="towMapValue"

           placeholder="请选择现居住"

           >
          </Field>
          </div>
        </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
         :propserror="errorEmail"
         :error="errorEmailInfo"
         type="text"
         label="居住详址"
         :value="mapValue"
         v-model='mapValue'
         placeholder="请输入居住详址"
         >
        </Field>
      </div>
      <!-- <div class="example-formgroup_btn-wrapper" @click="nvsub" v-show="onnext">
        <Btn block>下一步</Btn>
      </div> -->
     <div class="padTopAdd5 padBotAdd5">
        <mybutton :btnData="btnData" v-show="onnext" @click="nvsub"/>
      </div>
      <div class="padTopAdd5 padBotAdd5">
        <mybutton :btnData="btnData" v-show="!onnext"/>
      </div>
    </div>
    <!-- </FormGroup> -->
    <div class="fiveBox" v-show="onshwo" >
      <div class="fiveCen" >
        <div @click="uplod('-1')" >
            <Field
             readonly
              :error="errorSelectInfo"
              :pospserror="errorSelectmap"

              label="选择省"
              disablecler
              type="text"
              placeholder="请选择省"

              :value="confirmValSelectmap"
              v-on:errorchange="errorChangeFun"
            @click.native="open('pickerselectmap')"
            class="sclbackground"
          >
              <span class="example-select_arrowRight"></span>
            </Field>
          </div>


          <!--==========================================================-->
          <div @click="uplod('0')">
            <Field
             readonly
              :error="errorSelectInfo"
              :pospserror="errorSelectmap1"
              label="选择市"

              disablecler
              type="text"
              placeholder="请选择市"

              :value="confirmValSelectmap1"
              v-on:errorchange="errorChangeFun"
            @click.native="open('pickerselectmap1')"
            class="sclbackground"
          >
              <span class="example-select_arrowRight"></span>
            </Field>
          </div>


          <!--==========================================================-->
          <div @click="uplod('1')">
            <Field
             readonly
              :error="errorSelectInfo"
              :pospserror="errorSelectmap2"
              label="选择县"
              disablecler
              type="text"
              placeholder="请选择县"


              :value="confirmValSelectmap2"
              v-on:errorchange="errorChangeFun"
            @click.native="open('pickerselectmap2')"
            class="sclbackground"
          >
              <span class="example-select_arrowRight"></span>
            </Field>
          </div>

          <!--==========================================================-->
          <div @click="uplod('2')">
            <Field
             readonly
              :error="errorSelectInfo"

              :pospserror="errorSelectmap3"
              label="选择乡镇"
              disablecler
              type="text"
              placeholder="请选择乡镇"

              :value="confirmValSelectmap3"
              v-on:errorchange="errorChangeFun"
            @click.native="open('pickerselectmap3')"
            class="sclbackground"
          >
              <span class="example-select_arrowRight"></span>
            </Field>
          </div>

          <!--==========================================================-->
          <div @click="uplod('3')">
            <Field
             readonly
              :error="errorSelectInfo"
              :pospserror="errorSelectmap4"
              label="选择村、街道"
              disablecler
              type="text"
              placeholder="请选择村、街道"

              :value="confirmValSelectmap4"
              v-on:errorchange="errorChangeFun"
            @click.native="open('pickerselectmap4')"
            class="sclbackground"
          >
              <span class="example-select_arrowRight"></span>
            </Field>
          </div>
        <div class="scl_btn">
          <button @click="endhwo">取消</button>
          <button @click="okshwo">确定</button>
        </div>
      </div>
    </div>
    <Selectpopup
      ref="pickerselectmap"
      position="bottom"
      :dataslots="selectDatamap"
      class="example-select_item"
      @confirms="selectConfirmFunmap"
    ></Selectpopup>
    <Selectpopup
      ref="pickerselectmap1"
      position="bottom"
      :dataslots="selectDatamap1"
      class="example-select_item"
      @confirms="selectConfirmFunmap1"
    ></Selectpopup>
    <Selectpopup
      ref="pickerselectmap2"
      position="bottom"
      :dataslots="selectDatamap2"
      class="example-select_item"
      @confirms="selectConfirmFunmap2"
    ></Selectpopup>
    <Selectpopup
      ref="pickerselectmap3"
      position="bottom"
      :dataslots="selectDatamap3"
      class="example-select_item"
      @confirms="selectConfirmFunmap3"
    ></Selectpopup>
    <Selectpopup
      ref="pickerselectmap4"
      position="bottom"
      :dataslots="selectDatamap4"
      class="example-select_item"
      @confirms="selectConfirmFunmap4"
    ></Selectpopup>
    <!-- </form> -->
  </div>
</template>
<script>
  import {
    validateEmail,
    validateTel,
    validateNum
  } from "../../../../assets/jq/Utils.js";

  import { cenurl } from "../../../../components/toptow.js";
import valuecent from "./valuecent.js";
import mybutton from "../../../../components/MyButton";

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
const address = valuecent.mapcent;


  export default {
    data() {
      return {
        btnData:[
          {
            text:'下一步',
            disabled: false,
            isSure: true,
          }
        ],
        sex :false ,
      sheng:'',
      shengadd:'',
      shi:'',
      shiadd:'',
      qu:'',
      quas:'',
      quadd:'',
        WorkId: "",
        shwval: "",
        onshwo: false,
      onnext:true,
        sval: "",
        ssval: "",
        xxval: "",
        zcval: "",
        jval: "",
      lndecd:'',
      cardidtype: "1010",
        hkxzcode:'',
        sheng: "",
        sheng1: "",
        sheng2: "",
        sheng3: "",
        sheng4: "",
        oneMapValue:'',
        mapValue: "",
        towMapValue: "",
        hadertow: "壹孩生育服务登记",
        textValue: '',
        textValue1: "",
        textValue2: "",
        textValue3: "",
        pwdValue: "",
        telValue: '',
        numValue: "",
        textareaValue: "",
        emailValue: "",
        errorText: false,
        errorText1: false,
        errorText2: false,
        errorText3: false,
        errorTextInfo: "",
        errorTextInfo1: "",
        errorTextInfo2: "",
        errorPwd: false,
        errorPwdInfo: "",
        errorTel: false,
        errorTelInfo: "",
        errorNum: false,
        errorNumInfo: "",
        errorTextarea: false,
        errorTextareaInfo: "",
        errorEmail: false,
        errorEmailInfo: "",
        options: ["苹果", "香蕉", "橘子", "哈密瓜"],
        webAddr: "",
        sbuInfo: "",
        valueDatetime: "", //2017-02-23 12:10
        confirmValDatetime: "",
        errorDatetime: false,
        errorSelectInfo: "",
        valueDate: "",
        valueDate01: "",
        confirmValDate: "",
        errorDate: false,
        startDate: new Date(1960, 0, 1),
      endDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
        confirmValDate01: "",
        errorDate1: false,
        startDate1: new Date(2000, 0, 1),
        endDate1: new Date(2018, 0, 10),
        confirmValTime: "",
        errorTime: false,
        cardid:'',
        birth:'',
        errorSelect01: false,
        errorSelectInfo: "",
        cmnCd:'',
        mcmnCd:'01',
        selectData01: [
          {
            flex: 1,
            values: [
              {
                text: "身份证",
                value: "1010"
              },
              {
                text: "护照",
                value: "1050"
              },
              {
                text: "港澳同胞回乡证（通行卡）",
                value: "1770"
              },
              {
                text: "台湾居民来往大陆通行证",
                value: "1080"
              },
              {
                text: "军官证",
                value: "1022"
              },
              {
                text: "其他",
                value: "1999"
              }
            ],
            className: "slot1",
            showText: "text",
            defaultIndex: 0
          }
        ],

      confirmValSelect01: ["身份证"], //['1987']
        errorSelect: false,
        errorSelectInfo: "",
        selectData: [
          {
            flex: 1,

            values: [
              {
                text: "城镇居民",
                value: "1"
              },
              {
                text: "农村居民",
                value: "2"
              },
              {
                text: "其它",
                value: "9"
              }
            ],
            className: "slot1",
            showText: "text",
            defaultIndex: 0
          }
        ],
        confirmValSelect: '',

        //--------------------------------------------------------------------
        errorSelectmap: false,
        selectDatamap: [
          {
            flex: 1,
            values: [],
            className: "map",
            showText: "regnNm",
            defaultIndex: 0
          }
        ],
        confirmValSelectmap: '',


        //--------------------------------------------------------------------
        errorSelectmap1: false,
        selectDatamap1: [
          {
            flex: 1,
            values: [],
            className: "map",
            showText: "regnNm",
            defaultIndex: 0
          }
        ],
        confirmValSelectmap1: '',
        //--------------------------------------------------------------------
        errorSelectmap2: false,
        selectDatamap2: [
          {
            flex: 1,
            values: [],
            className: "map",
            showText: "regnNm",
            defaultIndex: 0
          }
        ],
        confirmValSelectmap2:'',
        //--------------------------------------------------------------------
        errorSelectmap3: false,
        selectDatamap3: [
          {
            flex: 1,
            values: [],
            className: "map",
            showText: "regnNm",
            defaultIndex: 0
          }
        ],
        confirmValSelectmap3: '',
        //--------------------------------------------------------------------
        errorSelectmap4: false,
        selectDatamap4: [
          {
            flex: 1,
            values: [],
            className: "map",
            showText: "regnNm",
            defaultIndex: 0
          }
        ],
        confirmValSelectmap4:'',


        errorSelect03: false,
        errorSelectInfo: "",
        selectData03: [
        {
          flex: 1,
          values: [],

          className: "slot1",
          showText: "cmnCdNm",
          defaultIndex: 0
        }
      ],
      confirmValSelect03: "",

      errorSelect04: false,
      errorSelectInfo: "",
      selectData04: [
          {
            flex: 1,
            values: [],
            className: "slot1",
            showText: "cmnCdNm",
            defaultIndex: 0
          }
        ],
      confirmValSelect04: ""
    };
  },
watch: {
    textValue2(curVal, oldVal) {
      const _this = this;
      console.log(curVal.length)
      if (curVal.length >= 18) {
          console.log(1)
        if (!this.$VerifyCardId.test(curVal)) {
          console.log(2)

          _this.$toast("请输入正确的身份证号码");
          _this.textValue2 = "";
        } else {
          console.log(3)

          _this.confirmValDate = _this.getBirthday(_this.textValue2);
        }
      }
      console.log(curVal);
    }
  },
    methods: {
      getBirthday(cardNum) {
      if (cardNum.length === 18) {
        return `${parseInt(cardNum.slice(6, 10))}-${parseInt(
          cardNum.slice(10, 12)
        )}-${parseInt(cardNum.slice(12, 14))}`;
      }
    }, // 获取生日
      endhwo() {
        this.onshwo = false;
        this.selectDatamap1[0].values = '';
        this.confirmValSelectmap1 =''
        this.selectDatamap2[0].values = '';
        this.confirmValSelectmap2 =''
        this.selectDatamap3[0].values = '';
        this.confirmValSelectmap3 =''
        this.selectDatamap4[0].values = '';
        this.confirmValSelectmap4 =''
        // parentIds ='';
        this.sval='';
        this.ssval='';
        this.xxval='';
        this.zcval='';
        if (this.shwval == 1) {
        return this.oneMapValue = "";
        this.jval = '';
        } else {
        return
        this.towMapValue = "";
         this.lndecd = '';
        }
      },
      okshwo() {
        this.onshwo = false;
        if (this.shwval == 1) {
          return (this.oneMapValue =
            this.confirmValSelectmap +
            this.confirmValSelectmap1 +
            this.confirmValSelectmap2 +
            this.confirmValSelectmap3 +
            this.confirmValSelectmap4);
        } else {
          return (this.towMapValue =
            this.confirmValSelectmap +
            this.confirmValSelectmap1 +
            this.confirmValSelectmap2 +
            this.confirmValSelectmap3 +
            this.confirmValSelectmap4);
        }
      // this.handleScroll();
      },
      onshow(val) {
      document.activeElement.blur();
        this.shwval = val;
      this.selectDatamap1[0].values = "";
      this.confirmValSelectmap1 = "";
      this.selectDatamap2[0].values = "";
      this.confirmValSelectmap2 = "";
      this.selectDatamap3[0].values = "";
      this.confirmValSelectmap3 = "";
      this.selectDatamap4[0].values = "";
      this.confirmValSelectmap4 = "";
      this.sval = "";
      this.ssval = "";
      this.xxval = "";
      this.zcval = "";
        if (val == 1) {
          this.onshwo = true;
          this.confirmValSelectmap = "";
          this.confirmValSelectmap1 = "";
          this.confirmValSelectmap2 = "";
          this.confirmValSelectmap3 = "";
          this.confirmValSelectmap4 = "";
        } else if (val == 2) {
          this.onshwo = true;
          this.confirmValSelectmap = "";
          this.confirmValSelectmap1 = "";
          this.confirmValSelectmap2 = "";
          this.confirmValSelectmap3 = "";
          this.confirmValSelectmap4 = "";
        }
      this.handleScroll();
      this.confirmValSelectmap = this.shengadd;
      this.confirmValSelectmap1 = this.shiadd;
      $('.fiveCen').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
      },

      uplod(val) {
        var parentIds;
        val = val.toString();
        if (val === "-1" || val === undefined) {
          parentIds = "-1";
        this.shi = "";
        this.sheng = '';
        this.selectDatamap1[0].values = "";
        this.confirmValSelectmap1 = "";
        this.selectDatamap2[0].values = "";
        this.confirmValSelectmap2 = "";
        this.selectDatamap3[0].values = "";
        this.confirmValSelectmap3 = "";
        this.selectDatamap4[0].values = "";
        this.confirmValSelectmap4 = "";
        // parentIds ='';
        this.sval = "";
        this.sslval = "";
        this.xxval = "";
        this.zcval = "";
      } else if (val === "0") {
        if(this.sheng){
          parentIds = this.sheng
        }else{
          parentIds = this.sval
        }
        // parentIds = this.sval;
        this.shi = '';
        this.ssval = "";
        this.xxval = "";
        this.zcval = "";

        this.selectDatamap2[0].values = "";
        this.confirmValSelectmap2 = "";
        this.selectDatamap3[0].values = "";
        this.confirmValSelectmap3 = "";
        this.selectDatamap4[0].values = "";
        this.confirmValSelectmap4 = "";
      } else if (val === "1") {
        if (this.shi == "" || this.shi == undefined || this.shi == null) {
          parentIds = this.ssval;
        }else{
          parentIds = this.shi;
        }
        this.shi = this.quas;
        this.selectDatamap3[0].values = "";
        this.confirmValSelectmap3 = "";
        this.selectDatamap4[0].values = "";
        this.confirmValSelectmap4 = "";
        this.xxval = "";
        this.zcval = "";
      } else if (val === "2") {
        parentIds = this.xxval;
        this.selectDatamap4[0].values = "";
        this.confirmValSelectmap4 = "";
        this.zcval = "";
      } else if (val === "3") {
        parentIds = this.zcval;
      }
      console.log(parentIds);
        let setdata5={
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          parentCode: parentIds,
          oType: "WJW",
          }
        }
        this.$ajaxRequest("post","/gsp/mng19021", setdata5).then(res => {

          let cent = res;
          if (val == "-1") {
            this.selectDatamap[0].values = cent;
          } else if (val == "0") {
            this.selectDatamap1[0].values = cent;
          } else if (val == "1") {
            this.selectDatamap2[0].values = cent;
          } else if (val == "2") {
            this.selectDatamap3[0].values = cent;
          } else if (val == "3") {
            this.selectDatamap4[0].values = cent;
          }
          console.log("CLNtest：" + cent);
        })
          .catch(error => {
            console.log(error);
          });
      // this.handleScroll();
      },

    yanzheng() {
       if (this.textValue == "") {
        this.$toast("男方姓名不能为空");
        return false;
      }
      if (!this.$VerifyName.test(this.textValue)) {
        this.$toast("请输入正确的姓名");
        return false;
      }
      if (this.cardidtype == "") {
        this.$toast("男方证件类型不能为空");
        return false;
      }

      if (this.textValue2 == "") {
        this.$toast("男方证件号码不能为空");
        return false;
      }

      if (this.confirmValDate == "") {
        this.$toast("男方出生日期不能为空");
        return false;
      }

      if (this.hkxzcode == "") {
        this.$toast("男方户口性质不能为空");
        return false;
      }

      if (this.confirmValSelect04 == "") {
        this.$toast("男方民族不能为空");
        return false;
      }

      if (this.cmnCd == "") {
        this.$toast("男方婚姻状况不能为空");
        return false;
      }

      if (this.confirmValDate01 == "") {
        this.$toast("男方婚姻变动时间不能为空");
        return false;
      }

      if (this.telValue == "") {
        this.$toast("男方联系电话不能为空");
        return false;
      }
      if (!this.$VerifyPhone.test(this.telValue)) {
        this.$toast("请输入正确的联系电话");
        return false;
      }

      if (this.oneMapValue == "") {
        this.$toast("男方户籍地址不能为空");
        return false;
      }

      if (this.mapValue == "") {
        this.$toast("男方居住地详址不能为空");
        return false;
      }

      if (this.towMapValue == "") {
        this.$toast("男方现居地不能为空");
        return false;
        }
      },
      nvsub() {
        if(this.yanzheng() == false){
            return false
        }
      this.WorkId = window.sessionStorage.getItem("WorkId");
      let sidNumberes = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if (parseInt(this.textValue2.substr(16, 1)) % 2 == 0 ||!sidNumberes.test(this.textValue2)) {
        this.$toast("请输入正确的男方身份证号");
        return false;
      }
        let setdata6={
          txnBodyCom: {
          page: "2",
          work_id: this.WorkId,
          message: {
            matter_id: window.sessionStorage.getItem("matterid"),
            member_id: window.sessionStorage.getItem("userid"),
            json_content: {
              work_id: this.WorkId,
              m_nm: this.textValue,
              m_crdt_tp: this.cardidtype,
              m_crdt_no: this.textValue2,
              m_brth_dt: this.confirmValDate,
              m_rsdnc_char: this.hkxzcode,
              m_ethnct: this.mcmnCd,
              m_mar_st: this.cmnCd,
              m_mar_chg_tm: this.confirmValDate01,
              m_ctc_tel: this.telValue,
              m_hshld_rgst_lnd_ecd: this.jval, //男方户籍地编码
              m_hshld_rgst_lnd: this.oneMapValue,
              m_rsdnc_lnd: this.mapValue,
              m_living_lnd: this.towMapValue,
              m_Living_lnd_ecd: this.lndecd, //男方居住地编码
            }
          }
        }
      };
      console.log(this.jval.length)
      console.log(this.lndecd.length)
      if(this.jval.length == 0){
        this.$toast("请选择完整五级户籍地址");
         return false
      }
      if( this.lndecd.length==0){
        this.$toast("请选择完整五级现居住地址");
         return false
      }
        window.sessionStorage.setItem('manmaphjd',this.oneMapValue)
        window.sessionStorage.setItem('manhjd',this.jval)
        window.sessionStorage.setItem('manmapjzd',this.towMapValue)
        window.sessionStorage.setItem('manjzd',this.lndecd)
        this.$ajaxRequest("post","/APPS/db/insert", setdata6,false,false,false,'1').then(res => {
          //打包可以注销
          this.$router.push('/listtow?WorkId='+this.WorkId)
          //this.submitEvent();
          console.log(res);
        })
          .catch(error => {
            console.log(error);
          });
      },
      submitEvent() {
        let setdata1={
          txnCommCom: {
            tRecInPage: "10",
            tPageJump: "3",
            tStsTraceId: "1"
          },
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"),
            // matter_id: '79ABB23685267CC8E0530ADDC480B63A',
            chann_id: "123",
            id_number: this.textValue2,
            name: this.textValue,
            dept_id: "35454",
            operation_id: "465656",
            userid: window.sessionStorage.getItem('userid')
          }
        }
        this.$ajaxRequest("post","/gsp/mng80043", setdata1).then(res => {
          console.log(res);
          //this.isAndroid_ios()
         this.$router.push('/listtow?work_id='+this.WorkId)
        })
          .catch(error => {
            console.log(error);
          });
      },

      // 时间选择
      open(picker) {
        document.activeElement.blur();
        this.$refs[picker].open();
        if(picker=='pickerselectmap'||picker=='pickerselectmap1'||picker=='pickerselectmap2'||picker=='pickerselectmap3'||picker=='pickerselectmap4'){
         this.handleScroll();
        }
        $('.hui-popup').on('touchmove',function(event){
          event.preventDefault()
          event.stopPropagation()
        })
      },

      handleChangeConfirmDate(value) {
        //日期确定值
        this.confirmValDate = dateFormat(value, "yyyy-MM-dd");
      },
      handleErrorChangesDate(val) {
        this.errorDate = val;
      },

      handleChangeConfirmDate01(value) {
        //日期确定值
        this.confirmValDate01 = dateFormat(value, "yyyy-MM-dd");
      },
      handleErrorChangesDate01(val) {
        this.errorDate = val;
      },

    errorChangeFun(val) {
      this.errorSelect01 = val;
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
        this.cardidtype = selectedVal[0].value;
      } else {
        this.confirmValSelect01 = selectedVal;
      }
    },

    errorChangeFun(val) {
      this.errorSelect = val;
    },
    selectConfirmFun(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect = selectedVal[0].text;
        this.hkxzcode = selectedVal[0].value;
      } else {
        this.confirmValSelect = selectedVal;
      }
    },

    errorChangeFun(val) {
      this.errorSelect03 = val;
    },
    selectConfirmFun03(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect03 = selectedVal[0].cmnCdNm;
        this.cmnCd = selectedVal[0].cmnCd;
        this.hytype(this.confirmValSelect03);
      } else {
        this.confirmValSelect03 = selectedVal;
      }
    },
    hytype(value) {
      if (value == "丧偶") {
        this.$toast("特殊情形，请到乡镇卫生机构窗口办理");
        this.onnext = false;
      } else {
        this.onnext = true;
      }
    },
    errorChangeFun(val) {
      this.errorSelect04 = val;
    },
    selectConfirmFun04(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect04 = selectedVal[0].cmnCdNm;
        this.mcmnCd = selectedVal[0].cmnCd;
      } else {
        this.confirmValSelect04 = selectedVal;
      }
    },

    //-------------------------------------------------------------------------------------------------
    errorChangeFun(val) {
      this.errorSelectmap = val;
    },
    selectConfirmFunmap(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelectmap = selectedVal[0].regnNm;
        this.sval = selectedVal[0].regnCode;
        //					this.uplod('0')
      } else {
        this.confirmValSelectmap = selectedVal;
      }
      //    this.sval='';
      this.sslval = "";
      this.xxval = "";
      this.zcval = "";
    },

    //-------------------------------------------------------------------------------------------------
    errorChangeFun(val) {
      this.errorSelectmap1 = val;
      // this.handleScroll();
    },
    selectConfirmFunmap1(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelectmap1 = selectedVal[0].regnNm;
        this.ssval = selectedVal[0].regnCode;
        //					this.uplod('1')
      } else {
        this.confirmValSelectmap1 = selectedVal;
      }
      // this.handleScroll();
      // this.sslval='';
      this.xxval = "";
      this.zcval = "";
    },

    //-------------------------------------------------------------------------------------------------
    errorChangeFun(val) {
      this.errorSelectmap2 = val;
      // this.handleScroll();
    },
    selectConfirmFunmap2(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelectmap2 = selectedVal[0].regnNm;
        this.xxval = selectedVal[0].regnCode;
        //					this.uplod('2')
      } else {
        this.confirmValSelectmap2 = selectedVal;
      }
      // this.handleScroll();
      // this.xxval='';
      this.zcval = "";
    },

    //-------------------------------------------------------------------------------------------------
    errorChangeFun(val) {
      this.errorSelectmap3 = val;
      // this.handleScroll();
    },
    selectConfirmFunmap3(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelectmap3 = selectedVal[0].regnNm;
        this.zcval = selectedVal[0].regnCode;
        //					this.uplod('3')
      } else {
        this.confirmValSelectmap3 = selectedVal;
      }
      // this.handleScroll();
        // this.zcval='';
      },

      //-------------------------------------------------------------------------------------------------
      errorChangeFun(val) {
        this.errorSelectmap4 = val;
      // this.handleScroll();
      },
      selectConfirmFunmap4(selectedVal) {
        if (typeof selectedVal[0] === "object") {



          if (this.shwval == 1) {
          this.confirmValSelectmap4 = selectedVal[0].regnNm;
          this.jval = selectedVal[0].regnCode;
        }else{
          this.confirmValSelectmap4 = selectedVal[0].regnNm;
          this.lndecd = selectedVal[0].regnCode;
        }


          //					this.uplod('4')
        } else {
          this.confirmValSelectmap4 = selectedVal;
        }
      // this.handleScroll();
      },

      submitBtn() {
        if (!this.confirmValSelect01[0]) {
          //必填校验，如果不是必填项不用写
          this.errorSelect01 = true;
          this.errorSelectInfo = "请选择用户名!";
        } else {
          this.errorSelect01 = false;
        }
    },
    handleScroll() {
      window.scrollTo(0, 99999);
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
    },
     getsite(val){
        let cen = ''
        let setdata={
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          parentCode: val,
              oType: "WJW",
              matter_id: window.sessionStorage.getItem("matterid")
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", setdata).then(res => {
        console.log(res);
        if (val == "-1") {
          //省
          this.sheng = res[0].regnCode;
          this.shengadd = res[0].regnNm;
          this.getsite(res[0].regnCode);
        } else if (val == this.sheng) {
          //市
          this.shi = res[0].regnCode;
          this.quas = res[0].regnCode;
          this.shiadd = res[0].regnNm;
          this.getsite(res[0].regnCode);
        } else if (val == this.shi) {
          this.qu = res[0].regnCode;
          this.quadd = res[0].regnNm;
        }
      });
    }

    },
    components:{
    mybutton,
  },
  created() {
    console.log();
    this.getsite('-1')
  },
    mounted() {
      this.confirmValDate = this.valueDate; //日期
      this.confirmValDate01 = this.valueDate01; //日期
      if (window.sessionStorage.getItem("sex") == "2") {
        this.cardid=window.sessionStorage.getItem('listcardid')
        this.birth=this.cardid.substring(6, 10) + "-" + this.cardid.substring(10, 12) + "-" + this.cardid.substring(12, 14);
        if(this.cardid){
          // if (parseInt(this.cardid.substr(16,1)) % 2 == 1) {
            //男
            this.textValue=window.sessionStorage.getItem('listname')!="null"?window.sessionStorage.getItem('listname'):""
            this.textValue2=window.sessionStorage.getItem('listcardid')!="null"?window.sessionStorage.getItem('listcardid'):""
            this.confirmValDate=this.birth
            // this.telValue=window.sessionStorage.getItem('listuserphone')!='null'?window.sessionStorage.getItem('listuserphone'):''
          // } else {
          //   //女
          //   this.textValue=""
          //   this.textValue2=''
          //   this.confirmValDate=''
          //   // this.telValue=window.sessionStorage.getItem('userphone')!='null'?window.sessionStorage.getItem('userphone'):''
          // }
        }
      }else{
        this.cardid=window.sessionStorage.getItem('cardid')
        this.birth=this.cardid.substring(6, 10) + "-" + this.cardid.substring(10, 12) + "-" + this.cardid.substring(12, 14);
        if(this.cardid){
          if (parseInt(this.cardid.substr(16,1)) % 2 == 1) {
            //男
            this.textValue=window.sessionStorage.getItem('username')!="null"?window.sessionStorage.getItem('username'):""
            this.textValue2=window.sessionStorage.getItem('cardid')!="null"?window.sessionStorage.getItem('cardid'):""
            this.confirmValDate=this.birth
            // this.telValue=window.sessionStorage.getItem('userphone')!='null'?window.sessionStorage.getItem('userphone'):''
          } else {
            //女
            this.textValue=""
            this.textValue2=''
            this.confirmValDate=''
            // this.telValue=window.sessionStorage.getItem('userphone')!='null'?window.sessionStorage.getItem('userphone'):''
          }
        }
      }
      //民族接口
      const sendata2={
        "txnCommCom":{"tRecInPage":"10","tPageJump":"2","tStsTraceId":"110567890"},
        "txnBodyCom":{matter_id: window.sessionStorage.getItem("matterid"),"parentId":"1012"}
      }
      this.$ajaxRequest('post','/gsp/mng19019',sendata2).then(res=>{
        console.log(res)
        this.selectData04[0].values=res

      }).catch(error => {
        console.log(error);
      });
      //婚姻状况
      const sendata3={
        "txnCommCom":{"tRecInPage":"10","tPageJump":"2","tStsTraceId":"110567890"},
        "txnBodyCom":{matter_id: window.sessionStorage.getItem("matterid"),"parentId":"1016"}
      }
      this.$ajaxRequest('post','/gsp/mng19019',sendata3).then(res=>{
        console.log(res)
        this.selectData03[0].values=res


      }).catch(error => {
        console.log(error);
      });





}
  };
</script>

<style scoped>
  .hui-btn.is-block {
    text-align: center;
  }

  .hui-field_title {
    width: 3rem;
    font-size: 0.28rem;
    color: #333;
  }

  .hui-field_value input {
    color: #333;
    font-size: 0.28rem;
  }

  .hui-field_core {
    text-align: right;
  }

  .example-formgroup_btn-wrapper {
    width: 5.9rem;
    margin: 0 auto;
    margin-top: 0.3rem;
  }
  .fiveBox {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
  }

  .fiveCen {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .scl_btn {
    display: flex;
    background: #fff;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }

  .scl_btn button {
    flex: 1;
    height: 0.9rem;
    color: #fff;
    line-height: 0.9rem;
    background: #00ace6;
    font-size: 0.34rem;
    border: 0;
    border-radius: 0.5rem;
    margin: 0 0.05rem;
  }

  .hui-field_title {
    width: 3rem;
    font-size: 0.28rem;
    color: #333;
  }

  .hui-field {
    height: 0.98rem;
    line-height: 0.98rem;
    padding: 0 15px;
  }

  .nav_title {
    height: 0.72rem;
    line-height: 0.72rem;
    text-align: left;
    font-size: 0.28rem;
    background: #f1f3f6;
    padding-left: 0.32rem;
    color: #999;
  }
  /*form表单样式*/

  .example-field .comps-field_desc {
    font-size: 12px;
  }

  .field-prepend_text,
  .field-append_text {
    background: #f0f0f0;
    padding: 0.08rem;
    color: #ccc;
  }

  .field-append_text .hui-icon {
    line-height: normal;
    vertical-align: middle;
  }

  .example-field_btn-wrapper {
    margin-top: 0.2rem;
  }
  /*日期时间选择*/


  .example-daterange .hui-daterange {
    width: 320px;
    z-index: 1;
    left: 0;
  }

  .example-daterange_range {
    position: absolute;
    z-index: 1;
  }

  .example-daterange_btn {
    position: relative;
    z-index: 2100;
  }

  .example-daterange_text {
    padding: 10px 0;
  }
  /*地址选择*/

  .example-select_btn-wrapper {
    margin-top: 20px;
  }

  .example-select_arrowRight {
    display: block;
    width: 16px;
    height: 16px;
    background-size: contain;
    margin-left: 10px;
  }
  .littlestarbig{
    position: relative;
  }
  .littlestar{
    display: inline-block;
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.06rem;
    top: 37%
  }
</style>
