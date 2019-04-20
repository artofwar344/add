<template>
	<div class="box">
		<button @click="btn()" class="button_common">{{name}}</button>
	</div>
</template>
<script>
	
	export default {
		props: ["name"],
		data() {
			return {

			};
		},
		methods: {
			btn(){
				this.$emit('btnClick')
			}
		}

	}
</script>
<style  scoped>
.button_common{
	height: 0.9rem;
	width: 5.9rem;
	background: #2D7FFC;
	border-radius: 0.45rem;
	border: none;
	font-size: 0.44rem;
	color:#FFFFFF;
	margin: 0.9rem 0;
}
</style>