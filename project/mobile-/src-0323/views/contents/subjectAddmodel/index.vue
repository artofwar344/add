 <template>
  <div>
    <el-form label-width="100px" @submit.native.prevent>
      <el-form-item>
        <h3 >{{ addModel.name? subject.name+ addModel.name:subject.name}}</h3>
      </el-form-item>
      <el-form-item :label="subject.subjectName" class="subjectNames">
        <el-input v-model="addModel.name"></el-input>
      </el-form-item>
      <el-form-item :label="subject.imgName">
        <upload-one :addModel="addModel" :modelsimg="modelsimg" v-on:emitChange1="emitChange1"></upload-one>
        <upload-tow :addModel="addModel" :modelnimg="modelnimg" v-on:emitChange2="emitChange2"></upload-tow>
        <div style="display:inline-block;width:30%;"> 
        <upload-tree :addModel="addModel" :modelbimg="modelbimg"  v-on:emitChange3="emitChange3"></upload-tree>
        </div>
      </el-form-item>
      <el-form-item :label="subject.particular">
        <el-input type="textarea" v-model="addModel.description" :autosize="{ minRows: 6}" ></el-input>
        <span style=" display: inline-block; float: right; font-size: 14px;  color:  #606266;">专题简介文字限300个</span> 
      </el-form-item>
      <el-form-item class="addmodeltext">
        <el-button @click="gobackfn()" href="javascript:void(0);">取消</el-button>
        <el-button @click="managementSub" href="javascript:void(0);">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template> 
<script>
import Vue from "vue"; 
export default {
  data() {
    return {
      name: "addsubject", 
      list: null,
      listLoading: true,
      subject: {
        name: "专题模块  :",
        subjectName: "专题名",
        imgName: "图片",
        particular: "简介",
        fileList: []
      },
      addModel: {
        name: "",
        smallImage: "",
        imageUrl: "",
        bigImage: "",
        description: ""
      },
      modelsimg:{
        width: 400,
        height:400
      },
      modelnimg:{
        width: 750,
        height: 250 
      },
      modelbimg:{
        width: 750,
        height: 350 
      },
      smallImage: "",
      management: {
        name: "新建模块",
        subject: "模块名",
        subjectVal: "类型",
        managementType: "",
        managementName: ""
      },
      options: "",
      type: "",
      fileList: []
    };
  },
  created() {
    this.getOption();
    if (this.$route.query.mid) {
      this.getModel();
    }
    this.fnmodelcrated()
    // this.show ()
  },
  updated() {
    //  console.log(this.addModel,'赋值');
  },
  computed: {
    modelEdit() {
      //模块编辑
      return this.$route.path == "/administer/vipmanagement/edit" ||
        this.$route.path == "/administer/management/edit"
        ? true
        : false;
    }
  },
  methods: {
    emitChange1(Value) {
      //console.log(Value);
      this.addModel.smallImage = Value;
    },
    emitChange2(Value) {
      this.addModel.imageUrl = Value;
    },
    emitChange3(Value) {
      this.addModel.bigImage = Value;
    },
    getModel() {
      this.$http
        .get("api/portal/theme", {
          params: {
            pgNo: this.$route.query.page,
            rowNum: 30,
            name: ""
          }
        })
        .then(res => {
          
          res.data.model.list instanceof Array
            ? res.data.model.list.map(item => { 
                if (this.$route.query.mid == item.theme.id) { 
                  //  console.log(item);
                  this.addModel = item.theme;
                }
              })
            : (this.addModel = {});
        });
    }, 
    gobackfn() {
      history.go(-1);
    },
    getOption() {
      this.$http.get("api/portal/model/style").then(res => {
        if (res.data.success === true) this.options = res.data.model;
      });
      this.listLoading = true;
    },
    managementSub() {
      const params = {
        name: this.addModel.name,
        smallImage: this.addModel.smallImage, // 专题 首页图
        imageUrl: this.addModel.imageUrl, // 专题 列表图
        bigImage: this.addModel.bigImage, // 专题 详情图
        description: this.addModel.description
      };
      let subLength = this.addModel.description.length  // 专题简介 如果长度超 则 不能保存
      console.log(subLength,'length');
      
      let descriptionLength = subLength <= 350?true :false;
      if (this.addModel.name &&descriptionLength) {
        this.$confirm("是否确认保存", "提示", { // 保存弹框
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputErrorMessage: "error"
        }).then(() => { 
          if(this.$route.path =='/administer/subject/index/addmodel') {
              this.$http.post("api/portal/theme", params).then(res => {  
              if (res.data.success == true) {  
              this.$router.push({ path: '/administer/subject/index'});
              this.$message({
              type: "success",
              message: "成功!"
              });
              }
              });
          }else if(this.$route.path =='/administer/subject/index/editmodel') {
             params.id = this.$route.query.mid
             this.$http.put("api/portal/theme/"+this.$route.query.mid, params).then(res => {  
              //   修改专题
              if (res.data.success == true) {  
              this.$router.push({ path: '/administer/subject/index'});
              this.$message({
              type: "success",
              message: "成功!"
              });
              }
              });
          }
         
        });
      }else {
        this.$message({ type: "info", message: "请检查一下专题的名字或 简介文字的数量" });
      }
    },
    fnmodelcrated() {
       this.$http.get("api/portal/oss/token" ).then(res => {  
        const result = res.body.model;
        //  这里是OSS
        const client = new OSS.Wrapper({
          region: result.region,
          accessKeyId: result.AccessKeyId,
          accessKeySecret: result.AccessKeySecret,
          bucket: result.bucket,
          stsToken: result.StsToken
        }); 
      })
    }
  }
};
</script>
  <style scoped>
.imagespan {
  display: inline-block;
  width: 70px;
  height: 70px;
  background: #123;
}
.imagedivs {
  display: inline-block;
  width: 150px;
  height: 50px;
  background: #123;
}

.imagedivb {
  display: inline-block;
  width: 150px;
  height: 70px;
  background: #123;
}
.imagespan img {
  width: 150px;
  height: 70px;
}
.imagedivs img {
  width: 150px;
  height: 50px;
}
.imagedivb img {
  width: 150px;
  height: 70px;
}
.addmodeltext {
  text-align: right;
}

.subjectNames {
  width: 400px;
}
.subsmall {
  width: 240px;
}
.subslist {
  width: 240px;
}
.subsmall {
  width: 240px;
}
</style>
  
  