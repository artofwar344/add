<template>
  <div class="stuff-upload-modul-page">
    <div class="photo_out_box">
       <div class="photo_box" v-for="(item, index) in modelParams" :key="index">
          <div class="headline">

            <div class="blueline"></div><span class="middlethree">*</span>{{item.title}}
          </div>
          <div class="example-upload_formText">
            <div class="example-upload">

              <div v-if="flag" class="example-upload_list">
                <div class="example-upload_item" v-for="(subitem, subindex) in  uploadData[index]" :key="subindex">
                  <img :src="subitem.url" @click="previewHandle(subitem.url)"/>
                  <span class="example-upload_item-cover">
                    <em class="example-upload_item-delete" @click="handleRemove(index, subindex, item.file_name)">X</em>
                  </span>
                </div>
              </div>

              <ccbUpload ref="upload" :nameKey="currentKey"
              @uploadRes='handleRes'
              :is-befor-upload="true"
              @beforUpload="beforUpload"
                app-id="GSP_APP_001" bucket-id="GSP_PRIVATE" pic-url-pre-fixed="/image-service/downloadImage?" :upload-index='index'>
              <span class="example-upload_btn" @click="setKey(index)">+</span>
            </ccbUpload>

            </div>
				  </div>
        </div>
     </div>

     <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ccbUpload from '../../../../components/ccb-upload'
import imgPreview from '../../../../components/imgPreview'


export default {
  data() {
    return {
      flag: false,
      uploadData: {},
      currentKey: '',
      isShow: false,
      currentImgUrl: '',
      haveNum: 0
    }
  },
  props: [
    'modelParams',
    'temporaryData'
  ],
  created () {
    console.log(this)
  },
  watch: {
    temporaryData (val, oldValue) {
      if (val) {
        this.flag = true
        console.log(val)
        this.uploadData = val
      }
    }
  },
  components: {
    ccbUpload,
    imgPreview
  },
  computed: {},
  methods: {
    handleRes(data) {
				//添加图片上传
				console.log(data)
				this.flag = false;
        let index = data.index
        let bucketId = data.fileUrl.slice(data.fileUrl.indexOf('?'), data.fileUrl.indexOf('&')).split('=')[1]
          // console.log('+++++++++++++++++')
          // console.log(this)
          // console.log(data.index)
          // console.log(this.uploadData[data.index])
        if (this.uploadData[data.index]) {
          this.uploadData[data.index].push({
            file_name: data.ObjNm,
            file_path: bucketId,
            file_oriname: data.oldName,
            matter_file_id: data.matterFileId,
            url: data.fileUrl,
            index: data.index
          })
        } else {
          this.uploadData = Object.assign({}, {[index]: [{
            file_name: data.ObjNm,
            file_path: bucketId,
            file_oriname : data.oldName,
            matter_file_id: data.matterFileId,
            url: data.fileUrl,
            index: data.index
          }]}, this.uploadData)
        }

        // let arry = this.filterData()

        this.$emit('backData', this.uploadData)

				this.flag = true
    },

    handleRemove(index, subindex, file_name) {
      //删除图片上传
      this.flag = false;
      this.uploadData[index].splice(subindex, 1);

      if (this.uploadData[index].length === 0) {
        delete this.uploadData[index]
      }

      let arry = []

      // arry = this.filterData()

      this.$emit('backData', this.uploadData)

      this.flag = true;
    },

    filterData () {
      let arry = []

      let newArry = JSON.parse(JSON.stringify(this.uploadData))

      for (let item in newArry) {
        newArry[item].map(subItem => {
          delete subItem.url

          console.log(subItem)
          arry.push(subItem)
        })
      }

      return arry
    },

    keyFun (index, key) {
      // console.log('-----------')
      console.log(index, key)
      if (this.uploadData[index]) {
        let haveNum = this.uploadData[index].length

        return `${key}_${haveNum + 1}`
      }
    },

    setKey (index) {

      // console.log(this.modelParams[index])
      // let haveNum = 0

      // if (this.uploadData[index]) {
      //   haveNum = this.uploadData[index].length + 1
      // } else {
      //   haveNum = 1
      // }
      this.haveNum ++

      this.currentKey = `${this.modelParams[index].fileNameKey}_${this.haveNum}`
    },

    beforUpload (opts) {
      const _self = this
      // if (_self.isJPG(opts.file.name)) return _self.$toast('仅支持上传.jpg文件名的图片')

      // console.log((opts.file.size / 1000000) > 3.00 )

      if ((opts.file.size / 1000000) > 3.00 ) {
        this.$toast('仅支持3M以内大小的图片')
        return
      }

      _self.$refs.upload[opts.uploadIndex].nextUoload(opts.file, opts.cdnParams)
      // const reader = new FileReader()
      // reader.readAsDataURL(opts.file)
      // reader.onload = function (e) {
        // _self.sendData.imgUrl = reader.result // 或者 e.target.result都是一样的，都是base64码
      // }
    },

    isJPG (imgName) {
      // const _self = this
      let o = false
      const imgLastName = imgName.slice(imgName.lastIndexOf('.'))
      if (imgLastName.indexOf('jpg') === -1 && imgLastName.indexOf('JPG') === -1) {
        o = true
      }
      return o
    },

    setShow (data) {
      this.isShow = data
    },

    previewHandle (data) {
      this.isShow = true
      this.currentImgUrl = data
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../../assets/css/upload.less";

.stuff-upload-modul-page {
  .photo_out_box{
        background: #fff;
        padding: 0 0.36rem;

        .photo_box{
            border-bottom: 0.02rem solid #F1F3F6;
            background: #fff;
            padding: 0.4rem 0;

            .headline{
                font-size: 0.3rem;
                color: #333333;
                font-weight: bold;
                margin-bottom: 0.52rem;
            }

            // .addPhtoto{
            //     display:inline-block;
            //     background-image: url("../images/addPhoto@2x.png");
            //     @media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
            //         background-image: url("../images/addPhoto@3x.png")
            //     }
            //     width:1.6rem;
            //     height:1.6rem;
            //     background-size: 1.6rem;
            // }
            .photos{
                box-sizing: border-box;
                margin-right: 0.4rem;
                display:inline-block;
                width:1.6rem;
                height: 1.6rem;
                background: #F5F5F5;
                border: 0.02rem solid #ECECEC;
                border-radius: 0.04rem;
            }
        }
        .hui-upload{
            display: inline-block;
        }
    }

    .example-upload_formText {
      padding-top: 0;
    }
}
.photo_out_box .middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 5px;
  margin-right:3px;
}
</style>



