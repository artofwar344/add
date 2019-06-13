<template>
  <div class="settleForm pur-mix">
    <towtop :name="titlename"/>
    <div class="header">拟户口登记地公安派出所</div>
    <area-picker @setValue="setHandle" :area-data="areaData"/>

    <div class="header">落户人信息</div>
    <div class="input_outside_box">
      <div class="input_box">

        <label><span class="middlethree">*</span>姓名
        </label>
        <span class="middlefour"></span>
        <p>{{name}}</p>
      </div>
      <div class="input_box">

        <label>   <span class="middlethree">*</span>公民身份证
        </label>
        <p>{{idNumber}}</p>
      </div>
      <!-- <div class="input_box" v-if="this.$route.name=='purchaseSettle'" :value="relative">
        <label>是否接迁直系亲属
          <sup style="color: red;">*</sup>
        </label>
        <Huiswitch @on-change="switchHandle" :value="relative">
          <span slot="open">是</span>
          <span slot="close">否</span>
        </Huiswitch>
      </div> -->
    </div>

    <div class="header">上传材料</div>
    <stuff-upload-modul
      :modelParams="moduleData"
      @backData="callBackHandle"
      :temporaryData="uploadFile"
    />

    <div class="buttonGroup">
      <button class="commonBtn" @click="tempSave">临时保存</button>
      <button class="commonBtn greenButton" @click="jumpFaceID">确认提交</button>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import ccbUpload from "../../../../components/ccb-upload";
import * as api from "../../../../api/api.js";
import { mapMutations, mapGetters, mapActions } from "vuex";
import areaPicker from "../components/areaPciker";
import stuffUploadModul from "../components/stuffUploadModul";

export default {
  data: function() {
    return {
      flag: false,
      matNum: "hz-01",
      matSubType: "abcd00001",
      subSolt: "",
      uploadFile: [],
      areaData: {},
      relative: {},
      titlename: "",
      city: "",
      county: "",
      policestation: "",
      name: window.sessionStorage.getItem("username"),
      idNumber: window.sessionStorage.getItem("cardid"),
      relative: "0",
      haveNum: 0
    };
  },
  components: {
    ccbUpload,
    towtop,
    areaPicker,
    stuffUploadModul
  },
  computed: {
    ...mapGetters("publicSecurityStore", [
      "formData",
      "uploadFiles",
      "tempSaveData"
    ]),
    ...mapGetters(["workId"]),
    moduleData: function() {
      let purchaseSettle = [
        {
          title: "房屋产权人的常住户口迁移申请书",
          fileNameKey: `${this.workId}_hz-02_01_abcd00013`
        },
        {
          title:
            "房屋产权证明文件（含房屋产权证或不动产登记或购房合同、交款发票）（原件）",
          fileNameKey: `${this.workId}_hz-02_01_abcd00014`
        },
        {
          title: "房屋产权人的居民户口簿（原件）首页、户主页、本人页",
          fileNameKey: `${this.workId}_hz-02_01_abcd00015`
        }
      ];

      let jobSettle = [
        {
          title: "实际就业人的常住户口迁移申请书",
          fileNameKey: `${this.workId}_hz-07_01_abcd00034`
        },
        {
          title:
            "工商营业执照或劳动合同、用人单位出具的劳动关系证明或其他能够证明有合法稳定就业的材料（原件）",
          fileNameKey: `${this.workId}_hz-07_01_abcd00035`
        },
        {
          title: "实际就业人员的居民户口簿（原件）首页、户主页、本人页",
          fileNameKey: `${this.workId}_hz-07_01_abcd00036`
        }
      ];

      let rentSettle = [
        {
          title: "房屋租赁人的常住户口迁移申请书",
          fileNameKey: `${this.workId}_hz-06_01_abcd00026`
        },
        {
          title: "房屋产权人的同意租赁人迁移常住户口的声明书",
          fileNameKey: `${this.workId}_hz-06_01_abcd00027`
        },
        {
          title: "租赁房屋的房屋产权证（原件）",
          fileNameKey: `${this.workId}_hz-06_01_abcd00029`
        },
        {
          title: "房屋租赁合同或租房协议（原件）",
          fileNameKey: `${this.workId}_hz-06_01_abcd00032`
        },
        {
          title: "房屋租赁人的居民户口簿（原件）首页、户主页、本人页",
          fileNameKey: `${this.workId}_hz-06_01_abcd00033`
        }
      ];

      switch (this.$route.name) {
        case "purchaseSettle":
          this.titlename = "购房落户";
          return purchaseSettle;
          break;
        case "jobSettle":
          this.titlename = "就业落户";
          return jobSettle;
          break;
        case "rentSettle":
          this.titlename = "租房落户";
          return rentSettle;
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
    this.initParam();

    $(".picker").on("touchmove", function(event) {
      event.stopPropagation();
      event.preventDefault();
    });
  },
  created() {
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
    ...mapMutations(["setWorkId", "fetchArea", "setTempSaveData"]),
    ...mapActions("publicSecurityStore", [
      "fetchTempSaveData",
      "fetchGetTempData"
    ]),
    async initParam() {
      await this.fetchGetTempData();
    },
    validTemp() {
      try {
        let data = this.tempSaveData;
        let result = JSON.parse(this.tempSaveData.result);
        console.log(data);
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
      this.relative = result.relative;
    },
    switchHandle(value) {
      this.relative = value ? "1" : "0";
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

    tempSave() {
      let saveFormData = {
        city: this.city,
        county: this.county,
        policestation: this.policestation,
        relative: this.relative
      };
      let parm = Object.assign({}, saveFormData);
      // let parm = Object.assign({}, saveFormData, {
      //   uploadFiles: JSON.stringify(this.uploadFile)
      // });
      this.fetchTempSaveData(parm);
    },
    validData(data) {
      // 校验空值
      // console.log(Object.keys(data))
      // console.log(data[Object.keys(data)])
      if (
        Object.keys(data)[0] === "formData" ||
        Object.keys(data)[0] === "subFormData"
      ) {
        let obj = data[Object.keys(data)];
        for (let i in obj) {
          console.log(i);
          if (!obj[i]) {
            console.log(i);
            console.log(obj);
            this.$toast("请将信息填写完整");
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

    saveAllData() {
      let uploadFiles = { uploadFiles: [] };

      let formData = {
        formData: {
          zsqh: this.city ? this.city["orgCode"] : "",
          hjdz_ssxqdm: this.county ? this.county["orgCode"] : "",
          sqd_gajgdwdm: this.policestation ? this.policestation["orgCode"] : "",

          blr_xm: window.sessionStorage.getItem("username")
            ? window.sessionStorage.getItem("username")
            : "1111",

          blr_sfz: window.sessionStorage.getItem("cardid")
            ? window.sessionStorage.getItem("cardid")
            : "111",

          sqr_phone: window.sessionStorage.getItem("userphone")
            ? window.sessionStorage.getItem("userphone")
            : "11",
          sqr_sfz: window.sessionStorage.getItem("cardid")
            ? window.sessionStorage.getItem("cardid")
            : "111",
          sqr_xm: window.sessionStorage.getItem("username")
            ? window.sessionStorage.getItem("username")
            : "1111",

          Is_zx: this.relative
        }
      };

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

      this.setFormData(formData);
      this.setFormData(uploadFiles);
    },

    jumpFaceID() {
      this.saveAllData();

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
.pur-mix {
  .input_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 0.1rem;
  margin-right: 0.05rem;
}
</style>

