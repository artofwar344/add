<template>
  <div class="fundOne">
    <towtop :name="title"></towtop>
    <div class="example-formgroup">
      <Field
        readonly
        label="起始日期"
        disableclear
        type="text"
        placeholder="请选择"
        :value="confirmValDate1"
        @click.native="open('picker1')"
      >
        <span slot="append" class="example-datetime_arrowRight"></span>
      </Field>
      <Datetime
        ref="picker1"
        type="date"
        v-model="valueDate1"
        position="bottom"
        :start-date="startDate1"
        :end-date="endDate1"
        @confirm="handleChangeConfirmDate1"
      ></Datetime>
      <Field
        readonly
        label="结束日期"
        disableclear
        type="text" 
        placeholder="请选择"
        :value="confirmValDate2"
        @click.native="open('picker2')"
      >
        <span slot="append" class="example-datetime_arrowRight"></span>
      </Field>
      <Datetime
        ref="picker2"
        type="date"
        v-model="valueDate2"
        position="bottom"
        :start-date="startDate2"
        :end-date="endDate2"
        @confirm="handleChangeConfirmDate2"
      ></Datetime>
      
    </div>
      <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore  v-if="!searchListData.length == 0" @bottom-status-change="handleBottomChange" 
      :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore">
      <ul class="list" v-for="data in searchListData">
       <li v-for="item in data.resultInfo"><p>{{item.title}}<span>{{item.info}}</span></p></li>
      </ul>
    </mt-loadmore>
     </div>
  </div>
</template>

<script>
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
import towtop from "@/components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  components: {
    mybutton,
    towtop
  },
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      title: "公积金明细查询",
      valueDate1: "2018-03-05",
      confirmValDate1: "",
      startDate1: new Date(1990, 0, 1),
      endDate1: new Date(),
      valueDate2: "2018-03-05",
      confirmValDate2: "",
      startDate2: new Date(1990, 0, 1),
      endDate2: new Date(),
      searchListData: [],
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      topStatus: "",
      pageJump: 1,
      pageNumber: 10,
      startDate:"",
      endDate:""
    };
  },
  mounted(){
    const _this = this;
    let CmnRouter = sessionStorage.getItem("CmnRouter")
    if(CmnRouter != _this.$route.path){
      sessionStorage.setItem("cmnSrc",_this.$route.path)
      _this.$router.push({
          path: "QueryUserCity"
      })
      return false
    }
    sessionStorage.removeItem("CmnRouter");
    this.init();
  },
  methods: {
    init(){
      this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
      //进入页面默认查最近3个月的
      let nowDate = new Date();
      this.endDate = dateFormat(new Date(),'yyyy-MM-dd');
      this.confirmValDate2 = this.endDate;
      this.valueDate2 = this.endDate;
      this.startDate = dateFormat(new Date(nowDate.getFullYear(),nowDate.getMonth()-3,nowDate.getDate()),'yyyy-MM-dd');
      this.confirmValDate1 = this.startDate;
      this.valueDate1 = this.startDate;
      this.getDetail(this.formatData);
    },
    open(picker) {
      document.activeElement.blur();
      this.$refs[picker].open();
      $(".hui-popup").on("touchmove", function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    },
    handleChangeConfirmDate1(value) {//日期确定值
        if(dateFormat(this.endDate, 'yyyyMMdd')-dateFormat(value,'yyyyMMdd')>10000){
          this.open("picker1")
          this.$toast({
              message: '时间段不能超过12个月！',
              className: 'fundOneToast'
          });
          return;
        }
        this.confirmValDate1 = dateFormat(value, 'yyyy-MM-dd');
        this.startDate = this.confirmValDate1;
        this.reset();
      },
    handleChangeConfirmDate2(value) {//日期确定值
        if(dateFormat(value, 'yyyyMMdd')-dateFormat(this.startDate,'yyyyMMdd')>10000){
          this.open("picker2")
          this.$toast({
              message: '时间段不能超过12个月！',
              className: 'fundOneToast'
          });
          return;
        }
        this.confirmValDate2 = dateFormat(value, 'yyyy-MM-dd');
        this.endDate = this.confirmValDate2;
        this.reset();
    },
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    loadBottom() {
      const _self = this
      // 模拟加载中
      let dataSum = parseInt(_self.pageJump) * parseInt(_self.pageNumber)
      if (_self.searchListData.length!=0 && _self.searchListData.length< dataSum) {
        _self.allLoaded = true// 若数据已全部获取完毕
      } else {
        _self.pageJump = (parseInt(_self.pageJump) + 1).toString()
        _self.getDetail(loadBottom)
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
        this.searchListData = [];
        this.pageJump =1;
        this.pageNumber=10;
        this.getDetail(this.formatData);
    },
    formatData(data){
      let _self = this
      if (data.result && data.result.length != 0) {
        console.log(_self.searchListData.concat(data.result))
        _self.searchListData = _self.searchListData.concat(data.result)
         let dataSum = parseInt(_self.pageJump) * parseInt(_self.pageNumber)
        if (_self.searchListData.length!=0 && _self.searchListData.length< dataSum) {
          _self.allLoaded = true// 若数据已全部获取完毕
        }
      }else{
        this.$toast("没有查询到结果")
      }
    },
    getDetail(callback){
      let setdata = {
        txnBodyCom: {
          buzType: "5002",
          matter_id: window.sessionStorage.getItem("matterid"),
          userId: window.sessionStorage.getItem("MpfUserId"),
          pagenum:"",
          pagerows:"",
          startdate:this.startDate,
          enddate:this.endDate,
          ispaging:""
        }
      };
      let page = {
            "tRecInPage": this.pageNumber,
            "tPageJump": this.pageJump,
          };
    this.$ajaxRequest("post", "/gsp/mng19006", setdata,page)
      .then(res => {
        console.log(res)
        if (res) {
          callback(res)
        } else {
          this.$toast("没有查询到结果")
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>
<style scoped lang="less">
	
  .fundOne{
    overflow:scroll;
    .list{background: #fff;padding: .2rem 0 ;margin-top: .16rem;}
  .list>li{padding: 0.1rem 0.36rem 0.1rem;height:0.7rem;line-height: 0.7rem;}
  .list p{text-align: left;zoom:1;font-size: 0.28rem; color: #333;}
  .list p:after{content: '';display: block;clear: both;}
  .list span{float: right;color: #999}
  .list img{height:2.12rem;float: right}
  }
</style>
<style>
.fundOneToast{
  z-index:2200
}
</style>