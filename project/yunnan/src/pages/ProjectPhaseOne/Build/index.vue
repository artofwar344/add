<template>
	<div class="example-formgroup">
		<towtop :name="hadertow"/>
		
		<indeone v-show="(see == 1)?true:false"/>
		<indetow v-show="(see == 2)?true:false"/>
		<indethree v-show="(see == 3)?true:false"/>
		<indefour v-show="(see == 4)?true:false"/>

	</div>

</template>

<script>
	import towtop from '../../../components/HederTwo'
	import indeone from './index/indeOne.vue'
	import indetow from './index/indeTow.vue'
	import indethree from './index/indeThree.vue'
	import indefour from './index/indeFour.vue'
	export default{
		name:'chaxun',
		data(){
			return{
				see:'',
				hadertow:'',
			}
		},
		components:{
			towtop,
			indeone,
			indetow,
			indethree,
			indefour
		},
		methods:{
			sclloc(){
				let figure = this.$route.query.name
				if (figure == '10') {
					this.see = 1
					this.hadertow = '工程监理企业资质查询'
				}else if (figure == '11'){
					this.see = 2
					this.hadertow = '建筑施工企业安全生产许可证'
				}else if (figure == '12'){
					this.see = 3
					this.hadertow = '建筑施工企业资质查询'
				}else if (figure == '13'){
					this.see = 4
					this.hadertow = '施工图审查机构查询'
				}
				
			}
		},
		created(){
			this.sclloc()
		}
	}
</script>
 <style lang="less">
 .example-formgroup{
	 .hui-field_title {
		font-size: .28rem;
		width: 35% !important;
	}
	.hui-field{
	    height: 1rem;
		display: flex;
	}
	.hui-field_core {
		font-size: .28rem;
	}
 }
	
</style>