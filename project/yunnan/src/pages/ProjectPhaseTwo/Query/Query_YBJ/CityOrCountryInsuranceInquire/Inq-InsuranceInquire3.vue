<template>
  <div class="payment-info-page">
    <towtop name="缴费信息"/>
    <div class="container" v-if="listData.length !== 0" v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="haveNextPage"
    infinite-scroll-distance="50">
      <div v-if="currentType === '1' && listData.length > 0">
        <div class="city-card" v-for="(item, index) in listData" :key="index">
          <p class="item"><span class="label">开始年月：</span><span class="value">{{item.SrtDt}}</span></p>
          <p class="item"><span class="label">终止年月：</span><span class="value">{{item.TmDt}}</span></p>
          <p class="item"><span class="label">月工资：</span><span class="value">{{item.Idv_Crdnlt}}元</span></p>
          <p class="item"><span class="label">缴费基数：</span><span class="value">{{item.Unit_Crdnlt}}元</span></p>
          <p class="item"><span class="label">参保单位：</span><span class="value">{{item.Insrd_PyF_Unit}}</span></p>
        </div>
      </div>

      <div v-if="currentType === '2' && listData.length > 0">
        <div class="country-card" v-for="(item, index) in listData" :key="index">
          <div class="header">
            <p class="title">{{item.PyF_Anul}}年缴费</p>
            <p class="status" :class="item.PyF_St !== '已缴费' ? 'default' : 'done'">{{item.PyF_St !== '已缴费' ? '待缴费' : '正常'}}</p>
          </div>
          <div class="content" v-if="item.PyF_St !== '已缴费'">
            <p class="item"><span class="label">人员类型：</span><span class="value">{{item.Stff_Cgy}}</span></p>
            <p class="item"><span class="label">待缴费金额：</span><span class="value">{{item.Pbl_Fee_Amt}}元</span></p>
          </div>
          <div class="content" v-else>
            <p class="item"><span class="label">人员类型：</span><span class="value">{{item.Stff_Cgy}}</span></p>
            <p class="item"><span class="label">缴费时间：</span> <span class="value">{{item.PyF_Tm}}</span></p>
            <p class="item"><span class="label">交费金额：</span><span class="value">{{item.Paidin_Fee_Amt}}元</span></p>
          </div>
        </div>
      </div>

      <p class="nomore" v-if="!haveNextPage">-- 暂无更多 --</p>
    </div>

    <p class="nomore" v-else>-- 暂无数据 --</p>

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
};

export default {
  data() {
    return {
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
  created () {
    if (this.currentType === '1') {
      this.fetchCityInquire ()
    }

    if (this.currentType === '2') {
      this.fetchCountryInquire ()
    }
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
  computed: {},
  methods: {
    openManualToast () {
      instanceLoading = this.$toast({
        message: '加载中...',
        iconType: 'loading',
        manualClose: true
      })
    },

    fetchCityInquire () {
      this.openManualToast()

      let params = {
        "txnBodyCom":{
          "matter_id": window.sessionStorage.getItem("matterid"),
          "Crdt_Tp": "1010",
          "crdt_no": this.user.idcard,
          "Idv_ID": this.user.num,
          "mblph_no": this.user.phone,
          "Insrd_City": this.user.area,
          "StDt": '1900-01-01',
          "TmDt": dateFormat(this.timeNow, 'yyyy-MM-dd')
        }
      }

      let page = {
        "tRecInPage":"10",
        "tPageJump": this.currentPageNum.toString(),
      }

      this.$ajaxRequest("post", "/gsp/mng19037", params, page).then(res => {
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

    fetchCountryInquire () {
      this.openManualToast()

      let params = {
        "txnBodyCom":{
          "matter_id": window.sessionStorage.getItem("matterid"),
          "Crdt_Tp": "1010",
          "crdt_no": this.user.idcard,
          "Idv_ID": this.user.num,
          "mblph_no": this.user.phone,
          "Insrd_City": this.user.area,
          "StDt": '1900-01-01',
          "TmDt": dateFormat(this.timeNow, 'yyyy-MM-dd')
        }
      }

      let page = {
        "tRecInPage":"10",
        "tPageJump": this.currentPageNum.toString(),
      }

      this.$ajaxRequest("post", "/gsp/mng19041", params, page).then(res => {
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
        this.fetchCityInquire()
      }

      if (this.currentType === '2' && this.haveNextPage ) {
        this.fetchCountryInquire()
      }
    }
  },

}
</script>

<style lang="less" scoped>
.payment-info-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    padding: 0.32rem;
    overflow: auto;

    .city-card, .country-card {
      background: #fff;
      border-radius: 5px;
      margin-bottom: 0.3rem;
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

    .city-card {padding: 0.34rem 0.5rem}

    .country-card {
      padding: 0 0.22rem;
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 0.98rem;
        border-bottom: 1px solid #F1F3F6;
        font-family: PingFangSC-Medium;

        .title {
          font-size: 14px;
          color: #000000;
          letter-spacing: -0.34px;
        }

        .status {
          font-size: 12px;
          letter-spacing: 0;
        }

        .status.default {
          color: #D0021B;
        }

        .status.done {
          color: #08C173;
        }
      }

      .content {
        padding: 0.32rem 0.1rem;
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
