<template>
	<div class="taxTwo">
		<towtop :name="title" />
		<div class="taxTwoTop">
			<div class="taxBox">
				<h1>纳税人识别号</h1>
				<p>{{queryData.nsrsbh}}</p>
			</div>
			<div class="taxBox">
				<h1>纳税人名称</h1>
				<p>{{queryData.nsrmc}}</p>
			</div>
			<div class="taxBox">
				<h1>一般纳税人资格</h1>
				<p>{{queryData.ybnsrzg}}</p>
			</div>
			<div class="taxBox">
				<h1>税务登记状态</h1>
				<p>{{queryData.swdjzt}}</p>
			</div>
			<div class="taxBox">
				<h1>纳税人信用等级</h1>
				<p>{{queryData.nsxydj}}</p>
			</div>
		</div>

		<div class="statisticalBtn">
			<button><router-link to="/taxOne">返回首页</router-link></button>
		</div>

	</div>
</template>

<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "@/components/toptow.js";
export default {
  components: {
    towtop
  },
  data() {
    return {
      params: this.$route.params,
      title: "纳税信用A级纳税人查询",
      queryData: {},
      queryUrl: "/gsp/mng60023"
    };
  },
  created() {
    let _self = this;
    _self.getData();
  },
  methods: {
    getData() {
      let _self = this;
      // console.log(cenurl.url() + this.queryUrl)
      let nsrsbh = _self.params.nsrsbh;
      let nsrmc = _self.params.nsrmc;
      let sendData = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "11",
          nsrsbh: nsrsbh, // "530802662624701",
          nsrmc: nsrmc // "普洱市思茅区宏泽商贸有限公司"
        }
      };
      console.log(JSON.stringify(sendData));
      this.$ajaxRequest("post", this.queryUrl, sendData).then(res => {
        console.log(res)
        if(!res.ybnsrzg) {
          _self.$toast("纳税人信息输入错误或此纳税人信息不为A级");
        }
        if (res.error_info) {
          _self.$toast(res.error_info)
        } else {
          _self.setDom(res);
        }
      }).catch(error => {
        this.$toast("查询失败！");
        console.log(error);
      });
    },
    setDom(data) {
      let _self = this;
      _self.queryData = data;
    }
  }
};
</script>

<style   scoped>
@import "../../../../static/css/tax/taxTwo.css";
</style>
