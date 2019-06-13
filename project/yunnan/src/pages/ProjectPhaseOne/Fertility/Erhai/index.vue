<template>
	<div>
		<!--{{ age }}-->
		<towtop :name='hadertow'/>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import towtop from '../../../../components/HederTwo'
	import listone from './ListOne'
	import sclmap from './Sclmap'
	export default {
		name: 'formlist',
		data() {
			return {
				age: '1',
				hadertow:'贰孩生育服务登记',
			}
		},
		components: {
			listone,
			towtop,
			sclmap
		},
		methods: {
			sig(data) {
				console.log(data)
				this.age = 2
			},

		}

	}
</script>

<style>

</style>