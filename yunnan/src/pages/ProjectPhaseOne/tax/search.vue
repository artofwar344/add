<template>
	<div class="bureau_sports_search">
		<towtop :name="title" />
		<div class="example-formgroup">
			<Formgroup v-on:accept-submit="submitEvent" title-position="left">
        <div class="littlestarbig">
          <span class="littlestar">*</span>
				  <Field type="text" label="发票代码"  v-model="textValue" placeholder="请输入发票代码"></Field>
        </div>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
				  <Field type="text" label="发票号码"  v-model="number" placeholder="请输入发票号码"></Field>
        </div>
				<Field type="text" label="社会信用代码"  v-model="creditValue" placeholder="请输入社会信用代码"></Field>
				<Field type="text" label="开票方纳税人识别号"  v-model="taxNumber" placeholder="请输入识别码"></Field>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
          <Field type="text" label="开票金额"  v-model="amount" placeholder="请输入金额"></Field>
        </div>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
				  <Field type="text" label="验证码"  v-model="codeCheck" placeholder="请输入验证码">
        </Field>
        </div>
				<RandomCode
					 slot="prepend"
					:codeCheck='codeCheck'
					@getCode='getCode'
					ref='checkCode'
					></RandomCode>
			</Formgroup>
		</div>
		<Button  @btnClick='btnClick' name="查询"></Button>
	</div>
</template>
<script>
	import towtop from '../../../components/HederTwo';
	import Button from './../common/button.vue';
	import RandomCode from './../common/randomCode.vue';
//submitEvent
	export default {
		data() {
				return {
					title:"通用机打发票信息查询",
					textValuea:'',
					textValue: '',
					number: '',
					creditValue: '',
					taxNumber: '',
					amount: '',
					codeCheck:'',
					codeModel:'',
				};
			},
			components: {
				towtop,
				Button,
				RandomCode
			},
			methods: {
				getCode(code){
					console.log(code,"code")
					this.codeCheck = code;
				},
				submitEvent() {
					console.log(this.textValue,"11")
					/*用户名必填校验(如果是非必填不用写)start*/
					if(this.textValue === '') {
						this.errorText = true;
						//改变错误提示文字
						this.errorTextInfo = '请输入用户名';
					}
					console.log("提交");

				},
				btnClick() {
					console.log(this.textValue,"textValuetextValue")
					console.log(this.codeCheck,"codeCheckcodeCheckcodeCheckcodeCheck")
					if(!this.$refs.checkCode.checkCode()){
						return;
					};

					//if()
					this.submitEvent()
					//return;
					console.log("aa")
						//无数据显示弹框提示
						//this.popupVisible6 = true;
						//有数据跳转
					this.$router.push('taxSearchResult?textValue='+this.textValue+'&number='+this.number+'&creditValue='+this.creditValue+'&taxNumber='+this.taxNumber+'&amount='+this.amount)
				},

			}

	}
</script>

<style  scoped>
/*去除验证码周围border*/
	.hui-field .hui-field_border .hui-field_borderRight {
    border-right: none;
}
.hui-field .hui-field_border .hui-field_value {
     border: none;
    margin: 0;
}
	.bureau_sports_search {
		height: 5rem;
		width: 100%;
		background: #edeef2;
	}


	.example-formgroup{
		padding: 0 0.36rem;
		background: #FFFFFF;
	}
	.example-formgroup .hui-form_title-left .hui-field .hui-field_borderLeft {
		border-left: 0;
	}
	.example-formgroup .hui-form_title-left .hui-field{
		height: 1rem;
		line-height: 1rem;
	}
	.example-formgroup .hui-form_title-left .hui-field .hui-field_title{
		width: auto;
	}
	.example-formgroup .hui-form_title-left .hui-field .hui-field_core{
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
.littlestarbig{
  position: relative;
}
.littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0;
  top: 0.45rem;
}
</style>
