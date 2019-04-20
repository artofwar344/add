<template>
	<div>
		<towtop :name="titlename"/>
		<div class="banshui_list">
			<ul>
				<!-- <li @click="myappointmenttax()">
					 <Icon type="calendar" size="35"  color="#2d7ffc"></Icon>
					 <p>我的预约</p>
				</li> -->
				<li @click="appointmenttax()">
					 <Icon type="clock" size="35"  color="#2d7ffc"></Icon>
					 <p>我要预约</p>
				</li>
			</ul>
		</div>
		<div class="remarks">
			<div class="header">
				<div class="blue"></div>
				<p>备注</p>
			</div>
			<div class="content">
			<p>①我要预约是指预约办税；我的预约则是指预约记录，可在此实现预约取消功能。</p>
			<p>②预约说明文字内容如下：</p>
			<p>1、预约后，请您在预约时间到现场找导税员进行业务办理并出示验证码。</p>
			<p>2、预约后如用户未能如期办理三次以上（含三次）,将被列入系统预约黑名单，用户将不能再使用预约功能。用户取消预约黑名单，需到办税服务厅申请办理。</p>
			<p>3、取消预约不会影响用户信用。</p>
			<p>功能仅限于昆明市以下业务大厅</p>
			<p>五华区办税服务厅、盘龙区办税服务厅、官渡区办税服务厅、西山区严家地办税服务厅、西山区马街办税服务厅、东川区办税服务厅、呈贡区办税服务厅、 晋宁区办税服务厅、富民县1楼办税服务厅、富民县2楼办税服务厅、宜良县办税服务厅、石林县办税服务厅、嵩明县办税服务厅（大厅）、嵩明县办税服务厅（小厅）、禄劝县办税服务厅、 寻甸县办税服务厅、安宁县办税服务厅、直属局办税服务厅、度假区办税服务厅、高新区办税服务厅、经开区办税服务厅、阳宗海办税服务厅</p>
			</div>
		</div>

	</div>
</template>
<script>
	import towtop from '../../../components/HederTwo'
	export default {
		data() {
			return {
				titlename:'预约办税',
				
			};

		},
		components: {
			towtop
		},
		methods: {
			appointmenttax() {
				this.$router.push('/yybs_two')
			},
			myappointmenttax() {
				this.$router.push('/wdyy_two')
			}

			
			
		},

	};
</script>
<style  scoped>
	.banshui_list ul li{
		width: 90%;
		margin: 0.3rem auto;
		background-color: #fff;
		height: 1.6rem;
		line-height: 1.6rem;
		text-align: left;
		box-sizing: border-box;
		padding-left: 1rem;
	}
	.hui-icon {
		vertical-align: middle;
	}
	.banshui_list p {
		display: inline-block;
		font-size: 0.3rem;
		font-weight: 700;
		margin-left: 0.3rem;
	}
	.remarks {
		width: 90%;
		margin: 0 auto;
		padding: 0.2rem;
		box-sizing: border-box;
		text-align: left;
		background-color: #E4E7EA;
	}

	.remarks .blue {
		width: 0.06rem;
		height: 0.24rem;
		display: inline-block;
		background-color: #2d7ffc;
		margin-right: 0.25rem;
	}
	.remarks p {
		font-size: 0.28rem;
		display: inline-block;
	}
	.remarks .content {
		margin-top: 0.2rem;
		font-size: 0.24rem;
		color: #999;
	}
	.content p {
		margin-top: 0.05rem;
	}

</style>