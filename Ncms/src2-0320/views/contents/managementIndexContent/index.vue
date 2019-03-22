<template>
  <div class="app-container">
    <router-view></router-view> 
    <el-row type="flex" class="tableTop" justify="center" v-if="contentPath">
      <el-col :span="8" class="management" :offset="2">首页内容--{{indexName}}--管理</el-col>
      <el-col :span="4">
        <el-button @click="goaddContent()" size="small">新建内容</el-button>
      </el-col>
    </el-row>
    <el-row v-if="contentPath">
      <el-col class="radiostyle">
        <!-- <template>
        <el-radio v-model="radioVal" label="1" @change="radioChange(radioVal)">全部上架</el-radio>
        <el-radio v-model="radioVal" label="2" @change="radioChange(radioVal)">全部下架</el-radio>
        </template>-->
      </el-col>
    </el-row>

    <el-table :data="userData" stripe style="width: 100%;height: 100%;" v-if="contentPath">
      <el-table-column prop="id" label="内容ID" width="80">
        <template slot-scope="scope">
          <span v-text="scope.row.attrId"></span>
        </template>
      </el-table-column>
      <el-table-column prop="modelStyleId" label="标题">
        <template slot-scope="scope">{{scope.row.title}}</template>
      </el-table-column>
      <!-- <el-table-column
      prop="modelStyleId"
      label="价格"  
      width="120"> 
      </el-table-column>-->
      <el-table-column prop="sort" label="排序" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.sort" @change="sortChange(scope.row)" size="small"  type="number" style="text-align:center;" ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="shelvesState" label="状态" width="120">
        <template slot-scope="scope"
        >  
           <span  v-text="scope.row.shelvesState == 1?'下架' :'上架'" :class="scope.row.shelvesState == 1?  'blue22':'blue11'"></span>
        </template>
      </el-table-column>
      <el-table-column label="首页内容管理" width="380" >
        <template slot-scope="scope">
          <el-button @click="changeManagementName(scope.row)" size="small" type="warning">{{ '改名' }}</el-button>
          <el-button @click="goContentEdit(scope.row)" size="small" type="primary">编辑</el-button>
          <el-button
            @click="changeState(scope.row)"
            size="small"
            v-text="scope.row.shelvesState == 1? '上架'   :'下架'"
            :type="scope.row.shelvesState == 1 ?'success' :'info'"  
          > </el-button>
          <el-button
            scope.row.model =" this.model"
            @click="deleteDATA(scope.row)"
            size="small"
             v-show="scope.row.modelTypeId ==14"
            type="danger"
         >删除</el-button> <!--  -->
        </template>
      </el-table-column>
    </el-table>
    <el-row class="managContentText" v-if="contentPath"></el-row>
    <div class="gobackmodel" v-if="this.$route.path=='/administer/management/indexContent'|| this.$route.path=='/administer/vipmanagement/indexContent'">
      <el-button @click="goback" class="gobackmodelbu">返回</el-button>
      <pagination :pageData="pageData" @pageChange="changePage" v-if="contentPath"></pagination>
    </div>
  </div>
</template>

<script>
import { getUrlkey } from "@/utils/auth";

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      subject: "",
      userData: [],
      indexName: "",
      showMessage: "",
      postArgument: "",
      others: "",
      indexType: "",
      radioVal: "",
      gonewPatha: "", 
      showDelete: '', 
      pageData: {
        page: 1,
        total: 100,
        size: 30
      },
      model: false
    };
  },
  beforeCreate(){
    // console.log(this.$route.query.modeltype, "before值");
    this.showDelete = this.$route.query.modeltype
    if( this.showDelete ==14) {
      this.model =true
    }
    
  },
  created() {
    this.modelData();
    this.gonewPath;
    this.modelVal();
  },
  updated() { 
  //  setTimeout(( ) =>{  this.modelData();}, 3000 );
  },
  watch: {
    showDelete(val) {
      this.showDelete = val; 
      // console.log(this.$route.query.modeltype, "值");
    },
     $route(route) {
      this.modelData()
    } 
  },
  computed: {
    contentPath() {
      //||this.$route.path == '/administer/vipmanagement/advertising' || this.$route.path =='/administer/management/advertising'
      return this.$route.path == "/administer/management/indexContent" ||
        this.$route.path == "/administer/vipmanagement/indexContent"
        ? true
        : false;
    }, 
    gonewPath() {
      if (this.$route.path == "/administer/management/indexContent") {
        if (this.$route.query.modeltype != 14) {
          this.gonewPatha = "/administer/management/indexAddContent";
        } else {
          this.gonewPatha =
            "/administer/management/indexContent/advertisingadd";
        }
        return this.gonewPatha;
      } else if (this.$route.path == "/administer/vipmanagement/indexContent") {
        if (this.$route.query.modeltype != 14) {
          this.gonewPatha = "/administer/vipmanagement/indexAddContent";
        } else {
          this.gonewPatha =
            "/administer/vipmanagement/indexContent/advertisingadd";
        }
        return this.gonewPatha;
      }
    }
  },
  mounted() {
    // alert(getUrlkey)
  },
  methods: {
    modelData() {
      this.$route.path == "/administer/management/indexContent"
        ? (this.indexType = "1")
        : (this.indexType = "2");
      this.indexType ? this.indexType : (this.indexType = 2);
      // console.log(this.indexType)
      // console.log(this.contentPath ,'path------');
      if (this.contentPath ==true) { 
        this.$http
        .get("api/portal/model/modelContentList", {
          params: {
            pgNo: this.pageData.page,
            rowNum: 30,
            modelId: this.$route.query.indexId
          }
        })
        .then(res => {
          this.pageData = {
            page: res.data.model.currPage,
            size: 30,
            total: res.data.model.totalRowCount
          };
          this.userData = res.data.model.list;
        });
      this.indexName = this.$route.query.indexName;
      }
      this.listLoading = true;
    },
    searchManagement() {
      //  搜索
      this.modelData();
    },
    goaddContent() {
      //  根据路由跳转新增
      this.$router.push({ path: this.gonewPatha, query: this.$route.query });
    },
    goContentEdit(val) {
      //  根据路由跳转新增编辑 contentEdit (this.$route.query).contentEditId = val.id }) 

      const queryX = this.$route.query;
      const value = this.$route.query.modeltype != 14 ? val.id : val.attrId;
      const page = this.pageData.page;
      eval(" queryX.contentEdit " + "='" + value + "'");
      eval(" queryX.page" + "='" + page + "'");
      if (this.$route.query.modeltype != 14) {
        this.$router.push({
          path: this.$route.path + "/contentEdit",
          query: queryX
        });
      } else {
        // alert(this.$route.path + "/advertisingadd")
        this.$router.push({
          path: this.$route.path + "/advertisingedit",
          query: queryX
        });
      }
    },
    goback() {
      // console.log(this.$route)
      history.go(-1);
    },
    radioChange(radioVal) {},
    sortChange(val) {
      this.showMessage = "是否改变内容的排序?";
      this.postArgument =
        "api/portal/model/" + this.$route.query.indexId + "/content";
      this.others = { id: val.id, sort: Number(val.sort) };
      this.packagingFn(this.showMessage, this.postArgument, this.others);
    },
    changeState(val) {
      this.showMessage = "是否改变内容的上下架状态?";
      this.postArgument =
        "api/portal/model/" + this.$route.query.indexId + "/content";
      this.others = {
        id: val.id,
        shelvesState: val.shelvesState == "1" ? 2 : 1
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
            if (res.data.success === true) {
              this.$message({
                type: "success",
                message: "成功!"
              });
              this.modelData();
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
    changeManagementName(val) {
      this.$prompt("改内容名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          this.$http
            .put("api/portal/model/" + this.$route.query.indexId + "/content", {
              id: val.id,
              title: value
            })
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.modelData();
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
      this.modelData();
    },
    modelVal() {
      const Urlkey = this.$route.query.modeltype;
      // console.log(Urlkey, "key 类型");
      if (Urlkey == 14) {
        this.showDelete = 14;
      }
    },
    deleteDATA(val) {
      if(this.$route.query.modeltype ==14) {
        this.$confirm('是否确认删除', "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }) .then(() => { 
        this.$http.delete('api/portal/centerAdvert/'+ val.attrId ,{id :val.attrId}).then( request1 =>{
          this.$http.delete('api/portal/model/'+this.$route.query.indexId+'/content/'+val.id ,{id :this.$route.query.indexId ,cid : val.id}).then(request2 =>{ 
             this.modelData();
           // alert('删除成功')
          })
        }) 
       }) .catch(() => {  this.$message({  type: "info", message: "取消" }); });
      }
    }
  }
};
</script>
<style>
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
.radiostyle {
  width: 100%;
  height: 24px;
  padding-right: 40px;
  text-align: right;
  line-height: 100%;
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
.gobackmodelbu {
  position: absolute;
  bottom: 60px;
}
</style>
