<template>
	<div>
	
		<div class="nav_title">云南中贸环境节能投资股份有限公司</div>
		<div class="tabcen_list">
			<ul>
				<li ><span class="title">人员姓名</span>
				<span class="cen">{{list.center}}</span>
				</li>
				<li ><span class="title">身份证</span>
				<span class="cen">{{list.center}}</span>
				</li>
				<li ><span class="title">注册类型及级别</span>
				<span class="cen">{{list.center}}</span>
				</li>
				<li ><span class="title">注册证书号（执业印章号）</span>
				<span class="cen">{{list.center}}</span>
				</li>
				<li ><span class="title">注册专业</span>
				<span class="cen">{{list.center}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){ 
			return{
				
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