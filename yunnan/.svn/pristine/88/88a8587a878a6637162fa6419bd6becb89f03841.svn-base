<template>
	<div>
		<towtop :name="hadertow"/>
		<div id="explain" >

			<router-link to='/' tag='button' class='scl_but'>办事指南</router-link>
			<router-link to='/list?flag=1' tag='button' class='scl_but'>民政厅</router-link>
			<router-link to='/list?flag=2' tag='button' class='scl_but'>公安厅</router-link>
			<router-link to='/list?flag=3' tag='button' class='scl_but'>税务局</router-link>
			<router-link to='/list?flag=4' tag='button' class='scl_but'>司法厅</router-link>
			<router-link to='/list?flag=5' tag='button' class='scl_but'>公管局</router-link>
			<router-link to='/list?flag=6' tag='button' class='scl_but'>财政厅</router-link>
			<router-link to='/list?flag=7' tag='button' class='scl_but'>文化厅</router-link>
			<router-link to='/list?flag=8' tag='button' class='scl_but'>教育厅</router-link>
			<router-link to='/list?flag=9' tag='button' class='scl_but'>统计局</router-link>
			<router-link to='/list?flag=10' tag='button' class='scl_but'>食药监</router-link>
			<router-link to='/list?flag=11' tag='button' class='scl_but'>质监局</router-link>
			<router-link to='/list?flag=12' tag='button' class='scl_but'>公积金</router-link>
			<router-link to='/list?flag=13' tag='button' class='scl_but'>省残联</router-link>
			<router-link to='/list?flag=14' tag='button' class='scl_but'>测绘局</router-link>
			<router-link to='/list?flag=15' tag='button' class='scl_but'>人社厅</router-link>
			<router-link to='/list?flag=16' tag='button' class='scl_but'>住建厅</router-link>
			<router-link to='/list?flag=17' tag='button' class='scl_but'>工商局</router-link>
			<router-link to='/list?flag=18' tag='button' class='scl_but'>投资审批中心</router-link>
			<router-link to='/list?flag=19' tag='button' class='scl_but'>体育局</router-link>
			<router-link to='/list?flag=20' tag='button' class='scl_but'>卫计委</router-link>
			<router-link to='/affairsMonitorOfficeHall' tag='button' class='scl_but'>政务大屏</router-link>
			<router-link to='/wuliu_two' tag='button' class='scl_but'>我的办事</router-link>
			<router-link to='/drugOne' tag='button' class='scl_but'>药品耗材集中采购查询</router-link>
			<router-link to='/service' tag='button' class='scl_but'>便民服务</router-link>
			<router-link to='/list?flag=21' tag='button' class='scl_but'>预约办税</router-link>
			<router-link to='/delivery' tag='button' class='scl_but'>物流材料递送</router-link>
			<router-link to='/Myaddress' tag='button' class='scl_but'>物流我的地址</router-link>
			<router-link to='/adreess' tag='button' class='scl_but'>物流快寄</router-link>
			<router-link to='/mypaper' tag='button' class='scl_but'>办理结果</router-link>
			 <button @click="callmodulebtn(0)" class='scl_but'>扫描</button>
			 <button @click="callmodulebtn(1)" class='scl_but'>定位</button>
			 <button @click="callmodulebtn(2)" class='scl_but'>手机号</button>
			 <button @click="callmodulebtn(3)" class='scl_but'>关闭</button>
			 <button @click="callmodulebtn(4)" class='scl_but'>TYPEOF</button>
		</div>
	</div>
</template>

<script>
	import towtop from '../../../components/HederTwo'

	export default {
		name: 'explain',
		data() {
			return {
				arr: '',
				show: false,
				hadertow: '事项指南'
			}
		},
		components: {
			towtop
		},
		created(){
			window.ResideCode=this.ResideCode;
			window.getGpsMsg=this.getGpsMsg;
		},
		watch: {
			scrollBehavior(to, from, savedPosition) {
				if(savedPosition) {
					return savedPosition
				} else {
					return {
						x: 0,
						y: 0
					}
				}
			}
		},
		methods: {
			education() {
				this.$router.push({
					name: 'Education',
					params: {
						titlename: "普通话水平测试成绩等级查询",
						name: "姓名",
						number: "身份证号/准考证号",
						placeholdername: "请输入姓名",
						placeholdernumber: "请输入证件号码"
					}
				})
			},
			callmodulebtn(typecode){
				if(typecode==0){
					this.$CallModule('scan','二维码扫描')
				}else if(typecode==1){
					this.$CallModule('location','定位')
				}else if(typecode==2){
					this.$CallModule('phone','18000404957')
				}else if(typecode==3){
					this.$CallModule('close','关闭')
				}else{
					let sendata='dsafdsa'
					console.log(typeof(sendata))
				}
			},
			//定位原生回调函数返回详细地址
			getGpsMsg(str){
			    alert(str)
			},
			//二维码扫描原生回调函数返回二维码信息
			ResideCode(str) {
			    alert(str)
			  }
		}
	}
</script>
<!--Add "scoped" attribute to limit CSS to this component only-->
<style lang="less" scoped>
	#explain {
		padding: 0 .3rem;
		li {
			height: .5rem;
			line-height: .5rem;
			padding: 0 .1rem;
			text-align: left;
			font-size: .24rem;
			border-bottom: 1px solid #ccc;
		}
	}
	
	.scl_but {
		display: block;
		width: 5.90rem;
		height: .9rem;
		line-height: .9rem;
		color: #fff;
		background: #2D7FFC;
		margin: 0 auto;
		border-radius: .5rem;
		margin-top: .3rem;
		margin-bottom: .3rem;
		font-size: .32rem;
	}
</style>