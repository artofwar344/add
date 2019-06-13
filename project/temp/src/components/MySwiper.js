import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

class MySwiper extends Component {
	componentDidMount(){
		this.swiperFn();
	}
	swiperFn(){
		// eslint-disable-next-line
		let mySwiper = new Swiper('.swiper-container', {
			loop: true,
			speed:1000,
			autoplay:{
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination'
			}
		})
	}
	render(){
		return (
			<div className="swiper-container swiper-container-horizontal">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<Link to={"javascript:;"}>
							<img alt="轮播图" src="http://scgg.gyyx.cn/wd/m/20190409/images/img01.jpg"/>
						</Link>
					</div>
					<div className="swiper-slide">
						<Link to="javascript:;">
							<img alt="轮播图" src="http://scgg.gyyx.cn/wd/m/20190409/images/img02.jpg"/>
						</Link>
					</div>
					<div className="swiper-slide">
						<Link to="javascript:;">
							<img alt="轮播图" src="http://scgg.gyyx.cn/wd/m/20190409/images/img03.jpg"/>
						</Link>
					</div>
					<div className="swiper-slide">
						<Link to="javascript:;">
							<img alt="轮播图" src="http://scgg.gyyx.cn/wd/m/20190409/images/img04.jpg"/>
						</Link>
					</div>
					<div className="swiper-slide">
						<Link to="javascript:;">
							<img alt="轮播图" src="http://scgg.gyyx.cn/wd/m/20190409/images/img05.jpg"/>
						</Link>
					</div>
				</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	}
}

export default MySwiper;