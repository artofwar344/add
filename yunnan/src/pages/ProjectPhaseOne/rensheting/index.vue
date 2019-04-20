<template>
  <div>
    <towtop :name="hadertow"/>
    <div class="rstbox">
      <div class="rstsosuo">
        <span class="rstsosuotow">
          <input
            type="text"
            v-model="confirmValDate2"
            placeholder="请选择起始时间"
            @click="open('picker2')"
          >
        </span>
        <Datetime
          ref="picker2"
          type="date"
          v-model="valueDate"
          position="middle"
          :start-date="startDate"
          :end-date="endDate"
          @confirm="handleChangeConfirmDate2"
        ></Datetime>

        <span>至</span>

        <span class="rstsosuotow">
          <input type="text" v-model="confirmValDate" placeholder="请选择截止时间" @click="open('picker')">
        </span>
        <Datetime
          ref="picker"
          type="date"
          v-model="valueDate"
          position="middle"
          :start-date="startDate"
          :end-date="endDate"
          @confirm="handleChangeConfirmDate"
        ></Datetime>

        <span><button @click='submitEvent(1)'>查询</button></span>
        <!-- <span>
          <mybutton :btnData="btnData" @click="submitEvent(1)"/>
        </span> -->
      </div>
      <div class="rsttab">
        <ul>
          <li @click="submitTime(12)">近12个月</li>
          <li @click="submitTime(6)">近6个月</li>
          <li @click="submitTime(3)">近3个月</li>
        </ul>
      </div>
    </div>
    <p class="newcroce">请按年度查询</br>例：2014-01-01~2014-12-31</p>
    <div class="rstnav">{{logintext}}</div>
    <div v-if="datatext != null && datatext != '' ">
      <div class="rstindcen" v-for="list in datatext.feedetail">
        <ul>
          <!--<li>
						<span class='srttitle'>姓名</span><span class='srtcent'>王以太</span>
          </li>-->
          <li>
            <span class="srttitle">参保单位名称</span>
            <span class="srtcent">{{list.company_name}}</span>
          </li>
          <li>
            <span class="srttitle">缴费类型</span>
            <span class="srtcent">{{list.payment_type}}</span>
          </li>
          <li>
            <span class="srttitle">个人缴费基数</span>
            <span class="srtcent">{{list.base_pay}}</span>
          </li>
          <li>
            <span class="srttitle">个人缴费比例</span>
            <span class="srtcent">{{list.person_contrib_ratio}}</span>
          </li>
          <li>
            <span class="srttitle">费款所属期</span>
            <span class="srtcent">{{list.payment_period_number}}</span>
          </li>
          <li>
            <span class="srttitle">个人月应缴金额</span>
            <span class="srtcent">{{list.person_contrib_amount}}</span>
          </li>
          <li>
            <span class="srttitle">个人缴费到帐日期</span>
            <span class="srtcent">{{list.person_payment_date}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
import mybutton from "../../../components/MyButton";

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
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      hadertow: "职工养老保险缴费明细",
      valueDatetime: "", //2017-02-23 12:10
      logintext: "请选取时间并查询",
      confirmValDatetime: "",
      errorDatetime: false,
      errorSelectInfo: "",
      valueDate: "",
      confirmValDate: "",
      confirmValDate2: "",
      errorDate: false,
      startDate: new Date(1995, 0, 1),
      endDate: new Date(2030, 12, 31),
      valueTime: "04:32",
      confirmValTime: "",
      errorTime: false,
      date: "",
      monthtime: "",
      yeartime: "",
      daytime: "",
      datatext: "",
      cardid: "",
      matterid: "",
      times: ""
    };
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

    handleChangeConfirmDate2(value) {
      //日期确定值
      this.confirmValDate2 = dateFormat(value, "yyyy-MM-dd");
    },
    handleErrorChangesDate(val) {
      this.errorDate = val;
    },
    handleChangeConfirmDate(value) {
      //日期确定值
      this.confirmValDate = dateFormat(value, "yyyy-MM-dd");
    },
    handleErrorChangesDate(val) {
      this.errorDate = val;
    },
    rstsub(val) {
      console.log(val);
    },
    submitTime(key) {
      var _this = this;
      _this.date = new Date().getTime();
      _this.date = _this.dateTime(_this.date);
      this.confirmValDate = _this.date;
      if (key == 3) {
        if (this.monthtime > key) {
          this.monthtime = this.monthtime - key;
        } else {
          this.monthtime = 12 - key + parseInt(this.monthtime);
          this.yeartime = this.yeartime - 1;
        }
      } else if (key == 6) {
        if (this.monthtime > key) {
          this.monthtime = this.monthtime - key;
        } else {
          this.monthtime = 12 - key + parseInt(this.monthtime);
          this.yeartime = this.yeartime - 1;
        }
      } else if (key == 12) {
        this.confirmValDate = _this.date;
        this.yeartime = this.yeartime - 1;
      }
      if (this.monthtime < 10 && (this.monthtime + "").length < 2) {
        this.confirmValDate2 =
          this.yeartime.toString() + "0" + this.monthtime.toString();
      } else {
        this.confirmValDate2 =
          this.yeartime.toString() + this.monthtime.toString();
      }
    },
    submitEvent() {
      var _this = this;
      if (this.confirmValDate2 == 0) {
        alert("请选择起始时间");
        return;
      } else if (this.confirmValDate == 0) {
        alert("请选择截至时间");
        return;
      } else {
        let Date2 = this.confirmValDate2.toString();
        let Date1 = this.confirmValDate.toString();
        Date2 = Date2.replace("-", "");
        Date1 = Date1.replace("-", "");
        this.confirmValDate2 = Date2.substring(0, 6);
        this.confirmValDate = Date1.substring(0, 6);
        console.log(this.confirmValDate2.length);
        console.log(this.confirmValDate.length);
      }
      this.logintext = "数据查询中";
      this.Ajaxquery(this.confirmValDate2, this.confirmValDate);
    },
    Ajaxquery(starttime, endtime) {
      this.cardid = window.sessionStorage.getItem("cardid");
      if (this.cardid == "null") {
        this.$toast("需要实名注册登陆信息");
        return;
      }
      this.matterid = window.sessionStorage.getItem("matterid");
      let setdata = {
        txnCommCom: {
          tRecInPage: "1",
          tPageJump: "1",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          matter_id: this.matterid,
          chann_id: "1",
          social_sec_num: this.cardid,
          prov_staff_id: window.sessionStorage.getItem("EmployeeNumbers"),
          areano: window.sessionStorage.getItem("AreaNumber"),
          start_time: starttime,
          end_time: endtime,
          insurance_type: "110"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng30054", setdata)
        .then(res => {
          if(res.feedetail==undefined){
            this.logintext = "未查询到数据";
          }else{
            this.logintext = "由查询数据生成";
            this.datatext = res;
          }
        })
        .catch(error => {
          this.logintext = "数据查询失败";
          console.log(error);
        });
    },
    dateTime(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      //return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      this.monthtime = MM;
      this.yeartime = y;
      this.daytime = d;
      return y.toString() + MM.toString();
    }
  },
  components: {
    mybutton,
    towtop
  },
  mounted() {
    this.confirmValDate = this.valueDate; //日期
    this.confirmValDate2 = this.valueDate; //日期
    this.times = new Date();
    this.times.getFullYear();
    this.endDate = new Date(
      this.times.getFullYear(),
      this.times.getMonth(),
      this.times.getDate()
    );
  }
};
</script>
<style scoped lang='less'>
.newcroce{
  text-align: left;
  font-size: .28rem;
  color: red;
  height: 1rem;
  line-height: .5rem;
  padding-left: .16rem;
}
.rstbox {
  background: #fff;
  .rsttab {
    border-top: 1px solid #e1e2e6;
    margin: 0 0.12rem;
    padding: 0.15rem 0;
    ul {
      display: flex;
      li {
        flex: 1;
        float: left;
        font-size: 0.28rem;
        color: #666;
      }
    }
  }
  .rstsosuo {
    display: flex;
    font-size: 0.28rem;
    padding: 0.12rem 0.12rem;
    line-height: 0.64rem;
    span {
      flex: 1;
      input {
        width: 100%;
        text-align: center;
        height: 0.64rem;
        line-height: 0.64rem;
        background: #f5f5f5;
        border-radius: 0.5rem;
        border: 0;
      }
      button {
        height: 0.64rem;
        line-height: 0.64rem;
        text-align: center;
        color: #fff;
        background: #4991fd;
        border-radius: 0.5rem;
        padding: 0.03rem 0.2rem;
        border: 0;
      }
      button:active {
        box-shadow: 0.05em 0.1em 0.2em rgba(0, 0, 0, 0.6) inset;
        border-color: rgba(0, 0, 0, 0.3);
        background: #666;
      }
    }
    .rstsosuotow {
      flex: 2;
    }
  }
}

.rstnav {
  height: 0.68rem;
  line-height: 0.68rem;
  color: #999999;
  font-size: 0.28rem;
  padding-left: 0.16rem;
  text-align: left;
}

.rstindcen {
  background: #fff;
  padding: 0.15rem 0.18rem;
  font-size: 0.24rem;
  color: #999;
  line-height: 0.5rem;
  text-align: left;
  margin-bottom: 0.08rem;
  li {
    display: inline-block;
    width: 100%;
    .srttitle {
      float: left;
    }
    .srtcent {
      color: #333;
      float: right;
    }
  }
}

.example-datetime_arrowRight {
  display: block;
  width: 16px;
  height: 16px;
  /*background-image: url(../../../src/common/images/common-datetime.png);*/
  background-size: contain;
}
</style>
