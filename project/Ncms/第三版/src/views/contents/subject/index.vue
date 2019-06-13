<template>
  <div class="app-container">
    <router-view></router-view>
    <el-row type="flex" justify="end" class="tableTop" 
     v-if="subjectPath" >
      <el-col :span="2" justify="space-between" class="subjectcontentText">专题名</el-col>
      <el-col :span="3">
        <el-input  size="small" v-model="subject"></el-input>
      </el-col>
      <el-col :span="2" justify="space-between" class="subjectcontentText">状态</el-col>
      <el-col :span="3">
        <el-select  size="small" v-model="modelStatusval" placeholder="全部">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-button  size="small" type="primary" plain @click="search">搜索</el-button>
      </el-col>
      <el-col :span="3">
        <el-button  size="small" @click="createModel()">新建专题</el-button> 
      </el-col>
    </el-row>
    <el-table
      :data="userData"
      v-loading="subLoading"
      stripe
      style="width: 100%;height:100%;"  
       v-if="subjectPath"
    >
      <el-table-column prop="id" label="ID" width="120">
        <template slot-scope="scope">
          <span v-text="scope.row.theme.id"></span>
        </template>
      </el-table-column>
      <el-table-column prop="theme.name" label="专题名" ></el-table-column>
     <el-table-column prop="shelvesState" label="状态" width="100"> <!--{{scope.row.shelvesState == 1? '下架' :'上架'}}  -->
        <template slot-scope="scope"><span  v-text="scope.row.theme.shelvesState == 1?'下架' :'上架'" :class="scope.row.theme.shelvesState == 1?  'blue22':'blue11'"></span></template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" width="100">
        <template slot-scope="scope">
          <el-input  size="small" v-model="scope.row.theme.sort" @change="sortMChange(scope.row)"  type="number" style="text-align:center;" ></el-input>
        </template>
      </el-table-column>
      <el-table-column label="专题管理" width="380">
        <template slot-scope="scope">
          <el-button  size="small" @click="gocreatemodel(scope.row)"  type="warning"> 编辑</el-button>
          <el-button  size="small" @click="changeMstate(scope.row)" v-text="scope.row.theme.shelvesState == 1? '上架'   :'下架'"
                :type="scope.row.theme.shelvesState == 1 ?'success': 'info'"
                > </el-button>
                <!-- :disabled="scope.row.modelsStatus ==0" -->
          <el-button  size="small" @click="gomodel(scope.row)"  type="primary">模块管理</el-button>
          <el-button  size="small" @click="delContent(scope.row)"  type="danger"  :disabled="scope.row.theme.shelvesState ==2">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
     <div style="height:200px;width:100%"></div>
     	<pagination :pageData="pageData" @pageChange="changePage" v-if="subjectPath" style="position:absolute;bottom:0;" ></pagination>
  </div>
</template>

<script>
import axios from "axios";
import { log } from 'util';

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      subLoading: true,
      subject: "",
      modelStatusval: '',
      statusVal: '',
      options: [ 
        { value: 2, label: "上架" },
        { value: 1, label: "下架" },
        { value: 0, label: "全部" }
      ],
      pageData: { page: 1, total: 100,  size: 30 	} ,
      userData: []
    };
  },
  created() {
    this.subjectData();
  },
  computed :{
    subjectPath() {
      return this.$route.path =="/administer/subject/index" ? true : false;
    }
  },
  watch :{
    $route(route) {
      this.subjectData();
    }
  },
  methods: {
    subjectData() {
      this.$route.path == "/administer/management"
        ? (this.indexType = 1)
        : (this.indexType = 2);
      this.$http
        .get("api/portal/theme", {
          params: {
            pgNo: this.pageData.page,
            rowNum: 30,
            name: this.subject,
            shelvesState : this.statusVal
          }
        })
        .then(res => {
          // console.log(res);
          if (res.data.success == true) {
            this.pageData = {
            page: res.data.model.currPage,
            size: 30,
            total: res.data.model.totalRowCount
          };
            this.subLoading=false; 
            this.userData = res.data.model.list; 
          }
        });
      this.listLoading = true;
    },
    createModel() { 

      //  根据路由跳转新增编辑 "/administer/subject/addcontent" 
      this.$router.push({ path: '/administer/subject/index/addmodel' });
    },
    push() {
      // this.dataspath =this.$route.path
      this.$router.push({ path: this.$route.path + "/edit" });
    },
    search() {
      this.statusVal = Number(this.modelStatusval);
      this.subjectData();
    },
    gomodel(val) { 
      this.$router.push({
        path:  '/administer/subject/model',
        query: { modelId: val.theme.id ,modelName: val.theme.name}
      });
    },
    delContent(lumpId) {
        this.$http.get('api/portal/theme/'+  lumpId.theme.id).then( result => {  
        if(result.data.model.list.length <1 ) { 
      this.$confirm("是否删除这个专题?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .delete("api/portal/theme/" + lumpId.theme.id, {
              params: { id: lumpId.theme.id }
            })
            .then(res => {
              this.$message({
                type: "success",
                message: "成功!"
              });
              this.subjectData();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
        }else {
          console.log(result.data.model.list.length,'result.data.model.list.length');
          
           this.$message({
            type: "info",
            message: "请删除完专题下所有内容"
          });
        }
      })
    },
    sortMChange(svalue) {
      this.showMessage = "是否改变专题的排序?";
      this.postArgument = "api/portal/theme/" + svalue.theme.id;
      this.others = { id: svalue.theme.id, sort: svalue.theme.sort };
      this.packagingFn(this.showMessage, this.postArgument, this.others);
    },
    changeMstate(val) {
      this.$http.get('api/portal/theme/'+ val.theme.id).then( result => {  
        if(result.data.model.list.length >0 ) { 
          
           this.showMessage = "是否改变专题的上下架状态?";
          this.postArgument = "api/portal/theme/" + val.theme.id;
          this.others = {
          modelId: val.theme.id,
          shelvesState: val.theme.shelvesState == 2 ? 1 : 2
          };
          this.packagingFn(this.showMessage, this.postArgument, this.others);
        }else {
          this.$confirm( "专题下没有模块,不能上下架", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
            type: "error"
          }).then( () =>{
            this.$message({ type: "info",  message: "取消更改" }); 
          }).catch( () =>{
            this.$message({ type: "info",  message: "取消更改" }); 
          })         
       }
        
      }) 
    },
    packagingFn(showMessage, postArgument, others) {
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
              this.subjectData();
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
    gocreatemodel(val) {
      if(val.theme.id) {
        this.$router.push({ path: '/administer/subject/index/editmodel' ,query :{ mid: val.theme.id ,page:this.pageData.page } });
      }else {
        this.$router.push({ path: '/administer/subject/index/editmodel' ,query:this.$route.query });
      }
    },
    prompta(val) {
      this.$prompt("改"+val.name?val.name:'模块'+"名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          this.$http
            .put("api/portal/theme/" + val.theme.id, { id: val.theme.id, name: value })
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.subjectData();
              }
            });
        })
        .catch(() => {
          this.$message({ type: "info",  message: "取消更改" });
        });
    } ,
    changePage(pageData){
				this.pageData = pageData;
				this.subjectData();
			}
  }
};
</script>
<style>
.subjectcontentText {
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
}
</style>


 