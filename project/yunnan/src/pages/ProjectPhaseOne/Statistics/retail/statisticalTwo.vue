<template>
	<div>
		<towtop :name="titlename"></towtop>
		<h5 v-if="statisticsflag ==5" class="statisticsbtn" @click="average()">{{center}}</h5>
		<div class="statisticalTwo" v-if="statisticsflag==1">
			<div class="divBoxOne">
				<p class="retailyear">年份</p><p class="retailyear">绝对值（亿元）</p><p class="retailyear">同比增长（%）</p>
			</div>
			<div class="divBoxOne" v-for="len in datatext.list">
				<p class="retailyear">{{len.year}}</p><p class="retailabsolute">{{len.abs_val}}</p><p class="retailgrowth">{{len.revenue_growth}}</p>
			</div>
		</div>
		<div class="statisticalTwo" v-if="statisticsflag==2||statisticsflag==6">
			<div class="divBoxOne">
				<p class="retailyear">年份</p>
				<p class="retailyear" v-if="statisticsflag==7">绝对值（万人）</p>
				<p class="retailyear" v-if="statisticsflag!=7">绝对值（亿元）</p>
				<p class="retailyear">同比增长（%）</p>
			</div>
			<div class="divBoxOne" v-for="len in datatext.list">
				<p class="retailyear">{{len.year}}</p><p class="retailabsolute">{{len.absolute}}</p><p class="retailgrowth">{{len.soared_by}}</p>
			</div>
		</div>
		<div class="statisticalTwo" v-if="statisticsflag==7">
			<div class="divBoxOne">
				<p class="retailyear">年份</p>
				<p class="retailyear" v-if="statisticsflag==7">绝对值（万人）</p>
				<p class="retailyear" v-if="statisticsflag!=7">绝对值（亿元）</p>
				<p class="retailyear">同比增长（‰）</p>
			</div>
			<div class="divBoxOne" v-for="len in datatext.list">
				<p class="retailyear">{{len.year}}</p><p class="retailabsolute">{{len.absolute}}</p><p class="retailgrowth">{{len.soared_by}}</p>
			</div>
		</div>
		<div class="statisticalThree" v-if="statisticsflag==3">
			<div v-for="len in datatext.list">
				<h5>{{len.year}} <span>单位（万人）</span></h5>
				<p><span class="statisticalpsl">{{totalnumber}}</span><span class="statisticalpsr">{{len.total_pop}}</span></p>
				<p><span class="statisticalpsl">{{male}}</span><span class="statisticalpsr">{{len.total_man}}</span></p>
				<p><span class="statisticalpsl">{{female}}</span><span class="statisticalpsr">{{len.total_woman}}</span></p>
				<p><span class="statisticalpsl">{{town}}</span><span class="statisticalpsr">{{len.urban_pop=="null"?'':len.urban_pop}}</span></p>
				<p><span class="statisticalpsl">{{rural}}</span><span class="statisticalpsr">{{len.rural_pop}}</span></p>
			</div>
		</div>
		<div class="statisticalThree" v-if="statisticsflag==4">
			<div v-for="len in datatext.list">
				<h5>{{len.year}}</h5>
				<p><span class="statisticalpsl">{{totalnumber}}</span><span class="statisticalpsr">{{len.consumption_retail_total}}</span></p>
				<p><span class="statisticalpsl">{{male}}</span><span class="statisticalpsr">{{len.town_total}}</span></p>
				<p><span class="statisticalpsl">{{female}}</span><span class="statisticalpsr">{{len.city_total}}</span></p>
				<p><span class="statisticalpsl">{{town}}</span><span class="statisticalpsr">{{len.rural_total}}</span></p>
				<p><span class="statisticalpsl">{{rural}}</span><span class="statisticalpsr">{{len.retail_total}}</span></p>
				<p><span class="statisticalpsl">{{income}}</span><span class="statisticalpsr">{{len.restaurant_total}}</span></p>
			</div>
		</div>
		<div class="statisticalThree" v-if="statisticsflag==5 && averagewage == false">
			<div v-for="len in datatext.list">
				<h5>{{len.year}}</h5>
				<p><span class="statisticalpsl">{{totalnumber}}</span><span class="statisticalpsr">{{len.workers_average_wages}}</span></p>
				<p><span class="statisticalpsl">{{male}}</span><span class="statisticalpsr">{{len.workers_stateowned_unit}}</span></p>
				<p><span class="statisticalpsl">{{female}}</span><span class="statisticalpsr">{{len.workers_collective_unit}}</span></p>
				<p><span class="statisticalpsl">{{town}}</span><span class="statisticalpsr">{{len.workers_other_units=='null'?len.workers_other_units='0':len.workers_other_units}}</span></p>
			</div>
		</div>
		<div class="statisticalThree" v-if="statisticsflag==5 && averagewage == true">
			<div v-for="len in datatext.list">
				<h5>{{len.year}}（上年 = 100%）</h5>
				<p><span class="statisticalpsl"><b>货币工资</b></span><span class="statisticalpsr">{{len.money_wages}}</span></p>
				<p><span class="statisticalpsl">国有单位</span><span class="statisticalpsr">{{len.money_stateowned_unit}}</span></p>
				<p><span class="statisticalpsl">集体单位</span><span class="statisticalpsr">{{len.money_collective_unit}}</span></p>
				<p><span class="statisticalpsl">其他单位</span><span class="statisticalpsr">{{len.money_other_units=='null'?len.money_other_units='0':len.money_other_units}}</span></p>
				<p><span class="statisticalpsl"><b>实际工资</b></span><span class="statisticalpsr">{{len.real_wages}}</span></p>
				<p><span class="statisticalpsl">国有单位</span><span class="statisticalpsr">{{len.real_stateowned_unit}}</span></p>
				<p><span class="statisticalpsl">城镇集体单位</span><span class="statisticalpsr">{{len.real_urbancollective_unit}}</span></p>
				<p><span class="statisticalpsl">其他单位</span><span class="statisticalpsr">{{len.real_other_units=='null'?len.real_other_units='0':len.real_other_units}}</span></p>
			</div>
		</div>
	</div>
</template>
<script>
import towtop from '../../../../components/HederTwo'
import 	{cenurl} from '../../../../components/toptow.js'
export default {
		components:{
			towtop
		},
		data() {
			return {
				center:'平均工资指数',
				titlename: '',
				statisticsflag:'',
				year:'',
				totalnumber:'',
				male:'',
				female:'',
				town:'',
				rural:'',
				income:'',
				urls:'',
				date:'',
				datatext:'',
				startDate:'',
				endDate:'',
				citycode:'',
				conutycode:'',
				averagewage:false
			}
		},
		mounted() {
			this.statisticsflag=this.$route.query.statisticsflag
			this.startDate=this.$route.query.startDate.substring(0,4)
			this.endDate=this.$route.query.endDate.substring(0,4)
			this.citycode=this.$route.query.citycode
			if(this.statisticsflag==1){
				this.titlename='州(市)社会消费品零售总额年度查询'
				this.urls='/gsp/mng80022'
        this.date = {
          "txnCommCom": {"txn_itt_chnl_id": "10", "txn_itt_chnl_type": "2", "tenant": "110567890"},
          "txnBodyCom": {"area_name": this.citycode, "beginYear": this.startDate, "endYear": this.endDate,matter_id: window.sessionStorage.getItem("matterid"),}
        }
      }else if(this.statisticsflag==2){
				this.titlename='云南省GDP年度数据查询'
				this.urls='/gsp/mng80019'
        this.date = {
          "txnCommCom": {"txn_itt_chnl_id": "10", "txn_itt_chnl_type": "2", "tenant": "110567890"},
          "txnBodyCom": {"area_lvl": '0', "area_name": '', "beginYear": this.startDate, "endYear": this.endDate,matter_id: window.sessionStorage.getItem("matterid"),}
        }
      }else if(this.statisticsflag==3){
				this.titlename='云南省年末总人口年度数据查询'
				this.urls='/gsp/mng80016'
        this.date = {
          "txnCommCom": {"txn_itt_chnl_id": "10", "txn_itt_chnl_type": "2", "tenant": "110567890"},
          "txnBodyCom": {"beginYear": this.startDate, "endYear": this.endDate,matter_id: window.sessionStorage.getItem("matterid"),}
        }
        this.totalnumber='总人数'
				this.male='男'
				this.female='女'
				this.town='城镇'
				this.rural='乡村'
				this.income=''
			}else if(this.statisticsflag==4){
				this.titlename='云南省社会消费品零售总额年度查询'
				this.urls='/gsp/mng80017'
				this.date={"txnCommCom":{"txn_itt_chnl_id":"10","txn_itt_chnl_type":"2","tenant":"110567890"},"txnBodyCom":{matter_id: window.sessionStorage.getItem("matterid"),"beginYear":this.startDate,"endYear":this.endDate}}
				this.totalnumber='社会消费品零售总额（亿元）'
				this.male='城镇'
				this.female='城区'
				this.town='乡村'
				this.rural='商品零售'
				this.income='餐饮收入'
			}else if(this.statisticsflag==5){
				this.titlename='云南省全部职工平均工资年度查询'
				this.urls='/gsp/mng80018'
				this.date={"txnCommCom":{"txn_itt_chnl_id":"10","txn_itt_chnl_type":"2","tenant":"110567890"},"txnBodyCom":{matter_id: window.sessionStorage.getItem("matterid"),"beginYear":this.startDate,"endYear":this.endDate}}
				this.totalnumber='职工平均工资（万元/人）'
				this.male='国有单位'
				this.female='集体单位'
				this.town='其他单位'
			}else if(this.statisticsflag==6){
				this.titlename='州(市)GDP年度数据查询'
				this.urls='/gsp/mng80019'
				this.date={"txnCommCom":{"txn_itt_chnl_id":"10","txn_itt_chnl_type":"2","tenant":"110567890"},"txnBodyCom":{matter_id: window.sessionStorage.getItem("matterid"),"area_lvl":'1',"area_name":this.citycode,"beginYear":this.startDate,"endYear":this.endDate}}
			}else if(this.statisticsflag==7){
				this.titlename='州(市)年末总人口数据查询'
				this.urls='/gsp/mng80020'
				this.date={"txnCommCom":{"txn_itt_chnl_id":"10","txn_itt_chnl_type":"2","tenant":"110567890"},"txnBodyCom":{matter_id: window.sessionStorage.getItem("matterid"),"area_name":this.citycode,"beginYear":this.startDate,"endYear":this.endDate}}
			}
			let setdata=this.date
			this.$ajaxRequest("post",this.urls, setdata).then((res) => {
				console.log(res)
				this.datatext=res
			}).catch((response) => {});
		},
		methods: {
			average(){
				// this.averagewage=true
				this.averagewage=!this.averagewage
				if(this.averagewage){
				console.log(this.averagewage)
					this.center = '平均工资'
				}else{
				console.log(this.averagewage)
					this.center = '平均工资指数'

				}

			}
		}
	};
</script>

<style lang='less' scoped>
 @import  "../../../../assets/css/Affairs.less";
 .statisticalpsl{
	 b{
		 color: #000;
		 font-weight: bold;
	 }
 }
</style>
