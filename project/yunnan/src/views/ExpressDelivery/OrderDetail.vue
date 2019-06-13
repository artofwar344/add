<template>
  <div class="changeCompany">
    <!-- 这里是展示数据中的 -->
    <!-- 头部的 -->
    <mt-header title="订单详情">
        <div @click='goback' slot="left">
            <mt-button icon="back" style='color: #666;'></mt-button>
        </div>
    </mt-header>
    <div class="hearder_bottom"></div>

     <div class="div_line"></div>
     <mt-popup 
         class="cancel_success"
         v-model="popupVisible"
         position="top"
         >
         <div style="text-align:center;margin-bottom:0.2rem;">
             <img src="../../assets/images/cancle_success.png" style="width:1.2rem;height:1.2rem;" alt="">
         </div>
         <p style="text-align:center;margin-bottom:0.2rem;">取消成功</p>
         <p style="text-align:center;">您的预约快递取消成功！</p>
         
     </mt-popup>

    <!-- 中部内容 -->
    <div class="contents">

        <div class="contents_order">
            <img src="../../assets/images/order_success.png" />
            <p v-if='isNoCancel'>下单成功</p>
        </div>

        <div class="content_btn">
            <mt-button class="order_button" @click="cancleOrder()" v-if="isNoCancel" type="primary" style='margin: 0 auto;'>取消订单</mt-button>
            <mt-button class="order_button del_order_button" v-else  type="danger" style='margin: 0 auto;'>取消成功</mt-button>
             <!-- <span class="relax">
                <mt-button class="relax_button" type="primary">联系快递员</mt-button>
            </span> -->
        </div>
    </div>

    <div class="hearder_bottom"></div>

    <div  class="company">
        <div class="company_imag">
            <img :src="expname.imgurl" class="company_icon">
        </div>
	    <div class="company_info">
            <div class ="company_info_item" style='text-align: left;'>
                <h3>{{expname.exp_name}}快递</h3>
	            <p>{{expname.moble}}</p>
            </div>
	    </div>
   </div>
   <div class="company_line"></div> 

    <div class="orderDetails" style="margin-top:0.3rem;">
        <div class="orderDetails_left">寄件信息:</div>
        <div class="orderDetails_right">
            <div class="right_one" style='text-align: left;'>{{sender.name}} {{sender.tel}}</div>
            <div class="right_two">{{sender.province_name}} {{sender.city_name}} {{sender.exp_area_name}} {{sender.address}}</div>
        </div>  
    </div>
    <div class="orderDetails" >
        <div class="orderDetails_left">收件信息:</div>
        <div class="orderDetails_right">
            <div class="right_one" style='text-align: left;'>{{receiver.name}} {{receiver.tel}}</div>
            <div class="right_two">{{receiver.province_name}} {{receiver.city_name}} {{receiver.exp_area_name}} {{receiver.address}}</div>
        </div>  
    </div>
    <div class="Details">
        <div class="Details_left">快递公司:</div>
        <div class="Details_right">{{expname.exp_name}}</div>
    </div>

    <div class="Details">
        <div class="Details_left">付款方式:</div>
        <div class="Details_right">{{type}}</div>
    </div>



    <div class="Details">
        <div class="Details_left">物品信息:</div>
        <div class="Details_right">{{productname}}</div>
    </div>

    <div class="Details">
        <div class="Details_left">下单时间:</div>
        <div class="Details_right">{{time}}</div>
    </div>

    <div class="Details">
        <div class="Details_left">订单编号:</div>
        <div class="Details_right">{{order_id}}</div>
    </div>
  

    <!-- 底部的 -->
   <div class="footer"></div>
       
  </div>
</template>

<script>
import { MessageBox,Toast } from 'mint-ui';
import { Popup } from 'mint-ui';
export default {
  name: 'MineEmail',
  data () {
    return {
    	isNoCancel:true,
        popupVisible:false,
        orderInfo : this.$router.currentRoute.params.orderInfo||'',
        user_id: this.$router.currentRoute.params.userid||'',
        logistic_code: this.$router.currentRoute.params.logistic_code||'',
       	order_id: this.$router.currentRoute.params.order_id||'',
       	sender:this.$router.currentRoute.params.sender,
       	goods:this.$router.currentRoute.params.goods,
       	receiver:this.$router.currentRoute.params.receiver,
       	type:this.$router.currentRoute.params.type,
       	productname:this.$router.currentRoute.params.productname,
       expname:this.$router.currentRoute.params.expname,
       start_date:this.$router.currentRoute.params.start_date,
       end_date:this.$router.currentRoute.params.end_date,
       time:this.$router.currentRoute.params.time
     
    }
  },
  methods:{
  	goback(){
  		this.$router.go(-1)
  	},
       // 取消订单
        getData(){
        	console.log(this.order_id,'再次id',this.orderInfo.shipper_code,this.expname.shipper_code, )
            let obj ={
                
            "txnCommCom":{
            "tStsTraceId":"110567890",
            "txnIttChnlId":'C0011234567890987654321',
            "txnIttChnlCgyCode":'AC02C001',
        },
        "txnBodyCom":{
               "usr_id":this.user_id, 
//              "logistic_code":this.logistic_code,
                "shipper_code": this.expname.shipper_code, 
                "order_id": this.order_id
                       }
                
            };
            this.$ajaxRequest("post", "/gwlp/logistic/cancellation", obj)
            .then(response =>{
            	//  console.log('取消预约',response)
            	//  let data = JSON.stringify(response.data)
				// let cent =JSON.parse(data)
            	 if(response.success == true){
            	 	this.$store._modules.root.state.$expressdelivery.saveSendUserInfo={}
            	 	this.$store._modules.root.state.$expressdelivery.sendUserInfo={}
            	 	this.popupVisible = true
            	 	this.isNoCancel = false
            	 }else{
            	 	Toast({
						message:response.reason,
						duration: 1000
					});
            	 }
                console.log(response);
            })
            .catch(error =>{
                console.log(error);
             })
        },
      cancleOrder(){
          MessageBox.confirm('确认要取消订单吗','').then(action =>{
              if(action == 'confirm'){
                 
                  this.getData()
              }
          }).catch(err => {
              if(err == 'cancel'){
                  console.log('取消')
              }
          })
      }
  },
  mounted(){
  	console.log(this.$router.currentRoute)
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped> 
    .changeCompany{
        background-color: #ffffff;
    }
   .mint-header{
        height:1.28rem;
        background-color: #ffffff;
        padding-top:0.29rem;
     }

     .mint-header >>> .mint-header-button{
         margin-left: 0.36rem;
     }

    .mint-header >>> .mint-header-title{
        font-size:0.34rem;
        color:#333333 ;
    }
    .hearder_bottom{
        height:0.2rem;
        background-color: #F1F3F6;
    }

    .contents{
        width: 100%;
        height: 3.4rem;
    }

    .contents_order{
        text-align: center;
    }

    .contents_order img{
        height: 0.9rem;
        width: 0.9rem;
        display: inline-block;
        margin-top: 0.3rem;
    }

     .contents_order p{
        margin-top: 0.22rem;
        font-family: PingFangSC-Medium;
        font-size: 0.32rem;
        color: #2D7FFC;
    }

    .content_btn{
        width: 5.30rem;
        height: 0.76rem;
        margin:0 auto;
        margin-top: 0.38rem;
    }

    .order_button{
        border:0.02rem solid #2D7FFC;
        height:0.76rem;
        width:2.2rem;
        border-radius: 0.45rem;
        background-color: #ffffff;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #2D7FFC;
        margin-left:1.5rem;
       
    }
	.del_order_button{
		color: #ef4f4f;
		border-color:#ef4f4f ;
	}
    .relax_button{
        height:0.76rem;
        width:2.2rem;
        border-radius: 0.45rem;
        background-color: #2D7FFC;
        margin-left: 0.7rem;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #ffffff;
    }

    .company{
        width: 100%;
        height: 1.50rem;
    }

     .company_imag{
        float:left;
        width:25%;
        height: 1.50rem;
        position: relative;
    }

    .company_icon{
        height: 0.78rem;
        width: 0.78rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .company_info{
        float:right;
        width:75%;
        height: 1.4rem;
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
        margin-top: 0.36rem;
    }
     .company_info_item p{
        font-family: PingFangSC-Medium;
        font-size: 0.24rem;
        color: #666666; 
        margin-top: 0.08rem;
    }

    .company_line{
       border-bottom: 0.02rem solid #EEEEEE;
       height: 0.01rem;
       width: 90%;
       margin-top: 0.20rem;
       margin-left: 0.44rem;
    }

    .orderDetails{
         margin:0 0.36rem;
         height:1.42rem;
    }

    .orderDetails_left{
        width:1.4rem;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #999999;
        float: left;
    }
    .orderDetails_right{
        width:4.2rem;
        float: left;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #999999;
    }
    .orderDetails_right .right_one{
        height:0.4rem;
        line-height: 0.4rem;
    }
    .orderDetails_right .right_two{
        line-height:0.4rem;
        text-overflow:ellipsis;
        white-space: wrap;
        text-align: left;
    }

    .Details{
        margin:0 0.36rem;
        text-align: left;
    }
    .Details_left{
        width:1.4rem;
        font-size: 0.28rem;
        color: #999999;
        display:inline-block;
        margin-bottom:0.3rem;
    }
    .Details_right{
        font-size: 0.28rem;
        color: #999;
        display:inline-block;
        margin-bottom:0.3rem;
    }
    .cancel_success{
        width:5rem;
        height:3rem;
        padding-top:0.2rem;
        top:30%;
        left:50%;
    }
    
</style>