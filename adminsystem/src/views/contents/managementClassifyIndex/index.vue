<template>
  <div>
    <router-view></router-view>
    <div v-show="showClassifyIndex">
      <el-row type="flex" class="tableTop managcolTop" justify="end" :gutter="1">
        <el-col :span="2" :offset="4" :pull="3" class="managtableTop">一级分类名</el-col>
        <el-col :span="3" :offset="1" :pull="2">
          <el-input v-model="ClassifyindexName" size="small"></el-input>
        </el-col>
        <el-col :span="2" :pull="2" class="managtableTop">状态</el-col>
        <el-col :span="3" :offset="2" :pull="2">
          <el-select v-model="ClassifyIndexStatus" placeholder="全部" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3" :pull="2">
          <el-button type="primary" plain @click="searchManagement" size="small">搜索</el-button>
        </el-col>
        <el-col :span="3" :pull="2">
          <el-button @click="classifyIndexCreate()" size="small">新建一级分类</el-button>
        </el-col>
      </el-row>
      <el-table :data="userData" stripe style="width: 100%;height:100%; " v-loading="MLoading">
        <el-table-column prop="name" label="一级分类" align="center">
          <template slot-scope="scope">
            <span v-text="scope.row.name"></span>
          </template>
        </el-table-column>
        <el-table-column prop="sort" label="排序" width="120" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.sort"
              type="number"
              style="text-align: center;"
              @change.native="classifyIndexChangeSort(scope.row)"
              size="small"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="shelvesState" label="状态" align="center">
          <template slot-scope="scope">
            <span
              v-text="scope.row.shelvesState == 1?'下架' :'上架'"
              :class="scope.row.shelvesState == 1?  'blue22':'blue11'"
            ></span>
          </template>
        </el-table-column>
        <el-table-column label="模块管理" width="420" align="center">
          <template slot-scope="scope">
            <el-button
              @click="classifyIndexChangeName(scope.row)"
              :disabled="scope.row.id ==-1"
              size="small"
              type="warning"
            >改名</el-button>
            <el-button @click="goClassifySecondary(scope.row)" type="primary" size="small">二级分类管理</el-button>
            <el-button
              size="small"
              @click="classifyIndexChangeState(scope.row)"
              v-text="scope.row.shelvesState == 1? '上架'   :'下架'"
              :type="scope.row.shelvesState == 1 ?'success': 'info'"
            ></el-button>
            <!-- <el-button
              @click="classifyIndexDelete(scope.row)"
              size="small"
              type="danger"
              :disabled="scope.row.id ==-1"
            >删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <div style="height:40px;width:100%"></div>
      <pagination :pageData="pageData" @pageChange="changePage"></pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "managementClassifyIndex",
      list: null,
      listLoading: false,
      MLoading: false,
      userFlage: false,
      ClassifyindexName: "",
      modPrice: "",
      dataspath: "",
      pageData: {
        page: 1,
        total: 100,
        size: 10
      },
      userData: [],
      ClassifyIndexStatus: 0,
      options: [
        {
          value: 0,
          label: "全部"
        },
        {
          value: 2,
          label: "上架"
        },
        {
          value: 1,
          label: "下架"
        }
      ],
      showMessage: 0,
      postArgument: "",
      others: "",
      indexTypechange: "",
      indexMessage: ""
    };
  },
  computed: {
    showClassifyIndex() {
      return this.$route.path == "/administer/classify";
    }
  },
  created() {
    this.getClassifyIndexData();
  },
  mounted() {
    // this.firstIDBadd();
  },
  methods: {
    getClassifyIndexData() {
      this.$http
        .get("api/category/listCategory", {
          params: {
            name: this.ClassifyindexName,
            pId: 0,
            shelvesState: Number(this.ClassifyIndexStatus),
            pgNo: this.pageData.page,
            rowNum: 30
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
    searchManagement() {
      //  搜索

      this.getClassifyIndexData();
    },
    goClassifySecondary(val) {
      this.$router.push({
        path: this.$route.path + "/secondary",
        query: {
          indexId: val.id,
          modeltype: val.modelTypeId,
          indexName: val.name
        }
      });
    },
    classifyIndexChangeSort(val) {
      this.showMessage = "是否改变排序?";
      this.postArgument = "api/category/updateCategory";
      this.others = { id: val.id, sort: Number(val.sort) };
      this.classifyIndexPrompt(
        this.showMessage,
        this.postArgument,
        this.others
      );
    },
    classifyIndexChangeState(val) {
      this.showMessage = "是否改变上下架状态?";
      const xshelvesState = val.shelvesState == 2 ? 1 : 2;
      this.postArgument = "api/category/updateCategory";
      this.others = {
        id: val.id,
        shelvesState: val.shelvesState == 2 ? 1 : 2
      };
      this.classifyIndexPrompt(
        this.showMessage,
        this.postArgument,
        this.others
      );
    },
    classifyIndexPrompt(showMessage, postArgument, others) {
      this.$confirm(showMessage, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.put(postArgument, others).then(res => {
            if (res.data.success == true) {
              this.$message({
                type: "success",
                message: "成功!"
              });
              this.getClassifyIndexData();
            }
          });
        })
        .catch(() => {
          this.$message({ type: "info", message: "取消" });
        });
    },
    classifyIndexChangeName(val) {
      var classifyName_ = val.name ? val.name : "";
      this.$prompt("改一级分类名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: classifyName_,
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          this.$http
            .put("api/category/updateCategory", {
              id: val.id,
              name: value
            })
            .then(res => {
              if (res.data.success == true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.getClassifyIndexData();
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
    classifyIndexCreate() {
      this.indexMessage = "新建一级分类";
      this.$prompt(this.indexMessage, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          value != null
            ? this.classifyIndexCreateVal(value)
            : this.$message({ type: "info", message: "未输入名字,创建失败!" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消更改"
          });
        });
    },
    classifyIndexCreateVal(CreateValue) {
      this.$http
        .get("api/category/addCategory", {
          params: {
            type: 1,
            pId: 0,
            name: CreateValue,
            categoryImg: ""
          }
        })
        .then(res => {
          if (res.data.model == "1000") {
            this.$message({
              type: "success",
              message: "创建成功!"
            });
            this.getClassifyIndexData();
          } else {
            this.$message({
              type: "info",
              message: "创建失败!"
            });
          }
        });
    },
    changePage(pageData) {
      this.pageData = pageData;
      this.getClassifyIndexData();
    },
    firstIDBadd(val) {
      var db;
      var request = window.indexedDB.open("firstIDB", 1);
      request.onsuccess = function(event) {
        db = request.result;
        var objectStore = db.transaction("firstIDB").objectStore("firstIDB");

        objectStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          // console.log(11111, cursor);

          if (cursor) {
            // console.log("Id: " + cursor.key);
            // console.log("Name: " + cursor.value.name);
            // console.log("Age: " + cursor.value.age);
            // console.log("Email: " + cursor.value.email);
            cursor.continue();
          } else {
            console.log("没有更多数据了！");
          }
        };
      };
    },
    classifyIndexDelete(val) {
      // console.log(val.id, val.pId);
      this.$confirm("是否确认删除", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .get("api/category/deleteCategory?id=" + val.id)
            .then(() => {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              this.getClassifyIndexData();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
    }
  }
};
</script>
<style>
.el-table th > .cell {
  text-align: center;
}
</style>

<style scoped>
.el-table {
  width: 100%;
}
.managcolTop {
  text-align: right;
  font-size: inherit;
  padding-top: -12px;
  padding-bottom: 2px;
  line-height: 40px;
  margin-top: 20px;
}
.managtableTop {
  text-align: right;
  font-size: inherit;
  padding-top: -12px;
  padding-bottom: 2px;
  line-height: 40px;
}
.el-table {
  text-align: center;
}
.el-table th {
  text-align: center;
}
.Span-blue {
  color: #409eff;
}
</style>
