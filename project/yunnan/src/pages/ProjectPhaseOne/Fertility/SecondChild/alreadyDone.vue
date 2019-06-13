<template>
    <div>
        <towtop :name="titlename"/>
        <div class="main">
            <p>尊敬的用户：</p>
            <p>您好！</p>
            <p class="normalText">办理该事项夫妻双方仅一方办理即可，您的配偶已办理。</p>
        </div>
        <button class="commonBtn" @click="home">返回</button>
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
export default {
    data(){
        return{
            titlename: "贰孩生育服务登记",
        }
    },
    components:{
        towtop
    },
    methods:{
        home(){
            this.$router.push('indexlist')
        }
    }
}
</script>
<style lang="less" scoped>
.main{
    background-color: #fff;
    padding: 0.4rem 0.36rem 0.6rem;

    p{
        font-size: 0.3rem;
        color: #333333;
        line-height: 0.56rem;
        text-align: left;

        &.normalText{
            line-height: normal;
            text-indent:2em;
        }

        &:nth-child(2){
            margin-bottom: 0.2rem;
        }
    }
}
</style>
