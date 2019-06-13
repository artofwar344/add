<template>
  <div style="height:100%;margin:auto 8px;">
    <div v-title>{{ HtitleName}}</div>
    <router-view></router-view>
    <div v-if="this.$route.path=='/help'">
      <van-row>
        <van-col offset="2" class="showStyle">{{showName}}</van-col>
      </van-row>
      <van-row type="flex" style="margin: 30px 0;">
        <van-col offset="1" :span="7">
          <div class="imgStyle" @click="gonewTab('base')">
            <img src="./../../assets/imgs/_1basi.png">
          </div>
          <div>基础功能</div>
        </van-col>
        <van-col :span="7">
          <div class="imgStyle" @click="gonewTab('account')">
            <img src="./../../assets/imgs/_2accout.png">
          </div>
          <div>账号问题</div>
        </van-col>
        <van-col :span="7">
          <div class="imgStyle" @click="gonewTab('interests')">
            <img src="./../../assets/imgs/_3vip.png">
          </div>
          <div>Vip权益</div>
        </van-col>
      </van-row>
      <van-row type="flex" style="margin: 30px 0;">
        <van-col offset="1" :span="7">
          <div class="imgStyle" @click="gonewTab('buy')">
            <img src="./../../assets/imgs/_4buy.png">
          </div>
          <div>如何购买</div>
        </van-col>
        <van-col :span="7">
          <div class="imgStyle" @click="gonewTab('version')">
            <img src="./../../assets/imgs/_5copy.png">
          </div>
          <div>版权问题</div>
        </van-col>
        <van-col :span="7">
          <div class="imgStyle" @click="gonewTab('services')">
            <img src="./../../assets/imgs/_6cust.png">
          </div>
          <div>联系客服</div>
        </van-col>
      </van-row>
      <!-- <van-tabs>
        <van-tab :title="showName">
          <van-row>
            <van-tabbar :fixed="false" v-model="CONactive1">
              <van-tabbar-item icon="setting-o" :to="this.$route.path+'/base'">基础功能</van-tabbar-item>
              <van-tabbar-item icon="setting-o" :to="this.$route.path+'/account'">账号问题</van-tabbar-item>
              <van-tabbar-item icon="setting-o" :to="this.$route.path+'/interests'">Vip权益</van-tabbar-item>
            </van-tabbar>
          </van-row>
          <van-row>
            <van-tabbar :fixed="false" v-model="CONactive2">
              <van-tabbar-item icon="setting-o" :to="this.$route.path+'/buy'">如何购买</van-tabbar-item>
              <van-tabbar-item icon="setting-o" :to="this.$route.path+'/version'">版权问题</van-tabbar-item>
              <van-tabbar-item icon="setting-o" :to="this.$route.path+'/services'">联系客服</van-tabbar-item>
            </van-tabbar>
          </van-row>
        </van-tab> 
        <van-tab :disabled="true"></van-tab>
      </van-tabs>-->
      <!-- <van-row>
        <van-col offset="2" class="showStyle">常见问题</van-col>
      </van-row>
      <van-row type="flex"> 
          <van-col :span="21">
            <div class="alltext">1.为什么购买后“我的购买”是空的？</div>
          </van-col>
          <van-col :span="3">
            <div class="alltext">
              <img  src="./../../assets/imgs/morei.png" style="  width: 15px; height: 17px; margin-top: 2px;"  alt="" >
            </div>
          </van-col> 
      </van-row>
      <van-row  > 
             <van-col :span="21">
            <div class="alltext">1.为什么购买后“我的购买”是空的？</div>
          </van-col>
          <van-col :span="3">
            <div class="alltext">
              <img  src="./../../assets/imgs/morei.png" style="  width: 15px; height: 17px; margin-top: 2px;"  alt="" >
            </div>
          </van-col> 
      </van-row>
      <van-row   > 
          <van-col :span="20"  >
            <div class="alltext">3.请问VIP权益包括什么？</div>
          </van-col>
          <van-col :span="3"  >
            <div class="alltext">
              <img  src="./../../assets/imgs/morei.png" style="  width: 15px; height: 17px; margin-top: 2px;"  alt="" >
            </div>
          </van-col> 
      </van-row>-->
      <van-row>
        <div class="tilt">常见问题</div>
        <van-tabs title-inactive-color="#fff" title-active-color="#fff">
          <van-tab class="titleText" :span="2">
            <van-col span="22" offset="2" class="inner">
              <div
                @click="()=>{this.$router.push({path:'/help/account/details?account=1'})}"
              >1.为什么购买后“我的购买”是空的？</div>
              <div>
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div
                @click="()=>{this.$router.push({path:'/help/base/details?base=1'})}"
              >2.我购买了课程，却不知如何收听？</div>
              <div>
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div
                @click="()=>{this.$router.push({path:'/help/interests/details?interests=1'})}"
              >3.请问VIP权益包括什么？</div>
              <div>
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
            <van-col span="22" offset="2" class="inner">
              <div
                @click="()=>{this.$router.push({path:'/help/buy/details?buy=3'})}"
              >4.为什么充值了读币，却没有到账？</div>
              <div>
                <span class="iconlist">&rsaquo;</span>
              </div>
            </van-col>
          </van-tab>
          <van-tab :disabled="true"></van-tab>
          <van-tab :disabled="true"></van-tab>
        </van-tabs>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "helps",
      meg: "helloworld",
      HtitleName: "帮助中心",
      showName: "问题分类",
      helps: "",
      CONactive1: 0,
      CONactive2: 0,
      pathArr: [""],
      activeNames: ["1111"]
    };
  },
  created() {
    this.showHelp();
  },
  watch: {
    $route(val) {
      //  console.log(val.path,'path+++++');
      if (val.path == "/help") {
        this.showName = "问题分类";
        this.HtitleName ="帮助中心";
      } else if (val == "/help/base") {
        this.showName = "基础功能"; 
      }
    }
  },
  methods: {
    showHelp() {},
    gonewTab(val) {
      this.$router.push(this.$route.path + "/" + val);
      console.log(this.$route.path + "/" + val,'path helpvue');
    }
  }
};
</script>

<style scoped>
/* .van-tabbar-item--active {color: #9ED9BB } */
.van-tabbar-item__text {
  color: blue;
}
.van-tabbar {
  width: 100%;
  height: 76px;
}
/* .van-tabbar { 
    background-color: #444;
} */
.van-tabbar-item {
  color: #9ed9bb;
}
.helpProblem {
  margin: 5px 0;
  border: 1px solid #9ed9bb;
}

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
  padding: 10px 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  background-color: #fff;
  color: #323233;
  font-size: 14px;
  overflow: hidden;
}
.showStyle {
  font-size: 24px;
  font-weight: 500;
  color: #000;
}
.imgStyle {
  text-align: center;
  width: 100%;
  margin-bottom: 14px;
}
.imgStyle img {
  width: 40px;
  height: 40px;
}
.alltext {
  margin: 25px 0;
}
.titleText {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #000;
}
.tilt {
  z-index: 152;
  position: relative;
  bottom: -33px;
  right: 104px;
  font-size: 24px;
  font-weight: 500;
  color: #000;
}
</style>