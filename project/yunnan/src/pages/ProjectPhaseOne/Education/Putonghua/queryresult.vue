<template>
    <div>
       <towtop :name="titlename"/>
       <div class="main" v-for="list in datatext">
            <div class="regional">
                <p><span>考试时间</span><span>{{list.testdate}}</span></p>
                <p><span>测试省份</span><span>{{list.provincename}}</span></p>
                <p><span>测试站</span><span>{{list.sitename}}</span></p>
            </div>
            <div class="regional personal">
                <p><span>姓名</span><span>{{list.name}}</span></p>
                <p><span>性别</span><span>{{list.gender}}</span></p>
                <p><span>分数</span><span>{{list.score}}</span></p>
                <p><span>等级</span><span>{{list.level}}</span></p>
                <img :src="'http://'+list.imageurl" alt="" class="img_fl">
            </div>
            <div class="regional certificate">
                <p><span>准考证号</span><span>{{list.stuid}}</span></p>
                <p><span>证书编号</span><span>{{list.centid}}</span></p>
                <p><span>身份证号</span><span>{{cardid}}</span></p>
            </div>
       </div>
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  components: {
    towtop
  },
  data() {
    return {
      titlename: "",
      datatext: "",
      cardid: "",
      nametext: "",
      numbercode: "",
      type: ""
    };
  },
  mounted() {
    this.parameter();
  },
  methods: {
    parameter() {
      this.titlename = this.$route.query.titlename;
      this.nametext = this.$route.query.nametext;
      this.cardid = this.$route.query.cardid;
      this.numbercode = this.$route.query.numbercode;
      if (window.sessionStorage.getItem("cardid") != "null") {
        this.type = "0";
      } else {
        this.type = "1";
      }
      let setdata = {
        txnCommCom: {
          tRecInPage: "11",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "1",
          name: this.nametext,
          idcard: this.cardid,
          stuid: this.numbercode
        }
      };
      this.$ajaxRequest("post", "/gsp/mng70014", setdata, false, false, true)
        .then(res => {
          console.log(res);
          if (res.tests.length == 0) {
            if (this.type == 0) {
              //登录用户未找到数据
              this.$toast("系统未找到您的考试数据，请核对是否参加考试！");
            } else {
              //输入了错误的考号或密码
              this.$toast("没有查询到相关信息！");
            }
          }else{
            this.datatext = res.tests;
          }
        })
        .catch(response => {});
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../../../assets/css/Affairs.less";
</style>
