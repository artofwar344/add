import wx from 'weixin-jsapi'

function wexinPay(data,GID,cb,errorCb){
    // console.log(GID.giveNum,'sssssssssssssssss')
    console.log(data,'pay data');
    console.log(wx,'微信')
    var appId = data.appId;
    var timestamp = data.timeStamp;
    var nonceStr = data.nonceStr;
    var signature = data.signType;
    var packages = data.package;
    var paySign = data.paySign;
    // console.log("微信支付参数",appId,timestamp,nonceStr,signature,packages,paySign);
    wx.config({ //微信的相应配置
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见附录1
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function(){
        wx.chooseWXPay({
            timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
            package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=*** 这里注意一下
            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: paySign, // 支付签名
            success: function(res) {
                GID.gopath('/card?giftVipDayTime='+GID.giftVipDayTime+'&giveNum='+GID.giveNum)
                console.log(GID,'======path');
                // 支付成功后的回调函数
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    //location.reload();
                        if(jpk.receiveAddressFlag == 2){
                            location.href='/h5/ke/toAddr.do?mode=1&keId=${keId}&show=1';
                            console.log('走到后台')
                        }else{
                            // location.href='/card';
                            this.$router.push('/card')
                            console.log('走到前端')
                        }
                    }
            },
            fail:function(res){
                console.log('失败失败')
                errorCb();
            }
        });
    });
    wx.error(function(res) {
        console.log(res,'这是什么');
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        // alert("config信息验证失败");
    });
}

export default{
    wexinPay
}
