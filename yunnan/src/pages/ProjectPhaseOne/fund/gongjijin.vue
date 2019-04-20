<style lang="less" scoped>
ul {
  padding: 0.4rem 0.36rem 0rem;
  box-sizing: border-box;
  li {
    margin-bottom: 0.32rem;
    box-sizing: border-box;
    background: white;
    height: 1.6rem;
    line-height: 1.6rem;
    padding-left: 0.56rem;
    text-align: left;
    img {
      width: 0.4rem;
      height: 0.4rem;
      vertical-align: sub;
      margin-right: 0.2rem;
    }
    span {
      font-size: 0.3rem;
      font-weight: bold;
    }
  }
}
</style>

<template>
	<div>
		<myheader :my-header="headerData"></myheader>
		<ul class="content">
			<router-link tag="li" :to="item.goto" v-for="item in listdata" :key="item.id">
				<img class="icon" :src="item.iconUrl">
				<span>{{item.title}}</span>
			</router-link>
		</ul>
	</div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  components: {
    myheader: Header
  },
  data() {
    return {
      headerData: {
        title: "公积金信息查询",
        backUrl: "/"
      },
      listdata: [
        {
          id: 0,
          iconUrl: require("../../../assets/images/accumulation_Fund/infoCheck.png"),
          title: "公积金信息查询",
          goto: "/infoCheck"
        },
        {
          id: 1,
          iconUrl: require("../../../assets/images/accumulation_Fund/detailCheck.png"),
          title: "公积金明细查询",
          goto: "/detailCheck"
        },
        {
          id: 2,
          iconUrl: require("../../../assets/images/accumulation_Fund/loanInfo.png"),
          title: "贷款信息查询",
          goto: "/loanInfo"
        },
        {
          id: 3,
          iconUrl: require("../../../assets/images/accumulation_Fund/Reimbursement.png"),
          title: "还款明细查询",
          goto: "/Reimbursement"
        },
        {
          id: 4,
          iconUrl: require("../../../assets/images/accumulation_Fund/loanProcess.png"),
          title: "贷款进度查询",
          goto: "/loanProcess"
        },
        {
          id: 5,
          iconUrl: require("../../../assets/images/accumulation_Fund/loanPlan.png"),
          title: "还款计划查询",
          goto: "/loanPlan"
        },
        {
          id: 6,
          iconUrl: require("../../../assets/images/accumulation_Fund/repayCalc.png"),
          title: "还款试算",
          goto: "/ReimbursementTrialQuery"
        }
      ]
    };
  },
  methods: {
    tosubmit(key) {
      this.$router.push("/submit");
    }
  }
};
</script>