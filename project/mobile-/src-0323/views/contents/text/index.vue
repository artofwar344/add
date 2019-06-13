<template>
  <div>
    <router-link to="/text/index/child">
    <button>
唉唉
    </button></router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name : 'homepage',
      meg : 'helloworld'
    }
  },
  created () {
   
  },
  watch:{
    $route(val) {
      console.log(val);
      
    }
  }
}
</script>

<style scoped>
  
</style>