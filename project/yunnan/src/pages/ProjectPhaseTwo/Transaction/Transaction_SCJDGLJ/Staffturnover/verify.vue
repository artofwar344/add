<template>
  <div class="example-popup">
    <Popupprompt
      lockScroll
      v-model="popupVisible6"
      :close-on-click-modal="false"
      :title="content2.title"
      :text="content2.text"
      :confirm-btn="{}"
      :cancel-btn="{}"
      :btn-list="content2.btnList"
      @click="clickbtn2"
    >
      <div slot="othercontent">
        <div v-if="table == 0">
          <Field
            :propserror="errorText"
            :error="errorTextInfo"
            desc-class="richText"
            type="text"
            label="备案联络员"
            :value="entName"
            placeholder="请输入备案联络员"
            readonly
          ></Field>
          <Field
            :propserror="errorText"
            :error="errorTextInfo"
            desc-class="richText"
            type="text"
            label="备案身份证"
            :value="textValue"
            v-model="textValue"
            placeholder="请输入备案身份证"
          ></Field>
        </div>
        <Field
          :propserror="errorText"
          :error="errorTextInfo"
          desc-class="richText"
          type="text"
          label="备案手机号"
          :value="telePhoneNo"
          placeholder="请输入验证码"
          readonly
        >
          <span class='time' :class="color?'':'color'" @click="verification">{{content}}</span>
        </Field>
        <Field
          :propserror="errorText"
          :error="errorTextInfo"
          desc-class="richText"
          type="text"
          label="短信验证码"
          v-model="code"
          placeholder="请输入短信验证码"
          required
        ></Field>
      </div>
    </Popupprompt>
  </div>
</template>
<style lang="less" scoped>
.hui-field {
  padding: 5px 5px;
}
.time {
  padding-left: 0.1rem;
}
.color {
  color: #00ace6;
}
</style>
<style>
.hui-toast.is-placemiddle {
  z-index: 999999;
}
</style>

<script>
export default {
  data() {
    return {
      color:false,
      content: "获取验证码",
      valCode: "",
      totalTime: 60,
      textValue: "",
      canClick: true,
      popupVisible6: true,
      code: "",
      content2: {
        title: "联络员备案信息验证",
        // text:"请编辑输入框中的联络员备案信息，调整为您想要变更的内容，然后点击“保存”按钮。",
        btnList: [
          {
            id: "btn1",
            text: "认证",
            primary: true
          },{
                 id: "btn2",
                 text: "关闭",
                 primary: false
             }, 
        ]
      }
    };
  },
  created() {
    console.log(this.entName);
    console.log(this.table);
  },
  methods: {
    clickbtn2(id) {
      if(id != 'btn1'){
        this.$emit('submit','111')
        return
      }
      if (this.table != "1") {
        if (
          this.textValue == "" ||
          this.textValue == undefined ||
          this.textValue == null
        ) {
          this.$toast("备案身份证不能为空！");
          return;
        } else if (!this.$VerifyCardId.test(this.textValue)) {
          this.$toast("备案身份证不正确！");
          return;
        }
      }
      
      if (this.code == "" || this.code == undefined || this.code == null) {
        this.$toast("短信验证码不能为空！");
        return;
      } else if (this.code == this.valCode && this.table == "0") {
        this.$router.push("/stafftunoverconent");
        return;
      } else if (this.code == this.valCode && this.table == "1") {
        // alert(3)
        this.$emit('submit','one')
        this.$router.push("/stafftunoverconent");
        return;
      } else {
        this.$toast("请填写正确的验证码！");
        return;
      }
      
    },
    verification() {

      if (!this.telePhoneNo) {
        this.$toast("手机号码不能为空！");
        return;
      }
     
      if (!this.canClick) return; //改动的是这两行代码
       this.color = true
      this.canClick = false;
      this.content = this.totalTime + "s后重新发送";
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.content = this.totalTime + "s后重新发送";
        if (this.totalTime < 0) {
           this.color = false
          window.clearInterval(clock);
          this.content = "重新获取";
          this.totalTime = 10;
          this.canClick = true; //这里重新开启
        }
      }, 1000);
      const data = {
        txnCommCom: {
          tRecInPage: "0",
          tPageJump: "0",
          txnIttChnlId: "1"
        },
        txnBodyCom: {
          loginId:
            window.sessionStorage.getItem("loginid"),
          entName: this.entName,
          telePhoneNo: this.telePhoneNo,
          matter_id: window.sessionStorage.getItem("matterId")
        }
      };
      this.$ajaxRequest("post", "/gsp/mng30074", data)
        .then(res => {
          console.log(res);
          this.valCode = res.result[0].valCode;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  props: ["entName", "telePhoneNo", "table"]
};
</script>
