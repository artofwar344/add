<template>
  <div class="ht_box">
    <div class="goOut" @click="page()">
      <Icon type="arrow-left" size="16" color="#999999"></Icon>
    </div>
    <div class="title">{{ name }}</div>
    <span v-if="customText" class="next-text" @click="infoParent">{{ customText }}</span>
    <!-- /indexlist -->
    <router-link v-else to="" class="next">
      <img src="../assets/images/group .png" alt>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["name", "customText", "preRoute"],
  created() {
    console.log(this.$route.query.matterid);
    if (
      this.$route.query.matterid != undefined &&
      this.$route.query.matterid != "undefined"
    ) {
      window.sessionStorage.setItem("localhostname", this.$route.path);
    }
  },
  methods: {
    page() {
      if (this.$route.path === window.sessionStorage.getItem("localhostname")) {
        this.$CallModule("close", "关闭");
        return;
      }
      if (this.preRoute) {
        this.$router.push(this.preRoute);
      } else {
        this.$router.go(-1);
      }
    },
    infoParent() {
      this.$emit("headerEmit");
    }
  }
};
</script>

<style scoped lang="less">
.ht_box {
  display: flex;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.33rem;
  background: #ffffff;
  margin-bottom: 0.2rem;
  background: #fff;
  div {
    width: 80%;
  }
  .goOut {
    width: 10%;
    float: left;
    text-align: center;
    padding-left: 0.06rem;
    padding-top: 0.01rem;
    line-height: 0.9rem;
  }
  .next {
    width: 10%;
    float: right;
    padding-top: 0.25rem;
  }
  .next-text {
    width: 10%;
    float: right;
    line-height: 0.9rem;
    height: 0.9rem;
    margin-right: 0.06rem;
  }
  .next img {
    display: block;
    width: 0.4rem;
    height: 0.4rem;
  }
  .title {
    font-weight: bold;
    line-height: 0.9rem;
    text-align: center;
  }
}
</style>
