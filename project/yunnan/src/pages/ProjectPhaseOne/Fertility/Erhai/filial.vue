<template>
  <div>
    <div class="nav_title">夫妇子女信息</div>
    <div class="filialmian">
      <Field
        desc-class="richText"
        type="text"
        label="姓名"
        v-model="filialname"
        :value="filialname"
        placeholder="请输入姓名"
      ></Field>
      <Field
        desc-class="richText"
        type="text"
        label="证件"
        v-model="filialtypecode"
        :value="filialtypecode"
        placeholder="请输入身份证或医学证明或收养证"
      ></Field>
      <Field
        readonly
        label="出生日期"
        desc
        disableclear
        type="text"
        placeholder="请选择出生日期"
        :value="confirmValDate"
        @click.native="open('picker2')"
      ></Field>
      <Datetime
        ref="picker2"
        type="date"
        v-model="valueDate"
        position="middle"
        :start-date="startDate"
        :end-date="endDate"
        @confirm="handleChangeConfirmDate"
      ></Datetime>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="性别"
        desc
        disableclear
        type="text"
        placeholder="请选择性别"
        :value="confirmValSelect01"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect01')"
      ></Field>
      </div>
      <Huiselect
        ref="pickerselect01"
        position="bottom"
        :dataslots="selectData01"
        class="example-select_item"
        @confirms="selectConfirmFun01"
      ></Huiselect>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="子女类别"
        desc
        disableclear
        type="text"
        placeholder="请选择类别"

        :value="confirmValSelect09"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect09')"
      ></Field>
      </div>
      <Huiselect
        ref="pickerselect09"
        position="bottom"
        :dataslots="selectData09"
        class="example-select_item"
        @confirms="selectConfirmFun09"
      ></Huiselect>
      <Field
        desc-class="richText"
        type="text"
        label="生父姓名"
        v-model="filialfathername"
        :value="filialfathername"
        placeholder="请输入生父姓名"
      ></Field>
      <Field
        desc-class="richText"
        type="text"
        label="生母姓名"
        v-model="filialmothername"
        :value="filialmothername"
        placeholder="请输入生母姓名"
      ></Field>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="孩次"
        desc
        disableclear
        type="text"
        placeholder="请选择孩次"
        :value="confirmValSelect02"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect02')"
      ></Field>
      </div>
      <Huiselect
        ref="pickerselect02"
        position="bottom"
        :dataslots="selectData02"
        class="example-select_item"
        @confirms="selectConfirmFun02"
      ></Huiselect>
    </div>
    <!-- <div class="example-formgroup_btn-wrapper">
      <Btn block @click="submitEvent()">下一步</Btn>
    </div> -->
    	<mybutton :btnData="btnData" @click="submitEvent" />
  </div>
</template>
<script>
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
      WorkId: "",
      filialname: "",
      filialtypecode: "",
      filialfathername: "",
      filialmothername: "",
      valueDate: "", //选择出生日期
      confirmValDate: "",
      startDate: new Date(1980, 0, 1),
      endDates: "",
      znlb: "1",
      chl_gnd: "",
      endDate: new Date(1990, 0, 1),
      errorSelect01: false, //选择性别
      errorSelectInfo: "",
      selectData01: [
        {
          flex: 1,
          values: [{ text: "男", value: "1" }, { text: "女", value: "2" }],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectData02: [
        {
          flex: 1,
          values: [{ text: "贰孩", value: "20" }],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectData09: [
        {
          flex: 1,
          values: [{ text: "生育", value: "1" }, { text: "收养", value: "2" }],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      confirmValSelect01: "",
      confirmValSelect02: "壹孩",
      confirmValSelect09: "生育"
    };
  },
  components: {
			mybutton,
		},
  methods: {
    open(picker) {
      document.activeElement.blur();
      this.$refs[picker].open();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    handleChangeConfirmDate(value) {
      //日期确定值
      this.confirmValDate = dateFormat(value, "yyyy-MM-dd");
    },
    errorChangeFun(val) {
      this.errorSelect01 = val;
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
        this.chl_gnd = selectedVal[0].value;
      } else {
        this.confirmValSelect01 = selectedVal;
      }
    },
    selectConfirmFun09(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect09 = selectedVal[0].text;
        this.znlb = selectedVal[0].value;
      } else {
        this.confirmValSelect09 = selectedVal;
      }
    },
    selectConfirmFun02(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect02 = selectedVal[0].text;
      } else {
        this.confirmValSelect02 = selectedVal;
      }
    },
    yanzheng() {
      if (this.filialname == "") {
        this.$toast("子女姓名不能为空");
        return false;
      }
      if (!this.$VerifyName.test(this.filialname)) {
        this.$toast("请输入正确的子女姓名");
        return false;
      }
      if (this.filialtypecode == "") {
        this.$toast("子女身份信息不能为空");
        return false;
      }
      if (this.confirmValDate == "") {
        this.$toast("子女出生日期不能为空");
        return false;
      }
      if (this.chl_gnd == "") {
        this.$toast("子女性别不能为空");
        return false;
      }
      if (this.znlb == "") {
        this.$toast("子女类别不能为空");
        return false;
      }
      if (this.filialfathername == "") {
        this.$toast("生父姓名不能为空");
        return false;
      }
      if (!this.$VerifyName.test(this.filialfathername)) {
        this.$toast("请输入正确的生父姓名");
        return false;
      }
      if (this.filialmothername == "") {
        this.$toast("生母姓名不能为空");
        return false;
      }
      if (!this.$VerifyName.test(this.filialmothername)) {
        this.$toast("请输入正确的生母姓名");
        return false;
      }
    },
    submitEvent() {
      if(this.yanzheng()== false){
        return false
      }
      this.WorkId = this.$route.query.WorkId;
      let setdata = {
        txnBodyCom: {
          page: "4",
          end: "end",
          work_id: this.WorkId,
          message: {
            matter_id: window.sessionStorage.getItem("matterid"),
            member_id: window.sessionStorage.getItem("userid"),
            json_content: {
              work_id: this.WorkId,
              chl_nm: this.filialname,
              chl_idnt_inf: this.filialtypecode,
              chl_brth_dt: this.confirmValDate,
              chl_gnd: this.chl_gnd,
              chl_cgy: this.znlb,
              m_prn_nm: this.filialfathername,
              f_prn_nm: this.filialmothername,
              chl_num: "10"
            }
          }
        }
      };
      this.$ajaxRequest("post", "/APPS/db/insert", setdata,false,false,false,'1')
        .then(res => {
          this.$router.push("/Erimgup?WorkId=" + this.WorkId);
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.endDates = new Date();
    this.endDate = new Date(
      this.endDates.getFullYear(),
      this.endDates.getMonth(),
      this.endDates.getDate()
    );
    this.valueDate =
      this.endDates.getFullYear().toString() +
      "-" +
      (this.endDates.getMonth() + 1).toString() +
      "-" +
      this.endDates.getDate().toString();
    // this.confirmValDate = this.valueDate; //日期
  }
};
</script>
<style scoped>
.nav_title {
  height: 0.72rem;
  line-height: 0.72rem;
  text-align: left;
  font-size: 0.28rem;
  background: #f1f3f6;
  padding-left: 0.32rem;
  color: #999;
}
.hui-field {
  height: 0.98rem;
  line-height: 0.98rem;
  padding: 0 15px;
}
.hui-field_main {
  height: 1rem;
  line-height: 1rem;
}
.example-formgroup_btn-wrapper {
  width: 5.9rem;
  margin: 0 auto;
  margin-top: 0.3rem;
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
  top: 36%
}
</style>

