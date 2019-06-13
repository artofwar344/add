<template>
    <div>
		<towtop name="严重违法失信企业名单查询" style="margin: 0"/>
      <div class="sbreaklist">
         <div>
          <span class="sbreakListTit">基本信息</span>
            <div class="sbreakListBox">
              <ul>
                <li>
                  <span class='title'>企业名称</span>
                  <span class='cen'>{{ this.arr.entName }}</span>
                </li>
                <li>
                  <span class='title'>统一社会信用代码</span>
                  <span class='cen'>{{ this.arr.uniScid }}</span>
                </li>
                <li>
                  <span class='title'>法定代表人</span>
                  <span class='cen'>{{ this.arr.lerep }}</span>
                </li>

                <li v-if="this.arr.opStateId == '3'">
                  <span class='title'>注销原因</span>
                  <span class='cen'>{{ this.arr.repealRes }}</span>
                </li>
                <li v-if="this.arr.opStateId == '3'">
                  <span class='title'>注销日期</span>
                  <span class='cen'>{{ this.arr.canDate }}</span>
                </li>

                 <li v-if="this.arr.opStateId == '2'">
                  <span class='title'>吊销凭证</span>
                  <span class='cen'>{{ this.arr.revokeReason }}</span>
                </li>
                <li v-if="this.arr.opStateId == '2'">
                  <span class='title'>吊销日期</span>
                  <span class='cen'>{{ this.arr.revokeDate }}</span>
                </li>

                <li v-if="this.arr.opStateId == '1'">
                  <span class='title'>登记机关</span>
                  <span class='cen'>{{ this.arr.regOrgan }}</span>
                </li>
                <li v-if="this.arr.opStateId == '1'">
                  <span class='title'>成立日期</span>
                  <span class='cen'>{{ this.arr.estDate }}</span>
                </li>

                <li>
                  <span class='title'>经营状态</span>
                  <span class='cen'>{{ this.arr.opState }}</span>
                </li>
              </ul>
            </div>
        </div>
        <div>
          <span class="sbreakListTit">列入严重违法失信企业名单（黑名单）信息</span>
            <div class="sbreakListBox">
              <ul>
                <li>
                  <span class='title'>类别 :</span>
                  <span class='cen'>{{ this.arr.entType }}</span>
                </li>
                <li>
                  <span class='title'>列入严重违法失信企业名单（黑名单）原因 :</span>
                  <span class='cen' style="width: 100%;display: block;text-align: left;">
                    {{ this.arrlist.serIllRea }}
                  </span>
                </li>
                <li>
                  <span class='title'>列入日期 :</span>
                  <span class='cen' style="width: 100%;display: block;text-align: left;">
                    {{ this.arrlist.abnTime }}
                  </span>
                </li>
                <li>
                  <span class='title'>作出决定机关（列入）:</span>
                  <span class='cen' style="width: 100%;display: block;text-align: left;">
                    {{ this.arrlist.abnOrgan }}
                  </span>
                </li>
                <li>
                  <span class='title'>移出严重违法失信企业名单（黑名单）原因 :</span>
                  <span class='cen' style="width: 100%;display: block;text-align: left;">
                    {{ this.arrlist.remExcpRes }}
                  </span>
                </li>
                <li>
                  <span class='title'>移出日期 :</span>
                  <span class='cen' style="width: 100%;display: block;text-align: left;">
                    {{ this.arrlist.remDate }}
                  </span>
                </li>
                <li>
                  <span class='title'>作出决定机关（移出）:</span>
                  <span class='cen' style="width: 100%;display: block;text-align: left;">
                    {{ this.arrlist.remOrgan }}
                  </span>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import towtop from "@/components/HederTwo";
	import { cenurl } from "@/components/toptow.js";
export default {
  data() {
    return {
      arr: this.$route.params.arr,
      arrlist: JSON.parse(sessionStorage.getItem('infolist')),
    };
  },
  components: {
    towtop
  },
  created() {
    console.log(this.arr.opStateId);
    console.log(this.arr,'这是arr');
    console.log(this.arrlist,'这是arrlist');
  },
  methods: {
   
  }
};
</script>
<style lang="less" scoped>
@import url("../../../../../assets/css/style.less");

.sbreaklist {
  text-align: left;
  .sbreakListTit {
    font-size: 0.24rem;
    color: #999;
    height: 0.76rem;
    line-height: 0.76rem;
    padding: 0 0.36rem;
  }
  .sbreakListBox {
    background: #fff;
    padding: 0.3rem 0.36rem;
    font-size: 0.28rem;
    color: #000;
    ul li {
      min-height: 0.7rem;
      line-height: 0.7rem;
      .titel {
        float: left;
        width: 50%;
      }
      .cen {
        width: 50%;
        color: #999;
        float: right;
        text-align: right;
      }
      &:after{
        content: '0';
        font-size: 0;
        display: block;
        clear: both;
        height: 0;
      }
    }
  }
}
</style>
