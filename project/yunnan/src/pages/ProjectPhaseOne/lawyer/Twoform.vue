<template>

	<div class="home">
		<towtop/>

		<div class="TitleTo">
			<h1>基本信息</h1>
		</div>
		<div class="Top">
			<div class="example-formgroup">
				<FormGroup v-on:accept-submit="submitEvent" title-position="left">
					<Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="申请人" :value="textValue" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="性别" :value="number" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="资格证类别" :value="carMsg" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="资格证号" :value="comeReason" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="原执业机构名称" :value="comeReason" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="投资主体" :value="comeReason" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="国标行业" :value="comeReason" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
				</FormGroup>
			</div>
		</div>
		<div class="TitleTo">
			<h1>基本信息</h1>
		</div>
		<div class="Top">
			<div class="example-formgroup">
				<FormGroup v-on:accept-submit="submitEvent" title-position="left">
					<Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="拟加入执业机构名称" :value="textValue" placeholder="自动获取用户认证信息" required v-on:currentval="handleTextVal" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="主管司法居住" :value="number" placeholder="用户手动输入" v-on:errorchange="handleErrorChangesText" required v-on:currentval="handleTextVal">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="执业经营" :value="carMsg" placeholder="" v-on:errorchange="handleErrorChangesText" required v-on:currentval="handleTextVal">
					</Field>
					<!-- <div class='example-formgroup_btn-wrapper'>
					   <Btn block  plain @click.native="popupVisible5 = true" >下一步</Btn>
					</div> -->
					<div class="padTopAdd5">
						<mybutton :btnData="btnData" @click="popupVisible5 = true" />
					</div>
				</FormGroup>
			</div>
		</div>

		<div class="example-popup">
			
			<Popupprompt v-model="popupVisible5" :title="content.title" :text="content.text" :confirm-btn="content.confirmBtn" :cancel-btn="content.cancelBtn" @click="clickbtn">
				<div slot="othercontent">
					非直属州市司法局律所执业律师请
选择相应区县司法局。
				</div>
			</Popupprompt>
			
		</div>

	</div>
</template>
<script>
	import towtop from '../../../components/HederTwo'
	import mybutton from "../../../components/MyButton";

	export default {
		data() {
			return {
				btnData:[
					{
						text:'下一步',
						disabled: false,
						isSure: true,
					}
				],

				comeReason: '',
				carMsg: '',
				number: '',
				textValue: '',
				errorText: false,
				errorTextInfo: '',
				carMsg: '',
				loading: false,
				valueDatetime: '', //2017-02-23 12:10
				confirmValDatetime: '',
				errorDatetime: false,
				errorSelectInfo: '',
				selectInfo: '',
				options: ["中国", "日本", "澳大利亚", "新加坡"],
				popupVisible5: false,

				content: {
					title: "温馨提示",
					text: "",
					confirmBtn: { //水平按钮-确定
						id: "confirm",
						text: "确定"
					},
					cancelBtn: { //水平按钮-取消
						id: "cancel",
						text: "取消"
					}
				},
			};

		},
		components:{
			mybutton,
			towtop
		},
		methods: {

			selectedItem(index, item) { //获取被选择的选项
				console.log(index, item)
			},
			handleErrorChangesText(val) { //用户名错误状态接收
				this.errorText = val;
			},
			handleTextVal(val) {
				this.textValue = val;
			},
			submitEvent() {
				/*用户名必填校验(如果是非必填不用写)start*/
				if(this.textValue === '') {
					this.errorText = true;
					//改变错误提示文字
					this.errorTextInfo = '请输入用户名';
				}
				this.flagCanSubmit = (this.errorText === true);
				if(this.flagCanSubmit) {
					console.log("提交失败");
					return false;
				} else {
					console.log("提交成功");
					return true;
				}
			},
			open(picker) {
				document.activeElement.blur();
				this.$refs[picker].open();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
			},
			handleChangeConfirmDatetime(value) { //日期时间确定值
				this.confirmValDatetime = dateFormat(value, 'yyyy-MM-dd HH:mm');
			},
			handleErrorChangesDatetime(val) {
				console.log(val)
				this.errorDatetime = val;
			},
			openPopup(val) {
				console.log('打开' + val);
			},
			closePopup(val) {
				console.log('关闭' + val);
			},
			clickbtn(id) {
				console.log(1)
				console.log(id)
				if(id == 'confirm'){
					this.$router.push('/Warmprompt')
				}else{
					this.popupVisible5 = false
				}
			},
			clickbtn2(id) {
				console.log(2)
				console.log(id)
			}
		},
	
	};
</script>

<style scoped>
	.Top {
		width: 100%;
	}
	
	.TitleTo {
		width: 100%;
		height: 0.72rem;
		background: #f1f3f6;
	}
	
	.TitleTo h1 {
		font-family: PingFangSC-Regular;
		font-size: 0.26rem;
		color: #999999;
		letter-spacing: 0.17px;
		text-align: justify;
		line-height: 0.72rem;
		margin-left: 0.18rem;
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
	
	.hui-field {
		height: 0.98rem;
		line-height: 0.98rem;
	}
	
	.hui-field_core {
		text-align: right;
	}
	
	.hui-field_title {
		font-family: PingFangSC-Regular;
		font-size: 0.3rem;
		color: #333333;
		letter-spacing: 0.17px;
	}
	
	.example-formgroup_btn-wrapper {
		/*margin: auto;
		margin-top: 0.47rem;
		font-family: PingFangSC-Semibold;
		font-size: 0.29rem;
		color: #FFFFFF;
		letter-spacing: 0.19px;
		text-align: center;*/
	}
	.hui-field_core {
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 0.25rem;
		color: #999999;
		letter-spacing: 0.17px;
		text-align: right;
	}
	
	.hui-field_title {
		width: 160px;
		
	}
	.hui-btn.is-block{
		width: 5.9rem;
		height: 0.9rem;
		background: #2D7FFC;
		box-shadow: 0 5px 15px 0 rgba(45,127,252,0.50);
		border-radius: 25px;
		color: #FFFFFF;
		margin: auto;
		font-family: PingFangSC-Semibold;
		font-size: 0.3rem;
		color: #FFFFFF;
		letter-spacing: 0.19px;
		text-align: center;
	}
</style>