<template>
	<div>
		<towtop :name="titlename"/>
		<div class="qxyy_jiaceng" v-show="qxyy_jiaceng">
			<div class="content2">
				<h2>取消成功</h2>
				<p class="p1">若您需再办理预约业务，请到“预约办税”预约，谢谢。</p>
				<p class="p2" @click="goback()">确定</p>	
			</div>
		</div>
		<div class="example-calendar">
			<div class="example-calendar_range">
				<span style="font-size: 0.28rem;color: #999;margin-right: 0.25rem">请选择时间段:</span>
				<input  class="example-calendar_input" type="text" @click.stop="open($event)" v-model="calendar1.items.text" placeholder="区间选择" />
				<Calendar :value="calendar1.show" 
					v-on:showcalendar="showcalendar1" 
					:single="calendar1.items.single" 
					:x="calendar1.x" 
					:y="calendar1.y" 
					:begin="calendar1.items.begin"
					:end="calendar1.items.end" 
					:autoclose='calendar1.items.autoclose'
					:lock-scroll = true
					:startvalue="calendar1.items.value"
					:range-value='calendar1.items.rangeValue'
					:events-array = 'calendar1.eventsArray'
					:disabled-array = 'calendar1.disabledArray'
					:max-select-days = 'calendar1.maxSelectDays'
					@tappre="dateTappre" 
					@tapnext="dateTapnext" 
					@tapday="dateTapday" 
					@calendar-cancel="dateCancel" 
					@calendar-confirm="dateConfirm"  
					@exceed-max-select = 'exceedMaxSelect'
				>
				</Calendar>
				<!-- <Btn block @click="queryappointment()">查询</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="queryappointment"/>
    </div>
			</div>
		</div>
		<div class="content">
			<ul v-for="item in datatext.list">
				<li class="li1">
					<div class="header">
						<div class="blue"></div>
						<div class="title">{{item.dtMc}}</div>
					</div>
					<div class="btn" v-if="item.isqx!='N'">已取消</div>
          <div class="btn btn1" v-if="item.isqx!='Y'" @click="closeappointment(item.dtDm,item.fzDm,item.rq,item.kssj,item.jzsj,item.yyxlh)">取消预约</div>
				</li>
				<li>
					<div class="fl">业务分组名称</div>
					<div class="fr">{{item.sxmc}}</div>
				</li>
				<li>
					<div class="fl">预约日期</div>
					<div class="fr">{{item.rq}}</div>
				</li>
				<li>
					<div class="fl">预约开始时间</div>
					<div class="fr">{{item.kssj}}</div>
				</li>
				<li>
					<div class="fl">预约截止时间</div>
					<div class="fr">{{item.jzsj}}</div>
				</li>
				<li>
					<div class="fl">预约序列号</div>
					<div class="fr">{{item.yyxlh}}</div>
				</li>
			</ul>
		</div>
</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import mybutton from "../../../components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "我的预约",
      qxyy_jiaceng: false,
      datatext:'',
      settime:'',
      calendar1: {
        show: false,
        x: 0,
        y: 0,
        eventsArray: [], // 事件数组
        disabledArray: [], // 不可点击数组
        maxSelectDays: "100000", //最多可以选择的日期
        items: {
          begin: "",
          end: "",
          value: "",
          text: "",
          rangeValue: "",
          single: false,
          autoclose: false
        }
      }
    };
  },
  components: {
    mybutton,
    towtop
  },
  mounted(){
     this.settime=new Date();
     this.calendar1.items.begin=this.settime.getFullYear().toString()+'-'+this.settime.getMonth()+'-'+this.settime.getDate().toString()
     this.calendar1.items.end=(this.settime.getFullYear()+1).toString()+'-12-31'
     
     //默认设置
     let today = `${new Date().getFullYear().toString()}-${new Date().getMonth() + 1}-${new Date().getDate().toString()}`
     this.calendar1.items.text = today + ' ~ ' + today
  },
  methods: {
    showcalendar1(val) {
      this.calendar1.show = val;
    },
    open(e, type) {
      const layerSingle = document.querySelector(".example-calendar_single");
      // layerSingle.style.zIndex = 0

      // 设置类型
      this.calendar1.show = true;
      this.calendar1.x = 0;
      this.calendar1.y = e.target.offsetTop + e.target.offsetHeight + 4;
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    dateCancel(obj) {
      this.calendar1.show = obj.show;
      console.log(obj.values);
    },
    dateConfirm(obj) {
      // 增加重置
      if (obj.values.length > 0) {
        this.calendar1.items.text =
          obj.values[0] + " ~ " + obj.values[obj.values.length - 1];
      } else {
        this.calendar1.items.text = "";
      }
      this.calendar1.items.value = obj.values[0];
      this.calendar1.items.rangeValue = obj.values[obj.values.length - 1];
      console.log(obj);
    },
    dateTapday(obj) {
      // console.log(obj);
    },
    dateTappre(dateString) {
      // console.log(dateString);
    },
    dateTapnext(dateString) {
      // console.log(dateString);
    },
    exceedMaxSelect() {
      alert("超过了最多显示时间" + this.calendar1.maxSelectDays + "天");
    },
    queryappointment() {
      //查询预约记录
      let pagejump={
        tRecInPage: "10",
        tPageJump: "1",
      }
      let setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          beginDate: this.calendar1.items.text.substring(0,10),
          endDate: this.calendar1.items.text.substring(13,23),
          begin: "1",
          end: "99999",
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id:'1',
          sjh:window.sessionStorage.getItem('userphone')
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80049", setdata,pagejump)
        .then(res => {
          console.log(res);
          this.datatext=res
        })
        .catch(response => {});
    },
    closeappointment(lobbycode,workcode,appointmenttime,starttime,endtime,sequencecode) {
      //取消预约
      let setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id:'1',
          dtDm: lobbycode,
          ywfzdm: workcode,
          yyrq: appointmenttime,
          kssj: starttime,
          jzsj: endtime,
          yyxlh: sequencecode,
          sjh:window.sessionStorage.getItem('userphone')
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80050", setdata)
        .then(res => {
          console.log(res);
          this.qxyy_jiaceng = !this.qxyy_jiaceng;
        })
        .catch(response => {});
    },
      goback(){
        this.$router.go(-1)
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

.example-calendar_input {
  height: 0.75rem;
  border: none;
  font-size: 0.28rem;
  border-radius: 0.5rem;
  border: 0.01rem solid #ccc;
  text-align: center;
  width: 4rem;
}
.example-calendar_range {
  text-align: center;
  line-height: 1rem;
  height: 1rem;
  width: 90%;
  margin: 0 auto;
}
.example-calendar {
  width: 100%;
  background-color: #fff;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
  box-sizing: border-box;
}
.content {
  margin-top: 2rem;
}
.content ul {
  width: 100%;
  margin-bottom: 0.2rem;
  background-color: #fff;
}
.content li {
  width: 90%;
  margin: 0 auto;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
  background-color: #fff;
}
.content .li1 {
  width: 100%;
  font-weight: 700;
  padding-left: 0.2rem;
  border-bottom: 0.02rem solid #ccc;
  line-height: 1rem;
}
.li1 .blue {
  width: 0.06rem;
  height: 0.24rem;
  display: inline-block;
  background-color: #2d7ffc;
  margin-right: 0.25rem;
}
.li1 .header {
  text-align: left;
  width: 65%;
  display: inline-block;
}
.btn {
  width: 30%;
  color: #999;
  display: inline-block;
  float:right;
}
.content .title {
  display: inline-block;
}
.fl {
  float: left;
  color: #999;
}
.fr {
  float: right;
}
.btn1 {
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #2d7ffc;
  font-weight: 400;
  border-radius: 0.5rem;
  width: 20%;
  margin-right: 0.7rem;
  box-sizing: border-box;
  margin-top: 0.3rem;
  color: #fff;
}
.btn3 {
  color: #08c173;
}
</style>