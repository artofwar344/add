<template>
	<div class="box">
		<towtop :name="hadertow" />
		<img src="../../../../../static/image/icon_accept.png" alt="">
		<p>{{pageText}}</p>
	</div>
</template>
<script>
import towtop from '../../../../components/HederTwo'
import { cenurl } from "../../../../components/toptow.js"
export default {
	components: {
		towtop
	},
	data() {
		return {
			hadertow: '我的驾驶证二维码',
			number:'',
			queryname:'',
			queryscope:''
		}
	},
  computed: {
	    pageText () {
        const _self = this
        const keynumber = _self.$route.query.keynumber
        const str = keynumber === `1` ? `您办理的驾驶证二维码正在受理` : `您办理的行驶证二维码正在受理`
        _self.hadertow =  keynumber === `1` ? `我的驾驶证二维码` : `我的行驶证二维码`
        return str
      }
  },
	mounted (){
    var arrow = document.getElementsByClassName("hui-icon_arrow-left")
    arrow[0].style="display:none;"

		if(this.$route.query.keynumber=="1"){
			let setdata={
					"txnBodyCom":{
						"matter_id":window.sessionStorage.getItem("matterid"),//window.sessionStorage.getItem("matterid")
						"work_id":"1",
						"member_id":window.sessionStorage.getItem("userid"),
						"org_id":"1",
						"chann_id":"1",
						"sfzmhm":window.sessionStorage.getItem("cardid"),
						"xm":window.sessionStorage.getItem("username"),
						"lictype":"1",
						"ly":"05847f7d"
					}
				}
				let page = {
						"tRecInPage":"11"
				}
      this.$ajaxRequest("post", '/gsp/mng19011', setdata,page).then((res) => {
        console.log(res)
        this.$router.push({
          path: '/successerweima',
          query: {
            datatext: res,
            type: this.$route.query.keynumber
          }
        })
			}).catch((response) => {});

		}else if(this.$route.query.keynumber=="2"){
			// this.$route.query.carnumber
			// this.$route.query.cartype
			let carnumber = "云"+this.$route.query.carnumber;
			let setdata={
					"txnCommCom":{
						"tRecInPage":"11"
					},
					"txnBodyCom":{
						"matter_id":window.sessionStorage.getItem("matterid"),//
						"work_id":"1",
						"member_id":window.sessionStorage.getItem("userid"),
						"org_id":"1",
						"chann_id":"1",
						"sfzmhm":window.sessionStorage.getItem("cardid"),//
						"xm":window.sessionStorage.getItem("username"),//
						"hphm":carnumber,
						"hpzl":this.$route.query.cartype,
						"lictype": "2",
						"ly":"05847f7d"
					}
				}
      this.$ajaxRequest("post", '/gsp/mng19011', setdata).then((res) => {
        console.log(res)
        this.$router.push({
          path: '/successerweima',
          query: {
            datatext: res,
            type: this.$route.query.keynumber
          }
        })
      }).catch((response) => {
      });
		}
	}
}
</script>
<style scoped="wating.vue">

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
		img {
			margin-top: 2.5rem;
			width: 2.4rem;
			height: 2.32rem;
		}
		p {
			font-size: 0.35rem;
			color: #2D7FFC;
			margin-top: 0.5rem;
			font-weight: 700;
		}

</style>
