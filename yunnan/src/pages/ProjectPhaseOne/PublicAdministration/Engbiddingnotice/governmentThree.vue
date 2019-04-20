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
        title: "工程建设招标公告查询",
        backUrl: "/governmentTwo"
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
<style lang="less"  scoped>
.example-formgroup{
	background: white;
}
	.btn {
		width: 5.9rem;
		height: 0.9rem;
		background: #2D7FFC;
		box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.50);
		border-radius: 25px;
		border: none;
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		letter-spacing: 0.19px;
		text-align: center;
		margin-top: 1.02rem;
		color: #FFFFFF;
	}
	.example-formgroup{
		width: 100%;
		height:auto;
	}
	.receipt_box{
		width: 100% !important;
	}
	.example-select_btn-wrapper{
		margin-top:20px;
	}
	.example-select_arrowRight{
		display: block;width: 16px;height:16px;
		/* background-image: url(../../../src/common/images/common-arrowRight.png); */
		background-size: contain;margin-left:10px;
	}
	.hui-field_core {
		text-align: right;
	}
	.hui-field_title{
		width: 120px;
	}
	
.content{
    margin-top: .16rem;
    background: white;
    text-align: left;
    overflow: auto;
    h1{
        font-size: .32rem;
        color:#333;
        line-height: .4rem;
        padding: .32rem .35rem .26rem .38rem;
        box-sizing: border-box;
        text-align: center;
    }
    .time{
        font-size: .28rem;
        color: #999;
        padding: 0rem .35rem .16rem .38rem;
        box-sizing: border-box;
        text-align: center;
    }
    .image{
        width: 100%;
        padding: 0rem .35rem .26rem .38rem;
        box-sizing: border-box;
    }
}
</style>
