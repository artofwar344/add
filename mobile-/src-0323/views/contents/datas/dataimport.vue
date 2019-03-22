<template>
  <div>
    
唉唉 
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
      console.log(val,'route___-');      
    }
  },
  methods: {}
}
</script>

<style scoped>
  
</style>