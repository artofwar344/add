<template>
	<div>

    

 <div class="example-upload_formItem">
        <label class="example-upload_formLabel" for="">{{title}}</label>
        <div class="example-upload_formText">
          <!--上传-->
          <div class="example-upload">
            <!--自定义上传图片-->
            <ccbUpload
              upload-id="forMale"
              @uploadRes='handleRes'
              app-id="MT001_APP02"
              bucket-id="dangqun1"
              pic-url-pre-fixed="/image-service/downloadImage?"
            >
              <span class="example-upload_btn">添加</span>
            </ccbUpload>

            <div class="example-upload_list">
              <div class="example-upload_item" v-for="(item,index) in forMaleList" :key="index">
                <img :src="item" />
                <span class="example-upload_item-cover">
                    <em class="example-upload_item-delete" @click="handleRemove(item,index,'forMaleList')">X</em>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
		<!-- <div class="example-upload">
				<div class="example-upload_formItem">
				<input type="file" @change="getImgBase(index)" style="opacity: 0;">
				<label class="example-upload_formLabel" for="">{{title}}</label>
				<div class="example-upload_formText">
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
	</div> -->




	</div>
</template>

<script>
import { cenurl } from "../../../../components/toptow.js";
  import ccbUpload from '../../../../components/ccb-upload'
export default {
  data() {
    return {
      WorkId: "",
      imgBase64: [],
      forMaleList1: [],
      forMaleList: [],
      
      imgName: "",
      visible: false,
      one: false,
      uploadList: []
    };
  },
  props:['title'],
   components: {
      ccbUpload,
    },
  computed: {
    
    //            uploadList () {
    //                return this.$refs.upload ? this.$refs.upload.fileList : [];
    //            }
  },

  watch: {},
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
    //            console.log(this.$refs.upload.fileList)
  },
  methods: {
      handleRes (data) {
        console.log(data.uploadId)
        if(data.uploadId == 'forMale'){
          this.forMaleList1.push(data.fileUrl)
        }else if(data.uploadId == 'forMale1'){
          this.forMaleList.push(data.fileUrl)
        }

      },



      handleRemove (item,index,listName) {
        this[listName].splice(index, 1)
      },



// ----------------------------------------------------------------------------------------------------------------------------
//删除图片
    // delImg(index) {
    //     console.log(index)
    
    //   this.imgBase64.splice(index, 1);
    // },
    // getImgBase(inde) {
      
    //   var _this = this;
    //     console.log(inde)
    //   console.log(_this)
    //   var event = event || window.event;
    //   var file = event.target.files[0];
    //   var reader = new FileReader();
    //   //转base64
    //   reader.onload = function(e) {
    //       console.log(_this.imgBase64+inde)
    //     _this.imgBase64.push(e.target.result);
    //   };
    //   reader.readAsDataURL(file);
    // },

    // uploadLists() {
    //   this.one = true;
    //   this.WorkId = localStorage.getItem("WorkId");
    //   if (this.WorkId) {
    //     this.WorkId = this.WorkId;
    //   } else {
    //     this.WorkId = "abbd2786e3064963854599dfe136a4e0";
    //   }
    //   this.$axios({
    //     method: "post",
    //     url: cenurl.url() + "/db/material/commit",

    //     data: {
    //       txnBodyCom: {
    //         work_id: this.WorkId,
    //         matter_id: "79ABB23685267CC8E0530ADDC480B63A",
    //         member_id: "21832",
    //         files: [
    //           {
    //             file_path: "dangqun1",
    //             file_name: "906.jpg"
    //           }
    //         ]
    //       },
    //       txnCommCom: {
    //         tenant: "5300000000000",
    //         txn_itt_chnl_id: "0",
    //         txn_itt_chnl_type: "1"
    //       }
    //     },
    //     headers: {
    //       "C-App-Id": "GSP_APP_001",
    //       'C-Dynamic-Password-Foruser':
    //     }
    //   })
    //     .then(res => {
    //       console.log(res);
    //       this.one = true;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    // handleRemove(file) {
    //   // 从 upload 实例删除数据
    //   const fileList = this.$refs.upload.fileList;
    //   this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    // },
    // handleSuccess(res, file) {
    //   // 因为上传过程为实例，这里模拟添加 url
    //   file.url = "https://download.yn.gov.cn/directory/uploadMaterials";
    //   file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    // },
    // handleFormatError(file) {
    //   console.log(file);
    //   alert(file);
    //   alert(
    //     "文件 " + file.name + " 格式不正确，请上传 jpg 或 png 格式的图片。"
    //   );
    // },
    // handleMaxSize(file) {
    //   alert("文件 " + file.name + " 太大，不能超过 2M。");
    // },
    // handleBeforeUpload() {
    //   const check = this.uploadList.length < 5;
    //   if (!check) {
    //     alert("最多只能上传 5 张图片。");
    //   }
    //   return check;
    // },
    // handleProgress(s) {
    //   console.log(s);
    // }
  }
};
</script>

<style lang="less" scoped>
.altbox{
	background: rgba(0,0,0,0.5);
	position:fixed;
	width:100%;
	height: 100%;
	top: 0;
	left:0;
	z-index: 999999;

		.center {
		background: #fff;
		padding: 0 .36rem;
		padding-bottom:.2rem;
		margin-top:1rem;
		text-align: left;
		font-size: .3rem;
		color: #333333;
		line-height: .48rem;
		h1 {
			text-align: center;
			font-weight: bold;
			padding: .40rem 0;
		}
		div {
			padding-bottom: .4rem;
		}
		}
	}
</style>
<style scoped>
	
	

    .clearboth::after{
        content:"";
        display:block;
        clear:both;
    }
     /*.image-view{
       width:400px;
        height:300px;
        margin:50px auto;
    }*/
    .image-view .addbox{
        float:left;
        position:relative;
        /*height:100px;
        width:100px;*/
        margin-bottom:20px;
        text-align:center;
    }
    .image-view .addbox input{
        position:absolute;
        left:0;
        height:100px;
        width:100px;
        opacity:0;
    }
  .addbtn{
        float:left;
        height:44px;
        width:100%;
        line-height:44px;
        color:#fff;
        font-size:40px;
        background:#ccc;
        border-radius:10px;
        opacity: 0;
    }
    .image-view .item {
        position:relative;
        float:left;
        height:100px;
        width:100px;
        margin:10px 10px 0 0;
    }
    .image-view .item .cancel-btn{
        position:absolute;
        right:0;
        top:0;
        display:block;
        width:20px;
        height:20px;
        color:#fff;
        line-height:20px;
        text-align:center;
        background:red;
        border-radius:10px;
        cursor:pointer;
    }
    .image-view .item img{
        width:100%;
        height:100%;
    }
    .image-view .view::after{
        clear:both;
        content: '0';
        display: block;
        height:0;
        width:100%;
        font-size:0;
    }

	
	.button {
		display: block;
		width: 5.90rem;
		height: .9rem;
		line-height: .9rem;
		color: #fff;
		background: #2D7FFC;
		margin: 0 auto;
		border: 0;
		border-radius: .5rem;
		margin-top: .3rem;
		margin-bottom: .3rem;
		font-size: .32rem;
	}
	
	.example-upload_formItem {
		position: relative;
		text-align: left;
		padding: 0 15px;
		border-bottom: 1px solid #e1e2e6;
	}
	.example-upload_formItem input{
		position: absolute;
		height: 44px;
		width:100%;
		left:0;
		top:0;
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
	
	/* //以下是自定义图片列表的样式，不用删除 */
  .example-upload_list::after {
    content: '0';
    font-size: 0;
    height: 0;
    display: block;
    clear: both;
    
	}
	
	.example-upload_item {
		margin: 5px;
		float: left;
		width: 80px;
		height: 80px;
		text-align: center;
		border: 1px solid rgba(0, 0, 0, .2);
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