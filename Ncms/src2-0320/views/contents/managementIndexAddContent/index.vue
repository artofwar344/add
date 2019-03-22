<template>
  <div class="app-container">
    <router-view></router-view>
    <el-row type="flex" justify="end" class="addcontentText tableTop" v-if="addcontentPath">
      <el-col :span="3">标题</el-col>
      <el-col :span="3" :offset="1">
        <el-input v-model="modelname" size="small"></el-input>
      </el-col>
      <!-- <el-col>  价格   </el-col><el-input v-model="modelprice"></el-input>-->
      <el-col :span="2">类型</el-col>
      <el-col :span="3" :offset="1">
        <!-- @focus.once="modelsVal()"v-bind="selectVal" disabled ="selectVal" -->
        <el-select v-model="modelTypes" placeholder="全部" size="small">
          <el-option v-for="item in selectVal" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-button @click="showRes" size="small">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="userData" stripe style="width: 100%;height:100;" v-if="addcontentPath">
      <el-table-column label="ID">
        <template slot-scope="scope">
          <span v-text="scope.row.id"></span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="400">
        <template slot-scope="scope">
          <span v-text="scope.row.name"></span>
        </template>
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          <span v-text="scope.row.price"></span>
        </template>
      </el-table-column>
      <el-table-column label="选择">
        <template slot-scope="scope">
          <el-checkbox label="选中" v-model="scope.row.checked" @change="fn(scope.row)"></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="addcontentindexTextpo" v-if="addcontentPath">
      <el-button size="small" @click="goback()">取消</el-button>
      <el-button size="small" @click="keepcontent">保存</el-button>
      <!--  @click="goback"-->
    </el-row>
    <pagination :pageData="pageData" @pageChange="changePage"></pagination>
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
      showMessage: "",
      postArgument: "",
      others: "",
      indexType: "",
      pageData: {
        page: 1,
        total: 100,
        size: 30
      },
      radioVal: "",
      modelname: "",
      modelprice: "",
      paramsargument: {},
      modelTypes: "",
      gobackpatha: "",
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
        { id: 3, name: "免费专区" },
        { id: 16, name: "主题书单" },
        { id: 17, name: "vip会员权益图片" },
        { id: 18, name: "首页底部文章" }
      ],
      postdata: [],
      postneed: 0
    };
  },
  created() {
    this.gobackpath;
   // console.log(this.$route.query.modeltype);
  },
  computed: {
    addcontentPath() {
      return this.$route.path == "/administer/management/indexAddContent" ||
        this.$route.path == "/administer/vipmanagement/indexAddContent" ||
        this.$route.path == "/administer/vipmanagement/advertising" ||
        this.$route.path == "/administer/management/advertising"
        ? true
        : false;
    },
    selectVal() {
      // if (this.$route.query.modeltype == 15 ||this.$route.query.modeltype == 14) {
      //   return this.models;
      // } else {
        if (this.$route.query.modeltype) {
          this.models = new Array(this.models[this.$route.query.modeltype - 1]);
          if (this.models[0]["id"]) {
            this.modelTypes = this.models[0]["id"];
          }
          return this.models;
        }
      // }
    },
    gobackpath() {
      if (this.$route.path == "/administer/management/indexAddContent") {
        return (this.gobackpatha = "/administer/management/indexContent");
      } else if (this.$route.path == "/administer/management/indexAddContent") {
        return (this.gobackpatha = "/administer/vipmanagement/indexContent");
      }
    }
  },
  methods: {
    fn(val) {
      // this.checked = !this.checked;
      if (this.$route.query.modeltype == 14) {
        const ItemValue  =val
        this.keepcontent( ItemValue);
      }
    },
    goback(row) {
      history.go(-1);
    },
    showRes() {
      this.$route.path == "/administer/management/addcontent"
        ? (this.indexType = "2")
        : (this.indexType = "1");
      this.indexType ? this.indexType : (this.indexType = 2);
      if (this.modelTypes || this.modelname) {
        this.$http
          .get("api/portal/model/searchContent", {
            params: {
              modelType: this.modelTypes,
              name: this.modelname,
              price: Number(this.modelprice),
              pgNo: this.pageData.page,
              rowNum: 30
            }
          })
          .then(res => {
            if (
              res.data.model.list instanceof Array &&
              res.data.model.list.length > 0
            ) {
              this.pageData = {
                page: res.data.model.currPage,
                size: 30,
                total: res.data.model.totalRowCount
              };
              this.userData = res.data.model.list;
              this.userData.forEach(item => {
                this.$set(item, "checked", false);
              });
            } else {
              this.userData = [];
              this.$message({
                type: "success",
                message: "没有找到内容"
              });
            }
          });
      } else {
        this.userData = [];
      }
      this.listLoading = false;
    },
    goback() {
      // 返回
      history.go(-1);
    },
    keepcontent(ItemValue) {
      this.$confirm("是否确认保存？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        distinguishCancelAndClose :false,
        type: "warning"
      })
        .then(() => {
          if (this.$route.query.modeltype !=15 ) {
            this.userData.map(item => {
              if (item.checked) {
                // this.postcontent({id :item.id,name :item.name ,imageUrl : item.imageUrl,
                // description :item.description })
                //console.log( this.postneed)
                this.postdata[this.postneed] = {
                  title: item.name,
                  imageUrl: item.imageUrl,
                  description: item.description,
                  modelTypeId: this.modelTypes,
                  attrId: item.id
                };
                this.postneed++;
              }
            });
            this.postcontent(this.postdata);
            if(this.$route.query.modeltype == 14) {
               this.addAdverst(ItemValue)
            }
          }else { 
             this.userData.map(item => { if (item.checked ) {
              if ( item.price !=0) { 
              const h = this.$createElement;
              this.$notify({
              title: '提示信息',
              type: 'warning',
              message: h('span', { style: 'color: blue'},
              '请选择价格为零的选项!')
              }); 
              distinguishCancelAndClose =true
              }
             }})
             this.userData.map(item => {
              if (item.checked ) {
                this.postdata[this.postneed] = {
                  title: item.name,
                  imageUrl: item.imageUrl,
                  description: item.description,
                  modelTypeId: this.modelTypes,
                  attrId: item.id
                };
                this.postneed++;
              }
            });             
            this.postcontent(this.postdata);
          }
        })
        .catch(() => {
          this.$message({ type: "info", message: "取消" });
          
          this.postneed = 0;
        });
    },
    addAdverst(val) {
      const Adverst = {
        name: val.name,
        skipType: 0,
        contentType: 0,
        modelType: this.indexType,
        attrId: val.id,
        imageUrl: val.imageUrl
      };
      this.$http.post('api/portal/centerAdvert',  Adverst).then( res=>{}) 
      
    },
    postcontent(params) {
      this.$http
        .post(
          "api/portal/model/" + this.$route.query.indexId + "/content",
          params
        )
        .then(res => {
          if (res.data.success === true) {
            this.$router.push({
              path: this.gobackpatha,
              query: this.$route.query
            });
            this.postneed = 0;
            this.postdata = []; 
            //  console.log(this.$route.path ,'路径') 
             if(this.$route.path == '/administer/management/indexAddContent') {
               this.$router.push({path:'/administer/management/indexContent',query:this.$route.query  })
             }else if(this.$route.path == '/administer/vipmanagement/indexAddContent'){
               this.$router.push({path: '/administer/vipmanagement/indexContent' ,query:this.$route.query})
             }
             
            this.$message({ type: "success", message: "成功!" });
          }
        });
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
              
              // this.$router.push("/administer/management/indexContent")
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
    modelsVal() {
      // tyle 列表
      this.$http.get("api/portal/model/style").then(res => {
        if (res.data.model) {
          this.models = res.data.model;
        }
      });
    },
    changePage(pageData) {
      this.pageData = pageData;
      this.showRes();
    }
  }
};
</script>
 <style scoped>
/* .el-table td {
  padding:4px;
}
.el-table .cell { 
  width: 32px;
    line-height: 23px;
} */
.app-container {
  padding-bottom: 80px;
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
  height: 40px;
  text-align: right;
  line-height: 40px;
}
.addcontentindexTextpo {
  position: absolute;
  right: 10px;
  bottom: 18px;
  height: 46px;
  width: 100%;
  text-align: right;
}
.addcontentText {
  text-align: right;
  line-height: 40px;
  margin-bottom: 6px;
}
</style>
