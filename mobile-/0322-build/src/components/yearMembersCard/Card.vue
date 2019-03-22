<template>
    <div>
        <van-row>
            <!--<weChatPay></weChatPay>-->
            <van-col span="24">
                <div class="my-question-bg">
                    <div class="my-question-bg1">
                        <img src="../../pages/yearMembers/img/code.jpg" class="my-question-img" alt="">
                        <p class="my-question-title">售后问题可加官方客服微信详询</p>
                    </div>
                </div>
            </van-col>
        </van-row>

        <van-row class="my-question-content">
            <van-col span="24" class="year-card-all">
                <span class="year-card">如何使用年卡？</span>
            </van-col>
            <van-col span="24">
                <span class="year-card-title">1、下载 [ 中读 ] APP;</span>
            </van-col>
            <van-col span="24">
                <span class="year-card-title">2、点击 [ 点击 ] - [ 中读VIP会员 ] 查看会员权益;</span>
            </van-col>
            <van-col>
                <span class="year-card-title">3、</span>
            </van-col>
            <van-col span="22">
                <span class="year-card-title">选择收听小课、大咖说或年卡包含的其他内容，开启你的知识旅程。</span>
            </van-col>
        </van-row>
        <van-row>
            <transition name="confirm-fade">
                <div v-if="isShowConfirm" class="my-confirm" @click.stop="clickFun('clickCancel')">
                    <div class="confirm-content-wrap" @click.stop>
                        <van-icon name="cross" style="float: right;" @click.stop="clickFun('clickCancel')"/>
                        <div class="my-confirm-title">{{ titleText }}</div>
                        <div class="my-confirm-content">{{ content }}</div>
                        <div style="padding: 0 10px;position: relative;">
                            <img src="../../pages/yearMembers/img/cardLogo.png" alt="" width="100%">
                            <span class="img-left-content">已领 <span style="font-size: 32px;">{{this.$route.query.giveNum}}</span> 张</span>
                            <div class="img-right-content">
                                <div>{{this.$route.query.giftVipDayTime}}天</div>
                                <span>会员体验卡</span>
                            </div>
                        </div>
                        <div style="padding: 0 10px;">
                            <div style="position: relative;">
                                <div class="ballon1"></div>
                                <span class="no1" @click="demoClick">赠送好友</span>
                            </div>
                        </div>
                        <div class="share-fire">
                            快分享给好友免费体验
                        </div>
                    </div>
                </div>
            </transition>
        </van-row>




        <div class="footer-content">
            <van-row type="flex" justify="center">
                <van-col span="20">
                    <div style="position: relative;">
                        <div class="ballon"></div>
                        <span class="no" @click="demoClick">我的红包</span>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
    <!--<div>
        <div style="margin: 100px;height: 20px;background-color: red;">
            <router-link to="card/b1">
                <span >层层paypay</span>
            </router-link>
        </div>
        <div @click="payPath()">
            a水电费是否
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>-->

</template>

<script>
    export default {
        name: "card",
        data() {
            return {
                isShowConfirm: false, // 用于控制整个窗口的显示/隐藏
                titleText: '感谢您的购买！', // 提示框标题
                content: '您还有一份惊喜赠礼：', // 提示框的内容
                cancelText: '取消', // 取消按钮的文字
                confirmText: '确认', // 确认按钮的文字
                type: 'confirm', // 表明弹框的类型：confirm - 确认弹窗（有取消按钮）；alert - 通知弹框（没有取消按钮）
                outerData: null // 用于记录外部传进来的数据，也可以给外部监听userBehavior，事件的函数提供判断到底是哪个事件触发的
            }
        },
        created() {
        },
        methods: {
            demoClick() {
                this.isShowConfirm = true
            },
            show(content, config) {
                this.content = content || '您还有一份惊喜赠礼：'

                if (Object.prototype.toString.call(config) === '[object Object]') {
                    // 确保用户传递的是一个对象
                    this.titleText = config.titleText || '感谢您的购买'
                    this.cancelText = config.cancelText || '取消'
                    this.confirmText = config.confirmText || '确认'
                    this.type = config.type || 'confirm'
                    this.outerData = config.data || null
                }

                this.isShowConfirm = true
            },
            hidden() {
                this.isShowConfirm = false
                this.titleText = '感谢您的购买'
                this.cancelText = '取消'
                this.confirmText = '确认'
                this.type = 'confirm'
                this.outerData = null
            },
            clickFun(type) {
                this.$emit('userBehavior', type, this.outerData)
                this.hidden()
            },
         /*   payPath(){
                window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0e81c3bee622d60&redirect_uri=http%3A%2F%2Fnba.bluewebgame.com%2Foauth_response.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
            }*/
        }
    }
</script>

<style scoped>
    .share-fire {
        text-align: center;
        font-size: 14px;
        margin-top: .9%;
        color: #848484;
    }

    .my-question-bg {
        background-color: #f3f3f3;
        padding: 0 25px 10px 25px;
    }

    .my-question-bg1 {
        background-color: #fff;
        border-radius: 0 0 10px 10px;
        text-align: center;
        padding: 15px 0;
    }

    .my-question-img {
        width: 50%;
        display: inline-block;
    }

    .my-question-title {
        font-size: 18px;
    }

    .my-question-content {
        padding: 15px 20px;
    }

    .year-card-all {
        margin-bottom: 10px;
    }

    .year-card {
        font-size: 18px;
        color: #000;
    }

    .year-card-title {
        font-size: 10px;
        color: #848484;
    }

    .ballon {
        width: 100%;
        background-color: #f2755c;
        -webkit-animation: scaleDraw 3s ease-in-out infinite;
        height: 40px;
    }

    .ballon1 {
        width: 100%;
        background-color: #f2755c;
        height: 40px;
        margin-top: 4.6%;
        font-size: 18px;
    }

    .no {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
    }

    .no1 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
        font-size: 18px;
    }

    .img-left-content {
        position: absolute;
        left: 31%;
        top: 37%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
        font-size: 16px;
    }

    .img-right-content {
        position: absolute;
        right: 0%;
        top: 39%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #5E4E16;
        font-size: 16px;
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


    .my-confirm {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
        /* 这里防止当用户长按屏幕，出现的黑色背景色块，以及 iPhone 横平时字体的缩放问题 */
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    /* 进入和出去的动画 */
    .confirm-fade-enter-active {
        animation: opacity 0.3s;
    }

    .confirm-fade-enter-active .confirm-content-wrap {
        animation: scale 0.3s;
    }

    .confirm-fade-leave-active {
        animation: outOpacity 0.2s;
    }

    /* 包裹层容器样式 */
    .confirm-content-wrap {
        padding: 12px;
        position: absolute;
        top: 28%;
        left: 0;
        right: 0;
        width: 320px;
        height: 365px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 5px;
        z-index: 999;
        user-select: none;
    }

    /* 顶部标题部分 */
    .my-confirm-title {
        padding-top: 15.3%;
        text-align: center;
        font-size: 16px;
        color: #888;
    }

    /* 中间内容部分 */
    .my-confirm-content {
        padding: 0 15px;
        padding-top: 5.7%;
        margin-bottom: 13px;
        text-align: center;
        font-size: 16px;
        color: #888;
        line-height: 1.5;
    }

    /* 底部按钮样式 */
    .my-operation {
        display: flex;
        border-top: 1px solid #eee;
    }

    .my-operation .my-cancel-btn, .confirm-btn {
        flex: 1;
    }

    .my-operation .confirm-btn {
        color: #ffb000;
    }

    .my-operation .my-btn-text {
        text-align: center;
        font-size: 16px;
        margin: 14px 0;
        padding: 6px 0;
    }

    /* 其他修饰样式 */
    .my-border-right {
        border-right: 1px solid #eee;
    }

    /* 进来的动画 */
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes scale {
        0% {
            transform: scale(0);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    /* 出去的动画 */
    @keyframes outOpacity {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
