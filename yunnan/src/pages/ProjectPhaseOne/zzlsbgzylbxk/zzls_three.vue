<template>
  <div class="zzls_three">
    <towtop :name="titlename"/>
    <div class="header1">附件材料</div>
    <div class="example-upload" v-for="(item, index) in defaultData" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <span class="littlestarking1" v-if="renderHandle(item.title)">*</span>
        <label class="example-upload_formLabel" for>

          <span>{{ item.title }}</span>
        </label>
        <div class="Notes">
          <Icon type="warnning" size="18" color="#FFA500"></Icon>
          <span>{{item.detail}}</span>
        </div>
        <p class="Explain">请上传材料扫描件（pdf格式）或图片格式。</p>
        <div class="example-upload_formText">
          <div class="example-upload">
            <div v-if="flag" class="example-upload_list">
              <div
                class="example-upload_item"
                v-for="(subitem, subindex) in uploadData[item.title]"
                :key="subindex"
              >
                <div
                  class="item-pdf"
                  v-if="subitem.type === 'pdf'"
                  @click.self="previewHandle('pdf', subindex)"
                >
                  <img :src="require('../../../assets/images/pdf.png')" alt>
                  <span class="label">{{subitem.origName}}</span>
                  <div class="popup" v-if="popupVisible === subindex">
                    {{subitem.origName}}
                    <div class="modal" @click.stop="closePopup('20000')"></div>
                  </div>
                </div>
                <img v-else :src="subitem.url" @click="previewHandle(subitem.url)">
                <span class="example-upload_item-cover">
                  <em
                    class="example-upload_item-delete"
                    @click="handleRemove(item.title,subindex,item.file_name)"
                  >X</em>
                </span>
              </div>
            </div>

            <ccbUpload
              ref="upload1"
              :nameKey="item.fileNameKey"
              @uploadRes="handleRes"
              app-id="GSP_APP_001"
              bucket-id="GSP_PRIVATE"
              pic-url-pre-fixed="/image-service/downloadImage?"
              :upload-index="item.title"
            >
              <span class="example-upload_btn">+</span>
            </ccbUpload>
          </div>
        </div>
      </div>
    </div>

    <!-- <p class="btn" @click="sumbitForm">提交</p> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="sumbitForm"/>
    </div>
    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>

  </div>
</template>
<script>
import towtop from "../../../components/HederTwo.vue";
import ccbUpload from "../../../components/ccb-upload";
import imgPreview from "../../../components/imgPreview";
import { cdnPathAdapter, adapterCCBUpload } from "../../../utils/fetch/cdn.js";
import { mapMutations, mapGetters } from "vuex";
import * as api from "../../../api/api.js";
import * as dataSource from "./dataSource.js";
import mybutton from "@/components/MyButton";

let instanceLoading 

export default {
  data() {
    return {
      btnData: [
        {
          text: "提交",
          disabled: false,
          isSure: true
        }
      ],
      titlename: this.$store.state.zzlsStore.currentpage + "变更执业类别许可",
      defaultList: [],
      cdnParams: {},
      uploadFileList: [],
      uploadData: {},
      flag: false,
      uploadNew: [],
      // haveUploadedNm: "",
      defaultData: [],
      isShow: false,
      currentImgUrl: "",
      popupVisible: false,

    };
  },
  activated () {
    if(window.sessionStorage.getItem('zzlsobjthree')!=window.sessionStorage.getItem('zzlsobj')){
      this.settingPage();
    }
    window.sessionStorage.setItem('zzlsobjthree',window.sessionStorage.getItem('zzlsobj'))
  },
  components: {
    mybutton,
    towtop,
    ccbUpload,
    imgPreview
  },
  computed: {
    ...mapGetters("zzlsStore", ["formData", "choseType", "currentpage"]),
    ...mapGetters(["workId"])
  },
  methods: {
    openManualToast(){
      instanceLoading = this.$toast({
        message: '提交中...',
        iconType: 'loading',
        manualClose: true
      })   
   },

    handleRemove(index, subindex, file_name) {
      //删除图片上传
      this.flag = false;
      this.uploadData[index].splice(subindex, 1);
      this.flag = true;
    },

    handleRes(data) {
      //添加图片上传]
      console.log(data);
      this.flag = false;
      let index = data.index;
      let bucketId = data.fileUrl
        .slice(data.fileUrl.indexOf("?"), data.fileUrl.indexOf("&"))
        .split("=")[1];
      if (this.uploadData[data.index]) {
        this.uploadData[data.index].push({
          file_name: data.ObjNm,
          file_path: bucketId,
          file_desc: data.index,
          url: data.fileUrl,
          type: data.ObjNm.slice(
            data.ObjNm.indexOf(".") + 1,
            data.ObjNm.length
          ),
          origName: data.origFileName
        });
      } else {
        this.uploadData = Object.assign(
          {},
          {
            [index]: [
              {
                file_name: data.ObjNm,
                file_path: bucketId,
                file_desc: data.index,
                url: data.fileUrl,
                type: data.ObjNm.slice(
                  data.ObjNm.indexOf(".") + 1,
                  data.ObjNm.length
                ),
                origName: data.origFileName
              }
            ]
          },
          this.uploadData
        );
      }

      // 判定已上传材料
      // console.log(Object.keys(this.uploadData));
      // this.haveUploadedNm = Object.keys(this.uploadData).length;

      this.filterData();

      this.flag = true;
    },

    filterData() {
      let arry = [];

      let newArry = JSON.parse(JSON.stringify(this.uploadData));

      // 删除多余字段url、type
      for (let item in newArry) {
        newArry[item].map(subItem => {
          delete subItem.url;
          delete subItem.type;
          delete subItem.origName;

          arry.push(subItem);
        });
      }

      this.uploadNew = arry;
    },

    async sumbitForm() {
      let arry = [];
      let obj = {};
      let upload = {};
      let formjson = {};

      // for (let item in this.uploadNew) {
      //   this.uploadNew[item].map(subItem => {
      //     arry.push(subItem)
      //   })
      // }

      // console.log(this.validUpload());

      // if (this.validUpload()) {
        if(true) {
        upload = {
          files: this.uploadNew,
          workId: this.workId,
          matterId: window.sessionStorage.getItem("matterid")
            ? window.sessionStorage.getItem("matterid")
            : "8d1639b5be8742d9af53686237631a4a",
          memberId: window.sessionStorage.getItem("userid"),

          // matterId: '5259f37a8a1d4b51a87684ca9bd06b0e',
          memberId: window.sessionStorage.getItem("userid"),
          // matterId: "2d07fe9cc6ef4076a934e94f745855af" // 公职
          matterId: window.sessionStorage.getItem("matterid"),
          // matterId: 'bd0ca68b9505487180cbcbc2d6ec93ca',
        };

        console.log(this.formData);

        formjson = {
          formData: this.formData,
          workId: this.workId,
          matterId: window.sessionStorage.getItem("matterid"),
          memberId: window.sessionStorage.getItem("userid"),

          // matterId: '2d07fe9cc6ef4076a934e94f745855af',
          // matterId: '5259f37a8a1d4b51a87684ca9bd06b0e',
          // matterId: '44825764fb6344aa993c3b1e390a910c',
          // matterId: "2d07fe9cc6ef4076a934e94f745855af", // 公职
          matterId: window.sessionStorage.getItem("matterid"),
          memberId: window.sessionStorage.getItem("userid")
          // matterId: 'bd0ca68b9505487180cbcbc2d6ec93ca',
        };

        this.openManualToast()   // 开启loading

        api.sumbitLawChangeForm(formjson).then(() => {
            api.sumbitUploadData(upload).then(res => {
              // if (res.rs_code == "00") {
              //   // _self.popupVisible5 = true;
              //   this.$router.push('/sfResultPage')
              //   return;
              // } else if (res.rs_code == "01") {
              //   this.$toast(res.Error_Info.Message);
              // }
              // this.$router.push({ name: "zzlsFour" });

              // this.$toast('申请提交成功')
              // this.$CallModule('close', '关闭')
              this.$router.push('/sfResultPage')
              instanceLoading.close()
            }).catch(e => {
              instanceLoading.close()
              if (e && e.Error_Info) {
                this.$toast(e.Error_Info.Message)
              }
            })
          }).catch(e => {
            instanceLoading.close()
            if (e && e.Error_Info) {
              this.$toast(e.Error_Info.Message)
            }
          })
      } else {
        this.$toast("请确保已上传全部所需资料");
      }
    },

    // 验证所有必传资料都已上传
    validUpload() {
      let data = this.uploadData
      let currentUploadNm = 0
      let haveUploadedNm = 0
      // // let arry = Object.keys(this.defaultData)

      this.defaultData.map(item => {
        if (
          item.title !== "其他材料" &&
          item.title !== "同意转出转入以及无第21条证明"
        ) {
          currentUploadNm++
        }
      })

      for (let i in data) {
        if (i !== "其他材料" &&
          i !== "同意转出转入以及无第21条证明") {
            console.log(i, data[i].length)
            if (data[i].length > 0) {
              haveUploadedNm++
            } 
          }
      }

      if (currentUploadNm <= haveUploadedNm) {
        return true;
      } else {
        return false;
      }
    },
    settingPage() {
      switch (this.choseType) {
        case "专职律师":
          if (["公司律师", "公职律师", "法援律师"].includes(this.currentpage)) {
            this.defaultData = dataSource.fullLaw["publicOrAidOrCompany"];
          }

          if ("兼职律师" === this.currentpage) {
            this.defaultData = dataSource.fullLaw["partLaw"];
          }
          break;

        case "兼职律师":
          if (["公职律师", "法援律师", "公司律师"].includes(this.currentpage)) {
            this.defaultData = dataSource.partLaw["publicOrAidOrCompany"];
          }

          if ("专职律师" === this.currentpage) {
            this.defaultData = dataSource.partLaw["fullLaw"];
          }
          break;

        case "公职律师":
          if (["兼职律师", "专职律师"].includes(this.currentpage)) {
            this.defaultData = dataSource.publicLaw["fullOrPart"];
          }

          if (["公司律师", "法援律师"].includes(this.currentpage)) {
            this.defaultData = dataSource.publicLaw["aidOrCompany"];
          }
          break;

        case "法援律师":
          if (["公司律师", "公职律师"].includes(this.currentpage)) {
            this.defaultData = dataSource.aidLaw["publicOrCompany"];
          }
          break;

        case "公司律师":
          if (["兼职律师", "专职律师"].includes(this.currentpage)) {
            this.defaultData = dataSource.companyLaw["pullOrPart"];
          }

          if (["公职律师", "法援律师"].includes(this.currentpage)) {
            this.defaultData = dataSource.companyLaw["publidOrAid"];
          }
          break;
        default:
          break;
      }
    },

    setShow(data) {
      this.isShow = data;
    },

    previewHandle(data, index) {
      // console.log('kkk')

      if (data === "pdf") {
        this.popupVisible = index;
      } else {
        this.isShow = true;
        this.currentImgUrl = data;
      }
    },

    closePopup(data) {
      this.popupVisible = data;
    },

    renderHandle(data) {
      if (data === "其他材料" || data === "同意转出转入以及无第21条证明") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>
<style scoped>
.header1,
.header2 {
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.4rem;
  text-align: left;
  color: #999;
}
.header2 {
  line-height: 0.6rem;
}
.zzls_three .example-upload {
  background-color: #fff;
}
.blue {
  display: inline-block;
  width: 0.1rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.15rem;
}
.zzls_three .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  padding: 0.25rem 0 0.45rem 0;
  margin: 0 auto;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
  position: relative;
}
.zzls_three .example-upload_formLabel {
  font-size: 0.28rem;
  font-weight: 700;
  margin-left: 0.2rem;
}
.Notes {
  margin-top: 0.2rem;
  margin-bottom: 0.15rem;
}
.Notes span {
  color: #666;
  font-size: 0.24rem;
}
.Explain {
  color: #999;
  font-size: 0.24rem;
}

.hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
</style>

<style lang="less" scoped>
.example-upload_formText {
  padding-top: 0.8rem;
  .example-upload {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .example-upload_formItem {
      position: relative;
      text-align: left;
      padding: 0 15px;
      border-bottom: 1px solid #e1e2e6;
    }

    .example-upload_formItem input {
      position: absolute;
      height: 44px;
      width: 100%;
      left: 0;
      top: 0;
    }

    .example-upload_formLabel {
      float: left;
      text-align: left;
      font-size: 16px;
      line-height: 44px;
    }

    .example-upload_formText {
      text-align: right;
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
      position: relative;
      top: -9px;
    }
    /* //以下是自定义图片列表的样式，不用删除 */

    .example-upload_list::after {
      content: "0";
      font-size: 0;
      clear: both;
      height: 0;
      display: block;
    }

    .example-upload_item {
      margin: 5px;
      float: left;
      width: 80px;
      height: 80px;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      background: #fff;
      position: relative;

      .item-pdf {
        border: 1px solid #ccc;
        border-radius: 5px;
        position: relative;
        height: 78px;
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-items: center;

        .label {
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 80%;
          overflow: hidden;
        }

        > img {
          width: 60px;
          height: 60px;
        }

        .popup {
          z-index: 2000;
          position: absolute;
          top: 80%;
          left: 0px;
          padding: 5px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 5px;
          color: #fff;
          width: 2rem;
          word-break: break-word;

          .modal {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2002;
          }
        }

        .popup:before {
          display: inline-block;
          width: 0;
          height: 0;
          border: solid transparent;
          border-width: 10px;
          border-bottom-color: rgba(0, 0, 0, 0.6);
          content: "";
          position: absolute;
          top: -20px;
          right: 10%;
        }
      }

      .item-pdf:before {
        content: "";
        position: absolute;
        top: 0;
        height: 78px;
        width: 78px;
      }
    }

    .example-upload_item > img {
      width: 100%;
      height: 100%;
    }

    .example-upload_item-cover {
      position: absolute;
      top: -5px;
      right: -4px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      background-clip: border-box;
    }

    .example-upload_item-delete {
      position: relative;
      vertical-align: top;
      width: 20px;
      height: 20px;
      cursor: pointer;
      display: inline-block;
      background-size: 100%;
    }

    .example-upload_progress {
      margin-top: 35px;
    }
  }
}

.btn {
  border-radius: 50px;
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  line-height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}

/*.star {*/
  /*font-size: 20px;*/
  /*color: red;*/
  /*display: inline-block;*/
  /*position: relative;*/
  /*top: 5px;*/
/*}*/
.zzls_three .littlestarking1{
  color: red;
  font-size:0.4rem;
  display: inline-block;
  position: absolute;
  left: 0.23rem;

}

.padTopAdd5 {
  margin-bottom: 1rem;
}
</style>
