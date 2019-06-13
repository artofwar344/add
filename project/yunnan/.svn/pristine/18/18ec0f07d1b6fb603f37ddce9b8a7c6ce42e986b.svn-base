<style scoped>
		body {
			background-color: #20212317
		}
		.header {
			position: relative;
			width: 100%;
			height: 0.8rem;
			background-color: #ccc;
			text-align: center;
		}

		.header .title {
			height: 100%;
			line-height: 0.8rem;
			display: inline-block;
			font-size: 0.4rem;
			margin: 0 auto;
		}
		.header a {
			position: absolute;
			top: 0.2rem;
			left: 0.2rem;
			font-size: 0.4rem;
			color: #2c3e50;
		}
		.erwema {
			width: 100%;
		}
		ul {
			text-align: center;
		}
		ul li {
			width: 80%;
			margin: 0.5rem auto;
			background-color: #fff;
			padding: 0.2rem 0.2rem;
		}
		.left {
			display: flex;
			width: 100%;
			float: left;
			text-align: center;
		}
		.right {
			float: right;
			vertical-align: middle;
		}
		.left img {
			display: block;
			margin: 0 .5rem 0 1rem;
			width: 0.9rem;
			height: 0.65rem;
		}
		.left p {
			font-size: 0.35rem;
			font-weight: 700;
			line-height: .65rem;
		}
		.right img{
			display: block;
			width: 2.3rem;
			height: 2.3rem;
		}
		.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
		.clearfix{height:1%;}
		.cha {
			text-decoration: underline;
			font-size: 0.25rem;
			color: #2D7FFC;

		}
</style>

<template>
	<div class="box">
		<towtop :name="titlename"/>
		<div class="erwema">
			<ul>
				<li class="clearfix" v-show="page == 1" @click="mypagework(1)">
					<div class="left">
						<img src="../../../../../static/image/驾驶证@3x.png" alt="" width="90px" height="65px">
						<p>我的驾驶证二维码</p>
					</div>
				</li>
				<li class="clearfix" v-show="page == 2" @click="mypagework(2)">
					<div class="left">
						<img src="../../../../../static/image/行驶证@3x.png" alt="" width="90px" height="65px">
						<p>我的行驶证二维码</p>
					</div>
				</li>
			</ul>
		</div>
		<a  v-show="page == 1" class="cha" @click="look(1)">查看《二维码申请须知》</a>
		<a  v-show="page == 2" class="cha" @click="look(2)">查看《二维码申请须知》</a>
	</div>
</template>
<script>
import towtop from '../../../../components/HederTwo'
	export default {
		components:{
        	towtop,
    	},
		data() {
			return {
				titlename:'云南交警证件信息化',
				page: this.$route.params.page,
			}
		},
    	created () {
    	  const _self = this
    	  sessionStorage.setItem('zjxxhType', _self.page)
    	},
		methods: {
			mypagework(key) {
				if (this.page == '1') {
					this.$router.push('/wating?keynumber='+key)
					sessionStorage.setItem("police",key)
				}
				if (this.page == '2') {
					this.$router.push('/travel?keynumber='+key)
					sessionStorage.setItem("police",key)
				}
				
			},
			look(key) {
				if (this.page == '1') {
					this.$router.push('/erweimainfo?keynumber='+key)
				}
				if (this.page == '2') {
					this.$router.push('/erweimainfo?keynumber='+key)
				}
			}

		},
		watch: {
        '$route' (to, from) {
			console.log(this.$route.params.page);
			this.page = this.$route.params.page;
        }
      },
	}
</script>