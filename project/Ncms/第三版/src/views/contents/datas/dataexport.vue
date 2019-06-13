<template>
  <div v-show="this.userToggle">
    <el-row style="padding:20px;">
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 20px 14px;">
            <div>
              <span style="font-size: 18px;">礼品卡</span>
            </div>
            <div
              class="bottom clearfix"
              style="display: flex; padding-left:100px;color: #999;font-size: 16px;"
            >
              <span>导出礼品卡 ：</span>
              <span>1.输入要导出礼品卡的名称
                <i class="el-icon-arrow-right"></i>
              </span>
              <span>2.点击"导出礼品卡"按钮，直接下载 礼品卡表格
                <i class="el-icon-arrow-right"></i>
              </span>
            </div>
            <div>
              <span>礼品卡名称：</span>
              <el-input v-model="input" placeholder="请输入内容" style="width:220px;"></el-input>
            </div>
            <el-button
              type="success"
              style="margin: 10px 0;"
              round
              class="button"
              @click="userCard"
            >导出礼品卡</el-button>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" style="margin-top:10px;" v-show="true">
          <div data-v-ac8f2662 style="padding: 20px 14px;">
             <el-row type="flex" align="middle" justify="end">
               <el-col :span="10" >
                 <div  style="font-size: 18px;">打卡</div>
               </el-col>
               <el-col :span="2">
                 开始时间
               </el-col>
               <el-col :span="5">
                 <el-date-picker
                  type="date"
                  placeholder="选择日期"
                   format="yyyy-MM-dd 00:00:00"
                  v-model="textbeginTime"  
                ></el-date-picker>
               </el-col>
               <el-col :span="2">
                 结束时间
               </el-col>
               <el-col :span="5">
                  <el-date-picker
                  type="date"
                  placeholder="选择日期"
                   format="yyyy-MM-dd 23:59:59"
                  v-model="textendTime"  
                ></el-date-picker>
               </el-col>
             </el-row>
             <el-row>
                <el-col> 
              <div style="font-size: 16px;padding-left: 94px;color: rgb(153, 153, 153);">下载打卡模板 ：按条件下载Excel打卡模板</div>
            </el-col> 
             </el-row>
             <el-row>
               <el-col :span="2"  class="aticelMargin">
                 <span  style="line-height: 28px;"> 文章id合集: </span> 
               </el-col>
               <el-col :span="8"  class="aticelMargin" style="float:left;">
                  <el-input 
                    type ="textarea" 
                    :rows ="minRowsVal" 
                    style="width:420px;"
                    placeholder ="请输入内容..."
                    @focus ="innerHeight()"
                    @blur ="innerHeight2()"
                    v-model ="textareaInner" >
                  </el-input>
               </el-col>
                <el-col :span="3"  style="float:right;"  class="aticelMargin">  
                 <el-button  type="success" round class="button" @click="articleCard">下载打卡表格</el-button>
               </el-col> 
             </el-row>
            <!-- <el-row type="flex">
            <el-col>
              <div  style="font-size: 18px;">打卡</div>
              <div style="font-size: 16px;padding-left: 86px;color: rgb(153, 153, 153);">下载打卡模板 ：按条件下载Excel打卡模板</div>
            </el-col>  
          </el-row>
          <el-row type="flex"   style="margin-top: 12px;">
            <el-col :span="3" > 
              <span  style=" display: inline-block; text-align: center;line-height: 28px;"> 文章id合集: </span> 
            </el-col>
            <el-col :span="8">
              <el-input 
                type ="textarea" 
                :rows ="minRowsVal" 
                style="width:380px;"
                placeholder ="请输入内容..."
                @focus ="innerHeight()"
                @blur ="innerHeight2()"
                v-model ="textareaInner" >
              </el-input>
            </el-col>-->
            <!-- <el-col  :span="2" > <span style=" display: inline-block; text-align: center;line-height: 28px;">起始时间</span></el-col>
            <el-col  :span="5">              
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                   format="yyyy-MM-dd 00:00:00"
                  v-model="textbeginTime"  
                ></el-date-picker>
            </el-col>
            <el-col  :span="2"  >
               <span style=" display: inline-block; text-align: center;line-height: 28px;">结束时间</span>
            </el-col  >
            <el-col  :span="5" >
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                   format="yyyy-MM-dd 23:59:59"
                  v-model="textendTime"  
                ></el-date-picker>
            </el-col>-->
            <!-- <el-col :span="3">  
              <el-button  type="success" style="margin: 10px 0;" round class="button" @click="articleCard">下载打卡表格</el-button>
            </el-col>  
            </el-row>-->
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }" style="margin-top:10px;" v-show="true">
          <div style="padding: 20px 14px;">
            <div style="    margin-bottom: 12px;">
              <span style="font-size: 18px;">导出读感</span>
            </div>
            <div
              class="bottom clearfix"
              style="display: flex; padding-bottom:4px; color: #999;font-size: 16px;"
            >
              <span style=" padding-left:86px;">下载读感excel表：</span>
              <span>输入读感标题，截止时间，点击“下载读感excel表”</span>
            </div>
            <div class="articleDate">
              <span>读感标题：</span>
              <el-input v-model="reactionArticle" placeholder="请输入内容" style="width:220px;"></el-input>
            </div>
            <div class="articleDate">
              <span>截止时间</span>
              <el-date-picker
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd 23:59:59"
                v-model="reactionTimes"
              ></el-date-picker>
            </div>
            <el-button
              type="success"
              style="margin: 10px 0;"
              round
              class="button"
              @click="getReaction"
            >下载读感excel表</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { fulltime, endfulltime } from "@/utils/auth";
export default {
  data() {
    return {
      name: "homepage",
      input: "",
      exportName: "",
      userToggle: false,
      reactionArticle: "",
      reactionTimes: "",
      textareaInner: "",
      textVal: false,
      textbeginTime: "",
      textendTime: "",
      minRowsVal: "1"
    };
  },
  created() {
    if (this.UserInfoToggle() === 3) {
      this.userToggle = true;
    } else {
      this.$confirm("Sorry，此权限未开通", "请联系管理员", {
        confirmButtonText: "确定",
        type: "warning",
        center: true
      });
    }
  },
  watch: {
    textareaInner(Val) {
      // 校验输入文本，出错则提示 错误信息
      var teg = /^(\d+(\,|\，){0,1}\d*)+$/;
      teg.test(Val) ? (this.textVal = false) : (this.textVal = true);
      this.textareaInner = this.textareaInner.replace(/[，]/g, ",");
      if (this.textVal) {
        this.$message.error("请输入数字(以逗号隔开的内容)");
      }
      //textVal
    }
  },
  methods: {
    emitChange4(Value) {
      this.EditData.imageUrl = Value;
    },
    userCard() {
      this.$http
        .post(
          "api/portal/export/exportGiftCard?cardName=" + this.input,
          { params: this.$data.search },
          { emulateJSON: true, responseType: "arraybuffer" }
        )
        .then(res => {
          this.exportName = "礼品卡下载.xlsx";
          this.download(res.data, this.exportName);
        });
    },
    articleCard() {
      // 导出打卡文章合集
      if (this.textareaInner && this.textbeginTime && this.textendTime) {
        console.log(fulltime(this.textbeginTime), "this.textbeginTime");
        console.log(endfulltime(this.textendTime), "this.textendTime");

        this.$http
          .post(
            "api/portal/export/exportDakaData",
            {
              artIds: this.textareaInner,
              startTime: fulltime(this.textbeginTime),
              endTime: endfulltime(this.textendTime)
            },
            { emulateJSON: true, responseType: "arraybuffer" }
          )
          .then(result => {
            console.log(result, "返回结果");
            this.exportName = "打卡记录.xlsx";
            this.download(result.data, this.exportName);
          });
      }
    },
    innerHeight() {
      this.minRowsVal = 20;
    },
    innerHeight2() {
      this.minRowsVal = 1;
    },
    getReaction() {
      // 导出读感
      this.reactionTimes
        ? (this.reactionTimes = endfulltime(this.reactionTimes))
        : (this.reactionTimes = null);
      if (this.reactionTimes != null && this.reactionArticle != "") {
        this.exportName = "读感EXCEL表.xlsx";
        // console.log({ readName:this.reactionArticle },'params');

        this.$http
          .post(
            "api/portal/export/exportReadFeel",
            {
              readName: this.reactionArticle,
              createTime: this.reactionTimes
            },
            { emulateJSON: true, responseType: "arraybuffer" }
          )
          .then(result => {
            console.log(result, "result");
            this.download(result.data, this.exportName);
          });
      } else {
        this.$alert("请填写读感标题，截止时间", "提示", {
          confirmButtonText: "确定"
        });
      }
    },
    // 下载文件
    download(data, name) {
      if (!data) {
        return false;
      } else if (data.byteLength == 0) {
        this.$alert("请输入正确的查询信息！", "提示", {
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
    }
  }
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  margin-bottom: 10px;
}

.button {
  padding: 8px;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.articleDate {
  display: inline-block;
}
.clearfix:after {
  clear: both;
}
.textInner1 {
  color: red;
}
.textInner1 {
  color: #000;
}
.aticelMargin {
  margin-top: 10px; 
}
</style>
