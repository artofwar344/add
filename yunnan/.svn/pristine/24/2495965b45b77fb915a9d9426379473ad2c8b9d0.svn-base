<template>
	<div>
		<towtop :name="hadertow" />
		<div class="example-formgroup">
			<FormGroup title-position="left">
				<Field desc-class="richText" type="text" label="查询姓名" v-model="queryname" >
				</Field>
				<Field desc-class="richText" type="text" disabled label="重名人数" v-model="number" >
				</Field>
				<Field desc-class="richText" type="text" disabled label="查询范围" v-model="queryscope" >
				</Field>
			</FormGroup>
		</div>
		<!-- 第一层：性别比例 -->
		<div class="gender">
			<span class="border">|</span>
			<span class="word">性别比例</span>
    		<div id="myChartone" :style="{width: '100%', height: '320px'}"></div>

		</div>
		<!-- 第二层：年龄层 -->
		<div class="age">
			<span class="border">|</span>
			<span class="word">年龄层</span>
    		<div id="myChart" :style="{width: '100%', height: '320px'}"></div>
		</div>
		<!-- 第三层：星座分布 -->
		<div class="xingzuo">
			<div class="title">
				<span class="border">|</span>
				<span class="word">星座分布</span>
			</div>
			<div class="icoList">
				<ul>

					<li>
						<span> <img src="../../../../assets/images/sign/baiyang.png">
						白羊座
						</span>
						<p>{{this.datatext.countstar1}}</p>
					</li>
					<li><span>
						   <img src="../../../../assets/images/sign/jinniu.png">
						   金牛座
						</span><p>{{this.datatext.countstar2}}</p>
					</li>
					<li><span>
						   <img src="../../../../assets/images/sign/shuangzi.png">
						   双子座
						</span><p>{{this.datatext.countstar3}}</p>
					</li>

					<li><span>
						   <img src="../../../../assets/images/sign/juxie.png">
						   巨蟹座
						</span><p>{{this.datatext.countstar4}}</p>
					</li>
					<li><span>
						   <img src="../../../../assets/images/sign/shizi.png">
						   狮子座
						</span><p>{{this.datatext.countstar5}}</p>
					</li>
					<li><span>
						   <img src="../../../../assets/images/sign/chunv.png">
						   处女座
						</span><p>{{this.datatext.countstar6}}</p>
					</li>

					<li><span>
						   <img src="../../../../assets/images/sign/tiancheng.png">
						   天秤座
						</span><p>{{this.datatext.countstar7}}</p>
					</li>
					<li><span>
						   <img src="../../../../assets/images/sign/tianxie.png">
						   天蝎座
						</span><p>{{this.datatext.countstar8}}</p>
					</li>
					<li><span>
						   <img src="../../../../assets/images/sign/sheshou.png">
						   射手座
						</span><p>{{this.datatext.countstar9}}</p>
					</li>

					<li><span>
						   <img src="../../../../assets/images/sign/mojie.png">
						   摩羯座
						</span><p>{{this.datatext.countstar10}}</p>
					</li>
					<li><span>
						   <img src="../../../../assets/images/sign/shuiping.png">
						   水瓶座
						</span><p>{{this.datatext.countstar11}}</p>
					</li>
					<li><span>
						   <img src="../../../../assets/images/sign/shuangyu.png">
						   双鱼座
						</span><p>{{this.datatext.countstar12}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>
<script>
	import towtop from '../../../../components/HederTwo'
	import { cenurl } from "../../../../components/toptow.js"
	export default({
		data() {
			return {
				hadertow: '重名查询',
				number:'',
				queryname:'',
				queryscope:'云南省',
				datatext:''
			}
		},
		components: {
			towtop
		},
		mounted(){
			this.queryname=this.$route.query.textValue
			let setdata={
					"txnCommCom": {
						"tRecInPage": "1",
						"tPageJump": "3",
						"tStsTraceId": "1"
					},
					"txnBodyCom": {
						"matter_id": window.sessionStorage.getItem("matterid"),//window.sessionStorage.getItem("matterid")
						"chann_id": "1",
						"name": this.queryname
					}
				}
			this.$ajaxRequest("post",'/gsp/mng90021', setdata).then((res) => {
				console.log(res)
        debugger
				this.datatext=res.data
				this.number=this.datatext.count
				this.drawLine();
			}).catch((response) => {});
		},
		computed:{
		},
		methods: {
			drawLine(){
				var b = ['20岁以下', '20-30岁', '30-40岁', '40-50岁', '50-60岁', '60岁以上']
				// 基于准备好的dom，初始化echarts实例
				let myChartone = this.$echarts.init(document.getElementById('myChartone'))
				// 绘制图表
				myChartone.setOption({
						tooltip: {
							trigger: 'item',
							formatter: "{a} <br/>{b}: {c} ({d}%)"
						},
						legend: {
							orient: 'vertical',
							x: 'left',
							data:['男性', '女性']
						},
						series: [
							{
								name:'比例',
								type:'pie',
								radius: ['50%', '70%'],
								avoidLabelOverlap: false,
								color: ['#257BFF','#FA6366'],
								label: {
									normal: {
										show: false,
										position: 'center'
									},
									emphasis: {
										show: true,
										textStyle: {
											fontSize: '30',
											fontWeight: 'bold'
										}
									}
								},
								labelLine: {
									normal: {
										show: false
									}
								},
								data:[
									{value:this.datatext.countsex1, name:'男性'},
									{value:this.datatext.countsex2, name:'女性'}
								]
							}
						]
					}
				);
				// --------------------------------------------------------------------------------
			var a = ['20岁以下', '20-30岁', '30-40岁', '40-50岁', '50-60岁', '60岁以上']
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: { text:'' },

					color: ['#3398DB'],
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						data: a
					},
					yAxis : [
						{
							type : 'value'
						}
					],
					series: [{
						name: '同名人数',
						type: 'bar',
						data: [this.datatext.countage1,this.datatext.countage2,this.datatext.countage3,this.datatext.countage4,this.datatext.countage5,this.datatext.countage6]
					}]
				});
			}
		}
	})
</script>
<style scoped>
	.hui-field_title {
		font-size: .14rem;
		width: 100px;
	}

	.hui-field_core {
		font-size: .14rem;
	}
	.example-formgroup{
		margin:.1rem 0;
	}
	.hui-field{
		margin:0;
		border:0;
		line-height: .6rem;
		border-bottom:.01rem solid #ddd;
	}
	.hui-field_main{
		font-size: 14px;
		color:#bbb;
	}
	.xingzuo{
		background: #fff;
	}
	.title,.gender,.age{
		text-align: left;
		margin: 2%;
		border-bottom:.01rem solid #eee;
		padding: .1rem 0;
	}
	.border{
		color:#257bff;
		font-size: .3rem;
    	font-weight: bold;
	}
	.word{
		font-size:.3rem;
		text-align: left;
	}
	.icoList{
		background: #fff;
	}
	.icoList ul li{
		color: #666666;
		width: 33.3%;
		float: left;
		text-align: center;
	}
	.icoList ul li p{
		font-size: .52rem;
		color: #4A4A4A;
		padding:.12rem 0;
	}
	.icoList ul li span{
		display: flex;
		text-align: center;
	}
	.icoList ul li span img{
		margin-left: 25%;
		display: block;
		width:.4rem;
		height: .4rem;
	}
/*	table{
		width:100%;
		font-size: 14px;
	}
	table tr td{
		width:100%/3;
	}
	table tr td div{
		margin:.2rem;
	}*/
</style>
