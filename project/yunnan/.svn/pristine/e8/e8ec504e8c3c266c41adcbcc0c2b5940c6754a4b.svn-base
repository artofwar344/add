<template>
  <div class="settleForm">
    <towtop :name="titlename"/>
    <div class="header">拟户口登记地公安派出所</div>
    <area-picker @setValue="setHandle"/>

    <div class="header">落户人信息</div>
    <div class="input_outside_box">
      <div class="input_box">
        <label>姓名</label>
        <input type="text" v-model="name">
      </div>
      <div class="input_box">
        <label>公民身份证</label>
        <input type="text" v-model="idNumber">
      </div>
      <div class="input_box">
        <label>是否接迁直系亲属</label>
        <Icon type="arrow-right" size="16" color="#999999"></Icon>
        <input type="text" placeholder="请选择是否" :value="relative" @click="open('pickerselect06')">
      </div>
    </div>

    <!-- 选择是否接迁直系亲属 -->
    <Huiselect
      ref="pickerselect06"
      position="bottom"
      :dataslots="selectRelative"
      class="example-select_item"
      @confirms="selectConfirmRelative"
    ></Huiselect>

    <div class="header">上传材料</div>
    <div class="photo_out_box">
      <div class="photo_box" v-for="(item, index) in stuffTitle" :key="index">
        <div class="headline">
          <div class="blueline"></div>
          {{item}}
        </div>
        <div class="example-upload_formText">
          <div class="example-upload">
            <div v-if="flag" class="example-upload_list">
              <div
                class="example-upload_item"
                v-for="(subitem, subindex) in  uploadData[index]"
                :key="subindex"
              >
                <img :src="subitem.url">
                <span class="example-upload_item-cover">
                  <em
                    class="example-upload_item-delete"
                    @click="handleRemove(index, subindex, item.file_name)"
                  >X</em>
                </span>
              </div>
            </div>

            <ccbUpload
              ref="upload1"
              :upload-id="item.file_name"
              @uploadRes="handleRes"
              app-id="GSP_APP_001"
              bucket-id="GSP_PRIVATE"
              pic-url-pre-fixed="/image-service/downloadImage?"
              :upload-index="index"
            >
              <span class="example-upload_btn">添加</span>
            </ccbUpload>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="buttonGroup">
      <button class="commonBtn" @click="temSave">临时保存</button>
      <button class="commonBtn greenButton" @click="jumpFaceID">确认提交</button>
    </div> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @func1="temSave" @func2="jumpFaceID"/>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import ccbUpload from "../../../../components/ccb-upload";
import { mapMutations } from "vuex";
import areaPicker from "../components/areaPciker";
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
      flag: false,
      uploadData: {},
      stuffTitle: [
        "实际就业人的常住户口迁移申请书",
        "工商营业执照或劳动合同、用人单位出具的劳动关系证明或其他能够证明有合法稳定就业的材料（原件）",
        "实际就业人员的居民户口簿（原件）首页、户主页、本人页"
      ],

      titlename: "就业落户",
      city: [],
      county: [],
      policestation: [],
      name: "",
      idNumber: "",
      relative: [],
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
      selectRelative: [
        {
          flex: 1,
          values: [{ text: "是", value: "a" }, { text: "否", value: "b" }],
          showText: "text",
          className: "slot1"
        }
      ]
    };
  },
  components: {
    mybutton,
    ccbUpload,
    towtop,
    areaPicker
  },
  mounted() {
    this.setCurrentPage(this.$route.name);
  },
  methods: {
    ...mapMutations("publicSecurityStore", ["setFormData", "setCurrentPage"]),
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    setHandle(data) {
      this[Object.keys(data)] = data[Object.keys(data)]["regnCode"];
    },
    selectConfirmCity(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.city = selectedVal[0].text;
      } else {
        this.city = selectedVal;
      }
    },
    selectConfirmCounty(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.county = selectedVal[0].text;
      } else {
        this.county = selectedVal;
      }
    },
    selectConfirmPoliceStation(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.policestation = selectedVal[0].text;
      } else {
        this.policestation = selectedVal;
      }
    },
    selectConfirmRelative(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.relative = selectedVal[0].text;
      } else {
        this.relative = selectedVal;
      }
    },

    temSave() {},

    jumpFaceID() {
      let arry = [];

      for (let item in this.uploadData) {
        this.uploadData[item].map(subItem => {
          arry.push(subItem);
        });
      }

      let data = {
        city: this.city,
        county: this.county,
        policestation: this.policestation,
        name: this.name,
        idNumber: this.idNumber,
        relative: this.relative,
        fileInfo: arry
      };

      this.setFormData(data);

      this.isAndroid_ios();
    },

    isAndroid_ios(uName, cardID) {
      var u = navigator.userAgent,
        app = navigator.appVersion;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

      if (isiOS) {
        this.callisiOS(uName, cardID);
      } else {
        this.callisAndroid(uName, cardID);
      }
    },

    //ios
    callisiOS(uName, cardID) {
      window.webkit.messageHandlers.LiveFace.postMessage({
        name: uName,
        cardID: cardID,
        sex: "1",
        url: "http://128.192.179.84:8089/dist/index.html#/resultPage"
      });
    },

    callisAndroid(uName, cardID) {
      javascript: android.LiveFace(
        uName,
        cardID,
        "1",
        "http://128.192.179.84:8089/dist/index.html#/resultPage"
      );
    },

    handleRemove(index, subindex, file_name) {
      //删除图片上传
      this.flag = false;
      this.uploadData[index].splice(subindex, 1);
      this.flag = true;
    },

    handleRes(data) {
      //添加图片上传
      console.log(data);
      this.flag = false;
      let index = data.index;
      if (this.uploadData[data.index]) {
        this.uploadData[data.index].push({
          name: "name",
          url: data.fileUrl
        });
      } else {
        this.uploadData = Object.assign(
          {},
          {
            [index]: [
              {
                name: "name",
                url: data.fileUrl
              }
            ]
          },
          this.uploadData
        );
      }

      // console.log(this.uploadData)

      this.flag = true;
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../../assets/css/Settle.less";
@import "../../../../assets/css/upload.less";
</style>
