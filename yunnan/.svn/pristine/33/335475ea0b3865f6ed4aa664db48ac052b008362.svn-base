<style>
.domesticSixWrap .btnWrap {
  margin-top: 1rem;
  padding: 0 0.8rem;
  font-size: 0.33rem;
}
.domesticSixWrap .btnWrap span {
  display: block;
  width: 100%;
  height: 0.9rem;
  border-radius: 40px;
  line-height: 0.9rem;
  text-align: center;
  background: #2d7ffc;
  color: white;
}
.domesticSixWrap .content {
  width: 100%;
}
.domesticSixWrap .question {
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 0.28rem;
  text-align: left;
}
.domesticSixWrap .question .rect {
  display: inline-block;
  width: 0.04rem;
  height: 0.28rem;
  background: #257bff;
  margin-right: 0.2rem;
}
/*.domesticSixWrap .hui-calendar{*/
    /*width:calc(100% - 3.5%);*/
/*}*/
.domesticSixWrap .example-calendar_single {
  width: 100%;
  height: 1rem;
  left: 0px;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  background: white;
}
.domesticSixWrap .example-calendar_single input {
  width: 100%;
  height: 100%;
  border: none;
  text-align: right;
  font-size: 0.28rem;
}
.domesticSixWrap .example-calendar {
  height: 30px;
}
/*.domesticSixWrap .example-calendar .hui-calendar {*/
  /*width: 320px;*/
  /*z-index: 1;*/
/*}*/
.domesticSixWrap .example-calendar_input {
  position: relative;
  z-index: 2100;
}
.domesticSixWrap .titles {
  display: flex;
  margin:.14rem 0;
}
.domesticSixWrap .titles li {
  text-align: center;
  flex: 1;
  font-size: 0.34rem;
  color: #333333;
}
.domesticSixWrap .titles li img {
  width: 0.32rem;
  margin-right: 0.04rem;
  vertical-align: middle;
}
.domesticSixWrap .hui-checklist {
  padding: 0rem 0.2rem;
  box-sizing: border-box;
}
.checklistWrap{
    position:relative;
}
.domesticSixWrap .example-cell_rightBox,.domesticSixWrap .example-cell_rightBox {
  width: 60px;
}
.domesticSixWrap .hui-checklist_item{
  margin: 0rem;
    height:1rem;
    line-height:1rem;
    font-size:.28rem;
}
.domesticSixWrap .hui-checklist_item:first-child{
    border-bottom:1px solid #ececec;
}
.domesticSixWrap .hui-checklist_core{
    margin-right:.28rem;
}
.domesticSixWrap .dealWrap{
    position:absolute;
    top: 0rem;
    right: .2rem;
    width: 50%;
    font-size: .28rem;
    line-height: 1rem;
    padding-top: 5px;
    color:#257BFF;
}
.domesticSixWrap .dealWrap .full{
    color:#f86861;
}
.domesticSixWrap .example-popup_wrapper {
    padding: 0 .4rem;
}
.domesticSixWrap .hui-popupPrompt_title{
    font-size: .36rem;
    color: #F85A53;
}
.domesticSixWrap .hui-popupPrompt_title{
    margin: .36rem 0rem;
}
.domesticSixWrap .finalDate{
    margin:.2rem 0rem .61rem;
    font-size:.28rem;
}
</style>
<style scoped>
.hui-field{
    padding:0 15px;
}
.textleft{
    margin-top:0.02rem;
    height: 1rem;
    line-height: 1rem;
}
.textmargintop{
    margin-top:.2rem;
}
.domesticSixWrap .middleone{
  position:relative;
}
.domesticSixWrap .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:35%;
 left:0.04rem;
}
</style>

<template>
    <div class="domesticSixWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <div class="question">
                <span class="rect"></span>
                {{name}}
            </div>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field class="textleft textmargintop"  readonly label="预约业务类型" type="text" placeholder="请选择预约业务类型" v-model="worktype" @click.native="open('worktypes')"></Field>
          </div>
            <Selectpopup ref="worktypes" position="bottom"  :dataslots="worktypelist" class="example-select_item" @confirms="worktypess"></Selectpopup>
            <div class="example-calendar_single">
                <input readonly size="12" type="text" class="example-calendar_input" @click.stop="openSingle($event)" v-model="calendar2.items.text" placeholder="请选择时间：" />
                <Calendar :value="calendar2.show" v-on:showcalendar="showcalendar2" :show-pop-time-switch="true" :autoclose='calendar2.items.autoclose' :x="calendar2.x"  :y="calendar2.y" :begin="calendar2.items.begin" :end="calendar2.items.end" :single="calendar2.items.single" :startvalue="calendar2.items.value" :range-value='calendar2.items.rangeValue' @calendar-cancel="dateCancelSingle"  @calendar-confirm="dateconfirmSingle">
                </Calendar>
            </div>
            <ul class="titles" v-if="showTime">
                <li>
                    <img :src="clockUrl" alt="">时间段
                </li>
                <li>
                    <img :src="bellUrl" alt="">预约操作
                </li>
            </ul>
            <div class="checklistWrap" v-if="showTime">
                 <Checklist title="" :max="1" v-model="timeValue" :options="data" @change="handleCheckChange">
                </Checklist>
                <ul class="dealWrap">
                    <li :class="{'full':item.value =='1'}" v-for="(item,index) in statusData" :key="index">{{item.deal}}</li>
                </ul>
            </div>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field type="text"  label="手机号码" v-model="passportphone" class="textleft" placeholder="请输入您的手机号码"></Field>
          </div>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field type="text"  label="身份证号码" v-model="passportcardid" class="textleft" placeholder="请输入您的身份证号码">
            </Field>
          </div>
        </div>
        <div class="example-popup">
            <Popupprompt v-if="popupVisible5"
                v-model="popupVisible5"
                :title="content.title"
                :text="content.text"
                :confirm-btn = "content.confirmBtn"
                :cancel-btn = "content.cancelBtn"
                @click = "clickbtn">
                <div slot="othercontent" class="finalDate">
                {{finalDate}}
                </div>
            </Popupprompt>
        </div>
        <!-- <div class="btnWrap">
            <span @click="goto">下一步</span>
        </div> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="goto" />
        </div>
    </div>
</template>

<script>

function getFormatDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate() + 1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear() + "-" + month + "-" + strDate;
    return currentDate;
}

import towtop from "@/components/HederTwo";
import clock from "@/assets/images/entryExit/click.png";
import bell from "@/assets/images/entryExit/bell.png";
import { cenurl } from "../../../../components/toptow.js"
import mybutton from "../../../../components/MyButton";
export default {
  data() {
    return {
         btnData:[
        {
          text:'下一步',
          disabled: false,
          isSure: true,
        }
      ],
      titlename: "出国境证件预约",
      name:'',
      passportphone:'',
      passportcardid:'',
      worktype:'',
      worktypelist: [
        {
          flex: 1,
          values: [
              {'text':'普通护照'},
              {'text':'港澳台通行证'}
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      calendar2: {
        show: false,
        x: 0,
        y: 0,
        items: {
          begin: '2017-03-02',
          end: "2120-08-25",
          value: '2017-03-02',
          text: "",
          single: true,
          autoclose: true
        }
      },
      clockUrl: clock,
      bellUrl: bell,
      data:[
            {
                label: '',
                value: '0',
                disabled: false,
          },
            {
                label: '',
                value: '1',
                disabled: false,
          }
        ],
        timeValue:[],
        statusData:[
            {deal:'',value:'0'},
            {deal:'',value:'1'},
        ],
        finalDate:' ',
        popupVisible5: false,
        content: {
            title: "是否选择该时间预约",
            text: "您当前选择的时间为:",
            confirmBtn: { //水平按钮-确定
              id: "confirm",
              text: "确定"
            },
            cancelBtn: { //水平按钮-取消
              id: "cancel",
              text: "取消"
            }
        },
        point:{},
        isKunMing:true,
        showTime:false,
        chosed: true
    }
  },
  components:{
    mybutton,
    towtop
  },
  mounted(){
    let nowDate = getFormatDate();
    this.calendar2.items.begin = nowDate;
    this.calendar2.items.value = nowDate;
    let _self = this;
    _self.passportphone=window.sessionStorage.getItem('userphone')!='null'?window.sessionStorage.getItem('userphone'):''
    _self.passportcardid=window.sessionStorage.getItem('cardid')!='null'?window.sessionStorage.getItem('cardid'):''
    this.point = JSON.parse(sessionStorage.getItem("GATpoint"));
    this.cityCode = this.$route.params.cityCode;
    // console.log(this.point);
    // 昆明CODE = '530100'
    if(this.cityCode != '530100'){
        this.isKunMing = false;
    }
    this.name = this.point.branch_parent_name;

    if(sessionStorage.getItem("GATDate")){
        this.calendar2.items.value = sessionStorage.getItem("GATDate");
        this.calendar2.items.text = sessionStorage.getItem("GATDate");
        this.getData();
    }
    if(sessionStorage.getItem("GATyyswxw")){
        this.timeValue[0] = sessionStorage.getItem("GATyyswxw");
    }
  },
  methods: {
    showcalendar2(val) {
      this.calendar2.show = val;
    },
    openSingle(e, type) {
      const layerSingle = document.querySelector(".example-calendar_single");
      layerSingle.style.zIndex = 2;

      // 设置类型
      this.calendar2.show = true;
      this.calendar2.x = e.target.offsetLeft - 10;
      this.calendar2.y = e.target.offsetTop + e.target.offsetHeight + 4;
    },
    dateCancelSingle(obj) {
      this.calendar2.show = obj.show;
    },
    dateconfirmSingle(obj) {
         var obj2 = obj.values[0];
         var obj = obj.values[0];
         var time = obj.replace("-", "");
            time = time.replace("-", "");
        var dateString =  time + "000000";
        var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
        var formatedDate = dateString.replace(pattern, '$1/$2/$3 $4:$5:$6');
        var dateEnd = new Date(formatedDate);
         dateEnd = dateEnd.getDay();
        console.log(dateEnd)

        this.calendar2.items.text = obj2
        this.calendar2.items.value = obj2
        this.getData();

        // if(dateEnd == 6 || dateEnd == 0){
        //     this.$toast('请选择工作日');
        //     this.calendar2.show = false;

        // }else{
        //     this.calendar2.items.text = obj2
        //     this.calendar2.items.value = obj2
        //     this.getData();
        // }

    },
    handleCheckChange (val) {
      if (this.statusData[val] && this.statusData[val].deal <= 0) {
        this.chosed = false
      }
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    worktypess(selectedVal) {

      this.selectPoint = '';
      if (typeof selectedVal[0] === "object") {
        this.worktype = selectedVal[0].text;
      } else {
        this.worktype = selectedVal;
      }
    },
    goto(){
        let datatimes=new Date()
        //console.log(datatimes.getHours().toString()+datatimes.getMinutes().toString())
        let datatimevalue=datatimes.getHours().toString()+datatimes.getMinutes().toString()
        let datamonth=parseInt((datatimes.getMonth()+1).toString())<10?'0'+(datatimes.getMonth()+1).toString():(datatimes.getMonth()+1).toString()
        let datadatenum=parseInt(datatimes.getDate().toString())<10?'0'+datatimes.getDate().toString():datatimes.getDate().toString()       
        let datadate=datatimes.getFullYear().toString()+datamonth+datadatenum
        let timevaluelabel=this.data[this.timeValue[0]].label.substring(6,8)+this.data[this.timeValue[0]].label.substring(9,11)
        let timedate=this.calendar2.items.value.replace("-","").replace("-","")
        if(!this.worktype){
            this.$toast('请选择预约业务类型！');
            return
        }else if(!this.calendar2.items.text){
            this.$toast('请选择预约日期！');
            return
        }else if(!this.timeValue.length){
            this.$toast('请选择预约时间段！');
            return
        }else if(parseInt(timedate)<=parseInt(datadate)&&parseInt(timevaluelabel)<=parseInt(datatimevalue)){
            this.$toast('已过可预约日期或时间请重新选择预约日期或时间！');
            return
        }
        else if(!this.$VerifyPhone.test(this.passportphone)){
            this.$toast('手机号码为空或格式错误!');
            return
        }else if(!this.$VerifyCardId.test(this.passportcardid)){
            this.$toast('身份证号码为空或格式错误!');
            return
        } else if(!this.chosed) {
          this.$toast('该时间段已预约满，请选择其他时间段')
          return
        }
        this.popupVisible5 = true;
        this.finalDate = this.calendar2.items.value.replace("-","年").replace("-","月") + "日  " + this.data[this.timeValue[0]].label;

        // console.log(this.timeValue);
    },
    getData(){
      let _self = this;
      let transferData,urlCode;
      if(this.isKunMing){
        //   昆明市code为12位
          urlCode = '/gsp/mng80086';
          transferData = {
            "txnCommCom": {
                "tenant":"530000000000",
                "txn_itt_chnl_id":"00",
                "txn_itt_chnl_type":"11",
                "C-Business-Id":"111111111"
            },
            "txnBodyCom": {
                "dateId":_self.calendar2.items.text,
                "deptId":_self.point.branch_code,
                "chann_id":"1",
                "matter_id":window.sessionStorage.getItem("matterid"),
            }
        }
      }else{
        //   非昆明code为6位
          urlCode = '/gsp/mng80087';
          transferData = {
            "txnCommCom": {
                "tenant":"530000000000",
                "txn_itt_chnl_id":"00",
                "txn_itt_chnl_type":"11",
                "C-Business-Id":"111111111"
            },
            "txnBodyCom": {
                "yyTime":_self.calendar2.items.text,
                "dept_id":_self.point.branch_code.slice(0,6),
                "chann_id":"1",
                "matter_id":window.sessionStorage.getItem("matterid"),
            }
        }
      }
      //  获取办理时间信息
        this.$ajaxRequest("post", urlCode, transferData)
        .then(res => {
            console.log(res)
            if (res.data.length <= 0) {
                  _self.$toast("搜索时间信息列表为空！");
                return false;
            } else {
                _self.showTime = true;
                let cent = res;
                if(_self.isKunMing){
                    _self.data[0].label = cent.data[0].ap_time1;
                    _self.data[1].label = cent.data[0].ap_time2;
                    if(cent.data[0].ap_num1){
                        _self.statusData[0].deal = cent.data[0].ap_num1;
                        _self.statusData[0].value = '0';
                    }else{
                        _self.statusData[0].deal = '已约满';
                        _self.statusData[0].value = '1';
                        _self.data[0].disabled = true;
                    }
                    if(cent.data[0].ap_num2){
                        _self.statusData[1].deal = cent.data[0].ap_num2;
                        _self.statusData[1].value = '0';
                    }else{
                        _self.statusData[1].deal = '已约满';
                        _self.statusData[1].value = '1';
                        _self.data[1].disabled = true;
                    }
                }else{
                    _self.data[0].label = cent.data[0].gzsj_sw;
                    _self.data[1].label = cent.data[0].gzsj_xw;
                    if(cent.data[0].sw_count){
                        _self.statusData[0].deal = cent.data[0].sw_count;
                        _self.statusData[0].value = '0';
                    }else{
                        _self.statusData[0].deal = '已约满';
                        _self.statusData[0].value = '1';
                        _self.data[0].disabled = true;
                    }
                    if(cent.data[0].xw_count){
                        _self.statusData[1].deal = cent.data[0].xw_count;
                        _self.statusData[1].value = '0';
                    }else{
                        _self.statusData[1].deal = '已约满';
                        _self.statusData[1].value = '1';
                        _self.data[1].disabled = true;
                    }
                }
            }
        })
        .catch(error => {
            console.log(error);
            this.showTime = true;
            _self.$toast("获取时间信息列表失败！");
        });
    },
    clickbtn(id) {
        console.log(id)
        if(id =='cancel'){
            this.popupVisible5 = false;
            return
        }
        if(id =='confirm'){
            window.sessionStorage.setItem("GATDate",this.calendar2.items.value);
            window.sessionStorage.setItem("GATTime",this.data[this.timeValue[0]].label);
            window.sessionStorage.setItem("GATyyswxw",this.timeValue[0]);
            this.$router.push('/passportSeven?passportphone='+this.passportphone+'&passportcardid='+this.passportcardid+'&worktype='+this.worktype)
        }
    },
  }
};
</script>
