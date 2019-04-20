<template>
	<div>
		<towtop :name="titlename"/>
		<div class="qxyy_jiaceng" v-show="qxyy_jiaceng">
			<div class="content2">
				<h2>预约成功</h2>
				<p class="p1">若需要撤销预约，请返回至“我的预约”办理撤销预约服务。</p>
				<p class="p2" @click="close">确定</p>	
			</div>
		</div>
		<div class="qxyy_jiaceng jc2" v-show="qxyy_jiaceng1">
			<div class="content2">
				<h2>预约失败</h2>
				<p class="p1">预约人数已满足或不在预约时间段，请重新尝试。</p>
				<p class="p2" @click="qd_btn()">重新预约</p>	
			</div>
		</div>
		<div class="six">
			<ul>
				<li>
					<h2>预约日期</h2>
					<p>{{datatext.rsrvtn_dt}}</p>
				</li>
				<li>
					<h2>开始时间</h2>
					<p>{{datatext.st_tm}}</p>
				</li>
				<li>
					<h2>截止时间</h2>
					<p>{{datatext.ctof_tm}}</p>
				</li>
				<li>
					<h2>预约序号</h2>
					<p>{{datatext.rsrvtn_sn}}</p>
				</li>
					
			</ul>
			<p class="pb">办理撤销预约，请到“我的预约”办理。</p>
      <p class="btn" @click="back">返回</p>
		</div>
	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
export default {
  data() {
    return {
      titlename: "预约办税结果",
      qxyy_jiaceng: false,
      qxyy_jiaceng1: false,
      datatext:''
    };
  },
  components: {
    towtop
  },
  mounted() {
    let setdata = {
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "2",
        tStsTraceId: "110567890"
      },
      txnBodyCom: {
        member_id:window.sessionStorage.getItem("userid"),
        matter_id: window.sessionStorage.getItem("matterid"),
        chann_id:'1',
        hall_cd: this.$route.query.lobbycode,
        hall_name: window.sessionStorage.getItem('lobbyname'),
        bsn_grpg_cd: this.$route.query.lobbyworkcode,
        bsn_grpg_name: this.$route.query.workname,
        rsrvtn_dt: this.$route.query.appointmenttime,
        st_tm: this.$route.query.startappointmenttime,
        ctof_tm: this.$route.query.endappointmenttime,
        mblph_no: window.sessionStorage.getItem('userphone')
      }
    };
    this.$ajaxRequest("post", "/gsp/mng80048", setdata)
      .then(res => {
        console.log(res);
        if(res.rsrvtn_sn != "null"&&res.rsrvtn_sn!=undefined&&res.rsrvtn_sn!=null&&res.rsrvtn_sn!='undefined'){
          this.datatext=res
          // this.qxyy_jiaceng = !this.qxyy_jiaceng
          this.$toast('预约成功！')
          //裕农通APP功能，勿删！
          if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
            PJF.ynt.A0161G058()
          }
        }else{          
          // this.qxyy_jiaceng1 = !this.qxyy_jiaceng1
        }
      })
      .catch(response => {
        console.log('response')
      });
  },
  methods: {
    qd_btn() {
       this.$router.push("/yuyuebanshui_one");
    },
    close () {
      this.qxyy_jiaceng = false
    },
    back () {
      this.$router.push("/yuyuebanshui_one");
    }
  }
};
</script>
<style scoped>
.qxyy_jiaceng {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 12;
}
.qxyy_jiaceng .content2 {
  width: 80%;
  margin: 50% auto;
  padding: 0.1rem 0.5rem 0.2rem;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 0.2rem;
}
.content2 h2 {
  color: #2d7ffc;
  margin: 0.5rem auto;
  font-size: 0.36rem;
  font-weight: 700;
}

.content2 .p1 {
  color: #666;
  text-align: left;
  font-size: 0.3rem;
  margin-bottom: 0.5rem;
}

.content2 .p2 {
  font-weight: 700;
  height: 1rem;
  line-height: 1rem;
  color: #2d7ffc;
  font-size: 0.32rem;
  border-top: 0.01rem solid #ccc;
}
.jc2 h2 {
  color: #fa6366;
}
.six ul {
  width: 100%;
  background-color: #fff;
}
.six li {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #ccc;
}
.six h2 {
  font-size: 0.28rem;
  display: inline-block;
  color: #999;
}
.six ul li p {
  float: right;
  display: inline-block;
  font-size: 0.28rem;
}
.six .pb {
  width: 90%;
  margin: 0.2rem auto;
  text-align: left;
  font-size: 0.24rem;
  color: #999;
}

.btn {
  width: 80%;
  height: .9rem;
  line-height: .9rem;
  margin: 0 auto;
  background: #2d7ffc;
  color: #fff;
  border-radius: 50px;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
}
</style>
<style>
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
</style>
