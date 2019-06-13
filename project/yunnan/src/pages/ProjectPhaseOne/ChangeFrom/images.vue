<template>
  <div class="change-images">
    <towtop :name="hadertow"/>

    <div class="example-upload">
      <div v-for="(item,index) in arr" :key="index">
        <!-- //上传图片循环.. -->
        <div class="example-upload_formItem">
          <div class="blue"></div>
          <label class="example-upload_formLabel" for>
           <!--  <span class="star">*</span> -->
            <span style="color: red;font-size: 0.35rem">{{item.take}}</span>
            {{ item.title }}
          </label>
          <div class="Notes">
            <Icon type="warnning" size="18" color="#FFA500"></Icon>
            <span>{{item.detail}}</span>
          </div>
          <div class="example-upload_formText">
            <div class="imgList">
              <div
                class="example-upload_item"
                v-for="(subitem,subindex) in item[item.title]"
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
                    @click="handleRemove(index,subindex,item.title)"
                  >X</em>
                </span>
              </div>
            </div>

            <!--上传-->
            <ccbUpload
              :upload-id="item.title"
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
      <!-- <button class="btn" @click="upload">提交</button> -->
      
    </div>
    <div class="padBotAdd5">
        <mybutton :btnData="btnData" @click="upload"/>
      </div>
    <!-- 	<div class='altbox' v-show="one">
			<div class="center">
				<h1>提示</h1>
				<div>您所办理的事项已经成功，请在我的事项中查看！<br />
					<p style="text-align: center; padding-top:.05rem;">请点击关闭按钮</p>
				</div>

			</div>
    </div>-->
    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
  </div>
</template>

<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
import imgadd from "./imgadd/index.vue";
import ccbUpload from "../../../components/ccb-upload";
import imgPreview from "@/components/imgPreview";
import { setTimeout } from "timers";
import mybutton from "../../../components/MyButton";
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
      arr: [
        {
          i: true,
          take:'*',
          title: "变更后章程",
          detail:
            "修订后的律师事务所变更章程。章程必须按照《律师事务所管理办法》第十六条制定，且须将加强律师事务所党的建设写入章程，可上传扫描件（PDF格式）或图片。",
          fileNameKey: "bghzc_bghzc_afmdatcl_",
          变更后章程: []
        },
        {
          i: false,
          title: "合伙人会议决议",
          detail:
            "合伙律师事务所变更章程的，还需提交全体合伙人签名并加盖律师事务所公章的决定变更律师事务所章程合伙协议的合伙人会议决议及经全体合伙人签名并加盖律师事务所公章的新的律师事务所合伙协议，合伙人会议决议需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13795.jhtml页面中上传的《合伙人会议决议》模板提供，可上传扫描件（PDF格式）或图片。",
          fileNameKey: "hhrhyjy_hhrhyjy_ptnpsnmtgrsl_",
          合伙人会议决议: []
        },
        {
          i: false,
          title: "律师事务所合伙协议",
          detail:
            "合伙律师事务所变更章程的，还需提交全体合伙人签名并加盖律师事务所公章的决定变更律师事务所章程合伙协议的合伙人会议决议及经全体合伙人签名并加盖律师事务所公章的新的律师事务所合伙协议，可上传扫描件（PDF格式）或图片。",
          fileNameKey: "hhrhyjy_hhrhyjy_lwroffcpagrm_",
          律师事务所合伙协议: []
        }
      ],
      arrs: [],
      WorkId: "",
      hadertow: "材料上传",
      // one: "",
      flag: false,
      haveNum: [],
      popupVisible: false,
      isShow: false,
      currentImgUrl: ""
    };
  },
  components: {
    imgadd,
    towtop,
    mybutton,
    ccbUpload,
    imgPreview
  },
  computed: {},
  created() {
    console.log(cenurl.url());
  },
  watch: {},

  methods: {
    // // // // // // // // // // // // // // // // // // // // // // //
    handleRes(data) {
      //添加图片上传]
      this.flag = false;
      console.log(this.arr)
      console.log(data)
      console.log(this.arr[data.index])
      console.log(this.arr[data.index][data.uploadId])

      this.arr[data.index][data.uploadId].push({
        file_name: data.ObjNm,
        file_path: "GSP_PRIVATE",
        file_desc: data.uploadId,
        url: data.fileUrl,
        type: data.ObjNm.slice(data.ObjNm.indexOf(".") + 1, data.ObjNm.length),
        origName: data.origFileName
      });

      this.filteData();

      this.flag = true;

      this.haveNum.push(data.uploadId);
    },

    handleRemove(index, subindex, title) {
      // debugger
      //删除图片上传
      this.flag = false;
      console.log(this.arr[index], title)
      this.arr[index][title].splice(subindex, 1);
      this.filteData();
      this.flag = true;
    },

    filteData() {
      let arrysource = JSON.parse(JSON.stringify(this.arr));
      console.log(arrysource);
      let arryturn = [];
      for (let i in arrysource) {
        arrysource[i][arrysource[i].title].map(item => {
          // 删除多余数据
          delete item.url;
          delete item.type;
          delete item.origName;
          arryturn.push(item);
        });
      }

      this.arrs = arryturn;
    },

    upload() {
      var ass = [];
      this.arr.forEach((item, index) => {
        ass.push(item[item.title]);
      });

      // 校验所需资料搜上传
      console.log(this.haveNum);
      let p1 = "";
      let p2 = "";
      let p3 = "";
      this.haveNum.map(item => {
        if (item === "变更后章程") {
          p1 = true;
        }
        // if (item === '合伙人会议决议') {
        //   p2 = true
        // }
        // if (item === '律师事务所合伙协议') {
        //   p3 = true
        // }
      });

      if (!p1) {
        this.$toast("请确保所需材料已全部上传");
        return;
      }

      // this.one = true
      this.WorkId = localStorage.getItem("WorkId");
      if (this.WorkId) {
        this.WorkId = this.WorkId;
      } else {
        this.WorkId = "abbd2786e3064963854599dfe136a4e0";
      }
      let setdata = {
        txnBodyCom: {
          work_id: this.$route.query.WorkId,
          matter_id: window.sessionStorage.getItem("matterid"),
          // matter_id: "73eae83fba0548958c84e3c8327d68c2",
          member_id: window.sessionStorage.getItem("userid"),
          // member_id: "9621837961d5407c853559a39879bbd2",
          files: this.arrs
        },
        txnCommCom: {
          tenant: "5300000000000",
          txn_itt_chnl_id: "0",
          txn_itt_chnl_type: "1"
        }
      };
      // this.one = true;
      this.$ajaxRequest("post", "/gsp/mng30008", setdata)
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
        .catch(response => {});
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

    //   inforParent(){
    // 	  //通知父组件inforParent
    // 	  console.log('qqqqqqqqqqqqqqq')
    // 	  this.$emit('clickInput')
    //   }
  }
};
</script>




<style lang="less" scoped>
@import "../../../assets/css/uploadSFT.less";

.example-upload_formItem {
  position: relative;
  text-align: left;
  padding: 0 0.3rem 0.6rem;
  border-bottom: 1px solid #e1e2e6;
  background: #fff;
}

.example-upload_formItem input {
  position: absolute;
  height: 44px;
  width: 100%;
  left: 0;
  top: 0;
}

.example-upload_formLabel {
  text-align: left;
  font-size: 16px;
  line-height: 44px;
}

.example-upload {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  .example-upload_list {
    display: flex;
    flex-wrap: wrap;
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

.blue {
  display: inline-block;
  width: 0.1rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.15rem;
}
</style>
