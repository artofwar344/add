<template>
  <div style="height:100%;margin:auto 8px;">
    <div v-title>{{ HtitleName}}</div>
    <router-view></router-view>
    <van-row>
      <van-row>
        <van-tabs v-if="this.$route.path=='/help/base'">
          <van-tab :title="BshowName">
           
              <van-col span="22" offset="2" class="inner">
              <div  @click="goContentTab({base:1 })">  我购买了课程，却不知如何收听？</div>
              <div @click="goContentTab({base:1 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div  class="tex"  @click="goContentTab({base:2 })"> 为什么手机打开中读APP，没有内容？</div>
              <div @click="goContentTab({base:2 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div  @click="goContentTab({base:3 })"> 为什么我的文稿不显示？</div>
              <div @click="goContentTab({base:3 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col> 
          </van-tab> 
          <van-tab :disabled="true"></van-tab>
        </van-tabs>
        <!-- <van-tabs v-if="this.$route.path=='/help/account'"> -->
        <van-tabs v-if="this.$route.path=='/help/account'">
          <van-tab :title="BshowName">
            <!-- <div style="width:100%;height:100%;"> 
            <van-col offset="2"><div class="topss" v-text="BshowName"></div></van-col>-->
            <van-col span="22" offset="2" class="inner">
              <div  @click="goContentTab({account:1 })"> 为什么购买后“我的购买”是空的？</div>
              <div  @click="goContentTab({account:1 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div  @click="goContentTab({account:2 })"> 我有两个中读账户怎么办？</div>
              <div   @click="goContentTab({account:2 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div class="tex"  @click="goContentTab({account:3 })"> 同一个中读账户可以在两台手机上使用吗？</div>
              <div   @click="goContentTab({account:3 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <!-- </div> -->
          </van-tab> 
          <van-tab :disabled="true"></van-tab>
        </van-tabs>
        <van-tabs v-if="this.$route.path=='/help/interests'">
          <van-tab :title="BshowName">
            <van-col span="22" offset="2" class="inner">
              <div  class="tex"   @click="goContentTab({interests:1 })"> 请问VIP权益包括什么？</div>
              <div @click="goContentTab({interests:1 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div @click="goContentTab({interests:2 })"> 请问VIP权益不包括什么？</div>
              <div @click="goContentTab({interests:2 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div class="tex" @click="goContentTab({interests:3 })"> 请问我的VIP到期后，领取的杂志还能看吗？</div>
              <div @click="goContentTab({interests:3 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div class="tex" @click="goContentTab({interests:4 })"> 请问年卡和月卡会员有区别吗？</div>
              <div @click="goContentTab({interests:4 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
          </van-tab> 
          <van-tab :disabled="true"></van-tab>
        </van-tabs>
        <van-tabs v-if="this.$route.path=='/help/buy'">
          <van-tab :title="BshowName">
            <van-col span="22" offset="2" class="inner">
              <div  @click="goContentTab({buy:1 })"> 可以通过微信购买吗？</div>
              <div @click="goContentTab({buy:1 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div @click="goContentTab({buy:2 })"> 为什么使用读币购买不成功？</div>
              <div @click="goContentTab({buy:2 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div class="tex" @click="goContentTab({buy:3 })"> 为什么充值了读币，却没有到账？</div>
              <div @click="goContentTab({buy:3 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div class="tex" @click="goContentTab({buy:4 })"> 请问可以开发票吗？</div>
              <div @click="goContentTab({buy:4 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <!-- </div> -->
          </van-tab> 
          <van-tab :disabled="true"></van-tab>
        </van-tabs>
        <van-tabs v-if="this.$route.path=='/help/version'">
          <van-tab :title="BshowName">
            <van-col span="22" offset="2" class="inner">
              <div  @click="goContentTab({version:1 })"> 音频支持下载吗？</div>
              <div   @click="goContentTab({version:1 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div  @click="goContentTab({version:2 })"> 文稿可以打印吗？</div>
              <div   @click="goContentTab({version:2 })">
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
          </van-tab> 
          <van-tab :disabled="true"></van-tab>
        </van-tabs>
        <van-tabs v-if="this.$route.path=='/help/services'">
          <van-tab :title="BshowName">
            <van-row type="flex" justify="center" style="margin-top:24px;">
              <van-col> 请扫描微信二维码直接咨询</van-col>
            </van-row>
            <van-row  type="flex" justify="center"  style="margin-top:24px;">
           <van-col> <!--  span="22" offset="2" class="inner" -->
              <div style="width: 100%;height: 100%; ">
                <!-- <img
                  style="width: 100%;height: 100%;"
                  src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1551688140&di=150c2aa2fabab96a55c668ccb25792f5&src=http://b-ssl.duitang.com/uploads/item/20182/21/2018221142159_MZ33z.jpeg"
                  alt
                  srcset
                > -->
                <img src="./../../assets/imgs/VXserver.jpg" alt="">
              </div>
            </van-col>
            </van-row>
          </van-tab> 
          <van-tab :disabled="true"></van-tab>
        </van-tabs>
      </van-row>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "helps",
      meg: "helloworld",
      HtitleName: "帮助中心",
      activeNames: ["111"],
      BshowName: ""
    };
  },
  created() {
    if (this.$route.path === "/help/base") {
      this.BshowName = "基础问题";
    } else if (this.$route.path === "/help/account") {
      this.BshowName = "账号问题";    
    } else if (this.$route.path === "/help/interests") {
      this.BshowName = "Vip权益";    
    } else if (this.$route.path === "/help/buy") {
      this.BshowName = "如何购买"; 
    } else if (this.$route.path === "/help/version") {
      this.BshowName = "版权问题"; 
    } else if (this.$route.path === "/help/services") {
      this.BshowName = "联系客服";
    }
  }, 
  methods: {
    goContentTab( obj) { 
      this.$router.push({path : this.$route.path+'/details',query: obj})
    }  
      // this.$router.push(this.$route.path+'/base')
     
  }
};
</script>

<style scoped>
.iconlist {
  display: inline-block;
  height: 24px;
  min-width: 1em;
  font-size: 26px;
  line-height: 24px;
}
.inner {
  display: flex;
  justify-content: space-between;
  padding: 16px 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  background-color: #fff;
  color: #323233;
  font-size: 14px;
  overflow: hidden;
}
.tex {
  white-space: nowrap;
  margin-left: -2px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.topss {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>