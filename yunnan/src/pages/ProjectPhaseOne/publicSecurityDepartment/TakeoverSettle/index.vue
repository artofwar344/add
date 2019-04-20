<template>
  <div class="settleForm take-over">
    <towtop :name="titlename"/>
    <div class="header">拟户口登记地公安派出所</div>
    <area-picker @setValue="setHandle" :area-data="areaData"/>

    <div v-if="this.$route.name === 'moveAway'">
      <div class="header">迁出信息</div>
      <div class="input_outside_box number">
        <div class="input_box spec">
          <span class="middlethree">*</span>
          <label class="labelwidth">准迁编号
          </label>
          <div class="inner">
            <div class="area">
              <input
                type="text"
                placeholder="选择"
                :value="areaMin.regnShtn"
                @click="open('pickerselect01')"
              >
              <Icon type="arrow-right" size="16" color="#999999"></Icon>
            </div>
            <input
              type="number"
              placeholder="请输入您的准迁编号"
              v-model.number="serialNumber"
              oninput="if(value.length>8)value=value.slice(0,7)"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="header">{{ApplicantTitle}}</div>
    <div class="input_outside_box">
      <div class="input_box" v-if="this.$route.name !== 'moveAway'">
        <span class="middlethree">*</span>
        <label>与申请人关系
        </label>
        <Icon type="arrow-right" size="16" color="#999999"></Icon>
        <input
          type="text"
          placeholder="请选择与申请人的关系"
          :value="relation ?relation.cmnCdNm : ''"
          @click="open('pickerselect04')"
        >
      </div>
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>姓名
        </label>
        <input :readonly="InvertMsg" type="text" v-model="name" placeholder="请输入姓名">
      </div>
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>公民身份证
        </label>
        <input :readonly="InvertMsg" type="text" v-model="idNumber" placeholder="请输入18位身份证号码">
      </div>
    </div>

    <!-- 选择与申请人关系 -->
    <Huiselect
      ref="pickerselect04"
      position="bottom"
      :dataslots="relParams"
      class="example-select_item"
      @confirms="selectConfirmRelation"
    ></Huiselect>
    <!-- 选择与地域简称 -->
    <Huiselect
      ref="pickerselect01"
      position="bottom"
      :dataslots="provinceMinParam"
      class="example-select_item"
      @confirms="selectConfirmArea"
    ></Huiselect>

    <div class="header">上传材料</div>
    <stuff-upload-modul
      :modelParams="moduleData"
      @backData="callBackHandle"
      :temporaryData="uploadFile"
    />

    <!-- <div class="buttonGroup">
        <button class="commonBtn" @click="tempSave">临时保存</button>
        <button class="commonBtn greenButton" @click="jumpFaceID">确认提交</button>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @func1="tempSave" @func2="jumpFaceID"/>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import ccbUpload from "../../../../components/ccb-upload";
import { mapMutations, mapGetters, mapActions } from "vuex";
import areaPicker from "../components/areaPciker";
import stuffUploadModul from "../components/stuffUploadModul";
import mybutton from "../../../../components/MyButton";

export default {
  data: function() {
    return {
      btnData: [
        {
          text: "临时保存",
          disabled: false,
          isSure: true,
          click: "func1"
        },
        {
          text: "确认提交",
          disabled: false,
          isSure: true,
          click: "func2"
        }
      ],
      ApplicantTitle: "迁出人信息",
      flag: false,
      matNum: "hz-01",
      matSubType: "abcd00001",
      subSolt: "",
      uploadFile: [],
      areaData: {},

      titlename: "",
      serialNumber: '',
      city: "",
      county: "",
      policestation: "",

      name: "",
      idNumber: "",
      relation: {},
      areaMin: {},
      selectRelation: [
        {
          flex: 1,
          values: [{ text: "父亲", value: "a" }, { text: "母亲", value: "b" }],
          showText: "text",
          className: "slot1"
        }
      ],
      haveNum: 0,
      InvertMsg: false
    };
  },
  components: {
    mybutton,
    ccbUpload,
    towtop,
    areaPicker,
    stuffUploadModul
  },
  computed: {
    ...mapGetters("publicSecurityStore", [
      "relParams",
      "formData",
      "uploadFiles",
      "provinceMinParam",
      "tempSaveData"
    ]),
    ...mapGetters(["workId"]),
    moduleData: function() {
      let takeoverSettle = [
        {
          title: "接迁人的接迁直系亲属常住户口迁移申请书",
          fileNameKey: `${this.workId}_hz-03_01_abcd00017`
        },
        {
          title:
            "自有房屋的：房屋产权证明文件（含房屋产权证或不动产登记或购房合同、交款发票）（原件）",
          fileNameKey: `${this.workId}_hz-03_01_abcd00018`
        },
        {
          title:
            "接迁人与被接迁人的亲属关系证明（居民户口簿能反映亲属关系的不用再次提供）",
          fileNameKey: `${this.workId}_hz-03_01_abcd00019`
        },
        {
          title: "接迁人的居民户口簿（原件）首页、户主页、本人页",
          fileNameKey: `${this.workId}_hz-03_01_abcd00020`
        },
        {
          title: "被接迁人的居民户口簿（原件）首页、户主页、本人页",
          fileNameKey: `${this.workId}_hz-03_01_abcd00021`
        },
        {
          title: "被接迁人的居民身份证（原件）",
          fileNameKey: `${this.workId}_hz-03_01_abcd00022`
        }
      ];
      let moveAway = [
        {
          title: "迁入地公安机关的《准予迁入证明》",
          fileNameKey: `${this.workId}_hz-09_01_abcd00045`
        },
        {
          title: "迁入人居民户口簿（原件）首页、户主页、本人页",
          fileNameKey: `${this.workId}_hz-09_01_abcd00046`
        }
      ];
      switch (this.$route.name) {
        case "takeoverSettle":
          this.titlename = "接迁落户";
          return takeoverSettle;
          break;
        case "moveAway":
          this.titlename = "迁出省外";
          return moveAway;
          break;
        default:
          break;
      }
    },
    currentPageHaveNum() {
      return this.moduleData.length;
    }
  },
  watch: {
    tempSaveData(val, oldVal) {
      console.log(val);
      this.validTemp();
    }
  },
  mounted() {
    this.setCurrentPage(this.$route.name);
    this.fetchCommonParams("1023"); //家庭关系
    this.fetchArea({ parentCode: "156", regnLevel: "1" });
    this.initParam();
    $(".picker").on("touchmove", function(event) {
      event.stopPropagation();
      event.preventDefault();
    });
  },
  created() {
    if (this.$route.name === "moveAway") {
      this.InvertMsg = true
      this.name = this.$NoNull(window.sessionStorage.getItem("username"));
      this.idNumber = this.$NoNull(window.sessionStorage.getItem("cardid"));
    } else {
      this.ApplicantTitle = "落户人信息";
    }
    let workId = this.$route.query.WorkId
      ? this.$route.query.WorkId
      : "abbd2786e3064963854599dfe136a4e0";
    this.setWorkId(workId);
    window.LiveFaceResult = this.LiveFaceResult;
  },
  methods: {
    ...mapMutations("publicSecurityStore", [
      "setFormData",
      "setCurrentPage",
      "setTempSaveData"
    ]),
    ...mapActions("publicSecurityStore", [
      "fetchCommonParams",
      "fetchArea",
      "fetchTempSaveData",
      "fetchGetTempData"
    ]),
    ...mapMutations(["setWorkId"]),
    initParam() {
      this.fetchGetTempData();
    },
    validTemp() {
      try {
        let data = this.tempSaveData;
        let result = JSON.parse(this.tempSaveData.result);
        console.log(result);
        if (Object.keys(data)[0] === "Error") {
          return false;
        } else if (Object.keys(data)[1] === "success") {
          // 三级联动的反显
          this.areaData = {
            city: result.city,
            county: result.county,
            policestation: result.policestation
          };
          this.city = result.city["orgCode"];
          this.county = result.county["orgCode"];
          this.policestation = result.policestation["orgCode"];
          // 图片反显
          this.uploadFile = JSON.parse(result.uploadFiles);
          this.setHaveUploadNum()

          // 特定页面的反显数据逻辑
          this.getJobShowData(result);
        }
      } catch (error) {
        console.log(error);
      }
    },
    getJobShowData(result) {
      this.relation = result.relation;
      this.areaMin.regnShtn = result.areaMin;
      this.serialNumber = result.serialNumber;
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    setHandle(data) {
      this[Object.keys(data)] = data[Object.keys(data)];
    },
    selectConfirmRelation(selectedVal) {
      this.relation = selectedVal[0];
    },
    selectConfirmArea(selectedVal) {
      this.areaMin = selectedVal[0];
    },
    tempSave() {
      let saveFormData = {
        city: this.city,
        county: this.county,
        policestation: this.policestation,
        relation: this.relation,
        areaMin: this.areaMin.regnShtn,
        serialNumber: this.serialNumber
      };
      let parm = Object.assign({}, saveFormData);
      // let parm = Object.assign({}, saveFormData, {
      //   uploadFiles: JSON.stringify(this.uploadFile)
      // });
      this.fetchTempSaveData(parm);
    },
    validData(data) {
      // 校验空值
      /* console.log(Object.keys(data))
      console.log(data[Object.keys(data)]) */
      if (
        Object.keys(data)[0] === "formData" ||
        Object.keys(data)[0] === "subFormData"
      ) {
        let obj = data[Object.keys(data)];
        for (let i in obj) {
          // console.log(i)
          if (!obj[i]) {
            // console.log(i)
            // console.log(obj)
            this.$toast("请将信息填写完整");
            return false;
          }
          // 校验姓名
          if (i === "blr_xm" && !obj[i].match(/^[\u4e00-\u9fa5]+$/g)) {
            this.$toast("请输入正确的姓名");
            return false;
          }
          // 校验身份证
          if (
            i === "blr_sfz" &&
            !obj[i].match(
              /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/g
            )
          ) {
            this.$toast("请输入正确的身份证号码");
            return false;
          }
        }
        return true;
      }
      if (Object.keys(data)[0] === "uploadFiles") {
        if (data[Object.keys(data)].length < 1) {
          this.$toast("请添加附件材料");
          return false;
        }
        if (this.haveNum !== this.currentPageHaveNum) {
          this.$toast("请确保所需材料已全部添加！");
          return false;
        }
        return true;
      }
    },
    testFromValue() {
      const _self = this;
      let o = false;

      if (!_self.city || !_self.$children[1].city) {
        o = true;
        _self.$toast("请选择州市");
      } else if (!_self.county || !_self.$children[1].county) {
        o = true;
        _self.$toast("请选择区县");
      } else if (!_self.policestation || !_self.$children[1].policestation) {
        o = true;
        _self.$toast("请选择派出所");
      } else if (
        !_self.areaMin.suprRegnCode &&
        this.$route.name === "moveAway"
      ) {
        o = true;
        _self.$toast("请选择准迁编号地区");
      } else if (this.serialNumber.toString().length !== 8 && this.$route.name === "moveAway") {
        o = true;
        _self.$toast("请输入8位准迁编号");
      } else if (
        (!_self.relation || Object.keys(_self.relation).length == 0) &&
        this.$route.name !== "moveAway"
      ) {
        o = true;
        _self.$toast("请选择与申请人关系");
      } else if (!_self.name) {
        o = true;
        _self.$toast("请输入姓名");
      } else if (!_self.name.match(/^[a-zA-Z\u4e00-\u9fa5]*$/)) {
        o = true;
        _self.$toast("姓名仅支持中文或英文");
      } else if (!_self.idNumber) {
        o = true;
        _self.$toast("请输入身份证号");
      } else if (!_self.idNumber.match(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/ig)) {
        o = true;
        _self.$toast("请输入正确的身份证号");
      }
      return o;
    },
    saveAllData() {
      let uploadFiles = { uploadFiles: [] };
      let formData = {
        formData: {
          zsqh: this.city ? this.city["orgCode"] : "",
          hjdz_ssxqdm: this.county ? this.county["orgCode"] : "",
          sqd_gajgdwdm: this.policestation ? this.policestation["orgCode"] : "",

          sqr_xm: window.sessionStorage.getItem("username")
            ? window.sessionStorage.getItem("username")
            : "1111",
          sqr_sfz: window.sessionStorage.getItem("cardid")
              ? window.sessionStorage.getItem("cardid")
              : "111",
          sqr_phone: window.sessionStorage.getItem("userphone")
            ? window.sessionStorage.getItem("userphone")
            : "11",
        },
      }

      // 如是迁出省外，需加入如下字段。
      if (this.$route.name === 'takeoverSettle') {
        formData = Object.assign({}, {subFormInfo: [
          {
            ysqrgxdm: this.relation ? this.relation["cmnCd"] : "",
            blr_xm: this.name,
            blr_sfz: this.idNumber,
          }
        ]}, formData)
      }

      // 接迁落户所需字段
      if (this.$route.name === 'moveAway') {
        formData['formData'] = Object.assign({}, {
          ysqrgxdm: this.relation ? this.relation["cmnCd"] : "",
          blr_xm: this.name,
          blr_sfz: window.sessionStorage.getItem("cardid")
            ? window.sessionStorage.getItem("cardid")
            : "111",
        }, formData['formData'])
      }



      if (this.$route.name === "moveAway") {
        formData["formData"].zqzbh = this.serialNumber;
      }
      let subFormData = { subFormData: {} };
      // 过滤上传文件
      let data = this.uploadFile;
      for (let i in data) {
        data[i].map(item => {
          delete item.index;
          delete item.url;
          uploadFiles["uploadFiles"].push(item);
        });
      }
      this.setFormData({ formData });
      this.setFormData(uploadFiles);
    },
    jumpFaceID() {
      this.saveAllData();
      if (this.testFromValue()) return;

      if (!this.validData({ formData: this.formData })) {
        return;
      }
      if (!this.validData({ uploadFiles: this.uploadFiles })) {
        return;
      }

      // this.$router.push({name: 'resultPage'})
      // console.log('kkkkk')
      this.isAndroid_ios();
    },
    isAndroid_ios() {
      let sendata = {
        isIdcard: "0"
      };
      this.$CallModule("liveFace", sendata);
    },
    LiveFaceResult(senobject) {
      if (typeof senobject == "string") {
        this.$CallModule("StoragesetItem", senobject);
      } else {
        this.$CallModule("StoragesetItem", senobject);
      }
      this.$router.push("/resultPage");
    },
    callBackHandle(data) {
      // console.log(data)
      this.uploadFile = data;
      this.setHaveUploadNum();
    },
    setHaveUploadNum() {
      if (this.uploadFile) {
        this.haveNum = Object.keys(this.uploadFile).length;
      }
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../../assets/css/Settle.less";
@import "../../../../assets/css/upload.less";
</style>

<style lang="less" scoped>
.labelwidth{
  width:1.7rem;
}
.input_outside_box input {
  height: 1rem;
  line-height: 1rem;
}
.take-over {
  .input_box.spec {
    display: flex;

    .inner {
      display: flex;
      flex: 1;
      .area {
        width: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        > input {
          width: 1rem;
        }
      }
      > input {
        display: inline-block;
        flex: 1;
        margin-left: 10px;
      }
    }
  }
}
.middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 0.1rem;
  /*margin-right:0.01rem;*/
}
</style>

