<template>

    <div class="container">
        <div>
            <div v-title v-if="titleName">{{ titleName}}</div>
            <van-row>
                <!--<weChatPay></weChatPay>-->
                <van-col span="24">
                    <img :src="item.topBanner" alt="" class="banner-img">
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <div class="left-price" style="padding-bottom: 5px;">
                        <div class="left-price-money"><span class="left-price-money-small"> ￥<span class="left-price-money-small-all">{{item.price}}.</span>00</span></div>
                        <div class="left-price-right" style="margin-bottom: 5px;">
                            <span class="left-price-right-top">{{this.item.homeLineationMessage}}</span>
                            <span class="left-price-right-btm">￥{{item.price}}.00元</span>
                        </div>
                        <!-- Css add text-decoration:line-through; clear line -->
                    </div>
                </van-col>
                <van-col span="12">
                    <div class="right-entTime" style="padding-bottom: 5px;">
                        <span class="right-entTime-end right-entTime-end-color">距离特价结束仅剩</span>
                        <div class="right-entTime-end " style="margin-bottom: 5px;">
                            <span>{{this.d}}天</span>
                            <span class="right-entTime-end-bg">{{this.hh}}</span> ：<span class="right-entTime-end-bg">{{this.m}}</span>
                            ：<span class="right-entTime-end-bg">{{this.s}}</span>
                        </div>
                    </div>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="24">
                    <div class="book-all">
                        <span class="book-title">{{item.keTitle}}</span>
                        <span class="book-introduce">{{item.keDesc}}</span>
                    </div>
                </van-col>
            </van-row>
            <van-row class="book-content">
                <van-col span="15" class="book-top-line">
                    <div class="book-img-all">
                        <span class="book-img-all-num">{{dataItem.buyedNum}}人已购</span>
                    </div>
                </van-col>
                <van-col span="9" class="book-top-line">
                    <span class="book-img-all-link" @click="listRoute()">影响力榜单 ></span>
                </van-col>
            </van-row>
            <van-row style="margin-bottom: 4rem;">
                <van-col span="24">
                    <img :src='imgItem' v-for="(imgItem,index) in dataItem.centerBanner" :key="index" v-lazy="imgItem"
                         alt="" class="banner-img">
                </van-col>
            </van-row>
        </div>
        <div class="footer-content">
            <van-row v-show="btn1">
                <van-col span="24">
                    <van-button type="warning" class="footerBtn" @click="pay()">
                        <p style="margin: 0;height: 16px;font-size: 16px;">{{item.homeBuyButtonTitle}}</p>
                        <p style="margin: 0;font-size: 8px;">{{item.homeBuyButtonSubheading}}</p>
                    </van-button>
                </van-col>
            </van-row>
            <van-row v-show="btn2" style="margin-top: .6rem;">
                <van-col span="12" plain type="danger">
                    <van-button plain type="danger"
                                style="width: 88%;color: #f2755c;border-color: #f2755c;font-size: 16px;"
                                @click="enterInfo()">
                        {{this.item.homeLeftButton}}
                    </van-button>
                    <!--<van-button plain type="danger"-->
                                <!--style="width: 88%;color: #f2755c;border-color: #f2755c;font-size: 16px;"-->
                                <!--@click="Android()">-->
                            <!--Android跳转-->
                    <!--</van-button>-->
                </van-col>
                <van-col span="12" type="danger">
                    <van-button type="danger"
                                style="width: 88%;background-color: #f2755c;border-color: #f2755c;font-size: 16px;"
                                @click="enterInfos()">{{this.item.homeRightButton}}
                    </van-button>
                  <!--  <van-button type="danger"
                                style="width: 88%;background-color: #f2755c;border-color: #f2755c;font-size: 16px;"
                                @click="ios()">ios跳转
                    </van-button>-->
                </van-col>
            </van-row>
        </div>

        <div class="gotop-box">
            <div class="topIcon" @click="shareMoney()">
                <div style="line-height: 35px;padding-left: 8px;">
                    <img src="../../pages/zhongduPay/img/mony-Icon.png" alt="" class="topIcon-img">
                    <span class="topIcon-ShareMoney">分享赚{{this.dataItem.fenxiaoPriceStr}}元</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    window.onscroll = function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        const goTop = document.querySelector('.gotop-box')

    }
    export default {
        name: 'Page1',
        data() {
            return {
                item: '',
                dataItem: '',
                d: 0, hh: 0, m: 0, s: 0, ms: 0,
                diffTime: 0,
                payItem: '',
                btn1: true,
                btn2: false,
                giftVipDayTime: '',
                giveNum: '',
                gid: {},
                p: '8876',
                k: '31',
                h: '77',
                dataFlag: 1,
                dataFlags: 2,
                keId: '',
                timer:null
            }
        },
        created() {
            /*  去除url后面的 # 号
            const demoPath = location.href.split('#')[0];
            console.log(demoPath,'path');
            */

            /* 初始化模板列表api */
            this.templateList();
        },
        computed: {
            /* 过滤浏览器顶部标题 */
            titleName() {
                if (this.item.name) {
                    return this.item.name
                }
            }
        },
        mounted() {
            // this.countdown();
        },
        methods: {
            /* 模板列表api */
            templateList() {
                const path = this.$route.path + "?p=" + this.p + '&k=' + this.k + '&h=' + this.h
                console.log(path, 'login');

                if (path.indexOf('?') >= -1) {
                    this.$http.get("h5/newvip/indexV1?k=" + this.k + "&p=" + this.p + "&h=" + this.h,).then(res => {
                        console.log(res, 'page1_View model data');
                        this.dataItem = res.data.model;
                        this.keId = this.dataItem.keId;
                        this.item = res.data.model.jpk;
                        if (this.dataItem.userBuyedFlag === 1) {
                            this.btn1 = false;
                            this.btn2 = true;
                        }
                        this.giftVipDayTime = this.item.giftVipDayTime;
                        this.giveNum = this.item.giveNum;
                        this.gopath(this.giftVipDayTime, this.giveNum)
                        this.WXConfig.wxShowMenuOne(res.data.model.jsapiSign, res.data.model.shareUri, res.data.model.selfWxuserName, res.data.model.keShareTitle, res.data.model.keShareDesc)
                        this.countdown(this.keId);
                    })
                        .catch(error => {
                            console.log(error, '获取失败');
                        })
                }
            },
            /*  时间戳接口 */
            countdown: function () {
                this.$http.post('h5/ke/difftime.do?keId='+this.keId, {})
                    .then(res => {
                        this.diffTime = res.data.model;
                        if (this.diffTime) {
                            this.timeEnd(this.diffTime)
                        }
                    })
                    .catch(error => {
                        console.log(error, '获取失败');
                    })

                /*开启倒计时功能*/
                this.timer = setInterval(this.timeEnd, 1000)

            },

            /*  时间戳转换 */
            timeEnd(val) {
                var time_start = new Date().getTime(); //设定当前时间
                var farTime = Math.floor(this.diffTime);
                var lastTime = farTime - time_start;
                // console.log(lastTime,'最后倒计时');

                if (lastTime > 0) {
                    this.d = Math.floor((lastTime / 1000 / 3600) / 24);
                    this.hh = Math.floor((lastTime / 1000 / 3600) % 24);
                    this.m = Math.floor((lastTime / 1000 / 60) % 60);
                    this.s = Math.floor(lastTime / 1000 % 60);
                } else {
                    this.d = 0;
                    this.hh = "00";
                    this.m = "00";
                    this.s = "00";
                    clearInterval(this.timer);
                }
            },

            /*支付传参，实例 开始*/
            gopath(val) {
                this.toPath(val)
            },

            pay() {
                this.$http.get('/h5/wx/kepay.do?keId='+this.keId, {
                    data:{ url:location.href.split('#')[0] }
                })
                    .then(res => {
                        console.log(res);
                        console.log(res.data.resultMsg, 'pay');
                        if (res.status === 200) {
                            this.payItem = res.data.model;
                            this.gid = {
                                giftVipDayTime: this.giftVipDayTime,
                                giveNum: this.giveNum,
                                gopath: this.gopath
                            }
                            this.wxpay.wexinPay(res.data.model, this.gid)
                        }
                    })
                    .catch(error => {
                        console.log(error, '获取失败');
                    })
            },
            Android(){
                var url = 'read://com.zd/listen?id=35297'
                window.location.href = url
            },
            /*支付传参，实例 结束*/

            /*  支付成功收听课程按钮  */
            enterInfo() {
                this.$router.push({path: '/Hi?dataFlag=' + this.dataFlag+'&keId='+this.keId});
            },
            /*  支付成功进入课程交流群按钮按钮  */

            enterInfos() {
                this.$router.push({path: '/Hi?dataFlags=' + this.dataFlags+'&keId='+this.keId});
            },

            // 影响力榜单跳转
            listRoute() {
                window.location.href = '/h5/ke/rankListPage.do?keId=' + this.keId
            },

            // 分享立赚跳转
            shareMoney() {
                window.location.href = '/h5/ke/myPosterPage.do?keId=' + this.keId
            },

            gotop: function () {  // 点击回顶按钮 返回顶部
                setTimeout(() => {
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }, 1000)
            },
            // 分享立赚跳转结束
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar-item {
        background-color: #000;
        color: #fff;
    }

    .van-hairline--bottom::after {
        border: none;
    }

    .banner-img {
        width: 100%;
        display: block;
    }

    .left-price {
        height: 3rem;
        background-color: #f2755c;
        color: #fff;
        font-size: 30px;
        display: flex;
        justify-content: space-around;
    }

    .left-price-money {
        height: 3rem;
        line-height: 3.8rem;
        /*width: 55%;*/
    }

    .left-price-money-small {
        font-size: 20px;
    }

    .left-price-money-small-all {
        font-size: 30px;
    }

    .left-price-right {
        display: flex;
        flex-direction: column;
        font-size: 10px;
        margin: 2px 0px;
        /*width: 40%;*/
    }

    .left-price-right-top {
        background-color: #b16050;
        padding: 3px 2px;
        border-radius: 3px;
        text-align: center;
        margin-top: 5px;
    }

    .left-price-right-btm {
        text-decoration: line-through;
        font-size: 12px;
        letter-spacing: 2px;
    }

    .right-entTime {
        height: 3rem;
        background-color: #242424;
        color: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .right-entTime-end {
        font-size: 12px;
        padding-top: .4rem;
        letter-spacing: 2px;
        margin-right: .7rem;
        text-align: center;
    }

    .right-entTime-end-color {
        color: #f2755c;
    }

    .right-entTime-end-bg {
        background-color: #555;
        opacity: 80%;
        width: 1.5rem;
        display: inline-block;
    }

    .book-all {
        display: flex;
        flex-direction: column;
        padding: .7rem;
    }

    .book-title {
        font-size: 18px;
        color: #222;
        font-weight: bold;
    }

    .book-introduce {
        font-size: 14px;
        color: #848484;
        margin-top: .3rem;
    }

    .book-content {
        padding: 0rem .7rem .5rem .7rem;;
    }

    .book-top-line {
        border-top: 1px solid #ccc;
        padding-top: .5rem;
    }

    .book-img-all-link {
        float: right;
        color: #4b4b4b;
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

    .topIcon {
        position: fixed;
        top: 44%;
        right: 0;
        width: 109px;
        height: 35px;
        border-radius: 20px 0 0 20px;
        background-color: #4cb946;
        -webkit-animation: scaleDraw 3s ease-in-out infinite;
    }

    .topIcon-img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        position: relative;
        top: .15rem;
    }

    .topIcon-ShareMoney {
        font-size: 14px;
        color: #fff;
        margin-left: 6px;
    }

    @keyframes scaleDraw { /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
        0% {
            transform: scale(1); /*开始为原始大小*/
        }
        25% {
            transform: scale(1.1); /*放大1.1倍*/
        }
        50% {
            transform: scale(1);
        }
        75% {
            transform: scale(1.1);
        }
    }
</style>
