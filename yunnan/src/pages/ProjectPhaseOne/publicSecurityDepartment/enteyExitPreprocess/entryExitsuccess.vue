<style lang="less" scoped>
.successWrap{
    .content{
        img{
            width: 4rem;
            margin-top: 1.48rem;
            margin-bottom: .62rem;
        }
        p{
            font-size: .28rem;
            color: #2D7FFC;
            line-height: .56rem;
        }
        .title{
            font-size: .34rem;
            font-weight: bold;
            margin-bottom: .26rem;
        }
    }
    .btnWrap{
        margin-top: 1rem;
        padding: 0 .8rem;
        font-size: .33rem;
        span{
            display: block;
            width: 100%;
            height: .9rem;
            border-radius: 40px;
            line-height: .9rem;
            text-align: center;
            background: #2D7FFC;
            color: white;
        }
    }
}
</style>

<template>
    <div class="successWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <img :src="successUrl" alt="">
            <p class="title">{{msg}}</p>
            <p class="title">{{msgTwo}}</p>
        </div>
        <div class="btnWrap">
            <span @click="goto">返回</span>
        </div>
    </div>
</template>

<script>
import towtop from '@/components/HederTwo'
import success from '@/assets/images/entryExit/Group2@2x.png'
export default {
    data(){
        return{
            titlename: '出入境证件预受理',
            successUrl: success,
            code: '',
            params: this.$route.query,
            msg: "您的预受理已提交成功",
            msgTwo: "请您五分钟后在“我的办事”查询审批结果"
        }
    },
    components:{
        towtop
    },
    created(){
            
    }, 
    mounted() {
        this.code = this.$route.params.final_Code;
    },
    methods:{
        goto(){
            // 调用原生关闭视窗
            this.$CallModule('close','关闭')
        }
    }
}
</script>
