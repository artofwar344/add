let common = {
	_Verpassword2 : function(value) {
		var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var str2 = "abcdefghijklmnopqrstuvwxyz";
		var str3 = "0123456789";
		var flag = true;
		var exp = new RegExp("^[a-z]+$");
		var lower = exp.test(value);
	
		//如果是非小写字母
		if(isNaN(value) === true && lower === false) {
			for(var i = 0; i < str1.length; i++) {
				if(value.substring(0, value.length) === str1.substring(i, i + value.length)) {
					flag = false;
					return flag;
				}
			}
			return flag;
		}
		//如果是小写字母
		if(isNaN(value) === true && lower === true) {
			for(var j = 0; j < str2.length; j++) {
				if(value.substring(0, value.length) === str2.substring(j, j + value.length)) {
					flag = false;
					return flag;
				}
			}
			return flag;
		}
		//如果是数字
		if(isNaN(value) === false) {
			for(var z = 0; z < str3.length; z++) {
				if(value.substring(0, value.length) === str3.substring(z, z + value.length)) {
					flag = false;
					return flag;
				}
			}
			return flag;
		}
	},
	//去除空格
	trim : function(msg) {
		return msg.replace(/\s+/g, "");
	},
	getregisterurl : "http://account.gyyx.cn/Register/PhoneSimpleRegisterJsonp?jsoncallback=?", //手机号注册提交接口
	getaccountregurl : "http://api.account.gyyx.cn/register/WebSimpleRegisterJsonpV3?jsoncallback=?", //账号注册提交接口
	getphoneyzmurl : "http://activity.gyyx.cn/novice/mobile/send/verifyCode", //获取手机验证码接口
	exp : new RegExp("^1[0-9]{10}$"),
	exp1 : new RegExp("^[\x21-\x3b\x3d\x3f-\x7e]{6,16}$"),
	exp2 : new RegExp("[^A-Za-z0-9]+", "g"), //账号
	exp3 : new RegExp("^[a-zA-Z][A-Za-z0-9]+$")
}

export default common;