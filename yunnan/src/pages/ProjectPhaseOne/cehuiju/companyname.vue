<template>
	<div class="box">
		<towtop :name="hadertow" />

		<div class="content">
    <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <Loadmore :bottom-method="loadBottom"
                v-if="!arr.length == 0"
                    @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul>
				<router-link v-for='list in arr' :to="{ name:'moreinfo', params: { id: list.Nima_Credebtial_Code }}" tag="li">
					{{list.Nima_Unit_Name}}
					<Icon type="arrow-right" color="#999999"></Icon>
				</router-link>

			</ul>
      </Loadmore>
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
      arr: [],
      allLoaded: false,
				bottomStatus: "",
				wrapperHeight: 0,
				pageJump: 1,
				pageNumber: 15,
        nima_unit_name:'',
        nima_grade:'',
        province:''
    };
  },
  mounted(){
			this.wrapperHeight =
			document.documentElement.clientHeight -
			this.$refs.wrapper.getBoundingClientRect().top;
      var datalist = JSON.parse(this.$route.params.datalist);
      console.log(datalist);
      this.nima_unit_name = datalist.nima_unit_name;
      this.nima_grade = datalist.nima_grade;
      this.province = datalist.province;
			this.getData(this.formatData)
		},
  methods: {
    tomoreinfo() {
      this.$router.push("/moreinfo");
    },
    formatData(data){
      let _self = this
      if (data["Matter_Nima_Dolist"]) {
        console.log(_self.arr.concat(data["Matter_Nima_Dolist"]))
        _self.arr = _self.arr.concat(data["Matter_Nima_Dolist"])
      } else {
        this.$toast('未查询到数据！')
      }
    },
		getData (callback) {

			let _self = this
      let setdata = {
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        tenant: "530000000000",
        txn_itt_chnl_id: "00",
        txn_itt_chnl_type: "11",
        nima_unit_name: this.nima_unit_name,
        pageSize: "10",
        current: "2",
        nima_grade: this.nima_grade,
        province: this.province
      }
    };
    let page = {
				tRecInPage: this.pageNumber,
				tPageJump: this.pageJump
			}
    this.$ajaxRequest("post", "/gsp/mng30013", setdata,page)
      .then(res => {
        if (res) {
          callback(res)
        } else {
          this.$toast("查询失败")
        }
      })
      .catch((error) => {console.log(error)});
		},
		handleBottomChange (status) {
		  this.bottomStatus = status
		},
		loadBottom () {
      const _self = this
      // 模拟加载中
      let dataSum = parseInt(_self.pageJump) * parseInt(_self.pageNumber)
      if (_self.arr.length!=0 && _self.arr.length< dataSum) {
        _self.allLoaded = true// 若数据已全部获取完毕
      } else {
        _self.pageJump = (parseInt(_self.pageJump) + 1).toString()
        _self.getData(loadBottom)
      }
      function loadBottom (data) {
        _self.$nextTick(function () {
            _self.formatData(data)
            _self.$refs.loadmore.onBottomLoaded()
        })
      }
		},
  },
  components: {
    towtop
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  margin-top: 0.2rem;
}
ul{
  background:#fff;
}
li {
  position: relative;
  width: 90%;
  height: 0.9rem;
  line-height: 0.9rem;
  margin: 0 auto;
  border-bottom: 0.01rem solid #ccc;
  text-align: left;
  background:#fff;
  font-size: 0.28rem;
  color: #2c3e50;
}


.hui-icon {
  position: absolute;
  right: 0.2rem;
  top: 0.35rem;
  font-size: 0.22rem;
}
</style>
