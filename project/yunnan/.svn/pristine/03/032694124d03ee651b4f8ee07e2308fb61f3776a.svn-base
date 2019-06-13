<template>
  <div class="serviceTop">
    <towtop :name="titlename"/>
    <Field
      readonly
      label="考试类别"
      desc
      disableclear
      type="text"
      placeholder="请选择"
      :value="examName"
      @click.native="typeOpen('pickerselect01')"
    ></Field>
    <Field
      readonly
      label="考试年份"
      desc
      disableclear
      type="text"
      placeholder="请选择"
      :value="examYear"
      @click.native="yearOpen('pickerselect01')"
    ></Field>
    <Selectpopup
      ref="pickerselect01"
      position="bottom"
      
      :dataslots="selectData01"
      :visible-item-count="5"
      class="example-select_item"
      @confirms="select01"
    ></Selectpopup>
    <div>
      <Field
        desc
        desc-class="richText"
        type="text"
        v-model="idcard"
        label="身份证号/准考证号"
        :value="idcard"
        placeholder="请输入考生身份证号或准考证号"
      ></Field>
    </div>
    <!-- <div class="chargeBtn">
			<button @click="onqubtn(0)">查询</button>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="onqubtn(0)"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
import mybutton from "../../../components/MyButton";

var types = [
  { text: "初级会计资格考试", value: "1" },
  { text: "中级会计资格考试", value: "2" },
  { text: "高级会计资格考试", value: "3" }
];

export default {
  components: {
    mybutton,
    towtop
  },
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "会计考试成绩查询",
      idcard: "",
      examType: "",
      examName: "",
      examYear: "",
      token: "",
      selectFlag: false, //false:year, true:type
      selectData01: [
        {
          flex: 1,
          values: [],
          showText: "text",
          className: "slot1",
          textAlign: "center"
        }
      ]
    };
  },
  mounted() {
    if (window.sessionStorage.getItem("cardid") != "null") {
      this.idcard = window.sessionStorage.getItem("cardid");
    }
    if (window.sessionStorage.getItem("usertoken") != "null") {
      this.token = window.sessionStorage.getItem("usertoken");
    }
  },
  methods: {
    typeOpen(picker) {
      this.selectData01[0].values = types;
      this.selectFlag = true;
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    yearOpen(picker) {
      this.selectFlag = false;
      //var years = [1990, year];
      this.selectData01[0].values = [
        new Date().getFullYear() - 1,
        new Date().getFullYear()
      ];
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    select01(selectedVal) {
      if (this.selectFlag) {
        this.examName = selectedVal[0].text;
        this.examType = selectedVal[0].value;
      } else {
        this.examYear = selectedVal[0];
      }
    },
    onqubtn(vall) {
      if (vall == 1) {
        this.idcard = window.sessionStorage.getItem("cardid");
      }
      var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
      if (this.examType == "") {
        this.$toast("请先选择考试类别");
      } else if (this.examYear == "") {
        this.$toast("请先选择考试年份");
      } else if (this.idcard == "") {
        this.$toast("请输入身份证号或准考证号");
      } else if (!regIdCard.test(this.idcard)&&this.idcard.length>11) {
         this.$toast("身份证号码错误");
      } else {
         let setdata = {
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"), //window.sessionStorage.getItem("matterid")
            chann_id: "1",
            examType: this.examType, //this.examType
            queryNo: this.idcard,
            year: this.examYear.toString() //this.examYear
          }
        };
        this.$ajaxRequest("post", "/gsp/mng70010", setdata)
          .then(res => {
            console.log(res);
            this.$router.push({
              name: "queryresults",
              params: {
                datatext: res,
                typename: types[parseInt(this.examType) - 1].text
              }
            });
          })
          .catch(response => {});
      }
    }
  }
};
</script>


<style scoped>
.serviceTop {
  background: #f0f0f0;
}

.service {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.idcard {
  display: block;
  background: none;
  border: none;
  font-size: 0.28rem;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  color: #999999;
}
.left {
  width: 3.22rem;
  background: #ffffff;
  line-height: 1.6rem;
  justify-content: center;
  margin-top: 0.36rem;
  font-family: PingFangSC-Medium;
  font-size: 0.34rem;
  color: #000000;
  letter-spacing: -0.41px;
  text-align: center;
}

.left img {
  width: 0.37rem;
  margin-top: 0.65rem;
  margin-right: 0.14rem;
  display: block;
  float: left;
}

.Titlenote {
  width: 5.56rem;
  height: 1rem;
  margin-top: 0.96rem;
  margin-left: 0.36rem;
  border-bottom: 1px solid #cccccc;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0.17px;
  line-height: 10px;
  text-align: left;
}

.chargeBtn button {
  width: 5.9rem;
  height: 0.9rem;
  background: #2d7ffc;
  box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.5);
  border-radius: 0.5rem;
  border: none;
  font-family: PingFangSC-Semibold;
  font-size: 0.28rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.19px;
  text-align: center;
  margin-top: 1.02rem;
  color: #ffffff;
}
</style>
