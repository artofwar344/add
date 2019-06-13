<template>
  <div class="basic-info-page">
    <towtop :name="titleName"/>
    <div v-show="messageShow" class="formPart" style="margin: 0 auto; margin-top: 4rem; padding: .5rem; text-align: left; line-height: .4rem;">
      {{message}}
    </div>
    <div class="container" v-show="selectShow">
      <div class="basic-part" style="margin-top: .2rem" @click="toPageTwo(0)">
        <div class="content">
          <div class="imgZone">
            <img :src="require('@/assets/images/medicalInsurance/place@3x (3).png')" alt="">
          </div>
          <div class="wordZone">
            长期外地居住
          </div>
        </div>
      </div>
      <div class="basic-part"  @click="toPageTwo(1)">
        <div class="content">
          <div class="imgZone">
            <img :src="require('@/assets/images/medicalInsurance/iconote@3x (2).png')" alt="">
          </div>
          <div class="wordZone">
            异地突发急诊
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import towtop from "@/components/HederTwo";
  import area from "./area.json"
  export default {
    name:"interprovincicalMedicalOne",
    data() {
      return {
        titleName:"跨省异地就医备案",
        dqbm: "", // 参保州市
        grbm: "",  // 个人编码
        message: "正在查询跨省异地就医备案",
        messageShow: false,
        yidiShow: true,
        changqiShow: true,
        selectShow: true
      }
    },
    mounted() {
      // window.sessionStorage.setItem("usertoken", "55f86d4e42214bc4af8ed930b40904ba");
      // window.sessionStorage.setItem("cardid", "532429197002050012")
      // window.sessionStorage.setItem("username", "李光红")
      // window.sessionStorage.setItem("userphone", "13908710001")
      // window.sessionStorage.setItem("healthInsuranceArea", "5304");
      // window.sessionStorage.setItem("healthInsuranceNumber", "402008886");
      // window.sessionStorage.setItem("matter_id", "123abc123");
      // window.sessionStorage.setItem("areaYBJ", "5304");
      // window.sessionStorage.setItem("numYBJ", "402008886");


      // window.sessionStorage.setItem("cardid", "530402201711283238",)
      // window.sessionStorage.setItem("username", "易家成")
      // window.sessionStorage.setItem("userphone", "13908710001")
      // window.sessionStorage.setItem("areaYBJ", "5304");
      // window.sessionStorage.setItem("numYBJ", "5045233704");

      window.sessionStorage.setItem("UpdateOrSave", "");

      this.dqbm = window.sessionStorage.getItem("areaYBJ")       // 地区编码
      this.grbm = window.sessionStorage.getItem("numYBJ");        // 个人编码

      if(window.sessionStorage.getItem("message")) {
        this.message = window.sessionStorage.getItem("message");
      }

      // 查询长期外地居住
      // this.waidi();
      // 查询异地突发急诊
      // this.yidi();
      // this.fetchUserInsuranceArea().then(
      //   (res) => {
      //     this.dqbm = res.aaf017;
      //     this.fetchUserInsuranceNum(res.aaf017).then(
      //       (res) => {
      //         this.grbm = res.rowdatas[0].aac001;
      //         // 查询长期外地居住
      //         this.waidi();
      //         // 查询异地突发急诊
      //         this.yidi();
      //       }
      //     )
      //   }
      // )

    },
    components: {
      towtop
    },
    computed: {
    },
    methods: {
      // 获取参保地区
      fetchUserInsuranceArea () {
        let params = {
          "txnCommCom": {
            "txnIttChnlId": "1",
            "txnIttChnlCgyCode": "1",
            "tRecInPage": "1",
            "tPageJump": "10"
          },
          "txnBodyCom": {
            "matter_id": window.sessionStorage.getItem("matterid"),
            "aac058": "1010",
            "aac002": window.sessionStorage.getItem("cardid"),
            "aac003": window.sessionStorage.getItem("username"),
            // "aac002": "530402201711283238",
            // "aac002": "532429197002050012",
            // "aac003": '李光红',

            // "aac002": "530402201711283238",
            // "aac003": '易家成',
          }
        }

        return this.$ajaxRequest("post", "/gsp/mng90056", params)
      },

      // 获取个人编号
      fetchUserInsuranceNum (area) {
        let params = {
          "txnCommCom":{
            "txnIttChnlId":"1",
            "txnIttChnlCgyCode":"1"
          },
          "txnBodyCom":{
            "matter_id":window.sessionStorage.getItem("matterid"),
            "aac058":"1010",
            "aaf017": area,
            "aac002": window.sessionStorage.getItem("cardid"),
            "aac005": window.sessionStorage.getItem("userphone"),
            "aac003": window.sessionStorage.getItem("username"),

            // "aac002": "532429197002050012",
            // "aac005": '13908710001',
            // "aac003": '李光红',

            // "aac002": "530402201711283238",
            // "aac005": '13908710001',
            // "aac003": '易家成',
          }
        }
        return this.$ajaxRequest("post", "/gsp/mng80110", params)
      },
      waidi(){    // 查询是否有长期外地参保
        let query = {
          "txnCommCom":{
            "txnIttChnlId":"1",
            "txnIttChnlCgyCode":"1"
          },
          "txnBodyCom":{
            "matter_id": window.sessionStorage.getItem("matterid"),
            "chann_id":"1",
            "Crdt_Tp": "1010",
            "crdt_no": window.sessionStorage.getItem("cardid"),
            "Idv_ID": this.grbm,
            "mblph_no": window.sessionStorage.getItem("userphone"),
            "Insrd_City": this.dqbm,
            "StDt": "1900-01-01",
            "TmDt": ""
            // ,
            // "TmDt": this.dateFormat(new Date(), "yyyy-MM-dd")
          }
        };
        let page = { tRecInPage: "10000", tPageJump: "1" };
        this.$ajaxRequest("post", "/gsp/mng80112", query, page).then(
          (res) => {
            if(res.rowdatas && res.rowdatas.length > 0) {
              window.sessionStorage.setItem("UpdateOrSave", "update");
              res = res.rowdatas[0];
              window.sessionStorage.setItem("Aply_FileNo", res.Aply_FileNo);                  // 申请备案号
              window.sessionStorage.setItem("zoneCode", res.Rstl_Lnd_ADiv_Cd);        // 安置地行政区划代码
              window.sessionStorage.setItem("startDate", res.StDt);                                // 开始日期
              window.sessionStorage.setItem("endValue", res.EdDt);                                // 结束日期
              this.toEidtTwo(0);
            } else {
              // this.$toast("没有查询到长期外地居住备案")
              window.sessionStorage.setItem("type", "0");
              this.$router.push({name:"interprovincialMedicalAttentionTwo", params:{type: "0"}})
            }
          }
        ).catch(
          (e) => {
            this.changqiShow = true;
            this.messageShow = false;
            this.selectShow =true;
          }
        )

      },
      yidi() {    // 查询是否有异地参保
        let query = {
          "txnCommCom":{
            "txnIttChnlId":"1",
            "txnIttChnlCgyCode":"1"
          },
          "txnBodyCom":{
            "matter_id": window.sessionStorage.getItem("matterid"),
            "chann_id":"1",
            "Crdt_Tp": "1010",
            "crdt_no": window.sessionStorage.getItem("cardid"),
            "Idv_ID": this.grbm,
            "mblph_no": window.sessionStorage.getItem("userphone"),
            "Insrd_City":  this.dqbm,
            "StDt": "1900-01-01",
            "TmDt": ""
          }
        };
        let page = { tRecInPage: "10000", tPageJump: "1" };
        this.$ajaxRequest("post", "/gsp/mng80113", query, page).then(
          (res) => {
            if(res.rowdatas && res.rowdatas.length > 0) {
              window.sessionStorage.setItem("UpdateOrSave", "update");
              res = res.rowdatas[0];
              window.sessionStorage.setItem("Aply_FileNo", res.Aply_FileNo);                  // 申请备案号
              window.sessionStorage.setItem("zoneCode", res.Sma_Lnd_ADiv_Cd);                 // 就医地行政区划代码
              window.sessionStorage.setItem("hospCode", res.Mdcl_Svc_Inst_ECD);               // 医疗服务机构编码
              window.sessionStorage.setItem("hospName", res.Mdcl_Svc_Inst_Nm);                // 医疗服务机构名称
              window.sessionStorage.setItem("startDate", res.StDt);                           // 开始日期
              window.sessionStorage.setItem("endValue", res.EdDt);                            // 结束日期
              this.toEidtTwo(1);
            } else {
              // this.$toast("没有查询到异地突发急诊备案")
              window.sessionStorage.setItem("type", "1");
              this.$router.push({name:"interprovincialMedicalAttentionTwo", params:{type: "1"}})
            }
          }
        ).catch(
          (e) => {
            this.messageShow = false;
            this.selectShow =true;
            this.yidiShow = true;
          }
        )
      },
      toEidtTwo(type) {
        window.sessionStorage.setItem("type", type);
        window.sessionStorage.setItem("UpdateOrSave", "update");
        this.$router.push({name:"interprovincialMedicalAttentionTwo", params:{type: type}})
      },
      toPageTwo(type) {
        this.messageShow = true;
        this.selectShow = false;
        // 0 : 长期
        if (tyep == 0) {
          this.waidi();
        } else {
        // 1 : 异地
          this.yidi()
        }
        // window.sessionStorage.setItem("type", type);
        // this.$router.push({name:"interprovincialMedicalAttentionTwo", params:{type: type}})
      },
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
  }
</script>

<style lang="less" scoped>
  .basic-info-page {
    display: flex;
    flex-direction: column;

    .container {
      flex: 1;
      overflow: auto;
      .basic-part {
        background: #FFFFFF;
        box-shadow: 0 5px 10px 0 rgba(0,0,0,0.05);
        border-radius: 10px;
        width: 90%;
        margin: .4rem auto;
        height: 1.6rem;
        .content {
          .wordZone {
            font-family: PingFangSC-Medium;
            font-size: 15px;
            color: #333333;
            letter-spacing: -0.36px;
            line-height: 1.6rem;
            text-align: left;
            float: left;
            margin-left: .3rem;
          }
          .imgZone {
            float: left;
            margin-left: .6rem;
            margin-top: .5rem;
            img {
              width: .48rem;
              height: .5rem;
            }
          }
        }
      }
    }
  }

</style>

