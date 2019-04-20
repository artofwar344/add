<template>
	<div>
		<towtop :name="titlename"/>
		<div class="zhushi">
			<div class="header">
				<div class="blue"></div>
				<div class="tishi">温馨提示</div>
			</div>
			<p>1.请在办理专职律师变更执业机构许可前，仔细阅读<span style="color: #2D7FFC;">《律师执业、变更、注销许可办事指南》</span>，严格按照办事指南中的要求提交材料；</p>
			<p>2.系统中星号键为必填项；</p>
			<p>3.待省司法厅审核许可后线下将电子凭证和所有材料源文件交到拟执业机构所属州市司法局核验领取结果；</p>
			<p>4.在流程结束前，请关注“我的办理进度”，并及时处理系统消息。</p>
		</div>
		<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
		<div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="next_btn" />
        </div>
	</div>
</template>
<script>
import towtop from '../../../../components/HederTwo'
import mybutton from "../../../../components/MyButton";
	export default {
		components:{
    mybutton,
			towtop
		},
		data() {
			return {
				btnData:[
        {
          text:'下一步',
          disabled: false,
          isSure: true,
        }
      ],
				titlename:"律师事务所（分所）变更章程许可",
				
			}

		},
		methods: {
			next_btn() {
    			this.$router.push('/bgzcxk_two')
    		}
		},
		mounted(){
			
		}

	};
</script>
<style>
	.zhushi {
		margin-top: 0.2rem;
		padding: 0.2rem 0 0.2rem 0;
		box-sizing: border-box;
		background-color: #fff;
	}
	.zhushi .header {
		width: 90%;
		margin: 0.1rem auto;
		text-align: left;
	}
	.zhushi .blue {
		width: 0.06rem;
		height: 0.24rem;
		background-color: #2D7FFC;
		margin-right: 0.2rem;
		display: inline-block;
	}
	.zhushi .tishi {
		font-size: .3rem;
		font-weight: 700;
		display: inline-block;
	}
	.zhushi p {
		width: 90%;
		margin: 0 auto;
		font-size: 0.24rem;
		text-align: left;
		margin-top: 0.15rem;
		color: #666;
	}
	 .hui-btn.is-block {
	 	font-weight: 700;
	 	display: inline-block;
        width: 5.9rem;
        height: 0.9rem;
        margin: 1rem 0.35rem;
        background-color: #2D7FFC;
        font-size: 0.32rem;
        color: #fff;
    }
</style>