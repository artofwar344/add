<template>
  <div>
    <towtop :name="titlename"/>
    <div class="returnimg">
      <img src="../../../../assets/bgzckz_img.png" alt>
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
      titlename: "律师事务所变更合伙协议许可 ",
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
    towtop,
    mybutton,
  },
  methods: {
    finished() {
      this.$router.push("/bghhxyxk_one");
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
</style>