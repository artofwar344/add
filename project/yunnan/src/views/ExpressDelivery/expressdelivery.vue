<template>
	<div class='delivery_wrap text_left'>
		<!-- <mt-header title="寄快递">
            <router-link to="/delivery" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header> 
        <div class="hearder_bottom"></div>-->
		<towtop :name="titlename" />
		<div class="address">
			<div class="select_express">
				<div class="dot">
					<img slot="icon" src="../../assets/images/dot.png" width="8" height="8">
				</div>
				<div class="dizhi">
					<div class="addressDetail" @click="jiJanAddress('send')">
						<mt-cell style="margin-top:0.45rem;width:70%;" v-if="(userName == '')&&(userTel == '')&&(addressDetail == '')" value="请输入寄件人信息"></mt-cell>
						<div v-if="(userName != '')||(userTel != '')||(addressDetail != '')">
							<div class="tit">{{userName}}&nbsp;&nbsp;&nbsp;&nbsp;{{userTel}}</div>
							<div class="cont">{{addressDetail}}</div>
						</div>
					</div>
					<div class="addressUpdate">
						<img slot="icon" @click="tomyaddress('send')" src="../../assets/images/address_List.png" width="18" height="20">
					</div>
				</div>
			</div>
			<div class="select_express">
				<div class="dot">
					<img slot="icon" src="../../assets/images/re_dot.png" width="8" height="8">
				</div>
				<div class="dizhi">
					<div class="addressDetail" @click="shouJianAddress('save')">
						<mt-cell style="margin-top:0.45rem;width:70%;" v-if="(receiveName == '')&&(receiveTel == '')&&(receiveDetail == '')" value="请输入收件人信息"></mt-cell>
						<div v-if="(receiveName != '')||(receiveTel != '')||(receiveDetail != '')">
							<div class="tit">{{receiveName}}&nbsp;&nbsp;&nbsp;&nbsp;{{receiveTel}}</div>
							<div class="cont">{{receiveDetail}}</div>
						</div>
					</div>
					<div class="addressUpdate">
						<img slot="icon" @click="tomyaddress('save')" src="../../assets/images/address_List.png" width="18" height="20">
					</div>
				</div>
			</div>
		</div>
		<div class="hearder_bottom"></div>
		<div class="thingsInfo" @click="itemInfoActionSheet()">
			<mt-cell title="物品信息" value="请选择" is-link class='text_left'>{{itemInfo}}</mt-cell>
		</div>
		<mt-actionsheet :actions="actions"  v-model="sheetVisible" cancelText="">
		</mt-actionsheet>

		<div class="hearder_bottom"></div>
		<div class="express_info">
			<div v-if="(JSON.stringify(SelectCompanyInfo) == '{}')?true:false" class="select_express_company" @click="selectCompany()">
				<mt-cell title="请选择快递公司" is-link></mt-cell>
			</div>
			<div v-if="(JSON.stringify(SelectCompanyInfo) == '{}')?false:true" @click="selectCompany()" class="changcompanyStyle">
				<mt-cell :title="SelectCompanyInfo.exp_name" value="更换快递公司" is-link>
					<img slot="icon" :src="SelectCompanyInfo.imgurl" width="39" height="39">
				</mt-cell>
			</div>
			<div class="select_express_price">
				<mt-cell title="参考价格">{{SelectCompanyInfo.count_fee}}&nbsp;元</mt-cell>
			</div>
			<div class="select_express pay_style">
				<mt-cell title="付费方式">
					<mt-radio class="mt_radio" :value.sync="radioSelect" :options="['寄付', '到付']">
					</mt-radio>
				</mt-cell>
			</div>
		</div>
		<div class="hearder_bottom"></div>
		<div class="thingsInfo" @click="orderTime()">
			<mt-cell title="预约取件时间" is-link>{{timeList[0]}}点&nbsp;至&nbsp;{{timeList[1]}}点</mt-cell>
		</div>
		<mt-popup v-model="orderPopupVisible" position="bottom" class="prop-tk">
			<div class="pop-btn">
				<p class="order_cancle" @click="orderCancle()">取消</p>
				<p class="order_insure" @click="orderInsure()">确定</p>
			</div>
			<mt-picker class="orderPicker" :slots="slots" @change="OrderValuesChange"></mt-picker>
		</mt-popup>
		<div class="hearder_bottom"></div>
		<div class="thingsInfo">
			<div @click="openMessage()">
				<mt-cell title="给快递员留言" is-link></mt-cell>
			</div>
			<div v-if="(leaveMessages == '')?false:true" style="padding-bottom:0.2rem;">{{leaveMessages}}</div>
		</div>
		<mt-popup class="leave" v-model="LeaveMessageVisible" position="bottom">
			<div class="leave_top">
				<div class="leave_left">给快递员留言</div>
				<div class="leave_right" @click="closeMessage()">X</div>
			</div>
			<div style="clear:both;"></div>
			<div class="leave_bottom">
				<mt-field type="textarea" @input="messageChange(leaveMessages)" placeholder="如：取件地址信息，什么时候来取件，如何联系等信息" v-model="leaveMessages" :attr='{maxlength:20}'></mt-field>
				<div class="sizeL">{{number}}<span>/20</span></div>
			</div>
			<div class="insure">
				<mt-button class="insure_button" @click="MessageInsure()" type="primary">确定</mt-button>
			</div>
		</mt-popup>
		<div class="order">
			<mt-button class="order_button" @click="order()" type="primary" :disabled='isDisabled'><span v-if='!isDisabled'>预约下单</span><span v-if='isDisabled'>下单中</span><mt-spinner type="triple-bounce" color='#fff' style='display: inline-block;margin-left: .1rem;' v-if='isDisabled'></mt-spinner></mt-button>
		</div>
	</div>
</template>

<script>
function dateFormat(time, format) {
		const t = new Date(time);
		const tf = function(i) {
			return(i < 10 ? '0' : '') + i;
		};
		return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a) => {
			switch(a) {
				case 'yyyy':
					return tf(t.getFullYear());
				case 'MM':
					return tf(t.getMonth() + 1);
				case 'mm':
					return tf(t.getMinutes());
				case 'dd':
					return tf(t.getDate());
				case 'HH':
					return tf(t.getHours());
				case 'ss':
					return tf(t.getSeconds());
				default:
					break;
			}
		});
	}
	import towtop from "@/components/HederTwo";
	import {
		MessageBox
	} from 'mint-ui';
	//import { mapGetters, mapMutations } from "vuex";
	import {
		Toast
	} from 'mint-ui';
	export default {
		components: {
			towtop
		},
		//  computed: {
		//      ...mapGetters([
		//          "expressdelivery"
		//      ])
		//  },
		data() {
			return {
				isDisabled:false,
				SelectCompanyInfo: this.$router.currentRoute.params.row || {}, //请选择快递公司信息
				titlename: '寄快递',
				radioSelect: '寄付',
				userName: '',
				userTel: '',
				addressDetail: '',
				userprov: '',
				usercity: '',
				usercnty: '',
				receiveName: '',
				receiveTel: '',
				receiveDetail: '',
				receiveprov: '',
				receivecity: '',
				receivecnty: '',
				Address_Tag: '',
				receive_Tag: '',
				receiveInfo: '',
				userid: '',
				sheetVisible: false,
				timeList: [],
				// action sheet 选项内容
				   actions: [{    
					name: '文件',
					    method: this.getfile // 调用methods中的函数
						   
				}, {    
					name: '食品',
					     method: this.getfood // 调用methods中的函数
						   
				}, {    
					name: '服饰',
					    method: this.getClothes // 调用methods中的函数
						   
				}, {    
					name: '生活用品',
					    method: this.getDailyUse // 调用methods中的函数
						   
				}, {    
					name: '电子产品',
					    method: this.getElectronicProduct // 调用methods中的函数
						   
				}, {    
					name: '其他',
					    method: this.getOthers // 调用methods中的函数
						   
				}],
				orderPopupVisible: false, //预约时间弹窗
				slots: [{
					flex: 1,
					values: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
					className: 'slot1',
					textAlign: 'left'
				}, {
					divider: true,
					content: '-',
					className: 'slot2'
				}, {
					flex: 1,
					values: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
					className: 'slot3',
					textAlign: 'right'
				}],
				itemInfo: this.$router.currentRoute.params.goodType || '文件',
				weight: this.$router.currentRoute.params.weight || '1',
				LeaveMessageVisible: false,
				leaveMessages: '',
				number: '0',
				day:''
			}
		},
		methods: {
			//      ...mapMutations(["ThingsInfo","SaveSendUserInfo","SaveTime","LeaveMessage","ChangCompany"]),
			tomyaddress(mark) {
				this.$store._modules.root.state.$expressdelivery.remark = mark
				this.$router.push('/myaddress')
			},
			jiJanAddress(mark) {
				let obj = {
						remark: mark,
						Address: {
							Post_Name: this.userName,
							Address: this.addressDetail,
							Post_Tel: this.userTel,
							Address_Tag: this.Address_Tag
						},
						to: '1'
					}
					//         this.SaveSendUserInfo(obj)
				this.$store._modules.root.state.$expressdelivery.remark = mark
				this.$router.push('/UpdateAddress')
			},
			shouJianAddress(mark) {
				let obj = {
						remark: mark,
						Address: {
							Post_Name: this.receiveName,
							Address: this.receiveDetail,
							Post_Tel: this.receiveTel,
							Address_Tag: this.receive_Tag
						},
						to: '1'
					}
					//         this.SaveSendUserInfo(obj)
				this.$store._modules.root.state.$expressdelivery.remark = mark
				this.$router.push('/UpdateAddress')
			},
			addressMag() {
				if(this.receiveInfo == '') {
					this.$router.push({
						path: '/NewAddress'
					})
				} else {
					this.$router.push({
						path: '/UpdateAddress'
					})
				}
			},
			// 选择快递公司前的效验
			CompanyCheck() {

				let isContinue = true;
				if((this.userName == '') || (this.addressDetail == '') || (this.userTel == '')) {
					Toast({
						message: '请完善寄件人信息',
						duration: 1000
					});
					isContinue = false;
					return false;
				}
				if(!isContinue) return false;
				if((this.receiveName == '') || (this.receiveDetail == '') || (this.receiveTel == '')) {
					Toast({
						message: "请完善收件人信息",
						duration: 1000
					});
					isContinue = false;
					return false;
				}
				return true;
			},
			// 选择快递公司
			selectCompany() {
				if(this.CompanyCheck()) {
					let details = [{
							"goods": {
								"product_name": this.itemInfo,
								"weight": "1"
							},
							"order_code": "27681701",
							"receiver": {
								"address": this.receiveDetail,
								"city_name": this.receivecity,
								"exp_area_name": this.receivecnty,
								"province_name": this.receiveprov
							},
							"sender": {
								"address": this.addressDetail,
								"city_name": this.usercity,
								"exp_area_name": this.usercnty,
								"province_name": this.userprov
							}
						}]
						//         this.ChangCompany(obj)
						//    console.log('obj',obj)
					this.$router.push({
						path: '/ChangeCompany',
						query: {
							'details': details
						}
					})
				}
			},
			//check订单
			checkOrder() {

				let isContinue = true;
				if((this.userName == '') || (this.addressDetail == '') || (this.userTel == '')) {
					Toast({
						message: '请完善寄件人信息',
						duration: 1000
					});
					isContinue = false;
					this.isDisabled = false
					return false;
				}
				if(!isContinue) return false;
				if((this.receiveName == '') || (this.receiveDetail == '') || (this.receiveTel == '')) {
					Toast({
						message: "请完善收件人信息",
						duration: 1000
					});
					isContinue = false;
					this.isDisabled = false
					return false;
				}

				if(!isContinue) return false;
				if((this.SelectCompanyInfo.exp_name == '') || (this.SelectCompanyInfo.exp_name == null)) {
					Toast({
						message: "请选择快递公司",
						duration: 1000
					});
					isContinue = false;
					this.isDisabled = false
					return false;
				}
				return true;
			},
			// 预约下单
			order() {
				//       let Address_Tag = this.Address_Tag.split(' ');
				//       let receive_Tag = this.receive_Tag.split(' ');
			console.log( this.timeList[0],this.day)
				this.isDisabled = true
				var orderid = ''
				for(let i = 0; i < 8; i++) {
					orderid += Math.floor(Math.random() * 10)
				}
				let payType='1'
				if(this.radioSelect=='寄付'){
					payType='1'
				}else{
					payType='2'
				}
				let sender = {
					"name": this.userName, //姓名
					"company": "神州儿女", //公司
					"tel": this.userTel, //电话
					"mobile": this.userTel, //手机
					"post_code": "040000", //邮编
					"province_name": this.userprov, //收件省
					"city_name": this.usercity, //收件市
					"exp_area_name": this.usercnty, //收件区/县
					"subdistrict": " ", //街道(如华强北街道)
					"address": this.addressDetail //收件人详细地址
				};
				let goods = {
					"product_name": this.itemInfo, //商品名称
					"volume": "0.2", //体积
					"quantity": "1", //数量
					"weight": this.weight //重量
				};
				let receiver = {
					"id": "2", //id
					"name": this.receiveName, //姓名
					"company": "建行总部", //公司
					"tel": this.receiveTel, //电话
					"mobile": this.receiveTel, //手机
					"post_code": "010000", //邮编
					"province_name": this.receiveprov, //收件省
					"city_name": this.receivecity, //收件市
					"exp_area_name": this.receivecnty, //收件区/县
					"subdistrict": " ", //街道(如华强北街道)
					"address": this.receiveDetail //收件人详细地址
				}
				if(this.checkOrder()) {
					let obj ={
						"txnCommCom": {
							"tStsTraceId": "110567890",
							"txnIttChnlId": 'C0011234567890987654321',
							"txnIttChnlCgyCode": 'AC02C001',
						},
						"txnBodyCom": {

							"usr_id": this.userid, //用户id
							"shipper_code": this.SelectCompanyInfo.shipper_code, //快递公司编码
							"order_id": orderid, //工单号
							"shipper_name": this.SelectCompanyInfo.exp_name,
							"type_of_id": 1, //证件类别
							"number_of_id":sessionStorage.cardid, //证件号码
							"contact": {
								"phone": this.userTel, //联系方式
								"mobile": this.userTel //联系方式
							},
							"receiver": receiver,
							"sender": sender,
							"goods": goods,
							"customer_remark": this.leaveMessages, //用户备注
							"fc_box_shipper_code": "", //快递柜支持预约的快递公司编码
							"logistic_code": "", //快递单号
							"pay_type":payType, //运费支付方式
							"exp_type": '1', //快递类型
							"is_notice": "0", //是否通知快递员上门揽件
							"start_date":this.day+ ' '+this.timeList[0]+':00:00', //上门取货开始时间
							"end_date": this.day+ ' '+this.timeList[1]+':00:00', //上门取货结束段
							"Is_Send_Message": "0", //是否订阅物流节点短信
							"departmentId": "1", //部门id
							"businessId": "2" //事项id 
						}

					}
					this.$ajaxRequest("post", "/gwlp/logistic/authreservation", obj)
						.then(response => {
							console.log('下单成功',response)
							this.isDisabled = false
							// let data = JSON.stringify(response.data)
							// let cent =JSON.parse(data)
							if(response.success == true ) {
								// 下单成功
								let time = dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')
								this.$router.push({
									name: 'OrderDetail',
									params: {
										orderInfo: response,
										sender: sender,
										goods: goods,
										receiver: receiver,
										start_date: this.timeList[0],
										end_date: this.timeList[1],
										type: this.radioSelect,
										userid: this.userid,
										logistic_code: '',
										order_id: response['order_id'],
										expname: this.SelectCompanyInfo,
										productname: this.itemInfo,
										time:time
									}
								})
							} else {
							
								Toast({
									message:response.reason,
									duration: 1000
								});
							}
							if(response.success == false) {
								// 下单失败
								this.$router.push({
									path: '/FalseOrder'
								})
							}
						})
						.catch(error => {
							this.isDisabled = false
							console.log(error);
						})

				}
			},
			itemInfoActionSheet() {   // 打开action sheet
				   
				this.sheetVisible = true;  
			},
			  getfile() {   
				this.itemInfo = '文件'
				this.SelectCompanyInfo = {}
					//        this.ThingsInfo('文件')
					  
			},
			getfood() {   
				this.itemInfo = '食品'
				this.SelectCompanyInfo = {}
					//        this.ThingsInfo('食品')
					  
			},
			getClothes() {   
				this.itemInfo = '服饰'
				this.SelectCompanyInfo = {}
					//        this.ThingsInfo('服饰')
					  
			},
			getDailyUse() {   
				this.itemInfo = '生活用品'
				this.SelectCompanyInfo = {}
					//        this.ThingsInfo('生活用品')
					  
			},
			getElectronicProduct() {   
				this.itemInfo = '电子产品'
				this.SelectCompanyInfo = {}
					//        this.ThingsInfo('电子产品')
					  
			},

			getOthers() {
				MessageBox.prompt(' ', '请输入物品信息').then(({
					value,
					action
				}) => {
					this.itemInfo = value
					this.SelectCompanyInfo = {}
				}).catch(() => {});

				//        this.ThingsInfo('其他')
			},

			// 预约取件时间
			orderTime() {
				this.orderPopupVisible = true
			},
			orderCancle() {
				this.orderPopupVisible = false
					//      this.timeList = this.expressdelivery.saveTime
			},
			orderInsure() {
				this.orderPopupVisible = false
					//      this.SaveTime(this.timeList)
			},
			OrderValuesChange(picker, values) {
				if(values[0] > values[1]) {
					picker.setSlotValue(1, values[0]);
				}
				this.timeList = values
			},
			//给快递员留言
			openMessage() {
				this.LeaveMessageVisible = true
			},
			messageChange(val) {
				
				this.number = val.length;
				//				if(this.number>=20){
				//					this.leaveMessages = this.leaveMessages.substring(0,19)
				//				}

			},
			closeMessage() {
				this.LeaveMessageVisible = false
					//      this.leaveMessages = this.expressdelivery.leaveMessage
			},
			getData() {
				this.$axios
					.post('/web/role/queryAllRole')
					.then(response => {
					
					})
			},
			MessageInsure() {
				//      this.LeaveMessage(this.leaveMessages)
				this.LeaveMessageVisible = false
			},
		},
		created(){
				let myday = new Date()
				if(myday.getHours()>=18){
					this.slots[0].values = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18']
					this.slots[2].values =['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18']
					this.day = dateFormat(new Date(day.setTime(day.getTime()+24*60*60*1000)),'yyyy-MM-dd')
				}else{
					this.slots[0].values = []
					this.slots[2].values = []
					for(let i =myday.getHours();i<=18;i++ ){
						this.slots[0].values.push(i)
						this.slots[2].values.push(i)
					}
					this.day = dateFormat(myday,'yyyy-MM-dd')
				}
				
		},
		mounted() {
			this.userid = sessionStorage.userid
			console.log(sessionStorage)//      this.SelectCompanyInfo = this.expressdelivery.intellectualselection
				// 获取更换物流公司信息
				//      if( this.SelectCompanyInfo.exp_name == '圆通'){
				//          this.SelectCompanyInfo.imgSrc = require('../../assets/images/yuan_tong.png')
				//      }
				//      if( this.SelectCompanyInfo.exp_name == '顺丰'){
				//          this.SelectCompanyInfo.imgSrc = require('../../assets/images/sfc.png')
				//      }
				//      if( this.SelectCompanyInfo.exp_name == '中通'){
				//          this.SelectCompanyInfo.imgSrc = require('../../assets/images/zhong_tong.png')
				//      }
				//      if( this.SelectCompanyInfo.exp_name == '韵达'){
				//          this.SelectCompanyInfo.imgSrc = require('../../assets/images/yun_da.png')
				//      }
				//      if( this.SelectCompanyInfo.exp_name == 'EMS'){
				//          this.SelectCompanyInfo.imgSrc = require('../../assets/images/EMS.png')
				//      }
				// 获取寄收件人信息
			if(this.$store._modules.root.state.$expressdelivery.sendUserInfo.postname) {
				this.userName = this.$store._modules.root.state.$expressdelivery.sendUserInfo.postname || ''
				this.userTel = this.$store._modules.root.state.$expressdelivery.sendUserInfo.tel || ''
				this.userprov = this.$store._modules.root.state.$expressdelivery.sendUserInfo.prov_code
				this.usercity = this.$store._modules.root.state.$expressdelivery.sendUserInfo.city_code
				this.usercnty = this.$store._modules.root.state.$expressdelivery.sendUserInfo.cnty_code
				this.addressDetail = (this.userprov + this.usercity + this.usercnty + this.$store._modules.root.state.$expressdelivery.sendUserInfo.address) || ''
			}
			if(this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.postname) {
				this.receiveName = this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.postname || ''
				this.receiveTel = this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.tel || ''
				this.receiveprov = this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.prov_code
				this.receivecity = this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.city_code
				this.receivecnty = this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.cnty_code
				this.receiveDetail = (this.receiveprov + this.receivecity + this.receivecnty + this.$store._modules.root.state.$expressdelivery.saveSendUserInfo.address) || ''
			}
			//      this.userName = this.expressdelivery.sendUserInfo.userName||''
			//      this.addressDetail = this.expressdelivery.sendUserInfo.addressDetail||''
			//      this.userTel = this.expressdelivery.sendUserInfo.userTel||''
			//      this.Address_Tag = this.expressdelivery.sendUserInfo.Address_Tag
			//      this.receiveName = this.expressdelivery.receiveUserInfo.receiveName||''
			//      this.receiveDetail = this.expressdelivery.receiveUserInfo.receiveDetail||''
			//      this.receiveTel = this.expressdelivery.receiveUserInfo.receiveTel||''
			//      this.receive_Tag = this.expressdelivery.receiveUserInfo.receive_Tag
			// 获取物品信息
			//      this.itemInfo = this.expressdelivery.thingsInfo||'文件'
			// 预约取件时间
			//      this.timeList = this.expressdelivery.saveTime 
			// 给快递员留言
			//      this.leaveMessages = this.expressdelivery.leaveMessage
		}
	}
</script>

<style>
	.text_left {
		text-align: left;
	}
	
	.mt_radio .mint-cell {
		float: left !important;
	}
	.mint-cell:last-child {
		background-size: 0 0;
	}
	
	.mint-cell-wrapper {
		background-size: 0 0;
	}
	
	.delivery_wrap {
		margin-bottom: 0.95rem;
		background-color: #ffffff;
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
	
	.address {
		min-height: 3.2rem;
	}
	
	.address .select_express {
		min-height: 1.6rem;
		line-height: 1rem;
		border-bottom: 0.02rem solid #EEEEEE;
		margin: 0 0.36rem;
		overflow: hidden;
	}
	
	.select_express>>>mint-cell-mask {
		background-color: transparent;
	}
	
	.select_express>>> .mint-cell-mask::after {
		background-color: transparent;
	}
	
	.address .dot {
		float: left;
		width: 7%;
		margin-top: 0.45rem;
	}
	
	.address .dizhi {
		width: 93%;
		float: left;
		vertical-align: middle;
	}
	
	.dizhi .addressDetail {
		float: left;
		width: 80%;
	}
	
	.addressDetail .receiveInfo>>> .mint-field-core {
		font-size: 14px;
		width: 100%;
	}
	
	.addressDetail>>> .mint-field .mint-cell-value {
		width: 1.5rem;
	}
	
	.dizhi .addressUpdate {
		float: right;
		margin-top: 0.35rem;
		width: 10%;
		border-left: 0.01rem solid #D0D0D0;
		padding-left: 0.25rem;
	}
	
	.thingsInfo {
		min-height: 1.02rem;
		padding-top: 0.09rem;
		margin: 0 0.36rem;
	}
	
	.thingsInfo>>> .mint-cell-allow-right::after {
		right: 0.04rem;
	}
	
	.thingsInfo>>> .mint-cell-mask::after {
		background-color: transparent;
	}
	
	.express_info {
		height: 3.6rem;
	}
	
	.express_info .select_express {
		height: 1.8rem;
		border-bottom: 0.02rem solid #EEEEEE;
		margin: 0 0.36rem;
		padding: 0;
		padding-top: 0.08rem;
	}
	
	.express_info .select_express_price {
		height: 1rem;
		border-bottom: 0.02rem solid #EEEEEE;
		margin: 0 0.36rem;
		padding: 0;
		padding-top: 0.08rem;
	}
	
	.express_info .select_express_company {
		height: 1rem;
		border-bottom: 0.02rem solid #EEEEEE;
		margin: 0 0.36rem;
		padding: 0;
		padding-top: 0.08rem;
	}
	
	.express_info .pay_style {
		border: 0;
		height: 1.2rem;
		padding-top: 0;
	}
	
	.pay_style>>> .mt_radio .mint-cell {
		display: inline-block;
		min-height: 0.4rem;
		right: -0.1rem;
	}
	
	.delivery_wrap>>> .mint-cell-wrapper {
		padding: 0;
	}
	
	.express_info>>> .mint-cell-allow-right::after {
		right: 0.01rem;
	}
	
	.express_info>>> .is-link {
		margin-right: 0;
	}
	
	.order {
		height: 2.5rem;
		background: #EEEEEE;
		position: relative;
	}
	
	.order .order_button {
		height: 0.8rem;
		width: 6rem;
		border-radius: 0.45rem;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -3rem;
		margin-top: -0.45rem;
	}
	
	.mint-actionsheet {
		background-color: #ffffff;
		border-radius: 0.12rem 0.12rem 0 0;
	}
	
	.mint-actionsheet>>> .mint-actionsheet-list {
		margin: 0 0.36rem;
	}
	
	.leave {
		width: 100%;
		height: 4rem;
		border-radius: 0.2rem 0.2rem 0 0;
		padding: 0 0.36rem;
	}
	
	.leave_left {
		float: left;
		color: #333333;
		font-size: 0.32rem;
		line-height: 0.86rem;
	}
	
	.leave_right {
		float: right;
		color: #333333;
		font-size: 0.32rem;
		line-height: 0.86rem;
	}
	
	.leave_bottom {
		border: 0.02rem solid #333333;
		height: 1.5rem;
		padding: 0 0.2rem 0 0.2rem;
		position: relative;
	}
	
	.leave_bottom>>> .mint-field-core {
		height: 1.3rem;
	}
	
	.leave_bottom .sizeL {
		position: absolute;
		bottom: 0.1rem;
		right: 0.2rem;
	}
	

	
	.insure_button {
		height: 0.9rem;
		width: 5rem;
		border-radius: 0.45rem;
	}
	
	.prop-tk {
		width: 100%;
		height: 5rem;
		padding: 0.4rem 0.36rem 0 0.36rem;
		border-radius: 0.24rem 0.24rem 0 0;
	}
	
	.pop-btn {
		height: 0.4rem;
		line-height: 0.4rem;
		clear: both;
	}
	
	.pop-btn .order_cancle {
		float: left;
		font-size: 0.32rem;
	}
	
	.pop-btn .order_insure {
		float: right;
		font-size: 0.32rem;
	}
	
	.orderPicker {
		width: 5rem;
		margin-left: 0.35rem;
	}
	
	.changcompanyStyle {
		margin: 0 0.36rem;
		padding: 0.2rem 0;
		border-bottom: 0.02rem solid #EEEEEE;
	}
	
	.changcompanyStyle>>> .is-link {
		margin-right: 0.4rem;
	}
	
	.changcompanyStyle>>> .is-link> span {
		color: #2D7FFC;
		font-size: 0.3rem;
	}
	
	.changcompanyStyle>>> .mint-cell-text {
		font-size: 0.3rem;
		font-weight: 600;
		padding-left: 0.1rem;
	}
</style>
<style scoped>
	.addressDetail .tit {
		font-size: 0.28rem;
		font-weight: 600;
		line-height: .6rem;
		margin-top: .26rem;
	}
	
	.addressDetail .cont {
		color: #666666;
		font-size: 0.22rem;
		line-height: .4rem;
		font-family: PingFangSC-Regular;
	}
	.insure {
		margin-top: 0.3rem;
		margin-left: 0.3rem;
		height: 1rem;
	}
</style>