<template>
	<div class="bureau_sports_search">
		<towtop :name="title" />
		<div v-if="datas.textValue" class="example-formgroup">
			<Formgroup v-on:accept-submit="submitEvent" title-position="left">
				<Field type="text" label="发票代码" :value="datas.textValue" disabled></Field>
				<Field type="text" label="发票号码" :value="datas.number" disabled></Field>
				<Field type="text" label="纳税人识别号" :value="datas.taxerNo" disabled></Field>
				<Field type="text" label="社会信用代码" :value="datas.creditNo" disabled></Field>
				<Field v-show='showLast' type="text" label="查询结果" :value="datas.result" disabled></Field>
				<Field  v-show='!showLast' type="text" label="查询结果" :value="datas.result" disabled></Field>
			</Formgroup>
		</div>
		<div v-else class="resultNone">
			查询不到该销货单位开具的该份发票！
		</div>
		<Button @btnClick='submitEvent' name="返回"></Button>
	</div>
</template>
<script>
	import towtop from '../../../components/HederTwo';
	import Button from './../common/button.vue';

	export default {
		data() {
				return {
					title:"通用机打发票流向查询",
					datas: {
						number: '',
						textValue: '',
						status: '',
						result: '',
						taxerNo:'',
						creditNo: ''
					}
				};
			},
			components: {
				towtop,
				Button
			},
			mounted() {
				this.datas = {
					number: '15738299X',
					textValue: 'dff',
					status: '正常',
					taxerNo:'111',
					creditNo: '222',
					result: '纳税人识别号对比相符，金额对比相符。'
				}
			},
			computed:{
				//判断返回数据 给最后一行color 加red
				showLast(){
					if(this.datas.result == '纳税人识别号对比相符，金额对比相符。'){
						return true;
					}else {
						return false;
					}
				}
			},
			methods: {

				submitEvent() {
					this.$router.go(-1)
				},
				btnClick() {
					console.log("aa")
						//无数据显示弹框提示
						//this.popupVisible6 = true;
						//有数据跳转
					this.$router.push({
						name: 'sportsResult'
					})
				},

			}

	}
</script>

<style  scoped>
.hui-field_core:last-child{
	color: red !important;
	background: red;
}
	.resultNone {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FA6366;
		letter-spacing: 0.19px;
		text-align: right;
		line-height: 50px;
		margin: 1.48rem 0.98rem;
	}
	
	.bureau_sports_search {
		height: 5rem;
		width: 100%;
		background: #edeef2;
	}
	
	.example-formgroup {
		padding: 0 0.36rem;
		background: #FFFFFF;
	}
	
	.example-formgroup .hui-form_title-left .hui-field .hui-field_borderLeft {
		border-left: 0;
	}
	
	.example-formgroup .hui-form_title-left .hui-field {
		height: 1rem;
		line-height: 1rem;
		padding: 0;
	}
	.example-formgroup .hui-form_title-left .hui-field:last-child .hui-field_core {
		color: red;
	}
	.hui-field_main {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0.17px;
		text-align: right;
		line-height: 50px;
	}
	
	.example-formgroup .hui-form_title-left .hui-field .hui-field_title {
		width: auto;
	}
	
	.example-formgroup .hui-form_title-left .hui-field .hui-field_core {
		text-align: right;
	}
	.field-append_text-left {
		padding: 8px;
		color: #ccc;
	}
	
	.field-append_text .hui-icon {
		line-height: normal;
		vertical-align: middle;
	}
</style>