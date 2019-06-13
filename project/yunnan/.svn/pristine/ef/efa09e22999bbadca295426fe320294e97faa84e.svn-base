<template>
  <div class="box">
    <towtop :name="titlename"/>
    <div class="middle_top" v-show="middle_top">
      <div class="info">
        <h2>温馨提示</h2>
        <p>本人承诺以上所填信息及所传材料属实，如有不实元承担后果。</p>
        <div class="queding" @click="submit_badtwo">确认提交审核</div>
      </div>
    </div>
    <div class="middle_top" v-show="middle_toptwo">
      <div class="infotwo">
        <h2>温馨提示</h2>
        <p>您的申请已提交成功，办理进度请在
          <a href="#">“我的办理进度”</a>中查询，办理结果请随时关注消息提醒。
        </p>
        <div class="queding" @click="clospupo()">确认</div>
      </div>
    </div>
    <div class="search">
      <div class="src">
        <input type="text" placeholder="搜索（请输入姓名）" v-model="alluser">
        <span @click="queryall()">
          <Icon type="search" color="#999999" class="sousuo"></Icon>
        </span>
      </div>
      <div class="put add" @click="adduser()">+&nbsp;新增</div>
    </div>
    <ul v-if="showflagall">
      <li v-for="item in allarr">
        <div class="l">
          <div class="nametop">{{item.XingMing}}</div>
          <div class="addressbtm">{{item.ShenFenZH}}</div>
          <div class="addressbtm" v-if="flag">{{item.LianXiDH}}</div>
          <div class="addressbtm" v-if="flag">{{item.CanJiZH}}</div>
          <div class="addressbtm" v-if="flag">{{item.CanJiLB}}</div>
          <div class="addressbtm" v-if="flag">{{item.DaoGongSJ}}</div>
          <div class="addressbtm" v-if="flag">{{item.LiGangSJ}}</div>
          <div class="addressbtm" v-if="flag">{{item.ZhuZhi}}</div>
        </div>
        <div class="r">
          <span @click="reviseuser(item.ID)">
            <Icon type="release" class="r_icon r1"></Icon>
          </span>
          <span @click="removeuser(item.ID)">
            <Icon type="emptied" class="r_icon"></Icon>
          </span>
        </div>
      </li>
    </ul>
    <ul v-if="showflag">
      <li v-for="item in datatext.rows">
        <div class="l">
          <div class="nametop">{{item.XingMing}}</div>
          <div class="addressbtm">{{item.ShenFenZH}}</div>
          <div class="addressbtm" v-if="flag">{{item.LianXiDH}}</div>
          <div class="addressbtm" v-if="flag">{{item.CanJiZH}}</div>
          <div class="addressbtm" v-if="flag">{{item.CanJiLB}}</div>
          <div class="addressbtm" v-if="flag">{{item.DaoGongSJ}}</div>
          <div class="addressbtm" v-if="flag">{{item.LiGangSJ}}</div>
          <div class="addressbtm" v-if="flag">{{item.ZhuZhi}}</div>
        </div>
        <div class="r">
          <span @click="reviseuser(item.ID)">
            <Icon type="release" class="r_icon r1"></Icon>
          </span>
          <span @click="removeuser(item.ID)">
            <Icon type="emptied" class="r_icon"></Icon>
          </span>
        </div>
      </li>
    </ul>
    <!-- <Btn plain block @click="submit_bad">提交审核</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submit_bad"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "提交审核",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "用人单位比例安排残疾人就业年审",
      defaultList: [],
      middle_top: false,
      middle_toptwo: false,
      datatext: "",
      allarr: [],
      flag: false,
      showflagall: false,
      showflag: true,
      alluser: ""
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    this.queryuser();
  },
  methods: {
    submit_bad() {
      const setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "1"
        },
        txnBodyCom: {
          work_id: window.sessionStorage.getItem("WorkId"), //'1007db34815b4af6abd0f81b9a8c0e0f'
          matter_id: window.sessionStorage.getItem("matterid"), //'0f30a072b2d740bab0ee5b56a33d3833'
          member_id: window.sessionStorage.getItem("userid"),
          json_content: {
            work_id: window.sessionStorage.getItem("WorkId"),
            JiaoFeiRMC: window.sessionStorage.getItem("companyName"), //'南华县腾龙物流有限公司'
            SheHuiSYDM: window.sessionStorage.getItem("socialNumber") //'91532324778596925L'
          }
        }
      };
      this.$ajaxRequest("post", "/gsp/appForm00001", setdata)
        .then(res => {
          console.log(res);
          this.middle_top = !this.middle_top;
        })
        .catch(response => {});
    },
    submit_badtwo() {
      this.middle_top = !this.middle_top;
      this.middle_toptwo = !this.middle_toptwo;
    },
    clospupo() {
      this.$CallModule("close", "关闭");
    },
    adduser() {
      this.$router.push("/staffInfo?cjrid=0");
    },
    reviseuser(cjrid) {
      this.$router.push("/staffInfo?cjrid=" + cjrid);
    },
    removeuser(cjrid) {
      const setdata = {
        txnCommCom: {
          txnlttChnlld: "99999",
          txnlttchnlcgycode: "999999",
          tststraceld: "11056"
        },
        txnBodyCom: {
          dfrmt_psnid: cjrid
        }
      };
      this.$ajaxRequest("post", "/gsp/mng60031", setdata)
        .then(res => {
          console.log(res);
          this.showflag = false;
          this.queryuser();
        })
        .catch(response => {});
    },
    queryall() {
      this.allarr = [];
      for (var i = 0, len = this.datatext.rows.length; i < len; i++) {
        if (this.datatext.rows[i].XingMing.replace(this.alluser)) {
          console.log(this.datatext.rows[i]);
          this.allarr.push(this.datatext.rows[i]);
        }
      }
      this.showflag = false;
      this.showflagall = true;
    },
    queryuser() {
      let times = new Date();
      const setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "1",
          tStsTraceId: "2018112915",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          JiaoFeiRMC: window.sessionStorage.getItem("companyName"), //'南华县腾龙物流有限公司'
          SheHuiSYDM: window.sessionStorage.getItem("socialNumber"), // '91532324778596925L'
          Nian: times.getFullYear,
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "1"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80026", setdata)
        .then(res => {
          console.log(res);
          this.datatext = res;
          this.showflag = true;
        })
        .catch(response => {});
    }
  }
};
</script>
<style scoped="employment.vue">
.box {
  background-color: #fff;
}
.example-tabs {
  background-color: #fff;
}
.hui-tabs_tab {
  font-size: 0.28rem;
}
.hui-tabs .hui-tabs_tab-active {
  font-size: 0.28rem;
}
.example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  margin: 0.3rem auto;
  text-align: left;
}
.title {
  width: 100%;
  background-color: #f5f5f5;
}
p {
  width: 90%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0 auto;
  text-align: left;
  color: #999;
  font-size: 0.28rem;
}
.example-upload_btn {
  display: block;
  margin-top: 0.45rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #f5f5f5;
  font-size: 1rem;
  text-align: center;
  line-height: 1.6rem;
  color: #ccc;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.example-upload_formItem {
  font-weight: 700;
}
.b1 {
  display: inline-block;
  width: 0.06rem;
  height: 0.24rem;
  background-color: #257bff;
  margin-right: 0.1rem;
}

.middle {
  width: 90%;
  margin: 0.46rem auto;
  height: 0.01rem;
  background-color: #ccc;
}
.search {
  width: 90%;
  margin: 0.2rem auto;
}
.search input {
  border: none;
  background-color: #f5f5f5;
  font-size: 0.24rem;
}
.src {
  position: relative;
  display: inline-block;
  width: 70%;
  height: 0.64rem;
  line-height: 0.64rem;
  border-radius: 0.3rem;
  background-color: #f5f5f5;
  text-align: left;
  padding-left: 0.5rem;
}
.add,
.put {
  display: inline-block;
  font-size: 0.28rem;
  color: #257bff;
}
.sousuo {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  font-size: 0.28rem;
}
.add {
  margin-left: 0.3rem;
}
ul {
  width: 90%;
  height: auto;
  margin: 0.5rem auto;
}
li {
  width: 100%;
  margin-top: 0.2rem;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
}
.l,
.r {
  height: 100%;
  width: 70%;
  display: inline-block;
  font-size: 0.28rem;
  text-align: left;
}
.nametop {
  margin-bottom: 0.2rem;
}
.r {
  width: 25%;
  text-align: right;
  margin-bottom: 0.2rem;
}
ul p {
  margin-top: 1rem;
  font-size: 0.32rem;
  -ms-text-align-last: auto;
  text-align: center;
}
.r_icon {
  font-size: 0.4rem;
  color: #2d7ffc;
}
.r1 {
  margin-right: 0.2rem;
}

.example-popup_wrapper1 {
  padding: 0 20px;
  position: relative;
}

.example-popup .example-popup_1 {
  width: 200px;
  border-radius: 8px;
  padding: 10px;
  transform: translate(-50%, 0);
}
.example-popup .example-popup_1 h1 {
  font-size: 18px;
  color: #00ace6;
  margin-top: 0;
  margin-bottom: 0;
}

.example-popup .example-popup_1 p {
  margin-bottom: 10px;
}

.example-popup_1::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50px;
  height: 0;
  width: 0;
  border-bottom: 10px solid #ffffff;
  border-left: 10px dashed transparent;
  border-right: 10px dashed transparent;
}

.box {
  width: 100%;
  height: 100%;
}
.middle_top {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: -30px;
  left: 0;
  z-index: 9;
}
.middle_top .info {
  background-color: #fff;
  width: 75%;
  margin: 50% auto;
  border-radius: 0.3rem;
}
.info h2 {
  width: 70%;
  margin: 0 auto;
  height: 1rem;
  font-size: 0.36rem;
  font-weight: 700;
  line-height: 1rem;
}
.info p {
  width: 75%;
  height: 1.5rem;
  margin-bottom: 0.2rem;
}
.info .queding {
  width: 100%;
  height: 1rem;
  border-top: 0.01rem solid #ccc;
  line-height: 1rem;
  margin: 0 auto;
  font-size: 0.36rem;
  color: #2d7ffc;
}
.middle_top .infotwo {
  background-color: #fff;
  width: 75%;
  margin: 50% auto;
  border-radius: 0.3rem;
}
.infotwo h2 {
  width: 70%;
  margin: 0 auto;
  height: 1rem;
  font-size: 0.36rem;
  font-weight: 700;
  line-height: 1rem;
}
.infotwo p {
  width: 75%;
  height: 1.4rem;
  line-height: 0.45rem;
  margin-bottom: 0.2rem;
}
.infotwo p a {
  color: #2d7ffc;
}
.infotwo .queding {
  width: 100%;
  height: 1rem;
  border-top: 0.01rem solid #ccc;
  line-height: 1rem;
  margin: 0 auto;
  font-size: 0.36rem;
  color: #2d7ffc;
}
.src input {
  height: 0.64rem !important;
}
</style>
