<template>
  <div class="settleForm">
    <div class="header">拟户口登记地公安派出所</div>
    <area-picker @setValue="setHandle" :area-data="areaData"/>

    <div class="header">登记人信息</div>
    <div class="input_outside_box">
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>与申请人关系
        </label>
        <Icon type="arrow-right" size="16" color="#999999"></Icon>
        <input
          type="text"
          :value="relation ? relation.cmnCdNm : ''"
          placeholder="请选择关系类别"
          @click="open('pickerselect04')"
        >
      </div>
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>姓名
        </label>
        <input type="text" placeholder="请输入姓名" v-model="name">
      </div>
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>性别
        </label>
        <Icon type="arrow-right" size="16" color="#999999"></Icon>
        <input
          type="text"
          :value="sex ? sex.cmnCdNm : ''"
          placeholder="请选择性别"
          @click="open('pickerselect05')"
        >
      </div>
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>民族
        </label>
        <Icon type="arrow-right" size="16" color="#999999"></Icon>
        <input
          type="text"
          :value="nation ? nation.cmnCdNm : ''"
          placeholder="请选择民族"
          @click="open('pickerselect06')"
        >
      </div>
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>出生日期
        </label>
        <Icon type="arrow-right" size="16" color="#999999"></Icon>
        <input type="text" placeholder="请选择出生日期" :value="birthday" @click="open('pickerselect07')">
      </div>
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>身高（cm）
        </label>
        <input type="text" placeholder="请输入身高" v-model="height">
      </div>
      <div class="input_box">
        <span class="middlethree">*</span>
        <label>血型
        </label>
        <Icon type="arrow-right" size="16" color="#999999"></Icon>
        <input
          type="text"
          placeholder="请选择血型"
          :value="blood ? blood.cmnCdNm : ''"
          @click="open('pickerselect09')"
        >
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
    <!-- 选择性别 -->
    <Huiselect
      ref="pickerselect05"
      position="bottom"
      :dataslots="genderParams"
      class="example-select_item"
      @confirms="selectConfirmSex"
    ></Huiselect>
    <!-- 选择民族 -->
    <Huiselect
      ref="pickerselect06"
      position="bottom"
      :dataslots="mzParams"
      class="example-select_item"
      @confirms="selectConfirmNation"
    ></Huiselect>
    <Datetime
      ref="pickerselect07"
      type="date"
      v-model="valueDate"
      :end-date="endDate"
      :start-date="new Date('1990-01-01')"
      position="bottom"
      @confirm="handleChangeConfirmDate"
    ></Datetime>
    <!-- 选择血型 -->
    <Huiselect
      ref="pickerselect09"
      position="bottom"
      :dataslots="xueParams"
      class="example-select_item"
      @confirms="selectConfirmBlood"
    ></Huiselect>

    <div class="header">上传材料</div>
    <stuff-upload-modul
      :modelParams="moduleData"
      @backData="callBackHandle"
      :temporaryData="uploadFile"
    />

    <!-- <div class="buttonGroup">
      <button class="commonBtn" @click="temSave">临时保存</button>
      <button class="commonBtn greenButton" @click="jumpFaceID">确认提交</button>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @func1="temSave" @func2="jumpFaceID"/>
    </div>
  </div>
</template>

<script>
import ccbUpload from "../../../../components/ccb-upload";
import areaPicker from "../components/areaPciker";
import { mapMutations, mapGetters, mapActions } from "vuex";
import stuffUploadModul from "../components/stuffUploadModul";
import mybutton from "../../../../components/MyButton";

function dateFormat(time, format) {
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
      flag: false,
      uploadData: {},
      matNum: "hz-01",
      matSubType: "abcd00001",
      subSolt: "",
      uploadFile: [],
      stuffTitle: [
        "父母双方共同签署的申请书",
        "新生儿出生医学证明（原件）",
        "父母结婚证（原件）",
        "父亲、母亲的居民户口簿（原件）首页、户主页、本人页",
        "父亲、母亲的居民身份证（原件 ）"
      ],

      endDate: new Date(),
      city: [],
      county: [],
      policestation: [],
      relation: [],
      name: "",
      sex: [],
      nation: [],
      valueDate: new Date(),
      birthday: "",
      height: [],
      blood: [],
      areaData: {},
      haveNum: 0
    };
  },
  components: {
    mybutton,
    ccbUpload,
    areaPicker,
    stuffUploadModul
  },
  computed: {
    ...mapGetters("publicSecurityStore", [
      "genderParams",
      "mzParams",
      "xueParams",
      "relParams",
      "formData",
      "uploadFiles",
      "tempSaveData"
    ]),

    ...mapGetters(["workId"]),
    moduleData: function() {
      let data = [
        {
          title: "父母双方共同签署的申请书",
          fileNameKey: `${this.workId}_hz-01_01_abcd00003`
        },
        {
          title: "新生儿出生医学证明（原件）",
          fileNameKey: `${this.workId}_hz-01_01_abcd00004`
        },
        {
          title: "父母结婚证（原件）",
          fileNameKey: `${this.workId}_hz-01_01_abcd00005`
        },
        {
          title: "父亲、母亲的居民户口簿（原件）首页、户主页、本人页",
          fileNameKey: `${this.workId}_hz-01_01_abcd00006`
        },
        {
          title: "父亲、母亲的居民身份证（原件）",
          fileNameKey: `${this.workId}_hz-01_01_abcd00007`
        }
      ];

      return data;
    },

    currentPageHaveNum() {
      return this.moduleData.length;
    }
  },
  mounted() {
    $(".picker").on("touchmove", function(event) {
      event.stopPropagation();
      event.preventDefault();
    });
  },
  created() {
    // let workId = this.$route.query.WorkId
    //   ? this.$route.query.WorkId
    //   : "abbd2786e3064963854599dfe136a4e0";
    // this.setWorkId(workId);

    window.LiveFaceResult = this.LiveFaceResult;

    this.initParam();
  },
  watch: {
    tempSaveData(val, oldVal) {
      console.log(val);
      this.validTemp();
    }
  },
  methods: {
    ...mapMutations("publicSecurityStore", ["setFormData", "setTempSaveData"]),
    ...mapActions("publicSecurityStore", [
      "fetchTempSaveData",
      "fetchGetTempData"
    ]),
    // ...mapMutations(["setWorkId"]),

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
          this.relation = result.relation;
          this.name = result.name;
          this.sex = result.sex;
          this.nation = result.nation;
          this.birthday = result.birthday;
          this.height = result.height;
          this.blood = result.blood;

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
    getJobShowData(result) {},

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
    selectConfirmSex(selectedVal) {
      this.sex = selectedVal[0];
    },
    selectConfirmNation(selectedVal) {
      this.nation = selectedVal[0];
    },
    handleChangeConfirmDate(value) {
      //日期确定值
      this.birthday = dateFormat(value, "yyyy-MM-dd");
    },
    selectConfirmBlood(selectedVal) {
      this.blood = selectedVal[0];
    },

    temSave() {
      let saveFormData = {
        city: this.city,
        county: this.county,
        policestation: this.policestation,
        relation: this.relation,
        name: this.name,
        sex: this.sex,
        nation: this.nation,
        valueDate: this.valueDate,
        birthday: this.birthday,
        height: this.height,
        blood: this.blood
        // 本页面需要保存的数据
      };
      let parm = Object.assign({}, saveFormData);
      // let parm = Object.assign({}, saveFormData, {
      //   uploadFiles: JSON.stringify(this.uploadFile)
      // });
      console.log(parm);
      this.fetchTempSaveData(parm);
    },

    validData(data) {
      // 校验空值
      console.log(Object.keys(data));
      console.log(data[Object.keys(data)]);
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

          // 校验姓名
          if (i === "xm") {
            // console.log(obj[i].match(/^[\u4e00-\u9fa5]*$/g))

            if (!obj[i].match(/^[\u4e00-\u9fa5]+$/g)) {
              this.$toast("请输入正确的姓名！");
              return;
            }
          }

          // 校验身高
          if (i === "sg") {
            console.log(obj[i].match(/^[0-9]{2-3}$/g));
            if (!obj[i].match(/^[0-9]{2,3}$/g)) {
              this.$toast("请输入正确的身高！");
              return;
            }
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
          csrq_gl: this.birthday,
          lh_type: "03", // 申请类型:01婚;02 非婚生随父落户;03非婚生随父落户
          mzdm: this.nation ? this.nation.cmnCd : "",
          sg: this.height,
          sqr_phone: window.sessionStorage.getItem("userphone")
            ? window.sessionStorage.getItem("userphone")
            : "11",
          sqr_sfz: window.sessionStorage.getItem("cardid")
            ? window.sessionStorage.getItem("cardid")
            : "111",
          sqr_xm: window.sessionStorage.getItem("username")
            ? window.sessionStorage.getItem("username")
            : "1111",
          xbdm: this.sex ? this.sex.cmnCd : "",
          xm: this.name,
          xxdm: this.blood ? this.blood.cmnCd : "",
          ysqrgxdm: this.relation ? this.relation.cmnCd : ""
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

      // uploadFiles = {uploadFiles: this.uploadFile}

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

      //           this.$router.push({name: 'resultPage'})

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
.middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 5px;
  /*margin-right:1px;*/
}
</style>
