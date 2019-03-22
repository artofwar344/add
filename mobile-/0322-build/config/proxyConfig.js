module.exports = {
    proxy: {
        '/apis': {
            target: 'http://ny.zdline.cn',  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/apis': ''
            }
        }
    }
}

//
// let wx = require('weixin-js-sdk');
// import service from "../api/service"
// import getQuery from "./getQuery"
// import {SHARE_URL} from "../config"
// /*
// 微信分享方法
// @param{data}:获取的微信加签
// @param{url}:分享的url
// */
//
// let wxShare = () => {
//     let url = location.origin+'/wexinShare';
//     let signHref=location.href;
//     let encodeURL=encodeURIComponent(signHref);
//     var query=getQuery();
//     //这个接口用来获取加签信息。可以根据自己的情况，更改接口名称，
//     service.getWechatShareService(encodeURL, data => {
//         let appId = data.appId;
//         let nonceStr = data.nonceStr;
//         let timestamp = data.timestamp;
//         let signature = data.signature;
//         let title = "";
//         let desc = "";
//         let appNewURL = url;
//         let timeNewURL = url;
//         //这一步是因为我发现有的页面进入微信会加入一个'from=xx&isappinstalled=0',为了让配置能通过，必须和它保持一致
//         if(query.from){
//             appNewURL+='?from=singlemessage&isappinstalled=0'
//             timeNewURL+='?from=timeline&isappinstalled=0'
//         }
//         let imgUrl=SHARE_URL+"/static/images/share_img.jpg";
//         var img=new Image();
//         img.src=imgUrl;
//         img.onload=()=>{
//             img.style.display="none";
//             document.body.appendChild(img);
//             //分享接口
//             wx.config({
//                 debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//                 appId: appId, // 必填，公众号的唯一标识
//                 timestamp: timestamp, // 必填，生成签名的时间戳
//                 nonceStr: nonceStr, // 必填，生成签名的随机串
//                 signature: signature, // 必填，签名，见附录1
//                 jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//             });
//             wx.ready(() => {
//                 //分享接口
//                 wx.onMenuShareAppMessage({
//                     title: title, // 分享标题
//                     desc: desc, // 分享描述
//                     link: appNewURL, // 分享链接
//                     imgUrl: imgUrl // 分享图标
//                 });
//                 wx.onMenuShareTimeline({
//                     title: title, // 分享标题
//                     desc: desc, // 分享描述
//                     link: timeNewURL, // 分享链接
//                     imgUrl: imgUrl // 分享图标
//                 });
//             });
//         }
//     })
//
// }
// export default wxShare;
