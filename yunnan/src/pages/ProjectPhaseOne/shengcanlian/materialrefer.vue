<template>
	<div class="imgflie">
		<towtop style="margin-bottom: 0" :name="titlename"/>
		 <div class="yyy">
            <div class="title1"><p>材料提交</p></div>
            <div class="example-upload" v-if="arr.length">
                <div v-for="(item,index) in arr" :key="index">
                    <!-- //上传图片循环.. -->
                    <div class="example-upload_formItem">
                        <label class="example-upload_formLabel">{{ item.file_name }}</label>
                        <div class="example-upload_formText">
                            <!--上传-->
                            <div class="example-upload">
                                <!--自定义上传图片-->
                                <ccbUpload :name='item.imgname' :upload-id=item.file_name @uploadRes='handleRes' app-id="GSP_APP_001" bucket-id="GSP_PRIVATE" pic-url-pre-fixed="/image-service/downloadImage?" :upload-index='index'>
                                    <span class="example-upload_btn">添加</span>
                                </ccbUpload>
                                <div v-if="flag" class="example-upload_list">
                                    <div class="example-upload_item" v-for="(subitem,subindex) in item.uploadId" :key="subindex">
                                        <img :src="subitem" />
                                        <span class="example-upload_item-cover">
                                      <em class="example-upload_item-delete" @click="handleRemove(index,subindex,item.uploadId)">X</em>
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import ccbUpload from "../../../components/ccb-upload";
export default {
  data() {
    return {
      titlename: "用人单位比例安排残疾人就业年审",
      defaultList: [],
      flag: false,
      arr: [
        {
          file_name: "云南省残疾人按比例就业年审申报表",
          uploadId: [],
          imgname: "ynprovdfrmtpctemptbl"
        },
        { file_name: "行政登记证书", uploadId: [], imgname: "admnrgsctf" }
      ],
      arrs: []
    };
  },
  components: {
    towtop,
    ccbUpload
  },
  methods: {
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
        file_path: "GSP_PRIVATE"
      };
      console.log(this.arrs);
      this.arrs.push(fileParam);
      var self = this;
      setTimeout(function() {}, 300);
    },
    handleRemove(index, subindex, uploadId) {
      //删除图片上传
      //this.flag = false;
      this.arr[index].uploadId.splice(subindex, 1);
      this.flag = true;
    }
  }
};
</script>
<style type="text/css" scoped>
.hui-tabs_tab {
  font-size: 0.28rem;
}
.hui-tabs .hui-tabs_tab-active {
  font-size: 0.28rem;
}
.example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  margin: 0.3rem auto;
  text-align: left;
}
.title1 {
  width: 100%;
  background-color: #fff;
}
p {
  width: 90%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0 auto;
  text-align: left;
  color: #999;
  font-size: 0.28rem;
}
.example-upload_btn {
  display: block;
  margin-top: 0.45rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #f5f5f5;
  font-size: 0.28rem;
  text-align: center;
  line-height: 1.6rem;
  color: #ccc;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
  z-index: 11;
}
.example-upload_formItem {
  font-weight: 700;
}
.b1 {
  display: inline-block;
  width: 0.06rem;
  height: 0.24rem;
  background-color: #257bff;
  margin-right: 0.1rem;
}

.middle {
  width: 90%;
  margin: 0.5rem auto;
  height: 0.01rem;
  background-color: #ccc;
}
.imgflie .yyy{
	background: #fff;
	padding-bottom: .05rem;
}
</style>