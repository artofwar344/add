<template>
	<div class="box">
		<towtop :name="titlename"/>

		<div class="example-field">
			<form @submit.prevent="submitEvent4">
				<Field :propserror="errorNum" :error="errorNumInfo"
				type="number" label="身份证号" :value="numValue" placeholder="110101199301130213" required
				v-on:currentval="handleNumVal" v-on:errorchange="handleErrorChangesNum">
			</Field>
			<div class="example-field_btn-wrapper">
				<Btn plain block @click.native="popupVisible6 = true">核验</Btn>
				<Popupprompt
				v-model="popupVisible6"
				:title="content2.title"
				:text="content2.text"
				:confirm-btn = {}
				:cancel-btn = {}
				:btn-list= "content2.btnList"
				@click="clickbtn2"
				>
				<div slot="othercontent">
				</div>
			</Popupprompt>
		</div>
		</form>
	</div>
	</div>
</template>
<script>
	import towtop from '../../../components/HederTwo'

	export default {
		data() {
			return{
				titlename:'特种设备安全管理人员补证',
				numValue:'',
				errorNum:false,
				errorNumInfo:'',
				popupVisible6: false,
				content2: {
					title: "无法办理此事项",
					text: "您好！未查询到特种设备安全管理人员证件信息，无法办理此事项，请核实！如有疑问，请咨询相关部门。",
					btnList: [
					{
						id: "btn1",
						text: "确认",
						primary: true
					}, 
					]
				}
			};
		},
		components: {
			towtop
		},
		methods:{
		      handleErrorChangesNum(val){//数字错误状态接收
		      	this.errorNum = val;
		      },
		      handleNumVal(val){
		      	this.numValue = val;
		      },
		      submitEvent4(){
		      	/*数字格式和非空校验start*/
		        if (this.numValue === '') {//数字格式空校验，如果不是必填不用写
		        	this.errorNum = true;
		        	this.errorNumInfo = '请输入数字'
		        }
		        if (this.numValue) {//数字格式不正确
		        	const result = validateNum(this.numValue);
		        	if (!result) {this.errorNum = true;this.errorNumInfo = '数字格式不正确'}
		        }
		        /*数字格式和非空校验end*/
		    },
		    clickbtn2(id) {
		    	this.$router.push('/supplement')
		    }
		}
   
	}


</script>		

<style scoped="specialEquipment.vue">
	.hui-field_core {
		text-align: right
	}
	.hui-field_main {
		font-size: 0.28rem;
	}
	.hui-field_star {
		display: none;
	}
	.hui-btn.is-block {
		width: 5.9rem;
		height: 0.9rem;
		margin: 1rem auto;
		background-color: #2D7FFC;
		font-size: 0.32rem;
		color: #fff;
	}
	.hui-popupPrompt_text {
		text-align: left;
		color: #A3A3A3;
	}

</style>