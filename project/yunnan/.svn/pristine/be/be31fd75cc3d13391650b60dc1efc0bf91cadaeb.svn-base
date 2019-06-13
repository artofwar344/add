<style lang="less" scoped>
.content {
  margin-top: 0.16rem;
  background: white;
  text-align: left;
  overflow: auto;
  .image {
    width: 100%;
    padding: 0rem 0.35rem 0.26rem 0.38rem;
    box-sizing: border-box;
  }
}
</style>
<template>
  <div class="state-owned">
    <towtop :name="titlename"/>
    <div class="content">
      <div class="image" v-html="datatext.ggNeiRong"></div>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
export default {
  components: {
    towtop
  },
  data() {
    return {
      titlename: "国有产权成交结果查询",
      datatext: ""
    };
  },
  methods: {
    parameter() {
      console.log(this.$route.params.datatext);
      this.datatext = this.$route.params.datatext;
    }
  },
  mounted() {
    this.parameter();
  }
};
</script>