<template>
  <div>
    <towtop :name="titlename"/>
    <div class="examAdmission">
        <ul>
          <li><label>准考证号</label><span>{{datatext.zkzh}}</span></li>
          <li><label>考生姓名</label><span>{{datatext.xm}}</span></li>
          <li><label>科类名称</label><span>{{datatext.km}}</span></li>
        </ul>
      <div class="schoolInfo">
          <div>
            <p>录取批次</p>
            <p>{{datatext.pcmc}}</p>
          </div>
        <div>
          <p>录取院校</p>
          <p>{{datatext.yxmc}}</p>
        </div>
        <div>
          <p>录取专业</p>
          <p>{{datatext.zymc}}</p>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  name: "examAdmissionResult",
  data: function() {
    return {
      titlename: "普高录取查询",
      datatext: "",
      number: "",
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
        service: "ynzsks0005",
        type: this.type
      }
    };
    this.$ajaxRequest("post", "/gsp/mng70015", setdata, false, false, true)
      .then(res => {
        console.log(res);
        this.datatext = res;
        if (!res.zkzh) {
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
