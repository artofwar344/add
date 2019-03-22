<template>
  <div style="text-align: start;">
    <van-row>
      <van-row>
        <van-tabs>
          <van-tab :title="detileName">
            <van-col span="22" offset="2">
              <div style="width: 100%;height: 100px; " class="textInnerq">
                <div style="width: 100%;height:44px; padding: 2px 0;margin:12px 0;text-align: start;">{{quesion}}</div>
              </div>
            </van-col>
          </van-tab>
          <van-tab :disabled="true"></van-tab>
          <van-tab :disabled="true"></van-tab>
        </van-tabs>
      </van-row>
      <van-row>
        <van-tabs>
        <van-tab :title="operation"> 
            <van-col span="22" offset="2">  <!--text-indent:10px; -->
              <div
                style="width: 100%;height:44px; margin:12px 0;line-height: 30px;  word-break: break-all;"
                v-html="answer"
              ></div>
            </van-col>
          </van-tab>
          <van-tab :disabled="true"></van-tab>
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
      name: "homepage",
      detileName: "问题描述",
      quesion: "",
      answer: "",
      operation: "如何操作"
    };
  },
  created() {
    var baseArr = [
      {
        quesion: " 我购买了课程，却不知如何收听？",
        answer: "打开中读APP—我的—我的购买——正序"
      },
      {
        quesion: " 为什么手机打开中读APP，没有内容？",
        answer: "请您检查手机设置是否对中读禁用网络权限。"
      },
      {
        quesion: " 为什么我的文稿不显示？",
        answer:
          "请您确保您的APP处于最新版本，如仍未显示，请您添加中读咕微信（zhongdu2018-5)，为您登记。此期间您可以通过“三联中读”微信服务号的“内容商城”进行收听。"
      }
    ];
    var accountArr = [
      {
        quesion: "  为什么购买后“我的购买”是空的？",
        answer:
          "您先退出登录，选择微信登录后，在APP的“我的—— 绑定管理”将手机号绑定。"
      },
      {
        quesion: " 我有两个中读账户怎么办？",
        answer: " 请您添加中读咕微信（zhongdu2018-5)，为您进行账户合并。"
      },
      {
        quesion: "  同一个中读账户可以在两台手机上使用吗？",
        answer: "可以，但不能两台设备同时在线。"
      }
    ];
    var interestsArr = [
      {
        quesion: "  请问VIP权益包括什么？",
        answer: [
          "①免费畅听全年《三联生活周刊》精华内容！与纸刊同步更新，开车、通勤、跑步，随时随地无限畅听。",
          "②会员期内，中读“知识声音”无限畅听。包括：每天1期听书/听外刊，解读经典纵观全球；每周1-2位“大咖说”解析当下热门话题。",
          "③由在人文社科、生活美学、科普教育等方面富有影响力和专业见解的名师达人。每次60分钟为你讲透一个主题。",
          "④会员期内，可免费畅读《博客天下》杂志内容，三联旗下《爱乐》、《读书》账号精选长文，《三联生活周刊》创刊至2018年12月31日以前电子刊内容。",
          "⑤每周封面书单，含3-5本图书解读音频版；",
          "⑥免费的读书会线上活动参与资格，请您添加中读咕微信（zhongdu2018-5)了解详情"
        ]
      },
      {
        quesion: " 请问VIP权益不包括什么？",
        answer: ["①全年连载年专栏", "②精品课程专栏"]
      },
      {
        quesion: "  请问我的VIP到期后，领取的杂志还能看吗？",
        answer: "领取的杂志小课仅限会员期内收听。"
      },
      {
        quesion: " 请问年卡和月卡会员有区别吗？",
        answer: "权益没有区别，只是会员时间的区别。"
      }
    ];
    var buyArr = [
      {
        quesion: " 可以通过微信购买吗？",
        answer:
          "部分专栏和精品课可以在“三联中读”微信服务号购买，其余需要通过充值读币购买。"
      },
      {
        quesion: " 为什么使用读币购买不成功？",
        answer: " 请确认您的读币余额大于课程价格，再进行支付。"
      },
      {
        quesion: " 为什么充值了读币，却没有到账？",
        answer:
          "由于应用商店限制，可能存在延迟。如一天内仍未到账，您可以添加中读咕微信（zhongdu2018-5)，为您进行手动补偿。"
      },
      {
        quesion: " 请问可以开发票吗？ ",
        answer:
          " 您好，我们给您开具“信息服务费”。请您提供您的购买截图，公司名称、银行账户、开户行信息、税务登记及一般纳税人资格信息。并且留下地址与电话，我们会尽快为您寄出。您可以添加中读咕微信（zhongdu2018-5)了解。"
      }
    ];
    var versionArr = [
      {
        quesion: " 音频支持下载吗？",
        answer: "  可以下载至APP内离线收听。"
      },
      {
        quesion: " 文稿可以打印吗？",
        answer: " 由于版权保护，我们暂不支持文稿打印，请您理解。"
      }
    ];
    if (this.$route.query.base) {
      this.quesion = baseArr[this.$route.query.base - 1].quesion;
      this.answer = baseArr[this.$route.query.base - 1].answer;
    } else if (this.$route.query.account) {
      this.quesion = accountArr[this.$route.query.account - 1].quesion;
      this.answer = accountArr[this.$route.query.account - 1].answer;
    } else if (this.$route.query.interests) {
      this.quesion = interestsArr[this.$route.query.interests - 1].quesion;
      if (
        typeof interestsArr[this.$route.query.interests - 1].answer == "object"
      ) {
        var arrays = "";
        var arr = interestsArr[this.$route.query.interests - 1].answer;

        for (var i = 0; i < arr.length; i++) {
          arrays += `<p>${arr[i]}</p>`;
        }
        this.answer = arrays;
      } else {
        this.answer = interestsArr[this.$route.query.interests - 1].answer;
      }
    } else if (this.$route.query.buy) {
      this.quesion = buyArr[this.$route.query.buy - 1].quesion;
      this.answer = buyArr[this.$route.query.buy - 1].answer;
    } else if (this.$route.query.version) {
      this.quesion = versionArr[this.$route.query.version - 1].quesion;
      this.answer = versionArr[this.$route.query.version - 1].answer;
    }
  }
};
</script>

<style scoped>
.textInnerq {
  text-align: start;
  margin-left: 1%;
}
</style>