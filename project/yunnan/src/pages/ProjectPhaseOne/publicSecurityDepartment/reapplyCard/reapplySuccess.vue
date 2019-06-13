<template>
  <div class="reapply-result">
    <towtop :name="titlename"/>
    <div v-if="isShow">
      <div class="main">
        <div class="infoImg"></div>
        <div class="infoTitle">申办成功</div>
        <div class="infoText">恭喜您，您的在线申请符合要求
          <br>请及时支付补办身份证工本费
        </div>
      </div>
      <mybutton v-if="!isNext" :btnData="btnData" @click="next()"/>
      <mybutton v-if="isNext" :btnData="btnData2" @func1="gotoWait" @func2="payAgain" />
    </div>
    <Popup
      modal-fade="true"
      v-model="popupVisible1"
      popup-transition="popup-fade"
      class="example-popup_1"
      :close-on-click-modal="false"
    >
      <Icon type="loading" size="32"></Icon>
      <p>{{seconds}}秒</p>
      <p>{{loadText}}</p>
    </Popup>
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
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
import { setInterval, clearInterval } from "timers";
import { mapGetters } from "vuex";
import BasicFormSubmit from "@/utils/BasicFormSubmit";
export default {
  data() {
    return {
      titlename: "申请补办身份证",
      btnData: [
        {
          text: "支付",
          disabled: false,
          isSure: true
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
						text:'重新支付',
						disabled: false,
						isSure: true,
            click:'func2'
					}
				],
      popupVisible1: false,
      toastInstance: "",
      seconds: 0,
      countdownNumber: 90, //90
      loadText: '请稍候...',
      isShow: false,
      isNext:false,
      sendData:{},
      orderId:"",
      orderNo: "", //支付订单号
      appId: "", //支付跳转小程序appid
      pagePath: "", //支付跳转小程序页面
    };
  },
  components: {
    towtop,
    mybutton
  },
  computed: {
    ...mapGetters("reapplyStore", ["workId", "sendDataSave"])
  },
  created() {
    window.MiniProgramCallBack = this.MiniProgramCallBack;
    this.sendData = this.sendDataSave;
    console.log(this.sendData);
    console.log(this.workId);

     this.checkInfoGAT()
  },
  mounted() {
     this.loading();
  },
  methods: {
    loading() {
      var _self = this;
      _self.seconds = _self.countdownNumber;
      _self.popupVisible1 = true;
      _self.timer = setInterval(function() {
        if (_self.seconds == 0) {
          clearInterval(_self.timer);
          _self.popupVisible1 = false;
        } else {
          _self.seconds--;
        }
      }, 1000);
    },
    next() {
      this.submitData();
    },
    // 核验申请人是否合格
    checkInfoGAT() {
      const _self = this

      _self.loadText = '补办条件核验中，请稍候...'

      let formData = {
        txnCommCom: {},
        txnBodyCom: {
          deptid: _self.sendData.registerCode,
          sfzh: _self.sendData.idcard,
          matter_id: sessionStorage.getItem("matterid"),
        }
      }

      _self.$ajaxRequest('post', '/gsp/mng90057', formData).then(rep => {
        console.log(rep)
        if (rep.code === '10') {
          clearInterval(_self.timer)
          _self.popupVisible1 = false  // 合格
          _self.isShow = true
        } else if (rep.code === '-20') {
          this.$router.push({name: 'reapplyFail', params: {msg: rep.msg}})  // 不合格
        }

        // 处理接口错误类问题
        if (rep['C-API-Status']) {
          this.$router.push({name: 'reapplyFail', params: {msg: '系统繁忙，请稍后重试...'}})
        }
      })
    },
    //appForm00001提交
    submitData() {
      const _self = this;
      _self.isNext = true;
      console.log(_self.sendData);
      let formSendData = {
        sendData: {
          work_id: _self.workId,
          matter_id: sessionStorage.getItem("matterid"),
          deptId: _self.sendData.registerCode,
          guid: "",
          matNum: "hz-14",
          isMailMertal: "N",
          tskSource: "HZ",
          accountId: _self.sendData.phone,
          netProjectType: "BST",
          hzYwlx: "hz_sfz_sjsl",
          sqr: _self.sendData.name,
          idNum: _self.sendData.idcard,
          applyType: "1",
          matSubType: "",
          formInfo: {
            zsqh: _self.sendData.cityCode, //"530600",
            hjdz_ssxqdm: _self.sendData.countyCode,
            sqd_gajgdwdm: _self.sendData.registerCode, //"530622440000",
            tsk_id: "",
            sub_time: dateFormat(new Date(), "yyyy-MM-dd HH:mm:ss"),
            xm: _self.sendData.name,
            gmsfhm: _self.sendData.idcard,
            lxdh: _self.sendData.phone,
            jmsfzslyydm: _self.sendData.type,
            jmsfzlzfsdm: _self.sendData.lzfs,
            sjr_zddzbh: _self.sendData.selfCode, //"530113001000",
            sjr_zddzmc: _self.sendData.selfName, //"东川公安局",
            files: ""
          },
          manifests: [],
          mainTableName: "oi_hz_sfzbb",
          subTableNames: [],
          subFormInfo: []
        },
        callback: _self.payFor
      };
      console.log(formSendData, "this");
      
      this.loadText = '支付中，请稍候...'
      this.loading()

      BasicFormSubmit({
        WorkId: _self.workId,
        from: formSendData,
        file: {},
        noFile: true,
        callback: _self.payFor
      });
    },

    //统一下单
    payFor(data) {

      // 处理appForm0001的错误
      if (data === 'error') {
        this.$router.push({name: 'reapplyFail', params: {msg: '材料填写有误，请稍后重试...'}})
      }

      let _self = this;
      let sendData = {
        txnBodyCom: {
          payChannel: "1",
          payMode: "1",
          channelType: "1",
          tollData: {
            bizDesc: {
              fullName: _self.sendData.name,
              remark: ""
            },
            bizID: _self.workId,
            certificateType: 1,
            certificateNum: _self.sendData.idcard,
            telNumber: _self.sendData.phone,
            ticketInfo: {
              payer: _self.sendData.name
            },
            businessSiteNo: _self.sendData.registerCode,
            businessSiteName: _self.sendData.registerName,
            tollItemList: [{}],
          },
          matter_id: sessionStorage.getItem("matterid"),
          chann_id: "1",
          jmsfzslyydm: _self.sendData.type,
          workid:_self.workId,
          memberid:sessionStorage.getItem("userid"),
        }
      };

      _self.$ajaxRequest("post", "/gsp/mng30075", sendData).then(res => {
        console.log(res);
        clearInterval(_self.timer)
        _self.popupVisible1 = false
        if(res["C-API-Status"] == "01"){
          return;
        }

        _self.orderId = res.orderId;
        _self.orderNo = res.orderNo;
        _self.appId = res.appId; //支付跳转小程序appid
        _self.pagePath = res.pagePath;

        //通知状态为受理中
        _self.tellPayState();
        //跳转小程序
        _self.toMiniProgram();
      });
    },
    //通知状态为受理中
    tellPayState() {
      let payData = {
        txnBodyCom: {
          orderNo: this.orderNo, //支付交易订单号
          businessNo:this.orderId,//业务系统订单号
          payState: 5, //受理中,
          settleDate: dateFormat(new Date(), "yyyyMMdd"),
        }
      };
      this.$ajaxRequest("post", "/gsp/mng99501", payData).then(res => {
        console.log(res);
      });
    },
    gotoWait(){
      this.$router.push("/reapplyWait");
    },
    payAgain(){
      this.payFor();
    },
    //跳转小程序
    toMiniProgram() {
      var _self = this;
      console.log("跳转小程序");

      let miniData = {
        path: _self.pagePath,
        miniProgramType: 0,
        userName: _self.appId
      };
      _self.$CallModule("miniProgram", miniData);
    },
    //小程序回调函数
    MiniProgramCallBack() {
      this.$router.push("/reapplyWait");
    }
  }
};
</script>
<style lang="less" scoped>
.reapply-result {
  .example-popup_1 {
    width: 4rem;
    border-radius: 0.16rem;
    padding: 0.4rem;

    p {
      margin-top: 0.2rem;
    }
  }
  .main {
    background: #fff;
    box-shadow: 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.08);
    border-radius: 0.2rem;
    padding: 1.12rem 0.3rem;
    margin-bottom: 1rem;

    .infoImg {
      width: 3.94rem;
      height: 3.04rem;
      background-image: url("../../../../assets/images/reapply-success@2x.png");
      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        background-image: url("../../../../assets/images/reapply-success@3x.png");
      }
      background-size: 3.94rem auto;
      background-repeat: no-repeat;
      margin: 0 auto 0.86rem;
    }
    .infoTitle {
      font-size: 0.34rem;
      color: #08c173;
      font-weight: bold;
      line-height: 0.6rem;
    }
    .infoText {
      font-size: 0.24rem;
      color: #999999;
      text-align: center;
      line-height: 0.4rem;
    }
  }
}
</style>


