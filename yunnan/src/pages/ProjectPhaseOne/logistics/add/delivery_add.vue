<template>
    <div class='delivery_add'>
        <div class="TitleTo">
			<h1>申请材料邮递</h1>
		</div>
		 <div class="Top" v-if='this.state == 1'>
			<div class="example-formgroup">
                <div tag="div" class="delAddBox" @click='sendAddress'>
                    <div class="delAddIco blue ">寄</div>
                  	<img src="../../../../assets/images/nextinto.png" alt=""  style='float: right;transform: translateY(.34rem);height: .36rem;'/>
                    <div v-if='send.postname' style='width: 95%;'>
                        <span>{{send.postname}} {{send.tel}}</span>
                        <p>{{send.prov_code}} {{send.city_code}}{{send.cnty_code}}{{send.address}}</p>
                    </div>
                      <div v-else style='line-height: 1.1rem;color: #999;'>请选择寄件地址</div>
                     
                </div>
                <div class="delAddBox delAddBoxColor" >
                    <div class="delAddIco green">收</div>
                    <div>
                        <span>{{accept.postname}}{{accept.tel}}</span> 
                        <p>{{accept.prov_code}} {{accept.city_code}}{{accept.cnty_code}}{{accept.address}}</p>
                    </div>
                </div>
				<!-- <FormGroup v-on:accept-submit="submitEvent" title-position="left"> -->
				   <div @click="gotoexpre"><Field desc-class="richText" disabled type="text" label="物流公司" :value="memap" :placeholder="wuliuInfo.exp_name?wuliuInfo.exp_name:'请选择快递公司'" ></Field></div>
					<Field desc-class="richText" disabled type="text" label="参考价格" :value="money" :placeholder="wuliuInfo.first_fee?wuliuInfo.first_fee+'元':'0元'"></Field>
                     <Field readonly label="取件日期" disableclear type="text" placeholder="请选择" :value="confirmValDate" @click.native="open('picker2')"></Field>
                     
                    <Datetime
                        ref="picker2"
                        type="date"
                        v-model="valueDate"
                        
                        :start-date='startDate'
                        :end-date='endDate'
                        @confirm="handleChangeConfirmDate">
                    </Datetime>
	
                        <Field readonly label="预约取件时间(开始)" disableclear type="text" 
                            placeholder="请选择" :value="confirmValTime" @click.native="open('picker3')">   
                        </Field>
                        <Datetime
                            ref="picker3"
                            type="time"
                            v-model="valueTime"
                            @confirm="handleChangeConfirmTime">
                        </Datetime>
                        <Field readonly label="预约取件时间(结束)" disableclear type="text" 
                            placeholder="请选择" :value="confirmValTime1" @click.native="open('picker31')">   
                        </Field>
                        <Datetime
                            ref="picker31"
                            type="time"
                            v-model="valueTime1"
                            @confirm="handleChangeConfirmTime1">
                        </Datetime>
                 
				<!-- </FormGroup> -->
			</div>
		</div>
		
		
<!--		状态为2的时候反显-->
		 <div class="Top" v-else-if='this.state !=null'>
			<div class="example-formgroup">
                <div tag="div" class="delAddBox delAddBoxColor">
                    <div class="delAddIco blue">寄</div>
                     <div v-if='send.postname'>
                        <span>{{send.postname}} {{send.tel}}</span>
                        <p>{{send.prov_code}} {{send.city_code}}{{send.cnty_code}}{{send.address}}</p>
                    </div>
                      <div v-else style='line-height: 1.1rem;color: #999;'>请选择收件地址</div>
                </div>
                <div class="delAddBox delAddBoxColor">
                    <div class="delAddIco green">收</div>
                    <div>
                          <span>{{accept.postname}}{{accept.tel}}</span> 
                        <p>{{accept.prov_code}} {{accept.city_code}}{{accept.cnty_code}}{{accept.address}}</p>
                    </div>
                </div>
				<!-- <FormGroup v-on:accept-submit="submitEvent" title-position="left"> -->
				    <div ><Field desc-class="richText" disabled type="text" label="物流公司" :value="memap" :placeholder="wuliuInfo.exp_name?wuliuInfo.exp_name:'无信息'" ></Field></div>
					<Field desc-class="richText" disabled type="text" label="物流价格" :value="money" :placeholder="wuliuInfo.first_fee?wuliuInfo.first_fee+'元':'无信息'"></Field>
                     <Field readonly label="预约取件日期" disableclear type="text" :placeholder="this.time" ></Field>
                     
<!--               
	
                        <Field readonly label="预约取件时间(开始)" disableclear type="text" 
                            placeholder="请选择" :value="confirmValTime">   
                        </Field>

                        <Field readonly label="预约取件时间(结束)" disableclear type="text" 
                            placeholder="请选择" :value="confirmValTime1" >   
                        </Field>-->

                 
				<!-- </FormGroup> -->
			</div>
		</div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
function dateFormat(time, format) {
	if(time.getHours()>18){
		new Date(time.setTime(time.getTime()+24*60*60*1000))
	}
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
export default {
    data(){
        return{
            valueDate: this.time.date|| dateFormat(new Date(), 'yyyy-MM-dd'),
            confirmValDate:'',
            startDate:this.minDate(),
            endDate:new Date(2030, 10, 10),
            memap:'',
            expre:'',
            money:'',
            timeS:'',
            timeM:'',
            valueTime: this.time.start_time||this.formatHours(),
            confirmValTime:'',
            errorTime:false,
            valueTime1: this.time.end_time||'19:00',
            confirmValTime1:'',
            errorTime1:false,
            
        }
    },
    props:['state','send','metarial','accept','wuliuInfo','time']
    ,
    created(){
        this.expre = '1'
        console.log(this.state,6666)
    },
    methods:{
    	minDate(){
    		let day =  new Date()
    		if(day.getHours()>18){
    			console.log(111)
    			return new Date(day.setTime(day.getTime()+24*60*60*1000))
    		}else{
    			return day
    		}
    	}
    	,
    	formatHours(){
				let formatHours =new Date()
					let getMinutes=formatHours.getMinutes().toString()
					if(getMinutes.length==1){
						getMinutes = "0"+getMinutes
					}
					if(formatHours.getHours()>18){
						return  "10:00"
					}else{
						
						return formatHours.getHours()+":"+getMinutes
					}
				},
    	sendAddress(){
    	   this.$store._modules.root.state.$expressdelivery.remark = 'matter'
           this.$router.push('/myaddress')
    	},
        gotoexpre(){
        	
        	if(this.accept.prov_code&&this.send.prov_code){
        		let details=[{
            "goods": {
                "product_name": '文件',
                "weight": "1"
            },
            "order_code": "27681701",
            "receiver": {
                "address": this.accept.address,
                "city_name": this.accept.city_code,
                "exp_area_name": this.accept.cnty_code,
                "province_name":this.accept.prov_code
            },
            "sender": {
                "address": this.send.address,
                "city_name":this.send.city_code,
                "exp_area_name": this.send.cnty_code,
                "province_name": this.send.prov_code
            }
        }]
            this.$router.push({path:'/ChangeCompany',query:{type:'file',details:details}})
        	}else{
        		Toast({
                    message: "请选择寄件地址",
                    duration: 1000
                });
        	}
        	
        },
        open(picker) {
          
            document.activeElement.blur();
            this.$refs[picker].open();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
        },
        handleChangeConfirmDate(value) {//日期确定值
        
            this.confirmValDate = dateFormat(value, 'yyyy-MM-dd');
            this.$refs.picker2.close()
         	this.$emit('getdate',this.confirmValDate)
        },
        handleChangeConfirmTime(value) {//时间确定值
            this.confirmValTime = value;
          this.$emit('gettime',this.confirmValTime)
        },
        handleChangeConfirmTime1(value) {//时间确定值
            this.confirmValTime1 = value;
            this.$emit('gettimes',this.confirmValTime1)
        }
    },
    mounted(){
    	
        this.confirmValDate = this.valueDate;//日期
        this.confirmValTime = this.valueTime;//时间
        this.confirmValTime1 = this.valueTime1;//时间
    },
     
    
}
</script>
<style lang="less" scoped>
@import url("../style.css");

 .example-datetime_arrowRight{
    display: block;width: 30px;height:30px;
    // background: url(../../../src/common/images/common-datetime.png) center no-repeat;
    background-size: 16px 16px;
  }
  .delivery_add{
  	box-sizing: content-box;
  }
.delAddBox{
    border-bottom:1px solid #ECECEC;
    font-size: .28rem;
    color: #333;
    text-align: left;
    padding: 0 .36rem;
    height: 1rem;
    background: #fff;
    padding-top: .3rem ;
    padding-bottom: .3rem;
    line-height: .32rem;
    .delAddIco{
        width:1rem;
        height:1rem;
        line-height: 1rem;
        text-align: center;
        color: #ffffff;
        font-size: .4rem;
        border-radius: 1rem;
        background: #08C173;
        float: left;
        margin-right:.28rem;
        
    }
    .blue{background: #2D7FFC;}
    span{
    	line-height: .6rem;
    }
    p{
        font-size: .24rem;
        color: #666;
    }
}
.delAddBoxColor{
	color:#999;
	p{
		color:#999
	}
}
</style>
<style>
.delAddBox {
	box-sizing: content-box;
}
	.delivery_add input{
		height: auto !important; 
	}
</style>
