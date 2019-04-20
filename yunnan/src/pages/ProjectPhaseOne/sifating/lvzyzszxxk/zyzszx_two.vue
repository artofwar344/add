 <template>
  <div class="zyzszx_wrap">
    <towtop style="margin: 0" :name="titlename"/>
    <div class="header2">附件材料</div>
    <div class="example-upload" v-for="(item,index) in arr" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <span class="littlestarking1" >*</span>
        <label class="example-upload_formLabel" for>
          <span>
            {{ item.file_name }}
          </span>
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
            :name-key="item.namekey"
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
   <!--  <Popupprompt
      v-model="popupVisible5"
      :title="content.title"
      :text="content.text"
      :confirm-btn="content.confirmBtn"
      :cancel-btn="content.cancelBtn"
      :close-on-click-modal="false"
      @click="clickbtn"
    >
      <div slot="othercontent">
        <p>请关注
          <span style="color: #FAC306;">“我的办理进度”</span>并及时处理系统消息
        </p>
      </div>
    </Popupprompt> -->

    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
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
      titlename: "律师执业证书注销许可",
      defaultList: [],
      arr: [
        {
          file_name: "交接手续证明材料",
          content:
            "原执业机构出具的与原执业机构解除聘用关系或合伙关系以及办结业务、档案、财务等交接手续证明材料，可上传扫描件（PDF格式）或图片。",
          uploadId: [],
          namekey: "_jjzm_hndovprocctfnmtrl_"
        },
        {
          file_name: "无《律师执业管理办法》第23条规定情形的证明",
          content:
            "证明模板需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13793.jhtml“无《律师执业管理办法》第23条规定情形的证明”模板提供，可上传扫描件（PDF格式）或图片。",
          uploadId: [],
          namekey: "wdeszm_wdeszm_nonlwrprctmgt23ctfn_"
        },
        {
          file_name: "原律师执业证书",
          content: "可上传扫描件（PDF格式）或图片。",
          uploadId: [],
          namekey: "ylszyzs_ylszyzs_orilwrprctctf_"
        }
      ],
      arrs: [],
      popupVisible5: false,
      content: {
        title: "您已提交成功",
        text: "",
        confirmBtn: {
          //水平按钮-确定
          id: "confirm",
          text: "确定"
        },
        cancelBtn: {}
      },
      isShow: false,
      currentImgUrl: "",
      popupVisible: false
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
        file_desc: _self.arr[data.index].file_name,
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
      let _self = this;
      //是否未传图片
      if (!this.arr[0].uploadId.length) {
        // this.$toast("请上传无《律师执业管理办法》第23条规定情形的证明（必填项）")
        this.$toast("请上传完整材料信息!");
        return;
      }
      if (!this.arr[1].uploadId.length) {
        // this.$toast("原律师执业证书（必填项）")
        this.$toast("请上传完整材料信息!");
        return;
      }
      if (!this.arr[2].uploadId.length) {
        // this.$toast("交接手续证明材料（必填项）")
        this.$toast("请上传完整材料信息!");
        return;
      }
      console.log(this.arr);
      let setdata = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          work_id: sessionStorage.getItem("WorkId"),
          matter_id: sessionStorage.getItem("matterid"),
          member_id: sessionStorage.getItem("userid"),
          files: this.arrs
        }
      };
      console.log(setdata);
      this.$ajaxRequest("post", "/gsp/mng30008", setdata)
        .then(res => {
          console.log(res);
          console.log(res.rs_code);
          if (res.rs_code == "00") {
            //裕农通APP功能，勿删！
            if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
              PJF.ynt.A0161G058()
            }
            // _self.popupVisible5 = true;
            this.$router.push('/sfResultPage')
            return;
          } else if (res.rs_code == "01") {
            _self.$toast(res.Error_Info.Message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    clickbtn(id) {
      // console.log(id)
      this.clearSession();
      // 调用原生关闭视窗
      this.$CallModule("close", "关闭");
    },
    clearSession() {
      if (sessionStorage.getItem("SFTreason")) {
        sessionStorage.removeItem("SFTreason");
      }
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
.zyzszx_wrap .header2 {
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.6rem;
  text-align: left;
  color: #999;
}
.zyzszx_wrap .example-upload {
  background-color: #fff;
  text-align: left;
}
.zyzszx_wrap .blue {
  display: inline-block;
  width: 0.1rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.15rem;
}

.zyzszx_wrap .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  padding: 0.25rem 0 0.45rem 0;
  margin: 0 auto;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
}
.zyzszx_wrap .example-upload_formLabel {
  font-size: 0.28rem;
  font-weight: 700;
}
.zyzszx_wrap .Notes {
  margin-top: 0.2rem;
  margin-bottom: 0.15rem;
}
.zyzszx_wrap .Notes span {
  color: #666;
  font-size: 0.24rem;
}
.zyzszx_wrap .Explain {
  color: #999;
  font-size: 0.24rem;
}

.zyzszx_wrap .hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}

.zyzszx_wrap .hui-popupPrompt_btn-cancel {
  display: none;
}
.zyzszx_wrap .hui-popupPrompt_btn-confirm {
  width: 100%;
}
</style>

<style lang="less" scoped>
@import "../../../../assets/css/uploadSFT.less";
.zyzszx_wrap .littlestarking1{
  color: red;
  font-size:0.4rem;
  display: inline-block;
  position: absolute;
  left: 0.23rem;

}
</style>

