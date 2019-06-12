<template>
  <div class="app-container">
    <router-view></router-view>
    <el-row type="flex" class="tableTop" justify="center">
      <el-col :span="8" class="management" :offset="2" :pull="3">App--{{indexName}}--二级分类管理</el-col>
      <el-col :span="4">
        <el-button @click="classifySecondaryCreate()" size="small">新建二级分类</el-button>
      </el-col>
    </el-row>

    <el-table :data="userData" stripe style="width: 100%;height: 100%; ">
      <el-table-column prop="id" label="二级分类">
        <template slot-scope="scope">
          <span v-text="scope.row.name"></span>
        </template>
      </el-table-column>
      <el-table-column prop="categoryImg" label="图片">
        <template slot-scope="scope">
          <div
            v-html="'<div style=display:inline-block;width:60px;height:60px;background:url('+ scope.row.categoryImg +');background-size:cover;  ></div>'"
            @click="classifySecondaryShowImage(scope.row)"
          ></div>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" width="100">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.sort"
            @change="classifySecondaryChangeSort(scope.row)"
            size="small"
            type="number"
            style="text-align:center;"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="shelvesState" label="状态" width="160">
        <template slot-scope="scope">
          <span
            v-text="scope.row.shelvesState == 1?'下架' :'上架'"
            :class="scope.row.shelvesState == 1?  'blue22':'blue11'"
          ></span>
        </template>
      </el-table-column>
      <el-table-column label=" 分类管理" width="380">
        <template slot-scope="scope">
          <el-button
            @click="classifySecondaryChangeName(scope.row)"
            size="small"
            type="warning"
          >{{ '改名' }}</el-button>
          <el-button @click="classifySecondaryEdit(scope.row)" size="small" type="primary">编辑</el-button>
          <el-button
            @click="classifySecondaryChangeState(scope.row)"
            size="small"
            v-text="scope.row.shelvesState == 1? '上架'   :'下架'"
            :type="scope.row.shelvesState == 1 ?'success' :'info'"
          ></el-button>
          <el-button
            @click="classifySecondaryDelete(scope.row)"
            size="small"
            type="danger"
            :disabled="pidData ==-1"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="managContentText"></el-row>
    <div class="gobackmodel">
      <el-button @click="goback" class="classifySecondarybackSty">返回</el-button>
      <pagination :pageData="pageData" @pageChange="changePage"></pagination>
    </div>
    <div
      style="z-index: 1999;"
      class="classifySecondaryPromptSty"
      v-show="classifySecondaryEditFlag"
    >
      <div class="classifyUnderlyingSty" @click="classifySecondaryClosed"></div>
      <div class="classifySecondarySty">
        <div style="margin-top:12px;">
          <div class="el-message-box__header">
            <div class="el-message-box__title">
              <span>新建二级分类</span>
            </div>
            <button type="button" aria-label="Close" class="el-message-box__headerbtn">
              <i class="el-message-box__close el-icon-close" @click="classifySecondaryClosed"></i>
            </button>
          </div>
          <el-form>
            <el-form-item label="二级分类名">
              <div style="margin-top:44px;width:66%;margin-left:12px;">
                <input
                  type="text"
                  autocomplete="off"
                  placeholder
                  class="el-input__inner"
                  v-model="inputTtext"
                >
                <!-- style="width:53%;" -->
              </div>
            </el-form-item>
            <el-form-item label="二级分类图片">
              <div style="width:66%;margin-left:12px;">
                <manage-content
                  v-on:emitChange4="emitChange4"
                  :EditData="EditAdvetData"
                  :modelnimg="modelnimg"
                ></manage-content>
              </div>
            </el-form-item>
          </el-form>

          <div>
            <div class="el-message-box__btns">
              <button
                type="button"
                class="el-button el-button--default el-button--small"
                @click="classifySecondaryClosed"
              >
                <span>取消</span>
              </button>
              <button
                type="button"
                class="el-button el-button--default el-button--small el-button--primary"
                @click="classifySecondaryKeepMessage"
              >
                <span>确定</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      subject: "",
      userData: [],
      indexName: this.$route.query.indexName,
      classifySecondaryShowMessage: "",
      classifySecondaryPutPath: "",
      classifySecondaryPutDatas: "",
      radioVal: "",
      pageData: {
        page: 1,
        total: 100,
        size: 30
      },
      model: false,
      classifySecondaryEditFlag: false,
      classifySecondaryKeepMessagePath: "",
      inputTtext: "",
      EditAdvetData: { imageUrl: "" },
      modelnimg: { width: 200, height: 200 }
    };
  },
  created() {
    this.classifySecondaryData();
  },
  watch: {
    $route(route) {
      this.classifySecondaryData();
    }
  },
  computed: {
    pidData() {
      return this.$route.query.indexId;
    }
  },
  methods: {
    classifySecondaryData() {
      this.$http
        .get("api/category/listCategory", {
          params: {
            name: this.subject,
            pId: this.$route.query.indexId,
            shelvesState: 0,
            pgNo: this.pageData.page,
            rowNum: 30
            // rowNum: this.pageData.size
          }
        })
        .then(res => {
          this.pageData = {
            page: res.data.model.currPage,
            size: res.data.model.rowsPerPage,
            total: res.data.model.totalRowCount
          };
          this.MLoading = false;
          this.userData = res.data.model.list;
        });
      this.listLoading = false;
    },
    classifySecondaryCreate() {
      //   新建二级分类
      this.inputTtext = null;
      this.EditAdvetData.imageUrl = "";
      this.modelnimg = { width: 200, height: 200 };
      this.classifySecondaryKeepMessagePath = "api/category/addCategory";
      this.classifySecondaryEditFlag = true;
    },
    classifySecondaryEdit(val) {
      //   编辑二级分类
      this.inputTtext = val.name;
      this.EditAdvetData.imageUrl = val.categoryImg;
      this.modelnimg = { width: 200, height: 200 };
      this.classifySecondaryKeepMessagePath = "api/category/updateCategory";
      this.classifySecondaryPutDatas = { id: val.id, categoryImg: "" };
      this.classifySecondaryEditFlag = true;
    },
    classifySecondaryKeepMessage() {
      // 保存 编辑|新建 信息
      var thatCategoryImg = this.EditAdvetData.imageUrl != "" ? true : false;
      var thatInputTtext = this.inputTtext != "" ? true : false;
      if (thatCategoryImg && thatInputTtext) {
        if (
          this.classifySecondaryKeepMessagePath == "api/category/addCategory"
        ) {
          this.$http
            .get(this.classifySecondaryKeepMessagePath, {
              params: {
                type: 2,
                pId: this.$route.query.indexId
                  ? Number(this.$route.query.indexId)
                  : 0,
                name: this.inputTtext,
                categoryImg: this.EditAdvetData.imageUrl
              }
            })
            .then(res => {
              if (res.data.model == "1000") {
                this.classifySecondaryData();
                this.$message({
                  type: "success",
                  message: "创建成功!"
                });
                this.classifySecondaryEditFlag = false;
                this.inputTtext = "";
                this.EditAdvetData.imageUrl = "";
                this.classifySecondaryData();
              } else {
                this.$message({
                  type: "info",
                  message: "创建失败!"
                });
              }
            });
        } else if (
          this.classifySecondaryKeepMessagePath == "api/category/updateCategory"
        ) {
          this.classifySecondaryPutDatas.categoryImg = this.EditAdvetData.imageUrl;
          this.classifySecondaryPutDatas.name = this.inputTtext;
          this.$http
            .put(
              this.classifySecondaryKeepMessagePath,
              this.classifySecondaryPutDatas
            )
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "修改成功!"
                });
                this.classifySecondaryEditFlag = false;
                this.classifySecondaryData();
              }
            });
        }
      } else {
        this.$message({
          type: "info",
          message: "编辑失败!"
        });
      }
    },

    classifySecondaryClosed() {
      this.classifySecondaryEditFlag = false;
    },
    classifySecondaryChangeSort(val) {
      this.classifySecondaryShowMessage = "是否改变排序?";
      this.classifySecondaryPutPath = "api/category/updateCategory";
      this.classifySecondaryPutDatas = { id: val.id, sort: Number(val.sort) };
      this.classifySecondaryPrompt();
    },
    classifySecondaryChangeName(val) {
      var ManagementTitle = val.name ? val.name : "";
      this.$prompt("改二级分类名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: ManagementTitle,
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          this.$http
            .put("api/category/updateCategory", { id: val.id, name: value })
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.classifySecondaryData();
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
    classifySecondaryChangeState(val) {
      this.classifySecondaryShowMessage = "是否改变上下架状态?";
      const xshelvesState = val.shelvesState == 2 ? 1 : 2;
      this.classifySecondaryPutPath = "api/category/updateCategory";
      this.classifySecondaryPutDatas = {
        id: val.id,
        shelvesState: val.shelvesState == 2 ? 1 : 2
      };
      this.classifySecondaryPrompt();
    },
    classifySecondaryPrompt() {
      this.$confirm(this.classifySecondaryShowMessage, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .put(this.classifySecondaryPutPath, this.classifySecondaryPutDatas)
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.classifySecondaryData();
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
    classifySecondaryDeleteMessage(message) {
      // alert( JSON.stringify(message))
      var htmlShow = "<strong>专栏列表</strong><br>";
      message.zhuanlan.forEach(element => {
        htmlShow += `<span> ${Object.keys(element)} :${
          element[Object.keys(element)]
        }</span><br>`;
      });
      htmlShow += "<strong>快听列表</strong><br>";
      message.kuaiting.forEach(element => {
        htmlShow += `<span> ${Object.keys(element)} :${
          element[Object.keys(element)]
        }</span><br>`;
      });
      // console.log(htmlShow);

      this.$alert("<br>" + htmlShow, "请先取消此关联的音频", {
        dangerouslyUseHTMLString: true
      });
    },
    classifySecondaryDelete(val) {
      // console.log(val.id, val.pId);
      this.$confirm("是否确认删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .get("api/category/deleteCategory?id=" + val.id)
            .then(res => {
              res.data.model instanceof Object
                ? this.classifySecondaryDeleteMessage(res.data.model)
                : this.$message({ type: "success", message: "删除成功" }),
                this.classifySecondaryData();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
    },
    classifySecondaryShowImage(val) {
      // alert(111111111)
      if (val.categoryImg) {
        this.$alert(
          '<div style="display:inline-block;width: 200px;height: 200px;;background:url(' +
            val.categoryImg +
            ');background-size:cover;"></div>',
          "图片样式",
          {
            dangerouslyUseHTMLString: true
          }
        );
      } else {
        this.$message({
          type: "info",
          message: "没有图片"
        });
      }
    },
    changePage(pageData) {
      this.pageData = pageData;
      this.classifySecondaryData();
    },
    goback() {
      history.go(-1);
    },
    emitChange4(Value) {
      // console.log(Value, "value");
      this.EditAdvetData.imageUrl = Value;
    }
  }
};
</script>
<style>
.el-table .cell {
  margin: 4px;
  text-align: center;
}
.add {
  width: 106px;
  height: 136.5px;
}
.management {
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
}

.managContentText {
  text-align: right;
  margin-top: 20px;
}
.gobackmodel {
  height: 140px;
  width: 100%;
  display: inline-block;
  text-align: right;
  padding-right: 80px;
}
.classifySecondarybackSty {
  position: absolute;
  bottom: 60px;
}
.classifySecondaryPromptSty {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
.classifyUnderlyingSty {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
.classifySecondarySty {
  display: inline-block;
  position: fixed;
  top: 15%;
  left: 42%;
  width: 30%;
  min-height: 300px;
  z-index: 2000;
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
