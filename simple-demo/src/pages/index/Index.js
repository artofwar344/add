import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import MySwiper from '../../components/MySwiper';
import MyReg from './components/MyReg';
import MobileReg from './components/MobileReg';

class Index extends Component{
	constructor( props ){
		super( props );
		this.state = {
			tabReg: true
		}
		
		this.tabFn = this.tabFn.bind(this);
		
		this.curClass = 'a01';
	}
	componentDidMount(){
		
	}
	//注册类型切换
	tabFn(e){
		let { tabReg } = this.state;
		if( this.curClass !== e.target.className ){
			this.curClass = e.target.className;
			this.setState({
				tabReg: !tabReg
			})
		}
	}
	render(){
		let { tabReg } = this.state;
		return (
			<div id="indexPage">
				<input type="hidden" name="pageType" id="pageType" value="1" />
				<div className="wrap">
				<MySwiper />
				<div className="part02"> 
					<ul className="regTab">
						<li className={tabReg?"on":""}><a href="javascript:;" onClick={this.tabFn} className="a01">个性注册</a></li>
						<li className={tabReg?'':"on"}><a href="javascript:;" onClick={this.tabFn} className="a02">手机注册</a></li>
					</ul>
					<MyReg  dataShow={tabReg} />
					<MobileReg dataShow={!tabReg} />
				</div>
				<div className="part04">
					<Link to="###"><img alt="广告图" src="http://scgg.gyyx.cn/wd/m/20190409/images/wd_sewm01.png"/></Link>
				</div>
			</div>
		</div>
		)
	}
}

export default Index;