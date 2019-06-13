<template>
<div  id="maddress" style="background:#fff">
  <div class="queryEmail" >
    <!-- 这里是展示数据中的 -->
    <!-- 头部的 -->
    <mt-header title="查询结果">
         <mt-cell @click.native="goback()" icon="back" slot="left"></mt-cell>
    </mt-header>

    <div class="div_line"></div>
    
  <div class="queryEmails" v-if="wsj">
      <div class="bgimag">
            <img src="../../assets/images/wkdxq.png" class="company_icon1" width="50" height="50">
            <span  class="company_icon2" >暂无查询结果</span>
      </div>
  </div>
    <!-- 中部内容 -->
    <div class="deliveryinfo" v-if="ysj"> 
        <div class="companyinfo">

            <div class="company_imag">
                <img :src="imgSrc" class="company_icon">
            </div>
	        <div class="company_info">
                 <dir class ="company_info_item">
                     <h3>{{kdgs}}</h3>
	                 <p>{{kdph}}</p>
                 </dir>
	    </div >  
    </div>
        <div class="lines"></div>
        <div class="orderId">
           <span class="orderId_text"> 快递单号:{{kddh}}</span>
        </div>
   </div>

   <div class="div_line" v-if="ysj"></div>
   <div class="height-line" v-if="ysj"></div>

   <!-- 物流跟踪信息 -->
    <div class="emailDetail" v-for="(item,index) in kdxq" v-if="ysj">
       <!-- 时间戳 -->
       <div class="detail_time">
           <div class="detail_time_mouth">{{rqlist[index]}}</div>
           <div class="detail_time_date">{{sjlist[index]}}</div>
       </div>
       <!-- 进度条 -->
       <div class="detail_progress_img">
           <span style="width:0.02rem;height:1.4rem;background:#2D7FFC;float:left;margin:0 0.5rem 0 0.1rem;"></span>
           <span style="width:0.2rem;height:0.2rem;border-radius:50%;background:#2D7FFC;float:left;margin-right:0.5rem;"></span>
           <span style="width:0.02rem;height:1.4rem;background:#2D7FFC;float:left;margin:0 0.5rem 0 0.1rem;"></span>
       </div>
           
       <!-- 具体进度 -->
       <div class="detail_progress_text">
           <h3>{{wllist[index]}}</h3>
	       <p>{{item.accept_station}}</p>
       </div>
   </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SendEmail',
  data () {
    return {
     kddh:'',
    kdgs:'',
    kdph:'',
    kdbm:'',
    kdxq:[],
    rqlist:[],
    sjlist:[],
    wllist:[],
    ysj:"",
    wsj:"",
    back:'',
    imgSrc:'',
    memberId: "",
    }
  },
  methods:{
    goback: function(){
        if(this.back == 1){
            this.$router.push({
							path: '/QueryEmail'
						})
        }else{
            this.$router.push({
							path: '/myexpress'
						})
        }
    },
    changeimg(){
            if(this.kdgs.indexOf('圆通') !== -1) {
                this.imgSrc = require('../../assets/images/yuan_tong.png')
            }
            if(this.kdgs.indexOf('顺丰') !== -1) {
                this.imgSrc = require('../../assets/images/sfc.png')
            }
            if(this.kdgs.indexOf('中通') !== -1) {
                this.imgSrc = require('../../assets/images/zhong_tong.png')
            }
            if(this.kdgs.indexOf('韵达') !== -1) {
                this.imgSrc = require('../../assets/images/yun_da.png')
            }
            if(this.kdgs.indexOf('EMS') !== -1) {
                this.imgSrc = require('../../assets/images/EMS.png')
            }
            if(this.kdgs.indexOf('百世') !== -1) {
                this.imgSrc = require('../../assets/images/bskd.png')
            }
            if(this.kdgs.indexOf('天天') !== -1) {
                this.imgSrc = require('../../assets/images/天天快递logo@2x.png')
            }
            if(this.kdgs.indexOf('邮政') !== -1) {
                this.imgSrc = require('../../assets/images/邮政快递logo@2x.png')
            }
            if(this.kdgs.indexOf('德邦') !== -1) {
                this.imgSrc = require('../../assets/images/德邦快递logo2@2x.png')
            }
            if(this.kdgs.indexOf('优速') !== -1) {
                this.imgSrc = require('../../assets/images/优速快递logo@2x.png')
            }
    },
      getData(){
        let obj ={
        txnCommCom: {
          tStsTraceId: "110567890",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          shipper_code:this.kdbm,
          logistic_code: this.kddh,
          memberId: this.memberId
           //memberId:"a7697f77d8d7487da46247797bbadab3"
        }
        };
        this.$ajaxRequest("post", "/gwlp/logistic/searchlogistic", obj)
        .then(response =>{
        // let data = JSON.stringify(response.data)
        // let cent =JSON.parse(data)
        // this.ysj = true;
        // this.wsj = false;
        // let a = JSON.parse(cent["C-Response-Body"]);
        console.log(response.traces);
        this.kdxq = response.traces;
        if(this.kdxq == '' || this.kdxq == null){
        this.ysj = false;
        this.wsj = true;
        }else{
        this.ysj = true;
        this.wsj = false;
        }
        this.kdxq.forEach((item,index)=>{
        let a = this.kdxq[index].accept_time.split(" ");
        console.log(a)
        this.rqlist[index] =  a[0];
        this.sjlist[index] =  a[1];
        if(item['action'] == 1){
            this.wllist[index] ="已揽收"
        }
        if(item['action'] == 2){
            this.wllist[index] ="在途中"
        }
        if(item['action'] == 201){
            this.wllist[index] ="到达派件城市"
        }
        if(item['action'] == 202){
            this.wllist[index] ="派件中"
        }
        if(item['action'] == 211){
            this.wllist[index] ="已放入快递柜或驿站"
        }
        if(item['action'] == 3){
            this.wllist[index] ="已签收"
        }
        if(item['action'] == 301){
            this.wllist[index] ="正常签收"
        }
        if(item['action'] == 302){
            this.wllist[index] ="派件异常后最终签收"
        }
        if(item['action'] == 304){
           this.wllist[index] ="代收签收"
        }
        if(item['action'] == 311){
           this.wllist[index] ="已取出快递柜或驿站"
        }
        if(item['action'] == 4){
           this.wllist[index] ="问题件"
        }
        if(item['action'] == 401){
           this.wllist[index] ="发货无信息"
        }
        if(item['action'] == 402){
           this.wllist[index] ="超时未签收"
        }
        if(item['action'] == 403){
           this.wllist[index] ="超时未更新"
        }
        if(item['action'] == 404){
            this.wllist[index] ="拒收（退件）"
        }
        if(item['action'] == 405){
          this.wllist[index] ="派件异常"
        }
        if(item['action'] == 406){
           this.wllist[index] ="退货签收"
        }
        if(item['action'] == 407){
            this.wllist[index] ="退货未签收"
        }
        if(item['action'] == 412){
           this.wllist[index] ="快递柜或驿站超时未取"
        }
        })
        })
        .catch(error =>{
        console.log(error);
        this.ysj = false;
        this.wsj = true;
    })
    console.log(this.ysj)
    },
  },
  mounted:function(){
    this.memberId = window.sessionStorage.getItem("userid");
    let a = this.$router.currentRoute.query;
    this.kdgs = a.deliveryCrop;
    this.kdbm = a.deliveryCropCode;
    this.kdph = a.phone;
    this.kddh = a.kddh;
    this.back = a.back;
    this.getData();
    this.changeimg();
}
 
}
</script>
<style scoped> 
.queryEmail{
        background-color: #ffffff;
         width: 100%;
         height: 100%;
    }
.queryEmails{
        background-color: #ffffff;
         width: 100%;
         height: 100%;
    }
.bgimag{
    background-color: #ffffff;
     width: 100%;
     height: 9.8rem;
}
.mint-header{
    height:1.28rem;
    background-color: #ffffff;
    padding-top:0.29rem;
}
.mint-header >>> .mint-header-title{
    font-size:24px;
    color:#333333 ;
}

    .top_title{
        background-color: #ffffff;
        height: 0.9rem;
        font-size: 0.34rem;
        color:  #333333;
        font-family: "PingFangSC-Medium;";
    }

    .top_icon{
        margin-left: 0.36rem;
        background-size: 100% 100%;
    }

    .div_line{
        width: 100%;
        height: 0.2rem;
        background-color: #F1F3F6;
    }

    .deliveryinfo{
        width: 100%;
        height: 2.18rem;
        background-color: #ffffff;
    }
    .emailDetail{
        width: 100%;
        height: 3rem;
        background-color: #ffffff;
    }
    .companyinfo{
        width: 100%;
        height:1.4rem;
        
    }

    .lines{
       border-bottom: 0.01rem solid #EEEEEE;
       height: 0.01rem;
       margin-left: 0.36rem;
       margin-right: 0.36rem;
    }

    .orderId{
        width: 100%;
        height: 0.76rem;
        display: inline-block;
        vertical-align: middle;
    }

    .orderId::after{
        content:'';
        height:100%;
        display: inline-block;
        vertical-align: middle;
    }

    .orderId_text{
        display: inline;
        vertical-align: middle;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #666666;
        margin-left: 0.36rem;
    }

     .company_imag{
        float:left;
        width:25%;
        height: 1.4rem;
        position: relative;
    }

     .company_icon{
        height: 0.8rem;
        width: 0.8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
     .company_icon1{
        height:2rem;
        width: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .company_icon2{
        height: 1rem;
        width: 2rem;
        position: absolute;
        top: 62%;
        left: 55%;
        font-size: 14px;
        color: #999;
        transform: translate(-50%, -50%);
    }
    .company_info{
    float: left;
    width: 75%;
    height: 1.4rem;
    padding-left: 0.3rem;
    text-align: left;
    background-color: #ffffff;
    }

    .company_info_item{
        padding: 0rem;
        margin: 0rem;   
    }

    .company_info_item h3{
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #333333; 
        margin-top: 0.28rem;
    }
     .company_info_item p{
        font-family: PingFangSC-Medium;
        font-size: 0.24rem;
        color: #666666; 
        margin-top: 0.08rem;
    }

    .height-line{
        width: 100%;
        height: 0.50rem;
        background-color:#ffffff;
    }

    /* 物流跟踪时间 */
    .detail_time{
        display: inline-block;
        float:left;
        width: 26%;
        height: 2rem;
    }

    .detail_time_mouth{
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #666666 ;
        text-align: center;
    }

    .detail_time_date{
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #666666;
        text-align: center;
        margin-top: 0.01rem;
    }
    .detail_progress_img{
         display: inline-block;
        float:left;
        width: 4%;
        height: 2rem;
    }
    /* 物流跟踪进度文字 */
    .detail_progress_text{
        display: inline-block;
        float:right;
        width: 70%;
        height: 2rem;
    }

     .detail_progress_text h3{
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #666666;
        margin:0 0.36rem 0.1rem 0.24rem;
    }
     .detail_progress_text p{
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #666666;
        margin-left: 0.24rem;
        margin-right: 0.36rem;
    }

    



</style>