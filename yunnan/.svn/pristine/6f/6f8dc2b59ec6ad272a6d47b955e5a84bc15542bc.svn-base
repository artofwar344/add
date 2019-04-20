<template>
    <div>
      <towtop :name="titlename"/>
      <div class="imgBox">
      <!-- <iframe name="myiframe" id="myrame" :src="datatext.imageurl" frameborder="0" align="left" width="100%" height="100%" scrolling="no"></iframe>         -->
      </div>
      <button class="commonBtn" @click="toHome()">返回首页</button>
    </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  name: "examScoreResult",
  data: function() {
    return {
      titlename: "普通高考成绩查询",
      datatext: "",
      zkzh: "",
      cardid: "",
      cxmm: "",
      type: ""
    };
  },
  components: {
    towtop
  },
  methods: {
    toHome: function() {
      this.$router.push("indexlist");
    }
  },
  mounted() {
    var instance = this.$toast({
        message: '加载中...',
        iconType: 'loading',
        manualClose: true
      });
    this.zkzh = this.$route.query.zkzh;
    this.cardid = this.$route.query.cardid;
    this.cxmm = this.$route.query.cxmm;
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
        cxmm: this.cxmm,
        service: "ynzsks0004",
        type: this.type
      }
    };
    this.$ajaxRequest("post", "/gsp/mng70015", setdata, false, false, true)
      .then(res => {
        console.log(res);
        this.datatext = res;
        if (!res.imageurl) {
          if (this.type == 0) {
            //登录用户未找到数据
            this.$toast("系统未找到您的考试数据，请核对是否参加考试！");
          } else {
            //输入了错误的考号或密码
            this.$toast("系统提示没有查到相关数据，请输入正确的考号和密码！");
          }
        }else{
          window.location.href=this.datatext.imageurl
        }
      })
      .catch(response => {});
  }
};
</script>

<style lang='less' scoped>
.imgBox {
  height: 12rem;
  background-color: #fff;
}
.commonBtn {
  margin-top: 0.3rem;
}
</style>
