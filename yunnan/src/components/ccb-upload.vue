<template>
  <div>
    <div ref='inputBox' class="container" @click="picFile">
      <input ref="input" type="file" accept="*" @change="OnPicPreview" id="file" name="icons" class="goodsIcon"
             style="width:100px"/>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { adapterCCBUpload } from '../utils/fetch/cdn'
export default {
  name: 'ccbUpload',
  data () {
    return {
      imgOldName: '',
      filetype:['jpg','png','jpeg','pdf'],
      fileUrlIp:'',
      origFileName: '',
      fileType:Object
    }
  },
  props: {
    bucketId: '',
    appId: '',
    picUrlPreFixed: '',
    uploadId: '',
    uploadIndex: '',
    isBeforUpload: false,
    nameKey: ''
  },
  created () {
    this.$on('clickInput', () => {
      this.picFile()
    })
  },
  methods: {
    OnPicPreview (e) {
      if (window.sessionStorage.getItem("CHNL_ID") === 'CC03C004') {
        this.appId = 'ccbynt#ynzwAppId'
        console.log(this.appId)
      }
      var file = e.target.files[0]
      this.origFileName = file.name
      let timestamp = Date.parse(new Date())
      let imgName = ''
      if (this.nameKey) {
        let e = this.nameKey.match(/abcd[0-9]{5}\_[0-9]+$/g)
        if (e) {
          imgName = this.nameKey + file.name.replace(/.+\./, '.')
          this.imgOldName =  this.nameKey + file.name.replace(/.+\./, '.')
        } else {
          imgName = this.nameKey + timestamp + '.' + file.name.replace(/.+\./, '')
        }
      } else {
        if (this.uploadId === '变更后章程') {
          imgName = 'bghzc_bghzc_afmdatcl_' + timestamp + '.' + file.name.replace(/.+\./, '')
        } else if (this.uploadId === '合伙人会议决议') {
          imgName = 'hhrhyjy_hhrhyjy_ptnpsnmtgrsl_' + timestamp + '.' + file.name.replace(/.+\./, '')
        } else if (this.uploadId === '律师事务所合伙协议') {
          imgName = 'hhrhyjy_hhrhyjy_lwroffcpagrm_' + timestamp + '.' + file.name.replace(/.+\./, '')
        } else {
          imgName = file.name
        }
      }
      var urls = window.location;
      let fileUrlIpcode=''
        if(urls.hostname=='web.yn.gov.cn'){
            fileUrlIpcode="https://download.yn.gov.cn"
        }else{
            fileUrlIpcode='http://128.196.221.86:8080'
        }
      var cdnParams = {
        uploadURL: fileUrlIpcode+'/image-service/uploadImage?bucketId=' + this.bucketId + '&C-App-Id=' + encodeURIComponent(this.appId),
        ObjNm: imgName
      }
      console.log(cdnParams,this.isBeforUpload)
      e.target.value = ''
      if (this.isBeforUpload) {
        this.$emit('beforUpload', {file, cdnParams, uploadIndex: this.uploadIndex})
      } else {
        this.nextUoload(file, cdnParams)
      }
    },
    nextUoload (file, cdnParams) {
   
      let fType = file.name;
          fType = fType.split(".");
          if(fType[1]=="pdf"){
              this.fileType =  this.$toast({
                message: '上传中...',
                iconType: 'loading',
                manualClose: true
              });
          }
      console.log(file)
      const _self = this
      if(this.$route.path=="/unitBasicInfo"||this.$route.path=="/staffInfo"){
        if(file.size>=2097152){
          this.$toast("上传图片不可大于2M，请重新选择！")
          this.close()
          return false
        }
      }else if(this.$route.path=='/changeimg'||this.$route.path=='/lsbgzyjg_three'||this.$route.path=='/bgfzrxk_three'||this.$route.path=='/bghhxyxk_three'||this.$route.path=='/bghhxyxk_two'||this.$route.path=='/bgmcxk_four'||this.$route.path=='/zyzszx_two'||this.$route.path=='/zzls_three'||this.$route.path=='/zzlsthree'){
        if(file.size>=314572800){
          this.$toast("上传附件不可大于300M，请重新选择！")
          this.close()
          return false
        }
      }else{
        if(file.size>=3145728){
          this.$toast("上传图片不可大于3M，请重新选择！")
          this.close()
          return false
        }
      }
      adapterCCBUpload(file, cdnParams).then((response) => {
        var urls = window.location;
        if(urls.hostname=='web.yn.gov.cn'){
            this.fileUrlIp="https://download.yn.gov.cn"+this.picUrlPreFixed
        }else{
            this.fileUrlIp='http://128.196.221.86:8080'+this.picUrlPreFixed
        }
        _self.$emit('uploadRes', {
          'fileUrl': this.fileUrlIp + 'bucketId=' + this.bucketId + '&C-App-Id=' + encodeURIComponent(this.appId) + '&ObjNm=' + response.ObjNm+ '&C-Dynamic-Password-Foruser=' + window.sessionStorage.getItem('usertoken'),
          'ObjNm': response.ObjNm,
          'uploadId': this.uploadId,
          'index': this.uploadIndex,
          'oldName': this.imgOldName,
          'matterFileId': '',
          'origFileName': this.origFileName
        })
        this.close()
        console.log('response', response)
      }).then((error) => {
        this.close()
        console.log('error', error)
      })
    },
    picFile () {
      // 模拟点击输入框
      // let input = document.getElementById('file')
      this.$refs['input'].click()
    },
    close(){
      this.fileType.close();
    }

  }
}
</script>

<style scoped>
	#file {
		height: 0;
		width: 0;
		visibility: hidden;
	}
</style>
