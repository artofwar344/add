<template>
  <div class="aic-result-page">
    <towtop name="提示" />
    <div class="container">
      <img class="main-img" :src="require('@/assets/images/AIC/img_success@2x.png')" alt="">
      <div class="text-box">
        <p class="title">{{title}}</p>
        <p class="des">{{des}}</p>
      </div>
      <p class="btn" @click='goIndex'>确定</p>
    </div>
  </div>
</template>

<script>
  import towtop from '@/components/HederTwo.vue'

  export default {
    data() {
      return {
        title: '申请提交成功',
        des: '请注意查收审核结果通知'
      }
    },
    components: {
      towtop
    },
    computed: {},
    methods: {
    	goIndex(){
    		this.$router.push('/')
    	}
    }
  }
</script>

<style lang="less" scoped>
  .aic-result-page {
    height: 100%;
    display: flex;
    flex-direction: column;

    .container {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      padding-top: 20%;

      .main-img {
        width: 50%;
        margin-bottom: 1rem;
      }

      .text-box {
        margin-bottom: 1rem;
        .title {
          font-family: PingFangSC-Semibold;
          font-size: 17px;
          color: #2D7FFC;
          letter-spacing: -0.41px;
          text-align: center;
          line-height: 30px;
        }

        .des {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          letter-spacing: -0.41px;
          text-align: center;
        }
      }


      .btn {
        width: 80%;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        margin: 0 auto;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0.19px;
        background: #2D7FFC;
        border-radius: 25px;
      }
    }
  }
</style>

