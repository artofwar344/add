<template>
  <div class="TemporaryResidentialPermitReapply">
    <myheader :my-header="headerData"></myheader>
    <div class="TemporaryResidentialPermitReapplyContent">
      <ul class="TRPRDistrict">
        <li class="fromTitle">
          <h3>拟暂住登记地公安派出所</h3>
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
              v-on:currentval="handleTextVal"
            ></Field>

        </li>
      </ul>
      <ul class="TRPRLogoutInfo">
        <li class="fromTitle">
          <h3>申报人信息</h3>
        </li>
        <li class="xiangxidizhi" >

            <span class="xiangxidizhi1">*</span>
            <Field
              type="text"
              label="姓名"
              v-model="sendData.name"
              :value="sendData.name"
              placeholder="请输入姓名"
              v-on:currentval="handleTextVal"
              readonly
            ></Field>

        </li>
        <li class="xiangxidizhi">

            <span class="xiangxidizhi1">*</span>
            <Field
              type="text"
              label="公民身份证"
              v-model="sendData.sfzh"
              :value="sendData.sfzh"
              placeholder="请输入身份证号"
              v-on:currentval="handleTextVal"
              readonly
            ></Field>

        </li>
        <li class="xiangxidizhi">

            <span class="xiangxidizhi1">*</span>
            <Field
              readonly
              placeholder="请选择"
              label="暂住原因"
              disableclear
              type="text"
              :value="sendData.reason.text"
              class="selectTypeData"
              v-model="sendData.reason.text"
              @click.native="open('reasonSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>

          <Selectpopup
            ref="reasonSelect"
            position="bottom"

            :dataslots="selectReason"
            @confirms="selectConfirmReason"
          ></Selectpopup>
        </li>
        <li class="dateAppend">
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              readonly
              label="暂住起始日期"
              disableclear
              v-model="timeDate"
              type="text"
              placeholder="请选择"
              :value="timeDate"
              @click.native="open('picker2')"
            >
              <span slot="append">
                <Icon type="calendar" size="12" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Datetime
            ref="picker2"
            type="date"
            position="bottom"
            v-model="sendData.date"
            :start-date="startDate"
            :end-date="endDate"
            @confirm="dateChangeConfirmDate"
          ></Datetime>
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

        <Btn type="primary"  @click='tempSave'>临时保存</Btn>
        <Btn type="guide" @click="jumpFaceID">确认提交</Btn>
      </div>-->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @func1="tempSave" @func2="jumpFaceID"/>
      </div>
      <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import * as api from "../../../../api/api.js";
import { cenurl } from "../../../../components/toptow.js";
import Header from "@/components/header/header";
import ccbUpload from "@/components/ccb-upload";
import areaPicker from "../components/areaPciker";
import imgPreview from "@/components/imgPreview";
import mybutton from "@/components/MyButton";


// import {cenurl} from '@/components/toptow.js'

export default {
  data: function() {
    return {
      btnData: [
        {
          text: "临时保存",
          disabled: false,
          isSure: true,
          click: "func1",
        },
        {
          text: "确认提交",
          disabled: false,
          isSure: true,
          click: "func2",
        }
      ],
      flag: false,

      headerData: {
        title: "补办暂住证登记",
        backUrl: "/",
      },
      selectCity: [
        {
          flex: 1,
          values: [
            { text: "昆明", value: "a" },
            { text: "大理", value: "b" },
            { text: "西双版纳", value: "c" },
          ],
          showText: "text",
          className: "slot1",
        }
      ],
      selectCounty: [
        {
          flex: 1,
          values: [
            { text: "区县1", value: "a" },
            { text: "区县2", value: "b" },
            { text: "区县3", value: "c" },
          ],
          showText: "text",
          className: "slot1",
        }
      ],
      selectPoliceStation: [
        {
          flex: 1,
          values: [
            { text: "派出所1", value: "a" },
            { text: "派出所2", value: "b" },
            { text: "派出所3", value: "c" },
          ],
          showText: "text",
          className: "slot1",
        }
      ],
      selectReason: [
        {
          flex: 1,
          values: [
            // {text: '', value: ''},
            // {text: '', value: ''},
          ],
          showText: "text",
          className: "slot1",
        }
      ],
      startDate: new Date(1900,0,1),
      endDate: new Date(),
      // startDate: new Date(),
      // endDate: new Date(1900, 0, 31),
      arr: [
        {
          file_name:
            "本人居民身份证或者其他有效身份证明（含机动车驾驶证、护照、学校就读证明等）",
          content: "",
          uploadId: [],
          namekey: "hz-12_01_abcd00085"
        },
        {
          file_name:
            "证明材料：城镇基本养老保险或基本医疗保险的参保证明或缴纳工资薪金个人所得税的凭证或在当地房管部门办理租赁登记备案的房屋租赁合同或加盖人社部门劳动合同备案专用章的劳动合同或工商营业执照（需法定代表人）或学证或者就读学校出具的其他能够证明连续就读材料",
          content: "",
          uploadId: [],
          namekey: "hz-12_01_abcd00087"
        }
      ],
      uploadFile: [],
      uploadIndex: "",
      city: "",
      county: "",
      policestation: "",
      //后加的一个
      one: false,
      sendData: {
        name: "",
        sfzh: "",
        date: "",
        reason: "",
        xxdz: ""
      },
      WorkId: "",
      areaData: {},
      isShow: false,
      currentImgUrl: "",
      haveNum: 0,
      fileNum: 0,
      file_oriname: "",
      timeDate: ""
    };
  },
  created() {
    window.LiveFaceResult = this.LiveFaceResult;
  },
  mounted() {
    this.setWorkId(this.$route.query.WorkId);
    // this.arr.forEach(element => {
    //   element.namekey = this.workId + element.namekey;
    // });
    console.log(this.arr);
    this.setCurrentPage(this.$route.name);
    this.initParam();
    this.sendData.name = window.sessionStorage.getItem("username");
    this.sendData.sfzh = window.sessionStorage.getItem("cardid");
    // sessionStorage.setItem("WorkId","478983faa0774f5db88604306b")
    var date = this.time();
    this.sendData.date = date;
    this.timeDate = date;

    //选择暂住原因
    const sendata = {
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "2",
        tStsTraceId: "110567890"
      },
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        parentId: "1020"
      }
    };
    this.$ajaxRequest("post", "/gsp/mng19019", sendata)
      .then(res => {
        console.log(res);
        for (var i = 0, len = res.length; i < len; i++) {
          this.selectReason[0].values.push({
            text: res[i].cmnCdNm,
            value: res[i].cmnCd
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
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
    async initParam() {
      await this.fetchGetTempData();
    },
    time() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      var nowDate = year + "-" + month + "-" + day;
      return nowDate;
    },
    setHandle(data) {
      this[Object.keys(data)] = data[Object.keys(data)];
    },
    //  ...mapMutations('publicSecurityStore', [
    //       'setFormData',
    //       'setCurrentPage',
    //     ]),
    // ...mapMutations([
    //   'setWorkId'
    // ]),
    //
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
      if (result.zzqsrq) {
        this.sendData.date = result.zzqsrq;
      }
    },
    validData(data) {
      // 校验空值
      // console.log(Object.keys(data))
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

    tempSave() {
      let saveFormData = {
        city: this.city,
        county: this.county,
        policestation: this.policestation,
        xxdz: this.sendData.xxdz,
        zzyydm: this.sendData.reason.cmnCd,
        zzqsrq: this.sendData.date
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
      console.log(this.sendData.reason);
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
          zzyydm: this.sendData.reason.value,
          zzqsrq: this.sendData.date
        }
      };
      console.log(formData);
      debugger;
      let subFormData = { subFormData: {} };
      let uploadFiles = { uploadFiles: this.uploadFile };
      // console.log(uploadFiles)
      this.setFormData(formData);
      this.setFormData(uploadFiles);
    },

    jumpFaceID() {
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
      if (!this.sendData.date) {
        this.$toast("请选择暂住日期");
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

      // this.$router.push({name: 'resultPage'})
      //测试先跳转页面，不请求人脸识别
      this.isAndroid_ios();
    },
    isAndroid_ios() {
      let sendata = {
        isIdcard: "0"
      };
      //在utils里的callModules
      this.$CallModule("liveFace", sendata);
    },
    //成功之后的回调
    LiveFaceResult(senobject) {
      if (typeof senobject == "string") {
        this.$CallModule("StoragesetItem", senobject);
      } else {
        this.$CallModule("StoragesetItem", senobject);
      }
      this.$router.push("/resultPage");
    },

    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmCity(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.city = selectedVal[0].text;
      } else {
        _self.sendData.city = selectedVal;
      }
    }, // 选择城市
    selectConfirmCounty(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.county = selectedVal[0].text;
      } else {
        _self.sendData.county = selectedVal;
      }
    }, // 选择乡村
    selectConfirmPoliceStation(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.policestation = selectedVal[0].text;
      } else {
        _self.sendData.policestation = selectedVal;
      }
    }, // 选择派出所
    selectConfirmReason(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.reason = selectedVal[0];
      } else {
        _self.sendData.reason = selectedVal;
      }
    }, // 选择申请人关系
    handleTextVal(val) {
      const _self = this;
      _self.textValue = val;
    },
    dateChangeConfirmDate(value) {
      const _slef = this;
      console.log(_slef.dateFormat(value, "yyyy-MM-dd"));
      _slef.sendData.date = _slef.dateFormat(value, "yyyy-MM-dd");
      _slef.timeDate = _slef.dateFormat(value, "yyyy-MM-dd");
    },
    setUploadIndex(index) {
      const _self = this;
      _self.uploadIndex = index;
    },

    handleRes(data) {
      // 添加图片上传
      const _self = this;
      _self.arr[data.index].uploadId.push(data.fileUrl);
      // let fileParam = {
      //   file_name: data.ObjNm,
      // file_path: 'GSP_PRIVATE',
      // file_url: data.fileUrl,
      // index: data.index
      // }
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
      return fileParam;
    },
    handleRemove(index, subindex, uploadId) {
      // 删除图片上传
      const _self = this;
      _self.arr[index].uploadId.splice(subindex, 1);
    }, // 图片

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
.TemporaryResidentialPermitReapply .hui-field {
  height: 100%;
  line-height: calc(1.1rem - 10px);
}
.TemporaryResidentialPermitReapply li:last-child .hui-field {
  border: none;
}
.hui-field_title {
  text-align: left;
  font-size: 0.28rem;
  margin-left: 0.22rem;
}
.TemporaryResidentialPermitReapply .hui-field {
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
.TemporaryResidentialPermitReapply .example-upload {
  overflow: hidden;
}
.TemporaryResidentialPermitReapply .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  margin: 0.2rem auto;
  text-align: left;
}
.TemporaryResidentialPermitReapply .example-upload_btn {
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
.TemporaryResidentialPermitReapply {
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
.example-upload_item-cover {
  position: absolute;
  top: -3px;
  right: -3px;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  background-clip: border-box;
}

.example-upload_item-delete {
  position: absolute;
  right: -4px;
  vertical-align: top;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: inline-block;
  background-size: 100%;
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
  top:39%;
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
