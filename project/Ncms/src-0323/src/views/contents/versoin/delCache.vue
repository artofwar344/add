<template>
  <div v-show="this.bool =='2'">
    <el-card class="box-card">
      <div class="cachearea">
        <div class="cachedel">缓存区域:</div>
        <div class="cachedel">
          <el-input v-model="cacheinput" placeholder="请输入内容"></el-input>
        </div>
        <div class="cachedel">key值:</div>
        <div class="cachedel">
          <el-input v-model="cacheKey" placeholder="请输入内容"></el-input>
        </div>
        <div class="cachebtn">
          <el-button size="small" @click="delcacheData">提交</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "homepage",
      meg: "helloworld",
      parsword: "1111",
      cacheinput: "",
      bool: 1,
      cacheKey: ""
    };
  },
  created() {
    let tool = sessionStorage.getItem("bool"); // 控制展示开关 获取 sessionStorage里bool的值
    // console.log(tool, "tool,展示开关");
    tool == "2" ? (this.bool = "2") : (this.bool = "1");
  },
  mounted() {
    if (this.bool != "2") {
      //判断是否展示界面  当 值不等于 2 弹出弹框
      this.goinnerw();
    }
  },
  watch: {
    $route(val) {}
  },
  methods: {
    delcacheData() {
      if (this.cacheinput && this.cacheKey) {
        //    console.log(JSON.stringify({ params:{region:this.cacheinput,key:this.cacheKey}}));

        this.$http
          .get("api/portal/cache/delCache", {
            params: {
              region: this.cacheinput,
              key: this.cacheKey
            }
          })
          .then(res => {
            this.$message({ type: "success", message: "清理成功" });
          });
      } else {
        this.$message.error("请输入 参数");
      }
    },
    goinnerw() {
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
    }
  }
};
</script>

<style scoped>
.box-card { 
  margin: 4px ; 
}
.cachearea { 
  width: 86%;
  height: 100%;
}
.cachedel {
  display: inline-block;
  width: 200px;
  height: 100%;
}
.cachebtn {
  float: right; 
}
</style>