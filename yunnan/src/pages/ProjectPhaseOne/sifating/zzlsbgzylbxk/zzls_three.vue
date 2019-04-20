<template>
  <div class="zzls_three">
    <towtop :name="titlename"/>
    <div class="header1">附件材料</div>
    <div class="example-upload" v-if="type === '专职律师'" v-for="(item, index) in arr1" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <label class="example-upload_formLabel" for>
          <span>
            {{ item.title }}
            <sup style="color: red;">*</sup>
          </span>
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
                v-for="(subitem, subindex) in uploadData[index]"
                :key="subindex"
              >
                {{subitem}}
                {{subitem.url}}
                <img :src="subitem.url">
                <span class="example-upload_item-cover">
                  <em
                    class="example-upload_item-delete"
                    @click="handleRemove(index,subindex,item.file_name)"
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
              :upload-index="index"
            >
              <span class="example-upload_btn">添加</span>
            </ccbUpload>
          </div>
        </div>
      </div>
    </div>
    <div class="example-upload" v-if="type === '兼职律师'" v-for="(item, index) in arr2" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <label class="example-upload_formLabel" for>
          <span>
            {{ item }}
            <sup style="color: red;">*</sup>
          </span>
        </label>
        <div class="Notes">
          <Icon type="warnning" size="18" color="#FFA500"></Icon>
          <span></span>
        </div>
        <p class="Explain">请上传材料扫描件（pdf格式）或图片格式。</p>
        <div class="example-upload_formText">
          <div class="example-upload">
            <div v-if="flag" class="example-upload_list">
              <div
                class="example-upload_item"
                v-for="(subitem, subindex) in uploadData[index]"
                :key="subindex"
              >
                <img :src="subitem.url">
                <span class="example-upload_item-cover">
                  <em
                    class="example-upload_item-delete"
                    @click="handleRemove(index,subindex,item.file_name)"
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
              :upload-index="index"
            >
              <span class="example-upload_btn">添加</span>
            </ccbUpload>
          </div>
        </div>
      </div>
    </div>
    <div class="example-upload" v-if="type ==='公职律师'" v-for="(item, index) in arr3" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <label class="example-upload_formLabel" for>
          <span>
            {{ item }}
            <sup style="color: red;">*</sup>
          </span>
        </label>
        <div class="Notes">
          <Icon type="warnning" size="18" color="#FFA500"></Icon>
          <span></span>
        </div>
        <p class="Explain">请上传材料扫描件（pdf格式）或图片格式。</p>
        <div class="example-upload_formText">
          <div class="example-upload">
            <div v-if="flag" class="example-upload_list">
              <div
                class="example-upload_item"
                v-for="(subitem, subindex) in uploadData[index]"
                :key="subindex"
              >
                <img :src="subitem.url">
                <span class="example-upload_item-cover">
                  <em
                    class="example-upload_item-delete"
                    @click="handleRemove(index,subindex,item.file_name)"
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
              :upload-index="index"
            >
              <span class="example-upload_btn">添加</span>
            </ccbUpload>
          </div>
        </div>
      </div>
    </div>
    <div class="example-upload" v-if="type === '法援律师'" v-for="(item, index) in arr4" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <label class="example-upload_formLabel" for>
          <span>
            {{ item }}
            <sup style="color: red;">*</sup>
          </span>
        </label>
        <div class="Notes">
          <Icon type="warnning" size="18" color="#FFA500"></Icon>
          <span></span>
        </div>
        <p class="Explain">请上传材料扫描件（pdf格式）或图片格式。</p>
        <div class="example-upload_formText">
          <div class="example-upload">
            <div v-if="flag" class="example-upload_list">
              <div
                class="example-upload_item"
                v-for="(subitem, subindex) in uploadData[index]"
                :key="subindex"
              >
                <img :src="subitem.url">
                <span class="example-upload_item-cover">
                  <em
                    class="example-upload_item-delete"
                    @click="handleRemove(index,subindex,item.file_name)"
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
              :upload-index="index"
            >
              <span class="example-upload_btn">添加</span>
            </ccbUpload>
          </div>
        </div>
      </div>
    </div>

    <!-- <p class="btn" @click="sumbitForm">提交</p> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="sumbitForm"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo.vue";
import ccbUpload from "../../../../components/ccb-upload";
import { cdnPathAdapter, adapterCCBUpload } from "../../../../utils/fetch/cdn.js";
import { mapMutations, mapGetters } from "vuex";
import * as api from "../../../../api/api.js";
import mybutton from "@/components/MyButton";

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
      type: "专职律师",
      flag: false,
      arr1: [
        {
          title: "离职证明",
          detail:
            "原工作单位出具的申请人已经离职的证明材料（工作调动批文、退休批文或辞职证明）扫描件（PDF格式）或图片格式。",
          file_name: "离职证明",
          uploadId: [],
          fileNameKey: "lzzm_lzzm_dmssctfn_"
        },
        {
          title: "人事档案存放证明",
          detail:
            "具有人事档案保管资质的单位出具的人事档案存放证明。需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13793.jhtml页面中上传的《人事档案存放证明》模板提供扫描件（PDF格式）或图片格式。",
          file_name: "人事档案存放证明",
          uploadId: [],
          fileNameKey: "_dacfzm_psnrcdstrgctfn_"
        },
        {
          title: "原律师执业证书",
          detail:
            "原律师执业证书扫描件（PDF格式）或图片格式。若建立电子证照库，则律师执业证书无需申请人上传，直接获取电子证照库的律师执业证书；若不能，则律师执业证书以图片或PDF格式上传。",
          file_name: "原律师执业证书",
          uploadId: [],
          fileNameKey: "ylszyzs_ylszyzs_orilwrprctctf_"
        },
        {
          title: "律所聘用合同",
          detail:
            "拟转入的执业机构的聘用合同，可提供扫描件（PDF格式）或图片格式。",
          file_name: "律所聘用合同",
          uploadId: [],
          fileNameKey: "lspyht_lspyht_lawfmhirctr_"
        }
      ],
      arr2: [
        {
          title: "离职证明",
          detail:
            "原工作单位出具的申请人已经离职的证明材料（工作调动批文、退休批文或辞职证明）扫描件（PDF格式）或图片格式。",
          file_name: "离职证明",
          uploadId: [],
          fileNameKey: "lzzm_lzzm_dmssctfn_"
        },
        {
          title: "同意从事兼职律师证明",
          detail:
            "所在普通高校或科研机构出具的申请人系在编教师或科研人员且专门从事法学教育或研究并同意其兼职从事律师执业的证明。需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13793.jhtml页面中上传的《兼职律师同意兼职证明》模板提供扫描件（PDF格式）或图片格式。",
          file_name: "同意从事兼职律师证明",
          uploadId: [],
          fileNameKey: "_csjzlszm_agrwrkprtmlwrctfn_"
        },
        {
          title: "高校教师资格证",
          detail:
            "任教科目为法学的高校教师资格证扫描件（PDF格式）或图片格式。若建立电子证照库，则高校教师资格证无需申请人上传，直接获取电子证照库的教师资格证；若不能，则高校教师资格证以图片或PDF格式上传。",
          file_name: "高校教师资格证",
          uploadId: [],
          fileNameKey: "gxjszgz_gxjszgz_clgtchrcrdt_"
        },
        {
          title: "原律师执业证书",
          detail:
            "原律师执业证书扫描件（PDF格式）或图片格式。若建立电子证照库，则律师执业证书无需申请人上传，直接获取电子证照库的律师执业证书；若不能，则律师执业证书以图片或PDF格式上传。",
          file_name: "原律师执业证书",
          uploadId: [],
          fileNameKey: "ylszyzs_ylszyzs_orilwrprctctf_"
        },
        {
          title: "律所聘用合同",
          detail:
            "拟转入的执业机构的聘用合同，可提供扫描件（PDF格式）或图片格式。",
          file_name: "律所聘用合同",
          uploadId: [],
          fileNameKey: "lspyht_lspyht_lawfmhirctr_"
        }
      ],
      arr3: [
        {
          title: "解除劳动关系证明",
          detail:
            "与原所在单位（执业机构）解除劳动关系（工作调动批文、退休批文或辞职证明）的证明材料扫描件（PDF格式）或图片格式。",
          file_name: "解除劳动关系证明",
          uploadId: [],
          fileNameKey: "_jcldgxzm_rlvlbrrelctfn_"
        },
        {
          title: "同意担任公司律师证明",
          detail:
            "所在国有企业出具的申请人系本单位在职人员且专门从事本单位法律事务并同意申请人担任本单位公司律师的证明材料。需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13793.jhtml页面中上传的《同意担任公职（公司）律师证明》模板提供扫描件（PDF格式）或图片格式。",
          file_name: "在职人员证明",
          uploadId: [],
          fileNameKey: "_zzryzm_onthjbstffctfn_"
        },
        {
          title: "关于申请开展公职律师工作的函",
          detail:
            "所在工作单位向省司法厅出具的《XX单位关于申请开展公职律师工作的函》。需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13793.jhtml页面中上传的《关于申请开展公职（公司）律师工作的函》模板提供扫描件（PDF格式）或图片格式。",
          file_name: "关于申请开展公职律师工作的函",
          uploadId: [],
          fileNameKey: "gzlsgzh_gzlsgzh_abtaplyofflwrltr_"
        },
        {
          title: "原律师执业证书",
          detail:
            "原律师执业证书扫描件（PDF格式）或图片格式。若建立电子证照库，则律师执业证书无需申请人上传，直接获取电子证照库的律师执业证书；若不能，则律师执业证书以图片或PDF格式上传。",
          file_name: "原律师执业证书",
          uploadId: [],
          fileNameKey: "ylszyzs_ylszyzs_orilwrprctctf_"
        },
        {
          title: "其他材料",
          detail:
            "申请人曾为专职、兼职律师的，还需上传与原律所“三清”证明材料。",
          file_name: "其他材料",
          uploadId: [],
          fileNameKey: "qt_qt_othrmtrl_"
        }
      ],
      arr4: [
        {
          title: "离职证明",
          detail:
            "原工作单位出具的申请人已经离职的证明材料（工作调动批文、退休批文或辞职证明）扫描件（PDF格式）或图片格式。",
          file_name: "离职证明",
          uploadId: [],
          fileNameKey: "lzzm_lzzm_dmssctfn_"
        },
        {
          title: "任命（调动）文件",
          detail:
            "拟申请执业的法律援助机构主管司法行政机关出具的关于安排申请人至该法律援助机构工作的任命文件或调动文件扫描件（PDF格式）或图片格式。",
          file_name: "任命（调动）文件",
          uploadId: [],
          fileNameKey: "_rmwj_nominateFile_"
        },
        {
          title: "原律师执业证书",
          detail:
            "原律师执业证书扫描件（PDF格式）或图片格式。若建立电子证照库，则律师执业证书无需申请人上传，直接获取电子证照库的律师执业证书；若不能，则律师执业证书以图片或PDF格式上传。",
          file_name: "原律师执业证书",
          uploadId: [],
          fileNameKey: "ylszyzs_ylszyzs_orilwrprctctf_"
        },
        {
          title: "律所同意接收证明",
          detail:
            "拟转入的执业机构同意接收的证明。需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13793.jhtml页面中上传的《律所同意接收证明》模板提供扫描件（PDF格式）或图片格式。",
          file_name: "律所同意接收证明",
          uploadId: [],
          fileNameKey: "lstyjszm_lstyjszm_lawFirmAgrRcvCtfn_"
        }
      ]
    };
  },
  components: {
    mybutton,
    towtop,
    ccbUpload
  },
  computed: {
    ...mapGetters("zzlsStore", ["formData"]),
    ...mapGetters(["workId"])
  },
  methods: {
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
          file_desc: this.uploadData[data.index].title
        });
      } else {
        this.uploadData = Object.assign(
          {},
          {
            [index]: [
              {
                file_name: data.ObjNm,
                file_path: bucketId,
                file_desc: this.uploadData[data.index].title
              }
            ]
          },
          this.uploadData
        );
      }
      this.uploadFileList.push();
      // console.log(this.uploadData)

      this.flag = true;
    },

    async sumbitForm() {
      let arry = [];
      let obj = {};
      let upload = {};
      let formjson = {};

      for (let item in this.uploadData) {
        this.uploadData[item].map(subItem => {
          arry.push(subItem);
        });
      }

      if (arry.length > 0) {
        upload = {
          files: arry,
          workId: this.workId,
          matterId: window.sessionStorage.getItem("matterid"),
          memberId: window.sessionStorage.getItem("userid")
          // workId: '1234567890',
          // matterId: '8d1639b5be8742d9af53686237631a4a',
          // memberId: '8d1639b5be8742d9af53686237631a4a'
        };

        console.log(this.formData);

        formjson = {
          formData: this.formData,
          workId: this.workId,
          matterId: window.sessionStorage.getItem("matterid"),
          memberId: window.sessionStorage.getItem("userid")
          //  workId: '1234567890',
          // matterId: '8d1639b5be8742d9af53686237631a4a',
          // memberId: '8d1639b5be8742d9af53686237631a4a'
        };
        console.log(upload);
        api.sumbitUploadData(upload);

        api
          .sumbitLawChangeForm(formjson)
          .then(() => {
            //裕农通APP功能，勿删！
            if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
              PJF.ynt.A0161G058()
            }
            this.$toast("申请提交成功");
          })
          .catch(e => {
            this.$toast("申请提交失败");
          });
      } else {
        this.$toast("请添加材料");
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
.example-upload {
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
}
.zzls_three .example-upload_formLabel {
  font-size: 0.28rem;
  font-weight: 700;
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
      position: relative;
      top: -10px;
      display: block;
      width: 1.6rem;
      height: 1.6rem;
      background-color: #f5f5f5;
      font-size: 1rem;
      text-align: center;
      line-height: 1.6rem;
      font-size: 16px;
      color: #1378bf;
      cursor: pointer;
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
    }

    .example-upload_item img {
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
</style>
