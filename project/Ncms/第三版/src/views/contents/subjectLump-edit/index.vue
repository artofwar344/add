<template>
  <div class="app-container">
    <el-row type="flex" class="tableTop" :gutter="14"> 
      <el-col :span="14" justify="space-between" class="management"> 首页内容管理--{{contentName}}--内容管理 </el-col>
     <el-col :span="4"> 
        <el-button @click="lumppath()">新建内容</el-button> 
      </el-col> 
    </el-row> 
    <el-row>
      <el-col class="radiostyle">
      <!-- <template>
        <el-radio v-model="radioVal" label="1" @change="radioChange(radioVal)">全部上架</el-radio>
        <el-radio v-model="radioVal" label="2" @change="radioChange(radioVal)">全部下架</el-radio>
      </template> -->
      </el-col>
    </el-row>
      
    <el-table
    :data="userData"
    stripe
    style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"  width="120">
        <template slot-scope="scope" >
        <span v-text ="scope.row.id" ></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="modelStyleId"
        label="标题"  width="120">
         <template slot-scope="scope">
          <div v-text="scope.row.name"></div>
        </template>
      </el-table-column>
      <el-table-column
      prop="modelStyleId"
      label="价格"  
      width="120">
        <template slot-scope="scope">
          <div v-text="scope.row.price"></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="sort"
        label="排序" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.sort" @change="sortChange(scope.row)"  type="number" style="text-align:center;" ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="shelvesState"
        label="状态" width="120">
        <template slot-scope="scope"> 
           {{scope.row.shelvesState == 2? '下架' :'上架'}}
        </template>
      </el-table-column>
      <el-table-column  label="首页内容管理" width="380">
         <template slot-scope="scope">
          <el-button @click="delSubject(scope.row)" >删除</el-button>
          <el-button v-if="false" >内容管理</el-button>
          <el-button @click="changeState(scope.row)">下架</el-button> 
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script> 

export default { 
  data() {
    return {
    list: null,
    listLoading: true,
    subject: '', 
    userData: [], 
    contentName: '',
    showMessage: '',
    postArgument: '',
    others: '',
    indexType: '',
    radioVal: '',
    pageData: { page: 1, total: 100,  size: 10 	} ,

    }
  },
  created() {
    this.lumpData() 
  },
  methods: {
    lumpData() {
      //console.log(this.$route.query)
      // this.$route.path =='/administer/management' ? this.indexType = 1 : this.indexType = 2 ;
      // if(this.$route.query.modelId &&this.$route.query.contentId){
      // this.$http.get('api/portal/theme/'+this.$route.query.modelId+'/'+this.$route.query.contentId+'/content',
      // {params: {pgNo: 1, rowNum: 10 ,id:this.$route.query.modelId ,mid:this.$route.query.contentId }
      // }).then(res=>{
      //   // console.log(res);
      //   this.userData =res.data.model.list
      // })} api/portal/theme/{id}/{mid}/content
      console.log(this.$route.query);
      
      this.$http
        .get("api/portal/theme/" + this.$route.query.modelId+'/'+ this.$route.query.contentId+'/content', {
          params: {
            id: this.$route.query.modelId,
            mid:this.$route.query.contentId,
             pgNo: this.pageData.page,
            rowNum:  30 }//this.pageData.size
        })
        .then(res => { 
          if (res.data.model.list instanceof Array) {
             this.pageData = {
            page: res.data.model.currPage,
            size: res.data.model.rowsPerPage,
            total: res.data.model.totalRowCount
          };
            this.userData = res.data.model.list;
          }
        })
      this.listLoading = true
    },
    searchManagement(){ //  搜索
      this.lumpData()
    },
    lumppath(){
      //  根据路由跳转新增编辑
      this.$router.push({path: '/administer/subject/lumpadd' ,query :this.$route.query})
    },
    radioChange(radioVal) {

    },
    sortChange(val){  
      this.showMessage ='是否改变内容的排序?';
      this.postArgument = 'api/portal/model/'+val.id+'/content'
      this.others =   {'id': val.id ,'sort': Number(val.sort) } 
      this.packagingFn(this.showMessage,this.postArgument,this.others)
    },
    changeState(val) {
     // console.log(val.shelvesState);
      
      this.showMessage ='是否改变内容的上下架状态?';
      this.postArgument = 'api/portal/model/shelveOrUnshelve' 
      this.others = {'modelId': val.id ,'shelvesState': val.shelveState }
      this.packagingFn(this.showMessage,this.postArgument,this.others)
    },
    packagingFn(showMessage,postArgument,others){
      this.$confirm(showMessage , '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
          this.$http.put(postArgument,others).then(res=> {
              if (res.data.success === true) {
                this.$message({
                    type: 'success',
                    message: '成功!'
                  }); 
                  this.lumpData() ;
              }
            // console.log(res)
            })

          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消'
            });          
          });
    },
    delSubject(val) {
      this.$confirm('删除这个内容？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消', 
          inputErrorMessage: 'error'
        }).then(({ value }) => { 
          this.$http.delete('api/portal/theme/'+this.$route.query.modelId+'/model/'+this.$route.query.contentId+'/centent/'+ val.id, {id :this.$route.query.modelId,mid: this.$route.query.contentId,cid: val.id  }).then(res=> {
              if (res.data.success === true) {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                  }); 
                  this.lumpData() 
              } 
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消更改'
          });       
        });
    }, 
    changePage(pageData){
      this.pageData = pageData;
        this.subjectModelData();
    }
  }
}
</script>
<style>
  .management {
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
  }
  .radiostyle {
  width: 100%;
  height: 40px; 
  text-align: right;
  line-height: 40px;
  }
    
</style>
