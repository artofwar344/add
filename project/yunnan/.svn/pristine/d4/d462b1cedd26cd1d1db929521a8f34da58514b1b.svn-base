<template>
  <div>
    <towtop :name="titlename"/>
    <div class="examAdmission">
      <ul>
        <li><label>准考证号</label><span>{{datatext.ksbh}}</span></li>
        <li><label>考生姓名</label><span>{{datatext.xm}}</span></li>
      </ul>
      <div class="graduateExam">
        <ul>
          <li><label>{{datatext.km1}}</label><span>{{datatext.cj1}}</span></li>
          <li><label>{{datatext.km2}}</label><span>{{datatext.cj2}}</span></li>
          <li><label>{{datatext.km3}}</label><span>{{datatext.cj3}}</span></li>
          <li><label>{{datatext.km4}}</label><span>{{datatext.cj4}}</span></li>
          <li><label>总分</label><span>{{datatext.zf}}</span></li>
        </ul>
      </div>

    </div>
    <div class="announce">
      <div class="header"><div class="blueline"></div>考生注意：</div>
      <p>在录取期间，要密切注意云南省招生频道上（www.ynzs.cn）的通知。</p>
      <p>1、现将初试成绩通知你；成绩通知单不另寄发；</p>
      <p>2、国家分数线划定之前，请勿来电来人；</p>
      <p>3、如果你的成绩达到分数线并满足复制相关要求，你报考的招生单位会及时通知你参加复试。</p>
    </div>
  </div>

</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  data: function() {
    return {
      titlename: "硕士研究生初试成绩查询",
      datatext: "",
      zkzh: "",
      cardid: "",
      type: "",
      password: ""
    };
  },
  components: {
    towtop
  },
  mounted() {
    this.zkzh = this.$route.query.zkzh;
    this.cardid = this.$route.query.cardid;
    this.password = this.$route.query.password;
    if (window.sessionStorage.getItem("cardid") != "null") {
      this.type = "0";
    } else {
      this.type = "1";
    }

    let setdata = {
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "3",
        tStsTraceId: ""
      },
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        chann_id: "1",
        id: this.cardid,
        zkzh: this.zkzh,
        cxmm: this.password,
        service: "ynzsks0001",
        type: this.type
      }
    };
    this.$ajaxRequest("post", "/gsp/mng70015", setdata, false, false, true)
      .then(res => {
        console.log(res);
        this.datatext = res;
        if (!res.ksbh) {
          if (this.type == 0) {
            //登录用户未找到数据
            this.$toast("系统未找到您的考试数据，请核对是否参加考试！");
          } else {
            //输入了错误的考号或密码
            this.$toast("系统提示没有查到相关数据，请输入正确的考号和密码！");
          }
        }
      })
      .catch(response => {});
  }
};
</script>

<style lang='less' scoped>
@import "../../../../assets/css/examAdmission.less";
</style>

