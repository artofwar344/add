<template>
  <div class="bureau_sports_search">
    <towtop :name="title"/>
    <div class="bureau_sports_search_list" v-show="exist">
      <div class="search_list_header">
        <em class="tip"></em>
        <p class="tipName">{{spgItem.Spg_Events_Name}}</p>
      </div>
      <Grid>
        <Gridcol :cols="4">举办时间</Gridcol>
        <Gridcol :cols="8">{{spgItem.Spg_Hold_Time}}</Gridcol>
      </Grid>
      <Grid>
        <Gridcol :cols="4">承办单位</Gridcol>
        <Gridcol :cols="8">{{spgItem.Spg_Undertaker}}</Gridcol>
      </Grid>
      <Grid>
        <Gridcol :cols="4">组织架构</Gridcol>
        <Gridcol :cols="8">{{spgItem.Spg_Organization}}</Gridcol>
      </Grid>
      <Grid>
        <Gridcol :cols="4">参赛条件</Gridcol>
        <Gridcol :cols="8">{{spgItem.Spg_Eligibility}}</Gridcol>
      </Grid>
      <Grid>
        <Gridcol :cols="4">联系人</Gridcol>
        <Gridcol :cols="8">{{spgItem.Spg_Linkman}}</Gridcol>
      </Grid>
      <Grid>
        <Gridcol :cols="4">联系电话</Gridcol>
        <Gridcol :cols="8">{{spgItem.Spg_Contact}}</Gridcol>
      </Grid>
      <div class="announce">
        <div class="header">
          <div class="blueline"></div>温馨提示
        </div>
        <p>请在正常工作时间段拨打电话咨询，工作人员将第一时间为您答疑。</p>
      </div>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import Button from "./../common/button.vue";

export default {
  data() {
    return {
      title: "云南省公益性体育赛事",
      spg_Id: "",
      spgItem: {},
      exist: false
    };
  },

  components: {
    towtop,
    Button
  },
  mounted() {
    this.spg_Id = this.$route.params.spg_Id;
    console.log(this.spg_Id);
    this.$ajaxRequest("post", "/gsp/mng30046", {
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        spg_id: this.spg_Id
      }
    })
      .then(res => {
        console.log(res);
        this.spgItem = res["Matter_S_Spg"];
        this.exist = true;
        console.log(this.spgItem);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    dateFormat(time, format) {
      const t = new Date(time);
      const tf = function(i) {
        return (i < 10 ? "0" : "") + i;
      };
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, a => {
        switch (a) {
          case "yyyy":
            return tf(t.getFullYear());
          case "MM":
            return tf(t.getMonth() + 1);
          case "mm":
            return tf(t.getMinutes());
          case "dd":
            return tf(t.getDate());
          case "HH":
            return tf(t.getHours());
          case "ss":
            return tf(t.getSeconds());
          default:
            break;
        }
      });
    }
  }
};
</script>

<style scoped>
.bureau_sports_search_list {
  padding: 0.34rem 0.36rem 0.62rem;
  background: #ffffff;
  width: auto;
  height: auto;

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
  line-height: 0.7rem;
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
.bureau_sports_search .announce{
  width:auto !important;
  padding: 0.26rem 0.34rem !important;
}
</style>