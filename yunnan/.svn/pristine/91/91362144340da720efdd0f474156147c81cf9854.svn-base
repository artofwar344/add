<template>
	<div class="index">
		<div class="nav_title">办理结果 <span>（此证办理已存入我的证照，该证永久有效。）</span></div>

		<div class="canvas" ref="canvas">
			<h1>云南省生育服务登记证</h1>
			<div><span class="scl_title">编号</span> <span>s5493029382982348xxxx</span></div>
			<div>
				<ul>
					<li> <span class="scl_title">女方姓名</span> <span>李芳</span></li>
					<li> <span class="scl_title">出生日期</span> <span>1985年6月</span></li>
					<li> <span class="scl_title">身份证号</span> <span>529112198506030386</span></li>
					<li> <span class="scl_title">户籍地址</span> <span>云南省彝族自治州红河县山石镇西山社区</span></li>
					<li> <span class="scl_title">居住地址</span> <span>云南省彝族自治州红河县山石镇西山社区</span></li>
				</ul>
			</div>
			<div>
				<ul>
					<li> <span class="scl_title">男方姓名</span> <span>张勇</span></li>
					<li> <span class="scl_title">出生日期</span> <span>1985年9月</span></li>
					<li> <span class="scl_title">身份证号</span> <span>529112198506030389</span></li>
					<li> <span class="scl_title">户籍地址</span> <span>云南省彝族自治州红河县山石镇西山社区</span></li>
					<li> <span class="scl_title">居住地址</span> <span>云南省彝族自治州红河县山石镇西山社区</span></li>
				</ul>
			</div>
			<div>
				<ul>
					<li> <span class="scl_title">登记单位</span> <span>（盖章）</span></li>
					<li> <span class="scl_title">登记日期</span> <span>2018年8月12日</span></li>
					<li> <span class="scl_title">经办人</span> <span>李红</span></li>
				</ul>
			</div>
		</div>

		<div class="footer">

			<Field readonly :error="errorSelectInfo" :propserror="errorSelect01" label="领取方式：" desc="" disableclear type="text" placeholder="请选择" :title="confirmTitSelect01" :value="confirmValSelect01" v-on:errorchange="errorChangeFun" @click.native="open('pickerselect01')">
				<span class="example-select_arrowRight"></span>
			</Field>
			<Selectpopup ref="pickerselect01" position="bottom" @touchmove.prevent  :dataslots="selectData01" class="example-select_item" @confirms="selectConfirmFun01"></Selectpopup>

			<div v-show="(map_eml===null)?false:true">
				<Field :propserror="errorEmail" :error="errorEmailInfo" type="email" label="邮箱" :value="emailValue" placeholder="请输入邮箱" v-if='map_eml'>
				</Field>
				<Field :propserror="errorEmail" :error="errorEmailInfo" type="email" label="邮寄地址" :value="emailValue" placeholder="请选择邮寄地址" readonly @click.native="" v-else='map_eml'>
				</Field>
			</div>
		</div>
		<div @click="(map_eml==null)?on():submitEvent()">
			<button class="save_btn">保存图片</button>
		</div>
	</div>
</template>
<script>
	import html2canvas from 'html2canvas';
	export default {
		data() {
			return {
				hadertow:'壹孩生育服务登记',
				map_eml: null,
				emailValue: '',
				errorEmail: false,
				errorEmailInfo: '',
				errorSelect01: false,
				confirmTitSelect01: '',
				confirmValSelect01: '',
				errorSelectInfo: '',
				selectData01: [{
					flex: 1,
					//values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
					values: [{
						text: '窗口领取',
						value: 'a'
					}, {
						text: '物流邮寄',
						value: 'b'
					}, {
						text: '发送邮箱',
						value: 'c'
					}],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 3
				}],
			};
		},
		
		methods: {
			on(){
				this.$router.push('/forend')
			},
			open(picker) {
				this.$refs[picker].open();
				document.activeElement.blur();
			},
			errorChangeFun(val) {
				console.log(val)
				this.errorSelect01 = val;
			},
			selectConfirmFun01(selectedVal) {
				console.log(selectedVal)
				if(typeof selectedVal[0] === 'object') {
					this.confirmValSelect01 = selectedVal[0].text;
					this.confirmTitSelect01 = selectedVal[0].value;
					if(this.confirmTitSelect01 == 'a') {
						this.map_eml = null
						
					} else if(this.confirmTitSelect01 == 'c') {
						this.map_eml = true
					} else {
						this.map_eml = false
					}
					console.log(this.confirmTitSelect01)
					console.log(this.map_eml)
				} else {
					this.confirmValSelect01 = selectedVal;
				}

			},
			handleErrorChangesEmail(val) { //邮箱错误状态接收
				this.errorEmail = val;
			},
			savecanvas() {
				let canvas = document.querySelector('.canvas');
				let that = this;
				html2canvas(canvas, {
					scale: 2,
					logging: false,
					useCORS: true
				}).then(function(canvas) {
					let type = 'png';
					let imgData = canvas.toDataURL(type);
					// 照片格式处理
					let _fixType = function(type) {
						type = type.toLowerCase().replace(/jpg/i, 'jpeg');
						let r = type.match(/png|jpeg|bmp|gif/)[0];
						console.log(r)
						return 'image/' + r;
					};
					imgData = imgData.replace(_fixType(type), 'image/octet-stream');
					let filename = "UUSound" + '.' + type;
					console.log(filename)
					console.log(imgData)
					that.saveFile(imgData, filename);
				});
			},
			saveFile(data, filename) {
				console.log(data)
				let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
				save_link.href = data;
				console.log(filename)
				save_link.download = filename;

				let event = document.createEvent('MouseEvents');
				event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				// console.log(event)
				save_link.dispatchEvent(event);
			},
			submitEvent() {

				/*邮箱格式和必填校验start*/
				if(this.emailValue === '') { //邮箱格式空校验，如果不是必填不用写
					this.errorEmail = true;
					this.errorEmailInfo = '请输入邮箱'
				}
				if(this.emailValue) { //邮箱格式不正确校验
					let result = validateEmail(this.emailValue);
					if(!result) {
						this.errorEmail = true;
						this.errorEmailInfo = '邮箱格式不正确'
					}
				}
				/*邮箱格式和必填校验end*/
				this.flagCanSubmit = (this.errorEmail === true);
				if(this.flagCanSubmit) {
					console.log("提交失败");
					
					return false;
				} else {
					console.log("提交成功");
					this.$router.push('/forend')
//					this.savecanvas()
					return true;
				}
			}

		}
	}
</script>
<style scoped lang="less">
@import "../../../../assets/css/Fertility.less";
	#app {
		background: #f1f3f6;
	}
	.canvas{
		background:#fff;
	}
	.save_btn {
		margin-top: .5rem;
		border: 0;
		border-radius: .6rem;
		background: #2D7FFC;
		color: #fff;
		font-size: .32rem;
		width: 5.9rem;
		height: .9rem;
		line-height: .9rem;
	}
	
	.footer {
		padding-top: .2rem;
		background: #f1f3f6;
	}
	
	.nav_title {
		height: .72rem;
		line-height: .72rem;
		text-align: left;
		font-size: .28rem;
		background: #f1f3f6;
		padding-left: .32rem;
		color: #999;
		span{
			font-size: .26rem;
			color: orange;
		}
	}
	
	.canvas {
		text-align: left;
		h1 {
			font-size: .34rem;
			height: .8rem;
			line-height: .8rem;
			text-align: center;
		}
		div {
			ul li {
				line-height: .52rem;
			}
			padding-top:.2rem;
			padding-bottom:.2rem;
			.scl_title {
				display: inline-block;
				min-width: 1.15rem;
				padding-left: .36rem;
				padding-right: .4rem;
				text-align: left;
			}
		}
	}
	
	.example-select_btn-wrapper {
		margin-top: 20px;
	}
	
	.example-select_arrowRight {
		display: block;
		width: 16px;
		height: 16px;
		/*background-image: url(../../../src/common/images/common-arrowRight.png);*/
		background-size: contain;
		margin-left: 10px;
	}
</style>