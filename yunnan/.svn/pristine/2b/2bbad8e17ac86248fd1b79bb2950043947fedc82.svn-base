<template>
  <div>
    <!--<div class="example-upload">
            &lt;!&ndash;普通表单上传附件&ndash;&gt;
            <div class="example-upload_formItem">
                <input type="file" @change="getImgBaseone()" style="opacity: 0;">
                <label class="example-upload_formLabel" for="">女方户口本</label>
                <div class="example-upload_formText">
                    &lt;!&ndash;上传&ndash;&gt;
                    <Upload ref="upload" >
                        <span class="example-upload_btn">添加</span>
                    </Upload>
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



            &lt;!&ndash;普通表单上传附件&ndash;&gt;
            <div class="example-upload_formItem">
                <input type="file" @change="getImgBasetow()" style="opacity: 0;">
                <label class="example-upload_formLabel" for="">男方户口本</label>
                <div class="example-upload_formText">
                    &lt;!&ndash;上传&ndash;&gt;
                    <Upload ref="upload" >
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
                <label class="example-upload_formLabel" for="">女方身份证</label>
                <div class="example-upload_formText">
                    &lt;!&ndash;上传&ndash;&gt;
                    <Upload ref="upload" >
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
                <label class="example-upload_formLabel" for="">男方身份证</label>
                <div class="example-upload_formText">
                    &lt;!&ndash;上传&ndash;&gt;
                    <Upload ref="upload" >
                        <span class="example-upload_btn">添加</span>
                    </Upload>
                </div>
            </div>
            <div class="image-view">

        <div class="view">
            <div class="item" v-for="(item, index) in imgBasefour64">
                <span class="cancel-btn" @click="delImgfour(index)">x</span>
                <img :src="item">
            </div>
        </div>
    </div>






    <div class="example-upload_formItem">
                <input type="file" @change="getImgBase()" style="opacity: 0;">
                <label class="example-upload_formLabel" for="">结婚证</label>
                <div class="example-upload_formText">
                    &lt;!&ndash;上传&ndash;&gt;
                    <Upload ref="upload" >
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
            &lt;!&ndash;普通表单上传附件 end&ndash;&gt;
            <button class="button" @click='uploadLists()'>提交</button>
        </div>
        <div class='altbox' v-show="one">
            <div class="center">
            <h1>提示</h1>
            <div>您所办理的事项已经成功，请在我的事项中查看！<br />
                <p style="text-align: center; padding-top:.05rem;">请点击关闭按钮</p>
            </div>

        </div>
    </div>-->
    <div class="example-upload" v-if="arr.length">
      <div class="example-upload-cycle" v-for="(item,index) in arr" :key="index">
        <!-- //上传图片循环.. -->
        <div class="example-upload_formItem">
          <label class="example-upload_formLabel">{{ item.file_name }}</label>
          <div class="example-upload_formText">
            <!--上传-->
            <div class="example-upload">
              <!--自定义上传图片-->
              <ccbUpload
                :name-key="item.namekey"
                :upload-id="item.file_name"
                @uploadRes="handleRes"
                app-id="GSP_APP_001"
                bucket-id="GSP_PRIVATE"
                pic-url-pre-fixed="/image-service/downloadImage?"
                :upload-index="index"
              >
                <span class="example-upload_btn">添加</span>
              </ccbUpload>
              <div v-if="flag" class="example-upload_list">
                <div
                  class="example-upload_item"
                  v-for="(subitem,subindex) in item.uploadId"
                  :key="subindex"
                >
                  <img :src="subitem" @click="previewHandle(subitem)">
                  <span class="example-upload_item-cover">
                    <em
                      class="example-upload_item-delete"
                      @click="handleRemove(index,subindex,item.uploadId)"
                    >X</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <buttn class="buttn" @click='uplad'>提交</buttn> -->
    </div>
    <div class="alertimg">
      <input type="checkbox" class value="01" v-model="yuedu">我已阅读并同意
      <span @click="showcns">《承诺书》</span>。
    </div>
    <!-- <button class="button" @click='uploadLists'>提交</button> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="uploadLists"/>
    </div>
    <div class="cns altbox" v-show="cns">
      <div class="center cnsbox">
        <h1>承诺书</h1>
        <div
          class="cnsboxcen"
        >以上婚育情况，夫妻双方如有虚假或隐瞒，造成违法生育的，愿意按照《云南省人口与计划生育条例》相关规定接受处罚，并由夫妻双方共同承担相应的法律责任。</div>
        <div class="cnsbutton" @click="showcns">同意</div>
      </div>
    </div>

    <div class="altbox" v-show="one">
      <div class="center">
        <h1>提示</h1>
        <!-- <div>您好,您的申请已提交成功，请在首页我的-证照中进行查看!<br />
              本证使用期间需加盖公章，请持办理人身份证至{{maplist}}窗口领取加盖公章的生育登记服务证<br>  
          <p style="text-align: center; padding-top:.05rem;">请点击关闭按钮</p>
        </div> -->

         <div>您好，您的申请已受理，请到“我的办事”中查看办理进度。<br />
              注：本证使用期间需加盖公章，请持本人身份证至{{maplist}}卫生服务中心窗口领取加盖公章的生育登记服务证。<br>  
          <p style="text-align: center; padding-top:.05rem;">请点击关闭按钮</p>
        </div>
      </div>
    </div>
    <div class="altbox" v-show="errorinfos">
      <div class="center">
        <h1>提示</h1>
        <div>{{errorinfo}}
          <br> 
          <p style="text-align: center; padding-top:.05rem;">请点击关闭按钮</p>
        </div>
      </div>
    </div>
    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
    <!-- {{arror}} -->
  </div>
</template>

<script>
import { cenurl } from "../../../../components/toptow.js";
import ccbUpload from "../../../../components/ccb-upload";
import imgPreview from "../../../../components/imgPreview";
import mybutton from "../../../../components/MyButton";
export default {
  components: {
    mybutton,
    ccbUpload,
    imgPreview
  },
  data() {
    return {
      errorinfo:'',
      errorinfos:false,
      // arror:'',
      btnData: [
        {
          text: "提交",
          disabled: false,
          isSure: true
        }
      ],
      cns: false,
      maplist:'',
      isShow: false,
      currentImgUrl: "",
      yuedu: "",
      WorkId: "",
      imgBase64: [],
      imgBaseone64: [],
      imgBasetow64: [],
      imgBasethree64: [],
      imgBasefour64: [],
      imgname: [],
      imgcode: [],
      arr: [
        { file_name: "夫妻结婚证", uploadId: [], namekey: "marrcrdt_" },
        { file_name: "男方户口簿", uploadId: [], namekey: "mrsdnc_" },
        { file_name: "女方户口簿", uploadId: [], namekey: "frsdnc_" },
        { file_name: "男方身份证（正面）", uploadId: [], namekey: "midcard_" },
        { file_name: "男方身份证（反面）", uploadId: [], namekey: "midcard_" },
        { file_name: "女方身份证（正面）", uploadId: [], namekey: "fidcard_" },
        { file_name: "女方身份证（反面）", uploadId: [], namekey: "fidcard_" }
      ],
      arrs: [],
      flag: false,
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
    this.maplist = window.sessionStorage.getItem('maplist')
    //this.uploadList = this.$refs.upload.fileList;
    //            console.log(this.$refs.upload.fileList)
  },
  methods: {
    showcns() {
      this.cns = !this.cns;
    },
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
     
      if (!this.yuedu) {
        this.$toast("请阅读承诺书");
        return false;
      }
       for (let i in this.arr) {
        console.log(this.arr[i].uploadId)
        if(this.arr[i].uploadId.length <= 0){
          this.$toast('请上传上传全部材料')
          return false
        }
      }
      this.$toast({
       message: '请稍后，正在受理中',
       duration: '15000'
     });
      this.WorkId = window.sessionStorage.getItem("WorkId");
      let setdata = {
        txnCommCom: {
          tenant: "5300000000000",
          txn_itt_chnl_id: "0",
          txn_itt_chnl_type: "1"
        },
        txnBodyCom: {
          work_id: this.WorkId,
          matter_id: window.sessionStorage.getItem("matterid"),
          member_id: window.sessionStorage.getItem("userid"),
          files: this.arrs
        }
      };
      this.$ajaxRequest("post", "/gsp/mng30008", setdata)
        .then(res => {
          console.log(res);
          // this.arror = res
          // if(res.status=='01'){
          if(res.errorinfo == undefined || res.errorinfo == 'undefined'){
            this.one = true;
          }else{
            this.errorinfo = res.errorinfo;   
            this.errorinfos = true ;
          }
        })
        .catch(error => {
          this.errorinfo = error.errorinfo;   
          this.errorinfos = true ;
          console.log(error);
        });
    },
    handleRes(data) {
      //添加图片上传]
      console.log(data);
      console.log(this.flag);
      this.flag = true;
      this.arr[data.index].uploadId.push(data.fileUrl);
      console.log(this.arr);
      this.flag = true;
      var fileParam = {
        file_name: data.ObjNm,
        file_desc: this.arr[data.index].file_name,
        file_path: "GSP_PRIVATE",
        file_oriname: data.ObjNm
      };
      console.log(this.arrs);
      this.arrs.push(fileParam);
      var self = this;

      setTimeout(function() {}, 300);
    },
    handleRemove(index, subindex, uploadId) {
      //删除图片上传
      this.arr[index].uploadId.splice(subindex, 1);
      this.flag = true;
    },
    setShow(data) {
      //查看大图1
      this.isShow = data;
    },
    previewHandle(data, index) {
      //查看大图2
      this.isShow = true;
      this.currentImgUrl = data;
    }
  }
};
</script>
<style lang="less" scoped>
.alertimg {
  text-align: left;
  padding-left: 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  color: #666;
  span {
    color: #0096ff;
  }
}
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
    margin-top: 25vh;
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
    .cnsbutton {
      color: #0096ff;
      text-align: center;
      border-top: 1px solid #ececec;
      padding: 0;
      line-height: 0.8rem;
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
.example-upload-cycle {
  overflow: hidden;
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
