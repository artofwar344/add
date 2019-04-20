<template>
	<div>
		<towtop :name="hadertow" />
		<div class="details">
			<div class="ListTitle">
				<h2>{{hadertow}}</h2>
			</div>
			<div class="ListOne">
				<h2>发布时间：{{ListTime}}</h2>
			</div>
			<div class="listTwo">
				<p>{{listCen}}</p>
			</div>
		</div>
		<button @click.prevent='RecordSub()' class=" button blueButton textWhat">
			返回首页
		</button>
	</div>

</template>

<script>
import towtop from "../../../../components/HederTwo"

export default {
  data() {
    return {
		hadertow:'招考招聘查询',
		ListTitle:'公告名称公告名称',
		ListTime:'2018-10-24',
		listCen:'公告内容本院受理你与云南华升建筑工程有限公司、熊凤云、宜良宜平房地产开发有限公司、李自平、邹昭成、王旭红、成建峰、云南华升建筑工程有限公司腾鑫分公司债权转让合同纠纷一案，现依法向你公告送达开庭传票。自发出公告之日起经过60日',
    };
  },
  components: { towtop },
   methods:{
      RecordSub(){
          this.$router.push('/')
	  },
   }
};
</script>
<style lang="less" scoped>
.details{
    background: #fff;
    padding: .1rem 0 .3rem;
}
.ListTitle{
		margin-top: 0.38rem;
		margin-left: 0.4rem;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0.19px;
		text-align: justify;
	}
	.ListOne {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0.17px;
		text-align: left;
		line-height: 15px;
		margin-left: 0.4rem;
		margin-top: 0.18rem;
	}
	.listTwo{
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.17px;
		text-align: justify;
		line-height: 24px;
		margin-left: 0.4rem;
		margin-top: 0.4rem;
		margin-right: 0.4rem;
	}

</style>
