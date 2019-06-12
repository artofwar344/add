<template>
 <div style="margin-top:22px;">  

   {{meg}}
  </div>
</template>
<script>   
export default {
  data() {
    return {
      name: "richTextEdit", 
      meg: "richTextEdit" 
    } 
  } ,
  
  created() { 
    this.getUserData()
   
  },
  methods: { 
    getUserData() {   
      console.log(1);
      
    } 
  }
};
</script>

<style scoped>
.distriClass {
  margin: 0 auto;
}
</style>
