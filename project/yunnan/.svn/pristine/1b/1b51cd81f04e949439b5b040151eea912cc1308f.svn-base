<template>
	<div>
		<towtop :name="titlename"/>
		<div class="five">
			<ul v-if="startitem==item.kssj&&enditem==item.jzsj" v-for="item in datatext.list">
				<li>	
					<div class="blue"></div>
					<h2 class="h2w700">{{workname}}</h2>
				</li>
				<li>
					<h2>办理时间段</h2>
					<p>{{item.kssj}}-{{item.jzsj}}</p>
				</li>
				<li>
					<h2>已预约人数</h2>
					<p>{{item.yyjyrs}}</p>
				</li>
				<li>
					<h2>可预约人数</h2>
					<p style="color: #2d7ffc;">{{item.kyyrs}}</p>
				</li>
        <Btn block @click="toyybs_six(item)">立即预约</Btn>
			</ul>
		</div>
	</div>
</template>		
<script>
import towtop from "../../../components/HederTwo";
export default {
  data() {
    return {
      titlename: "预约办税",
      datatext:'',
      workname:'',
      startitem:'',
      enditem:''
    };
  },
  components: {
    towtop
  },
  mounted() {
    this.startitem=this.$route.query.startitem
    this.enditem=this.$route.query.enditem
    this.lobbycode=this.$route.query.lobbycode
    this.lobbyworkcode=this.$route.query.lobbyworkcode
    this.appointmenttime=this.$route.query.appointmenttime
    this.startappointmenttime=this.$route.query.startappointmenttime
    this.endappointmenttime=this.$route.query.endappointmenttime
    this.appointmentnumber=this.$route.query.appointmentnumber
    this.yyyrs=this.$route.query.yyyrs
    this.workname=this.$route.query.workname
    let setdata = {
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "2",
        tStsTraceId: "110567890"
      },
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        chann_id:'1',
        dtDm: this.$route.query.lobbycode,
        ywfzdm:this.$route.query.lobbyworkcode,
        yyrq:this.$route.query.appointmenttime
      }
    };
    this.$ajaxRequest("post", "/gsp/mng80047", setdata)
      .then(res => {
        console.log(res);
        this.datatext=res
      })
      .catch(response => {});
  },
  methods: {
    toyybs_six(itemvalue) {
      if(itemvalue.yyjyrs>=itemvalue.kyyrs){
        this.$toast('预约人数已满，不可预约！')
        return
      }
      this.$router.push("/yybs_six?lobbycode="+this.$route.query.lobbycode+'&lobbyworkcode='+this.$route.query.lobbyworkcode+'&appointmenttime='+this.$route.query.appointmenttime+'&workname='+this.$route.query.workname+'&startappointmenttime='+itemvalue.kssj+'&endappointmenttime='+itemvalue.jzsj);
    }
  }
};
</script>
<style scoped>
.five ul {
  width: 100%;
}
.five li {
  padding: 0 5%;
  text-align: left;
  height: 1rem;
  line-height: 1rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #ccc;
}
.five .blue {
  width: 0.06rem;
  height: 0.24rem;
  display: inline-block;
  background-color: #2d7ffc;
  margin-right: 0.25rem;
}
.five .h2w700 {
  font-weight: 700;
  color: rgb(0, 0, 0);
}
.five h2 {
  font-size: 0.28rem;
  display: inline-block;
  color: #999;
}
.five p {
  float: right;
  display: inline-block;
  font-size: 0.28rem;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: .2rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
</style>
