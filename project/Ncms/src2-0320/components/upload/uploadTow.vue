<template>
  <div class="vue-uploader">
    <div class="file-list">
      <section v-for="(file, index) of files" :key="index" class="file-item draggable-item">
        <img :src="file.src" alt ondragstart="return false;"  :style="imagess">
        <p class="file-name">{{file.name}}</p>
        <span class="file-remove" @click="remove(index)">+</span>
   </section>   <!--  v-if="status == 'ready'" -->
      <section class="file-item">
        <div @click="add" class="add" v-if="this.files.length <1" :style="{height: this.heights +'px'}">
          <img v-if=" this.addModel.imageUrl" :src="addModel.imageUrl" alt=""  :style="imagess">
          <span v-else  :style="imagess">+</span>
        </div>
      </section>
    </div>
    <section class="upload-func">
      <div class="progress-bar">
        <span v-text="modelnimg?'宽:'+modelnimg.width+'px;高:'+modelnimg.height+'px':''"></span>
        <section v-if="uploading" :width="(percent * 100) + '%'">{{(percent * 100) + '%'}}</section>
      </div>
      <div class="operation-box">
        <button v-if="status == 'ready'" @click="submitAdd">专题列表</button>
        <button v-if="status == 'finished'" @click="finished">完成</button>
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
      percent: 0 ,
      Value2: '' ,
      addModels:'',
      imgWidth:null,
      imgHeight:null,
      heights:'',
      widths:'',
      ZDbucket:''
    };
  },
   props: {
      addModel: Object, // addModel.bigImage  
      modelnimg:Object
     
  },
  created: function() {
    // console.log( this.imageUrl); 
  },
  computed :{
    imagess () {  
      this.widths =  this.modelnimg.width
      this.heights = this.modelnimg.height
      if(this.modelnimg.height > 200 ) {
        this.widths = this.modelnimg.width /3;
        this.heights =  this.modelnimg.height /3;
      } 
      
      return {
        width : this.widths  +'px',
        height : this.heights +'px'
      } 
    }
  },
  methods: {
    add() {
      this.$refs.file.click();
    },
    submitAdd() {
      this.$http.get("api/portal/oss/token", {}).then(res => {
        // console.log(res,'new data')
        // console.log(res.body.model);
        const result = res.body.model;
        var that = this;
        //  这里是OSS
        const client = new OSS.Wrapper({
          region: result.region,
          accessKeyId: result.AccessKeyId,
          accessKeySecret: result.AccessKeySecret,
          bucket: result.bucket,
          stsToken: result.StsToken
        });
        that.ZDbucket = result.bucket;
        if (res.status === 200 || res.status === 304) {
          this.status = "finished";
          // console.log('upload success!')
        } else {
          // console.log(`error：error code ${res.status}`)
        }
        const fNum = this.files;
        for (var i = 0; i < fNum.length; i++) {
          var f = fNum[i].file;
        //  console.log(f.size);
          const isLt2M = f.size / 300 / 1024 < 2;
          const isWidth =this.imgWidth < this.modelnimg.width +5 &&this.imgWidth > this.modelnimg.width-5 
          
          const isHeight = this.imgHeight < this.modelnimg.height+5 &&this.imgHeight > this.modelnimg.height-5

          if (!isLt2M) { 
            this.$alert( '请上传300Kb以下的 文件', '', {confirmButtonText: '确定'})
            return false;
          }
          while(!isWidth || !isHeight) {
               this.$alert('请传宽：'+this.modelnimg.width+'px,高：'+this.modelnimg.height+'px', '传入正确宽高的图片', {confirmButtonText: '确定'})
               return false
          }
          const Name = f.name;
          const suffix = Name.substr(Name.indexOf("."));
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
              that.Value2 =  result.res.requestUrls[0];
            if( that.ZDbucket =='zhongdu' ||that.Value2.indexOf("?") != -1) {
              that.Value2 = that.Value2.replace('http://zhongdu.oss-cn-beijing.aliyuncs.com','http://zdimg.lifeweek.com.cn')  
              that.Value2 = that.Value2.split("?")[0];
              //  console.log(that.Value2 ,'替换后路径');
            }  
            that.$emit('emitChange2',that.Value2)
          });
        }
      });
    // console.log(this.files, "是内容吗？");
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
      var that_ =this
      reader.onload = e => {
        // this.$set(item, "src", e.target.result); 
        let data = e.target.result
        let img = new Image()
        img.src = data
        img.onload = function () {
          that_.imgWidth = img.width;
          that_.imgHeight = img.height; 
          // console.log('width', img.width)
          // console.log('height', img.height)
        }
        that_.$set(item, "src", e.target.result);
        that_.$set(item,'width',img.width)
        that_.$set(item,'height',img.height)
      };
      reader.readAsDataURL(file);
    },
    isContain(file) {
      return this.files.find(
        item => item.name === file.name && item.size === file.size
      );
    }
  },
  watch:{
    addModel(val) { 
      this.addModel =val;
    },
     modelnimg(val) {
      this.modelnimg =val
    }
  }
};
</script>

<style scoped>
.vue-uploader {
  display: inline-block;
  width: 30%;
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
  /* width: 100px; */
  width: 100%; 
  text-align: center;
}

.vue-uploader .file-list .file-item img {
  width: 260px;
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
  width: 260px;
  height: 80px;
  margin-left: 10px;
  float: left;
  text-align: center;
  line-height: 80px;
  border: 1px dashed #ececec;
  font-size: 30px;
  cursor: pointer;
}
 .vue-uploader .add >img {
  width: 100%;
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
