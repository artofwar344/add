<template>
  <div class="basic-info-page">
    <towtop :name="titleName"/>
    <img v-show="failureShow" :src="require('@/assets/images/medicalInsurance/note@3x (4).png')" alt="">
    <div v-show="successShow" class="formPart" style="margin: 0 auto; margin-top: 4rem; padding: .5rem; text-align: left; line-height: .4rem;">
      您的《云南省基本医疗保险参保证明》已生成，请到”我的证照”中查看。
    </div>
  </div>
</template>

<script>
  import towtop from "@/components/HederTwo";

  export default {
    name:"interprovincicalMedicalOne",
    mounted() {
      this.dqbm = window.sessionStorage.getItem("areaYBJ")       // 地区编码
      this.grbm = window.sessionStorage.getItem("numYBJ");        // 个人编码

      let request = {
        "txnCommCom":{
          "txnIttChnlId":"1",
          "txnIttChnlCgyCode":"1",
          "tRecInPage":"10",
          "tPageJump":"1"
        },"txnBodyCom":{
          "matter_id":window.sessionStorage.getItem("matterid"),
          "chann_id":"1",
          "aac058": "1010",
          "aac002": window.sessionStorage.getItem("cardid"),
          "aac001": this.grbm,
          "aac005": window.sessionStorage.getItem("userphone"),
          "aaf017": this.dqbm
        }
      };
      let page = { tRecInPage: "10000", tPageJump: "1" };
      this.$ajaxRequest("post", "/gsp/mng80122", request, page).then(
        (res) => {
          this.successShow = true;
        }
      ).catch(
        (error) => {
          this.failureShow = true;
        }
      )

      /*this.fetchUserInsuranceArea().then(
        (res) => {
          this.dqbm = res.aaf017;
          this.fetchUserInsuranceNum(res.aaf017).then(
            (res) => {
              this.grbm = res.rowdatas[0].aac001;
              let request = {
                "txnCommCom":{
                  "txnIttChnlId":"1",
                  "txnIttChnlCgyCode":"1",
                  "tRecInPage":"10",
                  "tPageJump":"1"
                },"txnBodyCom":{
                  "matter_id":window.sessionStorage.getItem("matterid"),
                  "chann_id":"1",
                  "aac058": "1010",
                  "aac002": "532429197002050012",
                  "aac001": "402008886",
                  "aac005": "13908710001",
                  "aaf017": "5304"
                }
              };
              let page = { tRecInPage: "10000", tPageJump: "1" };
              this.$ajaxRequest("post", "/gsp/mng80122", request, page).then(
                (res) => {
                  this.successShow = true;
                }
              ).catch(
                (error) => {
                  this.failureShow = true;
                }
              )
            }
          )
        }
      )*/
    },
    data() {
      return {
        dqbm: "",
        grbm: "",
        successShow: false,
        failureShow: false,
        titleName:"医保个人参保证明",
      }
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
    }
  }
</script>

<style lang="less" scoped>
  .basic-info-page {
    display: flex;
    flex-direction: column;

    img {
      margin: 2.2rem auto;
      width: 5.58rem;
      height: 4.12rem;
    }
    .formPart {
      .title {
        font-family: PingFangSC-Regular;
        background-color: #fff;
        font-size: .38rem;
        .code {
          font-size: .28rem;
          text-align: right;
          margin-right: .5rem;
          padding-top: .3rem;
          margin-bottom: .15rem;
        }
      }
      .describe {
        background-color: #fff;
        font-size: 14px;
        width: 100%;
        height: 2.6rem;
        .left {
          float: left;
          width: 30%;
          line-height: 1.6rem;
        }
        .right {
          width: 66%;
          float: left;
          text-align: left;
          padding: .1rem;
          line-height: .4rem;
        }
      }
    }
  }

</style>

