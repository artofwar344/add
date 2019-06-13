<template>
  <div style="background-color:#ffffff;" class="myexpress">
    <mt-header title="我的快递">
      <router-link to="/MyExpress" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="hearder_bottom"></div>
    <div class="search">
      <mt-search
        autofocus
        v-model="kddh"
        cancel-text="取消"
        placeholder="请输入历史快递单号"
        @blur.native.capture="getData(),getDatat()"
        style="font-size:13px;"
      ></mt-search>
    </div>
    <div class="queryEmails" v-if="(this.jjlist==null||this.jjlist.length==0) && (this.sjlist==null||this.sjlist.length ==0)">
      <div class="bgimag">
        <img src="../../assets/images/wkdxq.png" class="company_icon1" width="50" height="50">
        <span class="company_icon2">暂无快递记录</span>
      </div>
    </div>
    <div v-else>
      <ul v-for="(item,index) in jjlist" :key="index">
        <li class="kd-li" style="margin-bottom:0.2rem">
          <div class="kd-left" @click="search(item)">
            <span>
              <img
                slot="icon"
                :src="imgSrcj[index]"
                width="39"
                height="39"
                style="margin: 0.12rem 0 0 0.17rem"
              >
            </span>
          </div>
          <div class="kd-mid">
            <div class="mid-t">
              <span style="font-weight:600">{{item.DELIVERY_CORP}}</span>
              <span style="color:#666666" v-if="item.PAYMENT_TYPE">{{item.TRACKING_NO}}</span>
            </div>
            <div class="mid-b" @click="search(item)">
              <span style="color:#FC6D32">{{item.SHIPPING_STATUS}}</span>
              <span style="color:#999999;width: 3rem;overflow: hidden;height: 0.5rem;text-align:left;">{{item.AREA_FULL_NAME}}至{{item.OPERATOR_AREA_FULL_NAME}}</span>
            </div>
          </div>
          <div class="kd-right">
            <span style="color:#999999">{{item.CREATE_DATE}}</span>
          </div>
        </li>
      </ul>
      <ul v-for="(item,index) in sjlist" :key="index">
        <li class="kd-li">
          <div class="kd-left" @click="search(item)">
            <span>
              <img
                slot="icon"
                :src="imgSrc[index]"
                width="39"
                height="39"
                style="margin: 0.12rem 0 0 0.17rem"
              >
            </span>
          </div>
          <div class="kd-mid" @click="search(item)">
            <div class="mid-t">
              <span style="font-weight:600">{{item.DELIVERY_CORP}}</span>
              <span style="color:#666666" v-if="item.mkd">{{item.TRACKING_NO}}</span>
            </div>
            <div class="mid-b">
              <span style="color:#FC6D32">{{item.SHIPPING_STATUS}}</span>
              <span style="color:#999999;width: 3rem;overflow: hidden;height: 0.5rem;text-align:left;">{{item.SENDER_CITY_NAME}}至{{item.RECEIVER_CITY_NAME}}</span>
            </div>
          </div>
          <div class="kd-right">
            <span style="color:#999999">{{item.CREATE_DATE}}</span>
            <span @click="shuru(item)" v-if="item.ykd" style="color:#2D7FFC">输入快递单号</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast,Indicator} from 'mint-ui';
export default {
  data() {
    return {
      kddh: "",
      kdph: "",
      jjlist: [],
      sjlist: [],
      imgSrc: [],
      imgSrcj: [],
      jjk: "",
      sjk: "",
      ysj: true,
      wsj: false,
      memberId: ""
    };
  },
  methods: {
    shuru(item) {
      console.log(item)
      this.$router.push({
        path: "/lrexpress",
        query: {
          deliveryCrop: item.DELIVERY_CORP,
          status: item.SHIPPING_STATUS,
          title: item.TITLE,
          consingee: item.CONSIGNEE,
          id: item.ID,
          sn: item.SN,
          kdbm: item.DELIVERY_CORP_CODE
        }
      });
    },
    checkKddh(val) {
      var deliveryNoReg = /^[0-9a-zA-Z]*$/g;
      if (!deliveryNoReg.test(val)) {
        Toast({
          message: "请输入数字和英文字母",
          duration: 1000
        });
        return false;
      }
    },

    getData() {
      let a = "";
      if (this.kddh == "") {
        a = this.kddh;
      } else {
        a = "%" + this.kddh + "%";
      }
      let obj = {
        txnCommCom: {
          tStsTraceId: "110567890",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          memberId: this.memberId,
          //memberId:"9640a1171409437ebbff3ab22cb07d08",
          type: "2",
          trackingNo: a
        }
        };
        this.$ajaxRequest("post", "/gwlp/web/shipping/list", obj)
        .then(response =>{
          console.log(response)
        Indicator.close();
			// let data = JSON.stringify(cent)
			// 	let cent =JSON.parse(data)
        this.jjlist = response.history_list;
        console.log(this.jjlist,8888888)
        response.history_list.forEach((item,index) => {
            this.jjlist[index].CREATE_DATE =this.RiQi(response.history_list[index].CREATE_DATE);
            let a = this.jjlist[index].CREATE_DATE.split("-");
            let x = a[1]+"-"+a[2]
            this.jjlist[index].CREATE_DATE = x;
            let b = this.jjlist[index].AREA_FULL_NAME.split(" ");
            let y = b[1]
            this.jjlist[index].AREA_FULL_NAME = y;
            let c = this.jjlist[index].OPERATOR_AREA_FULL_NAME.split(" ");
            let z = c[1]
            this.jjlist[index].OPERATOR_AREA_FULL_NAME = z;
            if(this.jjlist[index].TRACKING_NO == "" || this.jjlist[index].TRACKING_NO == null ){
                 this.jjlist[index].PAYMENT_TYPE = false;
                this.jjlist[index].OPERATOR = true;
              } else {
                this.jjlist[index].PAYMENT_TYPE = true;
                this.jjlist[index].OPERATOR = false;
              }
              if (item.DELIVERY_CORP.indexOf("圆通") !== -1) {
                this.jjlist[index].tel = "95554";
                this.imgSrcj[
                  index
                ] = require("../../assets/images/yuan_tong.png");
              }
              if (item.DELIVERY_CORP.indexOf("顺丰") !== -1) {
                this.jjlist[index].tel = "95338";
                this.imgSrcj[index] = require("../../assets/images/sfc.png");
              }
              if (item.DELIVERY_CORP.indexOf("中通") !== -1) {
                this.jjlist[index].tel = "95311";
                this.imgSrcj[
                  index
                ] = require("../../assets/images/zhong_tong.png");
              }
              if (item.DELIVERY_CORP.indexOf("韵达") !== -1) {
                this.jjlist[index].tel = "95546";
                this.imgSrcj[index] = require("../../assets/images/yun_da.png");
              }
              if (item.DELIVERY_CORP.indexOf("EMS") !== -1) {
                this.jjlist[index].tel = "11183";
                this.imgSrcj[index] = require("../../assets/images/EMS.png");
              }
               if (item.DELIVERY_CORP.indexOf("百世") !== -1) {
                this.jjlist[index].tel = this.jjlist[index].moble ;
                this.imgSrcj[index] = require("../../assets/images/bskd.png");
              }
                if (item.DELIVERY_CORP.indexOf("天天") !== -1) {
                this.jjlist[index].tel = this.jjlist[index].moble ;
                this.imgSrcj[index] = require("../../assets/images/天天快递logo@2x.png");
              }
                if (item.DELIVERY_CORP.indexOf("邮政") !== -1) {
                this.jjlist[index].tel = this.jjlist[index].moble;
                this.imgSrcj[index] = require("../../assets/images/邮政快递logo@2x.png");
              }
              if (item.DELIVERY_CORP.indexOf("德邦") !== -1) {
                this.jjlist[index].tel = this.jjlist[index].moble;
                this.imgSrcj[index] = require("../../assets/images/德邦快递logo2@2x.png");
              }
               if (item.DELIVERY_CORP.indexOf("优速") !== -1) {
                this.jjlist[index].tel = this.jjlist[index].moble;
                this.imgSrcj[index] = require("../../assets/images/优速快递logo@2x.png");
              }
              if (
                response.history_list[index]
                  .DELIVERY_CORP == "" ||
                response.history_list[index]
                  .DELIVERY_CORP == null
              ) {
                this.imgSrcj[index] = require("../../assets/images/zwgs.png");
              }
              if (
                response.history_list[index]
                  .SHIPPING_STATUS == 1
              ) {
                this.jjlist[index].SHIPPING_STATUS = "待揽件";
              }
              if (
                response.history_list[index]
                  .SHIPPING_STATUS == 2
              ) {
                this.jjlist[index].SHIPPING_STATUS = "已揽件";
              }
              if (
                response.history_list[index]
                  .SHIPPING_STATUS == 3
              ) {
                this.jjlist[index].SHIPPING_STATUS = "在途中";
              }
              if (
                response.history_list[index]
                  .SHIPPING_STATUS == 4
              ) {
                this.jjlist[index].SHIPPING_STATUS = "已签收";
              }
              if (
                response.history_list[index]
                  .SHIPPING_STATUS == 5
              ) {
                this.jjlist[index].SHIPPING_STATUS = "问题件";
              }
              if (
                response.history_list[index]
                  .SHIPPING_STATUS == 6
              ) {
                this.jjlist[index].SHIPPING_STATUS = "已取消";
              }
            })
        }
        )
        .catch(error =>{
        	 Indicator.close();
        console.log(error);
    })
    },//快递历史
    getDatat(){
        let a ='';
         if (this.kddh =="") {
             a = this.kddh
        }else{
             a = "%"+this.kddh+"%"
        }
        let obj ={ 
         txnCommCom: {
          tStsTraceId: "110567890",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          memberId: this.memberId,
          //memberId:"9640a1171409437ebbff3ab22cb07d08",
          type: "1",
          trackingNo: a
        }
        };
        this.$ajaxRequest("post", "/gwlp/web/shipping/list", obj)
        .then(response =>{
 
    //  let data = JSON.stringify(response.data)
		// 								let cent =JSON.parse(data)
    //     Indicator.close();
    //     console.log(JSON.parse(cent['C-Response-Body']).history_list);
        this.sjlist = response.history_list;
        console.log(this.sjlist,999999)
         response.history_list.forEach((item,index) => {
             this.sjlist[index].CREATE_DATE =this.RiQi(response.history_list[index].CREATE_DATE);
                 let a = this.sjlist[index].CREATE_DATE.split("-");
                let x = a[1]+"-"+a[2]
                this.sjlist[index].CREATE_DATE = x;
                if(item.DELIVERY_CORP.indexOf('圆通')!== -1){
                    this.imgSrc[index] = require('../../assets/images/yuan_tong.png')
                }
                if(item.DELIVERY_CORP.indexOf('顺丰')!== -1){
                    this.imgSrc[index] = require('../../assets/images/sfc.png')
                }
                if(item.DELIVERY_CORP.indexOf('中通')!== -1){
                    this.imgSrc[index] = require('../../assets/images/zhong_tong.png')
                }
                if(item.DELIVERY_CORP.indexOf('韵达')!== -1){
                    this.imgSrc[index] = require('../../assets/images/yun_da.png')
                }
                if(item.DELIVERY_CORP.indexOf('EMS')!== -1){
                    this.imgSrc[index] = require('../../assets/images/EMS.png')
                }
                if(item.DELIVERY_CORP.indexOf('百世')!== -1){
                    this.imgSrc[index] = require('@/assets/images/bskd.png')
                }
                if(item.DELIVERY_CORP.indexOf('天天')!== -1){
                    this.imgSrc[index] = require('../../assets/images/天天快递logo@2x.png')
                }
                if(item.DELIVERY_CORP.indexOf('邮政')!== -1){
                    this.imgSrc[index] = require('../../assets/images/邮政快递logo@2x.png')
                }
                if(item.DELIVERY_CORP.indexOf('德邦')!== -1){
                    this.imgSrc[index] = require('../../assets/images/德邦快递logo2@2x.png')
                }
                if(item.DELIVERY_CORP.indexOf('优速')!== -1){
                    this.imgSrc[index] = require('../../assets/images/优速快递logo@2x.png')
                }
                if(response.history_list[index].DELIVERY_CORP == '' || response.history_list[index].DELIVERY_CORP == null ){
                    this.imgSrc[index] = require('../../assets/images/zwgs.png')
                }
                 if(this.sjlist[index].TRACKING_NO == "" || this.sjlist[index].TRACKING_NO == null ){
                 this.sjlist[index].mkd = false;
                this.sjlist[index].ykd = true;
              } else {
                this.sjlist[index].mkd = true;
                this.sjlist[index].ykd = false;
              }
                 if(response.history_list[index].SHIPPING_STATUS == 1){
                this.sjlist[index].SHIPPING_STATUS = '待揽件'
                }
                if(response.history_list[index].SHIPPING_STATUS == 2){
                    this.sjlist[index].SHIPPING_STATUS = '已揽件'
                }
                if(response.history_list[index].SHIPPING_STATUS == 3){
                    this.sjlist[index].SHIPPING_STATUS = '在途中'
                }
                if(response.history_list[index].SHIPPING_STATUS == 4){
                    this.sjlist[index].SHIPPING_STATUS = '已签收'
                }
                if(response.history_list[index].SHIPPING_STATUS == 5){
                    this.sjlist[index].SHIPPING_STATUS = '问题件'
                }
                if(response.history_list[index].SHIPPING_STATUS == 6){
                    this.sjlist[index].SHIPPING_STATUS = '已取消';
                    this.sjlist[index].mkd = true;
                    this.sjlist[index].ykd = false;
                }
               
            }
          );
        })
        .catch(error => {
        	 Indicator.close();
          console.log(error);
        });
    },
    search(item) {
    	console.log(item)
      if (item.TRACKING_NO == "" || item.TRACKING_NO == null) {
      	let sender = {
					"name": item.SENDER_NAME, //姓名
					"company": item.SENDER_COMPANY, //公司
					"tel": item['SENDER_TEL'], //电话
					"mobile": item['SENDER_PHONE'], //手机
					"post_code": "000000", //邮编
					"province_name": item['SENDER_PROVINCE_NAME'], //收件省
					"city_name":item['SENDER_CITY_NAME'], //收件市
					"exp_area_name": item['SENDER_EXP_AREA_NAME'], //收件区/县
					"subdistrict":item['SENDER_SUBDISTRICT']||'' , //街道(如华强北街道)
					"address":item['CUSTOMER_ADDRESS']|| ''  //收件人详细地址
				};
				let goods = {
					"product_name": item['TITLE'], //商品名称
					"volume": "暂无", //体积
					"quantity": "暂无", //数量
					"weight": '暂无' //重量
				};
				let receiver = {
					"id": "2", //id
					"name": item['RECEIVER_NAME'], //姓名
					"company":  item['RECEIVER_COMPANY'], //公司
					"tel": item['RECEIVER_TEL'], //电话
					"mobile": item['RECEIVER_PHONE'], //手机
					"post_code": "000000", //邮编
					"province_name": item['RECEIVER_PROVINCE_NAME'], //收件省
					"city_name": item['RECEIVER_CITY_NAME'], //收件市
					"exp_area_name":  item['RECEIVER_EXP_AREA_NAME'], //收件区/县
					"subdistrict": item['RECEIVER_SUBDISTRICT'] ||'', //街道(如华强北街道)
					"address":  item['RECEIVER_ADDRESS'] ||''//收件人详细地址
				}
				let expressType=''
				if(item['PAY_TYPE'] =='1'){
					 expressType='寄付'
				}else{
						 expressType='到付'
				}
				let expname={
					shipper_code:item['DELIVERY_CORP_CODE'],
					exp_name:item['DELIVERY_CORP']
				}
				if(expname.exp_name.indexOf('圆通') !== -1) {
										expname.moble = expname.moble||'95554'
										expname.imgurl = require('../../assets/images/yuan_tong.png')
										
									}
									if(expname.exp_name.indexOf('顺丰') !== -1) {
										expname.moble = '95338'
										expname.imgurl = require('../../assets/images/sfc.png')
								
									}
									if(expname.exp_name.indexOf('中通') !== -1) {
										expname.moble = '95311'
										expname.imgurl = require('../../assets/images/zhong_tong.png')
									
									}
									if(expname.exp_name.indexOf('韵达') !== -1) {
										expname.moble = '95546'
										expname.imgurl = require('../../assets/images/yun_da.png')
								
									}
									if(expname.exp_name.indexOf('EMS') !== -1) {
										expname.moble = '11183'
										expname.imgurl = require('../../assets/images/EMS.png')
								
									}
									if(expname.exp_name.indexOf('百世') !== -1) {
										expname.moble = ''
										expname.imgurl = require('../../assets/images/bskd.png')
									
									}
									if(expname.exp_name.indexOf('天天') !== -1) {
										expname.moble =''
										expname.imgurl = require('../../assets/images/天天快递logo@2x.png')
								
									}
									if(expname.exp_name.indexOf('邮政') !== -1) {
										expname.moble = ''
										expname.imgurl = require('../../assets/images/邮政快递logo@2x.png')
									
									}
									if(expname.exp_name.indexOf('德邦') !== -1) {
										expname.moble = ''
										expname.imgurl = require('../../assets/images/德邦快递logo2@2x.png')
									
									}
									if(expname.exp_name.indexOf('优速') !== -1) {
										expname.moble = ''
										expname.imgurl = require('../../assets/images/优速快递logo@2x.png')
										
									}
        this.$router.push({
									name: 'OrderDetail',
									params: {
										orderInfo: '',
										sender: sender,
										goods: goods,
										receiver: receiver,
										start_date: item['CREATE_DATE'],
										end_date: item['CREATE_DATE'],
										type: expressType,
										userid: sessionStorage.userid,
										logistic_code: '',
										order_id:item['SN'],
										expname: expname,
										productname:item['TITLE'],
										time:item['CREATE_DATE']
									}
								})
      } else {
        this.$router.push({
          path: "/QueryResult",
          query: {
            deliveryCrop: item.DELIVERY_CORP,
            phone: item.PHONE,
            deliveryCropCode: item.DELIVERY_CORP_CODE,
            kddh: item.TRACKING_NO,
            back: 2
          }
        });
      }
    },
    RiQi: function(dataTime) {
      var now = new Date(dataTime);
      var year = now.getFullYear();
      var month =
        (now.getMonth() + 1 )< 10 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1);
      var date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      var hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
      var minute =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      var second =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        "-" +
        hour +
        "-" +
        minute +
        "-" +
        second
      );
    },
    // sfcx(){
    //     let a =this.jjlist.length + this.sjlist.length;
    //     console.log(a)
    //     if(a > 0){
    //        this.ysj = true;
    //         this.wsj = false;
    //     }else{
    //          this.ysj = false;
    //         this.wsj = true;
    //     }
    // }
  },
  created() {
    this.memberId =window.sessionStorage.getItem("userid");
      Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
	});
		setTimeout(()=>{
		Indicator.close()
	},5000)
    this.memberId = window.sessionStorage.getItem("userid");
     this.getData();
     this.getDatat();
}
}
</script>

<style scoped>
.myexpress > ul:last-child {
  margin-bottom: 1rem;
}
.delivery_wrap {
  margin-bottom: 1rem;
}
.mint-header {
  height: 1.28rem;
  background-color: #ffffff;
  padding-top: 0.29rem;
}
.mint-header >>> .mint-header-title {
  font-size: 0.4rem;
  color: #333333;
}
.hearder_bottom {
  height: 0.2rem;
  background-color: #f1f3f6;
}
.search {
  height: 1rem;
  background-color: #f1f3f6;
}
.kd-li {
  width: 100%;
  height: 1rem;
}
.kd-li div {
  float: left;
  height: 100%;
}
.kd-left {
  width: 15%;
}
.kd-mid {
  width: 55%;
}
.kd-mid div {
  width: 100%;
  height: 50%;
  line-height: 0.5rem;
}
.kd-mid div span {
  float: left;
  margin-left: 0.1rem;
}
.kd-right {
  width: 30%;
  padding-right: 0.25rem;
}
.kd-right span {
  width: 100%;
  height: 50%;
  display: block;
  text-align: right;
  line-height: 0.5rem;
}
.queryEmails {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
.bgimag {
  background-color: #ffffff;
  width: 100%;
  height: 9.8rem;
}
.company_icon1 {
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.company_icon2 {
  height: 1rem;
  width: 2rem;
  position: absolute;
  top: 62%;
  left: 55%;
  font-size: 14px;
  color: #999;
  transform: translate(-50%, -50%);
}
</style>


