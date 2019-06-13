<style scoped>
/* html,body{
  height: 100%;
}
.infoCheck{
  height:100%;
}
.timeWrap{
    margin-top: 0.2rem;
    background: white;
    box-sizing:border-box;
}
.timeWrap li {
    padding: 0rem 0.36rem;
    box-sizing: border-box;
    height: 1rem;
    line-height: 1rem;
  }
.chargeBtn button {
    width: 5.9rem;
    height: 0.9rem;
    background: #2D7FFC;
    box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.50);
    border-radius: 25px;
    border: none;
    font-size: 16px;
    letter-spacing: 0.19px;
    text-align: center;
    margin-top: 1.02rem;
}
.chargeBtn button a {
    color: #FFFFFF;
    }
.hui-field{
    padding: 0rem;
    border-bottom:0.02rem solid #999;
}
.timeWrap li:last-child .hui-field{
    border:none;
}
.timeWrap li .hui-field .hui-field_border .hui-field_value,.timeWrap li .hui-field .hui-field_border .hui-field_borderLeft{
    border:none;
} */
</style>
<template>
    <div class="infoCheck">
        <ul class="timeWrap">
            <li class="time">
                <Field readonly label="开始时间" disableclear
             type="text" placeholder="请选择" :value="confirmValDate2" @click.native="open('picker2')">   
                    <span slot="append" class="example-datetime_arrowRight"></span>
                </Field>
                <Datetime
                    ref="picker2"
                    type="date"
                    v-model="valueDate2"
                    position="bottom"
                    :start-date=startDate2
                    :end-date=endDate2
                    @confirm="handleChangeConfirmDate2">
                </Datetime>
                            </li>
                            <li class="time">
                                <Field readonly label="结束时间" disableclear
                            type="text" placeholder="请选择" :value="confirmValDate3" @click.native="open('picker3')">   
                    <span slot="append" class="example-datetime_arrowRight"></span>
                </Field>
                <Datetime
                    ref="picker3"
                    type="date"
                    v-model="valueDate3"
                    position="bottom"
                    :start-date=startDate3
                    :end-date=endDate3
                    @confirm="handleChangeConfirmDate3">
                </Datetime>
            </li>
        </ul>
    </div>
</template>
<script>
 function dateFormat(time, format){
        const t = new Date(time);
        const tf = function (i) {
          return (i < 10 ? '0' : '') + i;
        };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a) => {
          switch (a) {
            case 'yyyy':
              return tf(t.getFullYear());
            case 'MM':
              return tf(t.getMonth() + 1);
            case 'mm':
              return tf(t.getMinutes());
            case 'dd':
              return tf(t.getDate());
            case 'HH':
              return tf(t.getHours());
            case 'ss':
              return tf(t.getSeconds());
            default:
              break;
          }
        });
    }
function get3MonthBefor(){
    var resultDate,year,month,date,hms;
    var currDate = new Date();
    year = currDate.getFullYear();
    month = currDate.getMonth()+1;
    date = currDate.getDate();
    hms = currDate.getHours() + ':' + currDate.getMinutes() + ':' + (currDate.getSeconds() < 10 ? '0'+currDate.getSeconds() : currDate.getSeconds());
    switch(month)
    {
      case 1:
      case 2:
      case 3:
        month += 9;
        year--;
        break;
      default:
        month -= 3;
        break;
    }
    month = (month < 10) ? ('0' + month) : month;
    resultDate = year + '-'+month+'-'+date+' ' + hms;
  return resultDate;
}
import Common from "../../LoanInfoQuery/components/Common.js";

export default {
  data() {
    return {
      headerData: {
        title: "还款明细查询",
        backUrl: "/gongjijin"
      },
      valueDate2: '',
      confirmValDate2:'',
      startDate2:new Date(1990, 1, 1),
      endDate2:new Date(2019, 10, 10),
      valueDate3: '',
      confirmValDate3:'',
      startDate3:new Date(2016, 1, 1),
      endDate3:new Date(2019, 10, 10),
      valueDate4:"",
    };
  },
  props: {
    state: "",
  },
  created(){
    let _this = this;
    if(_this.state == "2"){
      _this.init()
    }else{
      let start =  new Date();
      let end =  new Date();
          end.setFullYear(end.getFullYear()-1);
      let three = new Date();
          three.setMonth(three.getMonth()-3);
      _this.endDate2 = new Date( new Date().getFullYear(),  new Date().getMonth(),  new Date().getDate())
      _this.startDate3 = new Date(new Date().getFullYear()-3 , new Date().getMonth(),  new Date().getDate())
      _this.endDate3 = new Date( new Date().getFullYear(),  new Date().getMonth(),  new Date().getDate())
      _this.endDate4 = new Date( new Date().getFullYear(),  new Date().getMonth() -3,  new Date().getDate())
      _this.valueDate2 = Common.cmnDate(three);
      _this.valueDate3 = Common.cmnDate(start);
      _this.valueDate4 = Common.cmnDate(three);
      this.end()
    }
  },
  methods: {
    init(){
      let _this = this;
      let sendData = {
        "txnBodyCom": {
          matter_id:window.sessionStorage.getItem('matterid'),
          userId: window.sessionStorage.getItem("MpfUserId"),
          buzType:"5071"
        }
      }
      _this.$ajaxRequest("post", "gsp/mng19007",sendData)
      .then(res => {
        if(res.recode == '000000'){
          _this.gl(res.result)
        }else{
          _this.$toast('无个人贷款信息')
        }
      })
      .catch(error => {
        _this.$toast("网络错误,请重试")
      });
    },
    gl(data){
      let _this = this;
      let startdate,enddate
      for(let i in data){
        switch(data[i].title){
          case "借款日期":
            startdate = data[i].info
          break;
          case "止贷日期":
            enddate = data[i].info
          break;
        } 
      }
      this.confirmValDate2 = startdate;
      this.confirmValDate3 = enddate;
      this.valueDate4 = startdate;
      this.valueDate3 = enddate;
      let enddate1 = startdate;
          enddate1 = enddate1.split("-")
      let enddate2 = enddate;
          enddate2 = enddate2.split("-")
      this.startDate2 = new Date(enddate1[0],enddate1[1],enddate1[2])
      this.endDate2 = new Date(enddate2[0],enddate2[1],enddate2[2])
      this.startDate3 = new Date(enddate1[0],enddate1[1],enddate1[2])
      this.endDate3 = new Date(enddate2[0],enddate2[1],enddate2[2])
      this.end()
    },
    open(picker) {
      document.activeElement.blur();
      this.$refs[picker].open();
    $('.hui-popup').on('touchmove',function(event){
      event.preventDefault()
      event.stopPropagation()
    })
    },
    handleChangeConfirmDate2(value) {
      let startDate = dateFormat(value, 'yyyy-MM-dd');
      this.confirmValDate2 = startDate;
      this.$emit("CmnDate",{
        data:"startDate",
        time:startDate
      })
    },
    handleChangeConfirmDate3(value) {
      let endDate = dateFormat(value, 'yyyy-MM-dd');
      this.confirmValDate3 = endDate;
      this.$emit("CmnDate",{
        data:"endDate",
        time:endDate
      })
    },
    end(){
      this.$emit("dateval",{
          start: this.valueDate4,
          end: this.valueDate3
      })
    }
  },
  mounted(){ 
      this.confirmValDate2 = this.valueDate2;
      this.confirmValDate3 = this.valueDate3;   
  }
};
</script>
