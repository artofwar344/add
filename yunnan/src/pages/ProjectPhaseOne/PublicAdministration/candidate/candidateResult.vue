<template>
  <div class="state-owned">
    <towtop :name="titlename"/>
    <div class="content">
      <div class="image" v-html="datatext.publicityContent"></div>
    </div>
    <!-- <div class="example-formgroup" v-html="datatext.publicityContent">
    </div>-->
    <!-- <div class="chargeBtn">
			<button class="btn" @click="pushAjax()">查询</button>
    </div>-->
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
      titlename: "工程建设中标候选人查询",
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