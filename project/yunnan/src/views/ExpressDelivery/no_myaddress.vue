<template>
    <div class="address_wrap">
        <mt-header title="我的地址">
           <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <img src="../../assets/images/no_address.png" width="120" height="145" alt="">
            <p>暂无地址信息</p>
        </div>
        <div class="addAddress">
            <mt-button class="add_button" @click="addAddress()" type="primary">新增地址</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        addAddress(){
            this.$router.push({path:'/NewAddress'})
        }
    }
}
</script>

<style scoped>
.address_wrap{
    height:100%;
    background-color:#F1F3F6;
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
.content{
    text-align: center;
}
.content img{
    margin-top:35%;
    margin-bottom:15%;
}
.content p{
    margin-bottom:10%;
}
.addAddress{
    height:2.5rem;
    position: relative;
}
.addAddress .add_button{
    height:0.9rem;
    width:6rem;
    border-radius: 0.45rem;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-3rem;
    margin-top:-0.45rem;
}
</style>


