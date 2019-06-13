<template>
    <div class="false_wrap">
        <mt-header title="订单详情">
            <router-link to="/delivery" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="hearder_bottom"></div>
        <div class="false_order">
        <div style="text-align:center;hiehgt:0.9rem;padding-bottom:0.5rem;">
            <img src="../../assets/images/false_order.png" style="width:0.9rem;height:0.9rem;" alt="">
         </div>
         <p class="false_tit">下单失败</p>
         <p class="false_cont">您的预约快递下单失败，请重新下单</p>
        </div>
        <mt-button class="order_button" type="primary">重新下单</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
       
    }
}
</script>

<style scoped>
.false_order{
    background-color:#ffffff;
    height:5.52rem;
    padding-top:0.5rem;
}
.false_tit{
    font-family: "PingFangSC-Medium";
    font-size:0.32rem;
    color:#FA6366;
    text-align: center;
    margin-bottom:0.1rem;
}
.false_cont{
    font-size:0.28rem;
    color:#999999;
    font-family:'PingFangSC-Regular';
    text-align: center;
    line-height:0.4rem;
    margin-bottom:0.78rem;
}
.mint-header{
    height:1.28rem;
    background-color: #ffffff;
    padding-top:0.29rem;
}
.mint-header >>> .mint-header-title{
    font-size:0.34rem;
    color:#333333 ;
}
.hearder_bottom{
    height:0.2rem;
    background-color: #F1F3F6;
}
.order_button{
    position:absolute;
    height:0.9rem;
    width:6rem;
    border-radius: 0.45rem;
    left:0.2rem;
    top:45%;
}
</style>


