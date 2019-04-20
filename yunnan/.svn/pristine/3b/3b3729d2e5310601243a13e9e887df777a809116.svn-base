<template>
	<div>
		<towtop :name="titlename" />
		<div class="personinfo">
			<ul>
				<li>
					<h2>姓名</h2>
					<p>{{data[0].name}}</p>
				</li>
				<li>
					<h2>身份证号</h2>
					<p>{{data[0].cert_id}}</p>
				</li>
				<li>
					<h2>证件编号</h2>
					<p>{{data[0].zjbh}}</p>
				</li>
				<li>
					<h2>档案编号</h2>
					<p>{{data[0].dabh}}</p>
				</li>
				<li>
					<h2>发证机关</h2>
					<p>{{data[0].fzjg_mc}}</p>
				</li>
			</ul>
			<div class="firsttop">
				<div class="no">no.1</div>
				<ul>
					<li>
						<h2>发证日期</h2>
						<p>{{data[0].fzrq}}</p>
					</li>
					<li>
						<h2>考试机构名称</h2>
						<p>{{data[0].ksjg_mc}}</p>
					</li>
				</ul>
			</div>
				<div class="secondbtm">
				<div class="no">no.2</div>
				<ul>
					<li>
						<h2>发证日期</h2>
						<p>{{data[0].fzrq}}</p>
					</li>
					<li>
						<h2>考试机构名称</h2>
						<p>{{data[0].ksjg_mc}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="test">
			<div class="header">
				<div class="bot"></div>
				<div class="h2" style="display: inline-block;">考试合格项目</div>
			</div>
			<ul>
				<li>
					<h2>作业项目代号</h2>
					<p>{{data[0].zyxm_dh}}</p>
				</li>
				<li>
					<h2>作业种类名称</h2>
					<p>{{data[0].zyzl_mc}}</p>
				</li>
				<li>
					<h2>作业项目名称</h2>
					<p>{{data[0].zyxm_mc}}</p>
				</li>
				<li>
					<h2>打印日期</h2>
					<p>{{data[0].dyrq}}</p>
				</li>
				<li>
					<h2>有效日期</h2>
					<p>{{data[0].yxrq}}</p>
				</li>
			</ul>
			<ul>
				<li>
					<h2>作业项目代号</h2>
					<p>危（京）2013133</p>
				</li>
				<li>
					<h2>作业种类名称</h2>
					<p>高空作业</p>
				</li>
				<li>
					<h2>作业项目名称</h2>
					<p>国贸二期外墙安装</p>
				</li>
				<li>
					<h2>打印日期</h2>

					<p>2018-10-21</p>
				</li>
				<li>
					<h2>有效日期</h2>
					<p>2020-11-11</p>
				</li>
			</ul>
		</div>
		<div class="work">
			<div class="header">
				<div class="bot"></div>
				<h2>聘用记录</h2>
			</div>
			<!-- <ul>
				<li>
					<h2>聘用单位</h2>
					<p>{{data[0].pydw}}</p>
				</li>
				<li>
					<h2>聘用项目</h2>
					<p>{{data[0].pyxm}}</p>
				</li>
				<li>
					<h2>聘用周期</h2>
					<p>{{data[0].employ_start_end_time(pyzq)}}</p>
				</li>
				<li>
					<h2>法定代表人</h2>
					<p>{{data[0].employ_legal_person(fddbr)}}</p>
				</li>
			</ul> -->
			<ul>
				<li>
					<h2>聘用单位</h2>
					<p>中国二建</p>
				</li>
				<li>
					<h2>聘用项目</h2>
					<p>国贸二期</p>
				</li>
				<li>
					<h2>聘用周期</h2>
					<p>2.5年</p>
				</li>
				<li>
					<h2>法定代表人</h2>
					<p>马奇骏</p>
				</li>
			</ul>
		</div>
	
	</div>
</template>
<script>
	import towtop from '../../../components/HederTwo'
	export default {
		data() {
			return {
				titlename:'特种设备安全管理人员证查询',
				data:'',
				
			};

		},
		components: {
			towtop
		},
		created() {
			this.data = this.$route.params.list
			console.log(this.data)
		},
		methods: {
			
		},

	};
</script>
<style  scoped>
	.personinfo {
		background-color: #fff;
		width: 90%;
		margin: 0 auto;
		border-radius: 0.2rem;
		border-top: 0.058rem solid #2D7FFC;
		padding: 0.3rem 0 0.3rem 0;
		}
		.personinfo ul li {
			width: 90%;
			height: 0.6rem;
			margin: 0 auto;
			line-height: 0.6rem;
			font-size: 0.28rem;
		}
		.personinfo h2 {
			color: #999;
			width: 40%;
			display: inline-block;
			text-align: left;
		}
		.personinfo p {
			width: 55%;
			display: inline-block;
			text-align: left;
		}
		.personinfo .firsttop,.personinfo .secondbtm {
			width: 90%;
			margin: 0.3rem auto;
			background-color: #F5F5F5;
			border-radius: 0.2rem;
			font-size: 0.28rem;
			padding-bottom: 0.3rem;
		}
		.personinfo .firsttop .no,.personinfo .secondbtm .no {
			width: 0.96rem;
			height: 0.48rem;
			line-height: 0.48rem;
			background-color: #FAC306;
			color: #fff;
			text-align: center;


		}
	.test {
		margin: 0.3rem auto;
		background-color: #fff;
		font-size: 0.28rem;
		padding-top: 0.05rem;
		text-align: left;
		padding-bottom: 0.2rem;

		}
		.test .header,.work .header {
			margin: 0.3rem auto;
			text-align:left;
			padding-left: 0.35rem;
		}
		.test .bot,.work .bot {
			width: 0.06rem;
			height: 0.24rem;
			background-color: #257BFF;
			display: inline-block;
			margin-right: 0.2rem;
		}
		.test ul,.work ul {
			width: 90%;
			margin: 0.3rem auto;
			background-color: #f5f5f5;
			padding: 0.3rem 0.3rem;
			border-radius: 0.2rem;
			box-sizing: border-box;
		}
		
		.test ul li,.work ul li  {
			width: 90%;
			margin: 0 auto;
			height: 0.6rem;
			line-height: 0.6rem;
		}
		.test p,.test h2 ,.work p,.work h2{
			display: inline-block;
			text-align: left;
			width: 49%;
		}
	.work {
		background-color: #fff;
		width: 100%;
		font-size: 0.28rem;
		padding-top: 0.1rem;
		padding-bottom: 0.2rem;

		}
		.work .header h2 {
			display: inline-block;
		}
		.test h2 , .work h2 {
			color: #999;
		}
</style>