<!--
/*
 * @Author: Gary
 * @Date: 2017-09-05 10:58:54
 * @Last Modified by: yuxiaojing
 * @Last Modified time: 2018-05-09 15:10:49
 * 图片上传
 */
使用方法
  <upload-image fileId="coverImg" :imgUrl="imgUrl" :width="345" :height="180" @getUrl="fn"></upload-image>
  属性：
    fileId 组件ID
    imgUrl 必传，图片路径，字符串为单张图片，数组为多张图片
    width,height 裁剪宽高，传入后即为裁剪
    msg 提示信息
  方法：
    @getUrl="fn" 必传，子组件传值，得到value并赋值给图片资源
      fn(value){
        this.img = value;
      },
-->
<template>
  <div>
    <!-- 单张图片上传 -->
    <el-upload v-if="!isListImg" drag :id="fileId" :data="postData" :action="url" :on-success="handleSingleSuccess"
               :before-upload="beforeUpload" :show-file-list="false">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <div v-else>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </div>
      <div class="el-upload__tip" slot="tip">{{msg}}</div>
    </el-upload>
     
          <el-button type="success" @click="uploadCrop()">确 定</el-button>
         
  </div>
</template>

<script>
  // import Cropper from 'cropperjs'
  // import 'cropperjs/dist/cropper.min.css'
  // import OSS from 'ali-oss'
  // import co from 'co'
   

  export default {
    name: 'upload-image',
    data() {
      return {
        url: process.env.BASE_API + '/pub/upload/file',
        postData: {token: this.constant.QINIU_UPLOAD.token},
        headers: {
          'X-Auth-Token': window.sessionStorage.getItem('staff_uc')
         // 'X-Auth-Token': window.sessionStorage.getItem('Admin-Token')
        },
        imageUrl: '', // 单张图url
        dialogShowImageVisible: false,  // 预览弹窗
        dialogImageUrl: '', // 弹窗预览图片地址
        crop: false,  // 是否裁切
        dialogCropVisible: false,  // 图片裁切弹窗
        scaleX: -1,
        scaleY: -1,
        myCroppa: {}, // 图片裁切参数
        cropImg: '',  // 图片裁切图片地址
        loading: false,  // 上传loading
        showMultiple: true  // 列表上传刷新
       
      };
    },
    props: {
      fileId: {type: String, default: 'upload-image'}, // ID
      imgUrl: {type: [String, Array], require: true}, // 图片url
      width: {type: Number, default: null},   // 裁切宽度
      height: {type: Number, default: null},   // 裁切高度
      modal: {type: Boolean, default: true},   // 是否要遮罩层
      msg: {type: String, default: '只能上传jpg/png/gif文件，且不超过6M'}  // tips
    },
    created() {
      if (this.width) {
        this.crop = true;
      }
      if (typeof this.imgUrl === 'string') {  // 单张图片
        this.isListImg = false;
        this.imageUrl = this.imgUrl;
        this.resize();  // 重置容器大小
      } else {  // 图片列表
        this.isListImg = true;
        this.imageList = this.addListName(this.imgUrl).slice();
      }
    },
    methods: {
      // 上传前验证
      beforeUpload(file) {
        const types = 'image/jpeg,image/png,image/gif';
        const isImg = types.indexOf(file.type) !== -1;
        const isLt2M = file.size / 1024 / 1024 < 6;
        if (!isImg) {
          this.$message.error('上传图片只能是 JPG,PNG 格式!');
          return false;
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 6MB!');
          return false;
        }
        if (file.type === 'image/gif') {
          return isImg && isLt2M;
        }
        if (this.crop && isImg && isLt2M) {
          this.dialogCropVisible = true;
          this.cropImg = URL.createObjectURL(file);
          this.getCrop();
          return false;
        }

        if (this.constant.UPLOAD_SERVER === 'oss') {
          this.ossUploadFile(file);
          return false;
        }
        return isImg && isLt2M;
      },
      // 阿里云上传原图
      ossUploadFile(file) {
        const client = new OSS.Wrapper(this.constant.ALI_OSS);
        const storeAs = Date.now() + '';
        const handleResult = result => {
          if (result.res.status === 200) {
            if (!this.isListImg) {
              this.imageUrl = result.res.requestUrls[0];
              this.$emit('getUrl', this.imageUrl);
              this.resize(this.width, this.height);
            } else {
              this.imageList.push({name: result.name, url: result.res.requestUrls[0]});
              this.showMultiple = true;
              this.$emit('getUrl', this.removeListName(this.imageList))
            }
            this.dialogCropVisible = false
          }
        }
        // 100kb 以上使用分片上传 < 100kb client.multipartUpload(Date.now() + '', file)
        if (file.size >= 100 * 1024) {
          co(function* () {
            // const result = yield client.multipartUpload(storeAs, file);
            // console.log(result)
            const head = yield client.head(storeAs) // head 是上传结束后的object
            handleResult(head)
            // console.log(head)
          }).catch(err => {
            console.log(err)
          })
        } else {
          client.multipartUpload(storeAs + '', file).then(result => handleResult(result))
        }
      },

      // 图片裁切
      getCrop() {
        setTimeout(() => {
          this.cropper = new Cropper($('.container > img').get(0), {
            // aspectRatio: this.width / this.height,
            aspectRatio: this.width / this.height, 
            dragMode: 'move',
            // preview: $('.preview').get(0),
            viewMode: 1,
            preview: '.preview',
            ready: () => {
              this.croppable = true;
            }
          });
        }, 200)
      },

      // 把base64的数据专成blob格式，用于上传到oss
      _base64ToBlob(base64) {
        const binary_string = window.atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binary_string.charCodeAt(i);
        }
        // return bytes.buffer;
        // return new File([bytes], Date.now(), { type: 'image/png', lastModified: Date.now() })
        return new Blob([bytes], {type: 'image/png'});
      },

      // 图片裁切上传提交
      uploadCrop(blob) {
        this.loading = true;
        this.showMultiple = false;
        let imageUrl = 'data:image/jpeg;base64,' + this.cropper.getCroppedCanvas().toDataURL().split(',')[1];     
          // console.log(this.cropper.getCroppedCanvas().toDataURL().split(',')[1])
        this.axios.post('/pub/upload/file-base64', {fileBase64: imageUrl}).then(res => {
          if (res.code === 200) {
            this.loading = false;
            this.imageUrl = res.data.url;
            this.$emit('getUrl', res.data);
            this.resize(this.width, this.height);
            this.dialogCropVisible = false;
          } else {
            console.log(res.message);
          }
        });
      },
      // 图片改变后重置容器大小
      resize(w, h) {
        setTimeout(() => {
          const $wrap = $('#' + this.fileId);
          if (this.crop) {
            $wrap.find('.avatar').css({width: this.width, height: this.height});
          }
          const width = w ? w : $wrap.find('.avatar').width();
          const height = h ? h : $wrap.find('.avatar').height();
          $wrap.find('.el-upload-dragger').css({width, height});
        }, 500);
      },


      // 单张图片上传
      // 上传成功后处理
      handleSingleSuccess(res) {
        // console.log(res);
        // this.imageUrl = res.data.url;
        // this.$emit('getUrl', res.data);
        // this.imageUrl = this.constant.QINIU_UPLOAD.link + res.key;
        this.imageUrl = res.data.url;
        this.$emit('getUrl', res.data);
        this.resize(this.width, this.height);
      }, 
      
      // 删除图片
      handleMultipleRemove(file) {
        if (file) {
          for (let i = 0; i < this.imageList.length; i++) {
            if ((file.response && this.imageList[i].name === file.response.key)
              || this.imageList[i].name === file.name) {
              this.imageList.splice(i, 1);
            }
          }
          this.$emit('getUrl', this.removeListName(this.imageList));
        }
      },
      // 预览图片
      handleMultipleCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogShowImageVisible = true;
      },
      // 图片数组重置
      addListName(list) {
        const resList = [];
        for (let i = 0; i < list.length; i++) {
          resList.push({name: i, url: list[i]});
        }
        return resList;
      },
      removeListName(list) {
        const resList = [];
        for (let i = 0; i < list.length; i++) {
          resList.push(list[i].url);
        }
        return resList;
      }
    },
      mounted() {
      //  console.log(this.props)
      
       return ''
      }
  }
</script>

<style lang="scss" scoped>
  .avatar {
   //   max-width: 300px;
   max-width: 390px;
  }

  .crop-wrap {
    overflow: hidden;
  }

  .container {
    height: 400px;
  }

  .tools {
    text-align: center;
    clear: both;
  }
</style>
