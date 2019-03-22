<template>
    <div>
        <div class="banner-bg">
            <van-row>
                <!--<van-col span="24" class="banner-img-bg">-->
                <van-col span="24" class="note banner-img-bg" :style="note">
                    <img src="../../pages/page3/img/vip_card_bg@2x.png" alt="" width="100%">
                    <div class="banner-img-bg-content">
                        <img src="../../pages/page3/img/play_btn@3x.png" alt="" width="40px" height="40px">
                        <div class="banner-img-bg-content-user">
                            <span class="banner-img-bg-content-user-name">小青蛙frog</span>
                            <div class="banner-img-bg-content-user-title">VIP会员：暂未开通</div>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>
        <van-row>
            <van-col span="24" class="user-card-title">
                <span>开通中读VIP会员卡</span>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" class="user-card-price-content" >
                <div class="user-card-price"  :class="flag == 1 ?'user-card-price-bg' : (flag == 1 ? 'user-card-price-bg':'user-card-price-bg1')" @click="payPrice1()">
                    <div class="user-card-price-name-top">月卡会员</div>
                    <div class="user-card-price-name-btm" >{{this.price1}}/月</div>
                </div>
                <div class="user-card-price"  :class="flag == 1 ?'user-card-price-bg1' : (flag == -1 ? 'user-card-price-bg':'user-card-price-bg1')" @click="payPrice2()">
                    <div class="user-card-price-name-top">年卡会员</div>
                    <div class="user-card-price-name-btm">{{this.price2}}/月</div>
                </div>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" class="user-card-title-vip">
                <span>中读VIP会员特权详情</span>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" class="user-card-title-voice">
                <span>365个声音，每段声音为10分钟短音频</span>
                <div>包括以下内容</div>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" class="user-card-auth">
                <div class="user-card-auth-title">
                    <img src="../../pages/page3/img/classify_01@2x.png" alt="" width="133">
                </div>
                <div class="user-card-auth-content">
                    《三联生活周刊》封面故事每期推出一个封面大使，由各个领域有号召力和影响力，并和当期封面故事主题最为契合的明星大咖和知识领袖担任，十分钟讲解当期封面话题，并提出自己见解，分享自己的一段相关往事。让你在上下班路上、健身房内、饭桌上，和大咖“锵锵二人行”，既能快速吃透当期封面主题要点，又能获得更多跨界学识。
                </div>
                <div class="user-card-auth-img">
                    <img src="../../pages/page3/img/group.png" alt="" width="100%">
                </div>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" class="user-card-auth">
                <div class="user-card-auth-title">
                    <img src="../../pages/page3/img/classify_02@2x.png" alt="" width="133">
                </div>
                <div class="user-card-auth-content">
                    《三联生活周刊》封面故事每期推出一个封面大使，由各个领域有号召力和影响力，并和当期封面故事主题最为契合的明星大咖和知识领袖担任，十分钟讲解当期封面话题，并提出自己见解，分享自己的一段相关往事。让你在上下班路上、健身房内、饭桌上，和大咖“锵锵二人行”，既能快速吃透当期封面主题要点，又能获得更多跨界学识。
                </div>
                <div class="user-card-auth-img">
                    <img src="../../pages/page3/img/cover_book@2x.png" alt="" width="100%">
                </div>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" class="user-card-auth">
                <div class="user-card-auth-title">
                    <img src="../../pages/page3/img/classify_03@2x.png" alt="" width="133">
                </div>
                <div class="user-card-auth-content">
                    《三联生活周刊》封面故事每期推出一个封面大使，由各个领域有号召力和影响力，并和当期封面故事主题最为契合的明星大咖和知识领袖担任，十分钟讲解当期封面话题，并提出自己见解，分享自己的一段相关往事。让你在上下班路上、健身房内、饭桌上，和大咖“锵锵二人行”，既能快速吃透当期封面主题要点，又能获得更多跨界学识。
                </div>
                <div class="user-card-auth-img">
                    <img src="../../pages/page3/img/small_class3.png" alt="" width="100%">
                </div>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" class="user-card-auth">
                <div class="user-card-auth-title">
                    <img src="../../pages/page3/img/classify_04@2x.png" alt="" width="133">
                </div>
                <div class="user-card-auth-content">
                    《三联生活周刊》封面故事每期推出一个封面大使，由各个领域有号召力和影响力，并和当期封面故事主题最为契合的明星大咖和知识领袖担任，十分钟讲解当期封面话题，并提出自己见解，分享自己的一段相关往事。让你在上下班路上、健身房内、饭桌上，和大咖“锵锵二人行”，既能快速吃透当期封面主题要点，又能获得更多跨界学识。
                </div>
                <div class="user-card-auth-img">
                    <img src="../../pages/page3/img/small_class@2x.png" alt="" width="100%">
                </div>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="24" class="user-card-auth">
                <div class="user-card-auth-title">
                    <img src="../../pages/page3/img/classify_05@2x.png" alt="" width="133">
                </div>
                <div class="user-card-auth-content">
                    《三联生活周刊》封面故事每期推出一个封面大使，由各个领域有号召力和影响力，并和当期封面故事主题最为契合的明星大咖和知识领袖担任，十分钟讲解当期封面话题，并提出自己见解，分享自己的一段相关往事。让你在上下班路上、健身房内、饭桌上，和大咖“锵锵二人行”，既能快速吃透当期封面主题要点，又能获得更多跨界学识。
                </div>
            </van-col>
        </van-row>
        <div class="footer-content">
            <van-row style="margin-top: .6rem;">
                <van-col span="12" plain type="danger">
                    <van-button plain type="danger"
                                style="width: 88%;color: #f2755c;border-color: #f2755c;font-size: 16px;">
                        总价：{{this.priceBtn}}元
                    </van-button>
                </van-col>
                <van-col span="12" type="danger">
                    <van-button type="danger"
                                style="width: 88%;background-color: #f2755c;border-color: #f2755c;font-size: 16px;">
                        确认支付
                    </van-button>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShareCard",
        data() {
            return {
                price1: 98,
                price2: 388,
                priceBtn: 98,
                flag:1,
                note:{
                    backgroundImage:"url("+require("../../pages/page3/img/background_black@2x.png")+")",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"100%",
                    height:"103px",
                    padding:"1.5% 4.3%"
                }
            }
        },
        mounted(){
          this.pageUrl()
        },
        methods: {
            pageUrl(){
                this.$http.post('h5/ke/difftime.do?keId=44', {
                    baseURL:'http://mdev.lifeweek.com.cn/'
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error, '获取失败');
                    })
            },
            payPrice1() {
                this.flag = 1;
                this.priceBtn = this.price1
            },
            payPrice2() {
                this.flag = -1;
                this.priceBtn = this.price2
            },
            ios(){
                // window.location.href = 'https://zdimg.lifeweek.com.cn/'
                // window.location.href = 'https://itunes.apple.com/cn/app//id509436231?mt=8'
                window.location.href= 'https://zdimg.lifeweek.com.cn/mobile/jumpIOS.html'
            },
            Android(){
                var url = 'read://com.zd/listen?id=35297'
                window.location.href = url
            },
        }
    }
</script>

<style scoped>
    .banner-bg {
        background: url("../../pages/img/bg2.png") no-repeat;
        background-size: 100%;
        height: 103px;
        padding: 1.5% 4.3%;
    }

    .banner-img-bg {
        position: relative;
    }

    .banner-img-bg-content {
        position: absolute;
        left: 23%;
        top: 43%;
        transform: translate(-23%, -43%);
        display: flex;
        flex-direction: row;
    }

    .banner-img-bg-content-user {
        margin-left: 1rem;
    }

    .banner-img-bg-content-user-name {
        color: #985C33;
        font-size: 14px;
    }

    .banner-img-bg-content-user-title {
        font-size: 12px;
        color: #222;
        margin-top: .3em;
        letter-spacing: 1px;
    }

    .user-card-title {
        text-align: center;
        margin-top: .5em;
    }

    .user-card-title-vip {
        text-align: center;
        margin-top: 2rem;
        font-size: 18px;
        color: #222;
    }

    .user-card-title-voice {
        font-size: 16px;
        margin-top: 1rem;
        padding-left: 2rem;
    }

    .user-card-auth {
        margin-top: 2rem;
        padding: 0 1rem;
    }

    .user-card-auth-content {
        margin-top: 1rem;
        line-height: 1.5;
    }

    .user-card-auth-img {
        margin-top: 1rem;
    }

    .user-card-price-content {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        justify-content: center;
    }

    .user-card-price {
        background: #FFFFFF;
        border: 1px solid #D5AA7B;
        box-shadow: 0 0 6px 0 rgba(152, 92, 51, 0.20);
        width: 106px;
        height: 148px;
        text-align: center;
    }

    .user-card-price:nth-last-of-type(1) {
        margin-left: .8rem;
    }

    .user-card-price-name-top {
        margin-top: 2rem;
    }

    .user-card-price-name-btm {
        color: #ff2516;
        margin-top: 1rem;
    }

    .user-card-price-bg {
        background-image: linear-gradient(-127deg, #FCEED9 0%, #F0CFAF 100%);
        color: #ff2516;
        font-size: 18px;
    }

    .user-card-price-bg1{
        background-color: #fff;
    }

    .footer-content {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #ffffff;
        height: 4rem;
        text-align: center;
    }

    .footerBtn {
        width: 90%;
        border-radius: 8px;
        margin-top: .6rem;
        background-color: #f2755c;
        line-height: 0;
    }

</style>
