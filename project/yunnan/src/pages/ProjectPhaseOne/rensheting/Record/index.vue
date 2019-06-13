<template>
	<div>
		<towtop :name="hadertow" />
		<div class="recordBox">
			<ul>
				<!--<router-link tag='li' to="" v-for="list in arr">
					<span class="recordBoxtile">{{list.value}}</span>
					<span class="recordBoxval">{{list.text}}</span>
				</router-link>-->
				<li>
					<span class="recordBoxtile">卡状态</span>
					<span class="recordBoxval">{{kzt[queryData.social_sec_card_status-1]}}</span>
				</li>
				<li>
					<span class="recordBoxtile">持卡人姓名</span>
					<span class="recordBoxval">{{queryData.name}}</span>
				</li>
				<li>
					<span class="recordBoxtile">社会保障号码</span>
					<span class="recordBoxval">{{queryData.id_number}}</span>
				</li>
				<li>
					<span class="recordBoxtile">个人编号</span>
					<span class="recordBoxval">{{queryData.personal_code}}</span>
				</li>
				<li>
					<span class="recordBoxtile">发卡日期</span>
					<span class="recordBoxval">{{queryData.card_issue_date}}</span>
				</li>
				<li>
					<span class="recordBoxtile">制卡银行</span>
					<span class="recordBoxval">{{bankCode[queryData.business_card_bank]}}</span>
				</li>
				<!-- <li>
					<span class="recordBoxtile">银行卡激活状态</span>
					<span class="recordBoxval">{{queryData.is_bank_card_active}}</span>
				</li> -->
				<li>
					<span class="recordBoxtile">银行卡号</span>
					<span class="recordBoxval">{{queryData.bank_card_num}}</span>
				</li><li>
					<span class="recordBoxtile">所属经办网点名称</span>
					<span class="recordBoxval">{{queryData.point_name}}</span>
				</li>
			</ul>
		</div>
		<button @click.prevent='RecordSub()' class=" button blueButton textWhat">
			返回首页
		</button>

	</div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";

export default {
  data() {
    return {
      params: this.$route.params,
      hadertow: "卡记录",
      queryData: {},
      queryUrl: "/gsp/mng60021",
      kzt: ["正常", "临时挂失", "正式挂失", "制卡中", "待启用", "已注销"],
			kztstyle: "",
			bankCode:{
				 95588: "工商银行",
				 95599: "农业银行",
				 95566: "中国银行",
				 95533: "建设银行",
				 96500: "云南农信社",
			}
    };
  },
  methods: {
    init(data) {
      let _self = this;
      _self.queryData = data;
    },
    getData() {
      let _self = this;
      // console.log(cenurl.url() + this.queryUrl)
      let sendData = _self.params;
      this.$ajaxRequest("post", this.queryUrl, sendData)
        .then(res => {
          // console.log(res)
          _self.setDom(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    setDom(data) {
      let _self = this;
      console.log(data);
      _self.init(data.cards[0]);
    },
    RecordSub() {
      this.$router.go(-1);
    }
  },
  components: {
    towtop
  },
  created() {
		if(window.sessionStorage.getItem("username") == "null" || window.sessionStorage.getItem("cardid") == "null"){
      this.$toast("需要实名注册登陆信息");
    }else{
			this.getData();
		}
  }
};
</script>

<style lang='less' scoped>
@import url("../style.less");
@import url("../../../../assets/css/style.less");
</style>

