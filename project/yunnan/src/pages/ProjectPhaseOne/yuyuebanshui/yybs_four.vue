<template>
	<div class="yybsfour">
		<towtop :name="titlename"/>
		<div class="four">
			<ul v-for="(item,index) in datatext.list">
				<li>
					<div class="blue"></div>
					<h2>{{item.fz_MC}}</h2>
				</li>
        <li class="flexlist">
          <p class="leftp">日期</p>
          <p class="rightp" :id="'timevalue'+index" @click="open('picker2',index)">{{item.confirmValDate}}</p>
					<!-- <Field  label="日期" 	type="text" placeholder="请选择" :value='item.confirmValDate' v-model="item.confirmValDate" @click.native="open('picker2',index)">
					</Field> -->
				</li>
				<li class="flexlist">
          <p class="leftp">时间段</p>
          <p class="rightp">{{item.kssj+'-'+item.jzsj}}</p>
					 <!-- <Field  desc-class="richText" type="text"  label="时间段" v-model='startappointmenttime' disabled="disabled" :value="startappointmenttime" placeholder="7:00"></Field> -->
				</li>
        <li class="flexlist">
          <p class="leftp">可预约人数</p>
          <p class="rightp">{{item.yyzs}}</p>
				</li>
        <Btn block @click="toyybs_five(item)">查看预约人数</Btn>
			</ul>
		</div>
    <Datetime	ref="picker2"	type="date"	v-model="valueDate"	position="bottom"	:start-date=startDate	:end-date=endDate	@confirm="handleChangeConfirmDate1"></Datetime>
	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
function dateFormat(time, format) {
  const t = new Date(time);
  const tf = function(i) {
    return (i < 10 ? "0" : "") + i;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, a => {
    switch (a) {
      case "yyyy":
        return tf(t.getFullYear());
      case "MM":
        return tf(t.getMonth() + 1);
      case "mm":
        return tf(t.getMinutes());
      case "dd":
        return tf(t.getDate());
      case "HH":
        return tf(t.getHours());
      case "ss":
        return tf(t.getSeconds());
      default:
        break;
    }
  });
}
export default {
  data() {
    return {
      titlename: "预约办税",
      valueTime: '',
      valueTime1: "18:00",
      confirmValDate:'',
      confirmValTime: "",
      errorTime: false,
      confirmindex: "",
      startDate: new Date(2016, 0, 1),
      endDate: new Date(2019, 10, 10),
      valueDate: "",
      startappointmenttime:'',
      endappointmenttime:'',
      appointmentnumber:'',
      datatext:'',
      isWorking: true,
      showTime:false,
    };
  },
  components: {
    towtop
  },
  mounted() {
    this.valueTime=new Date()
    this.startDate=new Date(this.valueTime.getFullYear(),this.valueTime.getMonth(),this.valueTime.getDate())
    this.confirmValDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    this.endDate=new Date(this.valueTime.getFullYear()+1,12,31)
    this.confirmValTime = this.valueTime; //时间
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
        ywfzdm: this.$route.query.lobbyworkcode
      }
    };
    this.$ajaxRequest("post", "/gsp/mng80046", setdata)
      .then(res => {
        console.log(res);
        // this.startappointmenttime=res.list[0].kssj
        // this.endappointmenttime=res.list[0].jzsj
        if(!res.list){
          this.$toast('提示:获取业务时间段列表失败')
        }
        this.datatext=res
        for(var i=0,len=this.datatext.list.length;i<len;i++){
          this.datatext.list[i].confirmValDate="请选择日期"
        }
      })
      .catch(response => {});
  },
  methods: {
    toyybs_five(itemvalue) {
      if (itemvalue.confirmValDate=='请选择日期') {
        this.$toast('请选择日期！')
        return
      }

      // 校验预约今天此时是否在该办理时间内
      // console.log(itemvalue.confirmValDate)
      if (dateFormat(new Date(), 'yyyy-MM-dd') === itemvalue.confirmValDate) {

        let startTime = itemvalue.kssj.replace(':', '')
        let endTime = itemvalue.jzsj.replace(':', '')
        let nowTime = dateFormat(new Date(), 'HHmm')

        if (startTime.slice(0, 1) === '0') {
          startTime = Number(startTime.slice(1, startTime.length))
        } else {
          startTime = Number(startTime)
        }

        if (endTime.slice(0, 1) === '0') {
          endTime = Number(endTime.slice(1, endTime.length))
        } else {
          endTime = Number(endTime)
        }

        if (nowTime.slice(0, 1) === '0') {
          nowTime = Number(nowTime.slice(1, nowTime.length))
        } else {
          nowTime = Number(nowTime)
        }

        console.log(nowTime < startTime)
        console.log(nowTime > endTime)
        console.log(nowTime <= startTime || nowTime >= endTime)
        console.log(startTime, endTime, nowTime)

        if (nowTime >= startTime && nowTime >= endTime) {
          this.$toast("该预约时间段已过期，请预约新的时间段！")
          return
        }
      }
      this.$router.push("/yybs_five?lobbycode="+this.$route.query.lobbycode+'&lobbyworkcode='+this.$route.query.lobbyworkcode+'&appointmenttime='+itemvalue.confirmValDate+'&workname='+itemvalue.fz_MC+'&startitem='+itemvalue.kssj+'&enditem='+itemvalue.jzsj);
    },
    open(picker3,index) {
      this.confirmindex=index
      document.activeElement.blur();
      this.$refs[picker3].open();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    handleChangeConfirmTime(value) {
      //时间确定值
      this.confirmValTime = value;
    },
    handleChangeConfirmDate1(value) {
      //日期确定值
      console.log(value)
      $('#timevalue'+this.confirmindex).html(dateFormat(value, "yyyy-MM-dd"))
      this.datatext.list[this.confirmindex].confirmValDate = dateFormat(value, "yyyy-MM-dd");
    }
  }
};
</script>
<style scoped>
.four ul {
  width: 100%;
  /* background-color: #fff; */
}
.four li {
  padding: 0 5%;
  text-align: left;
  height: .8rem;
  line-height: .8rem;
  background-color: #fff;
  border-bottom: 0.01rem solid #f5f5f5;
}
.four .blue {
  width: 0.06rem;
  height: 0.24rem;
  display: inline-block;
  background-color: #2d7ffc;
  margin-right: 0.25rem;
}
.four h2 {
  font-size: 0.28rem;
  font-weight: 700;
  display: inline-block;
}
.four .hui-field_main {
  color: #999;
}
.four .hui-field {
  padding: 0;
}
.four .hui-field .hui-field_border .hui-field_value {
  border: none;
}
.four .hui-field .hui-field_border .hui-field_borderLeft {
  border: none;
}
.hui-btn.is-block {
  width: 5.9rem  !important;
  height: 0.9rem;
  margin: .2rem auto  !important;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.flexlist{
  display: flex;
}
.flexlist .leftp{
  text-align: left;
  flex: 1;
}
.flexlist .rightp{
  text-align: right;
  flex: 1;
}
</style>
<style>
.yybsfour .hui-radios_label{
    flex: 1;
    text-align: right;
    line-height: .5rem;
}
</style>

