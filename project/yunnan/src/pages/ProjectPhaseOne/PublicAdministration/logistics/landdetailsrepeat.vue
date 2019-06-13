<template>
	<div class="details">
		<towtop :name='titlename'/>
		<div class="content">
            <div class="image" v-html="datatext.ggNeiRong">
            </div>
        </div>
		<!-- <div class="chargeBtn">
			<button><router-link to="">返回首页</router-link></button>
		</div> -->
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
				titlename:'土地使用权出让成交结果查询',
				datatext:''
			};

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
<style lang="less" scoped>
.content{
    margin-top: .16rem;
    background: white;
    text-align: left;
    overflow: auto;
    .image{
        width: 100%;
        padding: 0rem .35rem .26rem .38rem;
        box-sizing: border-box;
    }
}
</style>