<template>
	<div>
		<div class="nav_title">申报材料</div>
		<!-- <form action="" id="subform"> -->
		<div class="example-field">
			<!--<FormGroup v-on:accept-submit="submitEvent" title-position="left">-->
				<!--<Field :propserror="errorText1" :error="errorTextInfo1"
        desc=""
         desc-class="richText" type="text" label="申报区域" :value="m_dec_area"  v-model='m_dec_area' placeholder="请输入申报区域" required class='example-size'>
				</Field>-->
      <div class="littlestarbig">
        <span class="littlestar">*</span>
				<Field
          readonly
          :error="errorSelectInfo"
          :propserror="errorSelect00"
          label="申报区域"
          disableclear
          type="text"
          placeholder="请选择申报区域"

          :value="confirmValSelect00"
          v-on:errorchange="errorChangeFun"
          @click.native="open('pickerselect00')">
				</Field>
      </div>
				<Selectpopup
        ref="pickerselect00"
        position="bottom"
        :dataslots="selectData00"
         class="example-select_item"
          @confirms="selectConfirmFun00">
          </Selectpopup>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <Field
          readonly
          :error="errorSelectInfo"
          label="生育孩次"
          disableclear
          type="text"
          placeholder="孩次"

          :value="confirmValSelect16">
        </Field>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
				<Field
          readonly
          :error="errorSelectInfo"
          :propserror="errorSelect01"
          label="生育原因"
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
          label="夫妇结婚证号"
          :value="textValue2"
          v-model='textValue2'
          placeholder="请输入夫妇结婚证号"
          >
				</Field>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
				<Field
          readonly
          :error="errorSelectInfo"
          :propserror="errorSelect"
          label="孕育状况"
          disableclear
          type="text"
          placeholder="请输入孕育状况"

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
          v-show="yun"

        :propserror="errorText2"
        :error="errorTextInfo2"
        desc=""
        desc-class="richText"
        type="text"
        label="怀孕周数"
        v-model='m_preg_weeks'
        :value="m_preg_weeks"
        placeholder="请输入怀孕周数">
				</Field>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
				<Field
          v-show="yun"

          readonly
          :error="errorSelectInfo"
          :propserror="errorDate"
          label="预产期"
          desc=""
          disableclear
          type="text"
          placeholder="请选择预产期"
          :value="confirmValDate"
          v-on:errorchange="handleErrorChangesDate"
          @click.native="open('picker2')">
				</Field>
      </div>
				<Datetime
        ref="picker2"
        type="date"
        v-model="m_expected_date"
        position="middle"
        :start-date="ycstartDate"
        :end-date="ycendDate"
        @confirm="handleChangeConfirmDate">
				</Datetime>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
				<Field
          readonly
          :error="errorSelectInfo"
          :propserror="errorSelect04"
          label="证件用途"
          disableclear
          type="text"
          placeholder="请选择证件用途"

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
          label="是否代办证件"
          disableclear type="text"
          placeholder="请输入是否代办证件"

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
      <div class="littlestarbig">
        <span class="littlestar">*</span>
				<Field
          readonly
          :error="errorSelectInfo"
          :propserror="errorDate"
          label="夫妇结婚日期"
          desc=""
           disableclear
           type="text"
           placeholder="请选择夫妇结婚日期"

           :value="confirmValDate04"
           v-on:errorchange="handleErrorChangesDate04"
           @click.native="open('picker4')">
				</Field>
      </div>
				<Datetime
        ref="picker4"
        type="date"
        v-model="valueDate"
        position="middle"
        :start-date=startDate
        :end-date=endDate
        @confirm="handleChangeConfirmDate04">
				</Datetime>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
				<Field
          readonly
          :error="errorSelectInfo"
          :propserror="errorSelect012"
          label="夫妻属性"
          disableclear
          type="text"
          placeholder="请选择夫妻属性"

          :value="confirmValSelect012"
          v-on:errorchange="errorChangeFun"
           @click.native="open('pickerselect012')">
				</Field>
      </div>
				<Selectpopup
        ref="pickerselect012"
        position="bottom"
        :dataslots="selectData012"
         class="example-select_item"
          @confirms="selectConfirmFun012">

          </Selectpopup>
				<Field :propserror="errorEmail"
        :error="errorEmailInfo"
        type="text"
        label="备注"
        :value="m_rem"
        v-model='m_rem'
        placeholder="请输入备注">
				</Field>
				<!-- <div class='example-formgroup_btn-wrapper'>
					<Btn block @click="nvsub()">下一步</Btn>
				</div> -->
        <div class="padTopAdd5">
    	<mybutton :btnData="btnData" @click="nvsub" />
      </div>
			<!--</FormGroup>-->
		</div>
		<!-- </form> -->

	</div>
</template>
<script>
import {
  validateEmail,
  validateTel,
  validateNum
} from "@/assets/jq/Utils.js";
  	import mybutton from "@/components/MyButton";
import { cenurl } from "@/components/toptow.js";
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
const address = {};

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
      yun:true,
      maplist:'',
      WorkId: "",
      shwval: "",
      onshwo: false,
      oneMapValue: "",
      mapValue: "",
      towMapValue: "",
      hadertow: "贰孩生育服务登记",
      textValue: "",
      textValue1: "",
      m_preg_weeks:'',
      m_expected_date:'',
      textValue2: "",
      pwdValue: "",
      telValue: "",
      numValue: "",
      textareaValue: "",
      emailValue: "",
      errorText: false,
      errorText1: false,
      errorText2: false,
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
      errorSelectInfo: "",
      valueDate: "",
      valueDate01: "",
      confirmValDate: "",
      errorDate: false,
      startDate: new Date(1980, 0, 1),
      endDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      ycstartDate: new Date(new Date().getFullYear(),
        0,
        31),
      ycendDate: new Date(
        new Date().getFullYear()+2,
        11,
        31
      ),
      confirmValDate01: "",
      errorDate1: false,
      startDate1: new Date(2000, 0, 1),
      endDate1: new Date(2018, 0, 10),
      m_rem: "",
      yncode:'2',
      yycode:'',
      fqsx:'',
      syyi:'',
      zjyt:'',
      confirmValSelectadd:'',
      errorSelect012: "",
      confirmValDate04: "",
      errorDate4: false,
      startDate4: new Date(2000, 0, 1),
      endDate4: new Date(2018, 0, 10),
      confirmValTime: "",
      errorTime: false,
      confirmValSelect16:'贰孩',
      errorSelect01: false,
      errorSelectInfo: "",
      selectData01: [
        {
          flex: 1,
          values: [
            {
              text: "生育二孩",
              value: "20"
            },
            {
              text: "一方独生子女",
              value: "21"
            },
            {
              text: "双方独生子女",
              value: "22"
            },
            {
              text: "离婚再婚二孩",
              value: "23"
            },
            {
              text: "其他情形二孩",
              value: "24"
            }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],

      confirmValSelect01: '', //['1987']

      errorSelect00: false,
      errorSelectInfo: "",
      selectData00: [
        {
          flex: 1,
          values: [
            {
              text: "男方户籍地",
              value: window.sessionStorage.getItem("manhjd"),
              maplist: window.sessionStorage.getItem("manmaphjd")
            },
            {
              text: "女方户籍地",
              value: window.sessionStorage.getItem("nvhjd"),
              maplist: window.sessionStorage.getItem("nvmaphjd")
            },
            {
              text: "男方现居地",
              value: window.sessionStorage.getItem("manjzd"),
              maplist: window.sessionStorage.getItem("manmaphjd")
            },
            {
              text: "女方现居地",
              value: window.sessionStorage.getItem("nvzjd"),
              maplist: window.sessionStorage.getItem("nvmaphjd")
            }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],

      confirmValSelect00:'', //['1987']

      selectData012: [
        {
          flex: 1,
          values: [
            {
              text: "男方独生子女",
              value: "11"
            },
            {
              text: "女方独生子女",
              value: "12"
            },
            {
              text: "双方独生子女",
              value: "22"
            },
            {
              text: "其他",
              value: "20"
            }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],

      confirmValSelect012: '', //['1987']

      errorSelect: false,
      errorSelectInfo: "",
      selectData: [
        {
          flex: 1,

          values: [
            {
              text: "未孕",
              value: "1"
            },
            {
              text: "已孕",
              value: "2"
            },
            {
              text: "已分娩",
              value: "3"
            }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      confirmValSelect: '',

      errorSelect03: false,
      errorSelectInfo: "",
      selectData03: [
        {
          flex: 1,
          values: [
            {
              text: "否",
              value: "2"
            }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      confirmValSelect03: "否",
      errorSelect04: false,
      errorSelectInfo: "",
      selectData04: [
        {
          flex: 1,
          values: [
            {
              text: "上户及生育报销",
              value: "1"
            },
            {
              text: "辅助生",
              value: "2"
            },
            {
              text: "仅用于报销生育保险",
              value: "3"
            }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      confirmValSelect04: "",

      // selectData02: [
      //   {
      //     flex: 1,
      //     values: Object.keys(address),
      //     className: "slot1",
      //     textAlign: "center"
      //   },
      //   {
      //     divider: true,
      //     content: "-",
      //     className: "slot2"
      //   },
      //   {
      //     flex: 1,
      //     values: ["北京"],
      //     showText: "text",
      //     className: "slot3",
      //     textAlign: "center"
      //   }
      // ],
      // confirmValSelect02: ["", ""] //[ "辽宁", "大连" ]
    };
  },

  methods: {
    yanzheng() {
      console.log(this.confirmValDate04)
      if (this.confirmValSelect00 == "") {
        this.$toast("申报区域不能为空");
        return false;
      }

      if (this.syyi == "") {
        this.$toast("生育原因不能为空");
        return false;
      }

      if (this.textValue2 == "") {
        this.$toast("夫妇结婚证号不能为空");
        return false;
      }

      if (this.yycode == "") {
        this.$toast("孕育状况不能为空");
        return false;
      }
      if(this.yun){
          if (this.m_preg_weeks == "") {
            this.$toast("怀孕周数不能为空");
            return false;
          }

        if (parseInt(this.m_preg_weeks) > 50) {
          this.$toast("怀孕周数不正确");
          return false;
        }
          if (this.confirmValDate == "") {
            this.$toast("预产期不能为空");
            return false;
          }
      }
      if (this.zjyt == "") {
        this.$toast("证件用途不能为空");
        return false;
      }

      if (this.confirmValDate04 == "" || this.confirmValDate04 == undefined) {
        this.$toast("夫妇结婚日期不能为空");
        return false;
      }

      if (this.fqsx == "") {
        this.$toast("夫妻属性不能为空");
        return false;
      }
    },
    nvsub() {
      if(this.yanzheng() == false){
        return false
      }
      window.sessionStorage.setItem('maplist',this.maplist);
      let nvhjd=window.sessionStorage.getItem("nvhjd")
      let manjzd=window.sessionStorage.getItem("manjzd")
      let nvzjd=window.sessionStorage.getItem("nvzjd")
      let manhjd=window.sessionStorage.getItem("manhjd")
      if(manhjd.substring(0,2) != '53'&&nvhjd.substring(0,2)!='53'&&manjzd.substring(0,2)!='53' &&nvzjd.substring(0,2) != '53'){
              this.$toast('夫妻双方居住地与户籍地其一必须为云南省')
              return false
      }
      this.WorkId = window.sessionStorage.getItem("WorkId");
      let setdata = {
          txnBodyCom: {
        page: "3",
        work_id: this.WorkId,

        message: {
        matter_id: window.sessionStorage.getItem("matterid"),
        member_id: window.sessionStorage.getItem("userid"),
          json_content: {
            work_id: this.WorkId,
              dcl_rgon_ecd: this.confirmValSelectadd,
              dcl_rgon:this.confirmValSelect00,
              bear_chl_num: '20',
              bear_rsn: this.syyi,
              marr_crtf_no: this.textValue2,
              preg_sttn:this.yycode,
              preg_wk_num: this.m_preg_weeks,
              pre_preg_prd: this.confirmValDate,
              crdt_use: this.zjyt,
              cmsn_crdt_ind: this.yncode,
              marr_dt: this.confirmValDate04,
              coup_attr: this.fqsx,
              rmrk: this.m_rem
            }
          }
        }
      };
      //this.$router.push("/Erfilial");
      this.$ajaxRequest("post", "/APPS/db/insert", setdata,false,false,false,'1')
        .then(res => {
          this.$router.push("/Erfilial?WorkId="+this.WorkId);
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    submitEvent() {},
    // 时间选择
    open(picker) {
      document.activeElement.blur();
      this.$refs[picker].open();
      window.scrollTo(0, 99999);
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },

    handleChangeConfirmDate(value) {
      //日期确定值
      console.log(1);
      this.confirmValDate = dateFormat(value, "yyyy-MM-dd");
    },
    handleErrorChangesDate(val) {
      this.errorDate = val;
    },

    handleChangeConfirmDate01(value) {
      //日期确定值
      console.log(1);
      this.confirmValDate01 = dateFormat(value, "yyyy-MM-dd");
    },
    handleErrorChangesDate01(val) {
      this.errorDate = val;
    },
    handleChangeConfirmDate04(value) {
      //日期确定值
      console.log(1);
      this.confirmValDate04 = dateFormat(value, "yyyy-MM-dd");
    },
    handleErrorChangesDate04(val) {
      this.errorDate = val;
    },

    errorChangeFun(val) {
      this.errorSelect01 = val;
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
        this.syyi=selectedVal[0].value
      } else {
        this.confirmValSelect01 = selectedVal;
      }
    },
    errorChangeFun(val) {
      this.errorSelect00 = val;
    },
    selectConfirmFun00(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect00 = selectedVal[0].text;
        this.confirmValSelectadd = selectedVal[0].value;
        this.maplist = selectedVal[0].maplist;
        if(selectedVal[0].value.substring(0,2) != '53'){
            this.$toast('所选申报区域须为云南省')
            return false
        }
      } else {
        this.confirmValSelect00 = selectedVal;
      }
    },

    errorChangeFun(val) {
      this.errorSelect012 = val;
    },
    selectConfirmFun012(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect012 = selectedVal[0].text;
        this.fqsx=selectedVal[0].value
      } else {
        this.confirmValSelect012 = selectedVal;
      }
    },

    errorChangeFun(val) {
      this.errorSelect = val;
    },
    selectConfirmFun(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect = selectedVal[0].text;
        this.yycode = selectedVal[0].value;
        console.log(selectedVal[0].text);
        this.yun = true
        if (selectedVal[0].text == "未孕" || selectedVal[0].text == "已分娩") {
          this.yun = false;
        }
      } else {
        this.confirmValSelect = selectedVal;
      }
    },

    errorChangeFun(val) {
      this.errorSelect03 = val;
    },
    selectConfirmFun03(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect03 = selectedVal[0].text;
        this.yncode=selectedVal[0].value
      } else {
        this.confirmValSelect03 = selectedVal;
      }
    },

    errorChangeFun(val) {
      this.errorSelect04 = val;
    },
    selectConfirmFun04(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect04 = selectedVal[0].text;
        this.zjyt=selectedVal[0].value
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
        this.confirmValSelectmap = selectedVal[0].cmnCdNm;
        this.sval = selectedVal[0].cmnCd;
        //					this.uplod('0')
      } else {
        this.confirmValSelectmap = selectedVal;
      }
    },

    //-------------------------------------------------------------------------------------------------
    errorChangeFun(val) {
      this.errorSelectmap1 = val;
    },
    selectConfirmFunmap1(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelectmap1 = selectedVal[0].cmnCdNm;
        this.ssval = selectedVal[0].cmnCd;
        //					this.uplod('1')
      } else {
        this.confirmValSelectmap1 = selectedVal;
      }
    },

    //-------------------------------------------------------------------------------------------------
    errorChangeFun(val) {
      this.errorSelectmap2 = val;
    },
    selectConfirmFunmap2(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelectmap2 = selectedVal[0].cmnCdNm;
        this.xxval = selectedVal[0].cmnCd;
        //					this.uplod('2')
      } else {
        this.confirmValSelectmap2 = selectedVal;
      }
    },

    //-------------------------------------------------------------------------------------------------
    errorChangeFun(val) {
      this.errorSelectmap3 = val;
    },
    //-------------------------------------------------------------------------------------------------
    errorChangeFun(val) {
      this.errorSelectmap4 = val;
    },
    selectConfirmFunmap4(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelectmap4 = selectedVal[0].cmnCdNm;
        this.jval = selectedVal[0].cmnCd;
        //					this.uplod('4')
      } else {
        this.confirmValSelectmap4 = selectedVal;
      }
    },
    // selectChangeFun2(picker, val) {
    //   //只有是二级的时候才有这个方法
    //   picker.setSlotValues(1, address[val[0]]);
    // },
    selectConfirmFun02(selectedVal) {
      if (typeof selectedVal[1] === "object") {
        selectedVal[1] = selectedVal[1].text;
      }
      this.confirmValSelect02 = selectedVal;
    },
    submitBtn() {
      if (!this.confirmValSelect01[0]) {
        //必填校验，如果不是必填项不用写
        this.errorSelect01 = true;
        this.errorSelectInfo = "请选择用户名!";
      } else {
        this.errorSelect01 = false;
      }
    }
  },
  components: {
			mybutton,
		},
  mounted() {
    this.confirmValDate = this.valueDate; //日期
    this.confirmValDate01 = this.valueDate01; //日期
    this.confirmValDate04 = this.valueDate04; //日期
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
