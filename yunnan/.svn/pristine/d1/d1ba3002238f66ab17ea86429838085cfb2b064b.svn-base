<template>
  <div>
    <headtwo :name="headerData"></headtwo>
    <StafftunoverCent table="1" @showName="showtime" ref="const"></StafftunoverCent>

    <verify v-if="verify" table="1" @submit="submits" :entName="entName" :telePhoneNo="telePhoneNo"></verify>
    <div class="padTopAdd5 padBotAdd5">
      <mybutton :btnData="btnData" @click="showverify"/>
    </div>
    <hint></hint>

    <div>
      <Popupprompt
        v-model="popupVisible6"
        :title="content2.title"
        :text="content2.text"
        :confirm-btn="{}"
        :cancel-btn="{}"
        :btn-list="content2.btnList"
        @click="clickbtn2"
      ></Popupprompt>
    </div>
  </div>
</template>
<style lang="less" scoped>
</style>

<script>
import headtwo from "@/components/HederTwo";
import hint from "./hint";
import mybutton from "@/components/MyButton";
import StafftunoverCent from "./StaffturnoverCont";
import verify from "./verify";

export default {
  data() {
    return {
      popupVisible6: false,
      content2: {
        title: "提示",
        text: "变更成功！",
        btnList: [
          {
            id: "btn1",
            text: "确定",
            primary: true
          }
        ]
      },
      thisPhone: "",
      entName: "",
      telePhoneNo: "",
      uniScid: "",
      verify: false,
      liaisonCertNo: "",
      liaisonPersnName: "",
      btnData: [
        {
          text: "保存",
          disabled: false,
          isSure: true
        }
      ],
      headerData: "企业联络员变更"
    };
  },
  components: {
    mybutton,
    headtwo,
    StafftunoverCent,
    verify,
    hint
  },
  methods: {
    clickbtn2(id) {
      this.isAndroid_ios();
      console.log(id);
    },
    showtime(data) {
      console.log(data);
      console.log(this.$refs.const.iphoneadd);
      if (data.status == "已备案") {
        this.button = true;
        this.entName = data.entName;
        this.telePhoneNo = data.liaisonTelephone;
        this.uniScid = data.uniScid;
        this.liaisonCertNo = data.liaisonCertNo;
        this.liaisonPersnName = data.liaisonPersnName;
      }
    },
    showverify() {
      console.log(this.$refs.const.iphoneadd);

      if (this.$refs.const.iphone == "") {
        this.$toast("手机号不能为空！");
        return;
      } else if (!this.$VerifyPhone.test(this.$refs.const.iphone)) {
        this.$toast("手机号格式不正确");
        return;
      } else if (!this.$VerifyPhone.test(this.$refs.const.iphoneadd)) {
        this.$toast("确认手机号格式不正确");
        return;
      } else if (this.$refs.const.iphone != this.$refs.const.iphoneadd) {
        this.$toast("请确认正确的手机号");
        return;
      } else if (this.$refs.const.idcard == "") {
        this.$toast("身份证号不能为空");
        return;
      } else if (!this.$VerifyCardId.test(this.$refs.const.idcard)) {
        this.$toast("请输入正确的身份证号");
        return;
      } else {
        this.telePhoneNo = this.$refs.const.iphoneadd;
        this.verify = true;
      }
    },

    isAndroid_ios() {
      var u = navigator.userAgent,
        app = navigator.appVersion;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

      if (isiOS) {
        this.callisiOS();
      } else {
        this.callisAndroid();
      }
    },

    //ios
    callisiOS() {
      window.webkit.messageHandlers.PopToApp.postMessage('1');
    },

    callisAndroid() {
      javascript: android.PopToApp("1");
    },
    submits(val) {
      if (val != "one") {
        this.verify = false;
        return;
      }
      this.verify = false;

      let pages = {
        tRecInPage: "0",
        tPageJump: "0",
        txnIttChnlId: "1"
      };
      const data = {
        txnBodyCom: {
          work_id: sessionStorage.WorkId,
          matter_id: sessionStorage.matterid,
          member_id: sessionStorage.userid,
          json_content: {
            work_id: sessionStorage.WorkId,
            loginId: window.sessionStorage.getItem("loginid"),
            entName: this.$refs.const.enterprisename,
            liaisonTelephone: this.$refs.const.iphone,
            uniScid: this.$refs.const.unicode,
            liaisonPersnName: this.$refs.const.publishName,
            liaisonCertNo: this.$refs.const.idcard
          }
        }
      };
      this.$ajaxRequest("post", "/gsp/appForm00001", data, pages)
        .then(res => {
          console.log(res);
          console.log(res.result);
          this.popupVisible6 = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
