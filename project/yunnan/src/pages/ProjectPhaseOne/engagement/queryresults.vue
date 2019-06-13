<template>
	<div class="body">
		<towtop :name="titlename"/>
		<h2>全国会计专业技术资格考试成绩查询</h2>
		<h3>{{typename}}</h3>
		<div class="qubg_img">
			<div class="names">
				<ul>
					<li>
						<span>姓名：</span>
						<span>{{datatext.name}}</span>
					</li>
					<li>
						<span>身份证号码：</span>
						<span>{{hiddenIdNumber(datatext.idNumber)}}</span>
					</li>
					<li class="mb0">
						<span>准考证号码：</span>
						<span>{{datatext.examCardNumber}}</span>
					</li>
				</ul>
			</div>
			<div class="result">
				<ul>
					<li class="mt0">
						<span class="w">科目名称</span>
						<span class="w">成绩</span>
					</li>
					<li v-for="list in datatext.scores">
						<span>{{list.subject}}</span>
						<span class="number">{{list.score}}</span>
					</li>
				</ul>
			</div>
		</div>
		<button class="commonBtn" @click="toQuery">继续查询</button>
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
		   titlename:"会计考试成绩查询",
		   datatext:'',
		   scores:'',
		   typename:''
        }
	}
	,
    created () {
        this.parameter()
    },
    methods:{
        parameter(){ 
			this.datatext=this.$route.params.datatext;
			this.typename=this.$route.params.typename;
			if(this.datatext.scores == null || this.datatext.scores.length == 0){
				this.$toast("抱歉，没有找到相关记录，请核对查询条件");
			}else{
				this.scores=this.datatext.scores[0]
			}
			
		},
		toQuery(){
			this.$router.push("remember");
		},
		hiddenIdNumber(idNumber){
			console.log(idNumber)
			return idNumber.substring(0,3)+"***********"+idNumber.substring(idNumber.length-4,idNumber.length)
		}
    }
}
</script>
<style  scoped>
	.header {
			position: relative;
			width: 100%;
			height: 0.8rem;
			background-color: #ccc;
			text-align: center;
		}
		h2 {
			font-size: 0.34rem;
			margin-top: 0.4rem;
			font-weight: bold;
		}
		h3 {
			font-size: 0.28rem;
			color: #2d7ffc;
			margin-top: 0.2rem;
		}
		.qubg_img{
			width: 6.78rem;
			height: 5.72rem;
			padding: 0.01rem 0;
			margin: 0 auto;
    		background:url(../../../assets/images/re_bg.png) no-repeat left top;
    		background-size: 100%;
		}
		.names {
			width: 90%;
			margin: 0.25rem auto;
			font-size: 0.25rem;
			border-radius: 0.1rem;

		}
		.names ul{
			padding: 0 .36rem;
			height: 1.92rem;
			margin: 0 auto;
		}
		.names ul li {
			margin: 0 auto;
			text-align: left !important;
			font-size: 0.28rem;
			line-height: .7rem;
		}
		.names li span{
			font-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #333;
		}
		.result {
			width: 90%;
			margin: 0.01rem auto;
			border-radius: 0.1rem;

		}
		.result li {
			width: 80%;
			font-size: 0.2rem;
			margin: 0.25rem auto;
			text-align: left;
		}
		.result li span {
			font-size: 0.28rem;
			display: inline-block;
			width: 45%;
			text-align: center;
			color: #333;
		}
		.number {
			color: #2D7FFC !important;
			font-weight: bold !important;
		}
		.hui-btn.is-block {
			width: 5.9rem;
			height: 0.9rem;
			margin: 0.5rem auto;
			background-color: #2D7FFC !important;
			font-size: 0.32rem;
			font-weight: bold !important;
		}
		.mb0 {
			margin-bottom: 0rem !important;
		}
		.mt0 span {
			font-size: .28rem;
			font-weight: bold;
			color: #333;
			margin-top: 0.15rem !important;
		}

		.commonBtn a{
			color:#fff;
		}
</style>