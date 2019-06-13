<template>
	<div>
		<towtop :name="title"></towtop>
		 <Field :propserror="errorText" desc-class="richText"
           type="text" label="借款合同号" :value="comeReason" placeholder="21****0356"
           v-on:errorchange="handleErrorChangesText">
    	</Field>
    	<Field :propserror="errorText" desc-class="richText"
           type="text" label="借款人姓名" :value="comeReason" placeholder="贺朝阳"
           v-on:errorchange="handleErrorChangesText">
    	</Field>
    	<Field :propserror="errorText" desc-class="richText"
           type="text" label="借款金额" :value="comeReason" placeholder="500.000.00"
           v-on:errorchange="handleErrorChangesText">
    	</Field>
    	<Field :propserror="errorText" desc-class="richText"
           type="text" label="还款银行" :value="comeReason" placeholder="省直建行青年路支行"
           v-on:errorchange="handleErrorChangesText">
    	</Field>
    	<Btn block>确定预约</Btn>
	</div>
</template>
<script>
import towtop from '../../components/HederTwo'
export default {
	components:{
		towtop
	},
	data(){
		return{
			title:'借贷查询',
		}
	}
}
</script>

<style scoped="submit.vue">
	.header {
			position: relative;
			width: 100%;
			height: 0.8rem;
			background-color: #ccc;
			text-align: center;
		}
		
		.header .title {
			height: 100%;
			line-height: 0.8rem;
			display: inline-block;
			font-size: 0.4rem;
			margin: 0 auto;
		}
		.header a {
			position: absolute;
			top: 0.2rem;
			left: 0.2rem;
			font-size: 0.4rem;
			color: #2c3e50;
		}
		.hui-field_core {
			color:#2c3e50;
		}
		.hui-btn.is-block {
			width: 70%;
			height: 0.8rem;
			margin: 0.5rem auto;
			background-color: #2D7FFC;
			font-size: 0.3rem;
		}
		.hui-validationCode_btn-disabled {
			color: #2D7FFC;
		}
</style>