// import wx from 'weixin-js-sdk'    //微信jssdk
import ajaxRequest from '../ajaxRequest'
//微信
export function shareWx(shareData,type){
  // alert('正在开发中')
  // return
  //发送获取微信接口的授权签名的请求
  let signTimestamp = (new Date()).valueOf(); //时间戳
  let signStr = 'CCBZHIHUIZHENGWU'; //生成签名的字符串
  let setdata = {
    txnCommCom: {
    },
    txnBodyCom: {
      // "user_id":window.sessionStorage.getItem("userid") !='null' ? window.sessionStorage.getItem("userid") : '0b5dba7536514882ac7140c5482b3799',
      // "user_name":window.sessionStorage.getItem("username") !='null' ? window.sessionStorage.getItem("username") : 'hani123',
      // "user_id":window.sessionStorage.getItem("userid"),
      // "user_name":window.sessionStorage.getItem("username"),
      url:'https://zwfu.yn.gov.cn',

    },
    // signDataConfig:{
    //   noncestr:signStr,
    //   timestamp:signTimestamp,
    //   url:window.location.href
    // }
  };
//http://70.0.0.0/176.81:8080/APPS/share/wechat?111
  var urls = '';
      if(window.location.hostname=='web.yn.gov.cn'){
        urls= "https://mobile.yn.gov.cn/APPS/share/wechat"
      }else{
        urls= "http://172.20.10.2:8080/APPS/share/wechat"
      }
  ajaxRequest("post",urls , setdata)
      .then(res => {
      console.log(res)
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx7a80604bb59957e1', // 必填，公众号的唯一标识
        timestamp: res.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.noncestr, // 必填，生成签名的随机串
        signature: res.signature,// 必填，签名
        // 朋友圈                 微信好友                         qq                  qq空间
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ',  'onMenuShareQZone', 'showOptionMenu', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem'],
      });
    })
    .catch(error => {
      console.log(error)
    });
  //ready config验证成功后执行


  wx.error(function(error){
    console.error(error)
  });
  wx.ready(function() {
    const share = {
      title: '"2018年12月1日是第31个世界艾滋病日"',
      desc: '今年，我国的宣传主题是：“主动检测，知艾防艾，共享健康。',
      imgUrl: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
      link: '分享链接（最好是后台JS安全域名）',
      // ...shareData,
      success: function() {
        // 分享成功
      },
      cancel: function() {
      }
    };
    if(type="appMessage"){
      wx.onMenuShareAppMessage(share);  // 微信好友
    }else if(type="timeLine"){
      wx.onMenuShareTimeline(share);  // 朋友圈
    }
    // wx.onMenuShareQQ(share);  // QQ
    // wx.onMenuShareQZone(share);  // QQ空间
  });
}








