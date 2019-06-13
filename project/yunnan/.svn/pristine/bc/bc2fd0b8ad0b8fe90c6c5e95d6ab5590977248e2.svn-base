<template>
	<div>
	
		<div class="nav_title">{{titlename}}</div>
		<div class="tabcen_list" v-for="list in datatext.cert_info">
			<ul>
				<li>
					<span class="title">资质类型</span>
					<span class="cen">{{list.qualification_typename}}</span>
				</li>
				<li>
					<span class="title">资质证书编号</span>
					<span class="cen">{{list.certificate_number}}</span>
				</li>
				<li>
					<span class="title">资质专业及等级</span>
					<span class="cen">{{list.qualifys_name}}</span>
				</li>
				<li>
					<span class="title">发证机关</span>
					<span class="cen">{{list.issuing_authority}}</span>
				</li>
				<li>
					<span class="title">发证日期</span>
					<span class="cen">{{list.issuing_date | take_infotime}}</span>
				</li>
				<li>
					<span class="title">有效期至</span>
					<span class="cen">{{list.validity_date | take_infotime}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { cenurl } from "../../../../components/toptow.js";
	export default {
		data(){ 
			return{
				listid:'',
				name:'',
				urls:'',
				dataobj:'',
				companyid:'',
				datatext:'',
				titlename:''
			}
		},
		mounted(){
				this.titlename=this.$route.query.enterprisename;
				this.listid = this.$route.query.listid;
				this.companyid=this.$route.query.companyid;
				this.name = this.$route.query.name;
				if(this. name == '10'){
					this.urls = '/gsp/mng90015'
					this.dataobj={"txnCommCom":{"tRecInPage":"11","tPageJump":"1"},"txnBodyCom":{"company_id":this.companyid,"matter_id":window.sessionStorage.getItem("matterid"),"work_id":"1","member_id":window.sessionStorage.getItem("userid"),"org_id":"1","chann_id":"1001" }}
					this.hadertow = '工程监理企业资质查询'

				}else if(this. name == '11'){
					this.urls = '/gsp/mng90017'
					this.dataobj={"txnCommCom":{"tRecInPage":"11","tPageJump":"1"},"txnBodyCom":{"org_code":this.listid,"matter_id":window.sessionStorage.getItem("matterid"),"work_id":"1","member_id":window.sessionStorage.getItem("userid"),"org_id":"1","chann_id":"1001"}}
					this.hadertow = '建筑施工企业安全生产许可证查询'

				}else if(this. name == '12'){
					this.urls = '/gsp/mng19002'
					this.dataobj={"txnCommCom":{"tRecInPage":"11","tPageJump":"1"},"txnBodyCom":{"company_id":this.companyid, "matter_id":window.sessionStorage.getItem("matterid"),"work_id":"1","member_id":window.sessionStorage.getItem("userid"),"org_id":"1","chann_id":"1001"}}
					this.hadertow = '建筑施工企业资质查询'
				}else if(this. name == '13'){
					this.urls = '/gsp/mng19004'
					this.dataobj={"txnCommCom":{ "tRecInPage":"11","tPageJump":"1"},"txnBodyCom":{"org_code":this.listid,"matter_id":window.sessionStorage.getItem("matterid"),"work_id":"1","member_id":window.sessionStorage.getItem("userid"),"org_id":"1","chann_id":"1001"}}
					this.hadertow = '施工图审查机构查询'
				}
				let setdata=this.dataobj
				this.$ajaxRequest("post",this.urls, setdata).then((res) => {
					console.log(res)
					this.datatext=res
					// this.take_date()
					// this.take_infotime()
				}).catch((response) => {});

				
		},
		filters:{
			take_infotime(val) {
				let time = val;
					let d = new Date(time)
					let times =  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
					return times
			}
		},
		methods: {
			//发证日期
			// take_date() {
			// 		let time = this.datatext.cert_info[0].issuing_date;
			// 		let d = new Date(time)
			// 		let times =  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
			// 		this.datatext.cert_info[0].issuing_date = times  
			// },
			// // 有效期
			// take_infotime() {
			// 	console.log(this.datatext)
			// 	console.log(this.datatext.cert_info)
			// 	console.log(this.datatext.cert_info[0].validity_date)
			// 	let time = this.datatext.cert_info.validity_date;
			// 		let d = new Date(time)
			// 		let times =  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
			// 		console.log(times)
			// 		this.datatext.cert_info.validity_date = times  
			// }	
		}
	}
</script>

<style scoped lang="less">
	.nav_title {
		height: .7rem;
		line-height: .7rem;
		text-align: left;
		font-size: .24rem;
		background: #f1f3f6;
		padding-left: .32rem;
		color: #999;
	}
	.tabcen_list{
		font-size: .28rem;
		text-align: left;
		padding: .15rem;;
		background: #fff;
		ul li{
			line-height: .5rem;
			overflow:hidden;
		}
		.title{
			width: 45%;
			color: #333;
			float: left;
		}
		.cen{
			width: 55%;
			color: #999;
			text-align: right;
			float: right;
		}
		:after{
			content: '0';
			font-size: 0;
			height: 0;
			width:100%;
			clear: both;
		}
	}
</style>