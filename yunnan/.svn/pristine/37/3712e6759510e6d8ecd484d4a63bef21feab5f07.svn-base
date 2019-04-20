<template>
  <div class="bgmcxk_four">
    <towtop style="margin: 0" :name="titlename"/>
    <div class="header2">律所名称变更申请-附件材料</div>
    <div class="example-upload" v-for="(item,index) in arr" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <label class="example-upload_formLabel" for>
          <span>{{ item.file_name }}<sup style="color: red;" v-if="index===0 || index===1">*</sup></span>
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
            :name-key="item.namekey"
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
    <!-- <Btn plain block @click="submit_btn">提交</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submit_btn"/>
    </div>
    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
  </div>
</template>
<script>
import towtop from "../../../../../components/HederTwo";
import ccbUpload from "@/components/ccb-upload";
import imgPreview from "@/components/imgPreview";
import mybutton from "@/components/MyButton";

export default {
  components: {
    mybutton,
    towtop,
    ccbUpload,
    imgPreview
  },
  data() {
    return {
      btnData: [
        {
          text: "提交",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "律师事务所（分所）变更名称许可",
      defaultList: [],
      arr: [
        {
          file_name: "新的律师事务所章程",
          id: "01",
          content:
            "新的律师事务所章程（合伙律师事务所还需提交全体合伙人签名并加盖律师事务所公章的决定变更律师事务所名称的合伙人会议决议及经全体合伙人签名并加盖律师事务所公章的新的律师事务所章程、合伙协议），可上传扫描件（PDF格式）或图片。",
          namekey: "lszc_lszc_lwrcatcl_",
          uploadId: []
        },
        {
          file_name: "律师事务所执业许可证",
          id: "01",
          content:
            "律师事务所执业许可证（含正本和副本），可上传扫描件（PDF格式）或图片。",
          namekey: "lsswszyxkz_lsswszyxkz_lwroffcprctlcns_",
          uploadId: []
        },
        {
          file_name: "合伙协议",
          id: "02",
          content:
            "合伙律师事务所还需提交全体合伙人签名并加盖律师事务所公章的决定变更律师事务所名称的合伙人会议决议及经全体合伙人签名并加盖律师事务所公章的新的律师事务所章程、合伙协议），可上传扫描件（PDF格式）或图片。",
          namekey: "hhrxy_hhrxy_partshipagrm_",
          uploadId: []
        },
        {
          file_name: "合伙人会议决议",
          id: "02",
          content:
            "合伙律师事务所还需提交全体合伙人签名并加盖律师事务所公章的决定变更律师事务所名称的合伙人会议决议及经全体合伙人签名并加盖律师事务所公章的新的律师事务所章程、合伙协议），可上传扫描件（PDF格式）或图片。",
          namekey: "hhrhyjy_hhrhyjy_ptnpsnmtgrsl_",
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
        file_desc: data.uploadId,
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
      const _self = this;
      if (_self.arr[0].uploadId.length === 0)
        return _self.$toast("请上传新的律师事务所章程");
      // if (_self.arr[0].uploadId.length === 0) return _self.$toast('请上传新的律师事务所章程')

      let data = {
        txnCommCom: {
          txn_itt_chnl_id: "1",
          txn_itt_chnl_type: "1",
          tenant: "53000000000"
        },

        txnBodyCom: {
          work_id: window.sessionStorage.getItem("WorkId"),
          matter_id: window.sessionStorage.getItem("matterid"),
          member_id: window.sessionStorage.getItem("userid"),
          files: this.arrs
        }
      };

      this.$ajaxRequest("post", "/gsp/mng30008", data)
        .then(res => {
          console.log(res);
          if (res.rs_code == "00") {
            // _self.popupVisible5 = true;
            this.$router.push('/sfResultPage')
            return;
          } else if (res.rs_code == "01") {
            _self.$toast(res.Error_Info.Message);
          }
        })
        .catch(err => {
          console.log(err);
        });
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
.bgmcxk_four .header2 {
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.6rem;
  text-align: left;
  color: #999;
}
.bgmcxk_four .example-upload {
  background-color: #fff;
}
.bgmcxk_four .blue {
  display: inline-block;
  width: 0.1rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.15rem;
}
.bgmcxk_four .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  padding: 0.25rem 0 0.45rem 0;
  margin: 0 auto;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
}
.bgmcxk_four .example-upload_formLabel {
  font-size: 0.28rem;
  font-weight: 700;
}
.bgmcxk_four .Notes {
  margin-top: 0.2rem;
  margin-bottom: 0.15rem;
}
.bgmcxk_four .Notes span {
  color: #666;
  font-size: 0.24rem;
}
.bgmcxk_four .Explain {
  color: #999;
  font-size: 0.24rem;
}

.bgmcxk_four .hui-btn.is-block {
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
@import "../../../../../assets/css/uploadSFT.less";
</style>

