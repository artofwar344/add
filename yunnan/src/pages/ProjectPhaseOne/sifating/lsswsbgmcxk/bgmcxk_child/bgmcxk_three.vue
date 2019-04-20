<template>
	<div class="bgmcxk_three">
		<towtop :name="titlename"/>
		<div class="header2">律所名称变更申请——变更信息</div>
		<div class="content">
			<ul>
				<li>
					<h2>原中文名称</h2>
					<p>{{ this.yzwmc }}</p>
				</li>
				<li>
					<h2>律所地址</h2>
					<p>{{ this.lsdz }}</p>
				</li>
				<li>

					<h2>变更后中文名称</h2>
					<p>{{ this.zwmc }}</p>
				</li>
				<li>
					<h2>是否通过检索</h2>
					<p>{{ this.is_take }}</p>
				</li>
				<li>
					<h2>组织形式</h2>
					<p>{{ this.zzsh }}</p>
				</li>
				<li>
					<h2>负责人</h2>
					<p>{{ this.fzr }}</p>
				</li>
				<li>
					<h2>电话</h2>
					<p>{{ this.dh }}</p>
				</li>
			</ul>
		</div>
		<div class="zyjl">申请变更理由<sup style="color: red">*</sup></div>
		<Field class="textarea" type="textarea" label="" :value="textareaValue"  rows="6" v-on:currentval="handleTextareaVal2" placeholder="请输入申请变更理由100字以内">
		</Field>
		<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
		<div class="padTopAdd5">
			<mybutton :btnData="btnData" @click="next_btn" />
		</div>
	</div>
</template>
<script>
	import towtop from '../../../../../components/HederTwo'
	import mybutton from "../../../../../components/MyButton";

	export default {
		components:{
			mybutton,
			towtop
		},
		data() {
			return {
				btnData:[
				{
					text:'下一步',
					disabled: false,
					isSure: true,
				}
				],
				titlename:"律师事务所（分所）变更名称许可",
				textareaValue:'',
				yzwmc:'',
				lsdz:'',
				zzsh:'',
				fzr:'',
				dh:'',
				c_bh:'',
				workid:'',
				is_take:'',
				zwmc:'',


			}

		},
		created() {
			this.get_lsxx()
			var WorkId = this.$route.query.WorkId;
			console.log(111222,WorkId)
			sessionStorage.setItem("WorkId",WorkId)
			this.workid = sessionStorage.getItem('WorkId')
		},
		methods: {
			next_btn() {
				if (!this.textareaValue || this.textareaValue.length > 100) {
					this.$toast('请输入申请变更理由并且在100字以内')
					return false
				}
				let data= {
					'txnBodyCom':{
						'work_id':this.workid,
						'matter_id':window.sessionStorage.getItem('matterid'),
						'json_content':{
							'work_id':this.workid,
							'lwr_id':this.c_bh,
							'rsn':this.textareaValue,
						}
					}
				}
				this.$ajaxRequest('post','/gsp/appForm00001',data)
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
				if (!this.zwmc) {
					this.$toast('请先办理律所名称变更预申请事项')
				}else{
					this.$router.push('/bgmcxk_four')
				}


			},
			handleTextareaVal2(val) {
				this.textareaValue = val
				if (this.textareaValue.length > 100) {
					this.$toast('请输入申请变更理由100字以内')
				}
				console.log(this.textareaValue)
			},
			// 律所接口 调取律所数据 律所编号查询99004接口 查到律所名称变更状态
			get_lsxx() {
				let _self = this;
				let data = {
					"txnCommCom":
					{
						"tRecInPage":"10","tPageJump":"2","tStsTraceId":"110567890"
					},
					"txnBodyCom":
					{
						matter_id: window.sessionStorage.getItem("matterid"),
						//律师事务所查询参数,
						"c_zwmc":"",
						//律师事务所查询当前负责人参数,
						"c_tyshxydm":window.sessionStorage.getItem("socialNumber")!='null'?window.sessionStorage.getItem("socialNumber"):'-----------',
						// ??????????????????????
						// 'c_tyshxydm':'31530000560082649B',
					}
				}
				this.$ajaxRequest("post", "/gsp/mng80090", data)
				.then(res=>{
					console.log(res)
					_self.yzwmc = res.list[0].c_zwmc
					_self.lsdz = res.list[0].c_mc
					_self.zzsh = res.list[0].c_zzxsn
					_self.fzr = res.list[0].c_fzrxm
					_self.dh = res.list[0].c_dh
					_self.c_bh = res.list[0].c_bh
					console.log('这是cbh',_self.c_bh)
					_self.get_lsbg()


				})
				.catch(err=>{
					console.log(err)
				})
				

			},
			// 变更名称接口  返回状态字段
			get_lsbg() {
				let _self = this
				// console.log(this.c_bh)
				let data = {
					"txnCommCom": {
						"tenant":"530000000000",
						"txnIttChnlId":'C0011234567890987654321',
						"txnIttChnlCgyCode":'AC02C001',"tRecInPage":"10","tPageJump":"1"
					},
					"txnBodyCom": {
						"CLsuoBh":_self.c_bh,
						"matter_id":window.sessionStorage.getItem('matterid'),
						"chann_id":"1001"
					}
				}
				this.$ajaxRequest("post", "/gsp/mng99004", data)
				.then(res=>{
					// debugger

					console.log(res)
					console.log(res.data)
					this.zwmc = res.data.cZwmc
					console.log(this.zwmc)
					if (res.data.cZwmc) {
						this.is_take = '通过'
					}else{
						this.is_take = '未通过'
					}
					
					


				})
				.catch(err=>{
					console.log(err)
				})
			},

		},

	};

</script>
<style>
.bgmcxk_three .hui-btn.is-block {
	font-weight: 700;
	width: 5.9rem;
	height: 0.9rem;
	margin: 1rem auto;
	background-color: #2D7FFC;
	font-size: 0.32rem;
	color: #fff;
}
.bgmcxk_three .header2 {
	width: 90%;
	margin: 0 auto;
	height: 0.6rem;
	font-size: 0.28rem;
	line-height: 0.6rem;
	text-align: left;
	color: #999;
}
.bgmcxk_three.content {
	background-color: #fff;
}
.bgmcxk_three .content ul {
	width: 100%;
	background-color: #fff;
}
.bgmcxk_three .content li {
	width: 90%;
	height: 1rem;
	line-height: 1rem;
	margin: 0 auto;
	border-bottom: 0.01rem solid #ccc;
	font-size: 0.28rem;
}
.bgmcxk_three .content li h2 {
	float: left;
}
.bgmcxk_three .content li p {
	float: right;
	color: #999;
}
.bgmcxk_three .hui-field_main .hui-field_star {
	display: none;
}
.bgmcxk_three  .hui-field_main {
	height: 0.9rem;
	line-height: 0.9rem;
}
.bgmcxk_three .hui-field_textarea .hui-field_title {
	padding-top: 0.2rem;
	padding-left: 0.1rem;
}
.bgmcxk_three  .textarea .hui-field_core {
	text-align: left;
}
.bgmcxk_three .textarea .hui-field_value {
	display: block;
	width: 100%
}
.bgmcxk_three .textarea .hui-field_title {
	width: 0rem;
}
.bgmcxk_three .zyjl {
	width: 100%;
	padding:0 0.35rem;
	font-size: 0.28rem;
	height: 0.6rem;
	line-height: 0.6rem;
	text-align: left;
	color: #999;
}
.bgmcxk_three .textarea .hui-field_main {
	height: 2.9rem;
}
.bgmcxk_three .hui-field_core {
	text-align: left;
}
</style>
