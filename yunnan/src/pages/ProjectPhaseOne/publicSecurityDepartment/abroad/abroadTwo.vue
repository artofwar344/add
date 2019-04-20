<style>
.abroadTwoWrap .btnWrap {
  margin-top: 1rem;
  padding: 0 0.8rem;
  font-size: 0.33rem;
}
.abroadTwoWrap .btnWrap span {
  display: block;
  width: 100%;
  height: 0.9rem;
  border-radius: 40px;
  line-height: 0.9rem;
  text-align: center;
  background: #2d7ffc;
  color: white;
}
.abroadTwoWrap .content {
  width: 100%;
}
.abroadTwoWrap .question {
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 0.28rem;
  text-align: left;
}
.abroadTwoWrap .question .rect {
  display: inline-block;
  width: 0.04rem;
  height: 0.28rem;
  background: #257bff;
  margin-right: 0.2rem;
}
/*.abroadTwoWrap .hui-calendar {*/
  /*width: calc(100% - 3.5%);*/
/*}*/
.abroadTwoWrap .example-calendar_single {
  width: 100%;
  height: 1rem;
  left: 0px;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  margin: 0.2rem 0rem;
  background: white;
}
.abroadTwoWrap .example-calendar_single input {
  width: 100%;
  height: 100%;
  border: none;
  text-align: right;
  font-size: 0.28rem;
}
.abroadTwoWrap .example-calendar {
  height: 30px;
}
/*.abroadTwoWrap .example-calendar .hui-calendar {*/
  /*width: 320px;*/
  /*z-index: 1;*/
/*}*/
.abroadTwoWrap .example-calendar_input {
  position: relative;
  z-index: 2100;
}
.abroadTwoWrap .title {
  display: flex;
  margin-bottom: 0.14rem;
}
.abroadTwoWrap .title li {
  text-align: center;
  flex: 1;
  font-size: 0.34rem;
  color: #333333;
}
.abroadTwoWrap .title li img {
  width: 0.32rem;
  margin-right: 0.04rem;
  vertical-align: middle;
}
.abroadTwoWrap .hui-checklist {
  padding: 0rem 0.2rem;
  box-sizing: border-box;
}
.checklistWrap {
  position: relative;
}
.abroadTwoWrap .example-cell_rightBox,
.abroadTwoWrap .example-cell_rightBox {
  width: 60px;
}
.abroadTwoWrap .hui-checklist_item {
  margin: 0rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
}
.abroadTwoWrap .hui-checklist_item:first-child {
  border-bottom: 1px solid #ececec;
}
.abroadTwoWrap .hui-checklist_core {
  margin-right: 0.28rem;
}
.abroadTwoWrap .dealWrap {
  position: absolute;
  top: 0rem;
  right: 0.2rem;
  width: 50%;
  font-size: 0.28rem;
  line-height: 1rem;
  padding-top: 5px;
  color: #257bff;
}
.abroadTwoWrap .dealWrap .full {
  color: #f86861;
}
.abroadTwoWrap .example-popup_wrapper {
  padding: 0 0.4rem;
}
.abroadTwoWrap .hui-popupPrompt_title {
  font-size: 0.36rem;
  color: #f85a53;
}
.abroadTwoWrap .hui-popupPrompt_title {
  margin: 0.36rem 0rem;
}
.abroadTwoWrap .hui-field{
    height: 1rem;
    padding: 0rem .2rem;
    box-sizing: border-box;
    border: none;
}
.abroadTwoWrap .marginTop{
    margin-top: .2rem;
}
.abroadTwoWrap .hui-field_main{
    height: 100%;
    border-bottom: 1px solid #e1e2e6;
}
.abroadTwoWrap .hui-field_title{
    width: 2.3rem;
    height: 100%;
}
.abroadTwoWrap  .middleone{
  position:relative;
}
.abroadTwoWrap  .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:35%;
  left:0;
}
.abroadTwoWrap .middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 0.1rem;
  margin-right:0.05rem;
}
</style>

<template>
    <div class="abroadTwoWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <div class="question">
                <span class="rect"></span>
              <span class="middlethree">*</span>{{name}}
            </div>
            <div class="example-calendar_single">
                <input readonly size="12" type="text" class="example-calendar_input" @click.stop="openSingle($event)" v-model="calendar2.items.text" placeholder="请选择时间：" />
                <Calendar :value="calendar2.show" v-on:showcalendar="showcalendar2" :show-pop-time-switch="true" :autoclose='calendar2.items.autoclose' :x="calendar2.x"  :y="calendar2.y" :begin="calendar2.items.begin" :end="calendar2.items.end" :single="calendar2.items.single" :startvalue="calendar2.items.value" :range-value='calendar2.items.rangeValue' @calendar-cancel="dateCancelSingle"  @calendar-confirm="dateconfirmSingle">
                </Calendar>
            </div>
            <ul class="title" v-if="showTime">
                <li>
                    <img :src="clockUrl" alt="">时间段
                </li>
                <li>
                    <img :src="bellUrl" alt="">预约操作
                </li>
            </ul>
            <div class="checklistWrap" v-if="showTime">
                 <Checklist title="" :max="1" v-model="timeValue" :options="data">
                </Checklist>
                <ul class="dealWrap">
                    <li :class="{'full':item.value =='1'}" v-for="(item,index) in statusData" :key="index">{{item.deal}}</li>
                </ul>
            </div>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field type="text"  class="marginTop" disableclear label="中文姓名" :value="chineseName" placeholder="请输入您的中文姓名" v-on:currentval="handleChineseName" ></Field>
          </div>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field type="text"  disableclear label="身份证号" :value="id" placeholder="请输入您的身份证号" v-on:currentval="handleId" >
            </Field>
          </div>

        </div>
        <!-- <div class="btnWrap">
            <span @click="goto">下一步</span>
        </div> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="goto" />
        </div>
    </div>
</template>

<script>
function getFormatDate() {
  var date = new Date();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentDate = date.getFullYear() + "-" + month + "-" + strDate;
  return currentDate;
}
import towtop from "@/components/HederTwo";
import clock from "@/assets/images/entryExit/click.png";
import bell from "@/assets/images/entryExit/bell.png";
import { cenurl } from "../../../../components/toptow.js";
import mybutton from "../../../../components/MyButton";

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
      titlename: "出国境证件业务预受理",
      name: "",
      calendar2: {
        show: false,
        x: 0,
        y: 0,
        items: {
          begin: "2017-03-02",
          end: "2120-08-25",
          value: "2017-03-02",
          text: "",
          single: true,
          autoclose: true
        }
      },
      clockUrl: clock,
      bellUrl: bell,
      data: [
        {
          label: " ",
          value: "0",
          disabled: false
        },
        {
          label: " ",
          value: "1",
          disabled: false
        }
      ],
      timeValue: [],
      statusData: [{ deal: " ", value: "0" }, { deal: " ", value: "1" }],
      point: {},
      isKunMing: true,
      showTime: false,
      chineseName: "",
      id: ""
    };
  },
  components: {
        mybutton,
    towtop
  },
  mounted() {
    let nowDate = getFormatDate();
    this.calendar2.items.begin = nowDate;
    this.calendar2.items.value = nowDate;
    let _self = this;
    this.point = JSON.parse(sessionStorage.getItem("GATcertPoint"));
    this.cityCode = this.$route.params.cityCode;
    console.log(this.point);
    // 昆明CODE = '530100'
    console.log(this.cityCode);
    if (this.cityCode != "530100") {
      this.isKunMing = false;
    }
    this.name = this.point.branch_parent_name;
  },
  methods: {
    showcalendar2(val) {
      this.calendar2.show = val;
    },
    openSingle(e, type) {
      const layerSingle = document.querySelector(".example-calendar_single");
      layerSingle.style.zIndex = 2;

      // 设置类型
      this.calendar2.show = true;
      this.calendar2.x = e.target.offsetLeft - 10;
      this.calendar2.y = e.target.offsetTop + e.target.offsetHeight + 4;
    },
    dateCancelSingle(obj) {
      this.calendar2.show = obj.show;
    },
    dateconfirmSingle(obj) {
      this.calendar2.items.text = obj.values[0];
      this.calendar2.items.value = obj.values[0];
      this.getData();
    },
    handleChineseName(val){
        this.chineseName = val;
    },
    handleId(val){
        this.id = val;
    },
    goto() {
      // console.log(this.timeValue)
       if(!this.$VerifyName.test(this.chineseName)){
        this.$toast('请输入真实姓名')
        return;
      }
      if(!this.$VerifyCardId.test(this.id)){
        this.$toast('请输入正确的身份证号')
        return;
      }
      if (!this.timeValue.length) {
        this.$toast("请选择办证时间段");
        return;
      }

        sessionStorage.setItem("CATcertName",this.chineseName)
        sessionStorage.setItem("CATcertId",this.id)
      sessionStorage.setItem("GATcertDate", this.calendar2.items.value);
        sessionStorage.setItem("GATcertTime", this.data[this.timeValue[0]].label);
        sessionStorage.setItem("GATcertyyswxw", this.timeValue[0]);
        this.$router.push({
            name: "abroadThree"
        });
    },
    getData() {
      let _self = this;
      let transferData, urlCode;
      if (this.isKunMing) {
        //   昆明市code为12位
        urlCode = "/gsp/mng80086";
        transferData = {
          txnCommCom: {
            tenant: "530000000000",
            txn_itt_chnl_id: "00",
            txn_itt_chnl_type: "11",
            "C-Business-Id": "111111111"
          },
          txnBodyCom: {
            dateId: _self.calendar2.items.text,
            deptId: _self.point.branch_code,
            chann_id: "1",
            matter_id: window.sessionStorage.getItem('matterid')
          }
        };
      } else {
        //   非昆明code为6位
        urlCode = "/gsp/mng80087";
        transferData = {
          txnCommCom: {
            tenant: "530000000000",
            txn_itt_chnl_id: "00",
            txn_itt_chnl_type: "11",
            "C-Business-Id": "111111111"
          },
          txnBodyCom: {
            yyTime: _self.calendar2.items.text,
            dept_id: _self.point.branch_code.slice(0, 6),
            chann_id: "1",
            matter_id: window.sessionStorage.getItem("matterid"),
          }
        };
      }
      //  获取办理时间信息
      this.$ajaxRequest("post", urlCode, transferData)
        .then(res => {
          console.log(res);
          if (res.data.length <= 0) {
            _self.$toast("搜索时间信息列表为空！");
            return false;
          } else {
            _self.showTime = true;
            let cent = res;
            if (_self.isKunMing) {
              _self.data[0].label = cent.data[0].ap_time1;
              _self.data[1].label = cent.data[0].ap_time2;
              if (cent.data[0].ap_num1) {
                _self.statusData[0].deal = cent.data[0].ap_num1;
                _self.statusData[0].value = "0";
              } else {
                _self.statusData[0].deal = "已约满";
                _self.statusData[0].value = "1";
                _self.data[0].disabled = true;
              }
              if (cent.data[0].ap_num2) {
                _self.statusData[1].deal = cent.data[0].ap_num2;
                _self.statusData[1].value = "0";
              } else {
                _self.statusData[1].deal = "已约满";
                _self.statusData[1].value = "1";
                _self.data[1].disabled = true;
              }
            } else {
              _self.data[0].label = cent.data[0].gzsj_sw;
              _self.data[1].label = cent.data[0].gzsj_xw;
              if (cent.data[0].sw_count) {
                _self.statusData[0].deal = cent.data[0].sw_count;
                _self.statusData[0].value = "0";
              } else {
                _self.statusData[0].deal = "已约满";
                _self.statusData[0].value = "1";
                _self.data[0].disabled = true;
              }
              if (cent.data[0].xw_count) {
                _self.statusData[1].deal = cent.data[0].xw_count;
                _self.statusData[1].value = "0";
              } else {
                _self.statusData[1].deal = "已约满";
                _self.statusData[1].value = "1";
                _self.data[1].disabled = true;
              }
            }
          }
        })
        .catch(error => {
          console.log(error);
          this.showTime = true;
          _self.$toast("获取时间信息列表失败！");
        });
    },
  }
};
</script>
