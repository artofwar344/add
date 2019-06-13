<template>
  <div class="confirmationInformation">
    <myheader :my-header="headerData"></myheader>
    <div class="confirmationInformationContent">
      <ul class="from">
         <li class="friendlyReminder">
          <p>请确认报考信息是否正确。</p>
        </li>
        <li>
          <p>姓名 <span>{{sendData.xm}}</span></p>
        </li>
        <li>
          <p>身份证号<span>{{sendData.zjhm}}</span></p>
        </li>
        <li>
          <p>考试级别<span>{{sendData.level}}</span></p>
        </li>
        <li v-if="isIntermediate">
          <p>报考类别<span >{{projectArr.join(",")}} </span></p>
        </li>
        <li>
          <p>地区<span>{{pageData.districtText}}</span></p>
        </li>
        <li>
          <p>报名点<span>{{pageData.registrationPointText}}</span></p>
        </li>
        <li>
          <p>学历<span>{{pageData.educationBackgroundText}}</span></p>
        </li>
        <li v-if="isIntermediate">
          <p>毕业院校<span>{{sendData.school}}</span></p>
        </li>
        <li v-if="isSenior">
          <p>专业资格<span>{{pageData.professionalQualificationText}}</span></p>
        </li>
        <li v-if="isSenior">
          <p>专业资格获取时间<span>{{sendData.hqzyzgsj}}</span></p>
        </li>
        <li v-if="isIntermediate || isSenior">
          <p>会计工作年限<span>{{sendData.kjgznx}}</span></p>
        </li>
        <li v-if="isSenior">
          <p>工作单位<span>{{sendData.company}}</span></p>
        </li>
        <li>
          <p>电话号码<span>{{sendData.phone}}</span></p>
        </li>
      </ul>
      <div class="btns">
        <!-- <Btn type="primary" @click="goBack">返回修改</Btn>
        <Btn type="primary" @click="submitData">下一步</Btn> -->
			  <mybutton v-if="!isNext" :btnData="btnData" @func1="goBack" @func2="submitData" />
        <mybutton v-if="isNext" :btnData="btnData2" @func1="gotoWait" @func2="gotoApp" />
      </div>
    </div>
    <Popup modal-fade=true v-model="popupVisible1" popup-transition="popup-fade" class="example-popup_1" :close-on-click-modal=false>
      <p>请稍等，即将进入缴费</p>
    </Popup>
  </div>
</template>
<!--// 请输入您的身份证号码-->
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
import Header from "@/components/header/header";
import BasicFormSubmit from "@/utils/BasicFormSubmit";
import { mapGetters } from "vuex";
import { setTimeout } from 'timers';
  	import mybutton from "../../../../components/MyButton";

export default {
  data() {
    return {
      btnData:[
					{
						text:'返回修改',
						disabled: false,
            isSure: true,
            click:'func1'
					},
					{
						text:'下一步',
						disabled: false,
						isSure: true,
            click:'func2'
					}
        ],
        btnData2:[
					{
						text:'已支付',
						disabled: false,
            isSure: true,
            click:'func1'
					},
					{
						text:'重新申请',
						disabled: false,
						isSure: true,
            click:'func2'
					}
				],
      params: this.$route.params,
      headerData: {
        title: '报考信息确认',
        backUrl: '/PersonalInformation'
      },
      isJunior: false,
      isIntermediate: false,
      isSenior: false,
      sendData: {
        certificateType: "",
        TestTitle: [],
        district: "",
        registrationPoint: "",
        professionalQualification: "",
        educationBackground: "",
        kjgznx: "",
        startWork: "",
        GraduationDate: "",
        school: "",
        diplomaNUm: "",
        postalCode: "",
        email: "",
        xlxz: "",
        pgtj: "",
        hqzyzgsj: "",
        company: "",
        companyAddress: "",
        companyNature: "",
        phone: ""
      },
      projectArr: [], //文字版报考科目
      projectText: {
        "1": "财务管理",
        "2": "经济法",
        "3": "中级会计实务"
      },
      //19025返回
      bmf: "", //报名费
      ksf: "", //考试费
      //19026返回
      exam_eps: "", //考试费用
      mrch_ordr_no: "", //商户订单号
      lnd_city_cdnm: "", //
      rgst_rgst_no: "", //报名注册号
      orderNo: "", //支付订单号
      appId: "", //支付跳转小程序appid
      pagePath: "", //支付跳转小程序页面
      payForData: {},
      popupVisible1: false,
      isNext:false
    };
  },
  created() {
    window.MiniProgramCallBack = this.MiniProgramCallBack;
    const _self = this;
    _self.sendData = _self.sendDataSave;
    _self.pageData = _self.pageDataSave;
    _self.isJunior = _self.sendData.level === "初级";
    _self.isIntermediate = _self.sendData.level === "中级";
    _self.isSenior = _self.sendData.level === "高级";
    _self.sendData.phone = sessionStorage.getItem("userphone") || "13654598752";
    _self.getProjectArr();
    console.log(_self.sendData);
    console.log(_self.pageData);
    console.log(_self.workId);
  },
  mounted() {},
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
  methods: {
    gotoApp(){
      this.$CallModule("close")
    },
    gotoWait(){
      this.$router.push("/RAERegistrationWait");
    },
    getProjectArr() {
      var arr = this.sendData.TestTitle;
      for (let i = 0; i < arr.length; i++) {
        this.projectArr.push(this.projectText[arr[i]]);
      }
      console.log(this.projectArr);
    },
    setDom(data) {
      let _self = this;
      _self.queryData(data.List);
    },
    goto() {
      let _self = this;
      //裕农通APP功能，勿删！
      if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
        PJF.ynt.A0161G058()
      }
      _self.$router.push({
        path: "/RAERegistrationSuccess",
        name: "会计等级考试报名信息确认",
        params: {}
      });
    },
    goBack() {
      let _self = this;
      _self.$router.push({
        path: "/PersonalInformation",
        name: "会计等级考试填写报名信息",
        params: _self.params
      });
    },
    /* informationSave () {
      let _self = this
      let sendData = {
        'txnCommCom': {
          'tenant': '530000000000',
          'txn_itt_chnl_id': '00',
          'txn_itt_chnl_type': '11',
          'C-Business-Id': '111111111'
        },
        'txnBodyCom': {
          'matter_id': sessionStorage.getItem('matterid') || '12',
          'chann_id': '123',
          'mnplt_cd': '10001',
          'idv_nm': _self.sendData.xm,
          'crdt_no': _self.sendData.zjhm,
          'gnd': _self.sendData.sex,
          'ethnct': _self.sendData.nation,
          'brth_dt': _self.sendData.birthday,
          'rgsfr_exm_lvl': _self.sendData.level,
          'lnd_city_cdnm': _self.sendData.district,
          'rgst_site': _self.sendData.registrationPoint,
          'prof_qua': _self.sendData.professionalQualification,
          'ed_dgr': _self.sendData.educationBackground,
          'ed_dgr_char': _self.sendData.xlxz,
          'act_yr_lmt': _self.sendData.kjgznx,
          'wrkon_act_wrk_tm': _self.sendData.startWork,
          'grdt_tm': _self.sendData.GraduationDate,
          'grdt_unvrst': _self.sendData.school,
          'grdt_id': _self.sendData.diplomaNUm,
          'zip': _self.sendData.postalCode,
          'email': _self.sendData.email,
          'adr_inf': _self.sendData.postalAddress,
          'wrk_unit': _self.sendData.company,
          'wrk_unit_adr': _self.sendData.companyAddress,
          'mblph_no': _self.sendData.phone,
          'medm_rgsfr_exm_sbj': _self.sendData.TestTitle.join(''),
          'rgsfr_exm_ind': _self.sendData.pgtj,
          'unit_char': _self.sendData.companyNature,
          'prof_qua_obtn_yr': _self.sendData.hqzyzgsj.slice(0, 3),
          'prof_qua_obtn_mo': _self.sendData.hqzyzgsj.slice(5, 7),
          'pic': _self.imgToBase64(_self.sendData.imgUrl),
          'files_no': _self.sendData.dah // 查进入系统
        }
      }
      /!* let testData2 = {
        "txnBodyCom": {
          'files_no': '22011603690', // ?
          "mnplt_cd": "1005",
          "idv_nm": "王超",
          "crdt_no": "370181198704235211",
          "gnd": "1",
          "ethnct": "01",
          "brth_dt": "1987-04-23",
          "rgsfr_exm_lvl": "1",
          "lnd_city_cdnm": "3502",
          "rgst_site": "0251",
          "prof_qua": "2",
          "ed_dgr": "24",
          "ed_dgr_char": "1",
          "act_yr_lmt": "7",
          "wrkon_act_wrk_tm": "2011",
          "grdt_tm": "11",
          "grdt_unvrst": "山东大学",
          "grdt_id": "0000",
          "zip": "250000",
          "email": "liang@qq.com",
          "adr_inf": "山东省济南市伯乐路128号",
          "wrk_unit": "山大鸥玛软件股份有限公司",
          "wrk_unit_adr": "山东省济南市伯乐路128号",
          "mblph_no": "15098725890",
          "medm_rgsfr_exm_sbj": "12",
          "rgsfr_exm_ind": "是",
          "prof_qua_obtn_yr": "2011",
          "prof_qua_obtn_mo": "11",
          'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5Mjc0MzkxMEI4NzExRTc4NEZDQjdBRUIxMEI1N0ZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY5Mjc0MzkyMEI4NzExRTc4NEZDQjdBRUIxMEI1N0ZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjkyNzQzOEYwQjg3MTFFNzg0RkNCN0FFQjEwQjU3RkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjkyNzQzOTAwQjg3MTFFNzg0RkNCN0FFQjEwQjU3RkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz494Yd6AAAj7klEQVR42uxdCZQc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',
          "unit_char": "1"
        }
      } *!/

      _self.$ajaxRequest('post', '/gsp/mng19024', sendData).then((res) => {
        console.log(res)
      })
    }, */
    submitData () {
      const _self = this
     if( _self.formatLevel(_self.sendData.level)!='3'){
        _self.isNext = true;
     }
      // _self.sendData.WorkId =
      console.log(_self.sendData);
      console.log(_self.sendData.imgUrl);
      console.log(_self.sendData.imgUrl.slice(23));
      let formSendData = {
        sendData: {
          'matter_id': sessionStorage.getItem('matterid') || '3f06d0541eb44a7f82c7807c7891659f',
          'chann_id': '123',
          'mnplt_cd': '1005',
          'idv_nm': _self.sendData.xm,
          'crdt_no': _self.sendData.zjhm,
          'gnd': _self.sendData.sex,
          'ethnct': _self.sendData.nation,
          'brth_dt': _self.sendData.birthday,
          'rgsfr_exm_lvl': _self.formatLevel(_self.sendData.level),
          'lnd_city_cdnm': _self.sendData.district,
          'rgst_site': _self.sendData.registrationPoint,
          'prof_qua': _self.sendData.professionalQualification,
          'ed_dgr': _self.sendData.educationBackground,
          'ed_dgr_char': _self.sendData.xlxz,
          'act_yr_lmt': _self.sendData.kjgznx,
          'wrkon_act_wrk_tm': _self.sendData.startWork.slice(0, 4),
          'grdt_tm': _self.sendData.GraduationDate.slice(2, 4),
          'grdt_unvrst': _self.sendData.school,
          'grdt_id': _self.sendData.diplomaNUm,
          'zip': _self.sendData.postalCode,
          'email': _self.sendData.email,
          'adr_inf': _self.sendData.postalAddress,
          'wrk_unit': _self.sendData.company,
          'wrk_unit_adr': _self.sendData.companyAddress,
          'mblph_no': _self.sendData.phone,
          'medm_rgsfr_exm_sbj': _self.sendData.TestTitle.join(''),
          'rgsfr_exm_ind': _self.sendData.pgtj,
          'unit_char': _self.sendData.companyNature,
          'prof_qua_obtn_yr': _self.sendData.hqzyzgsj.slice(0, 4),
          'prof_qua_obtn_mo': _self.sendData.hqzyzgsj.slice(5, 7),
          'pic': _self.sendData.imgUrl.slice(23),
          'work_id': _self.sendData.WorkId,
          'files_no': _self.sendData.dah || '' // 查进入系统
        },
        callback: _self.saveNext
      }
      console.log(formSendData, 'this')
      BasicFormSubmit({
        WorkId: _self.sendData.WorkId,
        from: formSendData,
        file: {},
        noFile: true,
        callback: _self.saveNext
      });
    },
    remarkFormat(str){
      if(str.indexOf("#")!=-1){
        str = str.substring(2);
      }
      return str;
    },
    saveNext(data) {
      const _self = this;
      console.log(data);
      //报名注册号
      this.rgst_rgst_no = _self.remarkFormat(data.Remark1) ||  _self.remarkFormat(_self.sendData.rgst_rgst_no);
      if (_self.sendData.level === "高级") {
         _self.$router.push({
          name: "RAERegistrationSuccess",
          params: {
            sendData: {
              level: _self.sendData.level
            }
          }
        });
        return;
      }
      _self.popupVisible1 = true;
      _self.payment();
    },
    payment() {
      let _self = this;
      let sendData = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          matter_id:
            sessionStorage.getItem("matterid") ||
            "3f06d0541eb44a7f82c7807c7891659f",
          chann_id: "1",
          bkjb: _self.formatLevel(_self.sendData.level),
          oper_id: "1006",
          xm: _self.sendData.xm || "王超",
          zjhm: _self.sendData.zjhm || "370181198704235211"
        }
      };
      console.log(sendData);
      _self.$ajaxRequest("post", "/gsp/mng19025", sendData).then(res => {
        console.log(res);
        this.bmf = res.bmf;
        this.ksf = res.ksf;
        _self.createOrder();
      });
    },
    createOrder() {
      let _self = this;
      let sendData = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          matter_id:
            sessionStorage.getItem("matterid"),
          chann_id: "1",
          bkjb: _self.formatLevel(_self.sendData.level),
          oper_id: "1007",
          xm: _self.sendData.xm ,
          zjhm: _self.sendData.zjhm
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng19026", sendData).then(res => {
        console.log(res);
        this.exam_eps = res.exam_eps;
        this.mrch_ordr_no = res.mrch_ordr_no;
        this.lnd_city_cdnm = res.lnd_city_cdnm;
        _self.payFor();
      });
    },

    //统一下单接口
    payFor() {
      let _self = this;
      let sendData = {
        txnBodyCom: {
          bkjb: _self.formatLevel(_self.sendData.level),
          bizType: "0007",
          ordid: _self.mrch_ordr_no,
          cityCode: _self.sendData.district,
          orderDesc: "",
          payType: 5,
          payMode: 1,
          payChannel: 1,
          channelType: 1,
          tollData: {
            bizDesc: {
              level: _self.formatLevel2(_self.sendData.level),
              area: _self.pageData.districtText,
              registerPoint: _self.pageData.registrationPointText,
              registerNo: _self.rgst_rgst_no,
              remark: ""
            },
            bizID: _self.workId,
            certificateType: 1,
            certificateNum: _self.sendData.zjhm,
            telNumber: _self.sendData.phone,
            ticketInfo: {
              payer: _self.sendData.xm
            },
            tollItemList: _self.formatProject()
          },
          totalAmount: parseInt(_self.ksf)+parseInt(_self.bmf),
          chann_id: "1",
          matter_id: sessionStorage.getItem("matterid"),
          workid: _self.workId,
          memberid: sessionStorage.getItem("userid")
        }
      };

      _self.$ajaxRequest("post", "/gsp/mng30067", sendData).then(res => {
        console.log(res);
        if(res["C-API-Status"] == "01"){
           _self.popupVisible1 = false;
          return;
        }
        _self.orderNo = res.orderNo;
        _self.appId = res.appId; //支付跳转小程序appid
        _self.pagePath = res.pagePath;
        _self.popupVisible1 = false;
        //通知状态为受理中
        _self.tellPayState();

        //TODO:跳转小程序
        _self.toMiniProgram();


      });
    },
    //通知状态为受理中
    tellPayState() {
      let payData = {
        txnBodyCom: {
          orderNo: this.orderNo, //支付交易订单号
          businessNo: this.mrch_ordr_no, //业务系统订单号
          payState: 5, //受理中,
          settleDate: dateFormat(new Date(), "yyyyMMdd"),
        }
      };
      this.$ajaxRequest("post", "/gsp/mng99501", payData).then(res => {
        console.log(res);
      });
    },
    //跳转小程序
    toMiniProgram() {
      var _self =  this;
      console.log("跳转小程序")

      let miniData = {
           path: _self.pagePath,
           miniProgramType: 0,
           userName: _self.appId,
      }
      _self.$CallModule('miniProgram', miniData)
    },
    //小程序回调函数
    MiniProgramCallBack() {
      this.$router.push("/RAERegistrationWait");
    },
    payForResult() {
      const _self = this;
      let sendData = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          'matter_id': window.sessionStorage.getItem('matterid'),
          chann_id: "1",
          bkjb: "2",
          oper_id: "1008",
          xm: "李宝",
          zjhm: "370181199112224139",
          ordid: "1912050000056",
          status: "2",
          time: "2018-11-22 22:11:11"
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng19027", sendData).then(res => {
        console.log(res);
      });
    },
    formatLevel(level) {
      const _self = this;
      let str = "";
      switch (level) {
        case "初级":
          str = "2";
          break;
        case "中级":
          str = "1";
          break;
        case "高级":
          str = "3";
          break;
        default:
          _self.$toast("等级查询失败");
      }
      return str;
    },
    //用于映射报名系统中的level与缴费系统中的level
    formatLevel2(level) {
      const _self = this;
      let str = "";
      switch (level) {
        case "初级":
          str = 1;
          break;
        case "中级":
          str = 2;
          break;
        case "高级":
          str = 3;
          break;
        default:
          _self.$toast("等级查询失败");
      }
      return str;
    },
    formatProject() {
      var projectList = [];
      if (this.isIntermediate) {
        for (var i = 0; i < this.projectArr.length; i++) {
          projectList.push({
            itemName: this.projectArr[i]
          });
        }
        return projectList;
      }else{
        return [{}];
      }
    },
    testAmount(){
      var _self = this;
      if(_self.isJunior){
        return 2;
      }else if(_self.isIntermediate){
        return _self.projectArr.length*1;
      }
    }
  }
};
</script>

<style>
html,
body {
  min-height: 100%;
}
</style>
<style lang="less" scoped>
.confirmationInformation {
  background: #F1F3F6;
  height: 100%;

     .example-popup_1 {
      width: 4rem;
      border-radius: 0.16rem;
      padding: 0.4rem;
      transform: translate(-50%, 0);
      }



  .confirmationInformationContent {
    .from {
      background: #fff;
      margin-bottom: 1rem;
      margin-top: 0.2rem;
      li {
        height: 1rem;
        padding: 0 0.36rem;
        p {
          &:after {
            content: "";
            display: block;
            clear: both;
          }
          text-align: left;
          line-height: 1rem;
          span {
            float: right;
          }
        }

        &.friendlyReminder {
          height:auto !important;
          padding: 0.1rem 0.36rem;

          p {
            color: red;
            font-size: 0.2rem;
            text-align: left;
            line-height: 0.4rem;
          }
        }
      }
    }
    .btns {
      button {
        width: 2.6rem;
        height: 0.9rem;
        margin: 0 0.34rem;
      }
      label {
        font-size: 0.32rem;
      }
    }
  }
}
</style>
