<template>
  <div class="personinfo11">
    <towtop :name="titlename"/>
    <div class="headerimg">
      <img :src="imagessrc" alt>
    </div>
    <div class="name">
      <p>{{this.$route.query.id[0].c_xm}}</p>

      <img src="../../../assets/images/lawyer_man.png" alt v-if="this.$route.query.id[0].c_xb=='01'">
      <img src="../../../assets/images/lawyer_women.png" alt v-else>
    </div>
    <div class="personinfo">
      <div>
      <p class="p1">执业证号：</p>
      <p class="p2">{{(this.$route.query.id[0].c_zyzh=='null')?'':this.$route.query.id[0].c_zyzh}}</p>
      </div>
      <div>
      <p class="p1">执业类别：</p>
      <p class="p2">{{(this.$route.query.id[0].c_zylbn=='null')?'':this.$route.query.id[0].c_zylbn}}</p>
      </div>
      <div>
      <p class="p1">执业机构：</p>
      <p
        class="p2"
      >{{(this.$route.query.id[0].c_zyjgmc=='null')?'':this.$route.query.id[0].c_zyjgmc}}</p>
      </div>
      <div>
      <p class="p1">首次执业时间：</p>
      <p
        class="p2"
      >{{(this.$route.query.id[0].d_sczyrq=='null')?'':this.$route.query.id[0].d_sczyrq}}</p>
      </div>
    </div>
    <div class="line1"></div>
    <div class="content">
      <div class="permit">
        <span></span>
        <!-- <h2>行政许可信息</h2> -->
        <h2>表彰信息</h2>

        <div v-for="list in rlist" class="infocen">
          <div>{{list.d_jlrq}} {{list.c_jljg}}</div>
          <p>{{list.c_jlnr}}</p>
        </div>
      </div>
      <div class="line2"></div>
      <div class="punish">
        <span></span>
        <h2>处罚信息</h2>
        <!-- <h2>行政处罚信息</h2> -->
        <div v-for="list in plist" class="infocen">
          <div>{{list.d_cfksrq}} {{list.c_cfjdjg}}</div>
          <p>{{list.c_cfjd}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import towtop from "../../../components/HederTwo";

export default {
  data() {
    return {
      titlename: "律师查询",
      datatext: "",
      imagessrc: "",
      rlist: [],
      plist: []
    };
  },
  components: {
    towtop
  },
  created() {
    console.log(this.$route.query.id);
    this.datatext = this.$route.query.id;
    this.imagessrc =
      this.datatext[0].c_zjzp != undefined
        ? this.datatext[0].c_zjzp
        : "../../../assets/images/imageserorr.jpg";
  },
  mounted() {
    let setdata = {
      txnBodyCom: {
        c_bh: this.$route.query.id[0].c_bh
      }
    };
    let page = { tRecInPage: "10", tPageJump: "1" };
    this.$ajaxRequest("post", "/gsp/mng90052", setdata, page)
      .then(res => {
        this.rlist = res.rlist;
        this.plist = res.plist;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style  scoped>
.infocen {
  padding: 0 0 0.05rem 0;
}

.headerimg {
  width: 1.92rem;
  height: 1.92rem;
  margin: 0.5rem auto 0.1rem auto;
}
.headerimg img {
  width: 100%;
  height: 100%;
}
.name {
  margin-bottom: 0.15rem;
}
.name p {
  font-size: 0.28rem;
  display: inline-block;
  color: #333;
}
.name img {
  width: 0.24rem;
  height: 0.24rem;
  display: inline-block;
}
.personinfo {
  background-color: #edeef2;
  padding: 0.2rem 0.2rem;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  border-radius: 0.2rem;
  overflow: hidden;
}
.personinfo>div {
  width: 100%;
  overflow: hidden;
}
.personinfo .p1 {
  display: inline-block;
  width: 49%;
  text-align: right;
  color: #999;
  font-size: 0.28rem;
  float: left;
  margin-bottom: 0.05rem;
}
.personinfo .p2 {
  display: inline-block;
  width: 49%;
  text-align: left;
  font-size: 0.28rem;
  margin-bottom: 0.05rem;
  float: right;
  min-height: .3rem;
}
.permit,
.punish {
  text-align: left;
  width: 80%;
  margin: 0.4rem auto;
}
.permit span,
.punish span {
  margin-right: 0.2rem;
  display: inline-block;
  width: 0.06rem;
  height: 0.24rem;
  background-color: #257bff;
}
.permit h2,
.punish h2 {
  margin-bottom: 0.2rem;
  display: inline-block;
  font-size: 0.3rem;
  font-weight: 700;
}
.permit ul li,
.punish ul li {
  padding-left: 0.25rem;
  text-align: left;
  font-size: 0.24rem;
  color: #333;
  margin-bottom: 0.1rem;
}
.line1 {
  width: 100%;
  height: 0.01rem;
  margin: 0.3rem 0 0.3rem 0;
  background-color: #d3d3d3;
}
</style>

