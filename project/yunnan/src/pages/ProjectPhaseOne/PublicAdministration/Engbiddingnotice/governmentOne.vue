<template>
  <div class="state-owned">
    <towtop :name="titlename"/>
    <div class="example-formgroup">
      <Field
        readonly
        label="地区:"
        disableclear
        type="text"
        placeholder="请选择地区"
        :required="false"
        :value="confirmValSelect02"
        @click.native="locationOpen('pickerselect02')"
      ></Field>
      <HuiselectNew
        ref="pickerselect02"
        position="bottom"
        
        :dataslots="selectData02"
        :visible-item-count="5"
        class="example-select_item"
        @selectval="selectChangeFun2"
        @confirms="selectConfirmFun02"
        @reset="resetconfirmValSelect02"
      ></HuiselectNew>

      <Field
        desc-class="richText"
        type="text"
        label="项目编号"
        v-model="project_id"
        placeholder="请输入项目编号"
      ></Field>
      <Field
        desc-class="richText"
        type="text"
        label="公告名称"
        v-model="corporate_name"
        placeholder="请输入公告名称"
      ></Field>

      <div class="example-calendar">
        <div class="example-calendar_range">
          <span class="time_title">时间段(不超过7天)</span>
          <input
            size="28"
            readonly
            class="example-calendar_input"
            type="text"
            @click.stop="open($event)"
            v-model="calendar1.items.text"
            placeholder="请选择时间段"
          >

          <Calendar
            :value="calendar1.show"
            v-on:showcalendar="showcalendar1"
            :single="calendar1.items.single"
            :x="calendar1.x"
            :y="calendar1.y"
            :begin="calendar1.items.begin"
            :end="calendar1.items.end"
            :autoclose="calendar1.items.autoclose"
            :lock-scroll="true"
            :startvalue="calendar1.items.value"
            :range-value="calendar1.items.rangeValue"
            :events-array="calendar1.eventsArray"
            :disabled-array="calendar1.disabledArray"
            :max-select-days="calendar1.maxSelectDays"
            @tappre="dateTappre"
            @tapnext="dateTapnext"
            @tapday="dateTapday"
            @calendar-cancel="dateCancel"
            @calendar-confirm="dateConfirm"
            @exceed-max-select="exceedMaxSelect"
          ></Calendar>
        </div>
      </div>
    </div>
    <!-- <div class="chargeBtn">
			<button class="btn" @click="pushAjax()">查询</button>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="pushAjax"/>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
import { Code } from "@/components/areaCode.js";
import mybutton from "../../../../components/MyButton";
// var address = Object.assign({"云南省":["全部","省本级"]}, Code.area());
// var conuty = Code.areaCode();
// var cityname = Code.primaryArea();
// var city = Code.primaryCode();
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
      titlename: "工程建设招标公告查询",
      project_id: "",
      corporate_name: "",
      errorText: "",
      errorSelectInfo: "",
      selectData02: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: ["全部"],
          showText: "text",
          className: "slot3",
          textAlign: "center"
        }
      ],
      confirmValSelect02: [],
      citycode: "",
      conutycode: "",
      calendar1: {
        show: false,
        x: 0,
        y: 0,
        eventsArray: ["2018-09-18", "2018-09-20"], // 事件数组
        disabledArray: ["", ""], // 不可点击数组
        maxSelectDays: "7", //最多可以选择的日期
        items: {
          begin: "2018-03-11",
          end: "2019-01-25",
          value: "2018-09-02",
          text: "2018-09-02 至 2018-09-08",
          rangeValue: "2018-09-08",
          single: false,
          autoclose: false
        }
      },
      confirmValSelect02: [],
      citycode: "",
      conutycode: "",
      calendar1: {
        show: false,
        x: 0,
        y: 0,
        eventsArray: ["2018-09-18", "2018-09-20"], // 事件数组
        disabledArray: ["", ""], // 不可点击数组
        maxSelectDays: "7", //最多可以选择的日期
        items: {
          begin: "2017-03-11",
          end: "2019-01-25",
          value: "",
          text: "请选择时间段",
          rangeValue: "",
          single: false,
          autoclose: false
        }
      }
    };
  },
  mounted() {
    //debugger;
    //this.formatAddress(address);
    //console.log(this.formatKeys(this.formatAddress(address)));
    // 从接口查询公管局城市信息
    Code.findGGJNameByCode("-1").then(res => {
      this.selectData02[0].values = Code.parseGGJResource(res, "-1");
    });
  },
  methods: {
    resetconfirmValSelect02() {
      this.confirmValSelect02 = "";
    },
    locationOpen(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectChangeFun2(picker, val) {
      //只有是二级的时候才有这个方法
      if (val[0] == "云南省") {
        picker.setSlotValues(1, ["全省", "省本级"]);
        return;
      }
      Code.findGGJNameByName(val[0]).then(res => {
        picker.setSlotValues(1, Code.parseGGJResource(res));
      });
    },
    selectConfirmFun02(selectedVal) {
      if (typeof selectedVal[1] === "object") {
        selectedVal[1] = selectedVal[1].text;
      }
      this.confirmValSelect02 = selectedVal;
    },

    // 时间
    showcalendar1(val) {
      this.calendar1.show = val;
    },
    open(e, type) {
      const layerSingle = document.querySelector(".example-calendar_range");

      // 设置类型
      this.calendar1.show = true;
      this.calendar1.x = 0;
      this.calendar1.y = e.target.offsetTop + e.target.offsetHeight + 4;
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    dateCancel(obj) {
      this.calendar1.show = obj.show;
      console.log(obj.values);
    },
    dateConfirm(obj) {
      // 增加重置
      if (obj.values.length > 0) {
        this.calendar1.items.text =
          obj.values[0] + " 至 " + obj.values[obj.values.length - 1];
      } else {
        this.calendar1.items.text = "";
      }
      this.calendar1.items.value = obj.values[0];
      this.calendar1.items.rangeValue = obj.values[obj.values.length - 1];
      console.log(obj);
    },
    dateTapday(obj) {
      // console.log(obj);
    },
    dateTappre(dateString) {
      // console.log(dateString);
    },
    dateTapnext(dateString) {
      // console.log(dateString);
    },
    exceedMaxSelect() {
      this.$toast("超过了最多显示时间" + this.calendar1.maxSelectDays + "天");
    },

    ggj_formatDate(date) {
      try {
        if(date) {
          let dateObj = new Date(date);
          let value = dateObj.getFullYear() + "";
          if(dateObj.getMonth() < 9) {
            value += "0" + (dateObj.getMonth() + 1) + "";
          } else {
            value += (dateObj.getMonth() + 1)
          }
          if(dateObj.getDate() < 10) {
            value += "0" + dateObj.getDate();
          } else {
            value += dateObj.getDate()
          }
          return value;
        }
      } catch(e) {
        console.log("事件格式错误:" + date)
        return "";
      }
      return "";
    },

    pushAjax() {
      // var reg = new RegExp("-", "g");
      // if(this.confirmValSelect02.length == 0){
      // 	this.$toast("地区不能为空");
      // 	return
      // }else if( this.project_id == null || this.project_id =="" || this.project_id == undefined ){
      // 	this.$toast("项目编号不能为空");
      // 	return
      // }else if( this.corporate_name == null || this.corporate_name =="" || this.corporate_name == undefined ){
      // 	this.$toast("公告名称不能为空");
      // 	return
      // }else{
      if (this.confirmValSelect02.length != 0) {
        let crty = this.confirmValSelect02[0];
        let crtys = this.confirmValSelect02[1];
        if (crty == "云南省") {
          this.citycode = Code.getCurrentCodes()[crtys];
          this.conutycode = "";
        } else {
          // for (var i = 0, len = cityname.length; i < len; i++) {
          //   if (crty == cityname[i]) {
          //     this.citycode = city[i];
          //   }
          // }
          this.citycode = Code.get_GGJ_region_name_code()[crty];

          if (crtys == "全部") {
            this.conutycode = "";
          } else {
            // for (var y = 1, leny = address[crty].length; y < leny; y++) {
            //   if (crtys == address[crty][y]) {
            //     this.conutycode = conuty[this.citycode][y-1];
            //   }
            // }
            console.log(Code.getCurrentCodes());
            this.conutycode = Code.getCurrentCodes()[crtys];
            console.log(this.conutycode);
          }
        }
      } else {
        this.citycode = "";
        this.conutycode = "";
      }
      let setdata = {
        txnCommCom: {
          tRecInPage: "1",
          tPageJump: "15",
          tStsTraceId: ""
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "0",
          publishStartTime: this.ggj_formatDate(this.calendar1.items.value),
          publishEndTime: this.ggj_formatDate(this.calendar1.items.rangeValue),
          title: this.corporate_name,
          areaCode: this.citycode,
          secondAreaCode: this.conutycode,
          bulletinType: "1",
          projectSectionCode: this.project_id
        }
      };
      let pagejump = {
        "tRecInPage": "15",
        "tPageJump": "1",
      }
      console.log(JSON.stringify(setdata));
      this.$ajaxRequest("post", "/gsp/mng30015", setdata, pagejump)
        .then(res => {
          if (parseInt(res.txnCommCom.totalRec) <= 0) {
            this.$toast("搜索数据列表为空！");
            return false;
          } else {
            window.sessionStorage.setItem("ggj_query", JSON.stringify(setdata.txnBodyCom));
            this.$router.push({
              name: "governmentTwo",
              params: { datatext: JSON.stringify(res)}
            });
          }
        })
        .catch(error => {
          console.log(error);
          this.$toast("查询失败！");
        });
    },
    formatAddress(addr) {
      for (var key in addr) {
        if (key == "云南省") continue;
        var len = addr[key].length;
        for (var i = 0; i < len; i++) {
          if (addr[key][i] == "全部") return addr;
        }
        addr[key].unshift("全部");
      }
      return addr;
    }
  }
};
</script>

<style scoped>
/*.example-calendar .hui-calendar {*/
/*width: 100%;*/
/*}*/
.btn {
  width: 5.9rem;
  height: 0.9rem;
  background: #2d7ffc;
  box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.5);
  border-radius: 25px;
  border: none;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  letter-spacing: 0.19px;
  text-align: center;
  margin-top: 1.02rem;
  color: #ffffff;
}

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

.hui-field_core {
  text-align: right;
}

.hui-field_title {
  width: 120px;
}

.example-calendar {
  height: 30px;
}

/*.example-calendar .hui-calendar {
		width: 320px;
		z-index: 1;
	}*/

.example-calendar_range {
  position: absolute;
  z-index: 1;
}

.example-calendar_input {
  position: relative;
  z-index: 2100;
  width: 50%;
  float: right;
}

input {
  border: none;
  text-align: right;
  font-size: 0.28rem;
  color: #999;
}

.hui-field_value .hui-field_core {
  text-align: right;
}

.time_title {
  font-size: 0.28rem;
  float: left;
}

.example-calendar {
  /* width: 100%; */
  height: 1rem;
  margin: 0 auto;
  padding: 0 0.3rem;
  line-height: 1rem;
  font-size: 0.28rem;
  border-bottom: 0.01rem solid #ccc;
  background: #fff;
  overflow: hidden;
}
</style>
