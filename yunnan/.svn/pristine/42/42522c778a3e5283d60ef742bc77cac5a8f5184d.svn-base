<template>
    <div class="reapply-result">
         <towtop :name="titlename"/>
         <div class="main">
             <div class="infoImg"></div>
             <div class="infoTitle">申请完成</div>
             <div class="infoText">您的申请已完成，请等待短信通知领取证件。如超时未收到短信，请拨打0871-63054221进行查询。
                </div>
         </div>
         <mybutton :btnData="btnData" @click="gotoApp()"/>
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
export default {
    data(){
        return{
            titlename:"申请补办身份证",
            btnData:[
					{
						text:'确定',
						disabled: false,
						isSure: true,
					}
				],
        }
    },
    components: {
        towtop,
        mybutton
    },
    methods:{
        gotoApp(){
        this.$CallModule("close")
        }
    }
}
</script>
<style lang="less" scoped>
.reapply-result{
    .main{
        background: #fff;
        box-shadow: 0 0.1rem 0.3rem 0 rgba(0,0,0,0.08);
        border-radius: 0.2rem;
        padding:1.12rem 0.3rem;
        margin-bottom: 1rem;

        .infoImg{
            width: 3.94rem;
            height: 3.04rem;
            background-image: url("../../../../assets/images/reapply-success@2x.png");
            @media (-webkit-min-device-pixel-ratio: 3),
            (min-device-pixel-ratio: 3) {
            background-image: url("../../../../assets/images/reapply-success@3x.png");
            }
            background-size: 3.94rem auto;
            background-repeat: no-repeat;
            margin: 0 auto 0.86rem;
        }
        .infoTitle{
            font-size: 0.34rem;
            color: #08C173;
            font-weight:bold;
            line-height: 0.6rem;
        }
        .infoText{
            font-size: 0.24rem;
            color: #999999;
            text-align: left;
            line-height: 0.4rem;
            width:4.32rem;
            margin:auto
        }
    }
}
</style>


