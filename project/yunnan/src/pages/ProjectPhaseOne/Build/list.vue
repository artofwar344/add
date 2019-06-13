<template>
	<div>
		<towtop :name='hadertow' />
    <img class="chalist-nodata_img" :src="noDataImg" alt="" v-show="!haData">
    <div  v-show="haData" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <Loadmore :bottom-method="loadBottom"
                  v-if="!datatext.length == 0"
                      @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div v-if="name==10">
        <div v-for="(list,index) in datatext" class="chalist"  @click="listlink(list.organization_code,list.company_id,list.enterprise_name)" >
          <h3>企业名称：{{list.enterprise_name}}</h3>
          <p><span class="name width">法定代表人：{{list.legal_person}}</span><span class="map">企业属地：{{list.entpossession_name}}</span></p>
        </div>
      </div>
      <div v-if="name==11">
        <div v-for="(list,index) in datatext" class="chalist"  @click="listlink(list.orgcode,list.compname)" >
          <h3>单位名称：{{list.compname}}</h3>
          <p><span class="name">统一社会信用代码：{{list.orgcode}}</span></p>
        </div>
      </div>
      <div v-if="name==12">
        <div v-for="(list,index) in datatext" class="chalist"  @click="listlink(list.organization_code,list.company_id,list.enterprise_name)" >
          <h3>企业名称：{{list.enterprise_name}}</h3>
          <p><span class="name">法定代表人：{{list.legal_person}}</span><span class="map">企业属地：{{list.entpossession_name}}</span></p>
        </div>
      </div>
      <div v-if="name==13">
        <div v-for="(list,index) in datatext" class="chalist"  @click="listlink(list.code,list.compname)" >
          <h3>企业名称：{{list.compname}}</h3>
        </div>
      </div>
      </Loadmore>
    </div>
	</div>
</template>

<script>
import towtop from "../../../components/HederTwo";
import noDataImg from '@/assets/noDataImg.png'
import { cenurl } from "../../../components/toptow.js";
export default {
  data() {
    return {
      name: "",
      hadertow: "",
      noDataImg:noDataImg,
      matter_id: "",
      hadertow: "",
      urls: "",
      dataobj: "",
      haData:true,
      datatext: [],
      conutycode: "",
      citycode: "",
      textValue: "",
      comeReason: "",
      carMsg: "",
      EntPossessionName: "",
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      topStatus: "",
      pageJump: 1,
      pageNumber: 15,
      datetext:{},
      totalrec:'0'



    };
  },
  components: {
    towtop
  },
  created(){
    this.datetext=JSON.parse(this.$route.params.datetext)
  },
  mounted() {
    // let conn = this.datetext.textValue.replace(/(^\s*)|(\s*$)/g, "")
    // console.log(conn.replace(/(^\s*)|(\s*$)/g, ""))
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
      this.name = this.datetext.name;
      this.conutycode = this.datetext.conutycode;
      this.citycode = this.datetext.citycode;
      this.textValue = this.datetext.textValue.replace(/(^\s*)|(\s*$)/g, "");
      this.comeReason = this.datetext.comeReason;
      this.carMsg = this.datetext.carMsg;
      this.EntPossessionName = this.datetext.EntPossessionName;
    if (this.name == 10) {
      this.urls = "/gsp/mng90014";
      this.dataobj = {
        txnCommCom: { tRecInPage: "11", tPageJump: "1" },
        txnBodyCom: {
          enterprise_name: this.textValue,
          organization_code: this.comeReason,
          legal_person: this.carMsg,
          ent_city: this.citycode,
          ent_county: this.conutycode,
          matter_id: window.sessionStorage.getItem("matterid"),
          work_id: "1",
          member_id: window.sessionStorage.getItem("userid"),
          org_id: "1",
          chann_id: "1001"
        }
      };
      this.hadertow = "工程监理企业资质查询";
    } else if (this.name == 11) {
      this.urls = "/gsp/mng90016";
      this.dataobj = {
        txnCommCom: { tRecInPage: "11", tPageJump: "1" },
        txnBodyCom: {
          certificatenum: this.carMsg,
          comp_name: this.textValue,
          matter_id: window.sessionStorage.getItem("matterid"),
          work_id: "1",
          member_id: window.sessionStorage.getItem("userid"),
          org_id: "1",
          chann_id: "1001"
        }
      };
      this.hadertow = "建筑施工企业安全生产许可证";
    } else if (this.name == 12) {
      this.urls = "/gsp/mng19001";
      this.dataobj = {
        txnCommCom: { tRecInPage: "11", tPageJump: "1" },
        txnBodyCom: {
          enterprise_name: this.textValue,
          organization_code: this.comeReason,
          legal_person: this.carMsg,
          ent_city: this.citycode,
          ent_county: this.conutycode,
          matter_id: window.sessionStorage.getItem("matterid"),
          work_id: "1",
          member_id: window.sessionStorage.getItem("userid"),
          org_id: "1",
          chann_id: "1001"
        }
      };
      this.hadertow = "建筑施工企业资质查询";
    } else if (this.name == 13) {
      this.urls = "/gsp/mng19003";
      this.dataobj = {
        txnCommCom: { tRecInPage: "11", tPageJump: "1" },
        txnBodyCom: {
          company_name: this.textValue,
          matter_id: window.sessionStorage.getItem("matterid"),
          work_id: "1",
          member_id: window.sessionStorage.getItem("userid"),
          org_id: "1",
          chann_id: "1001"
        }
      };
      this.hadertow = "施工图审查机构查询";
    }
    this.getData(this.formatData);
  },
  methods: {
    formatData(res){
      let _self = this
      if (res) {
        if(res["ent_info"]){
          console.log(_self.datatext.concat(res["ent_info"]))
          _self.datatext = _self.datatext.concat(res["ent_info"])
          _self.haData = true;

        }else if(res.datalist){

          console.log(_self.datatext.concat(res.datalist))
          _self.datatext = _self.datatext.concat(res.datalist)
          _self.haData = true;

        }else{
          //没有数据
          _self.datatext = [];
          _self.haData = false;

        }

      }
    },
    getData (callback) {
      let _self = this
      let setdata = this.dataobj;
        let page = {
            "tRecInPage": this.pageNumber,
            "tPageJump": this.pageJump,
          };
      this.$ajaxRequest("post", this.urls, setdata,page)
      .then((res) => {

        console.log(res)
        // console.log(res.txnCommCom.totalRec)
        // this.totalrec = res.txnCommCom.totalRec
        if (res) {
          callback(res)
        } else {
          this.$toast("查询失败")
        }
      }).catch((error) => {
        console.log(error)
        this.totalrec = res.txnCommCom.totalRec
        });
    },
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    loadBottom () {
      console.log("1");
      const _self = this
      // 模拟加载中
      let dataSum = parseInt(_self.pageJump) * parseInt(_self.pageNumber)
      if (_self.datatext.length!=0 && _self.datatext.length< dataSum) {
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
    listlink(key, companyid, enterprisename) {
      this.$router.push(
        "/chatabel/tableone?name=" +
          this.datetext.name +
          "&id=" +
          key +
          "&companyid=" +
          companyid +
          "&enterprisename=" +
          enterprisename +
          "&hadertow=" +
          this.hadertow
      );
    }
  }
};
</script>

<style scoped lang="less">
  .chalist-nodata_img{
    width: 100%;
  }
.alllist{ text-align: left;color: #999; padding-bottom: .2rem; padding-left: .2rem;}
.chalist {
  height: 1rem;
  text-align: left;
  background: #fff;
  font-size: 0.24rem;
  color: #999;
  padding: 0.18rem;
  border-bottom: 1px solid #f1f3f6;
  h3 {
    font-size: 0.28rem;
    color: #333;
    line-height: 0.4rem;
    height: 0.4rem;
  }
  p {
    height: 0.3rem;
    display: flex;
    line-height: 0.3rem;
  }
  span {
    display: block;
    flex: 1;
    text-align: left;
  }
  .width{
    flex: none;
    width: 38%;
  }
  .map {
    text-align: right;
  }
}
</style>
<style>
  .chalist{
    height:auto !important;
  }
  .chalist h3{
    height:auto !important;
    min-height: .4rem !important;
    padding-bottom: .1rem;
  }
</style>
