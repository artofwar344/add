<template>
  <div class="app-container">
    <el-row type="flex" class="tableTop" justify="end" :gutter="1">
      <el-col :span="3">
        <el-button @click="managementPopupCreate" size="small">新建app弹窗</el-button>
      </el-col>
    </el-row>

    <el-table :data="managementPopupData" stripe style="width: 100%;height:100%;">
      <el-table-column prop="name" label="弹窗名称" align="center">
        <template slot-scope="scope">
          <span v-text="scope.row.name"></span>
        </template>
      </el-table-column>
      <el-table-column prop="tag" label="跳转位置" width="240">
        <template slot-scope="scope">
          <el-button style="width:220px;" size="small" v-text=" innerTag(scope.row.tag)"></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="modelStyleUrl" label="样式">
        <template slot-scope="scope">
          <div
            v-html="'<div style=display:inline-block;width:60px;height:60px;background:url('+ scope.row.image +');background-size:cover;  ></div>'"
            @click="managementPopupShowImage(scope.row)"
          ></div>
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

      <!-- <el-table-column prop="params" label="跳转参数" width="200">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.params"
            type="string"
            style="text-align: center;"
            @change.native="managementPopupChangeArgument(scope.row)"
            size="small"
          ></el-input>
        </template>
      </el-table-column>-->
      <el-table-column label="模块管理" width="380" align="center">
        <template slot-scope="scope">
          <el-button @click="ClassifyIndexChangeName(scope.row)" size="small" type="warning">改名</el-button>
          <el-button @click="managementPopupEdit(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button
            size="small"
            @click="managementPopupChangeState(scope.row)"
            v-text="scope.row.shelvesState == 1? '上架'   :'下架'"
            :type="scope.row.shelvesState == 1 ?'success': 'info'"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="height:40px;width:100%"></div>
    <pagination :pageData="pageData" @pageChange="changePage"></pagination>
    <el-dialog
      :title=" this.managementPopupEditVal ==2?'编辑':'新建'"
      :visible.sync="dialogVisible"
      width="50%"
      top="4vh"
      :before-close="handleClose"
    >
      <el-row>
        <el-form :inline="true">
          <el-col>
            <el-form-item label="弹窗名称">
              <el-input v-model="managementPopupName"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="跳转位置">
              <el-select v-model="tagValue" placeholder="请输入跳转类型" size="small">
                <el-option
                  v-for="item in tagOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="跳转参数">
              <el-input v-model="managementPopupInnerParams"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="弹窗图">
              <div style="width:296px;">
                <manage-content
                  v-on:emitChange4="emitChange4"
                  :EditData="EditAdvetData"
                  :modelnimg="modelnimg"
                ></manage-content>
              </div>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="managementPopupKeepMessage">确 定</el-button>
      </span>
    </el-dialog> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "managementPopup",
      listLoading: true,
      subject: "",
      pageData: {
        page: 1,
        total: 100,
        size: 10
      },
      managementPopupData: [],
      statusValue: 0,
      tagOptions: [
        {
          value: "1",
          label: "领取7天VIP弹窗"
        },
        {
          value: "2",
          label: "领取7天VIP即将过期弹窗"
        },
        {
          value: "3",
          label: "领取7天VIP过期弹窗"
        },
        {
          value: "4",
          label: "领取7天VIP成功弹窗"
        }
      ],
      tagValue: "",
      managementPopupShowMessage: 0,
      managementPopupPath: "",
      managementPopupParams: "",
      popupEditFlag: false,
      addSub: {
        type: "",
        name: ""
      },
      dialogVisible: false,
      EditAdvetData: { imageUrl: "" },
      modelnimg: { width: 680, height: 935 },
      managementPopupEditVal: 0,
      managementPopupName: null,
      managementPopupInnerImage: null,
      managementPopupInnerParams: null,
      managementPopupInnerId: null
    };
  },
  computed: {},
  created() {
    //
    this.managementPopupGetData();
    var _this = this;
    document.onkeyup = function(e) {
      let key = window.event.keyCode;
      var val = key == 27 ? true : key == 13 ? true : key == 32 ? true : false;
      if (val == true) {
        _this.popupEditFlag = false;
        _this.dialogVisible = false;
      }
    };
  },
  methods: {
    innerTag(inVal) {
      var innerTagName;
      this.tagOptions.forEach(item => {
        if (item.value == inVal) {
          innerTagName = item.label;
        }
      });
      return innerTagName;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    managementPopupGetData() {
      this.$http
        .get("api/portal/popupWindow", {
          params: {
            shelvesState: Number(this.statusValue),
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
          this.managementPopupData = res.data.model.list;
        });
      this.listLoading = true;
    },
    managementPopupChangeArgument(val) {
      this.managementPopupShowMessage = "是否改变参数?";
      this.managementPopupPath = "api/portal/popupWindow/" + val.id;
      this.managementPopupParams = { id: val.id, params: val.params };
      this.packagingFn();
    },
    managementPopupChangeState(val) {
      this.managementPopupShowMessage = "是否改变上下架状态?";
      this.managementPopupPath = "api/portal/popupWindow/" + val.id;
      this.managementPopupParams = {
        id: val.id,
        shelvesState: val.shelvesState == 2 ? 1 : 2
      };
      this.packagingFn();
    },
    packagingFn() {
      this.$confirm(this.managementPopupShowMessage, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .put(this.managementPopupPath, this.managementPopupParams)
            .then(res => {
              if (res.data.success == true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.managementPopupGetData();
              }
            });
        })
        .catch(() => {
          this.$message({ type: "info", message: "取消" });
        });
    },
    ClassifyIndexChangeName(val) {
      var modelName_ = val.name ? val.name : "";
      this.$prompt("改弹窗图的名字", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: modelName_,
        inputErrorMessage: "error"
      })
        .then(({ value }) => {
          this.$http
            .put("api/portal/popupWindow/" + val.id, {
              id: val.id,
              name: value
            })
            .then(res => {
              if (res.data.success == true) {
                this.$message({
                  type: "success",
                  message: "成功!"
                });
                this.managementPopupGetData();
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
    createPopup() {
      this.popupEditFlag = true;
    },
    popupClosed() {
      // 关闭
      this.popupEditFlag = false;
    },
    managementPopupEdit(val) {
      // 编辑弹窗
      // console.log('%c'+ val.tag ,"color: #FF00FF"); //弹窗 tag
      // this.popupEditFlag = true;
      this.dialogVisible = true;
      this.managementPopupEditVal = 2;
      this.managementPopupInnerId = val.id;
      this.managementPopupName = val.name;
      this.tagValue = val.tag;
      this.EditAdvetData.imageUrl = val.image;
      this.managementPopupInnerParams = val.params;
    },
    managementPopupCreate() {
      // 新建弹窗
      this.dialogVisible = true;
      this.managementPopupEditVal = 1;
      this.managementPopupName = null;
      this.tagValue = "";
      this.EditAdvetData.imageUrl = "";
      this.managementPopupInnerImage = null;
      this.managementPopupInnerParams = null;
    },
    managementPopupKeepMessage() {
      // 保存弹窗 信息
      // this.dialogVisible =false
      // console.log(1, this.managementPopupEditVal);
      // console.log(2, this.managementPopupName);
      this.managementPopupInnerImage = this.EditAdvetData.imageUrl;
      if (this.managementPopupEditVal == 1) {
        if (
          this.managementPopupInnerImage != null &&
          this.managementPopupName != null
        ) {
          this.$http
            .post("api/portal/popupWindow", {
              name: this.managementPopupName,
              tag: this.tagValue,
              image: this.managementPopupInnerImage,
              params: this.managementPopupInnerParams
            })
            .then(res => {
              this.$message({ type: "success", message: "创建成功" });
              this.dialogVisible = false;
              this.managementPopupGetData();
            })
            .catch(err => {
              this.$message({ type: "info", message: "创建失败" });
            });
        }
      } else if (this.managementPopupEditVal == 2) {
        // alert(this.managementPopupInnerId)
        this.$http
          .put("api/portal/popupWindow/" + this.managementPopupInnerId, {
            id: this.managementPopupInnerId,
            name: this.managementPopupName,
            tag: this.tagValue,
            image: this.managementPopupInnerImage,
            params: this.managementPopupInnerParams
          })
          .then(res => {
            if (res.data.success == true) {
              this.$message({ type: "success", message: "保存成功" });
              this.dialogVisible = false;
              this.managementPopupGetData();
            }
          })
          .catch(err => {
            this.$message({ type: "info", message: "保存失败" });
          });
      }
    },
    changePage(pageData) {
      this.pageData = pageData;
      this.managementPopupGetData();
    },
    emitChange4(Value) {
      this.EditAdvetData.imageUrl = Value;
    },
    managementPopupShowImage(val) {
      if (val.image) {
        this.$alert(
          '<div style="display:inline-block;width:260px;height:360px;background:url(' +
            val.image +
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
};
</script>
<style>
.tableTop {
  height: 100%;
  margin: 4px;
  padding-right: 146px;
  padding-bottom: 2px;
}
.el-table {
  width: 100%;
  text-align: center;
}
.el-table th {
  text-align: center;
}
.Span-blue {
  color: #409eff;
}
.el-input--small {
  font-size: 11px;
}

.popupUnderlyingSty {
  z-index: 2004;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
.popupBlackSty {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
.popupSecondarySty {
  display: inline-block;
  position: fixed;
  top: 10%;
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
.el-dialog__body {
  padding: 0 20px;
}
</style>
