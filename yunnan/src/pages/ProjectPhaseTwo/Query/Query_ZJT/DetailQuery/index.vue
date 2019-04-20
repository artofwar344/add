<style scoped>
html,body{
  height: 100%;
}
.infoCheck{
  /* height:100%; */
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
.chargeBtn{
  margin: .6rem auto;
}
.chargeBtn button {
    /* width: 5.9rem;
    height: 0.9rem;
    background: #2D7FFC;
    box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.50);
    border-radius: 25px;
    border: none;
    font-size: 16px;
    letter-spacing: 0.19px;
    text-align: center;
    margin-top: 1.02rem; */
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
}
</style>
<template>
    <div class="infoCheck infoContainer">
      <myheader :my-header="headerData"></myheader>
    <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <CmnDate :state="cmnDateState" @CmnDate="CmnDatefun" @dateval="dateval" />
            <div v-if="msgState == false" class="msg">暂无数据</div>

    <loadmore  v-if="!arr.length == 0" @bottom-status-change="handleBottomChange" 
      :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore">
            <ul class="list" v-if="state == true" v-for="data in arr">
                <li>
                  <p v-for="item in data.resultInfo">{{item.title}}<span>{{item.info}}</span></p>
                </li>
            </ul>
            <ul class="list" v-if="state == false" v-for="data in arr">
                <li>
                  <p v-for="item in data.resultInfo">{{item.title}}<span>{{item.info}}</span></p>
                </li>
            </ul>
        </loadmore>
     </div>
    </div>
</template>
<script>
function dateFormat(time, format) {
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
import Header from "@/components/header/header";
import CmnDate from "../DetailQuery/components/CmnDate";
import mybutton from "@/components/MyButton";
import Common from "../LoanInfoQuery/components/Common"
import { debug } from 'util';
export default {
  components: {
    myheader: Header,
    CmnDate,
    mybutton
  },
  data() {
    return {
      headerData: {
        title: "",
        backUrl: "",
      },
      btnData: [
        {
          text: "确认提交",
          disabled: false,
          isSure: true,
          // click:'func2'
        },
      ],
      endData:{
        startDate:"",
        endDate:"",
      },
      title:[
        "起始日期",
        "结束日期",
        "业务日期",
        "期数",
        "业务类型",
        "本金金额",
        "利息金额",
        "罚息金额",
        "合计金额",
      ],
      titleTwo:[
        "起始日期",
        "结束日期",
        "应还日期",
        "应还本金",
        "应还利息",
        "应还合计"
      ],
      arr:[],
      arr2:[],
      state:Boolean,
      msgState:Boolean,
      cmnDateState:"",
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      topStatus: '',
      pageJump: 1,
      pageNumber: 10,
    }
  },
  created(){
    const _this = this;
    let CmnRouter = sessionStorage.getItem("CmnRouter")
    if(CmnRouter != this.$route.path){
      sessionStorage.setItem("cmnSrc",_this.$route.path)
      _this.$router.push({
          path: "QueryUserCity",
          query: {
            data: _this.$route.query.data
          }
      })
      return false
    }
    sessionStorage.removeItem("CmnRouter");
    if(_this.$route.query.data == "1"){
        _this.headerData.title = "还款明细查询";  
        _this.cmnDateState = "1" 
    }else{
        _this.headerData.title = "还款计划查询"
       _this.cmnDateState = "2" 
    }
  },
  mounted(){
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
 },
  methods:{
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    loadBottom() {
      const _self = this
      // 模拟加载中
      let dataSum = parseInt(_self.pageJump) * parseInt(_self.pageNumber)
      if (_self.arr.length!=0 && _self.arr.length < dataSum) {
        _self.allLoaded = true// 若数据已全部获取完毕
      } else {
        _self.pageJump = (parseInt(_self.pageJump) + 1).toString()
        _self.goto(loadBottom)
      }
      function loadBottom (data) {
        _self.$nextTick(function () {
          _self.formatData(data)
          _self.$refs.loadmore.onBottomLoaded()
        })
      }
    },
    reset(){
        this.allLoaded = false;
        this.arr = [];
        this.pageJump =1;
        this.pageNumber=10;
        this.goto(this.formatData);
    },
    formatData(data){
      let _self = this
      if (data.result && data.result.length != 0) {
        console.log(_self.arr.concat(data.result))
        _self.arr = _self.arr.concat(data.result)
          // _self.compileArr(_this.headerData.title,data.result)
         let dataSum = parseInt(_self.pageJump) * parseInt(_self.pageNumber)
        if (_self.arr.length!=0 && _self.arr.length< dataSum) {
          _self.allLoaded = true// 若数据已全部获取完毕
        }
      }else{
        this.$toast("没有查询到结果")
      }
    },
    CmnDatefun(val){
      debugger
      if(val.data == "startDate"){
        this.endData.startDate = val.time;
      }else{
        this.endData.endDate = val.time;
      }
      this.reset()
    },//选择时间
    goto(callback){
      let _this = this;
      let sendData,filterTitle,endSrc,buzTypels;
      //1 还款明细 2  还款计划
      if(this.$route.query.data == "1"){ 
        
        filterTitle = _this.title;
        endSrc = "gsp/mng90043";
        sendData = {
          "txnBodyCom":{
            matter_id: window.sessionStorage.getItem('matterid'),
            userId: window.sessionStorage.getItem("MpfUserId"),
            startdate: _this.endData.startDate,
            enddate: _this.endData.endDate,
            ispaging: "",
            buzType: "5072",
            pagenum:"",
            pagerows:""
          }
        }
      }else{
        filterTitle = _this.titleTwo;
        endSrc = "gsp/mng90024"
        sendData = {
          "txnBodyCom":{
            matter_id: window.sessionStorage.getItem('matterid'),
            userId: window.sessionStorage.getItem("MpfUserId"),
            startdate: _this.endData.startDate,
            enddate: _this.endData.endDate,
            ispaging: "",
            buzType: "5002",
            pagenum: "",
            pagerows: ""
          }
        }
      }
      let dateTwo = {
          "tRecInPage": _this.pageNumber,
          "tPageJump": _this.pageJump,
          "tStsTraceId": "110567890"
      }
      _this.$ajaxRequest("post",endSrc ,sendData,dateTwo)
      .then(res => {
        if(res.recode == '000000'){
          if(res.result.length <= 0){
            _this.msgState = false;
            return false
          }else{
           _this.msgState = true;
          }
          if(_this.headerData.title == "还款明细查询"){
            _this.state = true
          }else{
            _this.state = false
          }         
          callback(res)
        }else{
          _this.msgState = false;
        }
      })
      .catch(error => {
        _this.$toast("网络错误,请重试")
      });
    },
    dateval(data){
      let _this = this;
          _this.endData.startDate = data.start
          _this.endData.endDate = data.end
        this.goto(this.formatData)

      // let CmnRouter = sessionStorage.getItem("CmnRouter")        
      // if(CmnRouter == this.$route.path){
      // }
    }, 
  },
  computed:{
    
  },
  watch:{}
};
</script>
<style>
html,body{height:100%;}
  .infoCheck {
    background:#f1f3f6;
    /* height:100%; */
  }
.infoContainer .list{background: #fff;padding-top: .2rem;margin-top: .16rem;}
.infoContainer  .list>li{padding: 0.1rem 0.36rem 0.1rem;border-bottom: .2rem solid #f1f3f6;}
.infoContainer   .list p{text-align: left;zoom:1;font-size: 0.28rem; color: #333;height:0.7rem;line-height: 0.7rem;}
.infoContainer  .list p:after{content: '';display: block;clear: both;}
.infoContainer  .list span{float: right;color: #999}
.infoContainer   .list img{height:2.12rem;float: right}
.infoContainer .msg{
  margin: .5rem;
}
</style>
<style>
.example-loadmore_top{
  height:50px;
  background:green;
  color:#fff;
}
.example-loadmore_wrapper {
    overflow: scroll
}
.example-loadmore_listitem {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom:1px solid #e1e2e6
}
</style>