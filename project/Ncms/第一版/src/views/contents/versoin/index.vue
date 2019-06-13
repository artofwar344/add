<template>
  <div>
    <!-- <div  :class="bool?'bools':''"> </div> -->
    <div style="padding: 20px 14px 5px;" v-show="this.bool =='2'">
      <el-card style="margin-bottom:4px;">
        <div style="float:right;margin-bottom:4px;margin-top:-8px;">
          <el-select v-model="types" placeholder="请选择" @change="editType">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-card>
      <el-card>
        <template>
          <el-table :data="tableData" style="width: 100%;font-size: 16px;">
            <el-table-column prop="key" label="配置名称">
              <template slot-scope="scope">
                <span v-text="scope.row.key" style="font-size:12px"></span>
              </template>
            </el-table-column>
            <el-table-column prop="value" label="配置的值">
              <template slot-scope="scope">
                <span v-text="scope.row.value" style="font-size:12px"></span>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="适用模块" width="120">
              <template slot-scope="scope">
                <span v-text="scope.row.type == 1001?'IOS' :scope.row.type == 1000?'Server':'Android'"></span>
              </template>
            </el-table-column>
            <el-table-column prop="version" label="版本号" width="120"></el-table-column>
            <el-table-column prop="desc" label="描述">
              <template slot-scope="scope">
                <span v-text="scope.row.desc" style="font-size:12px"></span>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="120">
              <template slot-scope="scope">
                <span
                  v-text="gettime(scope.row)"
                  style="font-size:14px;    display: inline-block;margin-right: 16px;word-wrap:break-word; word-break:normal; text-align: right;"
                ></span>
              </template>
            </el-table-column>
            <el-table-column prop="shelvesState" label="管理" width="200">
              <template slot-scope="scope">
                <el-button
                  @click="editVersion(scope.row)"
                  size="small"
                  :disabled="scope.row.id =='1'|| scope.row.id =='3'||  scope.row.id =='7'||
                            scope.row.id =='8'||  scope.row.id =='9'||  scope.row.id =='10'||
                            scope.row.id =='11'|| scope.row.id =='14'||  scope.row.id =='15'||
                            scope.row.id =='16'||  scope.row.id =='17'|| scope.row.id =='18'|| scope.row.id =='19'"
           >修改版本</el-button>      <!-- id为上面的值的时候 不可改版本-->
                <el-button @click="editValue(scope.row)" size="small"
                :disabled="scope.row.id =='5'||scope.row.id =='6'||scope.row.id =='12'||scope.row.id =='13' ">修改 值</el-button> <!-- id为上面的值的时候 不可改value-->
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-card>
    </div>
  </div>
</template>
<script>
import { fulltime } from "@/utils/auth";
export default {
  data() {
    return {
      name: "homepage",
      parsword: "1111",
      bool: 1,
      meg: "helloworld",
      tableData: [],
      options: [
        {
          value: 1001,
          label: "IOS"
        },
        {
          value: 1002,
          label: "Android"
        },
        {
          value: 0,
          label: "全部"
        }
      ],
      types: 0
    };
  },
  created() {
    let tool = sessionStorage.getItem("bool"); // 控制展示开关 获取 sessionStorage里bool的值
    // console.log(tool, "tool,展示开关");
    tool == "2" ? (this.bool = "2") : (this.bool = "1");
    // 如果sessionStorage里bool的值等于2，则让this.bool 等于2
    this.refreshData();
  },
  watch: {
    $route(val) {
      console.log(val); //
    }
  },
  mounted() {
    if (this.bool != "2") {
      //判断是否展示界面  当 值不等于 2 弹出弹框
      this.goinner();
    }
  },
  methods: {
    refreshData() {
      this.$http
        .post(
          "api/portal/baseConfig/configList",
          { pageNo: 1, type: this.types },
          { emulateJSON: true }
        )
        .then(res => {
          // this.$http.get("static/jsons/list.json").then(res => { // 原始展示数据
          this.tableData = res.data.resultModel.model.list;
          //res里 type等于 1001 显示IOS // 1002 Android //
        });
    },
    goinner() {
      this.$prompt("请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "请输入正确的密码"
      })
        .then(({ value }) => {
          if (value == this.parsword) {
            // 弹框输入的密码和设置的初始值一样，就在sessionStorage里设置bool为2
            this.bool = "2";
            sessionStorage.setItem("bool", "2");
          } else {
            this.bool = "1";
          }
        })
        .catch(() => {
          this.bool = "1";
          sessionStorage.setItem("bool", "1"); // 关闭弹框， sessionStorage里设置bool为1 ，不显示数据
        });
    },
    editVersion(edit) {
      this.$prompt("请输入修改版本号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "请输入正确版本号"
      })
        .then(({ value }) => {
          this.$http
            .post(
              "api/portal/baseConfig/updateConfig",
              {
                version: value,
                id: edit.id
              },
              { emulateJSON: true }
            )
            .then(res => {
              console.log(res, "res post version");
              this.refreshData();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    editValue(edit) {
      this.$prompt("请输入修改value", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "请输入正确value"
      })
        .then(({ value }) => {
          this.$http
            .post(
              "api/portal/baseConfig/updateConfig",
              { id: edit.id, value: value },
              { emulateJSON: true }
            )
            .then(res => {
              console.log(res, "res post version");
              this.refreshData();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    gettime(val) {
      return fulltime(val.createTime);
    },
    editType() {
      this.refreshData();
    }
  },
  destroyed: function() {
    sessionStorage.setItem("bool", "1");
  }
};
</script>

<style scoped>
.bools {
  position: fixed;
  width: 100%;
  min-height: 100%;
  z-index: 2005;
  vertical-align: middle;
  background-color: rgba(77, 72, 72, 0.507);
}
.el-table .cell,
.el-table th > div {
  margin: 1px;
}
.el-card__body {
  padding: 4px;
}
</style>