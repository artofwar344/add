<template>
	<div>
	
		<div class="nav_title">云南中贸环境节能投资股份有限公司</div>
		<div class="tabcen_list">
			<ul>
				<li v-for="(list,index) in data" :key="index"><span class="title">{{list.name}}</span><span class="cen">{{list.center}}</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){ 
			return{
				data:[
					{name:'资质类型',center:'xxx'},
					{name:'资质证书编号',center:'xxx'},
					{name:'资质专业及等级',center:'xxx'},
					{name:'发证机关',center:'xxx'},
					{name:'发证日期',center:'xxx'},
					{name:'有效期至',center:'xxx'},
				]
			}
		}
	}
</script>

<style scoped lang="less">
	.nav_title {
		height: .7rem;
		line-height: .7rem;
		text-align: left;
		font-size: .12rem;
		background: #f1f3f6;
		padding-left: .32rem;
		color: #999;
	}
	.tabcen_list{
		
		font-size: .14rem;
		text-align: left;
		padding: .15rem;;
		background: #fff;
		ul li{
			line-height: .5rem;
			height:.7rem;
		}
		.title{
			color: #333;
			float: left;
		}
		.cen{
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