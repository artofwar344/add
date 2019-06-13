<template>
  <div>
    <towtop :name="titlename"/>
    <div class="examAdmission">
      <ul>
        <li><label>准考证号</label><span>{{datatext.kh}}</span></li>
        <li><label>考生姓名</label><span>{{datatext.xm}}</span></li>
      </ul>
      <div class="graduateExam">
        <ul>
          <li><label>{{datatext.km1}}</label><span>{{datatext.cj1}}</span></li>
          <li><label>{{datatext.km2}}</label><span>{{datatext.cj2}}</span></li>
          <li><label>{{datatext.km3}}</label><span>{{datatext.cj3}}</span></li>
          <li><label>{{datatext.km4}}</label><span>{{datatext.cj4}}</span></li>
        </ul>
      </div>

    </div>
    
  </div>

</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  data: function() {
    return {
      titlename: "自学考试成绩查询",
      datatext: "",
      testtime: "",
      number: "",
      cardid: "",
      password: "",
      type: ""
    };
  },
  components: {
    towtop
  },
  mounted() {
    this.testtime = this.$route.query.testtime;
    this.number = this.$route.query.number;
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
        zkzh: this.number,
        cxmm: this.password,
        service: "ynzsks0008",
        type: this.type,
        year: this.testtime.toString()
      }
    };
    this.$ajaxRequest("post", "/gsp/mng70015", setdata, false, false, true)
      .then(res => {
        console.log(res);
        this.datatext = res;
        if (!res.kh) {
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

