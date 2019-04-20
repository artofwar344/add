<template>
  <div class="result-page">
    <towtop name="办理结果"/>
    <div class="container">
      <p class="text" v-if="isShow">申请提交中, 请稍等...</p>
      <div v-else>
        <div class="bigImg submitImg"></div>
        <p class="resultMsg">您的登记已提交成功</p>
        <p class="resultMsg">请耐心等待审批结果</p>
        <p class="resultMsg">请在“我的办事”查询审批进度</p>
        <button class="commonBtn" @click="() => {this.$CallModule('close', '关闭')}">返回</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import towtop from "../../../components/HederTwo";
import * as api from "../../../api/api.js";
import { debug } from 'util';

export default {
  data() {
    return {
      isShow: true,
      phone: window.sessionStorage.getItem("userphone"),
      cardid: window.sessionStorage.getItem("cardid"),
      name: window.sessionStorage.getItem("username"),
      work_id: window.sessionStorage.getItem("WorkId"),
      matter_id: window.sessionStorage.getItem("matterid"),
      member_id: window.sessionStorage.getItem("userid")
    };
  },
  mounted () {
    switch (this.currentDoPage) {
      case "illegitimateFather":
        this.illFather();
        break;
      case "illegitimateMother":
        this.illMother();
        break;
      case "legitimate":
        this.legitimate();
        break;
      case "purchaseSettle":
        this.purchase();
        break;
      case "takeoverSettle":
        this.takeover();
        break;
      case "moveAway":
        this.moveAway();
        break;
      case "parents":
        this.parents();
        break;
      case "company":
        this.company();
        break;
      case "residence":
        this.residence();
        break;
      case "jobSettle":
        this.jobSettle();
        break;
      case "rentSettle":
        this.rentSettle();
        break;

      case "TemporaryResidentialPermitReapply":
        this.TemporaryResidentialPermitReapply();
      break;
      case 'TemporaryResidentialPermitTransact':
        this.TemporaryResidentialPermitTransact()
        break;
      case 'TemporaryResidentialPermitReapply':
        this.TemporaryResidentialPermitReapply()
        break;
      case "deathcancelsRegistration":
        this.deathcancelsRegistration();
        break;
      case "armylogoutRegistration":
        this.armylogoutRegistration();
        break;
      case "residencePermitApply":
        this.residencePermitApply();
        break;
      case "gatBgxm":
        this.gatBgxm();
        break;
      case 'domesticSeven':
        this.domesticRequest();   // 出入境预受理
        break;
      default:
        break;
    }
  },
  components: {
    towtop
  },
  computed: {
    ...mapGetters("publicSecurityStore", [
      "formData",
      "uploadFiles",
      "subFormData",
      "currentDoPage",
      "applyReasonType",
      'setTempSaveData'
    ]),
    ...mapGetters(["workId"]),
    fileInfo: function() {
      let arry = this.formData.fileInfo;
      delete this.formData.fileInfo;
      return arry;
    }
  },
  methods: {
    ...mapMutations("publicSecurityStore", ["setFormData"]),

    requestRoot (data) {
      console.log(data)

      if (data.workId) {
        this.work_id = data.workId
      }

      console.log(this.work_id)
      let formjson = {
        formData: data,
        workId: this.work_id,
        // matterId: '93a8c96b225941f9a2ae2f44f9c163b2',
        // memberId: '123456'
        matterId: window.sessionStorage.getItem('matterid'),
        memberId: window.sessionStorage.getItem('userid')
      }

      api.saveBirthSettle (formjson).then(data => {
        // 上传图片
        this.uploadSumbit()
        if (window.sessionStorage.getItem("CHNL_ID") === 'CC03C004') {
          PJF.ynt.A0161G058()
        }
        this.isShow = false
        // this.setFormData({})

      })

    },

    uploadSumbit() {
      let upload = {
        files: this.uploadFiles,
        workId: window.sessionStorage.getItem("WorkId"),
        matterId: window.sessionStorage.getItem("matterid")
          ? window.sessionStorage.getItem("matterid")
          : "8d1639b5be8742d9af53686237631a4a",
        memberId: window.sessionStorage.getItem("userid")
      };

      // let upload = {
      //   files: this.uploadFiles,
      //   workId: this.workId,
      //   // matterId: '149192a25c0d4dfc8beb5757072c7531', //随父
      //   matterId: '93546eff4de44290a092ceb6c6da83d6', //随母
      //   // matterId: '0922246b7359478f9739ad1f1173c40e', //婚生
      //   memberId: '123456'
      // }
      api.sumbitUploadData(upload)

    },

    illFather() {
      let data = {
        deptId: this.formData.sqd_gajgdwdm,
        accountId: this.phone,
        idNum: this.cardid, //
        sqr: this.name, //
        hzYwlx: "hz_mat_csdj", //
        mainTableName: "oi_hz_csdj",
        matSubType: "02", //01婚生;02 非婚生随父落户;03非婚生随母落户
        matNum: "hz-01", //
        souceId: "mat_att_csdj",
        formInfo: this.formData,
        subTableNames: [],
        subFormInfo: [],
        matType: "01"
      }

      this.requestRoot(data)
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },

    illMother() {
      let data = {
        deptId: this.formData.sqd_gajgdwdm,
        accountId: this.phone,
        idNum: this.cardid, //
        sqr: this.name, //
        hzYwlx: "hz_mat_csdj", //
        mainTableName: "oi_hz_csdj",
        matSubType: "03", //01婚生;02 非婚生随父落户;03非婚生随母落户
        matNum: "hz-01", //
        souceId: "mat_att_csdj",
        formInfo: this.formData,
        subTableNames: [],
        subFormInfo: [],
      };

      this.requestRoot(data);
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },

    legitimate() {
      let data = {
        deptId: this.formData.sqd_gajgdwdm,
        accountId: this.phone,
        idNum: this.cardid, //
        sqr: this.name, //
        hzYwlx: "hz_mat_csdj", //
        mainTableName: "oi_hz_csdj",
        matSubType: "01", //01婚生;02 非婚生随父落户;03非婚生随母落户
        matNum: "hz-01", //
        souceId: "mat_att_csdj",
        formInfo: this.formData,
        subTableNames: [],
        subFormInfo: [],
      };
      this.requestRoot(data)
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },
    purchase() {
      let data = {
        deptId: this.formData.sqd_gajgdwdm,
        accountId: this.phone,
        idNum: this.cardid, //
        sqr: this.name, //
        hzYwlx: "hz_mat_gflh", //
        mainTableName: "oi_hz_gflh",
        matSubType: "01",
        matNum: "hz-02", //
        souceId: "mat_att_csdj", // 值有问题
        formInfo: this.formData,
        subTableNames: [],
        subFormInfo: [],
      };
      this.requestRoot(data)
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },

    takeover() {
      let data = {
        accountId: this.phone,
        applyType: '1', //
        deptId: this.formData.formData.sqd_gajgdwdm,
        formInfo: this.formData.formData,
        guid: '', // 提交主键
        hzYwlx: "hz_mat_tklh", //
        idNum: this.cardid, //
        isMailMertal: 'N', // 是否邮寄
        mainTableName: "oi_hz_qslh",
        matNum: "hz-03", //
        matSubType: "01",
        netProjectType: 'BST', //表单提交来源
        sqr: this.name, //
        tskSource: 'HZ', // 办件来源
        souceId: "mat_att_tklh", // 值有问题
        matType: "hz_mat_tklh",
        subTableNames: ['oi_hz_qslh_lhr'],
        subFormInfo: this.formData.subFormInfo,
        // subFormInfo: [],
      };
      this.requestRoot(data)

      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },

    moveAway() {
      let data = {
        "deptId": this.formData.formData.sqd_gajgdwdm,
        "accountId": this.phone,
        "idNum": this.cardid,//
        "sqr": this.name,
        "hzYwlx": "hz_mat_qcsw",////
        "mainTableName": "oi_hz_qcsw",
        "matSubType": "01",
        "matNum": "hz-09",//
        "souceId": "mat_att_csdj",   // 值有问题
        "formInfo": this.formData.formData,
        "subTableNames": [],
        "subFormInfo": []
      };
      console.log(data);
      this.requestRoot(data)

    },

    parents() {
      let data = {
        "deptId": this.formData.sqd_gajgdwdm,
        "accountId": this.phone,
        "idNum": this.cardid,//
        "sqr": this.name,//
        "hzYwlx": "hz_mat_xsby",//
        "mainTableName": "oi_hz_xsby",
        "matSubType": "01",
        "matNum": "hz-08",//
        "pe": "02",  //父（母）现常住户口登记地;02--登记在单位集体户或人才服务机构集体户;03--拟登记在实际居住地
        "souceId": "mat_att_xsby",
        "formInfo": this.formData,
        "subTableNames": [],
        "subFormInfo": []
      }
      this.requestRoot(data)
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },

    company() {
      let data = {
        "deptId": this.formData.sqd_gajgdwdm,
        "accountId": this.phone,
        "idNum": this.cardid,//
        "sqr": this.name,//
        "hzYwlx": "hz_mat_xsby",//
        "mainTableName": "oi_hz_xsby",
        "matSubType": "02",
        "matNum": "hz-08",//
        "pe": "02",  //父（母）现常住户口登记地;02--登记在单位集体户或人才服务机构集体户;03--拟登记在实际居住地
        "souceId": "mat_att_xsby",
        "formInfo": this.formData,
        "subTableNames": [],
        "subFormInfo": []
      }
      this.requestRoot(data)
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },

    residence() {
      let data = {
        "deptId": this.formData.sqd_gajgdwdm,
        "accountId": this.phone,
        "idNum": this.cardid,//
        "sqr": this.name,//
        "hzYwlx": "hz_mat_xsby",//
        "mainTableName": "oi_hz_xsby",
        "matSubType": "03",
        "matNum": "hz-08",//
        "pe": "03",  //父（母）现常住户口登记地;02--登记在单位集体户或人才服务机构集体户;03--拟登记在实际居住地
        "souceId": "mat_att_xsby",
        "formInfo": this.formData,
        "subTableNames": [],
        "subFormInfo": []
      }
      this.requestRoot(data)
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },

    jobSettle() {
      let data = {
        "deptId": this.formData.sqd_gajgdwdm,
        "accountId": this.phone,
        "idNum": this.cardid,//
        "sqr": this.name,//
        "hzYwlx": "hz_mat_jylh",//
        "mainTableName": "oi_hz_jylh",
        "matSubType": "01",
        "matNum": "hz-07",//
        "souceId": "mat_att_xsby",
        "formInfo": this.formData,
        "subTableNames": [],
        "subFormInfo": []
      }
      this.requestRoot(data)
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },

    rentSettle() {
      let data = {
        "deptId": this.formData.sqd_gajgdwdm,
        "accountId": this.phone,
        "idNum": this.cardid,//
        "sqr": this.name,//
        "hzYwlx": "hz_mat_zflh",//
        "mainTableName": "oi_hz_zflh",
        "matSubType": "01",
        "matNum": "hz-06",//
        "souceId": "mat_att_xsby",
        "formInfo": this.formData,
        "subTableNames": [],
        "subFormInfo": []
      }

      this.requestRoot(data);

      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },
    TemporaryResidentialPermitTransact() {
      let data = {
        "accountId": this.phone,
        "deptId": this.formData.sqd_gajgdwdm,
        "formInfo": this.formData,
        "hzYwlx": "hz_mat_zzdj",
        'mainTableName': "oi_hz_zzdj",
        "idNum": this.cardid,
        "matNum": "hz-11",
        "matSubType": "01",
        "sqr": this.name,
        'subTableNames': [],
        "subFormInfo":[],
      }
      this.requestRoot(data)
      // setTimeout(() => {
      //   this.uploadSumbit()
      // }, 500, this);
    },

    deathcancelsRegistration() {
      // debugger
      // let data = {
      //   accountId: this.phone,
      //   idNum: this.cardid, //
      //   sqr: this.name, //
      //   workId: window.sessionStorage.getItem("WorkId"),
			// 	matter_id: this.matter_id,
			// 	member_id: this.member_id,
      //   formInfo: this.formData //图片上传内容
      // };
      let data =this.formData
      this.requestRoot(data);
      // setTimeout(
      //   () => {
      //     this.uploadSumbit();
      //   },
      //   500,
      //   this
      // );
    },
	armylogoutRegistration() {
    let data = this.formData
    // debugger
      //data.workId=window.sessionStorage.getItem("WorkId")
      // data.matter_id=this.matter_id
      // data.member_id=this.member_id
     this.requestRoot(data)

	  // setTimeout(
    //   () => {
    //     this.uploadSumbit();
    //   },
    //   500,
    //   this
    // );
  },
    gatBgxm() {
		  this.isShow = false
    },
    TemporaryResidentialPermitReapply() {
      let data = {
        "accountId": this.phone,
        "applyType":"1",
        "deptId":this.formData.sqd_gajgdwdm,//部门代码
        "guid":"",
        "hzYwlx":"hz_mat_bbdj",
        "idNum":this.cardid,
        "isMailMertal":"N",
        "mainTableName":"oi_hz_bbdj",
        "matNum":"hz-12",
        "matSubType":"01",
        "netProjectType":"BST",
        "sqr":this.name,
        "tskSource":"HZ",
        'subTableNames': [],
        "subFormInfo":[],
        "formInfo": this.formData
      }
      this.requestRoot(data)

      // setTimeout(() => {
      //   this.uploadSumbit()
      // }, 500, this);
    },
    residencePermitApply(){
      let matSubType = window.sessionStorage.getItem('ApplyReasonType')
      console.log(this.ApplyReasonType)
      let data = {
        "guid": "",
        "accountId": this.phone,
        "deptId": this.formData.sqd_gajgdwdm,
        "formInfo": this.formData,
        "hzYwlx": "hz_mat_jzsl",
        "idNum": this.cardid,
        "mainTableName": 'oi_hz_stablejob',
        "matNum": "hz-13",
        "matSubType": matSubType,//01 就业; 02 居住;03 就读
        "sqr": this.name,
        subTableNames: [],
        "subFormInfo":[],
        "netProjectType": "APP",
		    "tskSource": "HZ",
		    "souceId": "mat_att_stablejob",
        "isMailMertal": "N",
        "applyType": "1"
      }

      this.requestRoot(data)

      // setTimeout(() => {
      //   this.uploadSumbit()
      // }, 500, this);
    },

    domesticRequest () {
      api.domesticRequest(this.formData).then(res => {
        this.isShow = false
      }).catch(e => {
        this.$toast(e)
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../assets/css/Settle.less";

.result-page {
  height: 100%;
  width: 100%;
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btn {
      position: absolute;
      top: 50%;
      height: 0.9rem;
      line-height: 0.9rem;
      width: 5rem;
      background: #2d7ffc;
      box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.5);
      border-radius: 25px;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0.19px;
      text-align: center;
    }
    .text {
      position: relative;
      color: #999999;
      font-size: 0.4rem;
      text-align: center;
      top: -1rem;
    }
  }
}
</style>
