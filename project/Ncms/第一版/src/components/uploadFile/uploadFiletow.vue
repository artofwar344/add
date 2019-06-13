<template>
  <div class="vue-uploader">
    <div class="file-list">
      <section v-for="(file, index) of files" :key="index" class="file-item draggable-item">
        <img :src="file.src" alt ondragstart="return false;"  style="width:120px;height:40px; ">
        <p class="file-name">{{file.name}}</p>
        <span class="file-remove" @click="remove(index)">+</span>
      </section>
      <section class="file-item">
        <div @click="add" class="add"   v-if="this.files.length <1" style="display:inline-block;width:120px;height:40px;">
          <img  v-if=" this.MoneyUrl" :src="EditData.imageUrl" alt="">
          <span v-else>+</span>
        </div>
      </section>
    </div>
    <section class="upload-func">
      <div class="progress-bar">
        <section v-if="uploading" :width="(percent * 100) + '%'">{{(percent * 100) + '%'}}</section>
      </div>
      <div class="operation-box">
        <el-button v-if="status == 'ready'" @click="submitAdd" type="success" round>上传</el-button>
        <el-button v-if="status == 'finished'" @click="finished" type="success" round>完成</el-button>
      </div>
    </section>
    <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" @change="fileChanged" ref="file" multiple="multiple" >
  </div>
</template>
<script>
  
  import {showLoading,hideLoading} from '@/utils/loading'
  export default {
    name: "uploadSub",
    data() {
      return {
        name: "uploadSub",
        meg: "helloworld",
        status: "ready",
        files: [],
        point: {},
        uploading: false,
        percent: 0,
        Value4:'',
        moneyUrlPath:""
      };
    },
    props: {
      MoneyUrl:  String // addModel.bigImage
    },
    created: function() {
      this.status = 'ready'
    },
    watch: {
      MoneyUrl(val) {
        this.MoneyUrl =val
        // console.log(val ,'图片 url');
      }
    },
    methods: {
      add() {
        this.$refs.file.click();
      },
      submitAdd() {
        showLoading()
        this.$http.get("api/portal/oss/token" ).then(res => {
          console.log(res,'updata');
          var that = this;
          const result = res.body.model;
          //  这里是OSS
          const client = new OSS.Wrapper({
            region: result.region,
            accessKeyId: result.AccessKeyId,
            accessKeySecret: result.AccessKeySecret,
            bucket: result.bucket,
            stsToken: result.StsToken
          });
          if (res.status === 200 || res.status === 304) {
            that.status = "finished";
            // console.log('upload success!')
          } else {
            // console.log(`error：error code ${res.status}`)
          }
          const fNum = that.files;
          for (var i = 0; i < fNum.length; i++) {
            var f = fNum[i].file;
            console.log(f.name,'文件名称');
            const isLt2M = f.size / 1024 / 1024 < 2;
            const Name = f.name;
            const suffix = Name.substr(Name.indexOf("."));
            console.log(suffix,'是什么');
            if (Name !=='赠送专栏模板.xlsx') {
              that.$message.error("请上传（赠送专栏模板.xlsx）文件");
                hideLoading()
              return false;
            }

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
                    suffix;
            client.multipartUpload(path, f).then(function(result) {
              console.log(result.url,'result path');
              that.Value4 =  result.url;
              console.log(that.Value4,'dfssafsdf');
              // that.$emit('emitChange4',that.Value4)
              that.xmls();
            });
            hideLoading()
          }
        });
      },
      xmls(){
        console.log(this.Value4,'value4 url');
        this.$http.post('api/portal/batchGive/batchGiveUserBook?editorName=luweipeng&filePath='+this.Value4,{params: this.$data.search}, {responseType: 'arraybuffer'}).then((res) => {
          console.log(res, '22');
          this.download(res.data)
        });
      },
      // 下载文件
      download(data) {
        console.log(data,'下载文件data result');
        if (!data) {
          return
        }
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '赠送专栏模板.xlsx')
        document.body.appendChild(link)
        link.click()
      },
      finished() {
        this.files = [];
        this.status = "ready";
      },
      remove(index) {
        this.files.splice(index, 1);
      },
      fileChanged() {
        const list = this.$refs.file.files;
        for (let i = 0; i < list.length; i++) {
          if (!this.isContain(list[i])) {
            const item = {
              name: list[0].name,
              size: list[0].size,
              file: list[0]
            };
            this.html5Reader(list[0], item);
            this.files.push(item);
          }
        }
        this.$refs.file.value = "";
      },
      // 将图片文件转成BASE64格式
      html5Reader(file, item) {
        const reader = new FileReader();
        reader.onload = e => {
          this.$set(item, "src", e.target.result);
        };
        reader.readAsDataURL(file);
      },
      isContain(file) {
        return this.files.find(
                item => item.name === file.name && item.size === file.size
        );
      }
    }
  };

</script>

<style scoped>
  .vue-uploader {
    display: inline-block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0 10px 5px 0;
    }

  .vue-uploader .file-list:after {
    content: "";
    display: inline-block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size: 0;
  }
  .vue-uploader .file-list .file-item img {
    height: 250px;
    width: 750px;
  }
  .vue-uploader .file-list .file-item {
    float: left;
    position: relative; 
    text-align: center;
  }

  .vue-uploader .file-list .file-item img {
    width: 260px;
    height: 80px;
    border: 1px solid #ececec;
  }
  .vue-uploader .add >img {
    width: 100%;
  }
  .vue-uploader .file-list .file-item .file-remove {
    position: absolute;
    right: 12px;
    display: none;
    top: 4px;
    width: 14px;
    height: 14px;
    color: white;
    cursor: pointer;
    line-height: 12px;
    border-radius: 100%;
    transform: rotate(45deg);
    background: rgba(0, 0, 0, 0.5);
  }

  .vue-uploader .file-list .file-item:hover .file-remove {
    display: inline;
  }

  .vue-uploader .file-list .file-item .file-name {
    margin: 0;
    height: 40px;
    word-break: break-all;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .vue-uploader .add {
    width: 105px;
    margin-left: 10px;
    float: left;
    text-align: center;
    border: 1px dashed #ececec;
    font-size: 30px;
    cursor: pointer;
    margin-top: 11px;
  }

  .vue-uploader .upload-func {
    display: flex;
    margin: 0px;
  }

  .vue-uploader .upload-func .progress-bar {
    flex-grow: 1;
  }

  .vue-uploader .upload-func .progress-bar section {
    margin-top: 5px;
    background: #00b4aa;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    transition: all 0.5s ease;
  }

  .el-button.is-round {
    border-radius: 20px;
    padding: 8px 23px;
  }

  .vue-uploader > input[type="file"] {
    display: none;
  }
</style>
