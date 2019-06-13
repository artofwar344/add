<template>
    <div class="detailInfo">
        <myheader :my-header="headerData"></myheader>
        <div class="content">
            <div class="image" v-html="datatext.winBidBulletinContent">
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/header/header";
export default {
  data() {
    return {
        params: this.$route.params,
      headerData: {
        title: "政府采购中标结果查询",
        backUrl: "/buildingResultTwo"
      },
      detailInfo:[],
      datatext:''
    };
  },
  created() {
      console.log(this.params.datatext)
      this.datatext = this.params.datatext;
  },
  components: {
    myheader: Header
  }
};
</script>
<style lang="less" scoped>
.content{
    width: 100%;
    margin-top: .16rem;
    background: white;
    text-align: left;
    overflow: auto;
    .image{
        width: 100%;
        padding: 0rem .35rem .26rem .38rem;
        box-sizing: border-box;
    }
}
body table{
    width: auto !important;
}
</style>