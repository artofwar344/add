import axios from 'axios';
import { cenurl } from "../components/toptow.js";
const ajaxRequest = function (method, url, data, pagejump, callback, responseError, Urltype) {
  var toastinstance
  if(window.sessionStorage.getItem('btnclick')=='1'){
    $('.myButton button').attr({disabled:'disabled'})
    $('.myButton button').css({'background':'#ccc',"box-shadow":'none'})
    // $("body").append("<div class='loadingbg' style='position:absolute;top:0;right:0;left:0;bottom:0;z-index:500;background:rgba(0,0,0,.7);'></div>")
    // toastinstance = this.$toast({
    //   message: '请求中，请稍后！',
    //   iconType: 'loading',
    //   manualClose: true
    // });
    // window.sessionStorage.removeItem('btnclick')
  }
  //timescode 时间戳
  //systemID  系统ID
  //channelType 渠道类型
  //AppSerialNumber 序列号
  //DeviceNumber 机器号,
  let Urllink = ''
  if (Urltype == '1' && window.location.hostname == 'web.yn.gov.cn') {
    Urllink = 'https://mobile.yn.gov.cn'
  } else {
    Urllink = cenurl.url()
  }
  var times = new Date()
  var timescode = times.getFullYear().toString() + (times.getMonth() + 1).toString() + times.getDate().toString() + times.getHours().toString() + times.getMinutes().toString() + times.getSeconds().toString() + times.getMilliseconds().toString()
  var systemID = '10001', channelType = '01', DeviceNumber = window.sessionStorage.getItem("DeviceNumber"), AppSerialNumber = window.sessionStorage.getItem("AppSerialNumber");
  var cUserMessage ;
  function getHeaderIds(){
    cUserMessage = JSON.stringify({User_Id:window.sessionStorage.getItem("userid")});
    // var HeaderIds = { 'C-Tenancy-Id': '530000000000', 'c-user-message': cUserMessage, 'C-Timestamp': timescode, 'C-Business-Id': timescode + systemID + channelType + AppSerialNumber + DeviceNumber, 'C-App-Id': 'ccbynt#ynzwAppId', 'C-Dynamic-Password-Foruser': window.sessionStorage.getItem("usertoken") }
    var HeaderIds = { 'C-Tenancy-Id': '530000000000', 'c-user-message': cUserMessage, 'C-Timestamp': timescode, 'C-Business-Id': timescode + systemID + channelType + AppSerialNumber + DeviceNumber, 'C-App-Id': 'ccbynt#ynzwAppId', 'C-Dynamic-Password-Foruser':"339efb9745e1456382a80a4657f56273"}
  return HeaderIds;
  }
  function getHeaders(){
    cUserMessage = JSON.stringify({User_Id:window.sessionStorage.getItem("userid")});
    // var HeaderIds = { 'C-Tenancy-Id': '530000000000', 'c-user-message': cUserMessage, 'C-Timestamp': timescode, 'C-Business-Id': timescode + systemID + channelType + AppSerialNumber + DeviceNumber, 'C-App-Id': 'GSP_APP_001', 'C-Dynamic-Password-Foruser': window.sessionStorage.getItem("usertoken") }
    var HeaderIds = { 'C-Tenancy-Id': '530000000000', 'c-user-message': cUserMessage, 'C-Timestamp': timescode, 'C-Business-Id': timescode + systemID + channelType + AppSerialNumber + DeviceNumber, 'C-App-Id': 'GSP_APP_001', 'C-Dynamic-Password-Foruser': '339efb9745e1456382a80a4657f56273'}
  return HeaderIds;
  }
  var headers = {}
  if (window.sessionStorage.getItem("CHNL_ID") === 'CC03C004') {
    // headers = { 'C-Tenancy-Id': '530000000000', 'C-Timestamp': timescode, 'C-Business-Id': timescode + systemID + channelType + AppSerialNumber + DeviceNumber, 'C-App-Id': 'ccbynt#ynzwAppId', 'C-Dynamic-Password-Foruser': window.sessionStorage.getItem("usertoken") != 'null' ? window.sessionStorage.getItem("usertoken") : '1234567890' }
    headers = getHeaderIds();
  } else {
    headers = getHeaders ();
    // headers = { 'C-Tenancy-Id': '530000000000', 'C-Timestamp': timescode, 'C-Business-Id': timescode + systemID + channelType + AppSerialNumber + DeviceNumber, 'C-App-Id': 'GSP_APP_001', 'C-Dynamic-Password-Foruser': window.sessionStorage.getItem("usertoken") != 'null' ? window.sessionStorage.getItem("usertoken") : '1234567890' }
  }
  // 创建axios实例
  const instance = axios.create({
    baseURL: Urllink,
    timeout: 60000,  // 请求超时时间
    //'C-Business-Id':timescode+systemID+channelType+AppSerialNumber+DeviceNumber,
    headers: headers
  });
  // request拦截器
  instance.interceptors.request.use((config) => {
    // 需要在请求发出前做的全局处理逻辑可以添加在这里
    return config;
  }, (error) => {
    // 可以在这里统一处理请求错误
    return Promise.reject(error);
  });
  // respone拦截器
  instance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    // 可以在这里统一处理响应错误
    // console.log("axios response error");
    return Promise.reject(error);
  });
  let sendata = {
    txnCommCom: {
      'txnIttChnlId': 'C0011234567890987654321',
      'txnIttChnlCgyCode': 'AC02C001'
    }
  }
  if (pagejump) {
    sendata.txnCommCom.tRecInPage = pagejump.tRecInPage
    sendata.txnCommCom.tPageJump = pagejump.tPageJump
  }
  //  data.txnBodyCom.matter_id="a7697f77d8d7487da46247797bbadab3"
  // data.txnBodyCom.matter_id='0f30a072b2d740bab0ee5b56a33d3833'
  // data.txnBodyCom.matter_id='9c8b2e45891043ab8a1d6537d8815cde'
  //  data.txnBodyCom.matter_id='7a51598ea5c6463ebc9497dd2cc0b899'
  if (data.txnBodyCom.matter_id == 'null'||data.txnBodyCom.matter_id == ''||data.txnBodyCom.matter_id ==null) {
    data.txnBodyCom.matter_id = window.sessionStorage.getItem("matterid");
  }

  // 统一添加memberid
  if (!data.txnBodyCom.member_id) {
    data.txnBodyCom = Object.assign({}, {member_id: sessionStorage.getItem("userid")}, data.txnBodyCom)
  }
  
  if (data.txnCommCom) {
    data.txnCommCom = sendata.txnCommCom;
  } else {
    data = Object.assign({ "txnCommCom": sendata.txnCommCom }, data);
  }
  // console.log(data);
  let options = {
    method: method,
    url: url,
    // `params` 是即将与请求一起发送的 URL 参数
    // `data` 是作为请求主体被发送的数据
    params: method === 'get' || method === 'delete' ? data : null,
    data: method === 'post' || method === 'put' ? data : null,
  }
  return new Promise((resolve, reject) => {
    instance(options)
      // 此处的.then属于axios
      .then((res) => {
        // if($(".loadingbg").length > 0) {
        //   $('.loadingbg').remove()
        // }
        // if(toastinstance!=undefined){
        //   window.sessionStorage.removeItem('btnclick')
        //   toastinstance.close();
        // }
        $('.myButton button').attr({disabled:false})
        $('.myButton button').css({'background':'rgb(45, 127, 252)',"box-shadow":'rgb(45, 127, 252) 0px 0.05rem 0.15rem'})
        window.sessionStorage.removeItem('btnclick')
        if (callback) {
          callback(res);
          return;
        }
        console.log(res)
        let status = JSON.stringify(res.data)
        status = status.replace("C-API-Status", 'status')
        status = JSON.parse(status)
        if (status.status == "00") {
          let cent = JSON.stringify(res.data)
          cent = cent.replace("C-Response-Body", 'content')
          cent = JSON.parse(cent)
          cent = JSON.parse(cent.content)
          resolve(cent)
        } else {
          let error = JSON.stringify(res.data)
          error = error.replace("C-Response-Desc", 'errorinfo')
          error = JSON.parse(error)
          if(error.errorinfo=="AuthFilter occur Exception : dynamic password for user incorrect or expired"){
            this.$toast('登陆已超时，请重新登陆')
            setTimeout(() => {
              this.$CallModule('AppReturnToLoginPage','跳转至登录页面')
            }, 2500, this)
            // return false
          }
          if (responseError) {
            resolve(error)
          } else {
            reject(error)
            console.log(error)
            this.$toast(error.errorinfo);
          }
        }
      }).catch((response) => {
        $('.myButton button').attr({disabled:false})
        $('.myButton button').css({'background':'rgb(45, 127, 252)',"box-shadow":'rgb(45, 127, 252) 0px 0.05rem 0.15rem'})
        window.sessionStorage.removeItem('btnclick')
        // if($(".loadingbg").length > 0) {
        //   $('.loadingbg').remove()
        // }
        // if(toastinstance!=undefined){
        //   window.sessionStorage.removeItem('btnclick')
        //   toastinstance.close();
        // }
        //验证token失败或者超时
        this.$toast('网络故障 请稍后重试！')
        reject(response)
      })
  })
}

export default ajaxRequest
