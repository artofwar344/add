<template>
  <div class="hello">
    <!-- 这里是展示数据中的 -->
    <!-- 头部的 -->
    <mt-header title="选择公司">
        <router-link to="/QueryEmail" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>


    <div class="div_line"></div>
    
    <!-- 中部内容 -->
   <div class="address_list">
            <div class="select_express" v-for="(item,index) in my_address_list" @click="xzgs(item)">
                <!-- <div class="dot">
                    <img slot="icon" :src="item.tp" width="39" height="39">
                </div> -->
                <div class="dizhi" >
                    <div class="addressDetail">
                        <div class="tit">{{item.shipper_name}}</div>
                        <!-- <div class="cont">{{item.phone}}</div> -->
                    </div>
                    <div class="addressUpdate" >
                        <img slot="icon" src="../../assets/images/nextinto.png" width="6" height="10">
                    </div>
                </div>
            </div>
    </div>
    

    <!-- 底部的 -->
   <div class="footer"></div>
       
  </div>
</template>

<script>
export default {
  name: 'SendEmail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      kddh:'',
       my_address_list:[
               {
               shipper_code: "YZPY", 
               shipper_name: "邮政快递"
               },
               {
               shipper_code: "HHTT", 
               shipper_name: "天天快递"
               },
               {
               shipper_code: "HTKY", 
               shipper_name: "百世快递"
               },
               {
               shipper_code: "UC", 
               shipper_name: "优速快递"
               },
               {
               shipper_code: "DBL", 
               shipper_name: "德邦快递"
               },
               {
               shipper_code: "SF", 
               shipper_name: "顺丰速运"
               },
               {
               shipper_code: "ZTO", 
               shipper_name: "中通快递"
               },
               {
               shipper_code: "STO", 
               shipper_name: "申通快递"
               },
               {
               shipper_code: "YTO", 
               shipper_name: "圆通速递"
               },
               {
               shipper_code: "YD", 
               shipper_name: "韵达速递"
               },
               {
               shipper_code: "JD", 
               shipper_name: "京东快递"
               },
               {
               shipper_code: "ZJS", 
               shipper_name: "宅急送"
               },
               {
               shipper_code: "TNT", 
               shipper_name: "TNT快递"
               },
               {
               shipper_code: "UPS", 
               shipper_name: "UPS"
               },
               {
               shipper_code: "DHL", 
               shipper_name: "DHL"
               },
               {
               shipper_code: "FEDEX", 
               shipper_name: "FEDEX联邦（国内件）"
               },
               {
               shipper_code: "FEDEX_GJ", 
               shipper_name: "FEDEX联邦（国际件）"
               },
            ],
            tplist:[]
    }
  },
  methods:{
      xzgs(item){
          this.$router.push({path:"/QueryEmail",query:{deliveryCrop:item.shipper_name,deliveryCropCode:item.shipper_code,kddh:this.kddh}})
      },
  },
  mounted:function(){
      let a = this.$router.currentRoute.query;
      this.kddh = a.kddh;
      }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped> 
.hello{
	text-align: left;
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

    .address_list{
        background-color: #ffffff;
    }

    .address_list .select_express{
        height:1rem;
  /*      line-height: 1.5rem;*/
        border-bottom: 0.02rem solid #EEEEEE;
        margin:0 0.36rem;
        padding:0;
        padding-top:0.08rem;
    }
    .address_list .dot{
        float: left;
        width:0%;
        padding-top:0.4rem;
    }
    .address_list .dizhi{
        width:85%;
        float: left;
        vertical-align: middle;
        margin-top: 0.06rem;
    }
    .dizhi .addressDetail{
        float: left;
    }

    .select_express .addressDetail{
        float: left;
    }

    .addressDetail .tit{
        font-size: 0.3rem;
        font-weight: 600; 
        line-height: 0.74rem;
    }
    .addressDetail .cont{
        color:#666666;
        font-size: 0.24rem;
    }

    .select_express .addressUpdate{
        float: right;
        margin-top:0.36rem;
        position: relative;
        right: -18%;
    }
</style>