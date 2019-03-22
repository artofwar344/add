<template>
    <div class="container">
        <div>
            <van-row>
                <van-nav-bar
                        :title="item.name"
                        class="navbar-item"
                />
            </van-row>
            <van-row>
                <!--<weChatPay></weChatPay>-->
                <van-col span="24">
                    <img :src="item.topBanner" alt="" class="banner-img">
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <div class="left-price">
                        <div class="left-price-money"><span class="left-price-money-small">￥</span>{{item.price}}.<span
                                class="left-price-money-small">00</span></div>
                        <div class="left-price-right">
                            <!--<span class="left-price-right-top">{{item.homeLineationMessage}}</span>-->
                            <span class="left-price-right-top">总价值</span>
                            <span class="left-price-right-btm">￥{{item.price}}元</span>
                        </div>
                        <!-- Css add text-decoration:line-through; clear line -->
                    </div>
                </van-col>
                <van-col span="12">
                    <div class="right-entTime">
                        <span class="right-entTime-end right-entTime-end-color">距离特价结束仅剩</span>
                        <span class="right-entTime-end">{{ `${d}天 ${h}: ${m}: ${s}` }}</span>
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
                    <router-link to="/hi">
                        <span class="book-img-all-link">影响力榜单 ></span>
                    </router-link>
                </van-col>
            </van-row>
            <van-row style="margin-bottom: 4rem;">
                <van-col span="24" v-for="imgItem in dataItem.centerBanner" :key="imgItem">
                    <img :src='imgItem' alt="" class="banner-img">
                </van-col>
            </van-row>
        </div>
        <div class="footer-content">
            <van-row>
                <van-col span="24">
                    <van-button type="warning" class="footerBtn" @click="pay()">
                        <p style="margin: 0;height: 16px;font-size: 16px;">{{item.homeBuyButtonTitle}}</p>
                        <p style="margin: 0;font-size: 8px;">{{item.homeBuyButtonSubheading}}</p>
                    </van-button>
                </van-col>
            </van-row>
        </div>


    </div>

</template>

<script>
    export default {
        name: 'Year',
        data() {
            return {
                item: '',
                dataItem: '',
                d: 0, h: 0, m: 0, s: 0, ms: 0,
                diffTime: 0,
                flag:true,
                payItem:''
            }
        },
        created() {
            /* 模板列表api */
            this.$http.get('h5/newvip/indexV1?k=44&p=8876&h=77', {}).then(res => {
                console.log(res);
                this.dataItem = res.data.model;
                this.item = res.data.model.jpk
                console.log(this.item);
            })
                .catch(error => {
                    console.log(error, '获取失败');
                })

            this.countdown();
            this.callWxPay();
        },
        methods: {
            /*  时间戳接口 */
            countdown: function () {
                this.$http.post('h5/ke/difftime.do?keId=44',{})
                    .then(res => {
                        this.diffTime = res.data.model;
                        console.log(this.diffTime,'dddd');
                        if( this.diffTime){
                            this.timeEnd(this.diffTime)
                        }
                })
                    .catch(error => {
                        console.log(error, '获取失败');
                    })

            },
            /*  时间戳转换 */
            timeEnd(val) {
                var time_start = new Date().getTime(); //设定当前时间
                var timer = null
                var farTime = Math.floor(this.diffTime);
                var lastTime  = farTime - time_start;

                if (lastTime > 0) {
                    this.d = Math.floor((lastTime / 1000 / 3600) / 24);
                    this.h = Math.floor((lastTime / 1000 / 3600) % 24);
                    this.m = Math.floor((lastTime / 1000 / 60) % 60);
                    this.s = Math.floor(lastTime / 1000 % 60);
                } else {
                    this.d = 0;
                    this.h = "00";
                    this.m = "00";
                    this.s = "00";
                    clearInterval(timer);
                }
                const that = this
                // that.timeEnd()
                // that.countdown()
                // timer = setInterval(this.timeEnd,1000)
            },
            WePay(){
                this.$http.post('h5/ke/pay?keId=44',{})
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error, '获取失败');
                    })
            },
            pay(){
                this.$http.get('/h5/wx/kepay.do?keId=44',{})
                    .then(res => {
                        this.payItem = res.data.model;
                        console.log( this.payItem,'data reslu');
                    })
                    .catch(error => {
                        console.log(error, '获取失败');
                    })
            },
            onBridgeReady() {
                var _this = this;
                console.log('afsdaf')
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', {
                        'appId': _this.payItem.appId,
                        'timeStamp':_this.payItem.timeStamp,
                        'nonceStr': _this.payItem.nonceStr,
                        'package': _this.payItem.package,
                        'signType': _this.payItem.signType,
                        'paySign': _this.payItem.paySign
                    },
                    function (res) {
                        console.log(res,'llllll');
                        if (res.err_msg === 'get_brand_wcpay_request:ok') {
                        }
                    }
                );
            },
           callWxPay() {
                console.log('jiazai caalbak')
                if (typeof onBridgeReady == "undefined"){
                    if( document.addEventListener ){
                        document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
                    }else if (document.attachEvent){
                        document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
                        document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
                    }
                }else{
                    this.onBridgeReady();
                }
            },

        }
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
        flex-direction: row;
    }

    .left-price-money {
        height: 3rem;
        line-height: 3rem;
        width: 60%;
    }

    .left-price-money-small {
        font-size: 20px;
    }

    .left-price-right {
        display: flex;
        flex-direction: column;
        font-size: 10px;
        margin: 2px 0px;
        width: 40%;
    }

    .left-price-right-top {
        background-color: #b16050;
        padding: 5px 5px 5px 7px;
        border-radius: 3px;
        text-align: center;
    }

    .left-price-right-btm {
        text-decoration: line-through;
    }

    .right-entTime {
        height: 3rem;
        background-color: #242424;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-right: .7rem;
    }

    .right-entTime-end {
        font-size: 14px;
        padding-top: .2rem;
    }

    .right-entTime-end-color {
        color: #f2755c;
    }

    .book-all {
        display: flex;
        flex-direction: column;
        padding: .7rem;
        font-weight: 600;
    }

    .book-title {
        font-size: 20px;
        color: #000;
    }

    .book-content {
        padding: 1rem .7rem;
    }

    .book-top-line {
        border-top: 1px solid #ccc;
        padding-top: .5rem;
    }

    .book-img-all-link {
        float: right;
        color: #616161;
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
