import React,{ Component } from 'react';
import $ from 'jquery';
	
class Login extends Component {
	constructor( props ){
		super( props );
		
		this.flag = true;
		
		this.loginFn = this.loginFn.bind(this);
	}
	
	componentDidMount(){
		this.yzmInit();
	}
	
	yzmInit(){
		// eslint-disable-next-line
		this.chinaCaptcha = configCaptcha({
			captchaInWrap: ".chinawrap", //内嵌验证码容器（简单，复杂）
			data: { //参数
				bid: "acUpm4c1st" //区分不同业务 非空
			},
//			cssLinkSrc: "http://g.gyyxcdn.cn/action/oldPlater20190318/cssWap/yazcommon.css", //自定义验证码样式
			comIn: true, //复杂验证码是否内嵌 true:内嵌  false：弹层 
			isOpenCaptcha: true, //是否需要验证码开关(部分业务需求需要开启 如：登录)
			inputaccName: "Account", //自定义隐藏域name名称
			customWidth:366,  //滑动验证码的长度，可以自己定义   
			inputName: "checkcode", //自定义账号name名称(失去焦点时验证是否需要验证码)
			inputCookieName: "cookies", //自定义隐藏域cookie name名称
			simHtml: //简单验证码元素 自定义形式：1、jquery对象，2、字符串
				'<p class="spacon">' +
				'<b style="padding-right: 13px;">*</b>' +
				'<span class="ipt" style="width:115px;">' +
				'<span class="icon2">&nbsp;</span>' +
				'<span class="word" style="display: none;">验证码</span>' +
				'<input type="text" class="mm" value="" name="js_configCaptchaValue" style="width:78px;" />' + //name不能改
				'<input type="hidden" name="js_cookieCaptchaValue"/>' + //简单验证码必须有此项
				'<img src="" class="js_configCaptchaImg js_refreshConfigCaptcha" style="position: absolute;left: 119px;width:83px;"/>' + //class不能改
				'<a class="js_refreshConfigCaptcha" style="position: absolute;width: 53px;left: 212px;top: 8px;">看不清？</a>' + //class不能改
				'</span>' +
				'</p>'
		});
		this.chinaCaptcha.init({ Account: this.account.value});//初始化
	}
	
	//返回字符的字节长度
	getByteLen(val) {
		var len = 0;
		for(var i = 0; i < val.length; i++) {
			if(val[i].match(/[^\x00-\xff]/ig) != null) {
				//全角
				len += 2;
			} else {
				len += 1;
			}
		}
		return len;
	}
	
	subFn() { //自定义提交方法 
		let _this = this;
		$.ajax({
			url: "http://reg.gyyx.cn/Login/Async",
			type: "GET",
			dataType: "jsonp",
			jsonp: "jsoncallback",
			data: {
				r: Math.random(),
				Account: _this.account.value,
				// eslint-disable-next-line
				Password: hex_md5(_this.password.value),
				captcha: $("input[name='checkcode']").val(),
				cookies: $("input[name='cookies']").val(),
				bid: "acUpm4c1st"
			},
			complete: function() {
				_this.flag = true;
			},
			beforeSend: function(d) {
				_this.flag = false;
			},
			success: function(d, e) {
				if(d.IsLogin) {
					//window.location.href = loginLink;//登录成功跳转
					_this.props.history.push('/receivePrize');
				} else {
					_this.chinaCaptcha.init({ Account: _this.account.value});//初始化
					_this.chinaCaptcha.callbackCaptchaErrorFn(true); //验证码错误提示
					_this.chinaCaptcha.refreshCaptcha($(".chinawrap")); //刷新弹层验证码$(".js_configCaptchaPop")
					alert(d.Message);
				}
			},
			error: function(d, e) {
	
			}
		});
	}
	
	loginFn(){
		if(!this.flag) {
			return false;
		}
		if(this.chinaCaptcha.captcahSwitchOpen === 1) { //判断验证码类型
			var userName = this.getByteLen($(".js_Account").val()); //账号长度
			var exp = new RegExp("^[\u4e00-\u9fa5]{0,}$");
			var status;
		
			if($.trim($(".js_Account").val()) === "" || $.trim($(".js_Account").val()) === null) {
				alert("您好，您还未填写账号，请进行填写");
			} else if(exp.test($(".js_Account").val())) {
				alert("账号格式错误，不允许包含中文");
			} else if(userName > 16) {
				alert("您好，账号不能大于16个字符");
			} else if($.trim($("#Password").val()) === "" || $.trim($("#Password").val()) === null) {
				alert("您好，您还未填写密码，请进行填写");
			} else if($("input[name='checkcode']").val() === "") {
				alert("请输入验证码");
				status = this.chinaCaptcha.configCaptchaCheck($("input[name=checkcode]"), $(".chinawrap")); //给出错误标识提示
			} else {
				status = this.chinaCaptcha.configCaptchaCheck($("input[name=checkcode]"), $(".chinawrap")); //给出错误标识提示
				if(status) {
					this.subFn();
					// chinaCaptcha.openCaptchaPop(subFn);//复杂验证码弹层和提交方式
				}
			}
		} else if(this.chinaCaptcha.captcahSwitchOpen === 0) {
			if($("input[name=checkcode]").val() === "") {
		
			} else {
				this.subFn();
			}
		} else {
			this.subFn();
		}
	}
	
	render(){
		return (
			<div id="loginPage">
				<input type="hidden" name="pageType" id="pageType" value="1" />
				<div className="login">
					<p>已有账号登录</p>
					<div className="input_d"><label>帐&nbsp;&nbsp;&nbsp;号</label><input className="js_Account" ref={(val)=>this.account = val} type="text" placeholder="" maxLength="16"/></div>
					<div className="input_d" style={{marginBottom:'0.32rem'}}><label className="pass">密&nbsp;&nbsp;&nbsp;码</label><input ref={(val)=>this.password = val} id="Password" type="password" placeholder="" maxLength="16"/></div>
					<div className="chinawrap"></div>
					<div className="btn">
						<input type="button" value="" className="loginBtn" onClick={this.loginFn} />
					</div>
				</div>
			</div>
		)
	}
}

export default Login;