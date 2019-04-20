<template>
  <div>
    <!--<mt-header :title="myHeader.title" class="header">
      <router-link :to="myHeader.backUrl" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->
    <div class="header">
      <div class="headerBack" @click="goBack()">
        <Icon type="arrow-left" size="16" color="#999999"></Icon>
      </div>
      <div class="title">{{ myHeader.title }}</div>
      <router-link to='' class="next">
        <img :src="groupUrl" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
import groupUrl from '@/assets/images/group .png'
export default {
  name: 'myheader',
  props: {
    myHeader: [Object]
  },
  data () {
    return {
      headerData: {
        // title: this.header.title,
        // backUrl: this.header.backUrl
      },
      groupUrl
    }
  },
  created() {
    console.log(this.$route.query.matterid);
    if (
      this.$route.query.matterid != undefined &&
      this.$route.query.matterid != "undefined"
    ) {
      window.sessionStorage.setItem("localhostname", this.$route.path);
    }
  },
  mounted () {
    const _self = this
    _self.headerData = _self.myHeader
  },
  methods: {
    goBack: function () {
      if (this.$route.path === window.sessionStorage.getItem("localhostname")&&this.$route.path != '/wuliu_two') {
        this.$CallModule("close", "关闭");
        return;
      }
      this.$router.go(-1);
     
      // if (!_self.headerData.backUrl) {
        // _self.$router.go(-1)
      // } else {
      //   _self.$router.push({
      //     path: _self.headerData.backUrl
      //   })
      // }
    }
  }
}
</script>

<style  scoped lang="less">
  .header {
    display: flex;
    height: .90rem;
    line-height: .9rem;
    font-size: .33rem;
    background: #FFFFFF;
    margin-bottom: .2rem;

    div {
      width: 80%;
    }

    .headerBack {
      width: 10%;
      float: left;
      text-align: center;
      padding-left: 0.06rem;
      padding-top: 0.01rem;
    }

    .next {
      width: 10%;
      float: right;
      padding-top: .25rem;
    }

    .next img {
      display: block;
      width: .4rem;
      height: .4rem;
    }

    .title {
      font-weight: bold;
      text-align: center;
    }

  }
</style>
