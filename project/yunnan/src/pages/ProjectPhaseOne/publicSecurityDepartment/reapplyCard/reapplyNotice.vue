<template>
  <div class="reapply-notice">
    <towtop :name="titlename"/>
    <div class="main">
        <div class="header">申领须知</div>
        <div>
            <p>居民身份证手机客户端网上申领业务是云南省人民政府在推进“互联网+政务服务”的基础上，针对已申领过二代身份证并登记过有效指纹信息的云南籍居民，为方便其因身份证遗失、损坏的原因再次申领，在“一部手机办事通”业务平台上推出的一项便民服务。申办人如需通过本平台补领或换领居民身份证，请认真阅读以下须知：</p>
            <p><span class="strong">申办条件</span>通过手机客户端申领居民身份证的群众，仅限身份证遗失补领或损坏换领两种情况，且必须同时具备以下条件：</p>
            <p>1、申办人户籍所在地限云南省内；</p>
            <p>2、年满十六周岁；</p>
            <p>3、距离当前日期两年内在居民身份证受理点申领过二代身份证并登记过有效指纹信息且本人户籍信息未发生过变动的。</p>
            <p><span class="strong">操作流程及要求</span>申办人在手机客户端进行居民身份证的申领，必须由本人按照本平台的流程要求进行操作。</p>
            <p>申办人登录平台进行身份认证，通过有拍照和摄像功能的手机采集实时视频人像进行身份核验，核验无误后在本平台上按流程填报信息，确认信息无误后方可提交申请。</p>
            <p><span class="strong">收费标准及承诺</span>根据《国家发展改革委、财政部关于居民身份证收费标准及有关问题的通知》【发改价格﹝2003﹞2322号】规定，对丢失补领或损坏换领第二代居民身份证的居民收取工本费每证40元。</p>
            <p>为确保平台的受理时效，申办人应尽快在平台上完成电子付款操作，不支持现金支付；付款后因系统原因导致证件不能受理的，受理机关负责退款。</p>
            <p><span class="strong">证件制发信息声明</span>通过手机端平台受理的制证照片和指纹信息均沿用最近一次公安机关制发的证件信息（申请中所提交的视频人像仅用于受理机构审核比对）。</p>
            <p><span class="strong">证件领取及核验</span>通过手机客户端申领的居民身份证，自平台确认受理成功后，30天内须由本人到选定场所或设备上，经过指纹核验后方可领取。申请原因为损坏换领的，领证时需交回损坏证件。</p>
            <p>具体领取方式有：自助取证机领取；申办人户籍所在地派出所领取；云南省公安厅居民身份证办证接待大厅（昆明市安康路201号）领取。不支持个人邮寄。</p>
            <p><span class="strong">免责声明</span>受理平台维护、升级暂停服务，平台将事先公告，因此导致的服务延时，受理平台免责；因网络攻击或不可抗力导致的暂停服务或个人信息泄露、丢失或其他后果，受理平台免责。</p>
        </div>
    </div>
    <mybutton :btnData="btnData" @click="next" />
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data: function() {
    return {
      titlename: "申请补办身份证",
      btnData:[
					{
						text:'下一步',
						disabled: false,
						isSure: true,
					}
				],
      idcard:sessionStorage.getItem('cardid')
    };
  },
  components: {
    towtop,
    mybutton
  },
  created(){
    var _self = this;
    if (this.$route.query.WorkId) {
      _self.setWorkId(_self.$route.query.WorkId);
    } 
  },
  computed: {
    ...mapGetters("reapplyStore", [
      "workId",
      "sendDataSave",
      "pageDataSave"
    ])
  },
  methods: {
    ...mapMutations("reapplyStore", [
      "setSendData",
      "setPageData",
      "setWorkId"
    ]),
    next() {
        if(this.testAge(this.idcard)){
            this.$toast("您好，您未满16周岁，请至户籍所在地派出所申请补办身份证。")
            return;
        }
        this.$router.push("/reapplyInfo");
    },
    testAge(cardNum) {
      const getNowAge = cardNum => {
        let nowAge = "";
        const birthday = cardNum.substring(6,14);
        const day =
          new Date().getDate() < 10
            ? `0${new Date().getDate()}`
            : `${new Date().getDate()}`;
        const month =
          new Date().getMonth()+1 < 10
            ? `0${new Date().getMonth()+1}`
            : `${new Date().getMonth()+1}`;
        let nowDay = `${new Date().getFullYear()}${month}${day}`;
        nowAge = `${parseInt(nowDay) - parseInt(birthday)}`;
        return nowAge.slice(0, 2);
      };
      let age = parseInt(getNowAge(cardNum));
      if(age<16){
          return true;
      }
      return false;
    }
  }
};
</script>

<style lang='less' scoped>
.reapply-notice {
  .main {
    background: #fff;
    padding: 0.34rem 0.44rem 0.24rem;
    margin-bottom: 1rem;

    .header {
      font-size: 0.36rem;
      text-align: center;
      margin-bottom: 0.34rem;
      font-weight: bold;
    }

    p {
      font-size: 0.28rem;
      color: #333333;
      text-align: left;
      text-indent: 2em;
      line-height: 0.5rem;
      margin-bottom: 0.2rem;

      .strong{
        font-weight:bold;
      }
    }
  }
}
</style>
