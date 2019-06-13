<template>
  <div>
    <towtop :name="titlename"/>
    <div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>准考证号</label>
          <input type="text" placeholder="请输入准考证号" v-model="zkzh">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>查询密码</label>
          <input type="password" placeholder="请输入查询密码" v-model="cxmm">
        </div>
      </div>
      <div class="announce">
        <div class="header">
          <div class="blueline"></div>注
        </div>
        <p>1、全省文、理科前50名的考生分数已屏蔽，不提供查询；</p>
        <p>2、考生分数最终以成绩通知单为准；</p>
        <p>3、查询密码为考生在报名时自行设置，如有遗忘请进入考生报名用户查询。</p>
      </div>
    </div>
    <!-- <button class="commonBtn" @click="query()">查询</button> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="query"/>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
export default {
  data: function() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "普通高考成绩查询",
      zkzh: "",
      cxmm: "",
      cardid: ""
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    if (window.sessionStorage.getItem("cardid") != "null") {
      this.$router.push(
        "examScoreResult?cardid=" + window.sessionStorage.getItem("cardid")
      );
    }
  },
  methods: {
    query: function() {
      var regex = /^\d{9}$/g;
      if (this.zkzh == "") {
        this.$toast("请输入准考证号");
        return;
      } else if (!regex.test(this.zkzh)) {
        this.$toast("请输入9位准考证号");
        return;
      } else if (this.cxmm == "") {
        this.$toast("请输入查询密码");
        return;
      } else {
        this.$router.push(
          "examScoreResult?zkzh=" + this.zkzh + "&cxmm=" + this.cxmm
        );
      }
    }
  }
};
</script>

<style lang='less' scoped>
  .littlestarbig{
    position: relative;
  }
  .littlestar{
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.1rem;
    top: 0.36rem;
  }
</style>
