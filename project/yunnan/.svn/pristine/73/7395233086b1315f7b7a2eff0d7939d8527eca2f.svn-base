<template>
	<div>
		<towtop :name="hadertow" />
		<div class="examineBox">
			<Checklist title='' :propserror="errorChecklist" v-on:errorchange="handleErrorChangesChecklist" v-model="value" :options="options"></Checklist>
			<!-- <p>选中项的值有：{{value}}</p> -->
			<!-- <Btn plain @click.stop="clickFun" class="button bulebutton textwhite">下一步</Btn> -->
		</div>
		<div class="padTopAdd5">
			<mybutton :btnData="btnData" disabled='disabled' @click="clickFun" />
		</div>
		
	</div>
</template>

<script>
	import towtop from "../../../components/HederTwo";
	import { cenurl } from "../../../components/toptow.js";
	import { oneOf, removeVal } from "../../../assets/jq/utils.js";
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
				value: [],
				errorChecklist: false,
				hadertow: "申报材料自检",
				options: [],
				livefaceurl:''
			};
		},
		components: {
			mybutton,
			towtop
		},
		mounted(){
			$('.hui-btn').attr({disabled:'disabled'})
      		$('.hui-btn').css({'background':'#ccc',"box-shadow":'none'})
		},
		methods: {
			handleErrorChangesChecklist(val) {
				//示例1的密码错误状态接收
				this.errorChecklist = val;
			},
			openToast() {
				this.$toast('请选择已具备的条件！');
			},
			clickFun() {
				//示例1的点击按钮的回调
				if(this.value.toString() == "") {
					this.openToast()
					this.errorChecklist = true;
					return false
				} 
				$('.hui-btn').attr({disabled:'disabled'})
      			$('.hui-btn').css({'background':'#ccc',"box-shadow":'none'})
				var table = JSON.parse(window.sessionStorage.getItem("table"));
				var file = JSON.parse(window.sessionStorage.getItem("file"));
				this.matterId = window.sessionStorage.getItem('matterId')
				var url = window.sessionStorage.getItem("url");
				let setdata={
					txnCommCom: {
						tRecInPage: "15",
						tPageJump: "13",
						tStsTraceId: "110567890",
						tenant: "530000000000",
						txn_itt_chnl_id: "0",
						txn_itt_chnl_type: "1"
					},
					txnBodyCom: {
						// memberId: '9621837961d5407c853559a39879bbd2',
						memberId: window.sessionStorage.getItem("userid"),
						matterId: window.sessionStorage.getItem("matterid"),
						// matterId:'873be12f28ff4b67a78ce3729e09725c',
						// matterId:'73eae83fba0548958c84e3c8327d68c2',
						// matterId: '79E75CD922A16232E0530ADDC4801B74',
						// matterId: "79ABB23685267CC8E0530ADDC480B63A",
						tenant: "530000000000",
						txn_itt_chnl_id: "0",
						txn_itt_chnl_type: "1"
					}
				}
				this.$ajaxRequest("post","/gsp/mng30002", setdata).then(res => {
					// if(res.Work_Flag!='1'){
						this.WorkId = res.Work_Id;
						window.sessionStorage.setItem("WorkId", this.WorkId);
						var x = url.indexOf('*')
						if (x == 0 && x!= null) {
							url = url.replace('*','');
							this.livefaceurl=url;
							this.isAndroid_ios();
						}else if( x != 0 && x!= null){
							url = url.replace('*','');
							if (url.indexOf('?') !== -1) {
							this.$router.push(url + '&WorkId=' + this.WorkId)
							} else {
							this.$router.push(url + '?WorkId=' + this.WorkId)
							}
						}
					// }else{
					// 	 this.$toast('您已有在办事件，不能重复办理！');
					// }
				})
				.catch(error => {
					console.log(error);
				});
			},
			isAndroid_ios() {
				let sendata={
					isIdcard:'0'
				}
				this.$CallModule('liveFace',sendata)
			},
			LiveFaceResult(senobject){
				if(typeof(senobject)=='string'){
					this.$CallModule('StoragesetItem',senobject)
				}else{
					this.$CallModule('StoragesetItem',senobject)
				}
				this.$router.push(this.livefaceurl)
			}
		},
		created() {
			window.LiveFaceResult=this.LiveFaceResult
			this.hadertow = this.$route.query.title
			let setdata={
				"txnCommCom": {
					"txn_itt_chnl_id": "1",
					"txn_itt_chnl_type": "2",
					"tenant": "610900000000"
				},
				"txnBodyCom": {
					//"work_id": this.$route.query.WorkId,
					"member_id": window.sessionStorage.getItem("userid"),
					// 'member_id': '9621837961d5407c853559a39879bbd2',
					"matterid": window.sessionStorage.getItem("matterid")
					// matterid:'873be12f28ff4b67a78ce3729e09725c',
					// matterid:'ea44d84cf8bb418080595c201fd9bdf4',
					// 'matterid': '73eae83fba0548958c84e3c8327d68c2',
					// "matterid":'79ABB23685267CC8E0530ADDC480B63A'
				}
			}
			this.$ajaxRequest("post",'/gsp/mng30001', setdata).then((res) => {
				debugger
				$('.hui-btn').attr({disabled:false})
      			$('.hui-btn').css({"background":'rgb(45, 127, 252)',"box-shadow":'rgb(45, 127, 252) 0px 0.05rem 0.15rem'})
				let cent = JSON.stringify(res)
				cent = cent.replace(/acc_condition/g, "label");
				cent = JSON.parse(cent);
				this.options = cent.conditions
			}).catch((response) => {});
		}

	};
</script>
<style lang="less" scoped>
	.hui-checklist_titleBox {
		display: none;
	}
	.examineBox {
		button {
			background-color: #00ace6;
			color: #fff;
			width: 5.9rem;
			height: .9rem;
			line-height: .9rem;
			margin-top: .5rem;
			box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.50);
		}
	}
</style>
