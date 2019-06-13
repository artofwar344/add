<template>
  <div class="armyLogoutRegistration">
    <myheader :my-header="headerData"></myheader>
    <div class="armyLogoutRegistrationContent">
      <ul class="ALRDistrict">
        <li class="fromTitle">
          <h3>拟户口注销地公安派出所</h3>
        </li>
      </ul>
      <areaPciker @setValue="setHandle"/>
      <ul class="ALRLogoutInfo">
        <li class="fromTitle">
          <h3>参军人注销信息</h3>
        </li>
        <!--<li>
         <Field
            readonly
            placeholder="请选择"
            label="与申请人关系"
            disableclear
            type="text"
            :value="sendData.relationship"
            class="selectTypeData"
            v-model="sendData.relationship"
            @click.native="open('relationshipSelect')"
          >
            <span slot="append">
              <Icon type="arrow-right" size="14" color="#757575"></Icon>
            </span>
          </Field>
          <Selectpopup
            ref="relationshipSelect"
            position="bottom"

            :dataslots="selectRelationship"
            @confirms="selectConfirmRelationship"
          ></Selectpopup>
        </li>-->
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              type="text"
              label="姓名"
              v-model="sendData.name"
              :value="sendData.name"
              placeholder="请输入姓名"
              v-on:currentval="handleTextVal"
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
              v-on:currentval="handleTextVal"
              readonly
            ></Field>
          </div>
        </li>
        <li class="dateAppend">
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              readonly
              label="参军服兵役日期"
              disableclear
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
      <ul class="ALRSubmitMaterial">
        <li class="fromTitle">
          <h3>提交材料</h3>
        </li>
        <li>
          <p>
            <b></b> <span class="middlethree">*</span>申报入伍注销户口申请书
          </p>
          <div class="myUpload">
            <div v-for="(item,index) in arr[0]" :key="index">
              <!-- //上传图片循环.. -->
              <div class="example-upload">
                <!--自定义上传图片-->
                <ccbUpload
                  :upload-id="item.file_name"
                  :name-key="item.namekey"
                  @uploadRes="handleRes"
                  app-id="GSP_APP_001"
                  bucket-id="GSP_PRIVATE"
                  pic-url-pre-fixed="/image-service/downloadImage?"
                  :upload-index="index"
                >
                  <span class="example-upload_btn" @click="setUploadIndex(0)">+</span>
                </ccbUpload>
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
        </li>
        <li>
          <p>
            <b></b> <span class="middlethree">*</span>入伍通知书
          </p>
          <div class="myUpload">
            <div v-for="(item,index) in arr[1]" :key="index">
              <!-- //上传图片循环.. -->
              <div class="example-upload">
                <!--自定义上传图片-->
                <ccbUpload
                  :upload-id="item.file_name"
                  :name-key="item.namekey"
                  @uploadRes="handleRes"
                  app-id="GSP_APP_001"
                  bucket-id="GSP_PRIVATE"
                  pic-url-pre-fixed="/image-service/downloadImage?"
                  :upload-index="index"
                >
                  <span class="example-upload_btn" @click="setUploadIndex(1)">+</span>
                </ccbUpload>
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
        </li>
        <li>
          <p>
            <b></b> <span class="middlethree">*</span>服现役公民的居民户口簿（原件）首页、户口页、本人页
          </p>
          <div class="myUpload">
            <div v-for="(item,index) in arr[2]" :key="index">
              <!-- //上传图片循环.. -->
              <div class="example-upload">
                <!--自定义上传图片-->
                <ccbUpload
                  :upload-id="item.file_name"
                  :name-key="item.namekey"
                  @uploadRes="handleRes"
                  app-id="GSP_APP_001"
                  bucket-id="GSP_PRIVATE"
                  pic-url-pre-fixed="/image-service/downloadImage?"
                  :upload-index="index"
                >
                  <span class="example-upload_btn" @click="setUploadIndex(2)">+</span>
                </ccbUpload>
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
        </li>
        <!-- <li>
          <p>
            <b></b>服现役公民居民身份证（原件）
          </p>
          <div class="myUpload">
            <div v-for="(item,index) in arr[3]" :key="index">
              <div class="example-upload">
                <ccbUpload
                  :upload-id="item.file_name"
                  :name-key='item.namekey'
                  @uploadRes="handleRes"
                  app-id="GSP_APP_001"
                  bucket-id="GSP_PRIVATE"
                  pic-url-pre-fixed="/image-service/downloadImage?"
                  :upload-index="index"
                >
                  <span class="example-upload_btn" @click="setUploadIndex(3)">+</span>
                </ccbUpload>
                <div
                  class="example-upload_item"
                  v-for="(subitem,subindex) in item.uploadId"
                  :key="subindex"
                >
                  <img :src="subitem">
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
        </li>-->
      </ul>
      <!-- <div class="btnsBox">
        <Btn type="primary" @click="tempSave">临时保存</Btn>
        <Btn type="guide" @click="jumpFaceID">确认提交</Btn>
      </div>-->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @func1="tempSave" @func2="jumpFaceID"/>
      </div>
    </div>
    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import { cenurl } from "@/components/toptow.js";
// 图片上传
import ccbUpload from "@/components/ccb-upload";
import imgPreview from "@/components/imgPreview";
import areaPciker from "../components/areaPciker";
import mybutton from "@/components/MyButton";
import { mapMutations, mapGetters } from "vuex";

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
      mapid: "",
      headerData: {
        title: "入伍注销",
        backUrl: "/"
      },
      selectCity: [
        {
          flex: 1,
          values: [
            { text: "昆明", value: "a" },
            { text: "大理", value: "b" },
            { text: "西双版纳", value: "c" }
          ],
          showText: "text",
          className: "slot1"
        }
      ],
      selectCounty: [
        {
          flex: 1,
          values: [
            { text: "区县1", value: "a" },
            { text: "区县2", value: "b" },
            { text: "区县3", value: "c" }
          ],
          showText: "text",
          className: "slot1"
        }
      ],
      selectPoliceStation: [
        {
          flex: 1,
          values: [
            { text: "派出所1", value: "a" },
            { text: "派出所2", value: "b" },
            { text: "派出所3", value: "c" }
          ],
          showText: "text",
          className: "slot1"
        }
      ],
      // selectRelationship: [{
      //   flex: 1,
      //   values: [
      //     {text: '配偶的曾祖父母或外曾祖父母', value: '00'},
      //     {text: '继母或养母', value: '01'},
      //     {text: '女', value: '02'},
      //     {text: '孙子', value: '03'},
      //     {text: '孙女或外孙子外孙女', value: '04'},
      //     {text: '曾孙子或外曾孙子', value: '05'},
      //     {text: '配偶', value: '06'},
      //     {text: '其他', value: '07'},
      //     {text: '曾孙女或外曾孙女', value: '08'},
      //     {text: '表兄弟', value: '09'},
      //     {text: '表姐妹', value: '10'},
      //     {text: '配偶的祖父母或外祖父母', value: '11'},
      //     {text: '子', value: '12'},
      //     {text: '孙女婿或外孙女婿', value: '13'},
      //     {text: '养女或继女', value: '14'},
      //     {text: '孙媳妇或外孙媳妇', value: '15'},
      //     {text: '兄弟姐妹', value: '16'},
      //     {text: '祖父母或外祖父母', value: '17'},
      //     {text: '继父或养父', value: '18'},
      //     {text: '堂兄弟', value: '19'},
      //     {text: '堂姐妹', value: '20'},
      //     {text: '养子或继子', value: '21'},
      //     {text: '父母', value: '22'}
      //   ],
      //   showText: 'text',
      //   className: 'slot1'
      // }],
      startDate: new Date(1900, 1, 1),
      endDate: new Date(),
      // 图片上传
      arr: [
        [
          {
            uploadId: [],
            namekey: "hz-05_01_abcd00053",
            file_name: "申报入伍注销户口申请书"
          }
        ],
        [
          {
            uploadId: [],
            namekey: "hz-05_01_abcd00054",
            file_name: "入伍通知书"
          }
        ],
        [
          {
            uploadId: [],
            namekey: "hz-05_01_abcd00055",
            file_name: "服现役公民的居民户口簿（原件）首页、户口页、本人页"
          }
        ]
        // [{uploadId: [],namekey:'hz-05_01_abcd00056'}]
      ],
      arrs: [],
      uploadIndex: "",
      namekeycode0: 0,
      namekeycode1: 0,
      namekeycode2: 0,
      sendData: {
        name: "" || this.$NoNull(window.sessionStorage.getItem("username")),
        sfzh: "" || this.$NoNull(window.sessionStorage.getItem("cardid")),
        date: "",
        city: "",
        county: "",
        policestation: "",
        relationship: ""
      },
      isShow: false,
      currentImgUrl: "",
      fileOldName: "",
      cityOne: "",
      cityTwo: "",
      cityThree: "",
      sqrgx: "",
      timeDate: "",
      cmnCd: ""
    };
  },
  mounted() {
    this.setCurrentPage(this.$route.name);
    var date = this.time();
    this.sendData.date = date;
    this.timeDate = date;
  },
  computed: {},
  created() {
    window.LiveFaceResult = this.LiveFaceResult;
    this.gitSave();
  },
  components: {
    mybutton,
    ccbUpload,
    myheader: Header,
    areaPciker,
    imgPreview
  },
  methods: {
    ...mapMutations("publicSecurityStore", [
      "setFormData",
      "uploadFiles",
      "setCurrentPage"
    ]),
    ...mapGetters("publicSecurityStore", [
      "formData",
      "uploadFiles",
      "subFormData",
      "currentDoPage"
    ]),
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
    setShow() {
      this.isShow = false;
    },
    openImg(data) {
      console.log(data);
      this.isShow = true;
      this.currentImgUrl = data;
    },
    tempSave() {
      const _self = this;
      // let form_id = this.matterId+this.memberId
      let form_id = "1234564444";
      let sendData = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          form_id: form_id,
          message: {
            deptId: this.mapid.orgCode,
            name: this.$NoNull(this.sendData.name),
            sfzh: this.$NoNull(this.sendData.sfzh),
            date: this.sendData.date,
            city: this.sendData.city,
            county: this.sendData.county,
            policestation: this.sendData.policestation,
            relationship: this.sendData.relationship,
            work_id: window.sessionStorage.getItem("WorkId"),
            subTableNames: [],
            subFormInfo: []
          }
        }
      };

      this.$ajaxRequest("post","/APPS/matter/temporaryData/insert",sendData,false,false,false,'1').then(res => {
        console.log(res);
        this.$toast(res.success);
      });
    },
    gitSave() {
      let sendData = {
        txnBodyCom: {
          // form_id:'1234564444'
          matter_id: window.sessionStorage.getItem("matterid"),
          form_id: window.sessionStorage.getItem("matterid") + window.sessionStorage.getItem("userid")
        }
      };
      this.$ajaxRequest(
        "post",
        "/APPS/matter/temporaryData/echo",
        sendData,false,false,false,'1'
      ).then(res => {
        if(res.result){
          let cent = res.result;
          this.sendData.name = cent.name;
          this.sendData.sfzh = cent.sfzh;
          this.sendData.date = cent.date;
        }

      });
    },
    jumpFaceID() {
      if (!this.cityOne) {
        this.$toast("请选择州市");
        return;
      }
      if (!this.cityTwo) {
        this.$toast("请选择区县");
        return;
      }
      if (!this.cityThree) {
        this.$toast("请选择派出所");
        return;
      }
      if (!this.sendData.date) {
        this.$toast("请填选择服兵役日期");
        return;
      }

      for (let ars in this.arr) {
        if (this.arr[ars][0].uploadId.length <= 0) {
          this.$toast(this.arr[ars][0].file_name + "材料不能空！");
          return false;
        }
      }

      let arr = [];
      for (let item in this.uploadData) {
        this.uploadData[item].map(subItem => {
          arr.push(subItem);
        });
      }
      // 申请类型 1
      let obj = {
        accountId: sessionStorage.getItem("userphone"),
        deptId: this.cityThree,
        hzYwlx: "hz_mat_rwzx",
        idNum: this.sendData.sfzh,
        mainTableName: "oi_hz_rwzx",
        matNum: "hz-05",
        matSubType: "01",
        sqr: this.sendData.name,
        subTableNames: [],
        subFormInfo: [],
        formInfo: {
          zsqh: this.cityOne,
          hjdz_ssxqdm: this.cityTwo,
          sqd_gajgdwdm: this.cityThree,
          blr_xm: this.sendData.name,
          blr_sfz: this.sendData.sfzh,
          sqr_xm: sessionStorage.getItem("username"),
          sqr_sfz: sessionStorage.getItem("cardid"),
          sqr_phone: sessionStorage.getItem("userphone"),
          ysqrgxdm: this.cmnCd,
          cjfbyrq: this.timeDate
        }
      };
      //  debugger
      this.setFormData({ formData: obj });
      this.setFormData({ uploadFiles: this.arrs });
      // this.$router.push("/resultPage");
      // debugger
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
    selectConfirmRelationship(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.relationship = selectedVal[0].text;
        _self.relationship = selectedVal[0].value;
        _self.cmnCd = selectedVal[0].cmnCd;
      } else {
        _self.sendData.relationship = selectedVal;
      }
    }, // 选择申请人关系
    handleTextVal(val) {
      const _self = this;
      _self.textValue = val;
    },
    dateChangeConfirmDate(value) {
      const _slef = this;
      _slef.timeDate = _slef.dateFormat(value, "yyyy-MM-dd");
    },

    // 图片上传
    imgRemoveBtn(file, uploadName) {
      // 从 upload 实例删除数据
      const _self = this;
      const fileList = _self.$refs[uploadName].fileList;
      _self.$refs[uploadName].fileList.splice(fileList.indexOf(file), 1);
    },
    setUploadIndex(index) {
      const _self = this;
      if (index == 0) {
        this.arr[index][0].namekey =
          sessionStorage.getItem("WorkId") +
          "_hz-05_01_abcd00053_" +
          this.namekeycode0;
        this.fileOldName = this.arr[index][0].namekey;
        this.namekeycode0++;
      } else if (index == 1) {
        this.arr[index][0].namekey =
          sessionStorage.getItem("WorkId") +
          "_hz-05_01_abcd00054_" +
          this.namekeycode1;
        this.fileOldName = this.arr[index][0].namekey;
        this.namekeycode1++;
      } else if (index == 2) {
        this.arr[index][0].namekey =
          sessionStorage.getItem("WorkId") +
          "_hz-05_01_abcd00055_" +
          this.namekeycode2;
        this.fileOldName = this.arr[index][0].namekey;
        this.namekeycode2++;
      }
      _self.uploadIndex = index;
    },
    handleRes(data) {
      let type = data.oldName;
      type = type.slice(type.lastIndexOf("."));
      const _self = this;
      _self.arr[_self.uploadIndex][data.index].uploadId.push(data.fileUrl);
      _self.flag = true;
      let fileParam = {
        file_name: data.ObjNm,
        file_path: "GSP_PRIVATE",
        matter_file_id: "",
        file_oriname: _self.fileOldName + type
      };
      _self.arrs.push(fileParam);
    }, // 添加图片上传
    handleRemove(index, subindex, uploadId) {
      // 删除图片上传
      // this.flag = false;
      const _self = this;
      _self.arr[_self.uploadIndex][index].uploadId.splice(subindex, 1);
      // _self.arr[index].uploadId.splice(subindex, 1)
    },

    setHandle(data) {
      if (data.city) {
        this.cityOne = data.city.orgCode;
        this.cityTwo = "";
        this.cityThree = "";
      } else if (data.county) {
        this.cityTwo = data.county.orgCode;
        this.cityThree = "";
      } else if (data.policestation) {
        this.cityThree = data.policestation.orgCode;
      }
      // this[Object.keys(data)] = data[Object.keys(data)];
      // this.mapid = this[Object.keys(data)] = data[Object.keys(data)];
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
};
</script>

<style>
html,
body,
#app {
  min-height: 100%;
}
.armyLogoutRegistration .hui-field {
  height: 100%;
  line-height: calc(1.1rem - 10px);
}
.armyLogoutRegistration li:last-child .hui-field {
  border: none;
}
.armyLogoutRegistration .hui-field_title {
  text-align: left;
  font-size: 0.28rem;
  width:50%
}
.armyLogoutRegistration .hui-field {
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
.dateAppend .hui-field_main {
  height: 1rem;
  line-height: 1rem;
}
.hui-btn_guide {
  background: #08c173;
}
.armyLogoutRegistration .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  margin: 0.2rem auto;
  text-align: left;
}
.armyLogoutRegistration .example-upload_btn {
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
.armyLogoutRegistration {
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
.armyLogoutRegistration .hui-field_title {
  width: 2.2rem !important;
}
  .ALRSubmitMaterial {
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
        /*margin-right: 0.2rem;*/
      }
    }
    li {
      height: auto;
      border-bottom: 1px solid #e1e2e6;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      .myUpload {
        .example-upload {
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
      }
    }
  }
  .btnsBox {
    margin-top: 0.36rem;
    button {
      margin: 0 0.05rem;
    }
  }
}
.armyLogoutRegistration .middleone{
  position:relative;
}
.armyLogoutRegistration .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:36%;
  left:0;
}
.armyLogoutRegistration .middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 5px;
  margin-right: 0.08rem;
}
</style>
