<template>
	<div>
		<towtop :name="titlename" />
		<div class="img">
			<img src="../../../assets/yybs_fbmb.png" alt="">
		</div>
		<Btn block  @click="shsy_btn">返回首页</Btn>
		<div class="btm">
			<div class="header">
				<div class="blue"></div>
				<div class="title">特别提醒</div>
			</div>
			<p>1、本平台仅供所查询发票票面信息的查验结果。</p>
			<p>2、若发现发票查验结果与实际交易不符，任何单位或个人有权拒收并向大地税务机关举报。</p>
		</div>

	</div>
</template>	
<script>
	import towtop from '../../../components/HederTwo'
	export default {
		data() {
			return {
				titlename:'发票查验明细',
			};

		},
		components: {
			towtop
		},
		methods: {
			shsy_btn() {
				this.$router.push('/yuyuebanshui_one')
			}
			
			
		},

	};
</script>
<style scoped="yybs_fpmx">
	.btm {
		width: 90%;
		margin: 5rem auto;
		background-color: #E4E7EA;
		padding: 0.2rem 0.2rem;
		box-sizing: border-box;
	}
	.btm .header {
		text-align: left;
		margin-bottom: 0.2rem;
	}
	.btm .blue {
		width: 0.06rem;
		height: 0.24rem;
		display: inline-block;
		background-color: #2d7ffc;
		margin-right: 0.25rem;
	}
	.btm .title {
		display: inline-block;
		font-size: 0.3rem;
		font-weight: 700;
	}
	.btm p {
		margin-top: 0.1rem;
		text-align: left;
		font-size: 0.24rem;
		color: #999;
	}
	.hui-btn.is-block {
		width: 5.9rem;
		height: 0.9rem;
		margin: 1rem auto;
		background-color: #2D7FFC;
		font-size: 0.32rem;
		color: #fff;
	}
	.img {
		width: 6.78rem;
		height: 2.78rem;
		margin: 0 auto;
	}
	.img img {
		width: 100%;
		height: 100%;
	}

</style>
