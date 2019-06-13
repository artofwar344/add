<template>
  <div>
    <towtop :name="titlename"/>
    <div class="input_box">
      <label>考生姓名</label>
      <span>{{datatext.xm}}</span>
    </div>
    <div class="input_box">
      <label>准考证号</label>
      <span>{{datatext.kh}}</span>
    </div>
    <div class="input_box">
      <label>{{datatext.km1}}</label>
      <span v-bind:class="datatext.cj1 == '合格'?'blue-font':'red-font'">{{datatext.cj1}}</span>
    </div>
    <div class="input_box">
      <label>{{datatext.km2}}</label>
      <span v-bind:class="datatext.cj2 == '合格'?'blue-font':'red-font'">{{datatext.cj2}}</span>
    </div>
    <button class="commonBtn" @click="toHome()">返回首页</button>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  name: "teacherScoreResult",
  data: function() {
    return {
      titlename: "云南省高校教师资格笔试成绩查询",
      datatext: "",
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
        service: "ynzsks0003",
        type: this.type
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
  },
  methods: {
    toHome: function() {
      this.$router.push("indexlist");
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../../assets/css/teacherScore.less";
</style>
