import React,{ Component } from 'react';
import $ from 'jquery';

class SelectServer extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			ddlNetType: <option value="0">请选择</option>,
			serverList: <option value="0">请选择</option>,
			jdBtn: false
		}
		
		this.wipeRepeat();
		
		this.arr1 = [];
		this.arr2 = [];
		this.arr3 = [];
		this.arr4 = [];
		this.arr5 = [];
		this.arr6 = [];
		this.commit_flag = 1;
		
		this.changeServer = this.changeServer.bind(this);
		this.getNoviceCard = this.getNoviceCard.bind(this);
	}
	
	componentDidMount(){
		this.getServer();
		//点击关闭
		$('.close').click(function(){
			$('.tc,.mask').hide();
		})
	}
	
	wipeRepeat(){
		Array.prototype.wipeRepeat = function() {
		    this.sort();
		    var re = [this[0]];
		    for (var i = 1; i < this.length; i++) {
		        if (this[i] !== re[re.length - 1]) {
		            re.push(this[i]);
		        }
		    }
		    return re;
		};
	}
	
	compare(value1, value2) {
	    return value2 - value1;
	}
	
	 //获取服务器列表
	getServer() {
		let _this = this;
		$.ajax({
			url: "http://activity.gyyx.cn/novice/cross/server/list",
			type: "GET",
			dataType: "jsonp",
			jsonp: "jsoncallback",
			data: {
				batchId: 18,
				r: Math.random()
			},
			success: function(res) {
				if (res.isSuccess && res.data) {
					var allarr = [];
					allarr= res.data;
					$.ajax({
						url: "http://activity.gyyx.cn/novice/cross/server/list",
						type: "GET",
						dataType: "jsonp",
						jsonp: "jsoncallback",
						data: {
							batchId: 19,
							r: Math.random()
						},
						success: function(data) {
							if ( data.isSuccess ) {
								if (data.data.length !== 0) {
									// var obj = data.data.reverse();
									var obj = allarr.concat(data.data);
									for (var i = 0; i < obj.length; i++) {
										_this.arr4.push(obj[i].netTypeCode);
										if (obj[i].netTypeCode === 1) {
											_this.arr1.push(obj[i])
										}
										if (obj[i].netTypeCode === 2) {
											_this.arr2.push(obj[i])
										}
										if (obj[i].netTypeCode === 3) {
											_this.arr3.push(obj[i])
										}
										if (obj[i].netTypeCode === 4) { //新增经典服
											_this.arr6.push(obj[i])
										}
									}
									if (_this.arr4.length < 1) {
										_this.arr5 = [];
									} else {
										_this.arr5 = _this.arr4.wipeRepeat();
									}
									_this.arr5.sort(_this.compare);
									var html = [];
									if (_this.arr5.length < 1) {
										_this.setState({
											ddlNetType: <option value="0">请选择</option>
										})
									} else {
										var name = '';
										for (var j = 0; j < _this.arr5.length; j++) {
											if (_this.arr5[j] === 1) {
												name = "网通"
											}
											if (_this.arr5[j] === 2) {
												name = "电信"
											}
											if (_this.arr5[j] === 3) {
												name = "双线"
											}
											if (_this.arr5[j] === 4) {
												name = "经典"
											}
											html.push( <option key={j} value={_this.arr5[j]}>{name}</option> );
										}
										_this.setState({
											ddlNetType: html
										})
										_this.getserverlist();
									}
									//判断区服展示相应高亮,另一个按钮置灰
									let index =  _this.netType.selectedIndex;
									let curText = _this.netType.options[index].text;
									if (curText === "经典") {
										_this.setState({
											jdBtn: true
										})
										//领取经典服礼包
									} else {
										_this.setState({
											jdBtn: false
										})
//										$(".btn02").attr("src", "images/jdfBtn_hui.png");
										//3699礼包
									}
								}
							} else {
								_this.setState({
									serverList: <option value='0'>请选择</option>
								})
							}
						},
						error: function() {
							console.log("获取服务器列表接口,网络异常!");
						}
					});
				}
			}
		});
	   
	}
	
	getserverlist() {
		let _this =this;
	    var thistext = this.netType.value;
	    var optionhtml = [];
	    if (thistext === '0') {
	        optionhtml = [<option value='0'>请选择</option>];
	    } else if (thistext === '1') {
	        if (_this.arr1.length < 1) {
	            //optionhtml += '<option code = "0"  value="0">请选择</option>';
	        } else {
	            for (var j = 0; j < _this.arr1.length; j++) {
	                //optionhtml += '<option code = "' + _this.arr1[j].gameId + '"  value="' + _this.arr1[j].serverId + '">' + _this.arr1[j].serverName + '</option>';
					optionhtml.push( <option key={j} code={_this.arr1[j].gameId} value={_this.arr1[j].serverId}>{_this.arr1[j].serverName}</option> )
	            }
	        }
	    } else if (thistext === '2') {
	        if (_this.arr2.length < 1) {
	            //optionhtml += '<option code = "0"  value="0">请选择</option>';
	        } else {
	            for (var f = 0; f < _this.arr2.length; f++) {
					optionhtml.push( <option key={f} code={_this.arr2[f].gameId} value={_this.arr2[f].serverId}>{_this.arr2[f].serverName}</option> )
	            }
	        }
	    } else if (thistext === '3') {
	        if (_this.arr3.length < 1) {
	            //optionhtml += '<option code = "0"  value="0">请选择</option>';
	        } else {
	            for (var u = 0; u < _this.arr3.length; u++) {
					optionhtml.push( <option key={u} code={_this.arr3[u].gameId} value={_this.arr3[u].serverId}>{_this.arr3[u].serverName}</option> )
	            }
	        }
	    } else if (thistext === '4') {
	        if (_this.arr6.length < 1) {
	
	        } else {
	            for (var a = 0; a < _this.arr6.length; a++) {
					optionhtml.push( <option key={a} code={_this.arr6[a].gameId} value={_this.arr6[a].serverId}>{_this.arr6[a].serverName}</option> )
	            }
	        }
	    }
		_this.setState({
			serverList: optionhtml
		})
	}
	
	 /*end获取服务器列表*/
	changeServer(e){
		let index = e.target.selectedIndex;
		let curText = e.target.options[index].text;
		if(curText !== '经典'){
			this.setState({
				jdBtn: false
			})
		}
		if(curText === '经典'){
			this.setState({
				jdBtn: true
			})
		}
		this.getserverlist();
	}
	
	/*领取礼包*/
	getNoviceCard(e) {
		let _this = this;
		var defaults = {
			//serverSelObj: $("#sel_serverlist"), //区组(2)select对象
			//noviceCardObj: $("#txtNoviceCard"), //输入新手卡对象
			checkCodeObj: $("input[name=checkcode]"), //验证码输入对象
			isLoginUrl: "http://reg.gyyx.cn/Login/Status", //是否登录接口
//          getNoviceCardUrl: "http://activity.gyyx.cn/novice/pc/card/bag/send", //获取新手卡接口
			getNoviceCardUrl: "http://activity.gyyx.cn//novice/cross/bag/send", //获取新手卡接口
			errorPlaceObj: $(".errorp"), //错误提示信息容器对象
			gameCategory: 2, //游戏类型编号（2是问道）
			//batchIdObj: getQuery("batchId")
		}
		let curClassName = e.target.className;
		let batchId = '';
		if( curClassName === 'btn01' ){
			batchId = 19;
			if( this.state.jdBtn ){
				return false;
			}
		}else{
			if( !this.state.jdBtn ){
				return false;
			}
			batchId = 18;
		}
		if( this.serverCode.value === 0 ){
			alert("请选择服务器！");
		}else{
			if( _this.commit_flag ){
				$.ajax({
					url: defaults.getNoviceCardUrl,
					type: "get",
					dataType: "jsonp",
					jsonp: "jsoncallback",
					data: {
						r: Math.random(),
						serverId: _this.serverCode.value,
						batchId: batchId, //defaults.batchIdObj,
						gameId: defaults.gameCategory,
						sourceType: 'card',
						loginType: 'login',
						verifyCode: ''
					},
					beforeSend: function() {
						$('.mask,.tc02').show();
						_this.commit_flag = 0;
					},
					complete: function() {
						_this.commit_flag = 1;
					},
					success: function(d) {
						$('.mask,.tc02').hide();
						if (d.isSuccess) {
							$('.mask,.tc01').show();
						} else {
							if (d.message === "needComplete") {
								window.location.href = d.data + window.location.href;
								return;
							} else {
								//jump = "0" //jump如果为0 ,说明不可以跳转到礼包弹层 
								if (d.message === '您可能已经在本活动或其他活动中领取了同类型礼包哟！！') {
									alert(d.message);
									return;
								} else {
									alert(d.message);
								}
							}
						}
					}
				});
			}
		}
	};
	
	render(){
		let { ddlNetType, serverList, jdBtn } = this.state;
		
		return(
			<div className="part02"> 
				<p className="seleTxt">恭喜您注册/登录成功，现在可领取礼包！</p>
				<div className="seleBox">
					<select id="ddlNetType" onChange={this.changeServer} ref={(val)=>this.netType = val}>{ddlNetType}</select>
				</div>
				<div className="seleBox">
					<select ref={(val)=>this.serverCode = val} id="sel_serverlist">{serverList}</select>
				</div>
				<div className="btnBox">
					<input type="button" onClick={this.getNoviceCard} style={{backgroundImage: jdBtn?'url(http://scgg.gyyx.cn/wd/m/20190409/images/wd_sbtn03_gray.png)':'url(http://scgg.gyyx.cn/wd/m/20190409/images/wd_sbtn03.png)'}} value="" className="btn01"/>
					<p className="btnNotice">此礼包经典版不可用</p>
					<input type="button" onClick={this.getNoviceCard} style={{backgroundImage: jdBtn?'url(http://scgg.gyyx.cn/wd/m/20190409/images/wd_sbtn03.png)':'url(http://scgg.gyyx.cn/wd/m/20190409/images/wd_sbtn03_gray.png)'}} value="" className="btn02"/>
					<p className="btnNotice">此礼包仅限经典版大服使用</p>
				</div>
				{/* <!--弹层--> */}
				<div className="mask"></div>
				{/* <!--礼包领取成功--> */}
				<div className="tc tc01" style={{position:'fixed',top:'15%',left:'5%',zIndex:999,display:'none'}}>
					<div className="tcCont">
						<h3>您的礼包已领取</h3>
						<p>请使用电脑下载《问道》<br />登录游戏查收</p>
						<a href="http://wd.gyyx.cn/m/p.shtml" className="tcBtn">访问问道手机官网</a>
					</div>
					<a href="javascript:;" className="close"> </a>
				</div>
				{/* <!--领取礼包中--> */}
				<div className="tc tc02" style={{position:'fixed',top:'15%',left:'5%',zIndex:999,display:'none'}}>
					<div className="tcCont">
						<h3 style={{paddingTop:'1.76rem'}}>正在领取中...</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default SelectServer;