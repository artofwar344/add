<template>
  <div class="consumption-info-page">
    <towtop name="消费信息"/>
    <div class="container city" v-if="currentType === '1'">
      <ul class="settleTab">
        <li @click="changeTab('1')" :class="{activeTab: isActive ==='1'}">药店购药</li>
        <li @click="changeTab('2')" :class="{activeTab: isActive === '2'}">门诊</li>
        <li @click="changeTab('3')" :class="{activeTab: isActive === '3'}">住院</li>
      </ul>
      <div class="content">
        <div v-if="isActive ==='1'" class="box">
          <div class="inner-content" v-if="listData.length > 0"
          v-infinite-scroll="loadMore"
          :infinite-scroll-disabled="haveNextPage"
          infinite-scroll-distance="50">
            <div class="city-card" v-for="(item, index) in listData" :key="index">
              <p class="item"><span class="label">支付日期：</span> <span class="value">{{item.PyTm}}</span></p>
              <p class="item"><span class="label">费用总额：</span> <span class="value">{{item.Tot_Eps}}元</span></p>
              <p class="item"><span class="label">医保报销：</span> <span class="value">{{item.Acc_Py}}元</span></p>
              <p class="item"><span class="label">个人支付：</span> <span class="value">{{item.CashPy}}元</span></p>
              <p class="item"><span class="label">消费地点：</span> <span class="value">{{item.TwoSet_Inst_Nm}}</span></p>
            </div>

            <p class="nomore" v-if="!haveNextPage">-- 暂无更多 --</p>
          </div>

          <p class="nomore" v-else>-- 暂无数据 --</p>

        </div>

        <div v-if="isActive ==='2'" class="box">
          <div class="inner-content" v-if="listData.length > 0"
          v-infinite-scroll="loadMore"
          :infinite-scroll-disabled="haveNextPage"
          infinite-scroll-distance="50">
            <div class="city-card" v-for="(item, index) in listData" :key="index">
              <p class="item"><span class="label">支付日期</span> <span class="value">{{item.PyTm}}</span></p>
              <p class="item"><span class="label">费用总额：</span> <span class="value">{{item.Tot_Eps}}元</span></p>
              <p class="item"><span class="label">个人账户支付：</span> <span class="value">{{item.Acc_Py}}</span></p>
              <p class="item"><span class="label">统筹支付：</span> <span class="value">{{item.MedInsr_Bsc_Ovrl_Py}}元</span></p>
              <p class="item"><span class="label">医疗类别：</span> <span class="value">{{item.Mdcl_Cgy}}</span></p>
              <p class="item"><span class="label">起付线：</span> <span class="value">{{item.Srt_Pyln}}元</span></p>
              <p class="item"><span class="label">其它补助：</span> <span class="value">{{item.Othr_Alwc}}元</span></p>
              <p class="item"><span class="label">异地消费：</span> <span class="value">{{item.DiffPlc_Ind}}</span></p>
              <p class="item"><span class="label">医疗机构：</span> <span class="value">{{item.TwoSet_Inst_Nm}}</span></p>
            </div>

            <p class="nomore" v-if="!haveNextPage">-- 暂无更多 --</p>
          </div>

          <p class="nomore" v-else>-- 暂无数据 --</p>
        </div>

        <div v-if="isActive ==='3'" class="box">
          <div class="inner-content" v-if="listData.length > 0"
          v-infinite-scroll="loadMore"
          :infinite-scroll-disabled="haveNextPage"
          infinite-scroll-distance="50">
            <div class="city-card" v-for="(item, index) in listData" :key="index">
              <p class="item"><span class="label">入院时间：</span> <span class="value">{{item.BhospTm}}</span></p>
              <p class="item"><span class="label">费用总额：</span> <span class="value">{{item.Tot_Eps}}元</span></p>
              <p class="item"><span class="label">账户支付：</span> <span class="value">{{item.Acc_Py}}元</span></p>
              <p class="item"><span class="label">统筹支付：</span> <span class="value">{{item.MedInsr_Bsc_Ovrl_Py}}元</span></p>
              <p class="item"><span class="label">大病支付：</span> <span class="value">{{item.Serious_illPy}}元</span></p>
              <p class="item"><span class="label">支付日期：</span> <span class="value">{{item.PyTm}}</span></p>
              <p class="item"><span class="label">出院时间：</span> <span class="value">{{item.OhospTm}}</span></p>
              <p class="item"><span class="label">现金支付：</span> <span class="value">{{item.CashPy}}元</span></p>
              <p class="item"><span class="label">起付线：</span> <span class="value">{{item.Srt_Pyln}}元</span></p>
              <p class="item"><span class="label">其他补助：</span> <span class="value">{{item.Othr_Alwc}}元</span></p>
              <p class="item"><span class="label">医疗类别：</span> <span class="value">{{item.Mdcl_Cgy}}</span></p>
              <p class="item"><span class="label">出院诊断：</span> <span class="value">{{item.Ohosp_Diag}}</span></p>
              <p class="item"><span class="label">包干标准：</span> <span class="value">{{item.Cntrct_RspStd}}元</span></p>
              <p class="item"><span class="label">医疗机构：</span> <span class="value">{{item.TwoSet_Inst_Nm}}</span></p>
            </div>
            <p class="nomore" v-if="!haveNextPage">-- 暂无更多 --</p>
          </div>

          <p class="nomore" v-else>-- 暂无数据 --</p>
        </div>


      </div>
    </div>


    <div class="container country" v-if="currentType === '2'">
      <div class="content" v-if="listData.length > 0" v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="haveNextPage"
      infinite-scroll-distance="50">
        <div class="country-card" v-for="(item, index) in listData" :key="index">
          <p class="item"><span class="label">支付日期：</span> <span class="value">{{item.PyTm}}</span></p>
          <p class="item"><span class="label">费用总额：</span> <span class="value">{{item.Tot_Eps}}元</span></p>
          <p class="item"><span class="label">医保报销：</span> <span class="value">{{item.MedInsr_Bsc_Ovrl_Py}}元</span></p>
          <p class="item"><span class="label">个人支付：</span> <span class="value">{{parseFloat(item.Acc_Py) + parseFloat(item.CashPy)}}元</span></p>
          <p class="item"><span class="label">消费地点：</span><span class="value">{{item.TwoSet_Inst_Nm}}</span></p>
        </div>

        <p class="nomore" v-if="!haveNextPage">-- 暂无更多 --</p>
      </div>
      <p class="nomore" v-else>-- 暂无数据 --</p>
    </div>
  </div>
</template>

<script>
import towtop from "@/components/HederTwo";

let instanceLoading

function dateFormat(time, format) {
    const t = new Date(time);
    const tf = function (i) {
      return (i < 10 ? '0' : '') + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a) => {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear());
        case 'MM':
          return tf(t.getMonth() + 1);
        case 'mm':
          return tf(t.getMinutes());
        case 'dd':
          return tf(t.getDate());
        case 'HH':
          return tf(t.getHours());
        case 'ss':
          return tf(t.getSeconds());
        default:
          break;
      }
    });
}

export default {
  data() {
    return {
      isActive: '1',  // 1:购药  2:门诊  3:住院
      currentPageNum: 1,
      listData: [],
      haveNextPage: true,
      timeNow: new Date(),
    }
  },
  props: [
    'currentType',    // 1:城镇缴费信息 2:城乡
    'user'
  ],
  components: {
    towtop
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     if (from.name === 'cityInsuranceInquire') {
  //       vm.currentType = '1'
  //     }

  //     if (from.name === 'countryInsuranceInquire') {
  //       vm.currentType = '2'
  //     }

  //   })
  // },
  created () {
    if (this.currentType === '1') {
      this.changeTab('1')
    }

    if (this.currentType === '2') {
      this.fetchCountryConsumption()
    }
  },
  computed: {},
  methods: {
    changeTab (tabName){

      // 初始化数据
      this.listData = []
      this.haveNextPage = true
      this.currentPageNum = 1
      this.isActive = tabName

      this.fetchCityConsumption(tabName)
    },

    openManualToast () {
      instanceLoading = this.$toast({
        message: '加载中...',
        iconType: 'loading',
        manualClose: true
      })
    },

    fetchCityConsumption (type) {
      this.openManualToast()

      let params = {
        "txnBodyCom":{
          "matter_id": window.sessionStorage.getItem("matterid"),
          "Crdt_Tp": "1010",
          "crdt_no": this.user.idcard,
          "Idv_ID": this.user.num,
          "mblph_no": this.user.phone,
          "Insrd_City": this.user.area,
          "Fee_Tp": type,                  // 1:购药类 2:门诊类 3:住院类 9:all
          "StDt": '1900-01-01',
          "TmDt": dateFormat(this.timeNow, 'yyyy-MM-dd')
        }
      }

      let page = {
        "tRecInPage":"10",
        "tPageJump": this.currentPageNum.toString(),
      }


      this.$ajaxRequest("post", "/gsp/mng19039", params, page).then(res => {
        console.log(res)
        this.listData = this.listData.concat(res.rowdatas)
        this.currentPageNum = parseInt(res.txnCommCom.tCurrTotalPage) + 1

        if (res.txnCommCom.tCurrTotalPage === res.txnCommCom.totalPage) {
          this.haveNextPage = false
        }

        instanceLoading.close()
      }).catch(e => {
        instanceLoading.close()
      })
    },

    fetchCountryConsumption () {

      this.openManualToast()

      let params = {
        "txnBodyCom":{
          "matter_id": window.sessionStorage.getItem("matterid"),
          "Crdt_Tp": "1010",
          "crdt_no": this.user.idcard,
          "Idv_ID": this.user.num,
          "mblph_no": this.user.phone,
          "Insrd_City": this.user.area,
          "Fee_Tp": '9',                  // 1:购药类 2:门诊类 3:住院类 9:all
          "StDt": '1900-01-01',
          "TmDt": dateFormat(this.timeNow, 'yyyy-MM-dd')
        }
      }

      let page = {
        "tRecInPage":"10",
        "tPageJump": this.currentPageNum.toString(),
      }


      this.$ajaxRequest("post", "/gsp/mng19042", params, page).then(res => {

        this.listData = this.listData.concat(res.rowdatas)
        this.currentPageNum = parseInt(res.txnCommCom.tCurrTotalPage) + 1

        if (res.txnCommCom.tCurrTotalPage === res.txnCommCom.totalPage) {
          this.haveNextPage = false
        }

        instanceLoading.close()
      }).catch(e => {
        instanceLoading.close()
      })
    },

    loadMore () {
      if (this.currentType === '1' && this.haveNextPage ) {
        this.fetchCityConsumption(this.isActive)
      }

      if (this.currentType === '2' && this.haveNextPage ) {
        this.fetchCountryConsumption()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.consumption-info-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .container.city {
    flex: 1;
    display: flex;
    flex-direction: column;
    .settleTab {
      display:flex;
      background-color: #fff;
      height:1rem;
      margin-top: -0.2rem;
      li{
        width:33%;
        font-size: 0.28rem;
        position: relative;
        color: #999;
        line-height: 1rem;

        &.activeTab{
          color: #257BFF;
          &::after{
            content: '';
            width: 0.52rem;
            position: absolute;
            top: 0.9rem;
            left: 50%;
            height: 0.05rem;
            background-color: #257BFF;
            margin-left: -0.26rem;
            box-shadow: 0 0.04rem 0.08rem 0 rgba(58,94,255,0.50);
            border-radius: 0.2rem
          }
        }
      }
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;

      .box {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .inner-content {
        flex: 1;
        overflow: auto;
        padding: 0.32rem;

        .city-card {
          background: #fff;
          border-radius: 5px;
          margin-bottom: 0.3rem;
          padding: 0.34rem 0.5rem;
          .item {
            line-height: 0.6rem;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666666;
            letter-spacing: 0;
            text-align: left;
            span {
              display: inline-block;
            }

            .label {
              margin-right: 5px;
            }
          }
        }

        .nomore {
          text-align: center;
          padding: 0.8rem;
          color: #c5c5c5;
        }
      }
    }


  }


  .container.country {
    flex: 1;
    display: flex;
    flex-direction: column;



    .content {
      flex: 1;
      padding: 0.32rem;
      overflow: auto;
    }

    .country-card {
      background: #fff;
      border-radius: 5px;
      margin-bottom: 0.3rem;
      padding: 0.34rem 0.5rem;
      .item {
        line-height: 0.6rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        text-align: left;
        span {
          display: inline-block;
        }

        .label {
          margin-right: 5px;
        }
      }
    }
  }

  .nomore {
    text-align: center;
    padding: 0.8rem;
    color: #c5c5c5;
  }

}
</style>

