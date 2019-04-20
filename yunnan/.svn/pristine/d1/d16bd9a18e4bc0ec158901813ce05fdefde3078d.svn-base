<template>
  <div class="funding-page">
    <towtop name="资金划入明细"/>
    <div class="container" v-if="listData.length !== 0" v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="haveNextPage"
    infinite-scroll-distance="50">

      <div class="city-card" v-for="(item, index) in listData" :key="index">
        <p class="item"><span class="label">划账时间：</span> <span class="value">{{item.Tfr_Tm}}</span></p>
        <p class="item"><span class="label">费款所属期：</span><span class="value">{{item.Fee_Blng_Prd}}</span></p>
        <p class="item"><span class="label">缴费基数：</span> <span class="value">{{item.PyF_Crdnlt}}</span></p>
        <p class="item"><span class="label">划入金额：</span> <span class="value">{{item.Tot_TIn_Amt}}</span></p>
        <p class="item"><span class="label">划账类型：</span> <span class="value">{{item.Tfr_Tp}}</span></p>
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
}

export default {
  data() {
    return {
      currentPageNum: 1,
      listData: [],
      haveNextPage: true,
      timeNow: new Date(),
    }
  },
  components: {
    towtop
  },
  props: [
    'currentType',    // 1:城镇缴费信息 2:城乡
    'user'
  ],
  created () {
    this.fetchFundingData()
  },
  computed: {},
  methods: {
    openManualToast () {
      instanceLoading = this.$toast({
        message: '加载中...',
        iconType: 'loading',
        manualClose: true
      })   
    },

    fetchFundingData () {
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

      this.$ajaxRequest("post", "/gsp/mng19038", params, page).then(res => {
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
      if (this.haveNextPage) {
        this.fetchFundingData()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.funding-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .container {
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
  }

  .nomore {
    text-align: center;
    padding: 0.8rem;
    color: #c5c5c5;
  }
}

</style>
