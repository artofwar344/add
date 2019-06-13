<template>
  <div class="settleForm">
    <towtop :name="titlename"/>
    <div class="header">拟迁出地公安派出所</div>
    <areapicker v-on:setValue="setValue"/>
    <div class="header">迁出信息</div>
    <div class="input_outside_box"><div class="input_box">
      <label>准迁编号</label>
      <input type="text" placeholder="请输入您的准迁编号" v-model="serialNumber" />
    </div>
    </div>
    <div class="header">登记人信息</div>
    <div class="input_outside_box">
    <div class="input_box">
      <label>与申请人关系</label>
       <Icon type="arrow-right" size="16" color="#999999"></Icon>
      <input type="text"  placeholder="请选择与申请人的关系" :value="relation" @click="open('pickerselect04')"/>
    </div>
    <div class="input_box">
      <label>姓名</label>
      <input type="text"  v-model="name"/>
    </div>
     <div class="input_box">
      <label>公民身份证</label>
      <input type="text"  v-model="idNumber" />
    </div>
    </div>

 <!-- 选择与申请人关系 -->
    <Huiselect
    ref="pickerselect04"
    position="bottom"
    :dataslots="selectRelation"
    class="example-select_item"
    @confirms="selectConfirmRelation"
 ></Huiselect>


     <div class="header">上传材料</div>
     <div class="photo_out_box">
        <div class="photo_box" v-for="(item, index) in stuffTitle" :key="index">
          <div class="headline">
            <div class="blueline"></div>{{item}}<sup style="color: red;">*</sup>
          </div>
          <div class="example-upload_formText">
            <div class="example-upload">

              <div v-if="flag" class="example-upload_list">
                <div class="example-upload_item" v-for="(subitem, subindex) in  uploadData[index]" :key="subindex">
                  <img :src="subitem.url" />
                  <span class="example-upload_item-cover">
                    <em class="example-upload_item-delete" @click="handleRemove(index, subindex, item.file_name)">X</em>
                  </span>
                </div>
              </div>

              <ccbUpload ref="upload1" :upload-id=item.file_name @uploadRes='handleRes' app-id="GSP_APP_001" bucket-id="GSP_PRIVATE" pic-url-pre-fixed="/image-service/downloadImage?" :upload-index='index'>
              <span class="example-upload_btn">添加</span>
            </ccbUpload>

            </div>
				  </div>
        </div>
     </div>


      <div class="buttonGroup">
        <button class="commonBtn" @click="temSave">临时保存</button>
        <button class="commonBtn greenButton" @click="jumpFaceID">确认提交</button>
      </div>
  </div>
</template>

<script>
import towtop from '../../../../components/HederTwo'
import ccbUpload from '../../../../components/ccb-upload'
import { mapMutations } from 'vuex'
import areapicker from '../components/areaPciker'

export default {

      data: function(){
        return {
          flag: false,
          uploadData: {},
          stuffTitle: [
            '迁入地公安机关的《准予迁入证明》',
            '迁入人居民户口簿（原件）首页、户主页、本人页'
          ],
          titlename:'迁出省外',
          city:[],
          county:[],
          policestation:[],
          serialNumber:'',
          name:'',
          idNumber:'',
          relation:[],
          selectCity: [{
            flex: 1,
            values: [{text:'昆明',value:'a'},{text:'大理',value:'b'},{text:'西双版纳',value:'c'}],
            showText:'text',
            className: 'slot1',
          }],
           selectCounty: [{
            flex: 1,
            values: [{text:'区县1',value:'a'},{text:'区县2',value:'b'},{text:'区县3',value:'c'}],
            showText:'text',
            className: 'slot1',
          }],
           selectPoliceStation: [{
            flex: 1,
            values: [{text:'派出所1',value:'a'},{text:'派出所2',value:'b'},{text:'派出所3',value:'c'}],
            showText:'text',
            className: 'slot1',
          }],
          selectRelation: [{
            flex: 1,
            values: [{text:'父亲',value:'a'},{text:'母亲',value:'b'}],
            showText:'text',
            className: 'slot1',
          }],
        }
      },
      components:{
        ccbUpload,
        towtop,
        areapicker
      },
      mounted () {
        this.setCurrentPage(this.$route.name)
      },
      methods:{
        ...mapMutations('publicSecurityStore', [
          'setFormData',
          'setCurrentPage'
        ]),
        open(picker) {
          this.$refs[picker].open();
          document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
        },
        setValue(data) {
          this[Object.keys(data)] = data[Object.keys(data)]['regnCode']
        },
        selectConfirmCity(selectedVal){
          if(typeof selectedVal[0] === 'object'){
            this.city = selectedVal[0].text;
          }else{
            this.city = selectedVal;
          }
        },
        selectConfirmCounty(selectedVal){
          if(typeof selectedVal[0] === 'object'){
            this.county = selectedVal[0].text;
          }else{
            this.county = selectedVal;
          }
        },
        selectConfirmPoliceStation(selectedVal){
          if(typeof selectedVal[0] === 'object'){
            this.policestation = selectedVal[0].text;
          }else{
            this.policestation = selectedVal;
          }
        },
        selectConfirmRelation(selectedVal){
          if(typeof selectedVal[0] === 'object'){
            this.relation = selectedVal[0].text;
          }else{
            this.relation = selectedVal;
          }
        },
        jumpFaceID () {
          let arry = []
          for (let item in this.uploadData) {
            this.uploadData[item].map(subItem => {
              arry.push(subItem)
            })
          }
          let data = {
            city: this.city,
            county: this.county,
            policestation: this.policestation,
            name: this.name,
            idNumber: this.idNumber,
            relative: this.relative,
            fileInfo: arry
          }
          this.setFormData(data)
          this.isAndroid_ios()
        },

        isAndroid_ios(uName, cardID) {
          var u = navigator.userAgent,
              app = navigator.appVersion;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

          if(isiOS) {
              this.callisiOS(uName, cardID);
          } else {
              this.callisAndroid(uName, cardID);
          }

        },

        //ios
        callisiOS(uName, cardID) {
          window.webkit.messageHandlers.LiveFace.postMessage({
            name: uName,
            cardID: cardID,
            sex: '1',
            url: 'http://128.192.179.84:8089/dist/index.html#/listtow'
          });
        },

        callisAndroid(uName, cardID){
          javascript:android.LiveFace(uName, cardID, '1',"http://128.192.179.84:8089/dist/index.html#/listone")
        },

        handleRemove(index, subindex, file_name) {
          //删除图片上传
          this.flag = false;
          this.uploadData[index].splice(subindex, 1);
          this.flag = true;
        },

        handleRes(data) {
				//添加图片上传
				console.log(data)
				this.flag = false;
        let index = data.index
        if (this.uploadData[data.index]) {
          this.uploadData[data.index].push({
            name: 'name',
            url: data.fileUrl
          })
        } else {
          this.uploadData = Object.assign({}, {[index]: [{
            name: 'name',
            url: data.fileUrl
          }]}, this.uploadData)
        }

        // console.log(this.uploadData)

				this.flag = true
      }
    }
  }
</script>

<style lang='less' scoped>
@import "../../../../assets/css/Settle.less";
@import "../../../../assets/css/upload.less";
</style>
