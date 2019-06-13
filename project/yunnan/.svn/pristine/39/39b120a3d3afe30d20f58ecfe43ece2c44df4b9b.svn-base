<template>
  <div>
    <div class="example-upload">
      <!--普通表单上传附件-->
      <div class="example-upload_formItem">
        <label class="example-upload_formLabel" for>女方户口本</label>
        <div class="example-upload_formText">
          <!--上传-->
          <div class="example-upload">
            <!--自定义上传图片-->
            <Upload
              action="http://128.196.221.172:8080/image-service/uploadImage?bucketId=GSP_PRIVATE&"
              :data="cdnParams"
              :fileList="uploadFileList"
              list-type="picture-card"
              :show-upload-list="showList"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :before-upload="handleBeforeUpload"
              :on-success="handleSuccess"
              :on-error="handleError"
              ref="upload"
            >
              <span class="example-upload_btn">添加</span>
            </Upload>
            <div class="example-upload_list">
              <div class="example-upload_item" v-for="item in uploadList">
                <template v-if="item.status === 'finished'">
                  <img :src="item.url">
                  <span class="example-upload_item-cover">
                    <em class="example-upload_item-delete" @click="handleRemove(item)">X</em>
                  </span>
                </template>
                <template v-else>
                  <Progresses
                    class="example-upload_progress"
                    v-if="item.showProgress"
                    :percent="item.percentage"
                    hide-info
                  ></Progresses>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="image-view">
        <div class="view">
          <div class="item" v-for="(item, index) in imgBaseone64">
            <span class="cancel-btn" @click="delImgone(index)">x</span>
            <img :src="item">
          </div>
        </div>
      </div>

      <!--普通表单上传附件-->
      <div class="example-upload_formItem">
        <input type="file" @change="getImgBasetow()" style="opacity: 0;">
        <label class="example-upload_formLabel" for>男方户口本</label>
        <div class="example-upload_formText">
          <!--上传-->
          <Upload ref="upload">
            <span class="example-upload_btn">添加</span>
          </Upload>
        </div>
      </div>

      <div class="image-view">
        <div class="view">
          <div class="item" v-for="(item, index) in imgBasetow64">
            <span class="cancel-btn" @click="delImgtow(index)">x</span>
            <img :src="item">
          </div>
        </div>
      </div>

      <div class="example-upload_formItem">
        <input type="file" @change="getImgBasethree()" style="opacity: 0;">
        <label class="example-upload_formLabel" for>女方身份证</label>
        <div class="example-upload_formText">
          <!--上传-->
          <Upload ref="upload">
            <span class="example-upload_btn">添加</span>
          </Upload>
        </div>
      </div>
      <div class="image-view">
        <div class="view">
          <div class="item" v-for="(item, index) in imgBasethree64">
            <span class="cancel-btn" @click="delImgthree(index)">x</span>
            <img :src="item">
          </div>
        </div>
      </div>

      <div class="example-upload_formItem">
        <input type="file" @change="getImgBasefour()" style="opacity: 0;">
        <label class="example-upload_formLabel" for>男方身份证</label>
        <div class="example-upload_formText">
          <!--上传-->
          <Upload ref="upload">
            <span class="example-upload_btn">添加</span>
          </Upload>
        </div>
      </div>
      <div class="image-view">
        <div class="view">
          <div class="item" v-for="(item, index) in imgBasefour64">
            <span class="cancel-btn" @click="delImg(index)">x</span>
            <img :src="item">
          </div>
        </div>
      </div>

      <div class="example-upload_formItem">
        <input type="file" @change="getImgBase()" style="opacity: 0;">
        <label class="example-upload_formLabel" for>结婚证</label>
        <div class="example-upload_formText">
          <!--上传-->
          <Upload ref="upload">
            <span class="example-upload_btn">添加</span>
          </Upload>
        </div>
      </div>
      <div class="image-view">
        <div class="view">
          <div class="item" v-for="(item, index) in imgBase64">
            <span class="cancel-btn" @click="delImg(index)">x</span>
            <img :src="item">
          </div>
        </div>
      </div>
      <!--普通表单上传附件 end-->
      <!-- <button class="button" @click='uploadLists()'>提交</button> -->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click="uploadLists"/>
      </div>
    </div>
    <div class="altbox" v-show="one">
      <div class="center">
        <h1>提示</h1>
        <div>您所办理的事项已经成功，请在我的事项中查看！
          <br>
          <p style="text-align: center; padding-top:.05rem;">请点击关闭按钮</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cenurl } from "../../../../components/toptow.js";
//cdn上传相关
import { cdnPathAdapter, adapterCCBUpload } from "../../../utils/fetch/cdn";

import mybutton from "../../../../components/MyButton";
export default {
  components: {
    mybutton
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
      //上传相关
      showList: false,
      preUrlFixed:
        "https://download.yn.gov.cn/image-service/downloadImage?bucketId=dangqun&ObjNm=", //图片回显路径
      preUrl: "",
      cdnUploadTokenObj: {},
      cdnParams: {},
      cdnHost: "",
      cdnUrl: "",
      uploadFileList: [],
      picCDNUrl: "",
      picVisible: false,
      //上传相关

      WorkId: "",
      imgBase64: [],
      imgBaseone64: [],
      imgBasetow64: [],
      imgBasethree64: [],
      imgBasefour64: [],

      defaultList: [
        {
          name: "pic1.jpeg",
          url:
            "https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"
        },
        {
          name: "pic2.jpeg",
          url:
            "https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"
        }
      ],
      imgName: "",
      visible: false,
      one: false,
      uploadList: []
    };
  },
  computed: {
    //            uploadList () {
    //                return this.$refs.upload ? this.$refs.upload.fileList : [];
    //            }
  },

  watch: {},
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
    //            console.log(this.$refs.upload.fileList)
  },
  methods: {
    //上传图片相关

    initCDNToken() {
      this.cdnUploadTokenObj.cdnUploadUrl =
        "https://download.yn.gov.cn/image-service/uploadImage?backetId=dangqun1";
      this.cdnUrl = this.cdnUploadTokenObj.uploadURL;
    },
    handleRemove(file) {
      // 从 upload 实例删除数据
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      // 因为上传过程为实例，这里模拟添加 url
      file.url =
        "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      alert(
        "文件 " + file.name + " 格式不正确，请上传 jpg 或 png 格式的图片。"
      );
    },
    handleMaxSize(file) {
      alert("文件 " + file.name + " 太大，不能超过 2M。");
    },
    handleBeforeUpload(file) {
      let filename = file.name.replace(/\s+/g, "");
      this.cdnParams.key = new Date().getTime() + "." + filename;
      this.cdnParams.ObjNm = this.cdnParams.key;
      this.cdnParams["uploadURL"] = this.cdnUploadTokenObj.uploadURL;
      adapterCCBUpload(file, this.cdnParams)
        .then(response => {
          let path = response.key || response.ObjNm;
          this.preUrl = this.preUrlFixed + response.ObjNm;
          path =
            this.cdnHost + cdnPathAdapter(path, this.cdnUploadTokenObj.type);
        })
        .catch(error => {
          console.log(error);
        });

      return false;
    },
    handleProgress(s) {
      console.log(s);
    },
    handlePictureCardPreview(file) {
      console.log("filefilefilefilefilefile", file);
      this.picCDNUrl = file.url;
      this.picVisible = true;
    },
    handleError(error, file) {
      console.log(error, file);
      alert("上传失败");
    },
    adapterCCBUpload(file, cdnParams) {},
    //上传图片相关

    // handleView (name) {
    //   this.imgName = name;
    //   this.visible = true;
    // },

    //获取图片base64实现预览

    isAndroid_ios() {
      var u = navigator.userAgent,
        app = navigator.appVersion;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

      if (isiOS) {
        this.callisiOS();
      } else {
        callisAndroid();
      }
    },

    //ios
    callisiOS() {
      window.webkit.messageHandlers.PopToApp.postMessage();
    },

    getImgBase() {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imgBase64.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    //删除图片
    delImg(index) {
      this.imgBase64.splice(index, 1);
    },

    getImgBaseone() {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imgBaseone64.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    //删除图片
    delImgs(index) {
      this.imgBaseone64.splice(index, 1);
    },

    getImgBasetow() {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imgBasetow64.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    //删除图片
    delImga(index) {
      this.imgBasetow64.splice(index, 1);
    },

    getImgBasethree() {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imgBasethree64.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    //删除图片
    delImgs(index) {
      this.imgBasethree64.splice(index, 1);
    },

    getImgBasefour() {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imgBasefour64.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    //删除图片
    delImgs(index) {
      this.imgBasefour64.splice(index, 1);
    },

    uploadLists() {
      this.one = true;
      this.WorkId = localStorage.getItem("WorkId");
      if (this.WorkId) {
        this.WorkId = this.WorkId;
      } else {
        this.WorkId = "abbd2786e3064963854599dfe136a4e0";
      }
      let setdata = {
        txnBodyCom: {
          work_id: this.WorkId,
          matter_id: window.sessionStorage.getItem("matterid"),
          member_id: window.sessionStorage.getItem("userid"),
          files: [
            {
              file_path: "dangqun1",
              file_name: "906.jpg"
            }
          ]
        },
        txnCommCom: {
          tenant: "5300000000000",
          txn_itt_chnl_id: "0",
          txn_itt_chnl_type: "1"
        }
      };
      this.$ajaxRequest("post", "/db/material/commit", setdata)
        .then(res => {
          console.log(res);
          this.one = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleRemove(file) {
      // 从 upload 实例删除数据
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      // 因为上传过程为实例，这里模拟添加 url
      file.url = "http://128.192.204.60:8180/directory/uploadMaterials";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      console.log(file);
      alert(file);
      alert(
        "文件 " + file.name + " 格式不正确，请上传 jpg 或 png 格式的图片。"
      );
    },
    handleMaxSize(file) {
      alert("文件 " + file.name + " 太大，不能超过 2M。");
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        alert("最多只能上传 5 张图片。");
      }
      return check;
    },
    handleProgress(s) {
      console.log(s);
    }
  }
};
</script>
<style lang="less" scoped>
.altbox {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;

  .center {
    background: #fff;
    padding: 0 0.36rem;
    padding-bottom: 0.2rem;
    margin-top: 1rem;
    text-align: left;
    font-size: 0.3rem;
    color: #333333;
    line-height: 0.48rem;
    h1 {
      text-align: center;
      font-weight: bold;
      padding: 0.4rem 0;
    }
    div {
      padding-bottom: 0.4rem;
    }
  }
}
</style>
<style scoped>
.clearboth::after {
  content: "";
  display: block;
  clear: both;
}
.image-view .addbox {
  float: left;
  position: relative;
  /*height:100px;
        width:100px;*/
  margin-bottom: 20px;
  text-align: center;
}
.image-view .addbox input {
  position: absolute;
  left: 0;
  height: 100px;
  width: 100px;
  opacity: 0;
}
.addbtn {
  float: left;
  height: 44px;
  width: 100%;
  line-height: 44px;
  color: #fff;
  font-size: 40px;
  background: #ccc;
  border-radius: 10px;
  opacity: 0;
}
.image-view .item {
  position: relative;
  float: left;
  height: 100px;
  width: 100px;
  margin: 10px 10px 0 0;
}
.image-view .item .cancel-btn {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 20px;
  height: 20px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  background: red;
  border-radius: 10px;
  cursor: pointer;
}
.image-view .item img {
  width: 100%;
  height: 100%;
}
.image-view .view::after {
  clear: both;
  content: "0";
  display: block;
  height: 0;
  width: 100%;
  font-size: 0;
}

.button {
  display: block;
  width: 5.9rem;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #fff;
  background: #2d7ffc;
  margin: 0 auto;
  border: 0;
  border-radius: 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: 0.32rem;
}

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
  font-size: 16px;
  color: #1378bf;
  line-height: 44px;
  cursor: pointer;
}

/* 以下是自定义图片列表的样式，不用删除 */
.example-upload_list {
  padding: 10px;
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
</style>
