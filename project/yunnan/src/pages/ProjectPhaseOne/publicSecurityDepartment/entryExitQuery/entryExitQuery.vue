<template>
  <div class="entryExitQuery">
    <myheader :name="headerData"></myheader>
    <div class="entryExitQueryContent" id="entryExitQueryContent">
      <ul class="from">
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field type="text"  label="受理编号" placeholder="请输入您的受理编号(20位)" v-model="ywbh">
            </Field>
          </div>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field type="text"  label="身份证号码" placeholder="请输入您的身份证号码" v-model="sfzh">
            </Field>
          </div>
        </li>
        <li class="verificationCodeRow">
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field type="text"  label="验证码" placeholder="请输入验证码" v-model="codeCheck">
              <RandomCode slot="prepend" :codeCheck="codeCheck" @getCode="getCode" ref="checkCode"></RandomCode>
            </Field>
          </div>
        </li>
      </ul>
      <!-- <div class="btns">
        <Btn type="primary" @click="goto">查询</Btn>
      </div>-->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click="goto"/>
      </div>
    </div>

  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from "@/components/HederTwo";
import RandomCode from "../../common/randomCode.vue";
import mybutton from "@/components/MyButton";
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
      headerData:"出入境业务办理进度查询",
      // headerData: {
      //   title: " 出入境业务办理进度查询",
      //   backUrl: "/"
      // },
      ywbh: "",
      sfzh: "",
      codeCheck: "",
      // verificationCodeUrl: verificationCode
    };
  },
  created() {
    // windwo.sessionStorage.setItem('cardid','123456789')
    this.sfzh = this.$NoNull(window.sessionStorage.getItem("cardid"))
    // this.test()
    // console.log(this)
  },
  computed: {
    /* activeColor: function () {
     return
     } */
  },
  components: {
    mybutton,
    myheader: Header,
    RandomCode
  },
  methods: {
    goto() {
      let _self = this;
      if (!_self.ywbh && !_self.sfzh) {
        this.$toast("请输入受理编号或身份证号");
        return;
      }
      if (_self.ywbh.length>20) {
        this.$toast("请输入20位受理编号");
        return;
      }
      if (_self.sfzh) {
        if (!_self.sfzh.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)) {
          this.$toast("请输入符合格式的身份证号");
          return false;
      }}
      if (!_self.$refs.checkCode.checkCode()) {
        return;
      }
      _self.$router.push({
        path: "/entryExitDetails",
        name: "查询出入境办理进度结果",
        params: {
          queryParams: {
            ywbh: _self.ywbh,
            sfzh: _self.sfzh
          }
        }
      });
    },
    getCode(code) {
      console.log(code, "code");
      this.codeCheck = code;
    }
  }
};
</script>

<style  scoped>
html,
body {
  height: 100%;
}
.entryExitQuery {
  background: #ccc;
  height: 100%;
}
.from {
  background: #fff;
  height: 3rem;
  margin-bottom: 1.86rem;
  margin-top: 0.2rem;
}
.from li {
  height: 1rem;
  padding: 0 0.36rem;
}
.from li form,
.entryExitQuery .hui-field {
  height: 100%;
}
.entryExitQuery .verificationCodeRow .hui-field{padding-top: 0;padding-bottom: 0;}
.hui-field_title {
  /*text-align: left;*/
  font-size: 0.28rem;
  line-height: calc(1rem - 10px);
  margin-left:0.28rem;
}
#entryExitQueryContent .hui-field_value {
  border: none;
}
.entryExitQuery .hui-field {
  /*padding-left: 0;*/
  padding-right: 0;
}
.hui-field .hui-field_border .hui-field_borderLeft {
  border: none;
}
.field-append_text img {
  height: 0.66rem;
}
.from input {
  text-align: right;
  font-size: 0.2rem;
}
.verificationCodeRow input {
  text-align: left;
}
.btns button {
  width: 5.9rem;
  height: 0.9rem;
}
.btns label {
  font-size: 0.32rem;
}
.middleone{
  position:relative;
}
.middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:36%;
  left:0;
}
</style>
