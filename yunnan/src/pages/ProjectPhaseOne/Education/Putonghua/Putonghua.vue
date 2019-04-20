<template>
  <div>
    <div class="Putonghua">
      <label for="name" class="label">姓名</label>
      <input type="text" class="input" v-model="nametext" id="name" placeholder="请输入姓名">
    </div>
    <div class="Putonghua">
      <label for="number" class="label">身份证号</label>
      <input type="text" class="input" v-model="numbername" id="numbername" placeholder="请输入身份证号">
    </div>
    <div class="Putonghua">
      <label for="number" class="label">准考证号</label>
      <input type="text" class="input" v-model="numbercode" id="numbers" placeholder="请输入准考证号">
    </div>
    <!-- <button class="btn" @click="query()">查询</button> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="query"/>
    </div>
  </div>
</template>
<script>
import mybutton from "../../../../components/MyButton";
export default {
  props: {
    name: "",
    number: "",
    placeholdername: "",
    placeholdernumber: ""
  },
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      nametext: "",
      numbername: "",
      numbercode: ""
    };
  },
  components: {
    mybutton
  },
  methods: {
    query() {
      if (this.nametext == "" || this.numbername == "") {
        this.$toast("请输入姓名和身份证号");
        return;
      } else {
        this.$emit("datetext", this.nametext, this.numbername, this.numbercode);
      }
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../../../assets/css/Affairs.less";
</style>
