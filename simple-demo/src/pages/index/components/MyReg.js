import React,{ Component } from 'react';
import $ from 'jquery';
import common from '../lib/common';
import { withRouter } from 'react-router-dom';

class MyReg extends Component {
	constructor(props){
		super(props);
		
		this.chinaCaptcha = '';
		
		this.myRegFn = this.myRegFn.bind(this);
		this.ajaxReg = this.ajaxReg.bind(this);
	}
	
	componentDidMount(){
		this.yzmInit();
	}
	
	myRegFn(){
		//个性注册提交
		let account = this.account.value;
		let password = this.password.value;
		if(common.trim(account) === "") {
			alert("账号不能为空!");
			return false;
		} else if(!common.exp3.test(common.trim(account)) || account.length > 16 || account.length < 6) {
			alert("账号格式为6-16位以字母开头");
			return false;
		} else if(common.trim(password) === "" || common.trim(password).length < 6 || common.trim(password).length > 16 || !common.exp1.test(common.trim(password))) {
			alert("请输入由数字和字符或符号组成的6-16位密码");
			return false;
		} else if(!common._Verpassword2(common.trim(password))) {
			alert("请勿使用连续字符");
		} else {
			this.chinaCaptcha.openCaptchaPop(this.ajaxReg);
			window.scrollTo(0,0);
		}
	}
	
	ajaxReg(){
		let _this = this;
		let account = this.account.value;
		let password = this.password.value;
		// eslint-disable-next-line
		let datas = $.parseJSON("{ \"userName\": \"" + account + "\",\"bid\":\""+"2k183399"+"\",\"password\": \"" + password + "\",\"checkcode\": \"" + $(".chinawrap2 input[name=checkcode]").val() + "\",\"Cookies\": \"" + $(".chinawrap2 input[name=Cookies]").val() + "\",\"GameId\": \"2\", \"r\": " + Math.random() + " }")
		$.ajax({
			url: common.getaccountregurl,
			type: "GET",
			dataType: "jsonp",
			data: datas,
			async: true,
			success: function(data) {
				if(data.IsSuccess) {
					_this.account.value = '';
					$(".chinawrap2 input[name=checkcode]").val("");
					_this.password.value = '';
					$('.js_configCaptchaPop').hide();
					_this.props.history.push( '/receivePrize' );
				} else {
					alert(data.Message);
					$('.js_refreshConfigCaptcha').click();
				}
			},
			error: function(data) {
				alert("注册失败!");
				$('.js_refreshConfigCaptcha').click();
			}
		});
	}
	
	yzmInit(){
		// eslint-disable-next-line
		this.chinaCaptcha = configCaptcha({
			captchaInWrap: ".chinawrap2",
			data: {
				bid: "2k183399"
			},
			inputName: "checkcode",
			inputCookieName: "Cookies",
			simHtml: '<label>验证码：</label>' +
				'<span class="word">看不清可刷新</span>' +
				'<input name="js_configCaptchaValue" autocomplete="off" type="text" class="txt txt03" maxlength="5" style="width:80px;"/>' +
				'<input type="hidden" name="Cookies" value="">' +
				'<i class="sigcheckcode"></i>' +
				'<img class="js_configCaptchaImg js_refreshConfigCaptcha" src="" width="70" height="30">' +
				'<a class="js_refreshConfigCaptcha link" href="javascript:;" style="color: #C4AA79;font-size: 13px;margin-left:-10px">看不清？</a>'
		});
		this.chinaCaptcha.init(); //初始化
		this.chinaCaptcha.refreshCaptcha($(".chinawrap2"));
	}
	
	render(){
		let { dataShow } = this.props;
		
		return (
			<div className="regBox" style={{display: dataShow?'block':'none'}}>
				<div className="input_d"><label>帐&nbsp;&nbsp;&nbsp;号</label><input type="text" ref={(val)=>this.account = val} className="js_Account" placeholder="6-16位字母和数字组合,请以字母开头" maxLength="16"/></div>
				<div className="input_d"><label className="pass">密&nbsp;&nbsp;&nbsp;码</label><input className="js_password" ref={(val)=>this.password = val} type="password" placeholder="4-16位字符（除<和>）" maxLength="16"/></div>
				<div className="btn">
					<input type="button" value="" className="regBtn" id="gx_regBtn" onClick={this.myRegFn}/>
					<p className="notice"><a href = "http://www.gyyx.cn/Resource/Agreement.html#Terms">《光宇通行证用户协议》</a>和<a href = "http://www.gyyx.cn/Resource/Agreement.html#Privacy">《光宇用户保护隐私条款》</a></p>
					<input type="button" value="" className="logBtn" onClick={()=> this.props.history.push('/login')}/>
				</div>
				{/* <!--验证码弹框--> */}
				<div className="yzm chinawrap2" style={{display:'none'}}></div>
			</div>
		)
	}
}

export default withRouter( MyReg );