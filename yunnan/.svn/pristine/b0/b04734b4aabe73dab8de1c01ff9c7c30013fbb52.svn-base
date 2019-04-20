<style>
.txt_p{
    padding: .1rem 0;
    font-size: .32rem;
}
#qrcode {
  width: 4rem;
  margin: 1.2rem auto .2rem;
}
#qrcode canvas, #qrcode img{
  width:100%;
}
</style>
<template>
	<div class="box">
		<towtop :name="hadertow" />
    <div id="qrcode"></div>
    <!-- 驾驶证 -->
    <div v-if="driveState == true">
        <p class="txt_p">{{xm}}的驾驶证二维码</p>
        <p class="txt_p">({{jszh}})</p>
    </div> <!-- End 驾驶证 -->
    <!-- 行驶证 -->
    <div v-if="travelState == true">
        <p class="txt_p">{{xm}}的{{hphm}}行驶证二维码</p>
    </div><!-- End 行驶证 -->
    <!-- 状态不等于4 -->
    <p class="txt_p" v-if="errorState == true">{{errorMsg}}</p>
	</div>
</template>
<script>
	import towtop from '../../../../components/HederTwo'
	import QRCode from 'qrcodejs2'
	export default {
		components: {
			towtop
		},
		data() {
			return {
        params: this.$route.query,
				hadertow: '云南交警证件信息化',
        codeMsg: '',
        errorMsg: "",
        driveState: Boolean,
        travelState: Boolean,
        errorState:Boolean,
        jszh:""
			}
    },
		mounted () {
      let _this = this;
      let police  = sessionStorage.getItem("police");
      if(_this.params.datatext.Result && _this.params.datatext.Result[0].endata.length>0){
        if(police=="1"){
            this.drive()
        }else{
            this.travel()
        }
        //裕农通APP功能，勿删！
        if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
          PJF.ynt.A0161G058()
        }
      }else{
        _this.errorState = true;
        _this.errorMsg = _this.params.datatext.Message;
      }


        var arrow = document.getElementsByClassName("hui-icon_arrow-left")
        arrow[0].style="display:none;"

		},
    methods: {
      //驾驶证
      drive(){
        let _this = this;
        _this.driveState = true;
        _this.xm= this.params.datatext.Result[0].xm;
        _this.jszh = this.params.datatext.Result[0].jszh;
        this.qrcode()
      },
      // 行驶证
      travel(){
        let _this = this;
        _this.travelState = true;
        _this.xm= this.params.datatext.Result[0].xm;
        _this.hphm= this.params.datatext.Result[0].hphm;
        this.qrcode()
      },
      qrcode () {
        let qrcode = new QRCode('qrcode', {
          width: 100,
          height: 100, // 高度
          text: this.params.datatext.Result[0].endata, // 二维码内容
          render: 'table', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
          background: '#f0f',
          foreground: '#ff0',
        })
        console.log(qrcode)
      },
      setPageText (type) {
        const _self = this
        if (type === '1') {
          _self.codeMsg = '我的驾驶证二维码'
        } else {
          _self.codeMsg = '我的行驶证二维码'

        }
      },
      setErrorMsg (msg) {
        const _self = this
        switch (msg) {
          case '-1':
            _self.errorMsg = '您所填写信息不全或者包含特殊字符，请核对后重新输入'
            _self.ztmsg = '您所填写信息不全或者包含特殊字符，请核对后重新输入'
            break
          case '11':
            _self.errorMsg = '该车辆已纳入黄标车目录，如有疑问请咨询登记地公安交警车辆管理所'
            _self.ztmsg = '该车辆已纳入黄标车目录，如有疑问请咨询登记地公安交警车辆管理所'
            break
          case  '-2':
            _self.errorMsg = '您办理的电子证照二维码经系统查询没有记录'
            _self.ztmsg = '您办理的电子证照二维码经系统查询没有记录'
            break
          case '-3':
            _self.errorMsg = '您办理的次数过多，请稍后再试。'
            _self.ztmsg = '您办理的次数过多，请稍后再试。'
            break
          case '0':
            _self.errorMsg = '您办理的证照二维码受理出错，请稍后再试。'
            _self.ztmsg = '您办理的证照二维码受理出错，请稍后再试。'
            break
          case '1':
            _self.errorMsg = '您申领的证照二维码正在受理，请稍后查询。'
            _self.ztmsg = '您申领的证照二维码正在受理，请稍后查询。'
            break
          default:
            _self.$toast('错误信息异常')
        }
      },
      goto () {
        const _self = this
        const page = sessionStorage.getItem('zjxxhType')
        sessionStorage.removeItem('zjxxhType')
        _self.$router.push({
          path: '/pagework/:page',
          // name: '',
          params: {
            page
          }
        })
      }
    }
	}

</script>

<style scoped="successerweima.vue">
	.header {
		position: relative;
		width: 100%;
		height: 0.8rem;
		background-color: #ccc;
		text-align: center;
	}
  .errorText{}

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
	.sueecsserweima img{
		display: inline-block !important;
		margin-top: 0.5rem;
		width: 4.6rem;
		height: 4.6rem;
	}
	.p1 {
		font-size: 0.36rem;
		font-weight: 700;
		margin-top: 0.5rem;
	}
	.p2 {
		font-size: 0.24rem;
		margin-top: 0.35rem;
		color: #FC4B2D;
	}
	.hui-btn.is-block {
		width:70%;
		height: 0.8rem;
		margin: 0.5rem auto;
		background-color: #2D7FFC;
		font-size: 0.3rem;
	}

</style>

