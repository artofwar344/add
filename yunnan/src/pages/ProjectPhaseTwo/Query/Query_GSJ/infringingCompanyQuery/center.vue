<template>
    <div>
      <towtop :name="hadertow" />
      <div class="breakCent">
        <div class="medicineTop" @click="listlv1">
          <h1>昆明市XXXX厂（SC11411141XXX）</h1>
          <p><Icon type="arrow-right" color="#999999"></Icon></p>
      </div>
      <div class="medicineTop">
          <h1>昆明市XXXX厂（SC11411141XXX）</h1>
          <p><Icon type="arrow-right" color="#999999"></Icon></p>
      </div>
      <div class="medicineTop">
          <h1>昆明市XXXX厂（SC11411141XXX）</h1>
          <p><Icon type="arrow-right" color="#999999"></Icon></p>
      </div>
  </div>
</div>
</template>

<script>
    import towtop from "@/components/HederTwo";
    export default {
      data() {
        return {
          hadertow: "严重违法失信企业名单查询"
        };
        },
        components: {
            towtop
        },
        created() {
            
        },
        methods:{
            listlv1(){
                this.$router.push('/sbreaklist')
            }
        },

    };
</script>
<style lang="less" scoped>
.breakCent{
   
    font-size: .34rem;
    line-height: 1rem;
    color: #333;
}
</style>
