<template>
  <div>
    <towtop :name="titlename"/>
    <div class="header">
      <div class="blue"></div>
      <div class="tishi">*注:</div>
      <p>请将您所有材料原件及原律师执业证书交至原执业机构所属州市司法局，此申请表可出示电子版。</p>
    </div>
    <div class="returnimg">
      <img src="../../../../assets/zyzszx_img.png" alt>
    </div>
    <!-- <Btn plain block @click="finished">名称变更</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="finished"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      titlename: "律师执业证书注销许可 ",
      btnData: [
        {
          text: "名称变更",
          disabled: false,
          isSure: true
        }
      ]
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    finished() {
      this.$router.push("/zyzszx_one");
    }
  }
};
</script>
<style scoped>
.returnimg {
  width: 100%;
}
.returnimg img {
  display: block;
  width: 100%;
  height: 100%;
}
.hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}

.header {
  background-color: #fff;
  text-align: left;
  width: 100%;
  padding: 0.2rem 0.2rem;
  margin-bottom: 0.2rem;
}
.blue {
  width: 0.06rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.2rem;
  display: inline-block;
}
.tishi {
  font-size: 0.3rem;
  display: inline-block;
}
.header p {
  font-size: 0.24rem;
  color: #666;
}
</style>