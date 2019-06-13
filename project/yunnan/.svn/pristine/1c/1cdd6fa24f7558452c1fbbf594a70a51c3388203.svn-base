<template>
  <div>
    <towtop :name="titlename"/>
    <div class="reserveResult">
      <div class="undoTop">
        <p>预约地市</p>
        <input type="text" value="明市">
      </div>
      <div class="undoTop">
        <p>预约县区</p>
        <input type="text" value="东川区">
      </div>
      <div class="undoTop">
        <p>预约地址</p>
        <input type="text" value="白云街56号 婚姻登记处">
      </div>
      <div class="undoTop">
        <p>预约时间</p>
        <input type="text" value="2018年10月29日">
      </div>
      <div class="undoTop">
        <p>预约号码</p>
        <input type="text" value="298732211278937">
      </div>
    </div>
    <button class="commonBtn" @click="service">返回首页</button>
  </div>
</template>

<script>
import towtop from "../../../components/HederTwo";
export default {
  components: {
    towtop
  },
  data() {
    return {
      titlename: "预约结婚登记",
      datatext: ""
    };
  },
  mounted() {
    //this.datatext = this.$route.query.datatext;
  },
  methods: {
    service() {
      this.$router.push("service");
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../assets/css/Engagement.less";
</style>