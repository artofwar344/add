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
          <label>身份证号</label>
          <input type="text" placeholder="请输入身份证号" v-model="password">
        </div>
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
      titlename: "中职、五年制高职招生录取查询",
      zkzh: "",
      cardid: "",
      password: ""
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    if (window.sessionStorage.getItem("cardid") != "null") {
      this.$router.push(
        "proHighAdmissionResult?cardid=" +
          window.sessionStorage.getItem("cardid")
      );
    }
  },
  methods: {
    query: function() {
      var regex = /^\d{13}$/g;
      if (this.zkzh == "") {
        this.$toast("请输入准考证号");
        return;
      } else if (!regex.test(this.zkzh)) {
        this.$toast("请输入13位准考证号");
        return;
      } else if (this.password == "") {
        this.$toast("请输入身份证号");
        return;
      } else {
        this.$router.push(
          "proHighAdmissionResult?zkzh=" +
            this.zkzh +
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
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.1rem;
    top: 0.36rem;
  }
</style>
