<template>
	<div class="serviceTop">
		<towtop :name="titlename"/>
		<div class="service">
			<router-link tag='div' class="left" to='/instruction'>
				<img src="../../../../static/image/预约结婚登记.png">
				<p>预约婚姻登记</p>
			</router-link>
			<!-- <router-link tag='div' class="left" to='/undo'>
				<img src="../../../../static/image/预约查询.png">
				<p>预约查询</p>
			</router-link> -->
		</div>
	</div>
</template>

<script>
import towtop from '../../../components/HederTwo'
export default {
    components:{
        towtop
	},
	data(){
        return {
            titlename:"预约结婚登记"
        }
    }
}
</script>


<style lang='less' scoped>
@import "../../../assets/css/Engagement.less";

</style>