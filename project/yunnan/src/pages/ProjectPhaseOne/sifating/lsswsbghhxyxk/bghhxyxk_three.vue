<template>
  <div class="bghhxyxk_three">
    <towtop style="margin: 0" :name="titlename"/>
    <div class="header2">附件材料</div>
    <div class="example-upload" v-for="(item,index) in arr" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <span class="littlestarking1">*</span>
        <label class="example-upload_formLabel" for>
          <span>{{ item.file_name }}</span>
        </label>
        <div class="Notes">
          <Icon type="warnning" size="18" color="#FFA500"></Icon>
          <span>{{ item.content }}</span>
        </div>
        <p class="Explain">请上传材料扫描件（pdf格式）或图片格式。</p>
        <div class="example-upload_formText">
          <div class="imgList">
            <div
              class="example-upload_item"
              v-for="(subitem,subindex) in item.uploadId"
              :key="subindex"
            >
              <div
                class="item-pdf"
                v-if="subitem.type === 'pdf'"
                @click.self="previewHandle('pdf', subindex)"
              >
                <img :src="require('@/assets/images/pdf.png')" alt>
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
                  @click="handleRemove(index,subindex,item.uploadId)"
                >X</em>
              </span>
            </div>
          </div>

          <!--上传-->
          <ccbUpload
            :upload-id="item.file_name"
            @uploadRes="handleRes"
            app-id="GSP_APP_001"
            bucket-id="GSP_PRIVATE"
            pic-url-pre-fixed="/image-service/downloadImage?"
            :upload-index="index"
          >
            <span class="example-upload_btn">+</span>
          </ccbUpload>
        </div>
      </div>
    </div>
    <!-- <Btn plain block @click="submit_btn">预览</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submit_btn"/>
    </div>
    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "@/components/MyButton";
import ccbUpload from "@/components/ccb-upload";
import imgPreview from "@/components/imgPreview";

export default {
  components: {
    towtop,
    mybutton,
    ccbUpload,
    imgPreview
  },
  data() {
    return {
      btnData: [
        {
          text: "预览",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "律师事务所变更合伙协议许可",
      defaultList: [],
      arr: [
        {
          file_name: "合伙人会议决议",
          content:
            "由全体合伙人签名的并加盖律师事务所公章的决定变更律师事务所合伙协议的合伙人会议决议。合伙人会议决议需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13795.jhtml页面中上传的《合伙人会议决议》模板提供，可上传扫描件（PDF格式）或图片。",
          uploadId: []
        },
        {
          file_name: "律师事务所章程",
          content:
            "由全体合伙人签名的并加盖律师事务所公章的新的律师事务所章程，可上传扫描件（PDF格式）或图片。",
          uploadId: []
        },
        {
          file_name: "合伙协议",
          content:
            "由全体合伙人签名的并加盖律师事务所公章的新的律师事务所合伙协议，可上传扫描件（PDF格式）或图片。",
          uploadId: []
        }
      ],
      arrs: [],
      popupVisible: false,
      isShow: false,
      currentImgUrl: ""
    };
  },
  methods: {
    setUploadIndex(index) {
      const _self = this;
      _self.uploadIndex = index;
      console.log(index);
    },
    handleRes(data) {
      // 添加图片上传
      const _self = this;

      _self.arr[data.index].uploadId.push({
        file_name: data.ObjNm,
        file_path: "GSP_PRIVATE",
        url: data.fileUrl,
        type: data.ObjNm.slice(data.ObjNm.indexOf(".") + 1, data.ObjNm.length),
        origName: data.origFileName
      });

      this.filteData();
    },
    handleRemove(index, subindex, uploadId) {
      // 删除图片上传
      const _self = this;
      _self.arr[index].uploadId.splice(subindex, 1);

      this.filteData();
    }, // 图片
    filteData() {
      let arrysource = JSON.parse(JSON.stringify(this.arr));
      console.log(arrysource);
      let arryturn = [];
      for (let i in arrysource) {
        arrysource[i]["uploadId"].map(item => {
          // 删除多余数据
          delete item.url;
          delete item.type;
          delete item.origName;
          arryturn.push(item);
        });
      }

      this.arrs = arryturn;
    },
    submit_btn() {
      sessionStorage.setItem("SFTparternimgList", JSON.stringify(this.arr));
      this.$router.push("/bghhxyxk_four");
    },

    setShow(data) {
      this.isShow = data;
    },

    previewHandle(data, index) {
      console.log("kkk");

      if (data === "pdf") {
        this.popupVisible = index;
      } else {
        this.isShow = true;
        this.currentImgUrl = data;
      }
    },

    closePopup(data) {
      this.popupVisible = data;
    }
  }
};
</script>
<style>
.header2 {
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.6rem;
  text-align: left;
  color: #999;
}
.bghhxyxk_three .example-upload {
  background-color: #fff;
}
.blue {
  display: inline-block;
  width: 0.1rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.15rem;
}

.bghhxyxk_three .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  padding: 0.25rem 0 0.45rem 0;
  margin: 0 auto;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
  position: relative;
}
.bghhxyxk_three .example-upload_formLabel {
  font-size: 0.28rem;
  font-weight: 700;
  margin-left: 0.1rem;
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
@import "../../../../assets/css/uploadSFT.less";
.bghhxyxk_three .littlestarking1 {
  color: red;
  font-size: 0.4rem;
  display: inline-block;
  position: absolute;
  left: 0.2rem;
}
</style>
