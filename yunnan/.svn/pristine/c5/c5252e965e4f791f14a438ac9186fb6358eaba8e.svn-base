<template>
	<div class="box dts_container">
		<towtop :name="titlename"/>
		<div class="baseinfo">
			<div class="title6">
				<span></span>
				<h2>项目基本信息</h2>
			</div>
			<div class="toggle">
				<Field type="text" label="项目代码" readonly>{{result.f_CENTRAL_PROJ_CODE}}</Field>
				<Field type="text" label="项目名称" readonly>{{result.PROJ_NAME}}</Field>
				<Field type="text" label="项目类型"  placeholder="" readonly>{{proType}}</Field>
			</div>
			<div class="btm" @click.stop.prevent="toggle">
				<Icon type="arrow-up" size="25"  color="#2D7FFC" ></Icon>
			</div>
		</div>
		<div v-model="info">
			<div class="baseinfo" >
				<div class="title6">
					<span></span>
					<h2>审批事项公示信息</h2>
				</div>
				<div class="toggle">
					<Field type="text" label="审批部门" readonly>{{info.TRAN_DEP}}</Field>
					<Field type="text" label="审批事项" readonly>{{info.TRAN_PNAME}}</Field>
					<Field type="text" label="审批结果" readonly>{{info.TRAN_STATUS}}</Field>
					<Field type="text" label="审批时间" readonly>{{info.TRAN_ACTUAL_FINISH_TIME}}</Field>
					<Field type="text" label="审批文号" readonly>{{RESULT_SERIAL_NUMBER}}</Field>
				</div>
				<div class="btm"  @click.stop.prevent="toggle">
					<Icon type="arrow-up" size="25"  color="#2D7FFC"></Icon>
				</div>
			</div>			
		</div>
	</div>
	<!-- 2018-532923-47-01-014396 -->
	<!-- 2018-530102-83-01-014198 -->
</template>
<script>
	import towtop from '../../../components/HederTwo'

	export default {
		data() {
			return{
					titlename:'投资项目办件进度查询',
					code:'',
					name:'',
					info:{},
					infoTwo:{},
					record:[],
					RESULT_NAME:"",
					RESULT_SERIAL_NUMBER:"",
					result:{}
			}
		},
		components: {
			towtop
		},
		mounted(){			
			
			let params = this.$route.params.datalist;
			console.log(params)
			this.code = params.CODE;
			this.name = params.PROJ_NAME;
			this.PROJ_NAME = params.PROJ_NAME;
			this.info = params.TRAN_INFO;
			this.result = params.result;
			if(params.TRAN_INFO.TRAN_RESULT){
				this.RESULT_SERIAL_NUMBER = params.TRAN_INFO.TRAN_RESULT[0].RESULT_SERIAL_NUMBER
			}
		},
		computed:{
			proType(){
				let arr = this.code.split("-");
				let tempStr = '';
				switch (arr[3]) {
					case '01':
						tempStr = '审批';
						break;
					case '02':
						tempStr = '核准';
						break;
					case '03':
						tempStr = '备案';
						break;
					default:
						break;
				}
				return tempStr;
			}
		},
		methods:{
			toggle(event){
				var ele = event.currentTarget;
				var toggleEle = ele.parentNode.querySelector(".toggle");
				var iconEle = ele.firstChild;
				toggleEle.className = toggleEle.className=="toggle"?"toggle hidden":"toggle";
				iconEle.className = iconEle.className.indexOf("arrow-up")!=-1?"hui-icon hui-icon_arrow-down":"hui-icon hui-icon_arrow-up"
			},
		}
	}
</script>
<style  scoped>
	.hidden {
		display:none;
	}
	.box {
		background-color: #edeef2;

	}
	.baseinfo {
		margin-top: 0.2rem;
		background-color: #fff;
	}
	.title6 {
		width: 90%;
		margin: 0 auto;
		text-align: left;
		height: 0.8rem;
		line-height: 0.8rem;
	}
	.title6 span {
		display: inline-block;
		margin-right:0.15rem;
		width: 0.06rem;
		height: 0.24rem;
		background-color: #2D7FFC;
	}
	.title6 h2 {
		display: inline-block;
		font-size: .28rem;
	}
	.btm {
		width: 90%;
		margin: 0 auto;
		height: 1rem;
		line-height: 1rem;
		border-top: 0.01rem solid #ccc;
	}
	.hui-field_core {
		text-align: right;
		
	}
	.hui-field_star {
		display: none;
	}
	.hui-field {
		min-height: 0.8rem;
		font-size: 0.28rem;
		border: none !important;
		text-align: right;
	}
	.dts_container .hui-field {
		min-height: 0.8rem;
		border: none !important;
		text-align: right;
	}
</style>
<style>
	.dts_container .hui-field {
		min-height: 0.8rem;
		border: none !important;
		text-align: right;
	}
</style>
