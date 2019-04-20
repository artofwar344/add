<template>
  <div class="basic-info-page">
    <towtop :name="titleName"/>
    <div class="container">
      <div class="info-card">
        <div class="header">
          <img class="avatarImg" :src="avatar ? avatar : require('../../../../../assets/images/ybj/img-my@3x.png')" alt="">
          <p class="name">{{name}}</p>
          <p class="info" @click="jumpTo('userInfoYBJ', {userInfo: userInfo})">基本信息 ></p>
        </div>
        <div class="detail" :class="type === '1' ? 'city' : 'country'">
          <div class="item">
            <p class="num">{{balance}}元</p>
            <p class="label">账户余额</p>
          </div>
          <div class="item middle" v-if="type === '1'">
            <p class="num">{{income}}元</p>
            <p class="label">账户总收入</p>
          </div>
          <div class="item" v-if="type === '1'">
            <p class="num">{{outlay}}元</p>
            <p class="label">账户总支出</p>
          </div>
        </div>
      </div>

      <div class="item-detail">
        <div class="item" v-for="(item, index) in currentListData" :key="index"
        @click="jumpTo(item.jumpRoute, {currentType: item.currentType, user: user})">
          <img class="icon" :src="item.img" alt="">
          <p class="title">{{item.title}}</p>
        </div>
      </div>
      
    </div>

    <Popupprompt
      v-model="popupVisible"
      :title="content.title"
      :btn-list= "content.btnList"
      :confirm-btn = {}
      :cancel-btn = {}
      @click = "clickbtn">
        <div slot="othercontent">
          请到“我的--账户--基本医疗保险”中绑定您的医疗账户后再操作！
        </div>
    </Popupprompt>
  </div>
</template>

<script>
import towtop from "@/components/HederTwo";

let instanceLoading 

export default {
  data() {
    return {
      type: '1',   // 1:城镇  2:城乡
      name: '姓名',
      balance: '0',
      income: '0',
      outlay: '0',
      avatar: '',
      userInfo: {},
      popupVisible: false,
      userName: sessionStorage.getItem('username') !== 'null' ? sessionStorage.getItem('username') : '',
      userPhone: sessionStorage.getItem('userphone') !== 'null' ? sessionStorage.getItem('userphone') : '',
      cardId: sessionStorage.getItem('cardid') !== 'null' ? sessionStorage.getItem('cardid') : '',
      content: {
        title: "提示",
        btnList: [
          {
            id: "btn1",
            text: "确认",
            primary: true
          },
        ]
      },
      user: {
        name: window.sessionStorage.getItem('username') !== 'null' ? window.sessionStorage.getItem('username') : '',
        phone: window.sessionStorage.getItem('userphone') !== 'null' ? window.sessionStorage.getItem('userphone') : '',
        idcard: window.sessionStorage.getItem('cardid') !== 'null' ? window.sessionStorage.getItem('cardid') : '',
        area: window.sessionStorage.getItem('areaYBJ') !== 'null' ? window.sessionStorage.getItem('areaYBJ') : '',
        num: window.sessionStorage.getItem('numYBJ') !== 'null' ?window.sessionStorage.getItem('numYBJ') : '',

        // name: '易家成',
        // phone: '13908710001',
        // idcard: '530402201711283238',
      },
      listData: [
        {
          img: require('../../../../../assets/images/ybj/img-jiaofei@2x.png'),
          title: '缴费信息',
          jumpRoute: 'paymentInfoYBJ',
          currentType: this.$route.name === 'cityInsuranceInquire' ? '1' : '2'
        },
        {
          img: require('../../../../../assets/images/ybj/img-xiaofei@2x.png'),
          title: '消费信息',
          jumpRoute: 'consumptionInfoYBJ',
          currentType: this.$route.name === 'cityInsuranceInquire' ? '1' : '2'
        },
      ]

    }
  },
  components: {
    towtop
  },
  created () {
    this.openManualToast()

    if (this.$route.name === 'cityInsuranceInquire') {
      this.fetchCityUserInfoYBJ()
    }

    if (this.$route.name === 'countryInsuranceInquire') {
      this.fetchCountryUserInfoYBJ()
    }

  },
  computed: {
    titleName () {
      if (this.$route.name === 'cityInsuranceInquire') {
        this.type = '1'
        return '城镇职工医保信息查询'
      } else {
        this.type = '2'
        return '城乡居民医保信息查询'
      }
    },
    currentListData () {
      console.log(this.listData.length)
      if (this.$route.name === 'cityInsuranceInquire' && this.listData.length === 2) {
        this.listData.push({
          img: require('../../../../../assets/images/ybj/img-huaru@2x.png'),
          title: '资金划入明细',
          jumpRoute: 'fundingYBJ',
          currentType: '1'
        })
        return this.listData
      } else {
        return this.listData
      }
    }
  },
  methods: {
    openManualToast () {
      instanceLoading = this.$toast({
        message: '加载中...',
        iconType: 'loading',
        manualClose: true
      })   
    },

    jumpTo (routeName, param) {
      if (param) {
        this.$router.push({name: routeName, params: param})
      } else {
        this.$router.push({name: routeName})
      }
    },

    clickbtn (id) {
      if (id === 'btn1') {
        this.popupVisible = false
        this.$CallModule('close', '关闭')
      }
    },

    // 获取参保地区
    fetchUserInsuranceArea () {
      let params = {
        "txnCommCom": {
          "txnIttChnlId": "1",
          "txnIttChnlCgyCode": "1",
          "tRecInPage": "1",
          "tPageJump": "10"
        },
        "txnBodyCom": {
          "matter_id": window.sessionStorage.getItem("matterid"),
          "aac058": "1010",
          "aac002": this.cardId,
          "aac003": this.userName,
          // "aac002": "530402201711283238",
          // "aac002": "532429197002050012",
          // "aac003": '李光红',

          // "aac002": "530402201711283238",
          // "aac003": '易家成',
        }
      }

      return this.$ajaxRequest("post", "/gsp/mng90056", params)
    },
    
    // 获取个人编号
    fetchUserInsuranceNum (area) {
      let params = {
        "txnCommCom":{
          "txnIttChnlId":"1",
          "txnIttChnlCgyCode":"1"
        },
        "txnBodyCom":{
          "matter_id": window.sessionStorage.getItem("matterid"),
          "aac058":"1010",
          "aaf017": area.aaf017,
           "aac002": this.cardId,
          "aac005": this.userPhone,
          "aac003": this.userName,

          // "aac002": "532429197002050012",
          // "aac005": '13908710001',
          // "aac003": '李光红',

          // "aac002": "530402201711283238",
          // "aac005": '13908710001',
          // "aac003": '易家成',
        }
      }
      return this.$ajaxRequest("post", "/gsp/mng80110", params)
    },

    fetchCityUserInfoYBJ () {

      // let area = await this.fetchUserInsuranceArea()
      // let number = await this.fetchUserInsuranceNum(area)

      // if (!(area.aaf017 || number.rowdatas)) {
      //   instanceLoading.close()
      //   this.$toast('查不到用户相关医保信息')
      //   return
      // }

      // this.user.area = area.aaf017
      // this.user.num = number.rowdatas[0].aac001

      if (this.user.area === 'null' || this.user.num === 'null') {
        instanceLoading.close()
        this.popupVisible = true
      }

      let params = {
        txnCommCom: {
          tRecInPage:"",
          tPageJump:"",
          txnIttChnlId:"1"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          Crdt_Tp: "1010",
          Idv_ID:  this.user.num,
          Insrd_City: this.user.area,
          crdt_no: this.cardId,
          mblph_no: this.userPhone,
          // crdt_no: "530402201711283238",
          // "aac002": "532429197002050012",
          // mblph_no: '13908710001',
        }
      }

      this.$ajaxRequest("post", "/gsp/mng19036", params).then(res => {
        console.log(res)
        this.userInfo = res

        this.name = res.Nm
        this.income = res.Acc_Tot_Incm
        this.outlay = res.Acc_Tot_Expn
        this.balance = res.AcBa

        instanceLoading.close()
      }).catch(e => {
        this.$toast('查不到用户相关医保信息')
        instanceLoading.close()
      })
    },

    fetchCountryUserInfoYBJ () {

      // let area = await this.fetchUserInsuranceArea()
      // let number = await this.fetchUserInsuranceNum(area)

      // if (!(area.aaf017 || number.rowdatas[0].aac001)) {
      //   instanceLoading.close()
      //   this.$toast('查不到用户相关医保信息')
      // }

      // this.user.area = area.aaf017
      // this.user.num = number.rowdatas[0].aac001

      if (this.user.area === 'null' || this.user.num === 'null') {
        instanceLoading.close()
        this.popupVisible = true
      }

      let params = {
        "txnCommCom":{
          "tRecInPage":"10",
          "tPageJump":"1",
          "txnIttChnlId":"1"
        },
        "txnBodyCom":{
          "matter_id": window.sessionStorage.getItem("matterid"),
          "Crdt_Tp": "1010",
          "Insrd_City": this.user.area,
          "Idv_ID": this.user.num,
          crdt_no: this.cardId,
          mblph_no: this.userPhone,
          // "crdt_no": "530402201711283238",
          // "mblph_no": "13908710001",
        }
      }

      this.$ajaxRequest("post", "/gsp/mng19040", params).then(res => {
        console.log(res)
        this.userInfo = res

        this.name = res.Nm
        this.balance = res.AcBa

        instanceLoading.close()
      }).catch(e => {
        this.$toast('查不到用户相关医保信息')
        instanceLoading.close()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.basic-info-page {
  height: 100;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    overflow: auto;

    .info-card {
      margin: 0.24rem;
      padding: 0 0.2rem;
      height: 4.9rem;
      border-radius: 20px;
      background: #fff;
      display: flex;
      flex-direction: column;

      .header {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.44rem;
        border-bottom: 1px solid #ECECEC;

        .avatarImg {
          height: 1.28rem;
          width: 1.28rem;
          border-radius: 50%;
          margin-bottom: 0.28rem;
        }
        .name {
          font-family: PingFangSC-Semibold;
          font-size: 17px;
          color: #000000;
          letter-spacing: -0.41px;
          margin-bottom: 6px;
        }
        .info {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          letter-spacing: -0.29px;
        }
      }

      .detail {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.12rem 0;

        .item {
          text-align: center;
          padding: 0.2rem 0.43rem;
          font-family: PingFangSC-Regular;
          .num {
            font-size: 16px;
            color: #2D7FFC;
            letter-spacing: -0.39px;
            margin-bottom: 4px;
          }

          .label {
            font-size: 12px;
            color: #666666;
            letter-spacing: -0.29px;
          }

        }
      }

      .detail.city .item.middle {
        border-left:1px solid #ECECEC;
        border-right: 1px solid #ECECEC;
      }
    }
    
    .item-detail {
      background: #fff;
      padding: 0 0.46rem;

      .item {
        height: 1.12rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ECECEC;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0.19px;


        .icon {
          height: 0.52rem;
          width: 0.52rem;
          margin-right: 0.26rem;
          display: inline-block;
        }
      }

    }
  }

  .hui-pagePrompt {
    background: #fafafa;
    width: 80%;
  }
}

.hui-btn.is-block {
    width: 45%;
    margin: 0 auto;
  }

</style>

