<style lang="less" scoped>
.content{
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
</style>

<template>
    <div class="detailInfo">
        <myheader :my-header="headerData"></myheader>
        <div class="content">
            <div class="image" v-html="datatext.ggNeiRong">
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
        title: "矿业权出（转）让公告查询",
        backUrl: "/miningNoteThree"
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
