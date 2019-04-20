<template>
	<div class="swsbg_one">
		<towtop :name="titlename"/>
		<div class="content">
			<ul>
				<li>
					<h2>组织形式</h2>
					<p>{{ zzxs }}</p>
				</li>
				<li>
					<h2>主管司法行政机关</h2>
					<p>{{ zgsfxzjg }}</p>
				</li>
			</ul>
		</div>
		<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
		<div class="padTopAdd5">
			<mybutton :btnData="btnData" @click="next_btn" />
		</div>
	</div>
</template>	
<script>
	import towtop from '../../../../components/HederTwo'
	import { cenurl } from "@/components/toptow.js";
	import mybutton from "../../../../components/MyButton";
	export default	{
		data() {
			return {
				btnData:[
				{
					text:'下一步',
					disabled: false,
					isSure: true,
				}
				],
				titlename:'律师事务所（分所）名称变更预申请 ',
				zzxs:'',
				zgsfxzjg:'',
				lawyerform:'',


			}
		},
		components: {
			mybutton,
			towtop
		},
		created() {
			if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
				this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
				return false
			}
			this.get_res()
			var WorkId = this.$route.query.WorkId;
			sessionStorage.setItem("WorkId",WorkId)
		},
		methods : {
			next_btn() {
				if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
					this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
					return false
				}
				this.$router.push({
					name:'swsbg_two',
					params:{lawyerform:this.lawyerform}
				})
				
			},
			get_res () {
				let  data1 = {
					"txnCommCom":
					{
						"tRecInPage":"10","tPageJump":"2","tStsTraceId":"110567890"
					},
					"txnBodyCom":
					{
						matter_id: window.sessionStorage.getItem("matterid"),
						// app给返回
						//律师事务所查询参数,
						"c_zwmc":"",
						//律师事务所查询当前负责人参数,
						"c_tyshxydm":window.sessionStorage.getItem("socialNumber")!='null'?window.sessionStorage.getItem("socialNumber"):'-----------',
						// "c_tyshxydm":"1234567890",
					}
				}

				this.$ajaxRequest("post", "/gsp/mng80090", data1)
				.then(res => {
					console.log(res.list[0]);
					this.zzxs = res.list[0].c_zzxsn
					this.zgsfxzjg = res.list[0].j_name
					this.lawyerform = res.list[0].c_zfsxs
					
				})
				.catch(err => {});
			},

		}
	}
</script>


<style scoped="swsbg_one.vue">
.swsbg_one	.content ul {
	width: 100%;
	background-color: #fff;
}
.swsbg_one .content li {
	width: 90%;
	height: 1rem;
	line-height: 1rem;
	margin: 0 auto;
	border-bottom: 0.01rem solid #ccc;
	font-size: 0.28rem;
}
.swsbg_one .content li h2 {
	float: left;
}
.swsbg_one .content li p {
	width: 3rem;
	text-align: right;
	float: right;
	color: #999;
	
}
.swsbg_one .hui-btn.is-block {
	font-weight: 700;
	display: inline-block;
	width: 5.9rem;
	height: 0.9rem;
	margin: 1rem 0.35rem;
	background-color: #2D7FFC;
	font-size: 0.32rem;
	color: #fff;
}
</style>