<template>
	<div class="bureau_sports_search">
		<Header title="云南公共体育"></Header>
		<towtop :name="title" />
		<div class="bureau_sports_search_list" v-for="item in searchListData">
			<div class="search_list_header">
				<em class="tip"></em>
				<p class="tipName">{{item.Stadium_Name}}</p>
			</div>
			<div class="detailList" @click="goDetail(item.Sports_Id)">
				<Grid>
					<Gridcol :cols="3">地址</Gridcol>
					<Gridcol :cols="9">{{item.Address}}</Gridcol>
				</Grid>
				<Grid>
					<Gridcol :cols="3">开放时间</Gridcol>
					<Gridcol :cols="9">{{item.Dispark_Time}}</Gridcol>
				</Grid>
			</div>

		</div>

	</div>
</template>
<script>
	import towtop from '../../../components/HederTwo';
	import Button from './../common/button.vue';

	export default {
		data() {
				return {
					title:"云南省公共体育馆",
					searchListData: [],
					param:''
				}
			},
			components: {
				towtop,
				Button
			},
			mounted: function(){
				console.log(JSON.parse(this.$route.params.datalist));
				this.searchListData = JSON.parse(this.$route.params.datalist);
			},
			methods: {
				goDetail(index){
					console.log(index);
					this.$router.push({
							name:'sportsResultDetail',
							params:{ sports_id: index}
					})
					
				}

			}

	}
</script>

<style scoped>
	.bureau_sports_search_list {
		width: 100%;
		min-height: 2.4rem;
		background: #FFFFFF;
		border-bottom: 0.01rem solid #edeef2;
	}
	
	.search_list_header {
		text-align: left;
		height: 0.88rem;
		width: 100%;
	}
	
	.search_list_header .tip {
		display: inline-block;
		height: 0.24rem;
		width: 0.06rem;
		background: #257BFF;
		margin: 0 0.2rem;
	}
	
	.search_list_header .tipName {
		display: inline-block;
		text-align: left;
		font-size: 0.28rem;
		color: #333333;
		line-height: 0.88rem;
	}
	
	.bureau_sports_search .columns {
		font-size: 0.28rem;
		line-height: 0.62rem;
		color: #999999;
		font-family: PingFangSC-Regular;
	}
	
	.bureau_sports_search .columns:nth-child(odd) {
		text-align: left;
	}
	
	.bureau_sports_search .columns:nth-child(even) {
		text-align: right;
	}
</style>