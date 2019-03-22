import wx from 'weixin-jsapi'
export default {

    wxShowMenu(data,selfWxuserName,shareTitle,shareDesc) {
        console.log(data,'share 传参');
        var appId = data.appId;
        var nonceStr = data.nonceStr;
        var signature = data.signature;
        var timestamp =data.timestamp;
        var url = data.url
        wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'chooseWXPay'
            ]
        });

        wx.ready(function () {
            var title = selfWxuserName+shareTitle;
            var desc = shareDesc;
            var link = url;
            var img = 'http://zdimg.lifeweek.com.cn/h5/ke/4/ke4share.jpg';

            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                    //alert("分享成功！");
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                    //alert("分享成功！");
                    //document.getElementById('mcover').style.display='none';
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareQQ({
                title: title, // 分享标题
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                desc: desc, // 分享描述
                success: function () {
                    //alert("分享成功");
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareWeibo({
                title: title, // 分享标题
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                desc: desc, // 分享描述
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareQZone({
                title: title, // 分享标题
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                desc: desc, // 分享描述
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

        });
    },

    wxShowMenuOne(data,uri,selfWxuserName,keShareTitle,keShareDesc) {
        console.log(uri,'share 传参');
        var appId = data.appId;
        var nonceStr = data.nonceStr;
        var signature = data.signature;
        var timestamp =data.timestamp;
        var url = uri
        wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'chooseWXPay'
            ]
        });

        wx.ready(function () {
            var title = selfWxuserName+keShareTitle;
            var desc = keShareDesc;
            var link = url;
            var img = 'http://zdimg.lifeweek.com.cn/h5/ke/4/ke4share.jpg';

            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                    //alert("分享成功！");
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                    //alert("分享成功！");
                    //document.getElementById('mcover').style.display='none';
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareQQ({
                title: title, // 分享标题
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                desc: desc, // 分享描述
                success: function () {
                    //alert("分享成功");
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareWeibo({
                title: title, // 分享标题
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                desc: desc, // 分享描述
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareQZone({
                title: title, // 分享标题
                link: link, // 分享链接
                imgUrl: img, // 分享图标
                desc: desc, // 分享描述
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

        });
    }

}
