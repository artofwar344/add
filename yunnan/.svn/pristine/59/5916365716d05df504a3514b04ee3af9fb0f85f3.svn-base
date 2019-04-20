<template>
  <div class="TemporaryResidentialPermitTransact">
    <!--  <myheader :my-header="headerData"></myheader> -->
    <div class="TemporaryResidentialPermitTransactContent">
      <ul class="TRPTDistrict">
        <li class="fromTitle">
          <h3>拟申领地公安派出所</h3>
        </li>
        <!-- 调用组建 -->
        <li id="xiala" style="height: 3rem;padding: 0">
          <area-picker @setValue="setHandle" :area-data="areaData"/>
        </li>
        <li class="xiangxidizhi">

            <span class="xiangxidizhi1">*</span>
            <Field
              type="text"
              label="详细地址"
              v-model="sendData.xxdz"
              :value="sendData.xxdz"
              placeholder="请输入详细地址"
            ></Field>

        </li>
      </ul>
      <ul class="TRPTLogoutInfo">
        <li class="fromTitle">
          <h3>申报人信息</h3>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              type="text"
              readonly
              label="姓名"
              v-model="sendData.name"
              :value="sendData.name"
              placeholder="请输入姓名"
            ></Field>
          </div>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              type="text"
              readonly
              label="公民身份证"
              v-model="sendData.sfzh"
              :value="sendData.sfzh"
              placeholder="请输入身份证号"
            ></Field>
          </div>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              readonly
              placeholder="请选择"
              label="暂住原因"
              disableclear
              type="text"
              :value="sendData.reason.cmnCdNm"
              class="selectTypeData"
              v-model="sendData.reason.cmnCdNm"
              @click.native="open('reasonSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="reasonSelect"
            position="bottom"

            :dataslots="temporaryResParams"
            @confirms="selectConfirmReason"
          ></Selectpopup>
        </li>
      </ul>
      <ul class="dwellLogoutInfo">
        <li class="fromTitle">
          <h3>申领情况</h3>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              readonly
              placeholder="请选择"
              label="申领原因"
              disableclear
              type="text"
              :value="sendData.forReason.cmnCdNm"
              class="selectTypeData"
              v-model="sendData.forReason.cmnCdNm"
              @click.native="open('forReasonSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="forReasonSelect"
            position="bottom"

            :dataslots="applyReasonParams"
            @confirms="selectConfirmForReason2"
          ></Selectpopup>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              type="text"
              label="申领条件"
              v-model="sendData.sltj"
              :value="sendData.sltj"
              placeholder="请输入申领条件"
              readonly
            ></Field>
          </div>
        </li>
      </ul>
      <div class="TRPTSubmitMaterial">
        <h3>提交材料</h3>
        <div class="example-upload" v-for="(item,index) in arr" :key="index">
          <div class="example-upload_formItem">
            <div class="blue"></div>
            <label class="example-upload_formLabel" for>
              <span class="middlethree">*</span>
              <span>
                {{ item.file_name }}
              </span>
            </label>
            <div class="example-upload_formText">
              <!--上传-->
              <ccbUpload
                :upload-id="item.file_name"
                :name-key="item.namekey"
                @uploadRes="handleRes"
                app-id="GSP_APP_001"
                bucket-id="GSP_PRIVATE"
                pic-url-pre-fixed="/image-service/downloadImage?"
                :upload-index="index"
              >
                <span class="example-upload_btn" @click="namekeystr(index)">+</span>
              </ccbUpload>
              <div class="imgList">
                <div
                  class="example-upload_item"
                  v-for="(subitem,subindex) in item.uploadId"
                  :key="subindex"
                >
                  <img :src="subitem" @click="openImg(subitem)">
                  <!-- <img :src="subitem"/> -->
                  <span class="example-upload_item-cover">
                    <em
                      class="example-upload_item-delete"
                      @click="handleRemove(index,subindex,item.uploadId)"
                    >X</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="btnsBox">
        <Btn type="primary" @click="tempSave">临时保存</Btn>
        <Btn type="guide" @click="liveface">确认提交</Btn>
      </div> -->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @func1="tempSave" @func2="liveface"/>
      </div>
    </div>
    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
  </div>
</template>

<script>
import * as api from "../../../../../api/api.js";
import { mapMutations, mapGetters, mapActions } from "vuex";
import areaPicker from "../../components/areaPciker";
import Header from "@/components/header/header";
import ccbUpload from "@/components/ccb-upload";
import imgPreview from "@/components/imgPreview";
import mybutton from "@/components/MyButton";
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
      arr: [
        {
          file_name:
            "以合法稳定就业为由申领：工商营业执照（原件或复印件）或劳动合同、用人单位出具的劳动关系证明或者其他其他能够证明有合法稳定就业的材料证明的材料原件",
          content: "",
          uploadId: [],
          namekey: "_hz-13_01_abcd00088"
        },
        {
          file_name:
            "本人居民身份证或者其他有效身份证明（含机动车驾驶证、护照、学校就读证明等）",
          content: "",
          uploadId: [],
          namekey: "_hz-13_01_abcd00085"
        }
      ],
      namekeycode: 0,
      uploadFile: [],
      city: "",
      county: "",
      policestation: "",
      sendData: {
        name: "",
        sfzh: "",
        reason: {
          cmnCd: "02",
          cmnCdNm: "务工",
          crtTime: "1542350970000",
          crtUserId: "admin",
          modfTime: "1542350970000",
          modfUserId: "admin",
          suprCmnCd: "1020",
          tenant: "530000000000",
          tms: "1545291898902",
          validStsCd: "1"
        },
        xxdz: "",
        forReason: "",
        sltj: "合法稳定就业"
      },
      areaData: {},
      isShow: false,
      currentImgUrl: ""
    };
  },
  mounted() {
    let workId = this.$route.query.WorkId;
    this.setWorkId(workId);
    this.setCurrentPage(this.$route.name);
    this.arr.forEach(element => {
      element.namekey = this.workId + element.namekey;
    });
    this.initParam();
    this.sendData.name = sessionStorage.getItem("username");
    this.sendData.sfzh = sessionStorage.getItem("cardid");
  },
  computed: {
    ...mapGetters("publicSecurityStore", [
      "temporaryResParams",
      "applyReasonParams",
      "formData",
      "uploadFiles",
      "tempSaveData"
    ]),
    ...mapGetters(["workId"])
  },
  components: {
    mybutton,
    ccbUpload,
    myheader: Header,
    areaPicker,
    imgPreview
  },
  created() {
    window.LiveFaceResult = this.LiveFaceResult;
  },
  watch: {
    tempSaveData(val, oldVal) {
      console.log(val);
      this.validTemp();
    }
  },
  methods: {
    ...mapMutations("publicSecurityStore", [
      "setFormData",
      "setCurrentPage",
      "setApplyReasonType",
      "setTempSaveData"
    ]),
    ...mapActions("publicSecurityStore", [
      "fetchCommonParams",
      "fetchTempSaveData",
      "fetchGetTempData"
    ]),
    ...mapMutations(["setWorkId"]),
    async initParam() {
      await this.fetchGetTempData();
      this.validTemp();
    },
    setShow() {
      this.isShow = false;
    },
    namekeystr(index) {
      if (index < 1) {
        this.arr[index].namekey =
          sessionStorage.getItem("WorkId") +
          "_hz-13_01_abcd00088_" +
          this.namekeycode;
        this.fileOldName = this.arr[index].namekey;
      } else {
        this.arr[index].namekey =
          sessionStorage.getItem("WorkId") +
          "_hz-13_01_abcd00085_" +
          this.namekeycode;
        this.fileOldName = this.arr[index].namekey;
      }
      this.namekeycode++;
    },
    openImg(data) {
      console.log(data);
      this.isShow = true;
      this.currentImgUrl = data;
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
          console.log(this.uploadFile);
          for (let index = 0; index < this.uploadFile.length; index++) {
            const element = this.uploadFile[index];
            console.log(element);
            this.arr[element.index].uploadId.push(element.file_url);
          }

          // 特定页面的反显数据逻辑
          this.getJobShowData(result);
        }
      } catch (error) {
        console.log(error);
      }
    },
    getJobShowData(result) {
      this.sendData.xxdz = result.address;
      if (result.zdcase) {
        console.log("CLN", result.zdcase);
        this.sendData.reason = JSON.parse(result.zdcase);
      } else {
        this.fetchCommonParams("1020"); //暂住原因
      }

      if (result.slcase) {
        this.sendData.forReason = JSON.parse(result.slcase);
      } else {
        this.fetchCommonParams("1021"); //申领原因
      }
    },
    selectConfirmForReason2(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.forReason = selectedVal[0];
      } else {
        _self.sendData.forReason = selectedVal;
      }
    },
    setHandle(data) {
      this[Object.keys(data)] = data[Object.keys(data)];
    },
    open(picker) {
      console.log(picker);
      if (
        picker === "reasonSelect" &&
        !this.temporaryResParams[0].values.length
      ) {
        this.fetchCommonParams("1020"); //申领原因
      }
      if (
        picker === "forReasonSelect" &&
        !this.applyReasonParams[0].values.length
      ) {
        this.fetchCommonParams("1021"); //申领原因
      }
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmReason(selectedVal) {
      const _self = this;
      _self.sendData.reason = selectedVal[0];
      // console.log(_self.sendData.reason);
    },
    handleRes(data) {
      // 添加图片上传
      let type = data.oldName;
      type = type.slice(type.lastIndexOf("."));
      const _self = this;
      _self.arr[data.index].uploadId.push(data.fileUrl);
      let fileParam = {
        file_name: data.ObjNm,
        file_path: "GSP_PRIVATE",
        file_url: data.fileUrl,
        index: data.index,
        // matter_file_id: "",
        matter_file_id: data.matterFileId,
        // file_oriname: _self.fileOldName + type
        file_oriname: data.oldName
      };
      _self.uploadFile.push(fileParam);
    },
    handleRemove(index, subindex, uploadId) {
      // 删除图片上传
      const _self = this;
      _self.arr[index].uploadId.splice(subindex, 1);
    }, // 图片
    tempSave() {
      let saveFormData = {
        city: this.city,
        county: this.county,
        policestation: this.policestation,
        slcase: JSON.stringify(this.sendData.forReason),
        zdcase: JSON.stringify(this.sendData.reason),
        address: this.sendData.xxdz
      };
      let parm = Object.assign({}, saveFormData);
      // let parm = Object.assign({}, saveFormData, {
      //   uploadFiles: JSON.stringify(this.uploadFile)
      // });
      let list = JSON.parse(parm.uploadFiles);
      if (list.length < 2) {
        this.$toast("请上传必要的附件材料");
        return;
      }
      this.fetchTempSaveData(parm);
    },
    saveAllData() {
      let formData = {
        formData: {
          zsqh: this.city["orgCode"],
          hjdz_ssxqdm: this.county["orgCode"],
          sqd_gajgdwdm: this.policestation["orgCode"],
          sqr_xm: window.sessionStorage.getItem("username"),
          sqr_sfz: window.sessionStorage.getItem("cardid"),
          sqr_phone: window.sessionStorage.getItem("userphone"),
          slcase: this.sendData.forReason.cmnCd,
          xm: window.sessionStorage.getItem("username"),
          sltj: "1",
          lh_type: "0",
          idcard: window.sessionStorage.getItem("cardid"),
          zdcase: this.sendData.reason.cmnCd,
          address: this.sendData.xxdz
        }
      };
      let subFormData = { subFormData: {} };
      let uploadFiles = { uploadFiles: this.uploadFile };

      this.setFormData(formData);
      this.setFormData(uploadFiles);
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
        console.log(Object.keys);
        if (this.arr[0].uploadId.length < 1) {
          this.$toast("请添加附件材料");
          return false;
        } else if (this.arr[1].uploadId.length < 1) {
          this.$toast("请添加附件材料");
          return false;
        }

        return true;
      }
    },
    liveface() {
      window.sessionStorage.setItem("ApplyReasonType", "01");
      this.saveAllData();
      console.log(
        this.$store.state.publicSecurityStore.formData,
        this.uploadFile
      );
      if (!this.validData({ formData: this.formData })) {
        return;
      }
      if (!this.validData({ uploadFiles: this.uploadFiles })) {
        return;
      }
      this.isAndroid_ios();
      // this.$router.push('/resultPage')
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
      console.log(JSON.stringify(senobject));
      this.$router.push("/resultPage");
    }
  }
};
</script>

<style>
html,
body,
#app {
  min-height: 100%;
}
.TemporaryResidentialPermitTransact .hui-field {
  height: 100%;
  line-height: calc(1.1rem - 10px);
}
.TemporaryResidentialPermitTransact li:last-child .hui-field {
  border: none;
}
.hui-field_title {
  margin-left:0.21rem;
  text-align: left;
  font-size: 0.28rem;
}
.TemporaryResidentialPermitTransact .hui-field {
  padding-left: 0;
  padding-right: 0;
}
.hui-field_core {
  text-align: right;
  font-size: 0.28rem;
}
.dateAppend .hui-field_append {
  width: 0.4rem;
  text-align: right;
}
.hui-btn_guide {
  background: #08c173;
}
.TemporaryResidentialPermitTransact .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  margin: 0.2rem auto;
  text-align: left;
}
.TemporaryResidentialPermitTransact .example-upload_btn {
  display: block;
  margin-top: 0.2rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #f5f5f5;
  font-size: 1rem;
  text-align: center;
  line-height: 1.6rem;
  color: #ccc;
}
</style>

<style lang='less' scoped>
.TemporaryResidentialPermitTransact {
  background: #eee;
  ul {
    .fromTitle {
      height: 0.64rem;
      line-height: 0.64rem;
      font-size: 0.24rem;
      background: #eee;
      border: none;
    }
    li {
      height: 1.1rem;
      background: #fff;
      padding: 0 0.36rem;
      h3 {
        text-align: left;
        font-size: 0.24rem;
        color: #999;
      }
    }
  }
  .TRPTSubmitMaterial {
    h3 {
      text-align: left;
      font-size: 0.24rem;
      color: #999;
      padding: 0 0.36rem;
      box-sizing: border-box;
      height: 0.64rem;
      line-height: 0.64rem;
    }
    sup {
      top: -0.06rem;
      color: red;
    }
    .fromTitle {
      padding-top: 0;
      padding-bottom: 0;
    }
    p {
      text-align: left;
      b {
        display: inline-block;
        width: 0.06rem;
        height: 0.26rem;
        background: #257bff;
        margin-right: 0.2rem;
      }
    }
    li {
      height: auto;
      border-bottom: 1px solid #e1e2e6;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
    }
  }
  .btnsBox {
    margin-top: 0.36rem;
    button {
      margin: 0 0.05rem;
    }
  }
}
.example-upload {
  background: white;
  padding: 0.2rem 0rem;
  box-sizing: border-box;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  .container {
    input[type="file"] {
      display: none;
    }
  }
  .example-upload_item {
    width: 1.6rem;
    height: 1.6rem;
    float: left;
    margin: 0.2rem 0.1rem 0;
    position: relative;
    img {
      width: 1.6rem;
      height: 1.6rem;
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .example-upload_btn {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background-color: #f5f5f5;
    font-size: 1rem;
    text-align: center;
    line-height: 1.6rem;
    color: #ccc;
  }
}
.middleone{
  position:relative;
}
.middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:38%;
  left:0;
}
.middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 5px;
  margin-right: 0.09rem;
}
  .xiangxidizhi{
    position: relative;
  }
  .xiangxidizhi1{
    font-size: 0.4rem;
    color: red;
    display: inline-block;
    position: absolute;
    top: 42%;
    left: 0.35rem;
  }
</style>

