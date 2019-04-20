<template>
  <div>
    <towtop style="margin: 0;" :name="titlename"/>
    <div style="padding-top: 16px;">
      <div class="detailsBox">
        <div class="detailsTitle">
          <span class="detailsTitleInf">{{mattertitle || ' '}}</span>
        </div>
        <ul class="detailsInfList">
          <li class="detailsInfLi">
            <span class="detailsInfLeft">剩余天数</span>
            <span class="detailsInfRight">{{sysj || ' '}}</span>
          </li>
          <li class="detailsInfLi">
            <span class="detailsInfLeft">提交时间</span>
            <span class="detailsInfRight">{{time || ' '}}</span>
          </li>
          <li class="detailsInfLi">
            <span class="detailsInfLeft">申报人信息</span>
            <span class="detailsInfRight">{{sbr || ' '}}</span>
          </li>
          <li class="detailsInfLi">
            <span class="detailsInfLeft">联系人信息</span>
            <span class="detailsInfRight">{{lxr || ' '}}</span>
          </li>
          <li class="detailsInfLi">
            <span class="detailsInfLeft">会员昵称</span>
            <span class="detailsInfRight">{{hync || ' '}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import towtop from '../../../components/HederTwo'

  export default {
    data() {
      return {
        titlename: '待办详情',
        mattertitle: this.$route.query.mt,
        sysj: this.$route.query.sd,
        time: this.$route.query.tm,
        sbr: this.$route.query.nm,
        lxr: this.$route.query.lm,
        hync: this.$route.query.nm
      }
    },
    components: {
      towtop
    }
  }
</script>
<style scoped="backlog.vue">
  .hui-tabs_nav {
    width: 100%;
  }

  .mint-navbar {
    margin: 10px 0;
  }

  .detailsBox {
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    margin: 0 auto;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07);
    text-align: left;
  }

  .detailsTitle {
    font-size: 14px;
    padding: 10px;
  }

  .detailsTitleInf {
    border-left: 6px solid #2D7FFC;
    color: #333333;
    font-weight: 900;
    letter-spacing: 0.17px;
    padding-left: 10px;
  }

  .detailsInfLeft, .detailsInfRight {
    display: inline-block;
  }
  .detailsInfLeft{
    width: 29%;
    color: #999999;
  }
  .detailsInfLi{
    line-height: 35px;
    letter-spacing: 0.17px;
    font-size: 14px;
  }
  .detailsInfRight{
    text-align: right;
    width: 69%;
    color: #333333;
  }


</style>
