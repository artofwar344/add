<template>
	<div class="state-owned">
		<towtop :name="titlename"/>
		<div class="example-formgroup" v-html="datatext.bulletinContent">
		</div>
		<!--<div class="chargeBtn">
			<button class="btn" @click="pushAjax()">查询</button>
		</div>-->

	</div>
</template>

<script>
import towtop from '../../../../components/HederTwo'
	export default {
		components:{
			towtop
		},
		data() {
			return {
				titlename:"政府采购采购公告查询",
				datatext:''
			}

		},
		methods: {
			parameter(){
				console.log(this.$route.params.datatext)
				this.datatext=this.$route.params.datatext;
			}
		},
		mounted(){
			this.parameter()
		}

	};
</script>

<style scoped>
.example-formgroup{
	background: white;
	overflow: auto;
}
</style>