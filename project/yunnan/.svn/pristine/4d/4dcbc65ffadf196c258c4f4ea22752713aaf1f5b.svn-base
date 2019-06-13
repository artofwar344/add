<template>
	<div class="home">
		<towtop :name='hadertow' />

		<!--<div class="TitleTo">
			<h1>业务信息</h1>
		</div>-->
		<!--<div class="Top">
			<div class="example-formgroup">
				<FormGroup v-on:accept-submit="submitEvent" title-position="left">
					<Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="事项名称" :value="textValue" placeholder="自动返显" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="办理编号" :value="number" placeholder="SY201810234321" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="受理窗口" :value="carMsg" placeholder="南12号" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="受理地址" :value="comeReason" placeholder="北京市西城区马连道南路2-11" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="申请人" :value="comeReason" placeholder="马奇骏" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="申请人电话" :value="comeReason" placeholder="010-87110328" v-on:errorchange="handleErrorChangesText">
					</Field>
					<Field :propserror="errorText" desc-class="richText" type="text" label="咨询电话" :value="comeReason" placeholder="010-87110328" v-on:errorchange="handleErrorChangesText">自动返显
					</Field>
				</FormGroup>
			</div>
		</div>-->
		<div class="TitleTo">
			<h1>材料清单</h1>
		</div>

		<div class="photo" v-for="item in metarialList" v-if="metarialList.length>0">
			<!--选中材料-->
			<!--<mt-checklist v-model="item.value" :options="['已准备 ']" class='photoCheck' align='right' @click='isChecked(item)'>
			</mt-checklist>-->
			<div class="navTitle" style='padding-left: .1rem;text-align: left;'>
				<div></div>
				<h1 style='display: inline-block;'>{{item.matter_file_name}}</h1>
				<h2 style='display: inline-block;margin-left: .1rem;'>{{item.copynum}}</h2>
			</div>
			<div class="file">
				<p>原件：
					<a>0</a>份</p>
				<p>复印件：
					<a>{{item.copynum}}</a>份</p>
			</div>

		</div>

		<!--<div class="photo">
		  <div class="navTitle">
          	<div></div><h1>男方省份证证</h1> <h2 style="margin-left: 2.4rem;">纸质版</h2>
          </div>
          <div class="file">
          	 <p>原件：<a>0</a>份</p>
          	 <p>复印件：<a>2</a>份</p>
          </div>
          
		</div>
		
		<div class="photo">
		  <div class="navTitle">
          	<div></div><h1>男方省份证证</h1> <h2 style="margin-left: 2.4rem;">纸质版</h2>
          </div>
          <div class="file">
          	 <p>原件：<a>0</a>份</p>
          	 <p>复印件：<a>2</a>份</p>
          </div>
          
		</div>-->
		<!-- <div class="TitleTo">
			<h1>结果材料收取</h1>
		</div>
		<div class="charge">
		    <Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="收取方式" :value="textValue" placeholder="现场取件" v-on:errorchange="handleErrorChangesText">
			</Field>
			<Field :propserror="errorText" desc-class="richText" type="text" label="收取地址" :value="number" placeholder="选择地址" v-on:errorchange="handleErrorChangesText">
			</Field>
		</div> -->
		<div class="TitleTo">
			<h1>邮寄方式</h1>
		</div>
		<div class="charge" v-if='this.type== 1'>
			<!-- <Field  desc-class="richText" type="text" label="使用平台快递" :value="textValue" placeholder="是" >
			</Field> -->
			<Field readonly :error="errorSelectInfo" :propserror="errorSelect01" label="使用平台快递" disableclear type="text" placeholder="请选择" :value="confirmValSelect01" v-on:errorchange="errorChangeFun" @click.native="open('pickerselect01')">
				<span slot="append" class="example-select_arrowRight"></span>
			</Field>
			<Huiselect ref="pickerselect01" position="bottom" :dataslots="selectData01" class="example-select_item" @confirms="selectConfirmFun01"></Huiselect>
		</div>
		<div class="charge" v-else>
			<!-- <Field  desc-class="richText" type="text" label="使用平台快递" :value="textValue" placeholder="是" >
			</Field> -->
			<Field readonly :error="errorSelectInfo" :propserror="errorSelect01" label="使用平台快递" disableclear type="text" placeholder="是" v-on:errorchange="errorChangeFun">
				<span slot="append" class="example-select_arrowRight"></span>
			</Field>

		</div>
		<!-- 		
		 <div class="TitleTo">
			<h1>申请材料邮寄</h1>
		</div>
		<div class="charge">
		    <Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="寄件人信息" :value="textValue" placeholder="选择地址" v-on:errorchange="handleErrorChangesText">
			</Field>
		    <Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="顺丰速递" :value="textValue" placeholder="顺丰速递" v-on:errorchange="handleErrorChangesText">
			</Field>
		    <Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="物流价格" :value="textValue" placeholder="23元" v-on:errorchange="handleErrorChangesText">
			</Field>
		    <Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="预约取件日期" :value="textValue" placeholder="2018-12-30" v-on:errorchange="handleErrorChangesText">
			</Field>
		    <Field :propserror="errorText" :error="errorTextInfo" desc-class="richText" type="text" label="预约取件时间" :value="textValue" placeholder="13:00-14:00" v-on:errorchange="handleErrorChangesText">
			</Field>
		</div> -->
		<cent v-show="(this.confirmValSelect01 == '是')?true:false" :state='this.type' :send='this.matterUserInfo' :accept='this.accept' :wuliuInfo='this.wuliuInfo' @getdate='this.togetDate' @gettime='this.togetTime' @gettimes='this.togetTimes' :time='this.formatDate'></cent>

		<div class="chargeBtn">

			<div v-if="this.type == '1'?true:false">
				<button @click.prevent="sendMetar" :disabled="isOkDisabled">
					确认
					<mt-spinner type="triple-bounce" color='#fff' style='display: inline-block;margin-left: .1rem;' v-if='isOkDisabled'></mt-spinner>
				</button>
			</div>
			<div v-else-if="this.type == '3' ? true : false">
				<button style="width:40%; float:left;margin-left: 6%;" @click='fileNumber'>录入快递单号</button>
				<button style="width:40%; float:left;margin-left: 8%;background-color: red;" @click='cancel' :disabled="isDisabled" :class='{cancelColor:isDisabled}' >
					<span v-if='!isDisabled'>取消预约快递</span>
					<span v-if='isDisabled'>取消中</span>
					<mt-spinner type="triple-bounce" color='#fff' style='display: inline-block;margin-left: .1rem;' v-if='isDisabled'></mt-spinner>
				</button>
			</div>
			<div v-else-if='this.type !=null'>
				<button @click='viewLogisticsInformation'>查看快递信息</button>
			</div>
		</div>

	</div>
</template>
<script>
	function dateFormat(time, format) {
		if(time.getHours()>18){
		new Date(time.setTime(time.getTime()+24*60*60*1000))
		}
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
	import towtop from "../../../components/HederTwo";
	import {
		Toast,
		MessageBox,
		Indicator
	} from 'mint-ui';
	import cent from "./add/delivery_add";
	// import { validateEmail, validateTel, validateNum } from '../../../../assets/jq/Utils.js';
	export default {
		data() {
				return {
					isOkDisabled:false,
					isDisabled:false,
					workId: '',
					matterId: '',
					popupVisible: true,
					memberId: '',
					getDate: dateFormat(new Date(), 'yyyy-MM-dd'),
					getTime: this.formatHours(),
					getTimes: '19:00',
					formatDate: '',
					workId: '',
					type: null, //3为预约过
					hadertow: "材料递送",
					errorSelect01: true,
					errorSelectInfo: "",
					accept: {}, //收件人信息
					value: ['值2'],
					wuliuInfo:'',
					orgCode:'',
					metarialList: [],
					matterUserInfo: {},
					selectData01: [{
						flex: 1,
						values: ['是', '否'],
						className: "slot1",
						defaultIndex: 0
					}],
					confirmValSelect01: '是',
					expressCompany: {},
					expressCompanyInfo: {},
					postId: null
				};
			},
			components: {
				towtop,
				cent,
			},
			methods: {
				formatHours(){
					let formatHours =new Date()
					let getMinutes=formatHours.getMinutes().toString()
					if(getMinutes.length==1){
						getMinutes = "0"+getMinutes
					}
			
					if(formatHours.getHours()>18){
						return  "10:00"
					}else{
						
						return formatHours.getHours()+":"+getMinutes
					}
				},
				togetDate(e) { //接收子页面日期传参  日期
					this.getDate = e
				},
				togetTime(e) { //接收子页面日期传参 取件开始时间
					this.getTime = e
				},
				togetTimes(e) { //接收子页面日期传参   取件结束时间
					this.getTimes = e
				},
				isChecked(e) {
					if(e.value == []) {
						e.value = ['已准备']
					} else {
						e.value = []
					}
				},
				getMetarialData() { //获取材料信息
					this.$ajaxRequest('post', '/gsp/mng60008', {
							txnCommCom: {
								tStsTraceId: "110567890",
								txnIttChnlId: 'C0011234567890987654321',
								txnIttChnlCgyCode: 'AC02C001'
							},
							txnBodyCom: {
								'work_id': this.workId,
								'member_id': this.memberId,
								'matter_id': this.matterId
							}
						})
						.then((res) => { //填充metarialList  并添加value属性
							this.metarialList = res.list
							this.metarialList.forEach((item, index) => {
								item.value = []
							})

						})
						.catch((error) => {

						})

				},
				getState() { //获取状态,是否已经提交过物流信息
					this.$ajaxRequest('post', '/gsp/mng30059', {
							txnCommCom: {
								tStsTraceId: "110567890",
								txnIttChnlId: 'C0011234567890987654321',
								txnIttChnlCgyCode: 'AC02C001'
							},
							txnBodyCom: {
								'work_id': this.workId,
								'member_id': this.memberId,
								'matter_id': this.matterId,
								flag: '0'
							}
						})
						.then((res) => {
							//判断状态 type为1 或者23（预约，查看信息）
							//为1的时候confirmValSelect01=否
							Indicator.close();
							let dateList = res.osWorkPosts[0]
							this.type = dateList.post_status
							console.log(res, '获取状态信息')
							if(this.type == '1') { //尚未寄出快递

							} else {
								this.postId = dateList.post_id
								this.wuliuInfo = {
									exp_name: dateList.post_company_name,
									shipper_code: dateList.post_company,
									first_fee: ''

								}
								this.matterUserInfo = {
									prov_code: dateList.sender_prov_name,
									postname: dateList.sender_name,
									city_code: dateList.sender_city_name,
									cnty_code: dateList.sender_county_name,
									address: dateList.sender_address,
									tel: dateList.sender_tel
								}
								this.formatDate = dateList.post_time

								if(this.type == '3') { //预约状态下
									this.expressCompany = {
										deliveryCrop: dateList.post_company_name, //快递公司
										title: '', //物品信息
										status: '', //快递状态
										consingee: '', //用户名
										sn: dateList.order_id,
									}

								} else { //快递已寄出
									this.expressCompanyInfo = {
										deliveryCrop: dateList.post_company_name, //快递公司
										deliveryCropCode: dateList.post_company, //快递编码
										phone: '', //手机
										kddh: '', //快递单号
										back: ''
									}
								}
							}
						})
						.catch((error) => {

						})
				},
				checkOrder() {
					if(this.confirmValSelect01 == '否') {
						this.noSendMetar()
						//this.$router.push({path:'/wuliu_one',query:{WorkId:this.workId,userid:this.memberId,matterid:this.matterId}})
						return false
					}
					if(!this.matterUserInfo || !this.matterUserInfo.postname) {

						Toast({
							message: '请完善寄件人信息',
							duration: 1000
						});
						return false
					}
					if(!this.wuliuInfo || !this.wuliuInfo.exp_name) {
						Toast({
							message: '选择快递公司',
							duration: 1000
						});
						return false
					}
					if(this.getTimes.substring(0,2)*1<this.getTime.substring(0,2)*1){
						Toast({
							message: '请选择正确的预约时间段',
							duration: 1000
						});
						return false
					}
					return true
				},
				noSendMetar(){
					this.$ajaxRequest('post', '/gsp/mng80101', {
							"txnBodyCom": {
								"matter_id": this.matterId,
						"member_id": this.memberId,
						"work_id": this.workId,
						'post_type':'0',
							},
							"txnCommCom": {
								matter_id: window.sessionStorage.getItem("matterid"),
								"tPageJump": "1",
								"tRecInPage": "10",
								"txnIttChnlCayCode": "AC02C001",
								"txnIttChnlId": "C0011234567890987654321"
							}
						})
						.then((res) => {
							//判断状态 type为1 或者23（预约，查看信息）
							//为1的时候confirmValSelect01=否
							console.log(res)
							this.$router.push({path:'/wuliu_one',query:{WorkId:this.workId,userid:this.memberId,matterid:this.matterId}})
							
						})
						.catch((error) => {

						})
				},
				sendMetar() { //确认按钮 提交快递申请
					if(!this.checkOrder()) {
						return
					}
					this.isOkDisabled =true
					let obj = {
						"Is_Send_Message": "0",
						"businessId": "2",
						"chann_id": "12112",
						"contact": {
							"mobile": this.matterUserInfo.tel,
							"phone": ""
						},
						'post_type':'1',
						"customer_remark": "轻拿轻放",
						"departmentId": this.orgCode,
						"end_date": this.getDate + " " + this.getTimes + ':00',
						"exp_type": "1",
						"fc_box_shipper_code": "",
						"flag": "0",
						"is_notice": "0",
						"logistic_code": "",
						"matter_id": this.matterId,
						"member_id": this.memberId,
						"number_of_id":sessionStorage.cardid ,
						"oper_source": "1",
						"pay_type": "1",
						//						receiver: {
						//							id: '2',
						//							name: this.accept.postname,
						//							company: '',
						//							tel: this.accept.tel,
						//							mobile: '',
						//
						//							province_name: this.accept.prov_code,
						//							city_name: this.accept.city_code,
						//							exp_area_name: this.accept.cnty_code,
						//							subdistrict: '',
						//							address: this.accept.address
						//						},

						sender: {
							name: this.matterUserInfo.postname,
							company: '',
							tel: '',
							mobile: this.matterUserInfo.tel,
							province_name: this.matterUserInfo.prov_code,
							city_name: this.matterUserInfo.city_code,
							exp_area_name: this.matterUserInfo.cnty_code,
							subdistrict: '',
							address: this.matterUserInfo.address
						},

						"shipper_code": this.wuliuInfo.shipper_code,
						"shipper_name": this.wuliuInfo.exp_name,
						"start_date": this.getDate + " " + this.getTime + ':00',
						"type_of_id": 1,
						"work_id": this.workId,
						'price': this.wuliuInfo.first_fee,
						goods: {
							product_name: '文件'
						}
					}
					console.log(obj, '预约物流信息')
					this.$ajaxRequest('post', '/gsp/mng80101', {
							"txnBodyCom": obj,
							"txnCommCom": {
								matter_id: window.sessionStorage.getItem("matterid"),
								"tPageJump": "1",
								"tRecInPage": "10",
								"txnIttChnlCayCode": "AC02C001",
								"txnIttChnlId": "C0011234567890987654321"
							}
						})
						.then((res) => {
							//判断状态 type为1 或者23（预约，查看信息）
							//为1的时候confirmValSelect01=否
							console.log(res)
							this.isOkDisabled =false
								this.getState()
							
						})
						.catch((error) => {
							this.isOkDisabled =false
						})
						setTimeout(()=>{
									if(this.isOkDisabled = true){
										this.isOkDisabled = false
									}
								},5000)
						
				},
				fileNumber() { //录入快递单号
					this.$router.push({
						path: '/lrexpress',
						query: this.expressCompany
					})
				},
				cancel() { //取消预约
					MessageBox.confirm('确定取消预约?').then(action => {
								this.isDisabled = true
							this.$ajaxRequest('post', '/gsp/mng80100', {
									txnCommCom: {
										tStsTraceId: "110567890",
										txnIttChnlId: 'C0011234567890987654321',
										txnIttChnlCgyCode: 'AC02C001',
										matter_id: this.matterId
									},
									txnBodyCom: {
										'work_id': this.workId,
										post_id: this.postId,
										'member_id': this.memberId,
										matter_id: this.matterId,
										logistic_code: '',
										shipper_code: this.wuliuInfo.shipper_code,
										chann_id: '12112'

									}
								})
								.then((res) => {
									//判断状态 type为1 或者23（预约，查看信息）
									//为1的时候confirmValSelect01=否
//									if(res.status && res.status == '00') {
											this.isDisabled = false
										this.type = 1
										this.matterUserInfo = {}
										this.formatDate = ''
										this.wuliuInfo={}
//									} else {
//										Toast({
//											message: res.msg || '取消失败',
//											duration: 1000
//										});
//									}

									console.log(res, '取消预约接口')

								})
								.catch((error) => {
									this.isDisabled = false
								})
								setTimeout(()=>{
									if(this.isDisabled = true){
										this.isDisabled = false
									}
								},5000)
						})
						.catch(() => {});
				},
				open(picker) {
					this.$refs[picker].open();
					document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
				},
				errorChangeFun(val) {
					this.errorSelect01 = val;
				},
				selectConfirmFun01(selectedVal) {

					if(typeof selectedVal[0] === "object") {
						this.confirmValSelect01 = selectedVal[0].text;
					} else {
						this.confirmValSelect01 = selectedVal;

					}
				},
				viewLogisticsInformation() {
					this.$router.push({
						path: '/QueryResult',
						query: this.expressCompanyInfo
					})
				}

			},
			created() {
				console.log(sessionStorage, 8888, this.wuliuInfo)
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				setTimeout(function() {
					Indicator.close();
				}, 8000)
				this.orgCode = this.$store._modules.root.state.$expressdelivery.orgCode
				this.workId = this.$store._modules.root.state.$expressdelivery.wuliuTodeliveryWorkId || 'afdbdcde58ae4327b29322278da06f88'  //6F10F72B19
				this.matterId = this.$store._modules.root.state.$expressdelivery.matterid || '532d1a418dea49ac9c52bc84fb7c445d' //'6D6979FD227F06A0E0530ADDC480CBE6'
				this.memberId = this.$store._modules.root.state.$expressdelivery.userid || '4cef06d330c8412fa4f96975b149fddb' //'5d0fb11775734b9e9a1ce71b9e4e6224'
				if(this.$store._modules.root.state.$expressdelivery.metarialList.length == 0) { //保存选中的材料清单
					this.getMetarialData()
				} else {
					this.metarialList = this.$store._modules.root.state.$expressdelivery.metarialList
				}
				this.getState()
				
			},
			activated(){
				this.accept = this.$store._modules.root.state.$expressdelivery.accept || {
					prov_code: '河南省',
					postname: '收件人',
					city_code: '郑州市',
					cnty_code: '金水区',
					address: '金水路',
					tel: '18888888888'
				}
				this.matterUserInfo = this.$store._modules.root.state.$expressdelivery.matterUserInfo //发送人信息
			this.wuliuInfo=	 this.$router.currentRoute.params.row || {}
			},
			beforeRouteLeave(to, from, next) {
				this.$store._modules.root.state.$expressdelivery.metarialList = this.metarialList
				next()
			}
	};
</script>
<style>
	.hui-field_title {
		width: auto;
	}
	.home input{
		height: auto !important; 
	}
	.home .mint-checkbox-label {
		margin-right: .2rem;
		color: #999
	}
</style>

<style scoped>
	@import url("./style.css");
	.cancelColor{
		background-color: brown !important;
	}
	.photoCheck {
		float: right;
	}
	.home{
		box-sizing: content-box ;
	}
	.photo {
		background: #fff;
		padding-top: .2rem;
	}
</style>