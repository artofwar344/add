<template>
  <div class="app-container">
    <router-view></router-view>
    <el-row  >
      <el-col :offset="16" class="goaddAdvert">
        <!-- <el-button size="small" @click="goaddAdvert">新建内容</el-button> -->
      </el-col>
      <el-col>
        <el-table :data="advertisingData" stripe style="width: 100%">
          <el-table-column prop="name" label="标题" width="120">
            <template slot-scope="scope">
              <span v-text="scope.row.name"></span>
            </template>
          </el-table-column>
          <el-table-column prop="modelStyleId" label="图片" width="180">
            <template slot-scope="scope">
              <!--scope.row.modelStyleId v-html="'<img src='+scope.row.imageUrl+'>'"-->
              <div
                v-html="'<div style=display:inline-block;width:60px;height:60px;background:url('+ scope.row.imageUrl +');background-size:cover;  ></div>'"
                @click="openImg(scope.row)"
              ></div>
            </template>
          </el-table-column>
          <el-table-column label="类型">
            <template slot-scope="scope">
              <span v-text="scope.row.skipText" v-show="scope.row.skipText"></span>
            </template>
          </el-table-column>
          <el-table-column prop="sort" label="排序">
            <template slot-scope="scope">
              <el-input v-model="scope.row.sort" @change="sortChange(scope.row)" size="small"  type="number" style="text-align:center;" ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="shelvesState" label="状态">
            <template slot-scope="scope">{{scope.row.shelvesState == 2? '上架':'下架' }}</template>
          </el-table-column>
          <el-table-column label="管理" width="320">
            <template slot-scope="scope">
              <!-- <el-button size="small" @click="goaddAdvert(scope.row)">编辑</el-button> -->
              <el-button
                size="small"
                @click="changeState(scope.row)"
              >{{scope.row.shelvesState == 2? '下架' : '上架' }}</el-button>
              <el-button size="small" @click="prompta(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
         
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      advertisingData: [],
      indexattrData :{},
      indexType: "",
      thatPage: 1,
      EditAdvertisingData: "",
      skipText: ""
    };
  },
  created() {
    this.getadvertisingData();
  },
  updated() {},
  computed: {
    adversingEdit() {
      //模块编辑
      if (this.indexType != this.indexType) {
        this.getadvertisingData();
      }
      return this.$route.path == "/administer/management/advertising" ||
        this.$route.path == "/administer/vipmanagement/advertising"
        ? true
        : false;
    }
  },
  methods: { 
    
    getadvertisingData() {
      this.$route.path == "/administer/management/advertising"
        ? (this.indexType = "2")
        : (this.indexType = "1");
      this.indexType ? this.indexType : (this.indexType = 2); 
      this.$http
        .get("api/portal/centerAdvert", {
          params: { pgNo: this.thatPage, rowNum: 10, modelId: this.indexType ,modeType:this.indexType}
        })
        .then(res => {
          this.thatPage = res.data.model.currPage;
          this.advertisingData = res.data.model.list;
          this.indexattrData = this.advertisingData[0];
        //s  console.log( this.indexattrData);
          
          this.dataMap(this.advertisingData);
         // console.log(this.advertisingData);
        });
      this.indexName = this.$route.query.indexName;
      this.listLoading = true;
    },
    dataMap(datas) {
      datas.map(item => {
         this.$set(item, "indexType",this.indexType);
        const skipTyp = Number(item.skipType);
        switch (skipTyp) {
          case 13:
            this.$set(item, "skipText", "周年活动");  break;
          case 12:
            this.$set(item, "skipText", "日荐或组图");   break;
          case 10:
            this.$set(item, "skipText", "杂志"); break;
          case 9:
            this.$set(item, "skipText", " 快听"); break;
          case 7:
            this.$set(item, "skipText", "快听专辑");  break;
          case 8:
            this.$set(item, "skipText", "小课");   break;
          case 6:
            this.$set(item, "skipText", "个人主页");   break;
          case 4:
            this.$set(item, "skipText", "专栏");  break;
          case 2:
            this.$set(item, "skipText", "专题");  break;
          case 1:
            this.$set(item, "skipText", "正文");   break;
          case 0:
            this.$set(item, "skipText", "H5");   break;
          default:
            this.$set(item, "skipText", "H5");
        }
      });
    },
    goadversingpath() {},
    goaddAdvert(val) {
      // console.log(this.$route.path+"AddAdvertising");
      if (!val.id) {
        this.$router.push({ path: this.$route.path + "/AddAdvertising" });
      } else {
        this.EditAdvertisingData = val;
        this.$router.push({
          path: this.$route.path + "/EditAdvertising",
          query: {
            indexId: this.$route.query.indexId,
            adverst: val.id
          }
        });
      }
    },
    fn() {
      history.go(-1);
    },
    getOption() {
      this.$http.get("api/portal/model/type").then(res => {
        if (res.data.success === true) this.options = res.data.model;
      });
    },
    openImg(val) {
      if (val.imageUrl) {
        this.$alert(
          '<div style="display:inline-block;width:200px;height:350px;background:url(' +
            val.imageUrl +
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
    sortChange(val) {
      // console.log(val)
      this.showMessage = "是否改变广告的排序?";
      this.postArgument = "api/portal/centerAdvert/" + val.id;
      this.others = {
        id: val.id,
        skipType: val.skipType,
        contentType: val.contentType,
        sort: val.sort
      };

      this.packagingFn(this.showMessage, this.postArgument, this.others);
    },
    changeState(val) {
      this.showMessage = "是否改变广告的上下架状态?";
      this.postArgument = "api/portal/centerAdvert/" + val.id;
      this.others = {
        id: val.id,
        skipType: val.skipType,
        contentType: val.contentType,
        shelvesState: val.shelvesState == 2 ? 1 : 2
      };
      //  if(this.$route.query.indexId) {

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
              this.getadvertisingData();
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
    prompta(val) {
      this.$alert("确认删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "error"
      })
        .then(() => {
          //api/portal/model//udateModelName/{id}/{modelName}
          this.$http
            .delete("api/portal/centerAdvert/" + this.$route.query.indexId, {
              id: val.id
            })
            .then(res => {
              if (res.data.success === true) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
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
    }
  }
};
</script>
<style>
.goaddAdvert {
  margin-bottom: 8px;
}
.subbutton {
  float: right;
  margin-top: 20px;
}
</style> 
