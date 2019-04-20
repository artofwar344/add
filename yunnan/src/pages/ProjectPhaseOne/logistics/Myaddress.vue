<template>

  <div class="address">
    <towtop style="margin: 0;" :name="titlename"/>
    <div class="addressTop"><h1>快递地址</h1></div>
    <div class="listone">
      <div class="Noteone" v-for="v in list" @click='selectedAddress(v)'>
        <h1>{{v.post_name}}<a>{{v.post_tel}}</a></h1>
        <p>{{v.prov_code}}{{v.city_code}}{{v.cnty_code}}<br/>{{v.address}} </p>
        <img src="../../../../static/image/编辑.png"/>
      </div>
    </div>
    <div class="chargeBtn">
      <button @click="toAdd">添加地址</button>
    </div>
  </div>
</template>

<script>
  import towtop from '../../../components/HederTwo'

  export default {
    data() {
      return {
        titlename: '我的地址',
        list: [],
        remark:''

      }
    },
    components: {
      towtop
    },
    methods: {
    	selectedAddress(v){
    		let saveAddress= {
        				prov_code:v.prov_code,
						city_code:v.city_code,
						cnty_code:v.cnty_code,
						 address:v.address,
						 postname:v.post_name,
						 tel:v.post_tel,
						 member_id:window.sessionStorage.getItem("userid"),
        	}
    		if(this.remark == 'send'){
    			this.$store._modules.root.state.$expressdelivery.sendUserInfo = saveAddress
    		}else if(this.remark == 'save'){
    			this.$store._modules.root.state.$expressdelivery.saveSendUserInfo = saveAddress
    		}else{
    				this.$store._modules.root.state.$expressdelivery.sendUserInfo = saveAddress
    		}
    		this.$router.push('/ExpressDelivery')
    	},
      toAdd() {
        this.$router.push({path: '/UpdateAddress'})
      },
      toEdit(postId) {
        this.$router.push({path: '/编辑地址页面', query: postId})
      }
    },
    created() {
      let data = {
        txnCommCom: {
          tStsTraceId: "110567890",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          member_id: window.sessionStorage.getItem("userid")
        }
      }
      this.$ajaxRequest('post', '/gsp/fsx04004', data)
        .then(res => {
         this.list = res.list
        })
        .catch(error => {
          console.log(error)
        })
    },
    mounted(){}
  }
</script>

<style scoped>
  .addressTop {
    width: 100%;
    height: 0.68rem;
    background: #f1f3f6;
    line-height: 0.68rem;
  }

  .addressTop h1 {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #999999;
    letter-spacing: 0.17px;
    text-align: justify;
    padding-left: 0.32rem;
  }

  .Noteone {
    width: 6.82rem;
    height: 1.04rem;
    text-align: left;
    /*background: palegreen;*/
    margin: auto;
    margin-top: 0.2rem;
    position: relative;
    border-bottom: 1px solid #ececec;
  }

  .Noteone h1 {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #333333;
    letter-spacing: 0.17px;
  }

  .Noteone h1 a {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #333333;
    letter-spacing: 0.17px;
    margin-left: 0.2rem;
  }

  .Noteone p {
    font-family: PingFangSC-Regular;
    font-size: 0.23rem;
    color: #666666;
    letter-spacing: 0.14px;
    margin-top: 0.03rem;
  }

  .Noteone img {
    width: 0.42rem;
    height: 0.4rem;
    position: absolute;
    right: 0;
    top: 0.2rem;
  }

  .chargeBtn button {
    width: 5.9rem;
    height: 0.9rem;
    background: #2D7FFC;
    box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.50);
    border-radius: 25px;
    border: none;
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.19px;
    text-align: center;
    margin-top: 1.02rem;
  }

  .listone {
    background-color: #fff;
    padding: 0.2rem 0.2rem;
  }

  .Noteone3 {
    border: none;
  }
</style>
