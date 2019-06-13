<template>
	<div class="manage_wrap">
		<mt-header title="地址管理">
			<mt-cell @click.native="backPages()" icon="back" slot="left" style="color:#666"></mt-cell>
		</mt-header>
		<div class="hearder_bottom"></div>
		<div class="userInfo">
			<mt-field class="receiveInfo" label="姓名" clear placeholder="请输入姓名" v-model="postname"></mt-field>
			<mt-field class="receiveInfo" label="联系方式" clear placeholder="请输入联系方式" v-model="tel"></mt-field>
			<div class="selectAre" @click="selectArea()">
				<mt-field class="receiveInfo" disabled label="选择地区">{{prov_code}}&nbsp;{{city_code}}&nbsp;{{cnty_code}}</mt-field>
				<img src="../../assets/images/nextinto.png" class="qr_icon">
			</div>
			<mt-field class="receiveInfo textArea" type="textarea" label="详细地址" clear placeholder="请输入详细地址" v-model="address"></mt-field>
		</div>
		<mt-popup v-model="popupVisible" position="bottom" class="prop-tk">
			<div class="pop-btn">
				<p class="cancle" @click="cancle()">取消</p>
				<p class="insure" @click="sureMap()">确定</p>
			</div>
			<mt-picker ref="pickCom" :slots="slots" @change="onGetValues" value-key="areaName"></mt-picker>
		</mt-popup>
		<div class="del_address">
			<!--<mt-checklist class="save_address" v-model="value" :options="['保存到地址薄']" @change="checkbox(value)"></mt-checklist>-->
			<!-- <mt-button class="order_button" type="primary" @click="save()">保存</mt-button> -->
			 <div class="padTopAdd5">
    <mybutton :btnData="btnData" @click="save"/>
</div>
		</div>
	</div>
</template>

<script>
	//import { mapGetters, mapMutations } from "vuex";
import mybutton from "@/components/MyButton";
	import {
		Toast
	} from "mint-ui";
	export default {
		    components: {
    mybutton,
},
		//  computed: {
		//      ...mapGetters([
		//          "expressdelivery"
		//      ])
		//  },
		data() {
				return {
					 btnData: [
    {
        text: "保存",
        disabled: false,
        isSure: true,
    },
],
					receiveInfo: "",
					to: "", //页面返回标识
					remark: this.$store._modules.root.state.$expressdelivery.remark || "", //寄收件标识
					value: ["保存到地址薄"],
					popupVisible: false,
					UrlIp: '',
					slots: [{
						flex: 1,
						defaultIndex: 0,
						values: [],
						className: "slot1",
						textAlign: "center"
					}, {
						pider: true,
						content: "-"
							// className: 'slot2'
					}, {
						flex: 1,
						values: [],
						className: "slot3",
						textAlign: "center"
					}, {
						pider: true,
						content: "-"
							// className: 'slot4'
					}, {
						flex: 1,
						values: [],
						className: "slot5",
						textAlign: "center"
					}],
					shengList: [],
					getShengList: [],
					shiList: [],
					getShiList: [],
					xianList: [],
					getXianList: [],
					postname: "",
					address: "",
					tel: "",
					isdefault: "1",
					address_tag: "",
					prov_code: "",
					city_code: "",
					cnty_code: "",
					addUserAddress: {},
					sendUserAddres: {},
					postid: "",
					userid: ""
				};
			},
			methods: {
				//      ...mapMutations(["SendUserInfo","ReceiveUserInfo"]),
				// 页面返回
				backPages() {
					this.$router.go(-1);
				},
				// 是否保存地址簿
				checkbox(val) {
					if(val == "保存到地址薄") {
						this.isdefault = "0";
					} else {
						this.isdefault = "1";
					}
				},
				// 调用返回信息
				useBack() {
					if(this.remark == "send") {
						let obj = {
							userName: this.postname,
							addressDetail: this.address,
							Address_Tag: this.address_tag,
							userTel: this.tel
						};
						//              this.SendUserInfo(obj)
					}
					if(this.remark == "save") {
						let obj = {
							receiveName: this.postname,
							receiveDetail: this.address,
							receive_Tag: this.address_tag,
							receiveTel: this.tel
						};
						//              this.ReceiveUserInfo(obj)
					}
					if(this.to == "1") {
						this.$router.push({
							path: "/delivery"
						});
					} else {
						this.$router.push({
							path: "/myaddress"
						});
					}
				},
				// 调用保存地址薄接口
				useSave() {
					this.sendUserAddress = {
						txnCommCom: {
							tStsTraceId: "110567890",
							txnIttChnlId: 'C0011234567890987654321',
							txnIttChnlCgyCode: 'AC02C001'
						},
						txnBodyCom: {
							member_id: this.userid,
							postname: this.postname,
							tel: this.tel,
							postcode: "000000",
							prov_code: this.prov_code,
							city_code: this.city_code,
							cnty_code: this.cnty_code,
							address: this.address
						}
					};
					this.addUserAddress = {
						prov_code: this.prov_code,
						city_code: this.city_code,
						cnty_code: this.cnty_code,
						address: this.address,
						postname: this.postname,
						tel: this.tel,
						member_id: this.userid
					};
					this.$ajaxRequest("post", "gsp/fsx04001", this.sendUserAddress)
						.then(res => {
						
								if(this.remark == "send") {
									this.$store._modules.root.state.$expressdelivery.sendUserInfo = this.addUserAddress;
									this.$router.go(-1);
								} else if(this.remark == "save") {
									this.$store._modules.root.state.$expressdelivery.saveSendUserInfo = this.addUserAddress;
									this.$router.go(-1);
								} else {
									this.$router.go(-1);
								}
				
						})
						.catch(error => {
							console.log(error);
						});
				},
				//      调用修改地址接口
				updateUseSave() {
					this.sendUserAddress = {
						txnCommCom: {
							tStsTraceId: "110567890",
							txnIttChnlId: 'C0011234567890987654321',
							txnIttChnlCgyCode: 'AC02C001'
						},
						txnBodyCom: {
							member_id: this.userid,
							postid: this.postid,
							postname: this.postname,
							tel: this.tel,
							postcode: "000000",
							prov_code: this.prov_code,
							city_code: this.city_code,
							cnty_code: this.cnty_code,
							address: this.address
						}
					};

					this.$ajaxRequest(
							"post",
							"/gsp/fsx04002",
							this.sendUserAddress,
						)
						.then(res => {
					
								this.$router.go(-1);
		
						})
						.catch(error => {
							console.log(error);
						});
				},
				// 点击保存，校验方法
				pageCheck() {
					let isContinue = true;
					// 检验姓名是否填写
					if(this.postname == "") {
						Toast({
							message: "请输入姓名",
							duration: 1000
						});
						isContinue = false;
						return false;
					}

					//var nameReg = /^[\u4E00-\u9FA5]{1,20}$/;
					//var nameReg = /^[\u0391-\uFFE5A-Za-z]{2,6}$/;
					var nameReg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
					if(!nameReg.test(this.postname)) {
						Toast({
							message: "请正确输入中文或英文姓名",
							duration: 1000
						});

						isContinue = false;
						return false;
					}

					if(!isContinue) return false;

					if(this.tel == "") {
						Toast({
							message: "请输入联系方式",
							duration: 1000
						});
						isContinue = false;
						return false;
					}
					var regMobil = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(1[6-8][0-9]))\d{8}$/;

					if(!regMobil.test(this.tel)) {
						Toast({
							message: "请输入正确的11位号码",
							duration: 1000
						});
						isContinue = false;
						return false;
					}

					if(!isContinue) return false;
					if(this.address == "") {
						Toast({
							message: "请填写详细地址",
							duration: 1000
						});
						isContinue = false;
						return false;
					}

					if(this.address.length > 50) {
						Toast({
							message: "字数限制为50字",
							duration: 1000
						});
						isContinue = false;
						return false;
					}

					return true;
				},
				save() {
					if(this.pageCheck()) {
						if(
							this.$router.currentRoute.query.origin &&
							this.$router.currentRoute.query.origin == "updateAddress"
						) {
							this.updateUseSave();
						} else {
							this.useSave();
						}
					}
				},
				selectArea() {
					this.popupVisible = true;
					if(this.shengList.length == 0) {
						this.getSheng();
					}
				},
				// 城市滑动变化触发picker组件的change事件（id变化才发对应请求,否则会多次发请求）
				onGetValues(picker, values) {
					console.log(picker.getSlotValue(0));
					let areaArr = [];
					for(let i = 0; i < values.length; i++) {
						if(values[i] !== undefined) {
							areaArr.push(values[i]);
						}
					}
					// this.prov_code = areaArr[0]
					// this.city_code = areaArr[1]
					this.cnty_code = areaArr[2];
					//判断如果省的id变化了，就去请求市和区，否则只请求区
					if(this.regionInit) {
						//当省变化的时候，请求市和区
						//                  if(this.shengList[0].REGNNM != values[0]){
						console.log(1234);
						//请求市
						this.shengList.forEach(item => {
							if(
								item.REGNNM == picker.getSlotValue(0) &&
								this.prov_code != picker.getSlotValue(0)
							) {
								this.getshi(item.REGNCODE);
								this.prov_code = item.REGNNM;
							}
						});
						this.shiList.forEach(item => {
							if(
								item.REGNNM == picker.getSlotValue(2) &&
								this.city_code != picker.getSlotValue(2)
							) {
								this.getXian(item.REGNCODE);
								this.city_code = item.REGNNM;
							}
						});
					}
				},
				sureMap() {
					this.popupVisible = false;
				},
				cancle() {
					this.popupVisible = false;
				},
				getSheng() {
					this.$ajaxRequest(
						"post",
						"/gsp/fsx03001", {
							txnCommCom: {
								tStsTraceId: "110567890",
								txnIttChnlId: 'C0011234567890987654321',
								txnIttChnlCgyCode: 'AC02C001'
							},
							txnBodyCom: {
								// regn_code:'530000000000'
							}
						}

					).then(res => {
					console.log(res,999)
//							let cent = JSON.stringify(res.data);
//							cent = cent.replace("C-Response-Body", "body");
//							cent = JSON.parse(cent);
//							cent = JSON.parse(cent.body);
							this.shengList = res.list;
							this.shengList.forEach(item => {
								this.getShengList.push(item.REGNNM);
							});
							console.log(this.getShengList)
							let a = this.getShengList.indexOf("云南省")
							if(a >-1){
								this.getShengList.splice(a,1)
							}
							this.getShengList.splice(0,0,"云南省")
							this.slots[0].values = this.getShengList;
							this.getshi(this.shengList[0].REGNCODE);
						
					});
					this.regionInit = true;
				},
				getshi(sheng) {
					console.log(sheng,'122')
					this.$ajaxRequest("post", "/gsp/fsx03001", {
						txnCommCom: {
							tStsTraceId: "110567890",
							txnIttChnlId: 'C0011234567890987654321',
							txnIttChnlCgyCode: 'AC02C001'
						},
						txnBodyCom: {
							regn_code: sheng
						}
					}).then(res => {
//					
//							let cent = JSON.stringify(res.data);
//							cent = cent.replace("C-Response-Body", "body");
//							cent = JSON.parse(cent);
//							cent = JSON.parse(cent.body);
console.log(res)
							this.shiList = res.list;
							this.getShiList = [];
							this.shiList.forEach(item => {
								this.getShiList.push(item.REGNNM);
							});
							this.city_code = this.getShiList[0];
							this.slots[2].values = this.getShiList;
							this.getXian(this.shiList[0].REGNCODE);
						
					});
				},
				getXian(shi) {
					console.log(1);
					this.$ajaxRequest("post", "/gsp/fsx03001", {
							txnCommCom: {
								tStsTraceId: "110567890",
								txnIttChnlId: 'C0011234567890987654321',
								txnIttChnlCgyCode: 'AC02C001'
							},
							txnBodyCom: {
								regn_code: shi
							}
						})
						.then(res => {
//							
//								let cent = JSON.stringify(res.data);
//								cent = cent.replace("C-Response-Body", "body");
//								cent = JSON.parse(cent);
//								cent = JSON.parse(cent.body);
								this.xianList = res.list;
								this.getXianList = [];
								this.xianList.forEach(item => {
									this.getXianList.push(item.REGNNM);
								});
								this.cityDataReady = true;
								this.slots[4].values = this.getXianList;
						
						})
						.catch(error => {
							console.log(error);
						});
				}
			},
			mounted() {
				var urls = window.location;
				if(urls.hostname == "web.yn.gov.cn") {
					this.UrlIp = "https://zwfw.yn.gov.cn";
				} else {
					this.UrlIp = "http://128.192.179.84:8088";
				}
				this.userid = sessionStorage.userid || "31cea592cd5d4f65bbfbefcef462d994";
				if(this.$router.currentRoute.query.address) {
					let userinfo = this.$router.currentRoute.query.address;
					this.postname = userinfo.post_name;
					this.address = userinfo.address;
					this.tel = userinfo.post_tel;
					this.prov_code = userinfo.prov_code;
					this.city_code = userinfo.city_code;
					this.cnty_code = userinfo.cnty_code;
					this.postid = userinfo.post_id;
				}
			}
	};
</script>

<style scoped>
	.manage_wrap {
		position: relative;
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
		background-color: #f1f3f6;
	}
	
	.userInfo {
		height: 5rem;
		background-color: #ffffff;
		padding: 0 0.36rem;
	}
	
	.receiveInfo {
		min-height: 1.2rem;
		white-space: wrap;
	}
	
	.userInfo>>> .mint-cell-text {
		color: #333333;
		font-size: 0.28rem;
	}
	
	.userInfo>>> .mint-cell-value {
		border-bottom: 0.01rem solid #eeeeee;
		padding-right: 0.01rem;
		height: 0.8rem;
		line-height: 0.8rem;
		color: #333333;
		font-size: 0.28rem;
	}
	
	.textArea>>> .mint-cell-value {
		border-bottom: transparent;
	}
	
	.receiveInfo>>> .mint-cell-value .mint-field-core::-webkit-input-placeholder {
		color: #bebebe;
		font-size: 0.28rem;
	}
	
	.textArea>>> .mint-cell-value {
		padding-top: 0.5rem;
	}
	
	.del_address {
		height: 4.8rem;
		position: relative;
		width: 100%;
		bottom: 0;
		left: 0;
	}
	
	.del_address .order_button {
		height: 0.8rem;
		width: 6rem;
		border-radius: 0.45rem;
		position: absolute;
		left: 50%;
		top: 55%;
		margin-left: -3rem;
	}
	
	.save_address {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}
	
	.save_address>>> .mint-cell {
		background: #f1f3f6;
	}
	
	.save_address>>> .mint-checkbox-core {
		border-radius: 0;
	}
	
	.is_link {
		position: relative;
		display: inline-block;
		left: 0.25rem;
	}
	
	.receiveInfo>>> .mint-field-core {
		background-color: #ffffff;
	}
	
	.prop-tk {
		width: 100%;
		height: 5rem;
		padding: 0.2rem 0.36rem 0 0.36rem;
		border-radius: 0.24rem 0.24rem 0 0;
	}
	
	.pop-btn {
		height: 0.4rem;
		line-height: 0.4rem;
		clear: both;
	}
	
	.pop-btn .cancle {
		float: left;
		font-size: 0.32rem;
	}
	
	.pop-btn .insure {
		float: right;
		font-size: 0.32rem;
	}
	
	.selectAre {
		position: relative;
	}
	
	.selectAre>>> .mint-field-other {
		font-size: 0.28rem;
		width: 200px;
	}
	
	.qr_icon {
		width: 0.14rem;
		height: 0.24rem;
		position: absolute;
		right: 0.23rem;
		top: 0.45rem;
	}
</style>