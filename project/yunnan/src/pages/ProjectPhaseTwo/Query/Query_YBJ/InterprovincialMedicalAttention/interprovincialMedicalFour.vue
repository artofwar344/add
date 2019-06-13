<template>
  <div class="basic-info-page">
    <towtop :name="titleName"/>
    <div class="container">
    </div>
  </div>
</template>

<script>
  import towtop from "@/components/HederTwo";

  export default {
    name:"interprovincicalMedicalOne",
    data() {
      return {
        titleName:"跨省异地就医备案"
      }
    },
    components: {
      towtop
    },
    computed: {
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .basic-info-page {
    display: flex;
    flex-direction: column;

    .container {
      flex: 1;
      overflow: auto;
    }
  }

</style>

