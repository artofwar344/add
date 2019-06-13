<template>
	<div class="signName">
		<towtop name="签名" />
		<div class='signBox'>
			<div class='mint-cell' v-for='(item,index) in this.data.peAppendix' @click='preview(item,index)' :key='index'>
				<div class='mint-cell-wrapper borderBottom'>
					<div class='mint-cell-title'>{{item.appendixName}}</div>
					<div class='mint-cell-value is-link'></div>
					<i class='mint-cell-allow-right'></i>
				</div>
			</div>
		</div>
		<div class="btnBox">
			<mt-button type="primary" class='submitBtn' @click='submitInfo'>签名</mt-button>
		</div>
		<mt-popup v-model="popupVisible" class='mypopup'>
			<div class='passwordTitle'>请输入签名密码</div>
			<div class='passwtBox'>
				<div v-for='item in this.pwList' class='listBox'>
					<span v-if="item == '1'"></span>
				</div>
				<input type="password" class='hideBox' ref='pw' v-model='password' autofocus="true" />
			</div>
			<div class='passwordTs'>
				说明:签名密码为用户注册时所设置的密码
			</div>
		</mt-popup>
		<mt-popup v-model="viewShow" class='mypopup'>
			<img :src="imgUrl" alt="" style="width: 6.2rem;" />
		</mt-popup>
	</div>

</template>

<script>
	import towtop from '@/components/HederTwo.vue'

	import {
		Toast,
		Indicator
	} from "mint-ui";
	export default {
		data() {
				return {
					userId: '',
					viewShow: false,
					imgUrl: '',
					previewArr: [],
					pwList: [0, 0, 0, 0, 0, 0],
					popupVisible: false,
					password: '',
					data:''
					
				}
			},

			components: {
				towtop
			},
			watch: {
				password(ne, old) {       //监测密码框input输入的新值
					let arr = []
					for(let i = 0; i < 6; i++) {
						if(i < ne.length) {
							arr.push('1')
						} else {
							arr.push('0')
						}
					}

					console.log(arr)
					this.pwList = arr
					if(ne.length == 6) {
						this.checkPassword()
						this.popupVisible = false
					}
				}
			},
			computed: {

			},
			methods: {
				look(e, index) { //返回材料预览的图片
					this.$ajaxRequest('post', '/gsp/mng80206', {
							'txnBodyCom': {
								'chann_id': '1',
								userId: this.userId,
								id: e.id,
								'appNo': this.data.appNo,

							}
						})
						.then((res) => {
							Indicator.close();
							this.$nextTick(() => {
								this.viewShow = true
							})

							this.imgUrl = "data:image/png;base64," + res.result
							console.log('预览', res)
							if(this.previewArr.indexOf(index) == -1) {
								this.previewArr.push(index)
							}
						})
				},
				preview(item, index) { //点击材料清单  出现预览界面
					console.log(index, item, this.previewArr.indexOf(index))
					Indicator.open('加载中...');
					this.look(item, index)

				},
				submitInfo() { //点击弹出签名密码框
					if(!this.isPreview()) {
						return false
					}
					this.$refs['pw'].focus()
					this.password = ''
					this.pwList = [0, 0, 0, 0, 0, 0]
					this.popupVisible = true

				},
				isPreview() { //验证是否已经预览完全部的材料
					if(this.previewArr.length == this.data.peAppendix.length) {
						return true
					} else {
						Toast({
							message: "请在签名前先预览所有的材料清单",
							duration: 1000
						});
						return false
					}
				},
				checkPassword() { //验证签名密码
					this.$ajaxRequest('post', '/gsp/mng60038', {
							'txnBodyCom': {
								authorizationCode:this.password,
								userId: this.userId,

								appNo: this.data.appNo

							}
						})
						.then((res) => {
							if(res.result && res.result == 'true') {
								this.sendToAppForm()
							} else {
								Toast({
									message: "密码错误请重新输入",
									duration: 1000
								});

							}
							console.log(res)
						})
				},
				sendToAppForm() { //提交到appform
					this.$ajaxRequest('post', '/gsp/appForm00001', {
							'txnBodyCom': {
								'work_id': sessionStorage.WorkId,
								'matter_id': sessionStorage.matterid,
								'member_id': sessionStorage.userid  ,
								json_content: {
									appNo:this.data.appNo,
									work_id: sessionStorage.WorkId,
									userId:this.userId
								},

							}
						})
						.then((res) => {
							if(res.Status&&res.Status =='00'){
								this.$router.push('/aicResultPage')
							}
							
							console.log(res)
						})
				}
			},
			created() {
			
					this.userId = sessionStorage.gsUserId
	
				console.log(this.data) // 	this.getData()
				this.data= JSON.parse(sessionStorage.materialListT)
			
			}
	}
</script>

<style lang="less" scoped>
	.signName {
		text-align: left;
	}
	
	.submitBtn {
		margin-top: .5rem;
		width: 4rem;
		border-radius: .5rem;
	}
	
	.passwordTitle {
		height: 1rem;
		line-height: 1rem;
		background: #26a2ff;
		font-size: .32rem;
		color: #F5F5F5;
		text-align: center;
	}
	
	.passwtBox {
		height: .8rem;
		width: 5.5rem;
		position: relative;
		display: flex;
		margin: .5rem 0;
		.listBox {
			height: .8rem;
			width: .8rem;
			background: #D0D0D0;
			margin-left: .1rem;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			span {
				width: .24rem;
				height: .24rem;
				background: black;
				border-radius: 50%;
			}
		}
		.hideBox {
			opacity: 0;
			height: .8rem;
			width: 5.5rem;
			position: absolute;
			left: 0;
			top: 0;
		}
	}
	
	.passwordTs {
		color: orangered;
		font-size: .26rem;
		padding-left: .2rem;
		margin-bottom: .4rem;
	}
	
	.mypopup {
		overflow: hidden;
		border-radius: .2rem;
	}
	
	.btnBox {
		text-align: center;
	}
</style>