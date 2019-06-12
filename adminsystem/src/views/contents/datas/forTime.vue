<template>
  <div>
    <div style="padding: 10px 14px 5px;">
      <!-- <div>导出统计时长</div>
        <el-row type="flex" align="middle" justify="space-between">
          <el-col>
            用户id <el-input v-model="uid"></el-input>
          </el-col>
          <el-col :span="2" :offset="2">开始时间</el-col>
          <el-col >
            <el-date-picker
              type="date"
               size="small"
              placeholder="选择日期"
              format="yyyy-MM-dd"
              v-model="begintime"
            ></el-date-picker>
          </el-col>
          <el-col :span="2">结束时间</el-col>
          <el-col  >
            <el-date-picker
             size="small"
              type="date"
              placeholder="选择日期"
              format="yyyy-MM-dd"
              v-model="endtime"
            ></el-date-picker>
          </el-col>
          <el-col :span="2">累计分钟</el-col>
          <el-col :span="3">
            <el-input placeholder="大于多少分钟" size="small" v-model="listenTimes"></el-input>
          </el-col>
          <el-col :span="2" :pull="1" :offset="2">
            <el-button type="success"  size="small" style="margin: 10px 0;" round class="button"  @click="getUserExcel">导出统计表格</el-button>
          </el-col>
      </el-row>-->
      <el-card :body-style="{ padding: '0px' }" style="margin-top:10px;" v-show="true">
        <div data-v-ac8f2662 style="padding: 20px 14px;">
          <el-row type="flex" align="middle" justify="end">
            <el-col :span="10">
              <div style="font-size: 18px;">导出统计时长</div>
            </el-col>
            <el-col :span="2">开始时间</el-col>
            <el-col :span="5">
              <el-date-picker
                type="date"
                size="small"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                v-model="begintime"
              ></el-date-picker>
            </el-col>
            <el-col :span="2">结束时间</el-col>
            <el-col :span="5">
              <el-date-picker
                type="date"
                size="small"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                v-model="endtime"
              ></el-date-picker>
            </el-col>
          </el-row>
          <el-row type="flex" justify="end" align="middle">
            <el-col :span="2">用户id</el-col>
            <el-col :span="3">
              <el-input v-model="uid" size="small"></el-input>
            </el-col>
            <el-col :span="2">累计分钟</el-col>
            <el-col :span="3">
              <el-input placeholder="大于多少分钟" size="small" v-model="listenTimes"></el-input>
            </el-col>
            <el-col :span="2" :pull="1" :offset="2">
              <el-button
                type="success"
                size="small"
                style="margin: 10px 0;"
                round
                class="button"
                @click="getUserExcel"
              >导出统计表格</el-button>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
    <div style="padding:0 14px;">
      <el-card>
        <div>查询用户收听时长</div>
        <el-row>
          <el-col :span="3" :offset="4">
            <el-select v-model="rebate" size="small" style="width:120px;">
              <el-option label="ID" value="commissionUserId"></el-option>
              <!-- <el-option label="昵称" value="commissionUserName"></el-option>
              <el-option label="手机号" value="commissionUserPhone"></el-option>-->
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input size="small" placeholder="搜索条件..." v-model="userId"></el-input>
          </el-col>
          <el-col :span="2" :pull="1" :offset="12">
            <el-button type="success" round class="button" @click="getUserlinse" size="small">查看收听时长</el-button>
          </el-col>
        </el-row>
        <el-collapse v-model="activeNames" class="apsetop" size="small">
          <el-collapse-item title="查看收听时长 " name="12">
            <div class="apsespan">
              <span>用户id</span>
              <span>用户名</span>
              <span>注册时间</span>
              <span>会员类型</span>
              <span>当月累计收听时长</span>
              <span>当年累计收听时长</span>
              <span>总收听时长</span>
            </div>
            <div class="apsespan">
              <span v-text="this.rebateList.uid"></span>
              <span v-text="this.rebateList.nickName"></span>
              <span v-text="this.rebateList.registTime"></span>
              <span
                v-text="this.rebateList.level==0?'普通用户':this.rebateList.level==1?'月卡会员':this.rebateList.level==2?'连续包月':this.rebateList.level==3?'年卡会员':''"
              ></span>
              <span v-text="this.rebateList.monthTime"></span>
              <span v-text="this.rebateList.yearTime"></span>
              <span v-text="this.rebateList.totalTime"></span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "homepage",
      meg: "helloworld",
      begintime: "",
      endtime: "",
      listenTimes: "",
      uid: "",
      rebate: "commissionUserId",
      rebateList: {},
      userId: "",
      activeNames: "333"
    };
  },
  created() {},
  watch: {
    $route(val) {
      // console.log(val, "route___-");
    }
  },
  methods: {
    getUserlinse() {
      if (this.userId) {
        // if (this.activeNames == "12") {
        //   this.activeNames = "333";
        // } else {
        this.activeNames = "12";
        // }
        // console.log("api/portal/userListen?id=" + this.userId);
        this.$http
          .get("api/portal/userListen?id=" + this.userId)
          .then(result => {
            console.log(result); //957043
            this.rebateList = result.data.model;
            console.log(this.rebateList, "model");
          });
      } else {
        this.$alert("请输入正确的用户ID", "必填项", {
          confirmButtonText: "确定"
        });
      }
    },
    getUserExcel() {
      if (this.begintime && this.endtime) {
        console.log(this.getTime(this.begintime), "b");
        console.log(this.getTime(this.endtime), "e");
        this.$http
          .post("api/portal/userListen/exportStatistics", {
              beginDay: this.getTime(this.begintime)
                ? this.getTime(this.begintime)
                : "",
              endDay: this.getTime(this.endtime)
                ? this.getTime(this.endtime)
                : "",
              listenTime: this.listenTimes,
              uid: this.uid 
          }, { emulateJSON: true, responseType: "arraybuffer" })
          .then(res => {
             this.download(res.data,'用户收听信息.xlsx'); 
          });
      } 
    },
       download(data, name) {
      if (!data) {
        return false;
      } else if (data.byteLength == 0) {
        this.$alert(" 查询信息为空！", "提示", {
          confirmButtonText: "确定"
        });
        return false;
      }
      let url = window.URL.createObjectURL(new Blob([data]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", name);
      // link.setAttribute('download', '礼品卡下载.xlsx')
      document.body.appendChild(link);
      link.click();
    },
    getTime(timer) {
      let date = new Date(timer);
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      if (m < 10) {
        m = "0" + m;
      }
      let d = date.getDate();
      if (d < 10) {
        d = "0" + d;
      }
      return y + "-" + m + "-" + d;
    }
  }
};
</script>

<style scoped>
.apsetop {
  margin-top: 4px;
}
.apsespan {  
  display: flex;
}
.apsespan > span {
  text-align: center;
  border: 1px #ddd solid; 
  flex: 1;
  height: 30px;
  width: 10%;
}
</style>