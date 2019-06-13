<template>
    <div class="irex_wrap">
        <mt-header title="录入快递单号">
           <router-link to="/MyExpress" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="hearder_bottom"></div>
        <!-- <mt-field label="物品信息" class="lr-ys" v-model="wpxx"></mt-field> -->
        <mt-field label="快递单号" class="lr-ys" placeholder="请输入快递单号" type="email" v-model="kddh"><img src="../../assets/images/qrcode.png" class="qr_icon" @click="saomiao()"  width="16" height="16"/></mt-field>
        <mt-field label="快递费用" class="lr-ys" placeholder="请输入快递费用" type="number" v-model="kdfy"></mt-field>
        <mt-field label="快递公司" class="lr-ys" v-model="kdgs"></mt-field>
        <mt-field label="快递状态" class="lr-ys" v-model="kdzt"></mt-field>
        <div class="login_sure">
        <mt-button class="search_button" type="primary" @click="submit()">录入</mt-button>
        </div>
         <mt-popup 
         class="cancel_success"
         v-model="popupVisible"
         position="top"
         >
         <div style="text-align:center;margin-bottom:0.2rem;">
             <img src="../../assets/images/cancle_success.png" style="width:1.2rem;height:1.2rem;" alt="">
         </div>
         <p style="text-align:center;">录入快递单号成功！</p>
        </mt-popup>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Popup } from 'mint-ui';
export default {
 
    data(){
        return {
         yhm:"",
         wpxx:"",
         kdgs:"", 
         kdzt:"",
         kddh:"",
         kdfy:"",
         kdbm:"",
         id:"",
         sn:"",
         memberId: "",
         popupVisible:false,
        }
    },
    methods:{
        saomiao(){
					this.$CallModule("scan","二维码扫描");
        },
        ResideCode(str){
            let a = str.replace(/\s/g,"");
			this.kddh = a;
        },
        pageCheck(){
            let isContinue = true;
            if(this.kddh == ''){
            Toast({
            message: '快递单号不能为空',
            duration: 1000
            });
            isContinue = false;
            return false;
            }

            var deliveryNoReg = /^[0-9a-zA-Z]*$/g;
            if(!deliveryNoReg.test(this.kddh)){
            Toast({
            message: '请输入正确的快递单号',
            duration: 1000
            });
            isContinue = false;
            return false;
            }

            if (!isContinue) return false;
            if(this.kdfy == ''){
            Toast({
            message: '快递费用不能为空',
            duration: 1000
            });
            isContinue = false;
            return false;
            }
            return true;
            },
     submit(){
         console.log()
         if(this.pageCheck()){
            let obj ={
                        txnCommCom: {
                    tStsTraceId: "110567890",
                    txnIttChnlId: 'C0011234567890987654321',
                    txnIttChnlCgyCode: 'AC02C001'
                    },
                    txnBodyCom: {
                    logistic_code: this.kddh,
                    }
            };
            console.log(obj)
            this.$ajaxRequest("post", "/gwlp/logistic/recognition", obj)
            .then(response =>{
            console.log(response)
            // let data = JSON.stringify(response.data)
			// let cent =JSON.parse(data)
            let a = response.shipper_list;
            let arr = [];
            a.forEach((item,index) => {
                let x =a[index]['shipper_code'];
                let d = this.kdbm;
                let e = x.indexOf(d);
                arr.push(e);
            })
            let le = 0;
            let long = arr.length;
            for(let i = 0;i < arr.length;i++){
                if(arr[i] == -1){
                    le++
                }
            } 
            if( le == long){
               this.cancleOrderf()
            }else{
                this.cancleOrder()
            }
            })
            .catch(error =>{
            console.log(error);
            })
         }
    },
     cancleOrder(){
          MessageBox.confirm('确认要录入快递单号','').then(action =>{
              if(action == 'confirm'){
                  this.getData();
                 
              }
          }).catch(err => {
              if(err == 'cancel'){
                  console.log('取消')
              }
          })
      },
       cancleOrderf(){
          MessageBox.confirm('您输入的快递单号有误是否要录入快递单号','').then(action =>{
              if(action == 'confirm'){
                  this.getData();
                  
              }
          }).catch(err => {
              if(err == 'cancel'){
                  console.log('取消')
              }
          })
      },
     getData(){
        let obj ={
        txnCommCom: {
          tStsTraceId: "110567890",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
       txnBodyCom: {
          memberId: this.memberId,
          //memberId:"9640a1171409437ebbff3ab22cb07d08",
          id:this.id,
        freight:this.kdfy,
        logistic_code:this.kddh,
        shipper_code:this.kdbm,
        order_id:this.sn,
        }
        };
        console.log(obj);
        this.$ajaxRequest("post", "/gwlp/logistic/pushlogisticode", obj)
        .then(response =>{
        	// let data = JSON.stringify(response.data)
			// let cent =JSON.parse(data)
        console.log(response.result_code,9999999);
        if(response.result_code=='200'){
            this.popupVisible = true;
        	this.$router.push({path:'/myexpress'});
        }else{
        	Toast({
            message:response.reason,
            duration: 1000
            });
        }
        
        })
        .catch(error =>{
        console.log(error);
    })
    }//录入快递单号
    },
     mounted:function(){
   this.memberId =window.sessionStorage.getItem("userid");
    window.ResideCode = this.ResideCode;
    let a = this.$router.currentRoute.query;
    this.kdgs = a.deliveryCrop ||'';
    this.wpxx = a.title||'';
    this.kdzt = a.status||'';
    this.yhm = a.consingee||'';
    this.id = a.id||'';
    this.kdbm = a.kdbm||'';
    this.sn = a.sn||'';
    console.log(a)
}
}
</script>

<style scoped>
.irex_wrap{
    background-color: #ffffff;
}
.delivery_wrap{
    margin-bottom:1rem;
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
.hearder_bottom{
    height:0.2rem;
    background-color: #F1F3F6;
}
.login_sure{
    height:2.5rem;
    position: relative;
}
.login_sure .search_button{
    height:0.9rem;
    width:6rem;
    border-radius: 0.45rem;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-3rem;
    margin-top:-0.45rem;
}
.lr-ys{
    border-bottom:0.02rem solid #F6F6F6;
    margin:0.2rem;
}
</style>


