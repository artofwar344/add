<template>
	<div class="box">
		<towtop style="margin-bottom: 0" :name="titlename"/>

		<div class="header">
			<span class="sp1">温馨提示：</span>
			<span class="sp2">此办理结果已存入我的证照</span>
		</div>
		<div class="img">
			<img src="../../../assets/images/438174873770974217.png" alt="">
		</div>
	</div>
</template>
<script>
import towtop from '../../../components/HederTwo'
	export default {
		data() {
			return {
				titlename:'特种设备安全管理人员补证',

			}
		},
		components: {
			towtop
		},
	}
</script>
<style  scoped>
	.box {
		background-color: #edeef2;

	}
	.header {
		text-align: left;
		height: .6rem;
		font-size: 0.28rem;
		line-height: .6rem;
	}
	.sp1 {
		color: #999;
	}
	.sp2 {
		color: #ffa414;
	}
	.img {
		background-color: #fff;
		padding-top: 0.2rem;
	}
	.img img {
		display: block;
		width: 90%;
		margin: 0 auto;
	}
</style>