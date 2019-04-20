<template>
  <div class="JoinFleaMarket">
    <myheader :my-header="headerData"></myheader>
    <div class="JoinFleaMarketContent">
      <ul class="select">
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              readonly
              placeholder="请选择" label="选择报考省份"
              disableclear type="text" :value="province" class="selectTypeData">
              <span slot="append">
                <Icon type="arrow-right" size="14"  color="#757575"></Icon>
              </span>
            </Field>
          </div>
        </li>
        <li>
          <div class="middleone1">
            <span class="middletwo1">*</span>
            <Field readonly type="text" label="姓名"  placeholder="请输入您的姓名" v-model="sendData.xm">
          </Field>
          </div>
        </li>
        <li>
          <div class="middleone2">
            <span class="middletwo2">*</span>
            <Field type="text" readonly label="证件号码"  placeholder="请输入您证件号码" v-model="sendData.zjhm">
            </Field>
          </div>
        </li>
        <li>
          <div class="middleone3">
            <span class="middletwo3">*</span>
            <Radios title="性别" v-model="sendData.sex"
              :options="sexOption"
              >
            </Radios>
          </div>
        </li>
        <li>
          <div class="middleone4">
            <span class="middletwo4">*</span>
            <Field readonly  label="民族"
                   disableclear type="text" :value="nationText" class="selectTypeData"
                   @click.native="open('nationSelect')">
              <span slot="append">
                <Icon type="arrow-right" size="14"  color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="nationSelect"
            position="bottom"
            :dataslots="nationData"
            :visible-item-count="5"
            @confirms="nationConfirms"
          ></Selectpopup>
        </li>
        <li class="fromDate">
          <div class="middleone5">
            <span class="middletwo5">*</span>
            <Field readonly label="出生年月" disableclear v-model="sendData.birthday"
                   type="text" placeholder="请选择" :value="sendData.birthday"><!--@click.native="open('birthdayDate')"-->
              <span slot="append" class="formDataspan">
                <Icon type="calendar" size="12"  color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Datetime
            ref="birthdayDate"
            type="date"
            position="bottom"
            :start-date=startDate
            :end-date=endDate
            @confirm="birthdayConfirmDate">
          </Datetime>
        </li>
        <li>
          <div class="middleone5">
            <span class="middletwo5">*</span>
            <Field readonly  label="考试级别"
                   disableclear type="text" v-model="sendData.level"  :value="sendData.level" class="selectTypeData"
                   ><!--@click.native="open('levelSelect')"-->
              <span slot="append">
                <Icon type="arrow-right" size="14"  color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="levelSelect"
            position="bottom"
            :dataslots="levelData"
            :visible-item-count="5"
            @confirms="levelConfirms"
          ></Selectpopup>
        </li>
        <li class="friendlyReminder">
          <p>
            提示：在APP报考结束后，全国会计报考系统会同步帮您生成PC端登入账号密码，通过短信发送给您，请及时查看保存！
          </p>
        </li>
      </ul>
      <!-- <Btn type="primary" @click="next">下一步</Btn> -->
			<mybutton :btnData="btnData" @click="next" />
    </div>
    <Popupprompt
        v-model="popupVisible5"
        :text="content.text"
        :confirm-btn = "content.confirmBtn"
        :cancel-btn = "content.cancelBtn"
        @click = "clickbtn"
    >
        <div slot="othercontent">
        </div>
    </Popupprompt>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from "@/components/header/header";
import { mapMutations, mapGetters, mapActions } from "vuex";
  	import mybutton from "@/components/MyButton";

export default {
  data() {
    return {
      btnData:[

					{
						text:'下一步',
						disabled: false,
						isSure: true,
            click:'func2'
					}
				],
      headerData: {
        title: "填写个人信息",
        backUrl: "/"
      },
      startDate: new Date(1900, 1, 1),
      endDate: new Date(),
      nationData: [
        {
          flex: 1,
          values: [
            { text: "汉族", value: "01" },
            { text: "其他民族", value: "02" }
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      levelData: [
        {
          flex: 1,
          values: [
            /* {text: '初级', value: '00'},
           {text: '中级', value: '01'},
           {text: '高级', value: '02'} */
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      sexOption: [
        { label: "男", value: "1", disabled: false },
        { label: "女", value: "2", disabled: false }
      ],
      nationText: "",
      province: "云南",
      loginData: {},
      sendData: {
        xm: "",
        zjhm: "",
        nation: "",
        birthday: "",
        level: "",
        sex: "",
        dah: "",
        WorkId: ""
      },
      popupVisible5: false,
      content: {
        text: "目前支付状态为不确定或者受理中，是否继续报名？",
        confirmBtn: {
          // 水平按钮-确定
          id: "confirm",
          text: "继续"
        },
        cancelBtn: {
          // 水平按钮-取消
          id: "cancel",
          text: "取消"
        }
      }
    };
  },
  created() {
    const _self = this;
    console.log(this.$route.query.level);
    // for (let i = 1; i < 4; i++) {
    _self.queryTestTime(this.$route.query.level);
    // _self.queryTestTime('3')
    // }
    if (this.$route.query.WorkId) {
      _self.sendData.WorkId = this.$route.query.WorkId;
      _self.setWorkId(_self.sendData.WorkId);
    } else {
      _self.sendData.WorkId = _self.workId;
    }
  },

  computed: {
    ...mapGetters("bureauFinanceStore", [
      "workId",
      "sendDataSave",
      "pageDataSave"
    ])
  },
  components: {
			mybutton,
    myheader: Header
  },
  mounted() {
    const _self = this;
    const testUserArr = [
      { name: "试试看", cardid: "370181187701228312" },
      { name: "不随便", cardid: "370181199011118312" },
      { name: "随便", cardid: "370181199211118312" },
      { name: "李宝", cardid: "370181199112224139" },
      { name: "王超", cardid: "370181198704235213" },
      { name: "李童一", cardid: "430623198404208139" }
    ];
    _self.sendData.xm =
      sessionStorage.getItem('username') || testUserArr[5].name;
    _self.sendData.zjhm =
       sessionStorage.getItem('cardid') || testUserArr[5].cardid;
    _self.sendData.birthday = _self.getBirthday(_self.sendData.zjhm);
    _self.sendData.sex = _self.getSex(_self.sendData.zjhm);
    _self.testAge(_self.sendData.zjhm);
  },
  methods: {
    ...mapMutations("bureauFinanceStore", [
      "setSendData",
      "setPageData",
      "setWorkId"
    ]),
    ...mapActions("bureauFinanceStore", ["fetchTempSaveData"]),
    clickbtn(id) {
      console.log(id);
      if (id === "confirm") {
        this.goto();
      } else {
        this.$CallModule("close", "关闭");
      }
    },
    open(picker) {
      const _self = this;
      if (picker === "levelSelect" && _self.levelData[0].values.length === 0) {
        return _self.$toast("当前无可报考等级");
      }
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    nationConfirms(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.nationText = selectedVal[0].text;
        _self.sendData.nation = selectedVal[0].value;
      } else {
        _self.sendData.nation = selectedVal;
      }
    },
    levelConfirms(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.level = selectedVal[0].text;
      } else {
        _self.sendData.level = selectedVal;
      }
    },
    birthdayConfirmDate(value) {
      const _self = this;
      _self.sendData.birthday = _self.dateFormat(value, "yyyy-MM-dd");
    },
    testForm() {
      const _self = this;
      let o = false;
      if (!_self.sendData.nation) {
        o = true;
        _self.$toast("请选择民族");
      } else if (!_self.sendData.level) {
        o = true;
        _self.$toast("请选择报考等级");
      }
      return o;
    },
    goto(url, name) {
      const _self = this;
      let path = "";
      if (url === "RAERegistrationSuccess") {
        _self.$router.push({
          name: "RAERegistrationSuccess",
          params: {
            sendData: {
              level: _self.$route.query.level
            }
          }
        });
        return;
      }
      if (url) {
        path = `/${url}`;
      } else {
        path = "/notesApplication";
        name = "会计等级考试报名须知";
      }
      _self.setPageData(_self.loginData);
      _self.setSendData(_self.sendData);
      _self.$router.push({
        path: path,
        name: name,
        params: {}
      });
    },
    next() {
      const _self = this;
      if (_self.testAge(_self.sendData.birthday)) return;
      if (_self.testForm()) return;
      _self.queryIsOldUser();
    },
    testAge(cardNum) {
      const _self = this;
      const levet = this.$route.query.level
        ? this.$route.query.level
        : _self.sendDataSave.level;
      let o = false;
      const getNowAge = cardNum => {
        let nowAge = "";
        const year = 1000 * 60 * 60 * 24 * 365
        const nowDate = new Date()
        const birthday = new Date(_self.sendData.birthday)
        nowAge = `${parseInt(nowDate - birthday) / year}`
        return nowAge.slice(0, 2)
      };

      let age = parseInt(getNowAge(cardNum))
      if (levet === "1" && age < 25) {
        o = true;
        _self.$toast("您不符合会计报考条件");
      }
      return o;
    },
    getBirthday(cardNum) {
      if (cardNum.length === 18) {
        return `${parseInt(cardNum.slice(6, 10))}-${cardNum.slice(
          10,
          12
        )}-${cardNum.slice(12, 14)}`;
      }
    }, // 获取生日
    getSex(cardNum) {
      const _self = this;
      if (cardNum.length === 18) {
        const sexNum = parseInt(cardNum.slice(-2, -1));
        if (sexNum % 2 === 0) {
          _self.sexOption[0].disabled = true;
          return "2";
        } else {
          _self.sexOption[1].disabled = true;
          return "1";
        }
      }
    }, // 获取性别
    queryTestTime(level) {
      const _self = this;
      let sendData = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          oper_id: "1001",
          chann_id: "1",
          bkjb: level,
          matter_id: sessionStorage.getItem("matterid")
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng80081", sendData).then(res => {
        const nowDate = parseInt(_self.dateFormat(new Date(), "yyyyMMdd"));
        const bmbegindate = formatStr(res.bmbegindate);
        const bmenddate = formatStr(res.bmenddate);
        if (res.error_msg) return _self.$toast(res.error_msg);
        if (bmbegindate < nowDate && bmenddate > nowDate) {
          switch (level) {
            case "1":
              _self.levelData[0].values.push({ text: "中级", value: "01" });
              _self.sendData.level = "中级";
              break;
            case "2":
              _self.levelData[0].values.push({ text: "初级", value: "02" });
              _self.sendData.level = "初级";
              break;
            case "3":
              _self.levelData[0].values.push({ text: "高级", value: "03" });
              _self.sendData.level = "高级";
              break;
            default:
              console.log(`error=${res}`);
          }
        } else {
          _self.$toast("当前时间不在可报名时间内，暂时无法报名");
        }
      });
      const formatStr = num => {
        return parseInt(num.split("-").join(""));
      };
    }, // 查询报考时间
    queryIsOldUser() {
      const _self = this;
      let level = this.$route.query.level;
      _self.getStateFromApplySys(level);
    },
    getStateFromPaySys(level) {
      let _self = this;
      let sendData = {
        txnBodyCom: {
          bkjb: level,
          cardid: _self.sendData.zjhm
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng99502", sendData).then(res => {
        console.log(res);
        if (res == null) {
          _self.goto();
        } else if (res.orderStcd === "0" || res.orderStcd === "5") {
          // 不确定、受理中
          _self.popupVisible5 = true;
        } else if (res.orderStcd === "2") {
          // 支付成功
          _self.$router.push({
            name: "RAERegistrationSuccess",
            params: {
              sendData: {
                level: level
              }
            }
          });
        } else if (
          res.orderStcd === "1" ||
          res.orderStcd === "3" ||
          res.orderStcd === "4"
        ) {
          // 未支付、支付失败、已关闭
          _self.goto();
        }
      });
    },
    getStateFromApplySys(level) {
      const _self = this;
      let sendData = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          oper_id: "1002",
          xm: _self.sendData.xm,
          zjhm: _self.sendData.zjhm,
          birth_date: _self.sendData.birthday,
          bkjb: level,
          chann_id: "1",
          matter_id: sessionStorage.getItem("matterid")
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng80080", sendData).then(res => {
        console.log(res);
        if (!res.error_msg) {
            switch (res.passed) {
              case "-1":
                if (res.ifold) {
                  _self.setOldMsg(res);
                } else {
                  _self.goto();
                }
                break;
              case "1":
                if(level == res.bkjb){
                  _self.goto("RAERegistrationSuccess", "RAERegistrationSuccess");
                }else{
                  _self.$toast("您已经报考过"+_self.formatUserDetails('zyzg2',res.bkjb)+"会计考试，不能再报考其他级别。")
                }
                break;
              case "2":
                _self.goto();
                break;
              case "3":
                _self.goto();
                break;
              case "4":
                _self.goto();
                // _self.$toast('已报名，未交费,请缴费')
                break;
              default:
                _self.$toast("查询状态异常");
            }
        } else {
          if (res.error_msg === "该证件号已注册，但姓名不符") {
            _self.$toast(
              "您的证件号码已注册，但与姓名不符，请联系省级报考部门进行修改"
            );
          } else {
            _self.$toast(res.error_msg);
          }
        }
      });
    },
    setOldMsg(data) {
      const _self = this;
      _self.sendData.files_no = data.dah;
      _self.loginData.educationBackgroundText = data.xl; // 学历
      _self.loginData.imgurl = data.imgurl;
      _self.loginData.professionalQualificationText = data.zyzg; // 专业资格
      _self.sendData.educationBackground = _self.formatUserDetails(
        "xl",
        _self.loginData.educationBackgroundText
      );
      _self.sendData.professionalQualification = _self.formatUserDetails(
        "zyzg",
        _self.loginData.professionalQualificationText
      );
      _self.sendData.kjgznx = data.kjnx;
      _self.sendData.startWork = data.rznx;
      _self.sendData.GraduationDate = data.bysj;
      _self.sendData.TestTitle = _self.formatProject(data.zjhgkm.split(""));
      _self.sendData.isold = true;
      _self.goto();
    },
    formatProject(arr) {
      if (arr == null || arr.length === 0) return ["1", "2", "3"];
      let srcArr = ["1", "2", "3"];
      for (let i = 0; i < arr.length; i++) {
        let k = srcArr.indexOf(arr[i]);
        if (k !== -1) {
          srcArr.splice(k, 1);
        }
      }
      return srcArr;
    },
    dateFormat(time, format) {
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
    },
    formatUserDetails(key, value) {
      const _self = this;
      let o = null;
      const returnXl = value => {
        let str = "";
        switch (value) {
          case "博士":
            str = "11";
            break;
          case "硕士":
            str = "14";
            break;
          case "双学士":
            str = "24";
            break;
          case "本科":
            str = "21";
            break;
          case "大专":
            str = "31";
            break;
          case "高中及其他":
            str = "61";
            break;
          default:
            _self.$toast("字典无此数据");
        }
        return str;
      };
      const returnZyzg = value => {
        let str = "";
        switch (value) {
          case "中级":
            str = "1";
            break;
          case "初级":
            str = "2";
            break;
          case "其他":
            str = "3";
            break;
          default:
            _self.$toast("字典无此数据");
        }
        return str;
      };
      const returnZyzg2 = value => {
        let str = "";
        switch (value) {
          case 1:
            str = "中级";
            break;
          case 2:
            str = "初级";
            break;
          case 3:
            str = "高级";
            break;
          default:
            _self.$toast("字典无此数据");
        }
        return str;
      };
      const returnXlxz = value => {
        let str = "";
        switch (value) {
          case "全日制毕业生":
            str = "1";
            break;
          case "非全日制毕业生":
            str = "2";
            break;
          default:
            _self.$toast("字典无此数据");
        }
        return str;
      };
      const returnKqdm = value => {
        let str = "";
        for (let i = 0; i < _self.districtData[0].values.length; i++) {
          if (value === _self.districtData[0].values[i].text) {
            str = _self.districtData[0].values[i].value;
          }
        }
        return str;
      };
      const returnBmddh = value => {
        let str = "";
        for (let i = 0; i < _self.registrationPointData[0].values.length; i++) {
          if (value === _self.registrationPointData[0].values[i].text) {
            str = _self.registrationPointData[0].values[i].value;
          }
        }
        return str;
      };
      switch (key) {
        case "xl":
          o = returnXl(value);
          break;
        case "zyzg":
          o = returnZyzg(value);
          break;
        case "zyzg2":
          o = returnZyzg2(value);
          break;
        case "xlxz":
          o = returnXlxz(value);
          break;
        case "kqdm":
          o = returnKqdm(value);
          break;
        case "bmddh":
          o = returnBmddh(value);
          break;
        default:
          _self.$toast("无效key无法查询");
      }
      return o;
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
.JoinFleaMarket .hui-field {
  border: none;
  line-height: calc(1rem - 10px);
}
.JoinFleaMarket .hui-field_title {
  font-size: 0.28rem;
}
.JoinFleaMarket .hui-field_core {
  text-align: right;
  font-size: 0.28rem;
}
.JoinFleaMarket .hui-btn-normal {
  margin-bottom: 0.62rem;
  width: 5.9rem;
  font-size: 0.3rem;
}
.JoinFleaMarket .hui-radios {
}
.JoinFleaMarket .hui-radios:after {
  content: "";
  display: block;
  clear: both;
}
.JoinFleaMarket .hui-radios_titleBox {
  float: left;
  width: 2rem;
  text-align: left;
}
.JoinFleaMarket .hui-radios_itemWrapper {
  float: right;
}
.JoinFleaMarket .hui-radios_itemWrapper:after {
  content: "";
  display: block;
  clear: both;
}
.JoinFleaMarket .hui-radios_itemWrapper label {
  float: left;
}
.JoinFleaMarket .hui-radios_itemWrapper label:last-child {
  margin-left: 0.5rem;
}
.JoinFleaMarket .hui-radios span {
  font-size: 0.28rem;
}
</style>
<style lang="less" scoped>
.JoinFleaMarket {
  background: #eee;
  height: 100%;
  .JoinFleaMarketContent {
    .select {
      background: #fff;
      margin-bottom: 0.44rem;
      padding: 0 0.36rem;
      li {
        &:last-child {
          border: none;
        }
        .formDataspan{
          margin-left: 0.2rem;
        }
        border-bottom: 1px solid #ececec;
        /*div {*/
          /*padding-left: 0;*/
          /*padding-right: 0;*/
        /*}*/
      }
      /*.fromDate {*/
        /*span {*/
          /*margin-left: 0.2rem;*/
        /*}*/
      /*}*/
      .friendlyReminder {
        p {
          color: red;
          font-size: 0.2rem;
          margin-top: 0.5rem;
          text-align: left;
          text-indent: 0.2rem;
        }
      }
    }
  }
}
.JoinFleaMarket .middleone{
  position:relative;
}
.JoinFleaMarket .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:40%;
  left:0;
}
.JoinFleaMarket .middleone1{
  position:relative;
}
.JoinFleaMarket .middletwo1{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:39%;
  left:0;
}
.JoinFleaMarket .middleone2{
  position:relative;
}
.JoinFleaMarket .middletwo2{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:39%;
  left:0;
}
.JoinFleaMarket .middleone3{
  position:relative;
}
.JoinFleaMarket .middletwo3{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:35%;
  left:0;
}
.JoinFleaMarket .middleone4{
  position:relative;
}
.JoinFleaMarket .middletwo4{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:38%;
  left:0;
}
.JoinFleaMarket .middleone5{
  position:relative;
}
.JoinFleaMarket .middletwo5{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:39%;
  left:0;
}

</style>
