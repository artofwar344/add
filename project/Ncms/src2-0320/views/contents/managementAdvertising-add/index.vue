 <template>
  <div>
    <el-form class="subjectStyle" v-model="advertdata" @submit.native.prevent>
      <h3>广告</h3>
      <el-form-item :label="advertdata.subjectVal">
        <el-input v-model="EditAdvetData.name"></el-input>
      </el-form-item>
      <el-form-item :label="advertdata.subject">
        <manage-content v-on:emitChange4="emitChange4" :EditData="EditAdvetData" :modelnimg="modelnimg"></manage-content>
      </el-form-item>
      <el-form-item label-width="100px;" :label="advertdata.subjectType">
        <el-tabs v-model="tanpeNmae">
          <el-tab-pane label="App跳转" name="first">
            <el-form-item label="跳转页面" class="padding-form">
              <span v-text="'类型：' + this.showSkipType" style="padding:12px;"></span> 
              <span v-if="this.EditAdvetData.contentType !=1"
                v-text="this.contentItem.name ?'标题: '+ this.contentItem.name+';价格:'+ this.contentItem.price: '标题 价格 '"
                style="padding:0 40px;"
              ></span>
            </el-form-item>
            <el-form-item label="页面" class="padding-form">
              <div style="float:left;">
                <el-select v-model="EditAdvetData.contentType" placeholder="请选择" size="small" @change ="contentTypeChange(EditAdvetData.contentType)">
                  <el-option label="内容详情页" :value="0" v-show="showContent"></el-option>
                  <el-option label="vip详情页" :value="1"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <!-- v-show="showContent" -->
            <el-form-item label="标题" class="padding-form" v-if="this.EditAdvetData.contentType !=1">
              <div class="advertSearch">
                <el-input
                  v-model="advertdata.managementName"
                  size="small"
                  style="width:183px;float:left;"
                ></el-input>
                <div class="contentdiv">类型</div>
                <el-select v-model="EditAdvetSkipeType" placeholder="请选择" size="small">
                  <el-option
                    v-for="item in models"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
                <el-button size="small" @click="searchAdvert">搜索</el-button>
              </div>
            </el-form-item>
            <add-table v-show="flag" :UserData="UserData" v-on:getuserData="getuserData"></add-table>
            <div style="width:100%;height:80px;"></div>
            <pagination :pageData="pageData" @pageChange="changePage" v-if="flag"></pagination>
          </el-tab-pane><!--  v-if="this.EditAdvetData.contentType !=1" -->
          <el-tab-pane label="外部链接" name="second">外部链接
            <el-input v-model="advertdata.outUrl" :disabled=" this.$route.path=='/administer/vipmanagement/indexContent/advertisingedit' ||this.$route.path=='/administer/vipmanagement/indexContent/advertisingadd'"></el-input>
          </el-tab-pane>
        </el-tabs>
      </el-form-item>
      <el-form-item>
        <el-button @click="advertCancel">取消</el-button>
        <el-button @click="createdAdverst">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import addTable from "./add-table.vue";
import { log } from 'util';
export default {
  data() {
    return {
      name: "addsubject",
      indexType: "",
      flag: false,
      UserData: {},
      contentItem: {},
      tanpeNmae: "first",
      advertdata: {
        subjectVal: "标题",
        subject: "图片",
        subjectType: "跳转类型",
        outUrl: "",
        managementName: "",
        name :''
      },

      EditAdvetSkipeType: "",
      EditAdvetData: {
        modelType: "",
        name: "",
        skipType: "",
        contentType: "",
        linkUrl: "",
        imageUrl: ""
      },
      skipes: [
        { label: "H5", value: 0 },
        { label: "正文", value: 1 },
        { label: "专题", value: 2 },
        { label: "专栏", value: 4 },
        { label: "个人主页", value: 6 },
        { label: "快听专辑", value: 7 },
        { label: "小课", value: 8 },
        { label: "快听", value: 9 },
        { label: "杂志", value: 10 },
        { label: "日荐或组图", value: 11 },
        { label: "周年活动", value: 12 },
        { label: "购买VIP页面", value: 13 }
      ],
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
        { id: 11, name: "文章" },
        { id: 12, name: "听外刊" },
        { id: 13, name: "专题列表" },
        { id: 15, name: "免费专区" },
        { id: 16, name: "主题书单" },
        { id: 18, name: "首页底部文章" }
      ],
      type: "",
      EditAdvetData: {
        name: "",
        outUrl: ""
      },
      form: {},
      showSkipType: "",
       pageData: {
        page: 1,
        total: 100,
        size: 10
      },
      modelnimg:{
        width: 750,
        height: 250 
        // width: 500,
        // height: 333 
      },
    };
  },
  components: {
    addTable
  },
  created() {
    this.advertsData(); 
    if (
        this.$route.path ==
          "/administer/vipmanagement/indexContent/advertisingadd" ||
        this.$route.path ==
          "/administer/vipmanagement/indexContent/advertisingedit"
      ) { this.modelnimg ={ width: 726,  height: 540  } } 
  },
  computed: {
    advertPath() {
      // 广告编辑 新建
      this.$route.path == "/administer/management/indexContent/advertisingadd"
        ? (this.indexType = 2)
        : (this.indexType = 1);
      return this.$route.path ==
        "/administer/management/indexContent/advertisingadd" ||
        this.$route.path ==
          "/administer/vipmanagement/indexContent/advertisingadd"
        ? true
        : false;
    },
    showContent() {
      if (
        this.$route.path ==
          "/administer/management/indexContent/advertisingadd" ||
        this.$route.path ==
          "/administer/management/indexContent/advertisingedit"
      ) {
        // VIP广告  
        this.tanpeNmae = "second";
        return true;
      } else {
        this.tanpeNmae = "first";
        this.EditAdvetData.contentType =1;
        return false;
      }
    }
  },
  watch: {    
    showSkipType(val) {
      this.showSkipType = val;
      if (this.EditAdvetData.skipType) {
        const skipTypeValue = Number(this.EditAdvetData.skipType);
      //  console.log(this.EditAdvetData.skipType);
        switch (skipTypeValue) {
          case 13:
            this.showSkipType = "购买VIP页面";
            break;
          case 12:
            this.showSkipType = "日荐或组图";
            break;
          case 10:
            this.showSkipType = "杂志";
            break;
          case 9:
            this.showSkipType = " 快听";
            break;
          case 7:
            this.showSkipType = "快听专辑";
            break;
          case 8:
            this.showSkipType = "小课";
            break;
          case 6:
            this.showSkipType = "个人主页";
            break;
          case 4:
            this.showSkipType = "专栏";
            break;
          case 2:
            this.showSkipType = "专题";
            break;
          case 1:
            this.showSkipType = "正文";
            break;
          case 0:
            this.showSkipType = "H5";
            break;
          default:
            this.showSkipType = "";
        }
      }
    },
    EditAdvetSkipeType(val) {
      // console.log(val);
      const skipTypeVal = Number(val);
      switch (skipTypeVal) {
        case 18: // 首页底部文章
          this.EditAdvetData.skipType = 1;
          this.showSkipType = "正文";
          break;
        case 16: // 主题书单
          this.EditAdvetData.skipType = 7;
          this.showSkipType = "快听专辑";
          break;
        case 15: // 免费专区
          this.EditAdvetData.skipType = 8;
          this.showSkipType = "免费专区";
          break;

        case 13: // 专题列表 专题 ->
          this.EditAdvetData.skipType = 2;
          this.showSkipType = "专题";
          break;
        case 12: // 听外刊
          this.EditAdvetData.skipType = 9;
          this.showSkipType = " 快听";
          break;
        case 11: //文章
          this.EditAdvetData.skipType = 1;
          this.showSkipType = "文章";
          break;
        case 9: //大咖说
          this.EditAdvetData.skipType = 9;
          this.showSkipType = " 快听";
          break;
        case 8: //听书
          this.EditAdvetData.skipType = 9;
          this.showSkipType = " 快听";
          break;
        case 7: //合辑
          this.EditAdvetData.skipType = 7;
          this.showSkipType = "快听专辑";
          break;
        case 6: //快听合辑
          this.EditAdvetData.skipType = 7;
          this.showSkipType = "快听专辑";
          break;
        case 5: //杂志
          this.EditAdvetData.skipType = 10;
          this.showSkipType = "杂志";
          break;
        case 4: //快听
          this.EditAdvetData.skipType = 9;
          this.showSkipType = " 快听";
          break;
        case 3: //小课
          this.EditAdvetData.skipType = 8;
          this.showSkipType = "小课";
          break;
        case 2: //专栏
          this.EditAdvetData.skipType = 4;
          this.showSkipType = "专栏";
          break;
        case 1: //精品课
          this.EditAdvetData.skipType = 4;
          this.showSkipType = "专栏";
          break;
        default:
          this.EditAdvetData.skipType = 0;
      }
    }
  },
  methods: {
    searchAdvert() {
      const obj = {
        params: {
          modelType: this.EditAdvetSkipeType,
          name: this.advertdata.managementName,
          pgNo: this.pageData.page,
           rowNum: 10,
        }
      }; 
      // 获取广告下 引用内容
      this.$http.get("api/portal/model/searchContent", obj).then(res => {
        this.pageData = {
                page: res.data.model.currPage, 
                size:10,
                total: res.data.model.totalRowCount
         }; 
        this.UserData = res.data;
        this.flag = true;
      });
    },
    contentTypeChange (val) {
      if( val ==1) {
        this.showSkipType = '购买VIP页面' 
        this.EditAdvetData.skipType =13
        this.showSkipType
      }
    },
    emitChange4(Value) {
      this.EditAdvetData.imageUrl = Value;
    },
    advertsData() {
      if (this.$route.path =='/administer/management/indexContent/advertisingedit'||this.$route.path=='/administer/vipmanagement/indexContent/advertisingedit') {
        this.$http
          .get("api/portal/centerAdvert/" + this.$route.query.contentEdit, {
            params: { pgNo: this.pageData.page, rowNum: 10, modelId: this.indexType }
          })
          .then(res => { 
            
            this.EditAdvetData = res.data.model;
            // this.advertdata.name = this.EditAdvetData.name
            this.advertdata.outUrl = this.EditAdvetData.linkUrl
            this.showSkipType =this.EditAdvetData.skipType
          });
      }
      this.listLoading = false;
    },
    changePage(pageData) {
      this.pageData = pageData;
      this.searchAdvert() ;
    },
    advertCancel() {
      history.go(-1);
    },
    createdAdverst() {
      if (
        this.$route.path ==
          "/administer/management/indexContent/advertisingedit" ||
        this.$route.path == "/administer/vipmanagement/indexContent/advertisingedit"
      ) {
        this.$confirm("是否确认保存？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.advertSub();
          })
          .catch(() => {
            this.$message({ type: "info", message: "取消" });
          });
      } else if (
        this.$route.path ==
          "/administer/management/indexContent/advertisingadd" ||
        this.$route.path ==
          "/administer/vipmanagement/indexContent/advertisingadd"
      ) {
        if( this.$route.path ==
          "/administer/vipmanagement/indexContent/advertisingadd" ) {  
            this.EditAdvetData.contentType = 1
            this.contentTypeChange(this.EditAdvetData.contentType)
          }
        this.createdAdverstData();
      }
    },
    advertSub() {
      this.$route.path == "/administer/vipmanagement/indexContent/advertisingedit"
        ? (this.type = 1)
        : (this.type = 2);
      this.$http
        .put("api/portal/centerAdvert/" + this.$route.query.contentEdit, {
          id: this.$route.query.contentEdit,
           // name: this.advertdata.name,
          name: this.EditAdvetData.name,
          attrId: this.EditAdvetData.attrId,
          imageUrl: this.EditAdvetData.imageUrl,
          skipType: this.EditAdvetData.skipType,
          contentType: this.EditAdvetData.contentType,
          linkUrl: this.advertdata.outUrl
        })
        .then(res => {
          // console.log(res);
          if( this.type ==2) {
            this.$router.push({ path:'/administer/management/indexContent',query:this.$route.query})
          }else {
             this.$router.push({ path:'/administer/vipmanagement/indexContent',query:this.$route.query})
          }
        });
    },
    createdAdverstData() {
      this.$route.path == "/administer/management/indexContent/advertisingadd"
        ? (this.type = 2)
        : (this.type = 1); 
      this.$confirm('是否确认保存', "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }) .then(() => {
        this.$http
        .post("api/portal/centerAdvert", {
           name: this.EditAdvetData.name,
          //name: this.advertdata.name,
          attrId: this.EditAdvetData.attrId,
          modelType: this.type,
          imageUrl: this.EditAdvetData.imageUrl,
          skipType: this.EditAdvetData.skipType,
          contentType: this.EditAdvetData.contentType,
          linkUrl: this.advertdata.outUrl
        })
        .then(res => {
          if (res.data.success == true) {
           // console.log(res.data.model);
            const thatattrId = res.data.model;
            this.$http
              .post(
                "api/portal/model/" + this.$route.query.indexId + "/content",
                [
                  {
                    title: this.EditAdvetData.name,
                    imageUrl: "",
                    description: "",
                    modelTypeId: 14,
                    attrId: thatattrId
                  }
                ]
              )
              .then(result => {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
               // alert(3333)
                this.advertCancel()
              });
          }
        });
   }) .catch(() => {  this.$message({  type: "info", message: "取消" }); });
       
      
    },
    getuserData(val) {
      //  console.log(val);
      if (val.checked == true) {
        this.flag = false;
        this.contentItem = val;
        this.EditAdvetData.name = val.name;
        // this.advertdata.name =val.name
        this.EditAdvetData.attrId = val.id;
      }
    }
  }
};
</script>
<style>
.vue-uploader {
  width: 100%;
  height: 100%;
}
.subjectStyle {
  width: 46%;
  margin: 0 auto;
  padding-top: 40px;
  text-align: center;
}
.subjectTitle {
  text-align: left;
}
.flxexx {
  display: flex;
  justify-content: space-between;
}
.contentImg {
  width: 260px;
  height: 110px;
  background: #ddd;
  margin: 0 auto;
  text-align: center;
}
.advertSearch {
  float: left;
}
.contentdiv {
  text-align: right;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
}
.padding-form {
  padding-left: 20px;
}
.adddddd {
  width: 120px;
  height: 100%;
}
</style> 
