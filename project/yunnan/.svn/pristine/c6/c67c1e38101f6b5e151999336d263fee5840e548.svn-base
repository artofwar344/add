<template>
	<div class="Toresults">
		<div class="navTitle">
          	<div></div><h1>变更执业机构申请表（省内变更）</h1>
        </div>
        <div class="note">
        	
        </div>
        
        <!-- <div class="Btnemail">
        	<button><router-link to="/Resone">发送至邮箱</router-link></button>
        </div> -->
		<div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="goto" />
        </div>
        
	</div>
</template>

<script>
import mybutton from "../../../../components/MyButton";
export default{
	components:{
    mybutton,
	},
	data(){
		return{
			btnData:[
				{
				text:'发送至邮箱',
				disabled: false,
				isSure: true,
				}
			],
		}
	},
	methods:{
		goto(){
			this.$router.push('/Resone')
		}
	}
}	
</script>

<style scoped>
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
	.note{
		width: 3.48rem;
		height: 4.74rem;
		background: #f1f3f6;
		margin: auto;
	}
	.Btnemail{
		position: relative;
	}
	.Btnemail button {
		width: 5.9rem;
		height: 0.9rem;
		background: #2D7FFC;
		box-shadow: 0 5px 15px 0 rgba(45,127,252,0.50);
		border-radius: 25px;
		border: none;
		color: #FFFFFF;
		font-size: 0.3rem;
		margin-top: 0.5rem;
		
	}
	.Btnemail button  a{
		color: #FFFFFF;
	}
</style>