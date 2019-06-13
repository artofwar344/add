<template>
    
    <div>
		<towtop :name="hadertow" />
      <div class="sbreaklist">
         <div @click="togo()">
          <span class="sbreakListTit">基本信息</span>
            <div class="sbreakListBox">
              <ul>
                <li v-for="list in arr"><span class="titel">{{list.title}}</span><span class="cen">{{list.val}}</span></li>
                <li><span class='title'>企业名称</span><span class='cen'>云南凌琳物管有限公司</span></li>
                <li><span class='title'>统一社会信用代码</span><span class='cen'>9483872948923028Y</span></li>
                <li><span class='title'>法定代表人</span><span class='cen'>张丹</span></li>
                <li><span class='title'>登记机关</span><span class='cen'>五管区时常监督管理局</span></li>
                <li><span class='title'>成立日期</span><span class='cen'>2014年02月18日</span></li>
                <li><span class='title'>经营状态</span><span class='cen'>存续（在营、开业、在册）</span></li>
              </ul>
            </div>
        </div>
        <div @click="togo()">
          <span class="sbreakListTit">列入严重违法失信企业名单（黑名单）信息</span>
            <div class="sbreakListBox">
              <ul>
                <li v-for="list in arr"><span class="titel">{{list.title}}</span><span class="cen">{{list.val}}</span></li>
                <li><span class='title'>企业名称</span><span class='cen'>云南凌琳物管有限公司</span></li>
                <li><span class='title'>统一社会信用代码</span><span class='cen'>被列入经营异常名录届满3年仍未履行相关义务的</span></li>
                <li><span class='title'>法定代表人</span><span class='cen'>张丹</span></li>
                <li><span class='title'>登记机关</span><span class='cen'>五管区时常监督管理局</span></li>
                <li><span class='title'>成立日期</span><span class='cen'>2014年02月18日</span></li>
                <li><span class='title'>经营状态</span><span class='cen'>存续（在营、开业、在册）</span></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
	import { cenurl } from "../../../../components/toptow.js";
export default {
  data() {
    return {
      hadertow: "严重违法失信企业名单查询",
      arr: [
        { title: "企业名称", val: "云南凌琳物管有限公司" },
        { title: "统一社会信用代码", val: "9483872948923028Y" },
        { title: "法定代表人", val: "张丹" },
        { title: "登记机关", val: "五管区时常监督管理局" },
        { title: "成立日期", val: "2014年02月18日" },
        { title: "经营状态", val: "存续（在营、开业、在册）" }
      ]
    };
  },
  components: {
    towtop
  },
  methods: {
    togo(){
      this.$router.push('/sbreakcen')
    },
    RecordSub() {
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../../../assets/css/style.less");

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
    color: #333;
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
