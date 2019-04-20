<template>
	<div>

				<Field desc="" desc-class="richText" type="text" label="企业名称" v-model='textValue' :value="textValue" placeholder="请输入企业名称"></Field>
				<!-- <Field desc="" desc-class="richText" type="text" label="统一社会信用代码" v-model='comeReason' :value="comeReason" placeholder="请输入信用代码"></Field> -->
			<!-- <div class='example-formgroup_btn-wrapper'>
				<Btn block @click='submitEvent()' class='scl_btn'>查询</Btn>
			</div> -->
			<div class="padTopAdd5">
				<mybutton :btnData="btnData" @click="submitEvent" />
			</div>
	</div>
</template>

<script>
	import { dateFormat, validateEmail, validateTel, validateNum } from '../../../../assets/jq/Utils.js';
  	import mybutton from "../../../../components/MyButton";
	export default {
		data() {
			return {
				btnData:[
					{
						text:'查询',
						disabled: false,
						isSure: true,
					}
				],
				name: '',
				number: '',
				carMsg: '',
				comeReason: '',
				textValue: '',
				
			};

		},
	
		created() {
		},
		components:{
			mybutton,
		},
		methods: {
			
			submitEvent() {

				this.name = this.$route.query.name
				let cent = {
					name:this.name,
					textValue:this.textValue,
				}
				this.$router.push({
					name: "chalist",
					params: { datetext: JSON.stringify(cent) }
            	});
				// this.$router.push("/chalist?name="+this.name+ '&textValue=' + this.textValue)//+'&comeReason=' + this.comeReason
			},
		},
	};
</script>

<style scoped>
	.example-select_btn-wrapper {
		margin-top: 20px;
	}
	
	.example-select_arrowRight {
		display: block;
		width: 16px;
		height: 16px;
		background-size: contain;
		margin-left: 10px;
	}
	
	.hui-btn.is-block {
		width: 5.9rem;
		margin: 0 auto;
	}
	
	.example-formgroup_btn-wrapper {
		margin-top: 20px;
	}
	
	.field-append_text,
	.field-prepend_text {
		background: #f0f0f0;
		padding: 8px;
		color: #ccc;
	}
	
	.field-append_text .hui-icon {
		line-height: normal;
		vertical-align: middle;
	}
	
	.example-formgroup .hui-form_title-top .example-formgroup_btn-wrapper {
		padding: 0 15px;
	}
	.scl_btn{
		box-shadow: 0 .05rem .15rem rgba(45,127,252,0.50) ;
	}
</style>