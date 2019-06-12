<template>
  <div class="app-container">
    <router-view></router-view>
    <el-row
      type="flex"
      class="tableTop"
      :gutter="14"
      v-show="$route.path =='/administer/subject/model'"
    >
      <el-col :span="14" justify="space-between" class="management">模块 内容管理: {{contentName}}</el-col>
      <el-col :span="4">
        <el-button size="small" @click="createdSubModel()">新建模块</el-button>
        <div style="z-index: 2001;" class="submodelstys" v-show="subflag">
          <div class="submodelsty"></div>
          <div class="submodelsub">
            <span style="position:absolute;top: 10px;right: 10px;padding:4px 15px;cursor:pointer;" @click="closesub"   >&Chi;</span>
            <el-form ref="form" @submit.native.prevent label-width="100px" style="margin-top:30px;">
              <el-form-item label="模块名">
                <el-input style="width:160px;" size="small" v-model="addSub.name"></el-input>
              </el-form-item>
              <el-form-item label="类型">
                <el-select
                  v-model="addSub.type"
                  placeholder="请选择模块类型"
                  size="small"
                  style="width:160px;"
                >
                  <el-option
                    v-for="item in models"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="text-align:center;margin-right:100px;">
                <el-button @click="closesub">取消</el-button>
                <el-button @click="addSubModel">确定</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col>
        <el-table
          :data="userData"
          v-loading="subMLoading"
          style="width:100%;height:100%;"
          stripe
          v-show="$route.path =='/administer/subject/model'"
        >
          <el-table-column prop="id" label="模块名">
            <template slot-scope="scope">
              <span v-text="scope.row.themeModel.name"></span>
            </template>
          </el-table-column>
          <el-table-column prop="sort" label="排序" width="90">
            <template slot-scope="scope">
              <el-input
                size="small"
                v-model="scope.row.themeModel.sort"
                @change="sortChange(scope.row)"
                type="number"
                style="text-align:center;"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="shelvesState" label="状态">
            <template slot-scope="scope">
              <span
                v-text="scope.row.themeModel.shelvesState == 1?'下架' :'上架'"
                :class="scope.row.themeModel.shelvesState == 1?  'blue22':'blue11'"
              ></span>
            </template>
          </el-table-column>
          <el-table-column label="专题内容管理" width="380">
            <template slot-scope="scope">
              <el-button size="small" @click="promptb(scope.row)" type="warning">改名</el-button>
              <el-button
                size="small"
                @click="changeState(scope.row)"
                v-text="scope.row.themeModel.shelvesState == 1? '上架'   :'下架'"
                :type="scope.row.themeModel.shelvesState == 1 ?'success': 'info'  "
              ></el-button>
              <el-button size="small" @click="golumpData(scope.row)" type="primary">内容管理</el-button>
              <el-button @click="delSubModel(scope.row)" size="small"   type="danger"  
               :disabled="scope.row.themeModel.shelvesState ==2">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <div class="gobackmodel">
      <el-button @click="gobacksubject" size="small" class="gobackmodelbu">返回</el-button>
    </div>
    <pagination
      :pageData="pageData"
      @pageChange="changePage"
      v-if="$route.path =='/administer/subject/model'"
    ></pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      subMLoading: true,
      subject: "",
      userData: [],
      contentName: "",
      showMessage: "",
      postArgument: "",
      others: "",
      indexType: "",
      subflag: false,
      pageData: { page: 1, total: 100, size: 30 },
      addSub: {
        type: "",
        name: ""
      },
      models: [
        { id: 1, name: "精品课" },
        { id: 2, name: "专栏" },
        { id: 3, name: "小课" },
        { id: 4, name: "快听" },
        { id: 5, name: "杂志" },
        { id: 6, name: "快听合辑" },
        { id: 7, name: "合辑" },
        { id: 8, name: "听书" },
        { id: 9, name: "大咖说" },
        { id: 10, name: "听周刊" },
        { id: 11, name: "文章" },
        { id: 12, name: "听外刊" },
        { id: 13, name: "专题列表" },
        { id: 14, name: "中部广告" },
        { id: 15, name: "免费专区" },
        { id: 16, name: "主题书单" },
        { id: 17, name: "vip会员权益图片" },
        { id: 18, name: "首页底部文章" }, 
        { id: 19, name: "周年活动充值图片" },
        { id: 20, name: "vip免费课程" }
      ]
    };
  },
  created() {
    if (this.$route.query.modelId != undefined) {
      this.subjectModelData();
    }
    var _this = this; // 在vue中 无法直接获取keyCode 问题
    document.onkeydown = function(e) {
      let key = window.event.keyCode;
      if (key == 27) {
        _this.subflag = false;
      }
    };
  },
  methods: {
    subjectModelData() {
      this.contentName = this.$route.query.modelName;
      if (this.$route.query.modelId) {
        this.$http
          .get("api/portal/theme/" + this.$route.query.modelId, {
            params: {
              id: this.$route.query.modelId,
              pgNo: this.pageData.page,
              rowNum: 30
            }
          })
          .then(res => {
            if (res.data.model.list instanceof Array) {
              this.subMLoading=false;
              this.pageData = {
                page: res.data.model.currPage,
                size: 30,
                total: res.data.model.totalRowCount
              };
              this.userData = res.data.model.list;
            }
          });
      }
      this.listLoading = true;
    },
    searchManagement() {
      //  搜索
      this.subjectModelData();
    },

    golumpData(val) {
      this.$router.push({
        path: "/administer/subject/lump",
        query: {
          modelId: this.$route.query.modelId,
          modelName: this.$route.query.modelName,
          modeltype: val.themeModel.type, 
          contentId: val.themeModel.id
        }
      });
    },
    sortChange(val) {
      // console.log(val);
      this.showMessage = "是否改变内容的排序?";
      this.postArgument =
        "api/portal/theme/" + this.$route.query.modelId + "/model";
      this.others = {
        id: val.themeModel.id,
        sort: Number(val.themeModel.sort)
      };
      this.packagingModel(this.showMessage, this.postArgument, this.others);
    },
    changeState(val) {
      this.$http
        .get(
          "api/portal/theme/" + this.$route.query.modelId +
            "/" +val.themeModel.id +"/content"
        )
        .then(result2 => {
          if (result2.data.model.list.length >0) {
               this.showMessage =
                "是否改变" + val.themeModel.name + "的上下架状态?";
              this.postArgument =
                "api/portal/theme/" + this.$route.query.modelId + "/model";
              this.others = {
                id: val.themeModel.id,
                shelvesState: val.themeModel.shelvesState == 2 ? 1 : 2
              };
              this.packagingModel(
                this.showMessage,
                this.postArgument,
                this.others
              );
          } else {
              this.$confirm("模块下没有内容，不能上下架", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "error"
              })
                .then(() => {
                  this.$message({ type: "info", message: "取消更改" });
                })
                .catch(() => {
                  this.$message({ type: "info", message: "取消更改" });
              });           
          }
        });
    },
    packagingModel(showMessage, postArgument, others) {
      this.$confirm(showMessage, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      })
        .then(() => {
          this.$http.put(postArgument, others).then(res => {
            if (res.data.success === true) {
              this.$message({
                type: "success",
                message: "成功!"
              });
              this.subjectModelData();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
    }, 
    delSubModel(val) {
      // 删除模块 先查找模块下内容，如果内容list长度为<1，则删除模块
      this.$http.get('api/portal/theme/' + this.$route.query.modelId+'/'+val.themeModel.id +'/content').then(result =>{
        // console.log(result,'reult');
        if(result.data.model.list <1) {
           this.$confirm("是否删除这个专题模块?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            this.$http.delete('api/portal/theme/deleteThemeModle/'+val.themeModel.id).then( res=>{ 
              this.$message({
              type: "success",
              message: "成功!"
              });
            })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
        }else {
          this.$message({
            type: "info",
            message: "请删除完专题模块下的所有内容"
          });
        }
      })
     
    },
    promptb(val) {
      var subjectModelName = val.themeModel.name? val.themeModel.name:''
      this.$prompt("改" + val.themeModel.name + "名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: subjectModelName,
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          this.$http
            .put("api/portal/theme/" + this.$route.query.modelId + "/model", {
              id: val.themeModel.id,
              name: value
            })
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.subjectModelData();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消更改"
          });
        });
    },
    openImg(val) {},
    changePage(pageData) {
      this.pageData = pageData;
      this.subjectModelData();
    },
    createdSubModel() {
      this.subflag = true;
    },
    addSubModel() {
      if(this.addSub.name !=''&&this.addSub.type !=''){
        this.$http.post("api/portal/theme/ " + this.$route.query.modelId + "/model", this.addSub )
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.closesub()
                this.subjectModelData();
              }
            });
      }
       
    },
    closesub() {
      this.subflag = false;
    },
    prompsubject() {
      this.$prompt("新建模块", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          //api/portal/model//udateModelName/{id}/{modelName}, type :
          this.$http
            .post("api/portal/theme/ " + this.$route.query.modelId + "/model", {
              name: value
            })
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.subjectModelData();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消更改"
          });
        });
    },
    gobacksubject() {
      history.go(-1);
    }
  }
};
</script>
<style>
.management {
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
}
.gobackmodel {
  height: 140px;
  width: 100%;
  display: inline-block;
  text-align: right;
  padding-right: 80px;
}
.gobackmodelbu {
  position: absolute;
  bottom: 60px;
}
.submodelstys {
  z-index: 2004;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
.submodelsty {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
.submodelsub {
  display: inline-block;
  position: fixed;
  top: 290px;
  left: 510px;
  width: 420px;
  min-height: 300px;
  z-index: 2005;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
