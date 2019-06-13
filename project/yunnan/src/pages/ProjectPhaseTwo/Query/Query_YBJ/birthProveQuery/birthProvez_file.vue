<template>
	<div class="birthProvez_file">
		<towtop name="出生医学证明" />
		<div class="resaultpage">
			<img src="../../../../../assets/images/birthprove_fileimg.png" alt="">
			<div class="fail">查询失败</div>
			<p class="text">
				<span>注：</span>
				<span>目前只支持查询2017年1月1日后在云南省医疗机构内正常分娩的小孩的出生医学证明信息</span>
			</p>
		</div>
		<div class="padTopAdd5">
			<mybutton :btnData="btnData" @click="next_btn" />
		</div>
	</div>
</template>
<script>
	import towtop from '@/components/HederTwo.vue';
	import mybutton from "@/components/MyButton";
	export default {
		data() {
			return {
				btnData:[
				{
					text:'确定',
					disabled: false,
					isSure: true,
				}
				],
			}
		},
		components: {
			towtop,
			mybutton,
		},
		methods:{
			next_btn(){
				console.log('这是确定按钮')
				this.$router.push('/birthProvez')
			}
		}
	}
</script>
<style>
.birthProvez_file .resaultpage {
	width: 90%;
	margin: 0.35rem auto;
	background-color: #fff;
	padding-top: 1rem;
	padding-bottom: 1rem;
	box-sizing: border-box;
	border-radius: 0.2rem;
}
.birthProvez_file .resaultpage img {
	display: block;
	width: 3.94rem;
	height: 2.86rem;
	margin: 0 auto;
}
.birthProvez_file .fail {
	font-size: 0.34rem;
	font-weight: 700;
	color: #FA6366;
	margin-top: 1rem;
	margin-bottom: 0.3rem;
}
.birthProvez_file .text {
	width: 90%;
	margin: 0 auto;
}
.birthProvez_file .text span {
	font-size: 0.24rem;
	color: #999;
}
</style>