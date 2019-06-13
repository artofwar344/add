<template>
	<div>
		<towtop :name='hadertow' />
		<div class="chatab">
			<router-link tag="div" :to="{path:'/chatabel/tableone',query:{name:name,id:listid,companyid:companyid,titlename:titlename}}" class="chatit" @click='handleClick(1)'>基本信息</router-link>
			<router-link v-if="name != 11 && name != 13" tag="div" :to="{path:'/chatabel/tabletow',query:{name:name,listid:listid,companyid:companyid,titlename:titlename}}" class="chatit" @click='handleClick(2)'>企业资质</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import towtop from '../../../components/HederTwo'
	export default {
		data() {
			return {
				isActive: true,
				hadertow:'',
				name:'',
				listid:'',
				companyid:'',
				titlename:''
				
			}
		},
		created() {
			this.hadertow=this.$route.query.hadertow;
			this.titlename=this.$route.query.enterprisename;
			this.listid = this.$route.query.id;
			this.companyid=this.$route.query.companyid;
			this.name = this.$route.query.name;
			this.fun();
		},
		components: {
			towtop
		},
		methods: {

			fun() {
				console.log(this.$route)
				if(this.$route.path == "/chatabel/tableone") {
					this.isActive == true
				}
			},
			handleClick(index) {
				console.log(index)
				this.data.activeTab = index; // active状态的tab

			}
		},

	}
</script>

<style scoped>
	.router-link-active {
		color: #257BFF;
		border-bottom: 2px #257BFF solid
	}
	
	.chatab {
		display: flex;
		height: .9rem;
		color: #999;
		line-height: .9rem;
		font-size: .28rem;
		background: #fff;
	}
	
	.chatab div {
		flex: 1;
	}
</style>