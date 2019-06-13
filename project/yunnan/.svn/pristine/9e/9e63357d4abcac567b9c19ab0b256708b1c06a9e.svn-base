<template>
  <div class="MIResultPage">
    <myheader :my-header="headerData"></myheader>
    <div class="MIResultPageContent">
      <div :class="['MIResultPageBox', resultTypeClass]">
        <img :src="ImgUrl" alt="">
        <h4>{{resultType}}</h4>
        <p>{{resultDetails}}<span>{{insuranceNum}}</span></p>
      </div>
      <!-- <div class="friendlyReminder">
        <h4>温馨提示</h4>
        <p>{{pushInformation}}</p>
      </div> -->
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from '@/components/header/header'
import successIMg from '@/assets/images/bureauFinance/RegistrationAccountingExamination/successImg.png'
import errorIMg from '@/assets/images/medicalInsurance/errorImg.png'

export default {
  data () {
    return {
      params: this.$route.params,
      headerData: {
        title: '医疗保险参保登记结果',
        backUrl: ''
      },
      successIMg,
      errorIMg,
      resultType: '',
      resultDetails: '',
      pushInformation: '',
      insuranceNum: ''
    }
  },
  created () {
    const _self = this
    // _self.ImgUrl()
    //裕农通APP功能，勿删！
    if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
      PJF.ynt.A0161G058()
    }
  },
  mounted () {
  },
  computed: {
    ImgUrl () {
      const _self = this
      let ImgUrl = ''
      if (this.params.zt == true) {
        ImgUrl = _self.successIMg
        _self.initPage('1')
      } else {
        _self.initPage('0')
        ImgUrl = _self.errorIMg
      }
      return ImgUrl
    },
    resultTypeClass () {
      const _self = this
      let className = ''
      if (_self.ImgUrl === _self.successIMg) {
        className = 'success'
      } else {
        className = 'defeat'
      }
      return className
    }
  },
  components: {
    myheader: Header
  },
  methods: {
    initPage (type) {
      const _self = this
      if (type === '1') {
        _self.resultType = '参保登记成功'
        // _self.resultDetails = '个人编号：'
        _self.resultDetails = '个人医保编号请到我的办事中查看'
        // _self.insuranceNum = this.params.stateNum
      } else {
        _self.resultType = '参保登记失败'
        _self.resultDetails = '请检查提交文件是否符合要求'
      }
      
      // _self.pushInformation = this.params.stateMsg
    },
    getData () {
      const _self = this
      console.log(_self)
    }
  }
}
</script>

<style>
  html,body{min-height:100%;}
</style>
<style lang="less" scoped>
  .MIResultPage {
    background: #eee;
    height:100%;
    .MIResultPageContent{
      margin-top: 1.32rem;
      .MIResultPageBox{
        text-align: center;
        margin-bottom: .96rem;
        padding: 0 .86rem;
        img{width:3.48rem;margin-bottom: .3rem;}
        h4{font-size: .34rem;margin-bottom: .08rem;}
        p{font-size: .34rem;}
      }
      .success {
        h4{color:#2D7FFC;}
        p{
          color:#2D7FFC;
          span{color:red}
        }
      }
      .defeat{
        h4{color:#333;}
        p{color:#3F3F3F;font-size: .28rem;}
      }
      .friendlyReminder{
        background: #E4E7EA;
        text-align: left;
        margin: 0 .36rem;
        padding: .28rem .32rem;
        h4{font-size: .3rem;margin-bottom: .24rem;border-left: .06rem solid #257BFF;padding-left: .16rem;}
        p{font-size: .24rem;}
      }
    }
  }
</style>
