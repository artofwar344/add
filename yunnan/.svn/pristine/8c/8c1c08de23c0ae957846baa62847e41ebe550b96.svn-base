<template>
	<div class="changeCompany">
		<!-- 这里是展示数据中的 -->
		<!-- 头部的 -->
		<mt-header title="选择快递公司">
			<div @click='goback'  style='color: #666;' slot="left">
				<mt-button icon="back"></mt-button>
			</div>
		</mt-header>
		<div class="hearder_bottom"></div>

		<div class="div_line"></div>

		<!-- 中部内容 -->
		<div>
			<div class="send_address">
				<mt-cell class="sendAddress_title" title="收件地址"></mt-cell>
				<div class="sendAddressContent" v-if="(jiJianAddress == '')?false:true">{{jiJianAddress}}</div>
			</div>
			<div class="send_address">
				<mt-cell title="快递区间" style='width: 100%;'><span class="send_place">{{startAddress}}&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;{{endAddress}}</span></mt-cell>
			</div>
			<div class="send_wight">
				<mt-field label="快递重量" clear placeholder="请输入公斤数后点击比价" type="number" v-model="number" disableClear style="width:6rem;text-align:left;"></mt-field>
				<span class="wight_unit">公斤</span>
			</div>

			<div class="send_price">
				<mt-button class="search_button" @click="complatePrice()" type="primary">比价</mt-button>
			</div>
			<div v-if="(my_address_list.express_list)?true:false">
				<div class="wirte_line"></div>
				<div class="item_worn">
					<span>为你匹配地址附近最优的快递公司如下: </span>
				</div>
				<div class="address_list">
					<div class="select_express" v-for="(item,index) in my_address_list.express_list" :key='index' @click="selectCompanyInfo(item)">
						<div class="dot">
							<img slot="icon" :src="imgSrc[index]" width="39" height="39">
						</div>
						<div class="dizhi">
							<div class="addressDetail">
								<div class="tit">{{item.exp_name}}</div>
								<div class="cont">{{item.tel}}</div>
							</div>
							<div class="addressUpdate">
								<span style="font-size:17px;color:#2D7FFC;padding-right:0.1rem;">￥{{item.count_fee}}</span>
								<img slot="icon" src="../../assets/images/nextinto.png" width="6" height="10">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//import { mapGetters, mapMutations } from "vuex";
	import {
		Toast
	} from 'mint-ui';
	export default {
		name: 'MineEmail',
		//computed: {
		//      ...mapGetters([
		//          "expressdelivery"
		//      ])
		//},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				startAddress: '',
				addressDetail: '13800008888',
				endAddress: '',
				number: '',
				checkCode: '',
				my_address_list: [],
				imgSrc: [],
				ChangCompanyInfo: {},
				jiJianAddress: '',
				details: this.$router.currentRoute.query.details || {}
			}
		},
		methods: {
			//      ...mapMutations(["IntellectualSelection"]),
			// 生成随机数
			goback(){
				this.$router.go(-1)
			},
			createCode() {
				let code = '';
				let codeLength = 8;
				let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
				for(let i = 0; i < codeLength; i++) {
					let index = Math.floor(Math.random() * 10);
					code += random[index]
				}
				this.checkCode = code;
			},

			//验证只能输入正整数
			positiveIntege() {

			},

			checkPrice() {
				//				this.number = this.number.replace(/[^\.\d]/g, '');
				//				this.number = this.number.replace('.', '');
//				this.number = Math.round(this.number)
				console.log()
				String.prototype.indexOf.call(this.number,'.')
				if((this.number == '')) {
					Toast({
						message: "请输入物品重量",
						duration: 1000
					});
					//              isContinue = false;
					return false;
				} else if(this.number <= 0) {
					Toast({
						message: "物品重量最小为1",
						duration: 1000
					});
					return false
				}else if(String.prototype.indexOf.call(this.number,'.')!=-1){
					Toast({
						message: "物品重量为整数",
						duration: 1000
					});
					return false
				}

				return true;
			},

			//比价
			complatePrice() {
				if(this.checkPrice()) {
					this.createCode()
					this.details[0].goods.weight = this.number
					let obj = {
						txnCommCom: {
							tStsTraceId: "110567890",
							txnIttChnlId: 'C0011234567890987654321',
							txnIttChnlCgyCode: 'AC02C001'
							},
						txnBodyCom: {
							detail: this.details
						}

					};
					this.$ajaxRequest("post", "/gwlp/logistic/intellectualselection", obj)
						.then(response => {
							console.log(response)
										// let data = JSON.stringify(response.data)
										// let cent =JSON.parse(data)
								this.my_address_list = response
								this.my_address_list.express_list.forEach((item, index) => {

									if(item.exp_name.indexOf('圆通') !== -1) {
										item.tel = item.moble||'95554'
										item.imgurl = require('../../assets/images/yuan_tong.png')
										this.imgSrc[index] = require('../../assets/images/yuan_tong.png')
									}
									if(item.exp_name.indexOf('顺丰') !== -1) {
										item.tel = '95338'
										item.imgurl = require('../../assets/images/sfc.png')
										this.imgSrc[index] = require('../../assets/images/sfc.png')
									}
									if(item.exp_name.indexOf('中通') !== -1) {
										item.tel = '95311'
										item.imgurl = require('../../assets/images/zhong_tong.png')
										this.imgSrc[index] = require('../../assets/images/zhong_tong.png')
									}
									if(item.exp_name.indexOf('韵达') !== -1) {
										item.tel = '95546'
										item.imgurl = require('../../assets/images/yun_da.png')
										this.imgSrc[index] = require('../../assets/images/yun_da.png')
									}
									if(item.exp_name.indexOf('EMS') !== -1) {
										item.tel = '11183'
										item.imgurl = require('../../assets/images/EMS.png')
										this.imgSrc[index] = require('../../assets/images/EMS.png')
									}
									if(item.exp_name.indexOf('百世') !== -1) {
										item.tel = item.moble
										item.imgurl = require('../../assets/images/bskd.png')
										this.imgSrc[index] = require('../../assets/images/bskd.png')
									}
									if(item.exp_name.indexOf('天天') !== -1) {
										item.tel = item.moble
										item.imgurl = require('../../assets/images/天天快递logo@2x.png')
										this.imgSrc[index] = require('../../assets/images/天天快递logo@2x.png')
									}
									if(item.exp_name.indexOf('邮政') !== -1) {
										item.tel = item.moble
										item.imgurl = require('../../assets/images/邮政快递logo@2x.png')
										this.imgSrc[index] = require('../../assets/images/邮政快递logo@2x.png')
									}
									if(item.exp_name.indexOf('德邦') !== -1) {
										item.tel = item.moble
										item.imgurl = require('../../assets/images/德邦快递logo2@2x.png')
										this.imgSrc[index] = require('../../assets/images/德邦快递logo2@2x.png')
									}
									if(item.exp_name.indexOf('优速') !== -1) {
										item.tel = item.moble
										item.imgurl = require('../../assets/images/优速快递logo@2x.png')
										this.imgSrc[index] = require('../../assets/images/优速快递logo@2x.png')
									}

								})
						})
						.catch(error => {
							console.log(error);
						})
				}
			},
			selectCompanyInfo(row) {

				if(this.$router.currentRoute.query.type) {
					this.$router.push({
						name: 'delivery',
						params: {
							'row': row,
							goodType: this.details[0].goods.product_name,
							weight: this.number
						}
					})
				} else {
					this.$router.push({
						name: 'ExpressDelivery',
						params: {
							'row': row,
							goodType: this.details[0].goods.product_name,
							weight: this.number
						}
					})
				}

			}
		},
		mounted() {
			//    this.ChangCompanyInfo = this.expressdelivery.changCompany
			//    console.log('this.ChangCompanyInfo',this.ChangCompanyInfo)
			if(this.$router.currentRoute.query.type) {
				let accept = this.$router.currentRoute.query.details[0].receiver
				this.jiJianAddress = accept.province_name + accept.city_name + accept.exp_area_name + accept.address
				this.startAddress = this.$router.currentRoute.query.details[0].sender.province_name
				this.endAddress = this.$router.currentRoute.query.details[0].receiver.province_name
				this.number = '1'
			} else if(this.$store._modules.root.state.$expressdelivery.sendUserInfo.postname) {
				this.jiJianAddress = (this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.prov_code +
					this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.city_code +
					this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.cnty_code +
					this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.address) || ''
				this.startAddress = this.$store._modules.root.state.$expressdelivery.sendUserInfo.prov_code
				this.endAddress = this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.prov_code
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	.addressDetail .cont {
		line-height: .6rem;
	}
	
	.changeCompany {
		background-color: #ffffff;
	}
	
	.mint-header {
		height: 1.28rem;
		background-color: #ffffff;
		padding-top: 0.29rem;
	}
	
	.mint-header>>> .mint-header-button {
		margin-left: 0.36rem;
	}
	
	.mint-header>>> .mint-header-title {
		font-size: 0.34rem;
		color: #333333;
	}
	
	.hearder_bottom {
		height: 0.2rem;
		background-color: #F1F3F6;
	}
	
	.send_address {
		min-height: 1rem;
		border-bottom: 0.02rem solid #EEEEEE;
		padding: 0;
		padding-top: 0.08rem;
		margin: 0 0.36rem;
	}
	
	.send_address>>> .mint-cell-text {
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #333333;
	}
	
	.send_address>>> .mint-cell-value {
		padding-right: 0rem;
		font-family: PingFangSC-Regular;
		font-size: 0.26rem;
		color: #333333;
	}
	
	.sendAddress_title {
		float: left;
		min-height: .7rem !important;
	}
	
	.sendAddressContent {
		float: right;
		margin-top: 0.2rem;
		font-family: PingFangSC-Regular;
		font-size: 0.24rem;
		color: #666;
		max-width: 60%;
		text-align: left;
	}
	
	.send_wight {
		height: 1rem;
		padding: 0;
		padding-top: 0.08rem;
		margin-left: 0.36rem;
		vertical-align: middle;
	}
	
	.send_wight .mint-cell {
		float: left;
	}
	
	.send_wight>>> .mint-field-core {
		float: right;
		text-align: right;
	}
	
	.send_wight>>> .mint-cell-text {
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #333333;
	}
	
	.send_wight>>> .mint-field-core {
		font-family: PingFangSC-Regular;
		font-size: 0.26rem;
		color: #333333;
	}
	
	.send_wight .wight_unit {
		float: right;
		margin-top: 0.34rem;
		margin-right: 0.36rem;
		font-family: PingFangSC-Regular;
		font-size: 0.26rem;
		color: #333333;
	}
	
	.send_price {
		height: 2.5rem;
		position: relative;
	}
	
	.send_price .search_button {
		height: 0.8rem;
		width: 6rem;
		border-radius: 0.45rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -3rem;
		margin-top: -0.45rem;
	}
	
	.send_price {
		height: 2.5rem;
		background: #EEEEEE;
		position: relative;
	}
	
	.send_price .search_button {
		height: 0.9rem;
		width: 6rem;
		border-radius: 0.45rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -3rem;
		margin-top: -0.45rem;
	}
	
	.wirte_line {
		height: 0.3rem;
		background-color: #ffffff;
	}
	
	.item_worn {
		height: 0.42rem;
		background-color: #ffffff;
		border-left: 0.06rem solid #2D7FFC;
		margin: 0 0 0.4rem 0.36rem;
		text-align: left;
	}
	
	.item_worn span {
		font-family: PingFangSC-Medium;
		font-size: 0.3rem;
		color: #0D0D0D;
		margin-left: 0.16rem;
		font-weight: 500;
	}
	
	.address_list {
		background-color: #ffffff;
	}
	
	.address_list .select_express {
		height: 1.5rem;
		/*    line-height: 1.5rem;*/
		border-bottom: 0.02rem solid #EEEEEE;
		margin: 0 0.36rem;
		padding: 0;
		padding-top: 0.08rem;
	}
	
	.address_list .dot {
		float: left;
		width: 15%;
		margin-top: 0.4rem;
	}
	
	.address_list .dizhi {
		width: 70%;
		float: left;
		vertical-align: middle;
		margin-top: 0.16rem;
	}
	
	.dizhi .addressDetail {
		float: left;
		width: 60%;
	}
	
	.address_list:last-child {
		border: 0;
	}
	
	.select_express .addressDetail {
		float: left;
	}
	
	.addressDetail .tit {
		font-size: 0.3rem;
		font-weight: 600;
		line-height: 0.74rem;
		margin-top: 0 !important;
	}
	
	.addressDetail .cont {
		color: #666666;
		font-size: 0.24rem;
	}
	
	.select_express .addressUpdate {
		float: right;
		margin-top: 0.36rem;
		position: relative;
		right: -10%;
		display: flex;
		padding-left: .5rem;
		justify-content: center;
		align-items: center;
	}
</style>
<style type="text/css">
	.mint-cell-title {
		text-align: left !important;
	}
</style>