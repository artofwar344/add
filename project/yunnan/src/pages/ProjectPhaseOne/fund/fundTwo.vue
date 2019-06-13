<template>
	<div class="fundTwo">
		<towtop :name='title'></towtop>
		<div class="fundBox">
			<div class="fundTop">
				<h1>交易日期</h1>
				<p>2018-01-08</p>
			</div>
			<div class="fundTop">
				<h1>业务摘要</h1>
				<p>汇款</p>
			</div>
			<div class="fundTop">
				<h1>收入金额</h1>
				<p>200000</p>
			</div>
			<div class="fundTop">
				<h1>支出金额</h1>
				<p>0.00</p>
			</div>
			<div class="fundTop">
				<h1>金额</h1>
				<p>999999</p>
			</div>
		</div>
		<div class="fundBox" style="margin-top: 1rem;">
			<div class="fundTop">
				<h1>交易日期</h1>
				<p>2018-01-08</p>
			</div>
			<div class="fundTop">
				<h1>业务摘要</h1>
				<p>汇款</p>
			</div>
			<div class="fundTop">
				<h1>收入金额</h1>
				<p>200000</p>
			</div>
			<div class="fundTop">
				<h1>支出金额</h1>
				<p>0.00</p>
			</div>
			<div class="fundTop">
				<h1>金额</h1>
				<p>999999</p>
			</div>
		</div>
		<div class="fundBox" style="margin-top: 1rem;">
			<div class="fundTop">
				<h1>交易日期</h1>
				<p>2018-01-08</p>
			</div>
			<div class="fundTop">
				<h1>业务摘要</h1>
				<p>汇款</p>
			</div>
			<div class="fundTop">
				<h1>收入金额</h1>
				<p>200000</p>
			</div>
			<div class="fundTop">
				<h1>支出金额</h1>
				<p>0.00</p>
			</div>
			<div class="fundTop">
				<h1>金额</h1>
				<p>999999</p>
			</div>
		</div>
	</div>
</template>

<script>
import towtop from '../../../components/HederTwo'
export default {
	components:{
		towtop
	},
	data(){
		return{
			title:'公积金明细',
		}
	}
}
</script>

<style scoped>
	.fundTwo {
		width: 100%;
		background: #F1F3F6;
	}
	
	.fundTop {
		background: #FFFFFF;
		width: 100%;
		height: 1rem;
		border-bottom: 1px solid #E1E2E6;
		display: flex;
		text-align: left;
		line-height: 1rem;
	}
	
	.fundBox {
		background: #FFFFFF;
	}
	
	.fundTop h1 {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: .28rem;
		color: #999999;
		letter-spacing: 0.17px;
		margin-left: 0.36rem;
	}
	
	.fundTop p {
		font-family: PingFangSC-Regular;
		font-size: .28rem;
		color: #333333;
		letter-spacing: 0.17px;
		text-align: right;
		margin-right: 0.36rem;
	}
</style>