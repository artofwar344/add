<template>
	<div class="stuff-list-page">
		<towtop name="材料清单" />
		<div class="container">
			<div class="card" v-for="(item, index) in data.peAppendix" :key="index">
				<div class="head">
					<div class="vertical-line"></div>
					<p class="title">{{item.appendixName}}</p>
					<p class="status" v-if="item.tip">已完成</p>
				</div>
				<p class="des">填报方式：系统自动生成</p>
				<div class="foot-btn">
					<p class="inner-btn" v-if='item.needExtra' @click="clickHandle('信息完善',item)">信息完善</p>
					<p class="inner-btn" @click="clickHandle('预览',item)">预览</p>
				</div>
			</div>
			<mt-button type="primary" class='saveBtn' @click='saveAppForm'>下一步</mt-button>
		</div>
		<mt-popup v-model="viewShow" class='mypopup'>
			<img :src="imgUrl" alt="" style="width: 6.2rem;" />
		</mt-popup>

	</div>
</template>

<script>
	import towtop from '@/components/HederTwo.vue'
	import {
		Toast,
		MessageBox,
		Indicator
	} from 'mint-ui';
	export default {
		data() {
				return {
					viewShow: false,
					imgUrl: '',
					userId: null,

					data: '',
					getSendInfo:'',
					getReverceIndo:''
				}
			},
			components: {
				towtop
			},
			computed: {

			},
			methods: {
				look(e) { //预览接口
					console.log(e)
					Indicator.open({
						text: '加载中...',
						spinnerType: 'fading-circle'
					});
					this.$ajaxRequest('post', '/gsp/mng80206', {
							'txnBodyCom': {
								'chann_id': '1',
								userId: this.userId,
								id: e,
								'appNo': this.getReverceIndo.result.appNo,

							}
						})
						.then((res) => {
							this.viewShow = true
							this.imgUrl = "data:image/png;base64," + res.result
							console.log('预览', res)
							Indicator.close();
						})
						setTimeout(()=>{
							Indicator.close();
						},5000)
				},
				clickHandle(item, ele) { //  信息完善和预览按钮
					console.log(ele)
					if(item === '信息完善') {
						this.$router.push({
							name: 'consignorOrSiteInfo',
							params: {
								source: ele,
								appNo: this.data.appNo,
								list: this.data.cacheId
							}
						})

					}
					if(item === '预览' ) {
						console.log(ele.id)
						if(!ele.tip&&ele.needExtra){
							Toast({
          							message: "请先完善信息",
          							duration: 1000
          						});
						}else{
							this.look(ele.id)
						}
						

					}
				},
				saveAppForm() { //下一步提交按钮
//						this.$router.push({name:'signName',params:{data:this.data}})
						this.getSendInfo.type = 'sign'
						this.getSendInfo.appNo =this.getReverceIndo.result.appNo
						this.getSendInfo.userId = this.userId
					this.$ajaxRequest('post', '/gsp/mng80205', {
							'txnBodyCom': this.getSendInfo
						})
						.then((res) => {
							if(res.result){
								sessionStorage.materialListT = JSON.stringify(this.data)
								this.$router.push('/signName')
							}
							console.log(res)
						})
				},
				getList() { //获取材料清单
					this.$ajaxRequest('post', '/gsp/mng80204', {
							'txnBodyCom': {

								userId: this.userId,

								'appNo':this.getReverceIndo.result.appNo,

							}
						})
						.then((res) => {
							this.data = res
									this.data.peAppendix.forEach((item,index)=>{
						if(item.appendixNumb == '2'&&sessionStorage.wtProxy&&sessionStorage.wtProxy=='1'){
							item.tip = true
						}
						if(item.appendixNumb == '5'&&sessionStorage.operatorArea&&sessionStorage.operatorArea=='1'){
							item.tip = true
						}
					})

							console.log('获取材料清单', res)

						})
				}
			},
			created() {
		
					this.userId = sessionStorage.gsUserId
				if(sessionStorage['80205Send']){
					this.getSendInfo =JSON.parse(sessionStorage['80205Send'])
				this.getReverceIndo = JSON.parse(sessionStorage['80205Res'])
				this.getReverceIndo.result = JSON.parse(this.getReverceIndo.result).result
				}else{
						MessageBox.alert('暂无信息', '提示');
				}
				
				this.getList() //获取材料清单
				console.log(this.getSendInfo)
			},

			
	}
</script>

<style lang="less" scoped>
	.stuff-list-page {
		height: 100%;
		display: flex;
		flex-direction: column;
		.container {
			flex: 1;
			padding: 0.36rem;
			overflow: scroll;
			.card {
				padding: 0.44rem;
				padding-bottom: 0;
				width: 100%;
				background: #fff;
				border-radius: 10px;
				margin-bottom: 0.36rem;
				.head {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.vertical-line {
						width: 4px;
						height: 15px;
						background: #2D7FFC;
						border-radius: 25px;
					}
					.title {
						font-family: PingFangSC-Semibold;
						font-size: 14px;
						color: #000000;
						letter-spacing: -0.34px;
						line-height: 22px;
						margin: 0 0.2rem;
					}
					.status {
						padding: 0.1rem;
						background: #328AF6;
						color: #fff;
						font-family: PingFangSC-Regular;
						font-size: 12px;
						border-radius: 50px;
					}
				}
				.des {
					margin: 0.2rem 0;
					text-align: left;
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #999999;
					letter-spacing: 0;
					line-height: 24px;
				}
				.foot-btn {
					display: flex;
					border-top: 1px solid #ECECEC;
					height: 1rem;
					.inner-btn {
						flex: 1;
						line-height: 1rem;
						text-align: center;
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #666666;
						letter-spacing: 0;
					}
				}
			}
		}
	}
	
	.saveBtn {
		width: 4rem;
	}
</style>