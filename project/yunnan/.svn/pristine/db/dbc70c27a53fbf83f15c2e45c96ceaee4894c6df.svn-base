<template>
	<div class="bureau_sports_search">
		<towtop :name="title" />
		<div class="bureau_sports_search_list" v-show="exist">
			<div class="search_list_header">
				<em class="tip"></em>
				<p class="tipName">{{stadium.Stadium_Name}}</p>
			</div>
			<Grid>
				<Gridcol :cols="3">详细地址</Gridcol>
				<Gridcol :cols="9">{{stadium.Address}}</Gridcol>
			</Grid>
			<Grid>
				<Gridcol :cols="3">开放时间</Gridcol>
				<Gridcol :cols="9">{{stadium.Dispark_Time}}</Gridcol>
			</Grid>
			<Grid>
				<Gridcol :cols="3">乘车路线</Gridcol>
				<Gridcol :cols="9">{{stadium.route}}</Gridcol>
			</Grid>
			<Grid>
				<Gridcol :cols="3">联系方式</Gridcol>
				<Gridcol :cols="9">{{stadium.Tel}}</Gridcol>
			</Grid>
			<Grid>
				<Gridcol :cols="3">服务项目</Gridcol>
				<Gridcol :cols="9" class="service">{{stadium.Service_Name}}</Gridcol>
			</Grid>
		</div>

	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import Button from "./../common/button.vue";

export default {
  data() {
    return {
      title: "云南省公共体育馆",
      sports_id: this.$route.query.sports_id,
      equipmentList: [],
      stadium: {},
      exist: false
    };
  },

  components: {
    towtop,
    Button
  },
  mounted() {
    console.log(this.$route.params.sports_id);
    this.sports_id = this.$route.params.sports_id;
    let setdata = {
      tenant: "530000000000",
      txn_itt_chnl_id: "00",
      txn_itt_chnl_type: "11",
      sports_id: this.sports_id
    };
    this.$ajaxRequest("post", "/gsp/mng60015", setdata)
      .then(res => {
        var result = res["Matter_S_Sports_Do"];

        this.stadium = result;
        this.exist = true;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {}
};
</script>

<style scoped>
.example-dropdown_item {
  margin: 10px 0;
}

.example-dropdown_item .hui-dropdown_arrow {
  text-align: left;
  padding-left: 40px;
}

.example-dropdown_btn {
  position: relative;
}

.example-dropdown_icon .comps-dropdown_arrowIcon {
  position: absolute;
  left: 0.05rem;
}

.detailEquipment {
  margin: 0.32rem 0 2.6rem;
  height: 1.4rem;
  width: 1.4rem;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0;
}

.detailEquipment img {
  height: 0.62rem;
  width: 1rem;
  margin: 0.22rem;
}

.detailEquipment span {
  font-size: 0.2rem;
  line-height: 0.28rem;
}

.bureau_sports_search_list {
  width: 100%;
  background: #ffffff;
  /*border-bottom: 0.01rem solid #edeef2;*/
}

.search_list_header {
  text-align: left;
  height: 0.88rem;
  width: 100%;
}

.search_list_header .tip {
  display: inline-block;
  height: 0.24rem;
  width: 0.06rem;
  background: #257bff;
  margin: 0 0.2rem;
}

.search_list_header .tipName {
  display: inline-block;
  text-align: left;
  font-size: 0.28rem;
  color: #333333;
  line-height: 0.88rem;
}

.bureau_sports_search .columns {
  font-size: 0.28rem;
  line-height: 0.62rem;
  color: #999999;
  font-family: PingFangSC-Regular;
}

.bureau_sports_search .columns:nth-child(odd) {
  text-align: left;
}

.bureau_sports_search .columns:nth-child(even) {
  text-align: right;
  color: #333;
}
/* .bureau_sports_search .columns:nth-child(even).service{
		text-align: left;
	} */
</style>