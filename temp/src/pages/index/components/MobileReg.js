import React,{ Component } from 'react';
import $ from 'jquery';
import common from '../lib/common';
import { withRouter } from 'react-router-dom';

class MobileReg extends Component {
	constructor(props){
		super(props);
		this.state = {
			timer_num: 59,
			yzmBtnStr: true
		}
		
		this.getPhoneYzm = this.getPhoneYzm.bind(this);
		this.mobileRegFn = this.mobileRegFn.bind(this);
	}
	
	componentDidMount(){
		this.yzmInit();
	}
	
	yzmInit(){
		// eslint-disable-next-line
		this.chinaCaptcha = configCaptcha({
			captchaInWrap: ".chinawrap", //内嵌验证码容器（简单，复杂）
			data: { //参数
				bid: "acUpm4s1st" //区分不同业务 非空
			},
			comIn: true, //复杂验证码是否内嵌 true:内嵌  false：弹层 
			isOpenCaptcha: false, //是否需要验证码开关(部分业务需求需要开启 如：登录)
			inputaccName: "Account", //自定义隐藏域name名称
			inputName: "checkcode", //自定义账号name名称(失去焦点时验证是否需要验证码)
			inputCookieName: "cookies", //自定义隐藏域cookie name名称
			simHtml: //简单验证码元素 自定义形式：1、jquery对象，2、字符串	
				'<input type="text" class="shortinput js_img_putcode" value="" name="js_configCaptchaValue" autocomplete="off" maxlength="5" placeholder="请输入验证码">'+
				'<span class="yzm"><input type="hidden" name="js_cookieCaptchaValue"/><img style="background:#fff8e8;float:left;"  class="yzmimg img_code2 js_configCaptchaImg js_refreshConfigCaptcha" src=""></span>'
		});
		this.chinaCaptcha.init(); //初始化
		this.chinaCaptcha.refreshCaptcha($(".chinawrap"));
		clearInterval(this.timer);
		$(".send_code").html("发送验证码");
		this.timer = null;
	}
	
	//获取手机验证码
	getPhoneYzm(){
		let _this = this;
		if(this.timer) {
			return;
		}
		if(!common.exp.test(common.trim($(".phone").val()))) {
			alert("请输入正确手机号");
		} else if($.trim($(".js_img_putcode").val()) === "") {
			alert("请输入图片验证码");
		} else {
			$.ajax({
				type: "post",
				url: common.getphoneyzmurl,
				 xhrFields: {
					withCredentials: true
				},
				data: {
					r: Math.random(),
					phone: $(".phone").val(),
					verifyCode: $(".js_img_putcode").val()
				},
				async: true,
				success: function(data) {
					if(data.isSuccess) {
						alert(data.message);
						_this.setState({
							yzmBtnStr: false
						})
						_this.timer = setInterval(function() {
							_this.setState({
								timer_num: _this.state.timer_num - 1
							})
							if(_this.state.timer_num < 0) {
								clearInterval(_this.timer);
								_this.setState({
									yzmBtnStr: true,
									timer_num: 59
								})
								_this.timer = null;
							}
						}, 1000);
					} else {
						alert(data.message);
						_this.chinaCaptcha.refreshCaptcha($(".chinawrap"));
					}
				},
				error: function(data) {
					alert("获取手机验证码失败!");
					_this.chinaCaptcha.refreshCaptcha($(".chinawrap"));
				}
			});
		}
	}
	
	//手机注册提交
	mobileRegFn(){
		let _this = this;
		if(common.trim($(".phone").val()) === "" || !common.exp.test(common.trim($(".phone").val()))) {
			alert("请输入正确手机号");
		} else if(common.trim($(".js_img_putcode").val()) === "") {
			alert("请输入图片验证码");
		} else if(common.trim($(".js_code").val()) === "") {
			alert("请输入手机验证码");
		} else if(common.trim($(".password").val()) === "" || common.trim($(".password").val()).length < 6 || common.trim($(".password").val()).length > 16 || !common.exp1.test(common.trim($(".password").val()))) {
			alert("请输入由数字和字符或符号组成的6-16位密码");
		} else if(!common._Verpassword2(common.trim($(".password").val()))) {
			alert("请勿使用连续字符");
		} else {
			$.ajax({
				url: common.getregisterurl,
				type: "GET",
				dataType: "jsonp",
				data: {
					r: Math.random(),
					UserName: $(".phone").val(),
					CheckCode: $(".js_code").val(),
					Password: $(".password").val()
				},
				async: true,
				success: function(data) {
					if(data.IsSuccess) {
						//selectTable();
						$(".phone").val("");
						$(".js_img_putcode").val("");
						$(".js_code").val("");
						$(".password").val("");
						_this.props.history.push( '/receivePrize' );
					} else {
						alert(data.Message);
						_this.chinaCaptcha.refreshCaptcha($(".chinawrap"));
					}
				},
				error: function(data) {
					alert("注册失败!");
					_this.chinaCaptcha.refreshCaptcha($(".chinawrap"));
				}
			});
		}
	}
	
	componentWillUnmount(){
		clearInterval(this.timer);
		this.timer = null;
	}
	
	render(){
		let { dataShow } = this.props;
		let { yzmBtnStr, timer_num } = this.state;
		return (
			<div className="regBox" style={{display: dataShow?'block':'none'}}>
				<div className="input_d"><label>手机号</label><input type="tel" className="phone" placeholder="11位数字0-9" maxLength="11"/></div>
				<div className="input_d"><label className="pass">密&nbsp;&nbsp;&nbsp;码</label><input type="password" className="password" placeholder="4-16位字符（除<和>）" maxLength="16"/></div>
				<div className="input_y chinawrap"><input type="text" placeholder="请输入验证码"/><span className="yzm"><img alt="验证码" src="http://scgg.gyyx.cn/wd/m/20190409/images/yzm.jpg"/></span></div>
				<div className="input_y"><input type="text" className="js_code" placeholder="请输入手机验证码"/><span onClick={this.getPhoneYzm} className="getyzm">{yzmBtnStr?'获取验证码':timer_num}</span></div>
				<div className="btn">
					<input type="button" value="" className="regBtn" id="sj_regBtn" onClick={this.mobileRegFn}/>
					<p className="notice"><a href = "http://www.gyyx.cn/Resource/Agreement.html#Terms">《光宇通行证用户协议》</a>和<a href = "http://www.gyyx.cn/Resource/Agreement.html#Privacy">《光宇用户保护隐私条款》</a></p>
					<input type="button" value="" className="logBtn"  onClick={()=> this.props.history.push('/login')}/>
				</div>
			</div>
		)
	}
}

export default withRouter( MobileReg );