<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <!-- <router-view></router-view> -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
$(function() {
  /* 10px=0.1rem */
  function fontSize() {
    var deviceWidth = $(document).width();
    if (deviceWidth > 750) {
      deviceWidth = 750;
      console.log(deviceWidth);
    }

    var fontSize = deviceWidth / 7.5;
    $("html").css("fontSize", fontSize);
  }
  fontSize();
  $(window).resize(function() {
    fontSize();
  });
});

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    // cancels(){
    //   console.log(1)
    // }
  },
  created() {
    // ��ҳ�����ʱ��ȡsessionStorage���״̬��Ϣ
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    // ��ҳ��ˢ��ʱ��vuex�����Ϣ���浽sessionStorage��
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>
<style>
@import "./assets/css/main.css";

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}

a {
  text-decoration: none;
}
</style>
<style lang="less">
@import "assets/css/Common.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
