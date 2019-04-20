<template>
    <div class="reapply-result">
         <towtop :name="titlename"/>
         <div class="main">
             <div class="infoImg"></div>
             <div class="infoTitle">你的申请已提交</div>
             <div class="infoText">请耐心等待系统审核是否符合在线申请补办身份证要求，<br/>
如果符合要求，请在线完成支付申请，如不符合要求，<br/>
请至户口所在派出所申请补办身份证。<br/>
                </div>
         </div>
         <mybutton :btnData="btnData" />
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
						text:'立即支付',
						disabled: true,
						isSure: true,
					}
				],
        }
    },
    components: {
        towtop,
        mybutton
    },
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
            width: 3.78rem;
            height: 2.92rem;
            background-image: url("../../../../assets/images/reapply-audit@2x.png");
            @media (-webkit-min-device-pixel-ratio: 3),
            (min-device-pixel-ratio: 3) {
            background-image: url("../../../../assets/images/reapply-audit@3x.png");
            }
            background-size: 3.78rem auto;
            background-repeat: no-repeat;
            margin: 0 auto 0.86rem;
        }
        .infoTitle{
            font-size: 0.34rem;
            color: #2D7FFC;
            font-weight:bold;
            line-height: 0.6rem;
        }
        .infoText{
            font-size: 0.24rem;
            color: #999999;
            text-align: center;
            line-height: 0.4rem;
            width: 6rem;
            margin: auto;
        }
    }
    button[disabled]{
        background: #CFCFCF;
        box-shadow: 0 0.1rem 0.3rem 0 rgba(159,159,159,0.50);
        border-radius: 0.5rem;
    }
}
</style>


