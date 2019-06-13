import React, { Component } from 'react';
import MySwiper from '../../components/MySwiper';
import SelectServer from './components/selectServer';
import $ from 'jquery';

class ReceivePrize extends Component {
	componentWillMount(){
		//this.loginState();
	}
	//登录状态
	loginState(){
		let _this = this;
		$.ajax({
			type:"get",
			url:"http://reg.gyyx.cn/Login/Status",
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			data:{
				r: Math.random()
			},
			success: function(res){
				if( !res.IsLogin ){
					console.log( _this )
					_this.props.history.push( '/');
					//window.location.href = loginLink;
				}
			}
		});
	}
	
	render(){
		return (
			<div>
				<input type="hidden" name="batchId" id="batchId" value="19" />
				<input type="hidden" name="batchIdj" id="batchIdj" value="18" />
				<input type="hidden" name="pageType" id="pageType" value="1" />
				<div className="wrap">
					<MySwiper />
					<SelectServer />
					<div className="part04">
						<a href="javascript:;"><img alt="广告图" src="http://scgg.gyyx.cn/wd/m/20190409/images/wd_sewm01.png" /></a>
					</div>
				</div>
				<script src="http://image.gyyxcdn.cn/upload/common/js/m/zepto-1.2.0.min.js"></script>
				<script src="http://image.gyyxcdn.cn/upload/common/js/m/jsfontsize1.0.1.min.js" ></script>
				<script src="http://image.gyyxcdn.cn/upload/common/js/m/swiper-4.0.3.min.js"></script>
			</div>
		)
	}
}

export default ReceivePrize;