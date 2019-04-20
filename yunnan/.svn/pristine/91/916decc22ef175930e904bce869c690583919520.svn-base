<template>
  <div>
    <towtop :name="titlename"/>
    <div class="littlestarbig">
      <span class="littlestar">*</span>
      <div class="input_box">
        <label>准考证号</label>
        <input type="text" placeholder="请输入准考证号" v-model="number">
      </div>
    </div>
    <div class="littlestarbig">
      <span class="littlestar">*</span>
    <div class="input_box">
      <label>查询密码</label>
      <input type="password" placeholder="请输入查询密码" v-model="password">
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
  name: "index",
  data: function() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "云南省高校教师资格笔试成绩查询",
      number: "",
      password: "",
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
        "teacherScoreResult?cardid=" + window.sessionStorage.getItem("cardid")
      );
    }
  },
  methods: {
    query: function() {
      var regex = /^\d{13}$/g;
      if (this.number == "") {
        this.$toast("请输入准考证号");
        return;
      } else if (!regex.test(this.number)) {
        this.$toast("请输入13位准考证号");
        return;
      } else if (this.password == "") {
        this.$toast("请输入查询密码");
        return;
      } else {
        this.$router.push(
          "teacherScoreResult?number=" +
            this.number +
            "&password=" +
            this.password
        );
      }
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../../assets/css/teacherScore.less";
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
