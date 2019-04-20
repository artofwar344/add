<template>
	<div class="undo">
		<towtop :name="titlename"/>
		<div class="undoTop">
			<p>预约地市</p>
			<input type="text" value="明市" />
		</div>
		<div class="undoTop">
			<p>预约县区</p>
			<input type="text" value="东川区" />
		</div>
		<div class="undoTop">
			<p>预约地址</p>
			<input type="text" value="白云街56号 婚姻登记处" />
		</div>
		<div class="undoTop">
			<p>预约时间</p>
			<input type="text" value="2018年10月29日" />
		</div>
		<div class="undoTop">
			<p>预约号码</p>
			<input type="text" value="298732211278937" />
		</div>
		
		<div class="chargeBtn">
			<button><router-link to="/service">返回首页</router-link></button>
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
        return {
            titlename:"预约结婚登记"
        }
    }
}
</script>

<style scoped="undoTwo.vue">
	.undoTop {
		display: flex;
	}
	
	.undoTop p {
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.17px;
		line-height: 35px;
		margin-left: 0.36rem;
	}
	
	.undoTop input {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0.17px;
		line-height: 35px;
		flex: 1;
		text-align: right;
		margin-right: 0.36rem;
		border: none;
	}
	.chargeBtn button {
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
	}
	
	.chargeBtn button a {
		color: #FFFFFF;
	}
</style>