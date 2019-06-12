<template>      
  <!--  v-if="modelEdit"-->
  <el-form label-width="100px" class="subjectStyle" v-model="contentedit" @submit.native.prevent>
    <h3>首页内容-{{this.$route.query.indexName?this.$route.query.indexName:''}}-内容编辑</h3>
    <el-form-item :label="contentedit.name">
      <el-input prop="EditData.title" v-model="EditData.title"></el-input>
    </el-form-item>
    <el-form-item :label="contentedit.subjectDetails" v-if="this.$route.query.modeltype ==16">
      <el-row>
         <upload-tree :addModel="EditData" :modelbimg="modelbimg"  v-on:emitChange3="emitChange3"></upload-tree>
      </el-row> 
    </el-form-item>
    <el-form-item :label="contentedit.subjectList">
      <el-row>
        <manage-content v-on:emitChange4="emitChange4" :EditData='EditData' :modelnimg="modelnimg"></manage-content>
      </el-row> 
    </el-form-item>
    <el-form-item :label="contentedit.subjectVal">
      <!-- <div name="" id="" style="width:70%; min-height:700px"  prop="EditData.description"  v-html="EditData.description"> </div> -->
      <textarea cols="60" rows="16" prop="EditData.description" v-model="EditData.description"></textarea>
    </el-form-item>
    <el-form-item class="buttons">
      <el-button @click="goback">返回</el-button>
      <el-button @click="EditDatachange">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
// import { uploadSub } from "@/utils/uploadSub"; //src\utils\uploadSub.js

export default {
  data() {
    return {
      name: "addsubject",
      contentEditData: "",
      EditData: {
        title: "",
        description: "",
        imageUrl: ""
      },
      pageData: {
        page: 1,
        size: 10,
        total: 10
      },
      contentedit: {
        name: "标题",
        subjectList:"详情图片", 
        subjectDetails:  "列表图片",
        subjectVal: "简介",
        managementType: "",
        managementName: ""
      },
      options: "",
      indexType:'',
      fils: "", 
      modelnimg:{
       width: 750,
       height: 350
      },
      modelbimg: {
       width: 750,
        height: 250 
      }

    };
  },
  created() {
    this.contentData();
    this.contentModeltype ();
    this.indexTypex()
  },
  computed: {
    modelEdit() {
      //模块编辑+this.$route.query.modelId+"/"+this.$route.query.contentId+"/content"
      
      return this.$route.path ==
        "/administer/management/indexContent/contentEdit" ||
        this.$route.path == "/administer/vipmanagement/indexContent/contentEdit"
        ? true
        : false;
    }
  },
  methods: {
    emitChange4(Value) { 
      this.EditData.imageUrl = Value;
    },
    emitChange3(Value) { 
      this.EditData.surfaceImageUrl = Value;
    },
    contentData() {
      this.$http
        .get("api/portal/model/modelContentList", {
          params: { pgNo: this.$route.query.page, rowNum: 30, modelId: this.$route.query.indexId }
        })
        .then(res => {
          this.contentEditData = res.data.model.list;
          // console.log( this.contentEditData);
          this.contentEditData.map((item, index) => {
            if (item.id == this.$route.query.contentEdit) { 
              
              return (this.EditData = this.contentEditData[index]);
            }
          });
        });
      this.listLoading = true;
    },
    goback() {
      history.go(-1);
    },
    getOption() {
      this.$http.get("api/portal/model/type").then(res => {
        if (res.data.success === true) this.options = res.data.model;
      });
    },
    contentModeltype (){
      const modeltype = Number(this.$route.query.modeltype)
       switch (modeltype) {
        case 18: // 首页底部文章 
          this.modelnimg = { width: 400, height: 400 };  
          break;
        case 17: // VIP权益广告
          this.modelnimg = { width: 343, height: 250 };  
          break;
        case 16: // 主题书单 
         this.modelnimg = { width: 750, height: 350 };  
          break;
        case 15: // 免费专区 
         this.modelnimg = { width: 106, height: 137 };
          break;  
        case 13: // 专题列表 
         this.modelnimg = { width: 400, height: 400 }; 
          break;
        case 12: // 听外刊 
        //  this.modelnimg = { width: 106, height: 137 };   // 尺寸待定
         this.modelnimg = { width: 400, height: 520 };    
          break;
        case 11: // 文章 
        //  this.modelnimg = { width: 90, height: 90 };  // 尺寸待定
         this.modelnimg = { width: 400, height: 400 };  // 尺寸待定
          break;
        case 10: // 听周刊
         this.modelnimg = { width: 400, height: 520 };   
          break;
        case 9: // 大咖说 
        //  this.modelnimg = { width: 106, height: 106 };  // 待定 
         this.modelnimg = { width: 400, height: 400 };  
          break;
        case 8: // 听书 
        //  this.modelnimg = { width: 90, height: 116 }; // 待定 
            this.modelnimg = { width: 400, height: 520 };  
          break;
        case 7: // 合辑 
         this.modelnimg = { width: 200, height: 200 };  // 没有尺寸
          break;
        case 6: // 快听合辑 
         this.modelnimg = { width: 200, height: 200 };  // 没有尺寸
          break;
        case 5: // 杂志 
         this.modelnimg = { width: 520, height: 400 };  
          break;
        case 4: // 快听  
         this.modelnimg = { width: 400, height: 400 };  
          break;
        case 3: // 小课 
         this.modelnimg = { width: 400, height: 520 };  
          break;
        case 2: // 专栏 
         this.modelnimg = { width: 400, height: 520 };  
          break;
        case 1: // 精品课 
         this.modelnimg = { width: 400, height: 520 };  
          break; 
      }

    },
    indexTypex() {
      return this.$route.path == "/administer/management/indexContent/contentEdit"?this.indexType =2:this.indexType =1;
    },
    EditDatachange() {
      this.$confirm("是否确认保存", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "error"
      })
        .then(() => {  

          // console.log(this.EditData.surfaceImageUrl ,'上传图片');
          
          this.$http
            .put("api/portal/model/" + this.$route.query.indexId + "/content/"+this.indexType, {
              id: this.$route.query.contentEdit,
              imageUrl :this.EditData.imageUrl,
              title: this.EditData.title,
              modelType: this.indexType,
              surfaceImageUrl: this.EditData.surfaceImageUrl,
              description: this.EditData.description
            })
            .then(res => {
              if (res.data.success === true) { 
                this.$message({ type: "success", message: "成功!"});
                // this.contentData();
                this.goback()
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消更改"
          });
        });
    } 

  }
};
</script>
<style>
.subjectStyle {
  width: 46%;
  margin: 0 auto;
  padding-top: 40px;
  text-align: center;
}
.buttons {
  text-align: right;
}
.contentImg {
  width: 106px;
  height: 136px;
  background: #321;
  margin: 0 auto;
  text-align: center;
}
</style> 
