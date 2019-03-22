<template>
  <div style="height:100%;margin:auto 8px;">
    <van-button>触发按钮</van-button>
    <van-button @click="gonewTab( )">触发弹窗按钮</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "helps",
      meg: "helloworld"
    };
  },
  beforeCreate() {
     window.gonewTab = this.gonewTab;
  },
  created() {},
  watch: {
    $route(val) {}
  },
  mounted(){ 
    window.messageHs =this.messageHs;
  },
  methods: {
    chang() {
      // this.$refs.dd.css({'display':'none'})
      // window.location = 'zd://login?account=13011112222&password=123456';
    },
    gonewTab() {
       alert( String('ad') )
      //  window.webkit.messageHandlers.TestInteractive.postMessage()
      window.webkit.messageHandlers.TestInteractive.postMessage({
        account: "13000000000",
        password: "123456"
      });
    },
    messageHs(aa) {
      alert(aa)
    }
  }
};
</script> 
 

<style scoped>
</style>