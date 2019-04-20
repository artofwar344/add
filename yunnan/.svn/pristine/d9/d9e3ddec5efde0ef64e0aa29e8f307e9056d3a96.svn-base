<template>
  <div class="cultrue">
    <towtop :name="hadertow"/>
    <div class="cultruecen_box">
      <div>
        <span class="c_b_tit">
          <i></i>昆明市博物馆
        </span>
        <ul>
          <li>
            <span class="title">详细地址</span>
            <span class="content">云南省昆明市拓东路93号</span>
          </li>
          <li>
            <span class="title">开放时间</span>
            <span class="content">9:30-16:30</span>
          </li>
          <li>
            <span class="title">乘车路线</span>
            <span class="content">210路、911路博物馆站下车</span>
          </li>
          <li>
            <span class="title">联系方式</span>
            <span class="content">010-87210012</span>
          </li>
        </ul>
      </div>
      <div>map</div>
      <div>
        <p>昆明市博物馆位于中国云南省昆明市城区东部的拓东路东段，占地面积2万平方米，为地志性的综合博物馆（属国家三级博物馆 Ώ] ），于1997年9月29日建成开馆。所在地为地藏寺旧址，故名“地藏寺经幢”，俗称“古幢”。</p>
      </div>
    </div>
    <!-- <div class="example-select_btn-wrapper">
			<Btn plain block @click.stop="submitBtn">查询</Btn>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submitBtn"/>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
import mybutton from "../../../../components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      hadertow: "昆明市博物馆"
    };
  },
  created() {
    let setdata = {
      matter_id: window.sessionStorage.getItem("matterid"),
      area: this.$route.query.confirmValSelect,
      ctype: this.$route.query.confirmValSelect01,
      cname: this.$route.query.confirmValSelect01
    };
    this.$ajaxRequest("post", "/atter/museums", setdata)
      .then(res => {
        console.log(res);
      })
      .catch(response => {});
  },
  components: {
    mybutton,
    towtop
  }
};
</script>

<style scoped lang="less">
@import "style.less";
</style>