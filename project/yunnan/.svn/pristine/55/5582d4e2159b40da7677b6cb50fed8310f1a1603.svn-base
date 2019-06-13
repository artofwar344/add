<template>
  <div class="invoiceCertificationDedails">
    <myheader :my-header="headerData"></myheader>
    <div class="invoiceCertificationDedailsContent" id="invoiceCertificationDedailsContent">
      <div class="imgContent">
        <img :src="sucInvoice" v-if="isSuccess" alt="">
        <img :src="errInvoice" v-if="!isSuccess" alt="">
      </div>
      <div class="btns">
        <Btn type="primary" @click="gotoIndex">返回首页</Btn>
      </div>
      <div class="friendlyReminder">
        <h5>温馨提示</h5>
        <ul>
          <li>1、首次查验前请点此<span @click="installCertificate">安装根证书。</span></li>
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
import Header from '@/components/header/header'
import sucInvoice from '@/assets/images/taxBureau/invoiceCertificationQuery/sucInvoice.png'
import errInvoice from '@/assets/images/taxBureau/invoiceCertificationQUery/errInvoice.png'

export default {
  data () {
    return {
      headerData: {
        title: '发票查验明细',
        backUrl: '/invoiceCertificationQuery'
      },
      isSuccess: true,
      sucInvoice,
      errInvoice
    }
  },
  created () {
    // console.log(this)
  },
  computed: {
    /* activeColor: function () {
     return
     } */
  },
  components: {
    myheader: Header
  },
  methods: {
    submitEvent1: function () {
    },
    submitEvent2: function () {
    },
    submitEvent3: function () {
    },
    gotoIndex: function () {
      // let _self = this
    },
    getVerificationCode: function () {
    },
    installCertificate: function () {
    }
  }
}
</script>

<style  scoped>
  html,body,#app{height:100%;}
  .invoiceCertificationDedails{
    background: #ccc;
    height:100%;
  }
  .invoiceCertificationDedailsContent{padding-top: 0.2rem;height: calc(100% - 1.1rem)}
  .imgContent{margin-bottom: 1rem;}
  .imgContent img{width:6.78rem;margin: 0 auto;}
  /***********/
  .btns{margin-bottom: 1.08rem;}
  .btns button{width: 5.9rem;height:0.9rem;}
  .btns label{font-size: 0.32rem;}
  /***********/
  .friendlyReminder{text-align: left;margin: 0 0.36rem;background: #E4E7EA;padding: 0.28rem 0.36rem;position: absolute;bottom: 0.36rem;}
  .friendlyReminder h5{color:#333;font-size: 0.30rem;border-left: 0.06rem solid #257BFF;margin-bottom: 0.24rem;padding-left: 0.16rem;}
  .friendlyReminder ul{}
  .friendlyReminder li{font-size: 0.24rem;color:#999;}
  .friendlyReminder span{color:#2D7FFC;}
</style>
