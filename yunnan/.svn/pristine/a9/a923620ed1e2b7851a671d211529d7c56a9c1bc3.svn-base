<template>
	<div class="medicineThree">
		<towtop :name="titlename" />
		<div class="medicineThreeTop">
			<div class="medicineBox">
				<h1>生产者姓名</h1>
				<p style="">
					{{ medicinetwotext.producer_name }}
				</p>
			</div>
			<div class="medicineBox">
				<h1>社会信用代码（身份证号）</h1>
				<p>{{ medicinetwotext.id_number}}</p>
			</div>
			<div class="medicineBox">

				<h1>法定代表人（负责人）</h1>
				<p>{{ medicinetwotext.principal}}</p>
			</div>
			<div class="medicineBox">
				<h1>住所</h1>
				<p>{{ medicinetwotext.home}}</p>
			</div>
		</div>

		<div class="medicineThreeOne">
			<div class="medicineBox">
				<h1>生产地址</h1>
				<p>{{ medicinetwotext.address}}</p>
			</div>
			<div class="medicineBox">
				<h1>食品类型</h1>
				<p>{{ medicinetwotext.food_category}}</p>
			</div>
			<div class="medicineBox">
				<h1>许可证编号</h1>
				<p>{{ medicinetwotext.licence_number}}</p>
			</div>
			<div class="medicineBox">
				<h1>日常监督管理结构</h1>
				<p>{{ medicinetwotext.rcjdgljigou}}</p>
			</div>
			<div class="medicineBox">
				<h1>日常监督管理人员</h1>
				<p>{{ medicinetwotext.rcjdglrenyuan}}</p>
			</div>
			<div class="medicineBox">
				<h1>发证机关</h1>
				<p>{{ medicinetwotext.li_is_authority}}</p>
			</div>
			<div class="medicineBox">
				<h1>签发人</h1>
				<p>{{ medicinetwotext.signatory}}</p>
			</div>
			<div class="medicineBox">
				<h1>发证日期</h1>
				<p>{{ medicinetwotext.fazhengriqi}}</p>
			</div>
			<div class="medicineBox">
				<h1>有效期至</h1>
				<p>{{ medicinetwotext.youxiaoqi}}</p>
			</div>
			<div class="medicineBox">
				<h1 class="xukemingxi_h">许可明细</h1>
				<!-- <p class="xukemingxi">{{medicinetwotext.xukemingxi}}</p> -->
			</div>
			<p class="xukemingxi">{{medicinetwotext.xukemingxi}}</p>
			<!-- <div class="medicineBox">
				<h1>备注</h1>
				<p>{{ medicinetwotext.infuse}}</p>
			</div> -->
		</div>

		<!-- <div class="medicineThreeTwo">
			<p>许可明细</p>
			<p>{{ medicinetwotext.xukemingxi}}</p>
		</div> -->

		<div class="food">
			<!-- <div class="medicineBox">
				<h1>食品、食品添加剂类别</h1>
				<p>xxx</p>
			</div> -->
			<!-- <div class="medicineBox">
				<h1>类别编号</h1>
				<p>xxx</p>
			</div> -->
			<!-- <div class="medicineBox">
				<h1>类别名称</h1>
				<p>xxx</p>
			</div> -->
			<!-- <div class="medicineBox">
				<h1>品种明细</h1>
				<p>{{ medicinetwotext.xukemingxi}}</p>
			</div> -->
			<!-- <div class="medicineBox">
				<h1>备注</h1>
				<p>{{ medicinetwotext.infuse}}</p>
			</div> -->
			<!-- <div class="medicineBox">
				<h1>外设仓库地址</h1>
				<p>xxx</p>
			</div> -->
		</div>

		<div class="foodOne" v-show=" medicinetwotext.infuse">
			<div class="foodOneTit">
				<span></span>
				<p>注</p>
			</div>
			<div class="foodOneNote" >
				<p>{{ medicinetwotext.infuse}}</p>
				<!-- <p>{{ medicinetwotext.infuse}}</p> -->
			</div>
		</div>
		
		<!-- <div class="statisticalBtn">
			<button><router-link to="/medicineOne">返回首页</router-link></button>
		</div>
 -->
	</div>
</template>

<script>
	import '../../../../static/css/medicine/medicineThree.css';
	import towtop from '../../../components/HederTwo'
	export default({
		data(){
			return{
				titlename:'食品生产许可获证企业查询',
				medicinetwotext:''
			}
		},
		components:{
			towtop
		},
		created() {
		this.medicinetwotext = this.$route.params.data
		console.log(this.$route.params.data)
		},
		methods:{

		}

		
	})
</script>


<style  scoped>
	.medicineBox {
		margin: 0 auto;

	}
	/* .medicineBox h1 {
	} */
	.medicineBox p {
		overflow:hidden;
		flex: 1 1 50%;
	}

	
</style>
<style>
	.medicineThree .xukemingxi {
		width: 100%;
		background-color: #fff;
		line-height: 0.4rem;
		padding: 0.2rem 0.3rem;
		text-align: left;
	}
</style>