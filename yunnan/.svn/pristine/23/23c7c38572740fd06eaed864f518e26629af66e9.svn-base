<template>
  <div class="invoiceCertificationQuery">
    <myheader :my-header="headerData"></myheader>
    <div class="invoiceCertificationQueryContent" id="invoiceCertificationQueryContent">
      <ul class="from">
        <div class="littlestarbig">
          <span class="littlestar">*</span>
        <li>
          <form @submit.prevent="submitEvent1">
            <Field type="text"  label="发票代码" placeholder="请输入发票代码" v-model="daima"></Field>
          </form>
        </li>
        </div>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
        <li>
          <form @submit.prevent="submitEvent2">
            <Field type="text"  label="发票号码" placeholder="请输入发票号码" v-model="haoma"></Field>
          </form>
        </li>
        </div>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
        <li>
          <form @submit.prevent="submitEvent2">
            <Field type="text"  label="开票日期" placeholder="请输入开票日期" v-model="date"></Field>
          </form>
        </li>
        </div>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
        <li>
          <form @submit.prevent="submitEvent2">
            <Field
              type="text"
              class="longerFrom"
              label="开具金额（不含税）"
              placeholder="请输入开具金额（不含税）"
              v-model="jine"
            ></Field>
          </form>
        </li>
        </div>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
        <li class="verificationCodeRow">
          <form @submit.prevent="submitEvent3">
            <Field type="text"  label="验证码" placeholder="请输入验证码" v-model="verificationCode">
              <div class="field-append_text vcBtn" slot="append">
                <img :src="verificationCodeUrl" alt>
                <Btn type="primary" @click.stop.prevent="getVerificationCode">重置</Btn>
              </div>
            </Field>
          </form>
        </li>
        </div>
      </ul>
      <!-- <div class="btns">
        <Btn type="primary" @click="queryData">查询</Btn>
      </div>-->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click="queryData"/>
      </div>
      <div class="friendlyReminder">
        <h5>温馨提示</h5>
        <ul>
          <li>1、首次查验前请点此
            <span @click="installCertificate">安装根证书。</span>
          </li>
          <li>2、当日开具发票最快可于次日进项查验。</li>
          <li>3、没分发票最多可查验5次。</li>
          <li>4、可查验最近一年内增值税发票管理新系统开具的发票。</li>
          <li>5、纳税咨询服务，可拨打12366。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import verificationCodeUrl from "@/assets/verificationCode.jpg";
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
      headerData: {
        title: "发票查验明细",
        backUrl: "/"
      },
      daima: "",
      haoma: "",
      date: "",
      jine: "",
      verificationCode: "",
      verificationCodeUrl
    };
  },
  created() {
    // console.log(this)
  },
  computed: {
    /* activeColor: function () {
     return
     } */
  },
  components: {
    mybutton,
    myheader: Header
  },
  methods: {
    submitEvent1: function() {
   
    },
    submitEvent2: function() {
  
    },
    submitEvent3: function() {
   
    },
    queryData: function() {
      let _self = this;
      _self.$router.push({
        path: "/",
        name: "增值税发票查验详情",
        params: {
          queryParams: {
            daima: _self.daima,
            haoma: _self.haoma,
            date: _self.date,
            jine: _self.jine
          }
        }
      });
    },
    getVerificationCode: function() {

    },
    installCertificate: function() {
 
    }
  }
};
</script>

<style  scoped>
html,
body,
#app {
  height: 100%;
}
.invoiceCertificationQuery {
  background: #ccc;
  height: 100%;
}
.invoiceCertificationQueryContent {
  padding-top: 0.2rem;
}
.from {
  background: #fff; /*height:3rem;*/
  margin-bottom: 1rem;
}
.from li {
  height: 1rem;
  padding: 0 0.36rem;
}
.from li form,
.hui-field {
  height: 100%;
}
.hui-field_title {
  text-align: left;
  font-size: 0.28rem;
  line-height: calc(1rem - 10px);
  width: 80px;
}
.longerFrom .hui-field_title {
  width: 2.8rem;
}
#invoiceCertificationQueryContent .hui-field_value {
  border: none;
}
.hui-field {
  padding-left: 0;
  padding-right: 0;
}
.hui-field .hui-field_border .hui-field_borderLeft {
  border: none;
}
.field-append_text img {
  height: 0.6rem;
}
.from label {
}
.vcBtn {
  width: 2.84rem;
}
.vcBtn button {
  font-size: 0.2rem;
  width: 0.8rem;
  height: 0.4rem;
  padding: 0;
  top: -0.15rem;
  right: -0.2rem;
}
.from input {
  text-align: right;
  font-size: 0.28rem;
}
.verificationCodeRow input {
  text-align: left;
}
.from span {
}
.btns {
  margin-bottom: 1.08rem;
}
.btns button {
  width: 5.9rem;
  height: 0.9rem;
}
.btns label {
  font-size: 0.32rem;
}
/***********/
.friendlyReminder {
  text-align: left;
  margin: 0 0.36rem;
  background: #e4e7ea;
  padding: 0.28rem 0.36rem;
}
.friendlyReminder h5 {
  color: #333;
  font-size: 0.3rem;
  border-left: 0.06rem solid #257bff;
  margin-bottom: 0.24rem;
  padding-left: 0.16rem;
}
.friendlyReminder ul {
}
.friendlyReminder li {
  font-size: 0.24rem;
  color: #999;
}
.friendlyReminder span {
  color: #2d7ffc;
}
.littlestarbig{
  position: relative;
}
.littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0.1rem;
  top: 0.44rem;
}
</style>
