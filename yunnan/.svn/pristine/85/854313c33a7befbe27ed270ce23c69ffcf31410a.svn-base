<style lang="less" scoped>
.content{
    margin-top: .16rem;
    background: white;
    text-align: left;
    overflow: auto;
    h1{
        font-size: .28rem;
        color:#333;
        line-height: .4rem;
        padding: .32rem .35rem .26rem .38rem;
        box-sizing: border-box;
    }
    .time{
        font-size: .28rem;
        color: #999;
        padding: 0rem .35rem .16rem .38rem;
        box-sizing: border-box;
    }
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
            <h1>{{datatext.bulletinName}}</h1>
            <div class="time">
                {{datatext.bulletinIssueTime}}
            </div>
            <div class="image" v-html="datatext.bulletinContent">
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
        title: "工程建设中标结果查询",
        backUrl: "/resultList"
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
