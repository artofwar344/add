function getUrlParam(urls, name) {
    var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
    var matcher = pattern.exec(urls);
    var items = null;
    if (matcher != null) {
        try {
            items = decodeURIComponent(decodeURIComponent(matcher[1]));
        } catch (e) {
            try {
                items = decodeURIComponent(matcher[1]);
            } catch (e) {
                items = matcher[1];
            }
        }
    }
    return items;
}
export const CallModule = function (types, keys) {
    var u = navigator.userAgent, 
    app = navigator.appVersion;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  var isYNT = window.sessionStorage.getItem("CHNL_ID") === 'CC03C004';
  if (types != 'StoragesetItem') {
    //裕农通25-83
    if (isYNT) {
      switch (types) {
        case 'close':
          let tar = PJF.client.storage.sessionGet('targetWebviewID');
          let src = PJF.client.storage.sessionGet('srcWebviewID');
          PJF.client.webview._close(tar, src);
          // PJF.ynt.backToYnt();
          break;
        case 'liveFace':
          PJF.ynt.faceLiveness({
            'success': function (res) {
              const params = PJF.client.storage.sessionGet('LiveFaceResultParams')
              window.LiveFaceResult(params)
            }
          })
        case 'location': 
          if (PJF.client.isInIOS()) {
            let locationStr = PJF.client.storage.sessionGet('locationStr')
            window.getGpsMsg(locationStr)
          } else {
            PJF.client.getLocation(function(res){
              if (res.success) {
                let location = {
                  'location': '('+ res.result.longitude+','+ res.result.latitude +')',
                  'province': res.result.province,
                  'street': res.result.street,
                  'AOIName': res.result.street,
                  'formattedAddress': res.result.address,
                  'city': res.result.city,
                  'citycode': res.result.cityCode,
                  'district': res.result.district,
                  'adcode': res.result.AdCode,
                  'country': res.result.country,
                  'number': res.result.StreetNum
                }
                let locationStr = JSON.stringify(location)
                window.getGpsMsg(locationStr)
              }
            })
          }
          break;
        case 'miniProgram': break;
        case 'AppRegulePhoto': break;
        case 'phone': 
          PJF.client.openSysDail(keys)
          break;
        case 'scan': 
          PJF.client.barcodeScan(function(res) {
            if (res.success) {
              let str = res.result
              str = str.replace(/\n/g, '&nbsp;')
              str = str.replace(/\r/g, '')
              str = str.replace(/\s/g, '')
              window.ResideCode(str)
            }
          })
          break;
        default: break;
      }
    } else if (isiOS) {
      switch (types) {
        case 'scan':
          window.webkit.messageHandlers.ScanQRCode.postMessage(keys);
          break;
        case 'location':
          window.webkit.messageHandlers.locateAction.postMessage(keys);
          break;
        case 'phone':
          window.webkit.messageHandlers.callPhone.postMessage(keys);
          break;
        case 'close':
          window.webkit.messageHandlers.PopToApp.postMessage(keys);
          break;
        case 'liveFace':
          window.webkit.messageHandlers.LiveFace.postMessage(keys);
          break;
        case 'AppRegulePhoto':
          window.webkit.messageHandlers.AppRegulePhoto.postMessage(keys);
          break;
        case 'miniProgram':
          window.webkit.messageHandlers.AppPushToMiniProgram.postMessage(keys);
          break;
        case 'AppReturnToLoginPage': window.webkit.messageHandlers.AppReturnToLoginPage.postMessage("callNative");
          break;
        default:
          break;
      }
    } else {
      switch (types) {
        case 'scan':
          javascript: android.ScanQRCode(keys);
          break;
        case 'location':
          javascript: android.locateAction(keys);
          break;
        case 'phone':
          javascript: android.callPhone(keys);
          break;
        case 'close':
          javascript: android.PopToApp(keys);
          break;
        case 'liveFace':
          javascript: android.LiveFace(keys.isIdcard);
          break;
        case 'AppRegulePhoto':
          javascript: android.AppRegulePhoto(keys.camera);
          break;
        case 'miniProgram':
          javascript: android.AppPushToMiniProgram(keys.path, keys.miniProgramType, keys.userName);
          break;
        case 'androidDownloadPDF':
        javascript: android.LookPDF(keys);
        break;
        case 'AppReturnToLoginPage': javascript: android.AppReturnToLoginPage("callNative");
          break;
        default:
          break;
      }
    }
  } else {
    window.sessionStorage.setItem("username", getUrlParam(keys, "username")); //姓名
    window.sessionStorage.setItem("cardid", getUrlParam(keys, "cardNo")); //身份证号
    window.sessionStorage.setItem("userphone", getUrlParam(keys, "phone")); //手机号
    window.sessionStorage.setItem("userid", getUrlParam(keys, "userid")); //userid
    window.sessionStorage.setItem("usertoken", getUrlParam(keys, "token")); //token
    window.sessionStorage.setItem("userNation", getUrlParam(keys, "userNation")); //民族
    window.sessionStorage.setItem("userAdress", getUrlParam(keys, "userAdress")); //地址
    window.sessionStorage.setItem("userSex", getUrlParam(keys, "userSex")); //性别
    window.sessionStorage.setItem("userBirthday", getUrlParam(keys, "userBirthday")); //生日
  }
}
export const callsubstr = function (str) {
    if (str.length <= 1) {
        return str
    } else if (str.length <= 2) {
        return str
    } else if (str.length <= 3) {
        return str.substring(0, 1) + '*' + str.substring(2)
    } else if (str.length <= 4) {
        return str.substring(0, 1) + '**' + str.substring(3)
    } else if (str.length <= 5) {
        return str.substring(0, 1) + '***' + str.substring(4)
    } else if (str.length <= 6) {
        return str.substring(0, 2) + '****' + str.substring(4)
    } else if (str.length <= 7) {
        return str.substring(0, 2) + '***' + str.substring(5)
    } else if (str.length <= 8) {
        return str.substring(0, 2) + '****' + str.substring(6)
    } else {
        let len = str.length - 4
        return str.substring(0, 2) + '****' + str.substring(len)
    }
}
export const NoNull = function (val) {

    console.log(val.replace("null", ''))
    return val.replace("null", '')
}
export const AppReturnToLoginPage = function () {
    //H5调用APP返回登录页面
    var u = navigator.userAgent;
    // var app = navigator.appVersion;
    // var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
        window.webkit.messageHandlers.AppReturnToLoginPage.postMessage("callNative");
    } else {
        javascript: android.AppReturnToLoginPage("callNative")
    }

}
//验证手机号
export const VerifyPhone = /^(0|86|17951)?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/
//验证邮箱
export const VerifyEmail = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/
//验证姓名为中文
export const VerifyName = /^[\u4e00-\u9fa5]{2,8}$|(^[\u4e00-\u9fa5]{2,8}\·[\u4e00-\u9fa5]{2,8}$)/
//验证身份证
export const VerifyCardId = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// 调用原生相机回调方法名： getPhoto
//定位原生回调函数返回详细地址
//window.getGpsMsg=this.getGpsMsg;
// const getGpsMsg=function(str){
//     console.log(str)
// }
//二维码扫描原生回调函数返回二维码信息
//window.ResideCode=this.ResideCode;
// ResideCode(str) {
//     console.log(str)
//   }
//人脸识别方法
// isAndroid_ios() {
//     let sendata={
//         isIdcard:'1'
//     }
//     this.$CallModule('liveFace',sendata)
// }
//人脸识别原生回调函数返回数据
//window.LiveFaceResult=this.LiveFaceResult
// LiveFaceResult(senobject){
//     if(typeof(senobject)=='string'){
//         this.$CallModule('StoragesetItem',senobject)
//     }else{
//         this.$CallModule('StoragesetItem',senobject)
//     }
//     this.$router.push('/listoneman')// 可替换数据'/listoneman'
// }
//h5调小程序回调函数
//window.MiniProgramCallBack=this.MiniProgramCallBack;
// MiniProgramCallBack(str) {
//     console.log(str)
//   }

