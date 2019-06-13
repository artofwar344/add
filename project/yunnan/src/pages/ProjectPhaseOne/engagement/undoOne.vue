<template>
	<div class="details">
		<towtop :name="titlename"/>
		<div class="ListTitle">
			<h2>公告名称公告名称</h2>
		</div>

			<div class="listTwo1">
				<p>一、公告内容本院受理你与云南华升建筑工程有限公熊凤云、宜良宜平房地产开发有限公司、李自平、邹昭成、王旭红、成建峰、云南华升建筑工程有限公司腾鑫分公司债权转让合同纠纷一案；</p><br />
				<p>二、现依法向你公告送达开庭传票。自发出公告之日起经过60日,即视为送达。</p><br />
				<p>三、定于公告期满后第3日上午9时00(遇法定假日顺延)在本院第九审判庭开庭审理，逾期将依法缺席裁判。</p><br />

			</div>
		<div class="chargeBtn1">
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
            titlename:"办事指南"
        }
    }
}
</script>


<style scoped>
	.details {
		background: #FFF;
	}

	.ListTitle {
		height: 0.44rem;
		/*margin-top: 0.38rem;*/
		padding-top: .4rem;
		margin-left: 0.4rem;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0.19px;
		text-align: justify;
	}
	
	.listTwo1 {
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
	
	.listTwo1 p {
		margin-top: 0.1rem;
	}
	
	.chargeBtn1 button {
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
		margin-top: .5rem;
	}
	
	.chargeBtn1 button a {
		color: #FFFFFF;
	}
</style>