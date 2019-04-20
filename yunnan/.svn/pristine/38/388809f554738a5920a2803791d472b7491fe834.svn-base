<template>
	<div class="myaddress_wrap">
		<mt-header title="我的地址">
			<div @click='goback' slot="left">
				<mt-button icon="back" style='color:#666'></mt-button>
			</div>
			<mt-button slot="right" @click="toDel()" style='color:#666'>删除地址</mt-button>
		</mt-header>
		<div class="hearder_bottom"></div>
		<div class="address_list">
			<div class="select_express" v-for="item in list">
				<div class="addressDetail" @click="returnIndex(item)">
					<div class="tit">{{item.post_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.post_tel}}</div>
					<div class="cont">{{item.prov_code}}{{item.city_code}}{{item.cnty_code}}{{item.address}}</div>
				</div>
				<div class="addressUpdate">
					<img @click="toSelfAddress(item)" slot="icon" src="../../assets/images/address_update.png" width="18" height="18">
				</div>
			</div>
		</div>
		<div class="add_address">
			<mt-button class="order_button" @click="addNew()" type="primary">添加地址</mt-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					list: [],
					initData: '',
					userid: '',
					remark: ''
				}
			},
			methods: {
				toDel() {
					this.$router.push({
						path: '/DelAddress'
					})
				},
				goback(){
					this.$router.go(-1)
				},
				toSelfAddress(item) {

					this.$router.push({
						path: '/updateAddress',
						query: {
							origin: 'updateAddress',
							address: item
						}
					})
				},
				// 返回寄快递首页
				returnIndex(v) {
					let saveAddress = {
						prov_code: v.prov_code,
						city_code: v.city_code,
						cnty_code: v.cnty_code,
						address: v.address,
						postname: v.post_name,
						tel: v.post_tel,
						member_id: this.userid,
					}
					if(this.remark == 'save') {
						this.$store._modules.root.state.$expressdelivery.saveSendUserInfo = saveAddress

					} else if(this.remark == 'matter') {
						this.$store._modules.root.state.$expressdelivery.matterUserInfo = saveAddress

					} else {
						this.$store._modules.root.state.$expressdelivery.sendUserInfo = saveAddress

					}
					this.$router.go(-1)
				},
				// 添加地址
				addNew() {
					this.$router.push({
						path: '/updateAddress',
						query: {
							origin: 'add'
						}
					})
				},
				getData() {
					let data = {
						txnCommCom: {
							tStsTraceId: "110567890",
							txnIttChnlId: 'C0011234567890987654321',
							txnIttChnlCgyCode: 'AC02C001'
						},
						txnBodyCom: {
							matter_id: window.sessionStorage.getItem("matterid"),
							member_id: window.sessionStorage.getItem("userid") //'b1d6cd55d7544d97986b287403a65a4b'
						}
					}
					this.$ajaxRequest('post', '/gsp/fsx04004', data)
						.then(res => {
							this.list = res.list

						})
						.catch(error => {

						})
				}
			},
			mounted() {
				this.userid = window.sessionStorage.getItem('userid')
				if(this.$store._modules.root.state.$expressdelivery.remark && this.$store._modules.root.state.$expressdelivery.remark != '') {
					this.remark = this.$store._modules.root.state.$expressdelivery.remark
				}
				this.initData = this.$router.currentRoute.query.remark
				this.getData()

			}
	}
</script>

<style scoped>
	.myaddress_wrap {
		/*    margin-bottom:3.78rem;*/
		background-color: #ffffff;
		/*    height:80%;*/
		height: 100%;
	}
	
	.mint-header {
		height: 1.28rem;
		background-color: #ffffff;
		padding-top: 0.29rem;
	}
	
	.mint-header>>> .mint-header-title {
		font-size: 0.34rem;
		color: #333333;
	}
	
	.hearder_bottom {
		height: 0.2rem;
		background-color: #F1F3F6;
	}
	.address_list{
		max-height: 80%;
	}
	.address_list .select_express {
		height: 1.2rem;
		line-height: 1.32rem;
		border-bottom: 0.02rem solid #EEEEEE;
		padding-bottom: 0.05rem;
		margin: 0 0.36rem;
		padding: 0;
		padding-top: 0.24rem;
		box-sizing: content-box;
	}
	
	.address_list:last-child {
		border: 0;
	}
	
	.select_express .addressDetail {
		float: left;
		width: 93%;
	}
	
	.addressDetail .tit {
		font-size: 0.28rem;
		font-weight: 600;
		line-height: 0.6rem;
		text-align: left;
	}
	
	.addressDetail .cont {
		color: #666666;
		font-size: 0.22rem;
		font-family: PingFangSC-Regular;
		text-align: left;
		line-height: .4rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.select_express .addressUpdate {
		float: right;
		width: 5%;
		/*    margin-top:0.5rem;*/
	}
	
	.add_address {
		background-color: #F1F3F6;
		height: 1.78rem;
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
	}
	
	.add_address .order_button {
		height: 0.9rem;
		width: 6rem;
		border-radius: 0.45rem;
		position: absolute;
		left: 50%;
		top: 40%;
		margin-left: -3rem;
		margin-top: -0.45rem;
	}
</style>