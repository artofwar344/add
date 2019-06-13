<template>
	<div class="Message">
		<towtop/>
		<div class="MessageOne">
			<div class="MessageOne-title">
				<div></div>
				<h2>办理律师执业机构变更申请</h2>
				<h3>2018-12-31</h3>
			</div>
			<div class="MessageOne-content">
				<p>马奇骏律师申请办理律师执业机构变更许可，需贵律师所协助提供转出证明！</p>
			</div>
			<div class="MessageOne-tit">
				
                 <router-link to="/Prove">立即处理</router-link>
			</div>
		</div>

		<div class="MessageOne" style="margin-top: 0.32rem;">
			<div class="MessageOne-title">
				<div></div>
				<h2>申请事项不通过</h2>
				<h3>2018-12-31</h3>
			</div>
			<div class="MessageOne-content">
				<p>您申请的“执业机构变更办理”事项审核不通过，不通过原因：<a>与实际发生不符，</a>如有疑问请咨询010- 87112319
				</p>
			</div>
		</div>

		<div class="MessageOne" style="margin-top: 0.32rem;">
			<div class="MessageOne-title">
				<div></div>
				<h2>申请事项被退回</h2>
				<h3>2018-12-31</h3>
			</div>
			<div class="MessageOne-content">
				<p>您申请的 <b>执业机构变更办理</b> 事项被退回，退回原因：<b>与实际发生不符</b>，请进入申请页面补正后重新提交，如有疑问请咨询 010-87112319</p>
			</div>
			<div class="MessageOne-tit" style="margin-top: 0.7rem;">
				重新申请
			</div>
		</div>

	</div>
</template>

<script>
	import towtop from '../../../../components/HederTwo'
	export default{
		data(){
			return{
				titlecent:'律师变更执业机构许可',
			}
		},
		components:{
			towtop
		}
	}
</script>

<style scoped>
	.Message {
		width: 100%;
		background: #f1f3f6;
	}
	
	.MessageOne {
		width: 6.86rem;
		height: 3.36rem;
		background: #FFFFFF;
		margin: auto;
	}
	
	.MessageOne-title {
		height: 1rem;
		border: 1px solid #F1F3F6;
		display: flex;
		line-height: 1rem;
	}
	
	.MessageOne-title div {
		width: 0.06rem;
		height: 0.24rem;
		background: #2D7FFC;
		margin-top: 0.42rem;
		margin-left: 0.36rem;
	}
	
	.MessageOne-title h2 {
		margin-left: 0.16rem;
		font-family: PingFangSC-Medium;
		color: #000000;
		letter-spacing: -0.34px;
	}
	
	.MessageOne-title h3 {
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 0.23rem;
		color: #999999;
		letter-spacing: -0.34px;
		text-align: right;
		margin-right: 0.34rem;
	}
	
	.MessageOne-content {
		height: 0.69rem;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #666666;
		letter-spacing: -0.34px;
		line-height: 24px;
		margin-left: 0.36rem;
		margin-top: 0.24rem;
	}
	.MessageOne-content a{
		
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #fa6366;
		letter-spacing: -0.34px;
		line-height: 24px;
	}
	.MessageOne-content b{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #257bff;
		letter-spacing: -0.34px;
		line-height: 24px;
	}
	.MessageOne-tit {
		height: 0.4rem;
		font-family: PingFangSC-Medium;
		font-size: 0.25rem;
		color: #2D7FFC;
		letter-spacing: -0.34px;
		text-align: center;
		margin-top: 0.4rem;
	}
</style>