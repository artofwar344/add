<template>
    <div>
        <van-row>
            <!--<weChatPay></weChatPay>-->
            <van-col span="24">
                <div class="my-question-bg">
                    <div class="my-question-bg1">
                        <div style="margin-top: 12%;">
                            <img style="vertical-align: middle;" :src="this.jpkItem.keHuoma" alt="" width="20"
                                 height="20">
                            <span style="vertical-align: middle;" class="my-question-title-top">{{this.dataFlag?this.jpkItem.qrcodeOverMessage:this.jpkItem.rightQrcodeOverMessage}}</span>
                        </div>
                        <img :src="this.dataFlag?jpkItem.keHuoma:jpkItem.rightHuoma" class="my-question-img" alt="">
                        <p class="my-question-title">长按识别二维码，入群与大家组团听课</p>
                        <div class="my-question-middle-title">
                            <div class="my-question-middle-title-content">
                                {{this.dataFlag?this.jpkItem.qrcodeUnderMessage:this.jpkItem.rightQrcodeUnderMessage}}
                            </div>
                        </div>
                    </div>
                </div>
            </van-col>
        </van-row>


        <van-row class="my-question-content">
            <van-col span="24" class="year-card-all">
                <span class="year-card">如何收听课程？</span>
            </van-col>
            <van-col span="24" v-for="(item, index) in modelItem" :key="index">
                <span class="year-card-title">  {{index+1}}、{{item}}</span>
            </van-col>
        </van-row>

        <div class="footer-content">
            <van-row>
                <van-col span="24">
                    <van-button type="warning" class="footerBtn" @click="shareTest()">
                        <p style="height: 16px;font-size: 16px; line-height: 10px;">立即分享给好友</p>
                    </van-button>
                </van-col>
            </van-row>
        </div>

        <div>
            <van-popup v-model="show" style="padding: 8px;">
                <van-icon name="cross" style="float: right;" @click="mask()"/>
                <div class="middle-mask">
                    您好，本次活动门面费赠红包仅限H5活动页面支付用户，暂不支持其他方式支付的用户领取使用噢
                </div>
            </van-popup>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Hi",
        data() {
            return {
                show: true,
                jpkItem: '',
                shareData: '',
                dataFlag: this.$route.query.dataFlag,
                dataFlags: this.$route.query.dataFlags,
                keId: this.$route.query.keId,
                modelItem: ''
            }
        },
        created() {
            /* 购买成功列表接口 */
            this.$http.get('h5/newvip/buy?keId=' + this.keId, {}).then(res => {
                console.log(res, ' hi_view model data');
                this.modelItem = res.data.model.lisenMessage
                this.jpkItem = res.data.model.jpk
                this.shareData = res.data.model.jsapiSign; //selfWxuserName shareTitle
                this.WXConfig.wxShowMenu(this.shareData, res.data.model.selfWxuserName, res.data.model.shareTitle, res.data.model.shareDesc)
                this.$set(res, 'flg', this.dataFlag)
                this.$set(res, 'flgTwo', this.dataFlags)
                this.keId = res.data.model.keId
            })
                .catch(error => {
                    console.log(error, '获取失败');
                })

        },
        watch: {},
        methods: {
            /* 弹窗开始 */
            mask() {
                this.show = false;
            }
            , closeOpen() {
                this.show = true
            },
            /* 弹窗结束 */

            /*  立即分享给好友接功能 */
            shareTest() {
                window.location.href = '/h5/ke/myPosterPage.do?keId=' + this.keId
            }
        }
    }
</script>

<style scoped>
    .middle-mask {
        width: 300px;
        padding: 20px;
        line-height: 2;
        text-align: center;
    }

    .my-question-bg {
        background-color: #f3f3f3;
        padding: 0 25px 20px 25px;
    }

    .my-question-bg1 {
        background-color: #fff;
        border-radius: 0 0 10px 10px;
        text-align: center;
        padding: 15px 0;
    }

    .my-question-img {
        margin-top: 3.4%;
        width: 137.5px;
        display: inline-block;
    }

    .my-question-title-top {
        font-size: 18px;
        color: #222;
    }

    .my-question-title {
        font-size: 12px;
        color: #848484;
        margin-top: 3.3%;
    }

    .my-question-content {
        padding: 15px 20px 80px 20px;
        background-color: #fff;
    }

    .my-question-middle-title {
        margin-top: 11.7%;
        margin-bottom: 5.5%;
        font-size: 16px;
        color: #222;
    }

    .my-question-middle-title-content {
        width: 200px;
        margin: 0 auto;
    }

    .year-card-all {
        margin-bottom: 10px;
    }

    .year-card {
        font-size: 15px;
        color: #222;
    }

    .year-card-title {
        font-size: 14px;
        color: #848484;
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


    .ballon {
        width: 100%;
        background-color: #f2755c;
        /*  -webkit-animation: scaleDraw 3s ease-in-out infinite;*/
        height: 40px;
    }

    .no {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
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
