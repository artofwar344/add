<template>
	<div class="box">
		<towtop :name="hadertow" />

		<div class="form">
			<div class="input_outside_box">
    			<div class="input_box">
					<label>单位名称</label>
					<span>{{item.Nima_Unit_Name}}</span>
   				</div>
				<div class="input_box">
					<label>法定代表人</label>
					<span>{{item.Nima_Legal_Name}}</span>
   				</div>
				<div class="input_box">
					<label>资质等级</label>
					<span>{{item.Nima_Grade}}</span>
   				</div>
				<div class="input_box">
					<label>联系人</label>
					<span>{{item.Nima_Linkman}}</span>
   				</div>
				<div class="input_box">
					<label>联系电话</label>
					<span>{{item.Nima_Phone}}</span>
   				</div>
				<div class="input_box">
					<label>单位地址</label>
					<span>{{item.Nima_Unit_Site}}</span>
   				</div>
				<div class="input_box">
					<label>登记编号</label>
					<span>{{item.Nima_Credebtial_Code}}</span>
   				</div>

				<div class="input_box">
					<label>发证日期</label>
					<span>{{item.Nima_Certificate_Time}}</span>
   				</div>
				<div class="input_box">
					<label>有效期至</label>
					<span>{{item.Nima_Valid_Time}}</span>
   				</div>
				<div class="input_box">
					<label>单位性质</label>
					<span>{{item.Nima_Unit_Nature}}</span>
   				</div>
				<div class="input_box bigBox">
					<label>业务范围</label>
					<span>{{item.Nima_Scope_Business}}</span>
   				</div>
			</div>
		</div>

	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
export default {
  data() {
    return {
      hadertow: "测绘单位资质信息查询",
      item: {}
    };
  },
  methods: {
    /* dateFormat(time){
				if(time == ""||time==null) return "";
				var date = new Date(time);
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				var day = date.getDate();
				return year+'.'+month+'.'+day;
			} */
  },
  created() {
    let setdata = {
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        nima_credebtial_code: this.$route.params.id }
    };
    this.$ajaxRequest("post", "/gsp/mng30014", setdata)
      .then(res => {
        console.log(res);
        if (res) this.item = res["Matter_Nima_Do"];
      })
      .catch(response => {
        console.log(response);
      });
  },
  components: {
    towtop
  }
};
</script>

<style scoped lang="less">
.hui-field_core {
  text-align: right;
}

.hui-field {
  width: 90%;
  margin: 0 auto;
  height: 0.9rem;
  line-height: 0.9rem;
}

.form {
  margin-top: 0.3rem;
  background-color: #fff;

  .input_box {
    height: auto;
    display: flex;
    justify-content: space-between;
  }
  label {
    flex: 1 1 25%;
  }
  span {
    flex: 1 1 75%;
    text-align: right;
  }
  .bigBox {
    height: auto;
    overflow: hidden;
    display: inherit;
    span {
      display: block;
      text-align: left;
    }
  }
}

.hui-btn.is-block {
  width: 70%;
  height: 0.8rem;
  margin: 0.5rem auto;
  background-color: #2d7ffc;
  font-size: 0.3rem;
}
</style>
