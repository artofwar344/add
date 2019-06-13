<template>
  <div class="app-container">
    <router-view></router-view>
    <el-row type="flex" class="tableTop managcolTop" justify="end" :gutter="1" v-if="pathView">
      <el-col :span="2" class="managtableTop">模块名</el-col>
      <el-col :span="3" :offset="1" >
        <el-input v-model="subject" size="small"></el-input>
      </el-col>
      <!-- <el-col :span="5" v-show="false">价格标题
        <el-input v-model="modPrice"></el-input>
      </el-col>-->
      <el-col :span="2" class="managtableTop">状态</el-col>
      <el-col :span="3" :offset="1">
        <el-select v-model="statusVal" placeholder="全部"  size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" plain @click="searchManagement"  size="small">搜索</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="createIndexModel()"  size="small">新建模块</el-button>
      </el-col>
    </el-row>
    <el-table :data="userData"  stripe style="width: 100%;height:100%; " v-if="pathView">
      <el-table-column prop="name" label="模块"  >
        <template slot-scope="scope">
      <span v-text="scope.row.name" v-if="scope.row.modelTypeId == 14"  class="Span-blue" ></span> 
      <span v-text="scope.row.name" v-else  ></span> 
        </template>
      </el-table-column>
      <el-table-column prop="modelStyleUrl" label="样式"  >
        <template slot-scope="scope">
          <div
            v-html="'<div style=display:inline-block;width:60px;height:60px;background:url('+ scope.row.modelStyleUrl +');background-size:cover;  ></div>'"
            @click="openImg(scope.row)"
          ></div>
        </template>
      </el-table-column>
      <el-table-column prop="shelvesState" label="状态" >
        <template slot-scope="scope">
          <span  v-text="scope.row.shelvesState == 1?'下架' :'上架'" :class="scope.row.shelvesState == 1?  'blue22':'blue11'"></span>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.sort" type="number" style="text-align: center;"  @change.native="sortChange(scope.row)"  size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="模块管理" width="380" >
        <template slot-scope="scope"> 
              <el-button @click="prompta(scope.row)" :disabled="scope.row.modelTypeId == 14" size="small" type="warning">改名</el-button> 
              <el-button @click="goindexContent(scope.row)"  type="primary" size="small">内容管理</el-button> 
              <el-button  size="small"
                @click="changeState(scope.row)" 
                v-text="scope.row.shelvesState == 1? '上架'   :'下架'"
                :type="scope.row.shelvesState == 1 ?'success': 'info'"  
              > </el-button> 
        </template>
      </el-table-column>
    </el-table> 
     <div style="height:40px;width:100%"></div>
    <pagination :pageData="pageData" @pageChange="changePage" v-if="pathView"></pagination>
    <!-- 属性：
		pageData	必传 分页数据
			pageData: {
			  page: 1,
			  total: 100,
			  size: 10
    }-->
  </div>
</template>

<script> 
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      subject: "",
      modPrice: "",
      dataspath: "",
      pageData: {
        page: 1,
        total: 100,
        size: 10
      },
      userData: [],
      statusVal: 0,
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
      indexType: "",
      indexTypechange: "",
      indexMessage: "创建首页模块"
    };
  },
  created() {
    this.fetchData(); 
  },
  computed: {
    pathView() {
      this.$route.path == "/administer/management"
        ? (this.indexType = 2)
        : (this.indexType = 1);
      if (this.indexTypechange != this.indexType) {
        this.pageData.page = 1;
        this.fetchData();
      }
      return this.$route.path == "/administer/management" ||
        this.$route.path == "/administer/vipmanagement"
        ? true
        : false;
    }
  },
  methods: {
    fetchData() {
      this.$route.path == "/administer/management"
        ? (this.indexType = 2)
        : (this.indexType = 1);
      this.indexTypechange = this.indexType;
      this.$http
        .get("api/portal/model/modelList", {
          params: {
            type: this.indexType,
            name: this.subject,
            shelvesState: Number(this.statusVal),
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
          this.userData = res.data.model.list;
        });
      this.listLoading = true;
    },
    searchManagement() {
      //  搜索

      this.fetchData();
    },
    goindexContent(val) {
      this.$router.push({
        // path:
        //   val.modelTypeId != 14
        //     ? this.$route.path + "/indexContent"
        //     : this.$route.path + "/advertising",
        path:  this.$route.path + "/indexContent",
        query: {
          indexId: val.id,
          modeltype: val.modelTypeId,
          indexName: val.name
        }
      });
    },
    sortChange(val) {
    //  // console.log(val);
    //   const sortVal = typeof (Number(val)) 
    //   console.log(sortVal =='number', '数字' ); 
        this.showMessage = "是否改变首页模块的排序?";
        this.postArgument =
          "api/portal/model/modelSort/" + val.id + "/" + val.sort;
        this.others = { modelId: val.id, sort: Number(val.sort) };
        this.packagingFn(this.showMessage, this.postArgument, this.others); 
    },
    changeState(val) {
      this.showMessage = "是否改变模块的上下架状态?";
      const xshelvesState = val.shelvesState == 2 ? 1 : 2
      this.postArgument =  "api/portal/model/shelveOrUnshelve/" + val.id + "/" +xshelvesState ;
      this.others = {
        modelId: val.id,
         shelvesState:  val.shelvesState == 2 ? 1 : 2
      };
      this.packagingFn(this.showMessage, this.postArgument, this.others);
    },
    packagingFn(showMessage, postArgument, others) {
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
              this.fetchData();
            }
          });
        })
        .catch(() => {  this.$message({  type: "info", message: "取消" }); });
    },
    prompta(val) {
      this.$prompt("改模块名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          //api/portal/model//udateModelName/{id}/{modelName}
          this.$http
            .put("api/portal/model/udateModelName", {
              id: val.id,
              name: value
            })
            .then(res => {
              if (res.data.success == true ) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.fetchData();
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
    createIndexModel() {
      this.indexType == 2
        ? (this.indexMessage = "创建首页模块")
        : (this.indexMessage = "创建VIP首页模块");
      this.$prompt(this.indexMessage, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          //api/portal/model//udateModelName/{id}/{modelName}
          this.$http
            .put("api/portal/model/addModel", {
              type: this.indexType,
              name: value,
              modelTypeId : 3
            })
            .then(res => {
              if (res.data.success === true) {
                this.fetchData();
                this.$message({
                  type: "success",
                  message: "成功!"
                });
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
    changePage(pageData) {
      this.pageData = pageData;
      this.fetchData();
    },
    openImg(val) {
      if (val.modelStyleUrl) {
        this.$alert(
          '<div style="display:inline-block;width:260px;height:360px;background:url(' +
            val.modelStyleUrl +
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
    }
  }
}; /* .element.style { 
    height: 40px;  
}
.el-table td {
  padding: 0;
}
.el-table th {
  padding: 4px;
} */
</script>
<style>
.el-table {
  width: 100%;
}
.managcolTop {
  text-align: right;
  font-size: inherit;
  padding-top: -12px;
  padding-bottom: 2px;
  line-height: 40px;
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
.Span-blue{
  color: #409EFF;
}


</style>
