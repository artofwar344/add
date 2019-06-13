<template>
  <div class="no_approved">
    <towtop name="完善个人信息"/>
    <Field
      type="text"
      label="真实姓名"
      :value="textValue_zsxm"
      placeholder="请输入真实姓名"
      required
      disabled
      v-on:currentval="handleTextVal1">
    </Field>
    <Field
      type="text"
      label="身份证号码"
      :value="textValue_sfzh"
      placeholder="请输入身份证号码"
      required
      disabled
      v-on:currentval="handleTextVal2">
    </Field>
    <Field
      type="password"
      label="6位数字签名密码"
      :value="textValue_qmmm"
      placeholder="请输入6位数字签名密码"
      required
      style="ime-mode:Disabled" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
      v-on:currentval="handleTextVal3">
    </Field>
    <Field
      type="password"
      label="6位数字确认签名密码"
      :value="textValue_qrmm"
      placeholder="请再次输入签名密码"
      required
      style="ime-mode:Disabled" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
      v-on:currentval="handleTextVal4">
    </Field>
    <div class="h2">
      <h2>签名密码与材料签名环节使用，请您妥善保管</h2>
    </div>
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="next_btn"/>
    </div>
    <!--<img-preview :show="isShow" :data="currentImgUrl" @callback="setShow" />-->

  </div>
</template>
<script>
  import towtop from '@/components/HederTwo.vue'
  import mybutton from "@/components/MyButton"
  import ccbUpload from '@/components/ccb-upload'
  import imgPreview from '@/components/imgPreview'
  import {
    Toast
  } from 'mint-ui';

  export default {
    data() {
      return {
        btnData: [
          {
            text: '保存',
            disabled: false,
            isSure: true,
          }
        ],
        textValue_zsxm: '',
        textValue_sfzh: '',
        textValue_qmmm: '',
        textValue_qrmm: '',
//				arr:[
//				{
//					id:'01',
//					uploadId: [],
//					namekey:'',
//				}
//				],
        arrs: [],
        popupVisible: false,
        isShow: false,
        noReal: false,
        currentImgUrl: '',
      }
    },
    components: {
      towtop,
      mybutton,
      ccbUpload,
      imgPreview,
      Toast
    },
    created() {
      this.textValue_zsxm = sessionStorage.username
      this.textValue_sfzh = sessionStorage.cardid
      if (this.textValue_zsxm === 'null' || this.textValue_sfzh === 'null') {
        this.textValue_zsxm = ''
        this.$messagebox('请进行实名认证,若已经实名认证请重新登陆')
        this.noReal = true
      }
    },
    methods: {
      handleTextVal1(val) {
        this.textValue_zsxm = val;
      },
      handleTextVal2(val) {
        this.textValue_sfzh = val;
      },
      handleTextVal3(val) {

        if (String(val).length >= 6) {
          val = String(val).substring(0, 6)
        }
        this.textValue_qmmm = val;
        console.log(val)
      },
      handleTextVal4(val) {
        if (String(val).length >= 6) {
          val = String(val).substring(0, 6)
        }
        this.textValue_qrmm = val;
      },
      setUploadIndex(index) {
        const _self = this
        _self.uploadIndex = index
        console.log(index);
      },
//			handleRes (data) {
//
//				// 添加图片上传
//				const _self = this
//				_self.arr[data.index].uploadId.push({
//					file_name: data.ObjNm,
//					file_path: 'GSP_PRIVATE',
//					file_desc: data.uploadId,
//					url: data.fileUrl,
//					type: data.ObjNm.slice(data.ObjNm.indexOf('.') + 1, data.ObjNm.length),
//					origName: data.origFileName
//				})
//
//				this.filteData()
//			},
//			handleRemove (index, subindex, uploadId) {
//				// 删除图片上传
//				const _self = this
//				_self.arr[index].uploadId.splice(subindex, 1)
//
//				this.filteData()
//    }, // 图片
//    filteData () {
//    	let arrysource = JSON.parse(JSON.stringify(this.arr))
//    	console.log(arrysource)
//    	let arryturn = []
//    	for (let i in arrysource) {
//    		arrysource[i]['uploadId'].map(item => {
//          // 删除多余数据
//          delete item.url
//          delete item.type
//          delete item.origName
//          arryturn.push(item)
//        })
//    	}
//
//    	this.arrs = arryturn
//
//    },
//    setShow (data) {
//    	this.isShow = data
//    },

//    previewHandle (data, index) {
//    	console.log('kkk')
//
//    	if (data === 'pdf') {
//    		this.popupVisible = index
//    	} else {
//    		this.isShow = true
//    		this.currentImgUrl = data
//    	}
//    },

//    closePopup (data) {
//    	this.popupVisible = data
//    },
      checkInfo() {
        if (this.noReal) {
          this.$messagebox('请进行实名认证,若已经实名认证请重新登陆')
          return false
        }
        if (this.textValue_zsxm == '') {
          Toast({
            message: '请填写真实姓名',
            duration: 1000
          });
          return false
        }
        if (this.textValue_sfzh == '') {
          Toast({
            message: '请填写身份证号',
            duration: 1000
          });
          return false
        }
        if (!/^[0-9]{6}$/.test(this.textValue_qmmm)) {
          Toast({
            message: '请输入6位数字签名密码',
            duration: 1000
          });
          return false
        }
        if (this.textValue_qmmm != this.textValue_qrmm) {
          Toast({
            message: '两次密码不一致',
            duration: 1000
          });
          return false
        }
        return true
      },
      next_btn() {
        if (!this.checkInfo()) {
          return false
        }
        console.log(sessionStorage)
        this.$ajaxRequest('post', '/gsp/mng90050', {
          'txnBodyCom': {
            'chann_id': '1',

            'mobile_phone': sessionStorage.userphone,
            sign_pwd: this.textValue_qmmm,
            'name': sessionStorage.username,
            'id_card': sessionStorage.cardid

          }
        })
          .then((res) => {
            if (res.result) {
              let result = JSON.parse(res.result)
              if (result.register_status && result.register_status == '0') {
                sessionStorage.gsUserId = result.user_id
                this.$router.push('/aicIndex')
              } else {
                Toast({
                  message: result.msg,
                  duration: 1000
                });
              }
              console.log(result)
            }
            console.log(res)
          })
        this.$router.push('')
      }

    }
  }
</script>
<style scoped>
  .no_approved .h2 h2 {
    text-align: left;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: .24rem;
    padding-left: 0.2rem;
  }

  .no_approved .img_upload {
    background-color: #fff;
    padding-bottom: 0.3rem;
  }

  .no_approved .img_upload .header {
    text-align: left;
    font-size: 0.3rem;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    margin-bottom: 0.25rem;
  }

  .no_approved .img_upload .span {
    display: inline-block;
    width: 0.06rem;
    height: 0.24rem;
    background-color: #257BFF;
    margin-right: 0.15rem;
  }

  .no_approved .img_upload h2 {
    display: inline-block;
  }

  .no_approved .example-upload_btn {
    display: inline-block;
  }

  .no_approved .sfzimg {
    display: inline-block;
    width: 3.32rem;
    height: 2.08rem;
    margin-right: 0.2rem;
  }

  .no_approved .container input {
    width: 0 !important;

  }

  .no_approved .example-upload_item {
    text-align: left;
    padding-left: 0.25rem;
    padding-bottom: 0.2rem;
  }

  .no_approved .example-upload_item img {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-right: 0.2rem;
  }
</style>
