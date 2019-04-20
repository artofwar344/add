<template>
	<div>
		<!-- <div class="nav_title">申报材料</div> -->
		<div v-if="name == 10 || name == 12">
			<div class="tabcen_list">
				<ul>
					<li>
						<span class="title">营业执照号</span>
						<span class="cen">{{datatext.ent_info.business_license}}</span>
					</li>
					<li>
						<span class="title">法人代表</span>
						<span class="cen">{{datatext.ent_info.legal_person}}</span>
					</li>
					<li>
						<span class="title">组织机构代码</span>
						<span class="cen">{{datatext.ent_info.organization_code}}</span>
					</li>
					<li>
						<span class="title">联系地址</span>
						<span class="cen">{{datatext.ent_info.business_address}}</span>
					</li>
					<li>
						<span class="title">注册资金</span>
						<span class="cen">{{datatext.ent_info.registered_capital}}万元</span>
					</li>
					<li>
						<span class="title">法人代表职位</span>
						<span class="cen">{{datatext.ent_info.legal_personduty}}</span>
					</li>
					<li>
						<span class="title">法人代表职称</span>
						<span class="cen">{{datatext.ent_info.legal_persontitlename}}</span>
					</li>
					<li>
						<span class="title">成立时间</span>
						<span class="cen">{{datatext.ent_info.setup_date | take_infotime}}</span>
					</li>
					<li>
						<span class="title">所属省市</span>
						<span class="cen">{{datatext.ent_info.entprovince_name}}</span>
					</li>
					<li>
						<span class="title">所属州市</span>
						<span class="cen">{{datatext.ent_info.entcity_name}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div v-else-if="name == 11">
			<div class="tabcen_list">
				<ul>
					<li>
						<span class="title">单位名称</span>
						<span class="cen">{{datatext.compname}}</span>
					</li>
					<li>
						<span class="title">统一社会信用代码</span>
						<span class="cen">{{datatext.orgcode}}</span>
					</li>
					<li>
						<span class="title">安全生产许可证号</span>
						<span class="cen">{{datatext.certificatenum}}</span>
					</li>
					<li>
						<span class="title">发证日期</span>
						<span class="cen">{{datatext.issue_date | take_infotime}}</span>
					</li>
					<li>
						<span class="title">有效期至</span>
						<span class="cen">{{datatext.valid_date| take_infotime}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div v-else-if="name == 13">
			<div class="tabcen_list" >
				<ul>
					<li>
						<span class="title">单位名称</span>
						<span class="cen">{{datatext.companyname}}</span>
					</li>
					<li>
						<span class="title">统一社会信用代码</span>
						<span class="cen">{{datatext.code}}</span>
					</li>
					<li>
						<span class="title">属地</span>
						<span class="cen">{{datatext.area}}</span>
					</li>
					<li>
						<span class="title">审查范围</span>
						<span class="cen">{{datatext.cert}}</span>
					</li>
					<li>
						<span class="title">证书有效期</span>
						<span class="cen">{{datatext.validate | take_infotime}}</span>
					</li>
					<li>
						<span class="title">联系方式</span>
						<span class="cen">{{datatext.phone}}</span>
					</li>
				</ul>
			</div>
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
				datatext:''
			}
		},
		mounted(){
				this.listid = this.$route.query.id;
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
					
				}).catch((response) => {});
		},
		methods: {
			// take_date() {
			// 		let time = this.datatext.ent_info[0].setup_date;
			// 		let d = new Date(time)
			// 		let times =  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
			// 		this.datatext.ent_info[0].setup_date = times  
			// },
		},
		filters:{
			take_infotime(val) {
				let time = val;
					let d = new Date(time)
					let times =  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
					return times
			}
		},
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
			overflow:hidden
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