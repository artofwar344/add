<template>
  <div class="vue-uploader">
    <div class="file-list">
      <section v-for="(file, index) of files" :key="index" class="file-item draggable-item">
        <img :src="file.src" alt ondragstart="return false;">
        <p class="file-name">{{file.name}}</p>
        <span class="file-remove" @click="remove(index)">+</span>
      </section>
      <section v-if="status == 'ready'" class="file-item">
        <div @click="add" class="add"   v-if="this.files.length <1">
          <span>+</span>
        </div>
      </section>
    </div>
    <section class="upload-func">
      <div class="progress-bar">
        <section v-if="uploading" :width="(percent * 100) + '%'">{{(percent * 100) + '%'}}</section>
      </div>
      <div class="operation-box">
        <button v-if="status == 'ready'" @click="submitAdd">???</button>
        <!--<button v-if="status == 'finished'" @click="childClick">???</button>-->
      </div>
    </section>
    <input type="file" accept="image/*" @change="fileChanged" ref="file" multiple="multiple">
  </div>
</template>
<script>
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
      multiple:false,
      childValue: '',
    };
  },
  created: function() {},
  methods: {
    add() {
      this.$refs.file.click();
    },
    submitAdd() {
      this.$http.get("api/portal/oss/token", {}).then(res => {
        console.log(res,'new data')
        // console.log(res.body.model);
        const result = res.body.model;
        //  ??????OSS
        const client = new OSS.Wrapper({
          region: result.region,
          accessKeyId: result.AccessKeyId,
          accessKeySecret: result.AccessKeySecret,
          bucket: result.bucket,
          stsToken: result.StsToken
        });
        if (res.status === 200 || res.status === 304) {
          this.status = "finished";
          // console.log('upload success!')
        } else {
          // console.log(`error??error code ${res.status}`)
        }
        const fNum = this.files;
        for (var i = 0; i < fNum.length; i++) {
          var f = fNum[i].file;
          console.log(f.size);
          const isLt2M = f.size / 1024 / 1024 < 2;
          if (!isLt2M) {
            this.$message.error("?????2M?????.xlsx???");
            return false;
          }
          const Name = f.name;
          const suffix = Name.substr(Name.indexOf("."));
          let date = new Date();
          var that = this;
          let path=  result.uploadPath+date.getFullYear()+(date.getMonth()+1)+date.getDate()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds()+suffix;
          client.multipartUpload(path, f).then(function(result) {
            // console.log(result)
            // console.log(result.res.requestUrls)

            that.childValue = result.res.requestUrls;
            console.log(that.childValue,'?????????????')
            that.$emit('childByValue',that.childValue)

          });
        }
      });
      console.log(this.files, "????????");
    },
    // childClick () {
    //   // childByValue????????on?????????
    //   // ?????????this.childValue??????????
    //   this.$emit('childByValue', this.childValue)
    // },

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
    // ??????????BASE64???
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
  border: 1px solid #e5e5e5;
}

.vue-uploader .file-list {
  padding: 10px 0px;
}

.vue-uploader .file-list:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
  font-size: 0;
}

.vue-uploader .file-list .file-item {
  float: left;
  position: relative;
  width: 100px;
  text-align: center;
}

.vue-uploader .file-list .file-item img {
  width: 80px;
  height: 80px;
  border: 1px solid #ececec;
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
  width: 80px;
  height: 80px;
  margin-left: 10px;
  float: left;
  text-align: center;
  line-height: 80px;
  border: 1px dashed #ececec;
  font-size: 30px;
  cursor: pointer;
}

.vue-uploader .upload-func {
  display: flex;
  padding: 10px;
  margin: 0px;
  background: #f8f8f8;
  border-top: 1px solid #ececec;
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

.vue-uploader .upload-func .operation-box {
  flex-grow: 0;
  padding-left: 10px;
}

.vue-uploader .upload-func .operation-box button {
  padding: 4px 12px;
  color: #fff;
  background: #007acc;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

.vue-uploader > input[type="file"] {
  display: none;
}
</style>
