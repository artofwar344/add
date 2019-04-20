<template>
	<div class="textinfo">
		<towtop name="预约须知" />
		<div class="textinfocontent">
			<div class="titleone">预约注意事项:</div>
			<p>1、派出所受理点目前仅受理昆明市户籍居民护照、往来港澳通行证及签注、往来台湾通行证及签注申请；</p>
			<p>2、预约办证实行一人一号，申请人凭个人身份证号进行预约（未成年人身份证号见户口本）。监护人携未成年人同时申请，为申请人提供便利，多个预约号可在同一窗口受理。</p>
			<div class="padTopAdd5">
				<mybutton :btnData="btnData" @click="next_btn" />
			</div>
		</div>
		
	</div>
</template>
<script>
	import towtop from '@/components/HederTwo.vue'
	import mybutton from "../../../../components/MyButton";
	export default {
		data() {
			return {
				btnData:[
				{
					text:'预约',
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
			next_btn() {
				this.$router.push('/passportFive')
			},
		}
	}
</script>
<style>

.textinfo .textinfocontent {
	background-color: #fff;
	margin-top: 0.2rem;
	padding: 0.2rem 0;
}
.textinfo .titleone {
	text-align: left;
	font-size: 0.32rem;
	width: 90%;
	margin: 0.3rem auto;
}
.textinfo p {
	text-align:left;
	font-size: 0.28rem;
	width: 90%;
	margin: 0.3rem auto;
}
</style>