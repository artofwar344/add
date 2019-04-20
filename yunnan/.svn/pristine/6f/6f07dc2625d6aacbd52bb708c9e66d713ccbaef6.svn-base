<template>
  <div class="zzls-four">
		<towtop :name="titlename" />
    <div class="container">
      <div class="result">
        <div class="bigImg submitImg"></div>
        <p class="resultMsg">您的信息已提交成功</p>
        <p class="resultMsg">请耐心等待审批结果(我的办事中查看审批进程)</p>
        <button class="commonBtn" @click="() => {this.$CallModule('close', '关闭')}">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
import towtop from '../../../components/HederTwo.vue'

export default {
  data() {
    return {
      titlename: '申请结果'
    }
  },
  components: {
    towtop
  },
  methods:{
    // openToastWithIcon() {

    //  this.$toast({
    //    message: '上传中...',
    //    iconType: 'loading'
    //  });
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/Settle.less";

.zzls-four {
  height: 100%;
  padding-bottom: 1rem;

  .container {
    height: 100%;
    padding: 0.36rem;
    padding-bottom: 0;
    font-family: PingFangSC-Regular;
    background: #fff;
    font-size: 14px;
    letter-spacing: 0.17px;
    .preview {
      .item {
        height: 0.98rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ECECEC;
        .left {color: #333}
        .right {color: #999}
      }

      .item.exper {
        height: auto;
        padding: 0.36rem 0;
        flex-direction: column;
        text-align: left;
        align-items: flex-start;
        .left {margin-bottom: 0.36rem; }
      }    
    }

    .result {
      height: 100%;
    }
  }

  .btn {
      height: 0.9rem;
      line-height: 0.9rem;
      width: 5.9rem;
      margin: auto;
      background: #2D7FFC;
      box-shadow: 0 5px 15px 0 rgba(45,127,252,0.50);
      border-radius: 25px;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0.19px;
      text-align: center;
      margin-top: 1rem;
    }
}

</style>

