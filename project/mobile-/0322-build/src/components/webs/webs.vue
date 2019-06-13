<template>
  <div style="height:100%;margin:auto 8px;">
    {{meg}}
    <van-button @click="chang" > 触发按钮 </van-button> 
    <van-button  ref="dd"> 触发按钮 </van-button> 
      
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
  created() {
     w
  },
  watch: {
    $route(val) {
      
    }
  },
  methods: {
    chang() {
      this.$refs.dd.css({'display':'none'})
    },
    gonewTab( ) {
       
    }
  }
};
</script>

<style scoped>
 
</style>