<template>
  <div>
    <towtop :name="titlename"/>
    <div>
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
      <div class="announce">
        <div class="header">
          <div class="blueline"></div>注
        </div>
        <p>查询密码为考生在报名时自行设置，如遗忘请进入考生报名用户查询。</p>
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
      titlename: "云南省成人高考成绩查询",
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
        "adultExamScoreResult?cardid=" + window.sessionStorage.getItem("cardid")
      );
    }
  },
  methods: {
    query: function() {
      var regex = /^\d{12}$/g;
      if (this.number == "") {
        this.$toast("请输入准考证号");
        return;
      } else if (!regex.test(this.number)) {
        this.$toast("请输入12位准考证号");
        return;
      } else if (this.password == "") {
        this.$toast("请输入查询密码");
        return;
      } else {
        this.$router.push(
          "adultExamScoreResult?number=" +
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
  .littlestarbig{
    position: relative;
  }
  .littlestar{
    display: inline-block;
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.1rem;
    top: 0.36rem;
  }

</style>
