<template>
	<div class="box">
		<!--<div class="header">
			<a  href=""><</a>
			<div class="title">{{title}}</div>
		</div>-->
		<mt-header :title=title>
			<div @click="goback" slot="left">
				<mt-button icon="back">  </mt-button>
				<!--<mt-button @click="handleClose">close</mt-button>-->
			</div>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
</template>
<script>
	import Vue from 'vue';
	import {
		Header
	} from 'mint-ui';
	Vue.component(Header.name, Header);
	export default {
		props: ["title"],
		data() {
			return {

			};
		},
		methods: {
			goback(){
				this.$router.go(-1)
			}
		}

	}
</script>
<style  scoped>
	.mint-header {
    background-color: #FFFFFF !important; 
    color: #000000;
    font-family: PingFangSC-Semibold;
    }
</style>