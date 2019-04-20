<template>
	<div class="promrt">
		<div class="example-formgroup">
			<FormGroup v-on:accept-submit="submitEvent" title-position="left">
				<Field :propserror="errorText" desc-class="richText" type="text" label="变更事项" :value="comeReason" placeholder="请选择" v-on:errorchange="handleErrorChangesText">
				</Field>
			</FormGroup>
		</div>

		<div class="nav">
          <div class="navTitle" style="margin-top: 0.16rem;">
          	<div></div><h1>温馨提示</h1>
          </div>
          
          <div class="navTitleTwo">
             <p>1.请在办理律师变更执业机构许可（省内变更）前，仔细阅读<a>《律师执业、变更、注销许可办事指南》</a>，严格按照办事指南中的要求提交材料；</p><br />
             <p>2.系统中星号键为必填项；</p><br />
          	 <p>3.待省司法厅审核许可后线下将电子凭证和所有材料源文件交到拟执业机构所属州市司法局核验领取结果；</p><br />
          	 <p>4.在流程结束前，请关注“我的办理进度”，并及时处理系统消息。</p><br />
          </div>
          
          <!-- <div class="btn">
          	<button><router-link to="/Results">下一步</router-link></button>
          </div> -->
          <div class="padTopAdd5">
				<mybutton :btnData="btnData" @click="goto" />
			</div>

		</div>

	</div>
</template>


<script>
import mybutton from "../../../../components/MyButton";
export default{
	data(){
		return{
			btnData:[
				{
					text:'下一步',
					disabled: false,
					isSure: true,
				}
			],
		}
	},
	components:{
		mybutton,
	},
	methods:{
		goto(){
			this.$router.push('/Results')
		}
	}

}
</script>

<style scoped>
	.promrt {
		background: #f1f3f6;
		width: 100%;
		height: 10rem;
	}
	.nav{
		width: 100%;
	}
	.navTitle{
		width: 100%;
		height: 0.47rem;
		background: #FFFFFF;
		position: relative;
	}
	.navTitle div {
		width: 0.09rem;
		height: 0.24rem;
		background: #2D7FFC;
		display: flex;
		position: absolute;
		left: 0.18rem;
		top: 0.1rem;
	}
	.navTitle h1{
		text-align: left;
		margin-left: 0.4rem;
		font-size: 0.3rem;

	}
	.navTitleTwo{
		background: white;
	}
	.navTitleTwo p{
		text-align: left;
		font-family: PingFangSC-Regular;
		color: #666666;
		letter-spacing: 0;
		margin-left: 0.18rem;
		margin-top: 0.12rem;
		margin-right: 0.18rem;
		font-size: 0.23rem;
	}
	.navTitleTwo p a{
		color: #2d7ffc;
	}
	.btn button {
		width: 5.9rem;
		height: 0.9rem;
		background: #2D7FFC;
		box-shadow: 0 5px 15px 0 rgba(45,127,252,0.50);
		border-radius: 25px;
		border: none;
		color: #FFFFFF;
		margin-top: 0.5rem;
		font-size: 0.3rem;
	}
	.btn button a{
		color: #FFFFFF;
	}
	.hui-field_core {
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 0.25rem;
		color: #999999;
		letter-spacing: 0.17px;
		text-align: right;
		font-size: 0.23rem;
	}
</style>