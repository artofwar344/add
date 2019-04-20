<template>
  <div class="TemporaryResidentialPermitTransact">
    <myheader :my-header="headerData"></myheader>
    <div class="TemporaryResidentialPermitTransactContent">
      <ul class="TRPTDistrict">
        <li class="fromTitle">
          <h3>拟暂住登记地公安派出所</h3>
          <!-- 调用组建 -->
        </li>
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
              label="姓名"
              v-model="sendData.name"
              :value="sendData.name"
              placeholder="请输入姓名"
              readonly
            ></Field>
          </div>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              type="text"
              label="公民身份证"
              v-model="sendData.sfzh"
              :value="sendData.sfzh"
              placeholder="请输入身份证号"
              readonly
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
                :isBeforUpload="true"
                @beforUpload="beforUpload"
                ref="ccbUpload"
              >
                <span class="example-upload_btn" @click="setnamekey(index)">+</span>
              </ccbUpload>
              <div class="imgList">
                <div
                  class="example-upload_item"
                  v-for="(subitem,subindex) in item.uploadId"
                  :key="subindex"
                >
                  <img :src="subitem" @click="openImg(subitem)">
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
      </div>-->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @func1="tempSave" @func2="liveface"/>
      </div>
      <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
    </div>
    <!-- 选择是否接迁直系亲属 -->
    <!--<div class="header">上传材料</div>
    <div class="photo_out_box">
      <div class="photo_box">
        <div class="headline">
          <div class="blueline"></div>房屋产权人的常住户口迁移申请书
        </div>
        <div class="addPhtoto"></div>
      </div>
       <div class="photo_box">
        <div class="headline">
          <div class="blueline"></div>房屋产权证明文件（含房屋产权证或不动产登记或购房合同、产品发票）（原件）
        </div>
        <div class="addPhtoto"></div>
      </div>
       <div class="photo_box">
        <div class="headline">
          <div class="blueline"></div>房屋产权人的居民户口簿（原件）首页、户主页、本人页
        </div>
        <div class="addPhtoto"></div>
      </div>
    </div>
     <div class="buttonGroup">
       <button class="commonBtn" >临时保存</button>
       <button class="commonBtn greenButton" >确认提交</button>
    </div>-->
  </div>
</template>

<script>
import * as api from "../../../../api/api.js";
import { mapMutations, mapGetters, mapActions } from "vuex";
import areaPicker from "../components/areaPciker";
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
      headerData: {
        title: "申报暂住登记",
        backUrl: "/"
      },
      arr: [
        {
          file_name:
            "本人居民身份证或者其他有效身份证明（含机动车驾驶证、护照、学校就读证明等）",
          content: "",
          uploadId: [],
          namekey: "hz-11_01_abcd00085"
        },
        {
          file_name:
            "房屋产权证明文件（含房屋产权证、不动产登记证购房合同）、租房合同（协议）、单位住房证明等（原件）",
          content: "",
          uploadId: [],
          namekey: "hz-11_01_abcd00086"
        }
      ],
      uploadFile: [],
      uploadIndex: "",
      city: "",
      county: "",
      policestation: "",
      sendData: {
        name: "",
        sfzh: "",
        reason: "",
        xxdz: ""
      },
      areaData: {},
      isShow: false,
      currentImgUrl: "",
      haveNum: 0,
      fileNum: 0,
      arrs: [],
      file_oriname: ""
    };
  },
  created() {
    window.LiveFaceResult = this.LiveFaceResult;
  },
  mounted() {
    this.setWorkId(this.$route.query.WorkId);
    // this.arr.forEach(element => {
    //   element.namekey = element.namekey;
    // });
    this.setCurrentPage(this.$route.name);
    this.initParam();
    this.sendData.name = sessionStorage.getItem("username");
    this.sendData.sfzh = sessionStorage.getItem("cardid");
    //  sessionStorage.setItem("WorkId","478983faa0774f5db88604306b")
  },
  computed: {
    ...mapGetters("publicSecurityStore", [
      "temporaryResParams",
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
  watch: {
    tempSaveData(val, oldVal) {
      console.log(val);
      this.validTemp();
    }
  },
  methods: {
    ...mapMutations(["setWorkId"]),
    ...mapMutations("publicSecurityStore", [
      "setFormData",
      "setCurrentPage",
      "setTempSaveData"
    ]),
    ...mapActions("publicSecurityStore", [
      "fetchCommonParams",
      "fetchTempSaveData",
      "fetchGetTempData"
    ]),
    async initParam() {
      this.fetchCommonParams("1020"); //暂住原因
      await this.fetchGetTempData();
    },
    setShow() {
      this.isShow = false;
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
      this.sendData.xxdz = result.xxdz;
      if (result.zzyydm) {
        this.sendData.reason = result.zzyydm;
      }
    },
    setHandle(data) {
      this[Object.keys(data)] = data[Object.keys(data)];
    },
    open(picker) {
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
      console.log(_self.sendData.reason);
    }, // 选择申请人关系
    handleRes(data) {
      // 添加图片上传
      const _self = this;
      _self.arr[data.index].uploadId.push(data.fileUrl);
      // let fileParam = {
      //   file_name: data.ObjNm,
      //   file_path: 'GSP_PRIVATE',
      //   file_url: data.fileUrl,
      //   index: data.index
      // }
      // _self.uploadFile.push(fileParam)
      let fileParam = {
        matter_file_id: "",
        file_path: "GSP_PRIVATE",
        file_type: "",
        file_size: "",
        file_oriname: this.file_oriname,
        file_name: data.ObjNm,
        file_desc: data.uploadId,
        dzzz_file_id: "",
        dzzz_file_path: ""
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
        xxdz: this.sendData.xxdz,
        zzyydm: this.sendData.reason
      };
      let parm = Object.assign({}, saveFormData);
      // let parm = Object.assign({}, saveFormData, {
      //   uploadFiles: JSON.stringify(this.uploadFile)
      // });
      this.fetchTempSaveData(parm);
    },
    saveAllData() {
      let formData = {
        formData: {
          zsqh: this.city["orgCode"],
          hjdz_ssxqdm: this.county["orgCode"],
          sqd_gajgdwdm: this.policestation["orgCode"],
          blr_xm: window.sessionStorage.getItem("username"),
          blr_sfz: window.sessionStorage.getItem("cardid"),
          sqr_xm: window.sessionStorage.getItem("username"),
          sqr_sfz: window.sessionStorage.getItem("cardid"),
          sqr_phone: window.sessionStorage.getItem("userphone"),
          xxdz: this.sendData.xxdz,
          zzyydm: this.sendData.reason.cmnCd
        }
      };
      console.log(formData);
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
        if (data[Object.keys(data)].length < 1) {
          this.$toast("请添加附件材料");
          return false;
        }

        return true;
      }
    },
    liveface() {
      if (!this.city) {
        this.$toast("请选择州市");
        return;
      }
      if (!this.county) {
        this.$toast("请选择区县");
        return;
      }
      if (!this.policestation) {
        this.$toast("请选择派出所");
        return;
      }
      if (!this.sendData.xxdz) {
        this.$toast("请填写详细地址");
        return;
      }
      if (!this.sendData.reason) {
        this.$toast("请选择暂住原因");
        return;
      }
      for (let ars in this.arr) {
        if (this.arr[ars].uploadId.length <= 0) {
          this.$toast(this.arr[ars].file_name + "材料不能空！");
          return false;
        }
      }
      this.saveAllData();
      if (!this.validData({ formData: this.formData })) {
        return;
      }
      if (!this.validData({ uploadFiles: this.uploadFiles })) {
        return;
      }
      this.isAndroid_ios();
      // this.$router.push({name: 'resultPage'})
      // this.LiveFaceResult()
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
    },
    setnamekey(index) {
      // console.log(index)
      // console.log(this.modelParams[index])
      // let haveNum = 0

      // if (this.arr[index] && this.arr[index].uploadId) {
      //   haveNum = this.arr[index].uploadId.length + 1
      // } else {
      //   haveNum = 1
      // }
      this.haveNum++;
      this.fileNum = index;
      // this.$refs.ccbUoload.uploadIndex = index;
      // this.currentKey = `${window.sessionStorage.getItem('WorkId')}_${this.arr[index].namekey}_${this.haveNum}`
    },
    beforUpload(opts) {
      // this.file_oriname = opts.file.name;
      let type = opts.file.name;
      type = type.slice(type.lastIndexOf("."));
      let _self = this;
      let index = this.fileNum;
      opts.cdnParams.ObjNm = `${window.sessionStorage.getItem("WorkId")}_${
        this.arr[index].namekey
      }_${this.haveNum}`;
      opts.cdnParams.ObjNm = opts.cdnParams.ObjNm + type;
      this.file_oriname = opts.cdnParams.ObjNm;
      _self.fileOldName = opts.file.name;
      _self.$refs.ccbUpload[opts.uploadIndex].nextUoload(
        opts.file,
        opts.cdnParams
      );
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
  text-align: left;
  font-size: 0.28rem;
  width: 45%;
}
.TemporaryResidentialPermitTransact .hui-field {
  padding-left: 0.23rem;
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
  margin-right: 0.05rem;
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

