<template>
  <div style="margin-top:22px;">
    <!-- {{meg}} -->
    <el-card style="margin: 8px 14px;" v-show="false">
      <!-- <span class="fileinput-button">
        <span>上传</span>
        <input type="file">
      </span>-->

      <a href="javascript:;" class="a-upload">
        <input type="file" name="点击这里上传文件" id="file1" ref="uploadChange">点击这里上传文件
      </a>

      <div class="fullPath">全路径：{{objURLs}}</div>
      <div class="showFileName">文件名：{{objNames}}</div>
    </el-card>
    <el-card style="margin: 8px 14px;">
      <!-- <span class="fileinput-button">
        <span>上传</span>
        <input type="file">
      </span>-->

      <a href="javascript:;" class="a-upload">
        <input type="file" name="点击这里上传文件" id="file2" ref="uploadEpubDom">点击这里上传文件
      </a>

      <div class="fullPath">路径：{{objURLs}}</div>
      <div class="showFileName">文件名：{{objNames}}</div>
    </el-card>
    <!-- <el-card style="margin: 8px 14px;">
      <input name="file" type="file" id="pptPic" @change="getFile($event)">点击这里上传文件
      <div class="fullPath">全路径：{{objURLs}}</div>
      <div class="showFileName">文件名：{{objNames}}</div>
    </el-card>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "uploadEpubFile",
      meg: "uploadEpubFile",
      fileList: [],
      objURLs: null,
      objNames: null,
      filea: [],
      status: null,
      filet: "",
      ZDbucket: ""
    };
  },

  created() {
    // this.uploadChangeVal();
  },
  mounted() {
    var that = this;
    this.$refs.uploadChange.addEventListener("change", function() {
      alert(that);
      var reader = new FileReader();
      reader.readAsText(that.$refs.uploadChange.files[0], "utf-8"); //发起异步请求
      reader.onload = function(e) {
        // console.log(2,that.$refs.uploadChange.files[0].value);

        console.log(that.$refs.uploadChange.value);
        console.log(that.$refs.uploadChange.files);
        var flie = that.$refs.uploadChange.files[0];
        function getObjectURL(filex) {
          var url = null;
          if (window.createObjcectURL != undefined) {
            url = window.createOjcectURL(filex);
          } else if (window.URL != undefined) {
            url = window.URL.createObjectURL(filex);
          } else if (window.webkitURL != undefined) {
            url = window.webkitURL.createObjectURL(filex);
          }
          return url;
        }
        var objURL = getObjectURL(flie); //这里的objURL就是input file的 blob路径
        // var objURL = that.$refs.uploadChange.value; //这里的objURL就是input file的真实路径
        var objName = flie.name; //这里的objURL就是input file的真实路径
        that.objURLs = objURL;
        that.objNames = objName;
        that.$http
          .post(
            "api/portal/oss/uploadFileTOSS",
            { filepath: objURL, filename: objName },
            { emulateJSON: true }
          )
          .then(res => {
            this.$alert("上传" + res.data.model.msg, {
              confirmButtonText: "确定"
            });
          });
        var filename = document.getElementById("file1").value;
        // 这时的filename不是 importFile 框中的值
        alert(filename);
      };
    });
    this.$refs.uploadEpubDom.addEventListener("change", function() {
      var reader = new FileReader();
      reader.readAsText(that.$refs.uploadEpubDom.files[0], "utf-8"); //发起异步请求
      reader.onload = function(e) {
        // console.log(2,that.$refs.uploadEpubDom.files[0].value);
        that.objNames = that.$refs.uploadEpubDom.files[0].name;
        console.log(55555, that.$refs.uploadEpubDom.files);
        console.log(66666, that.$refs.uploadEpubDom.files[0]);
        // console.log(77777, e.target.result);
        // var thatRes =e.target.result;
        var thatRes = that.$refs.uploadEpubDom.files[0];
        that.uploadEpubOss(thatRes);
      };
    });
  },
  methods: {
    submitUpload(val) {
      alert(JSON.stringify(val));
    },
    uploadChangeVal() {
      console.log(this.$refs.uploadChange);
      var file = this.$refs.uploadChange.flies;
      var reader = new FileReader();
      var imgFile = "";
      reader.onload = function(e) {
        alert("读取完成");
        imgFile = e.target.result;
        console.log("imgFile", imgFile);
      };
      // reader.readAsDataURL(file)
      // this.$refs.uploadChange.change = function() {
      //   var filePath = this.$refs.uploadChange.value;
      //   // alert(filePath);
      //   if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
      //     var arr = filePath.split("\\");
      //     var fileName = arr[arr.length - 1];
      //   } else {
      //     this.$refs.fileerrorTi.html =
      //       "非jpg,png格式：您未上传文件，或者您上传文件类型有误！";

      //     return false;
      //   }
      // };
    },
    getFile: function(event) {
      var that = this;
      var MyTest = document.getElementById("pptPic").files[0];
      alert(that.getFileUrl("pptPic"));
      var reader = new FileReader();
      reader.readAsDataURL(MyTest);
      reader.onload = function(theFile) {
        // console.log(theFile.target.result);
        // alert(that.getFileUrl("pptPic"));
      };
    },
    getFileUrl(obj) {
      if (obj) {
        if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
          obj.select();
          return document.selection.createRange().text;
        } else if (window.navigator.userAgent.indexOf("Firefox") >= 1) {
          if (obj.files) {
            return obj.files.item(0).getAsDataURL();
          }
          return obj.value;
        }
        return obj.value;
      }
    },
    uploadEpubOss(filet) {
      this.$http.get("api/portal/oss/getEpubToken").then(res => {
        if (res.data.success == true) {
          var that = this;
          const result = res.body.model;
          const client = new OSS.Wrapper({
            region: result.region,
            accessKeyId: result.AccessKeyId,
            accessKeySecret: result.AccessKeySecret,
            bucket: result.bucket,
            stsToken: result.StsToken
          });
          that.ZDbucket = result.bucket;
          if (res.status === 200 || res.status === 304) {
            that.status = "finished";
            console.log("upload success!");
          } else {
            console.log(`error：error code ${res.status}`);
          }
          const Name = that.objNames;
          let date = new Date();
          let path =
            result.uploadPath +
            date.getFullYear() +
            (date.getMonth() + 1) +
            date.getDate() +
            date.getHours() +
            date.getMinutes() +
            date.getSeconds() +
            date.getMilliseconds() +
            Name.substr(Name.indexOf("."));
          console.log("path", path);
          client.multipartUpload(path, filet).then(function(result) {
            var resUrl;
            resUrl = result.res.requestUrls[0];

            if (that.ZDbucket == "zhongdu" || resUrl.indexOf("?") != -1) {
              resUrl = resUrl.split("?")[0];
            }
            console.log("result", resUrl);
            that.uploadOssFile(Name, resUrl);
          });
        }
      });
    },
    uploadOssFile(namev, pathv) {
      this.$http
        .post(
          "api/portal/oss/uploadFileTOSS",
          { filepath: pathv, filename: namev },
          { emulateJSON: true }
        )
        .then(res => {
          if (res.data.success == true) {
            this.$alert("上传成功", {
              confirmButtonText: "确定"
            });
            this.objNames = namev;
            this.objURLs = pathv;
          }
        });
    }
  }
};
</script>

<style scoped>
.fileinput-button {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.fileinput-button input {
  position: absolute;
  right: 0px;
  top: 0px;
  opacity: 0;
  font-size: 200px;
}
.fileinput-button span {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

/*a  upload */
.a-upload {
  padding: 4px 10px;
  height: 30px;
  line-height: 20px;
  position: relative;
  cursor: pointer;
  color: #888;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  display: inline-block;
  zoom: 1;
}

.a-upload input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}

.a-upload:hover {
  color: #444;
  background: #eee;
  border-color: #ccc;
  text-decoration: none;
}
/* a file */
.file {
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.file input {
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0; /*关键点*/
  filter: alpha(opacity=0); /*兼容ie*/
  font-size: 100px; /* 增大不同浏览器的可点击区域 */
  cursor: pointer;
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
</style>
