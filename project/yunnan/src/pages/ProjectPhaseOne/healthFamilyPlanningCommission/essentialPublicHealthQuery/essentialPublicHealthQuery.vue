<template>
  <div class="essentialPublicHealthQuery">
    <myheader :my-header="headerData"></myheader>
    <div class="imgList">
      <img :src="item.imgUrl" alt="" v-for="item in imgData" :key="item.imgUrl">
    </div>
    <ul class="listWrap">
      <li class="liWrap" v-for="item in listData" :key="item.imgUrl">
        <div class="question">
          <span class="rect"></span>
          {{item.question}}
          </div>
        <div class="answer">{{item.answer}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import phone from "@/assets/phone.png";
import { cenurl } from "../../../../components/toptow.js";

export default {
  data() {
    return {
      headerData: {
        title: "国家基本公共卫生服务项目查询",
        backUrl: "/"
      },
      imgData: [],
      listData: []
    };
  },
  created() {
    let _self = this;
    // console.log(this)
    let setdata = {
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "2",
        tStsTraceId: "110567890"
      },
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        chann_id: "123"
      }
    };
    this.$ajaxRequest("post", "/gsp/mng70034", setdata)
      .then(res => {
        console.log(res);
          _self.imgData = res.ImgList;
          _self.listData = res.List;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {},
  components: {
    myheader: Header
  },
  methods: {}
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
.essentialPublicHealthQuery {
  background: #ccc;
}
.imgList img {
  width: 100%;
}
.listWrap {
  width: 100%;
  text-align: left;
  background: white;
  padding: 0.36rem;
  box-sizing: border-box;
}
.listWrap .liWrap {
  margin-top: 0.36rem;
}
.listWrap .question {
  font-weight: bold;
  font-size: 0.28rem;
}
.listWrap .question .rect {
  display: inline-block;
  width: 0.04rem;
  height: 0.28rem;
  background: #257bff;
  margin-right: 0.2rem;
}
.listWrap .answer {
  font-size: 0.28rem;
  color: #666;
  margin-top: 0.2rem;
}
</style>
