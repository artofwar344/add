<template>
	<div class="Prove">
		<div class="Top">
			<div class="example-formgroup">
				<FormGroup v-on:accept-submit="submitEvent" title-position="left">
					<Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="申请人姓名" :value="textValue" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="执业证号" :value="number" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="执业类型" :value="carMsg" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="手机号码" :value="comeReason" placeholder="自动获取用户认证信息" v-on:errorchange="handleErrorChangesText">
					</Field>
				</FormGroup>
			</div>
		</div>
		<div class="Prove-one">
			本单位已与申请人解除
		</div>
		<div class="Prove-two">
			<div class="txtOne"><input type="radio" />
				<a>专职律师</a>
			</div>
			<div class="txtTwo"><input type="radio" />
				<a>兼职律师</a>
			</div>
		</div>
		<div class="Prove-Three">
			并办结业务、档案、财务等交接手续
		</div>
		<div class="Prove-Four">
			请负责人签名并加盖电子签章
		</div>
		<div class="Prove-Five1">
			<Btn block plain @click.native="popupVisible5 = true" class="lastbtn">加盖电子签章</Btn>

		</div>
		<Popupprompt v-model="popupVisible5" :title="content.title" :text="content.text" :confirm-btn="content.confirmBtn" :cancel-btn="content.cancelBtn" @click="clickbtn">
			<div slot="othercontent">
              lot内容测试slot内容测试slot内容测试
			</div>
		</Popupprompt>

	</div>
</template>

<script>
	export default {
		data() {
			return {
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
					title: "提示标题提示标题",
					text: "驳回理由",
					confirmBtn: { //水平按钮-确定
						id: "confirm",
						text: "确定按钮确"
					},
					cancelBtn: { //水平按钮-取消
						id: "cancel",
						text: "取消按钮"
					}
				},
			};

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
				this.errorDatetime = val;
			},
			openPopup(val) {
				console.log('打开' + val);
			},
			closePopup(val) {
				console.log('关闭' + val);
			},
			clickbtn(id) {
				console.log(id)
			},
			clickbtn2(id) {
				console.log(id)
			}
		},

	};
</script>

</script>

<style scoped>
	.hui-field_core {
		height: 0.9rem;
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 0.25rem;
		color: #999999;
		letter-spacing: 0.17px;
		text-align: right;
	}
	
	.Prove-one {
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 0.27rem;
		color: #333333;
		letter-spacing: 0;
		text-align: left;
		margin-left: 0.36rem;
		margin-top: 0.3rem;
	}
	
	.Prove-two {
		height: 0.4rem;
		display: flex;
		margin-left: 1.94rem;
		margin-top: 0.64rem;
	}
	
	.txtTwo {
		margin-left: 0.22rem;
	}
	
	.txtOne input {
		width: 0.32rem;
		height: 0.32rem;
		margin-right: 0.11rem;
	}
	
	.txtTwo input {
		width: 0.32rem;
		margin-right: 0.11rem;
		height: 0.32rem;
	}
	
	.txtOne a {
		font-family: PingFangSC-Regular;
		font-size: 0.27rem;
		color: #8E8E93;
		letter-spacing: 0.17px;
	}
	
	.txtTwo a {
		font-family: PingFangSC-Regular;
		font-size: 0.27rem;
		color: #8E8E93;
		letter-spacing: 0.17px;
	}
	
	.Prove-Three {
		height: 0.76rem;
		margin-top: 0.64rem;
		margin-left: 0.36rem;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 0.23rem;
		color: #666666;
		letter-spacing: 0;
		text-align: left;
		line-height: 18px;
		border-bottom: 1px solid #ECECEC;
	}
	
	.Prove-Four{
		margin-top: 1.18rem;
		font-size: 0.28rem;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
	}
	
	.Prove-Four1 button {
		margin-bottom: 0.5rem;
	}
	/*.Prove-Five1 {
		width: 1.76rem;
		height: 0.46rem;
		background: #257BFF;
		border-radius: 100px;	
		border: none;
		font-size: 0.25rem;
		background: rgba(45,127,252,0.50);
		box-shadow: 0 5px 15px 0 rgba(45,127,252,0.27);
		border-radius: 100px;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: left;
		text-align: center;
	}*/
	
	.hui-btn.is-block {
		width: 2.5rem;
		height: 0.46rem;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: left;
		background: #257BFF;
		border-radius: 100px;
		margin: auto;
		margin-top: 1.22rem;
		text-align: c;
	}
</style>