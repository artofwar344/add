<template>
  <div>
    <div style="padding: 10px 14px 5px;">
      <el-card>
        <div>导出统计时长</div>
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
        </el-row>
      </el-card>
    </div>
    <div style="padding:0 14px;">
      <el-card>
        <div>查询用户收听时长</div>
        <el-row>
          <el-col :span="3" :offset="4">
            <el-select v-model="rebate"  size="small" style="width:120px;">
              <el-option label="ID" value="commissionUserId"></el-option>
              <!-- <el-option label="昵称" value="commissionUserName"></el-option>
              <el-option label="手机号" value="commissionUserPhone"></el-option>-->
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input  size="small" placeholder="搜索条件..." v-model="userId"></el-input>
          </el-col>
          <el-col :span="2" :pull="1" :offset="12">
            <el-button type="success" round class="button" @click="getUserlinse" size="small">查看收听时长</el-button>
          </el-col>
        </el-row> 
            <el-collapse v-model="activeNames" class="apsetop"  size="small">
              <el-collapse-item title="查看收听时长 " name="12">
                <div class="apsespan"> 

                  <span>monthTime</span>
                  <span v-text="this.rebateList.monthTime"> </span>
                  <span>totalTime</span>
                  <span  v-text="this.rebateList.totalTime"> </span>
                  <span>yearTime</span>
                  <span  v-text="this.rebateList.yearTime"></span>
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
      listenTimes:'', 
      uid:'',
      rebate: "commissionUserId",
      rebateList: {},
      userId: "",
      activeNames:"333"
    };
  },
  created() {},
  watch: {
    $route(val) {
      console.log(val, "route___-");
    }
  },
  methods: {
    getUserlinse() {
      if(this.userId ){
      if(this.activeNames =='12') {
        this.activeNames ='333'
      }else {
        this.activeNames ='12'
      } 
      console.log("api/portal/userListen?id=" + this.userId);
      this.$http.get('api/portal/userListen?id='+this.userId).then( result =>{
        console.log(result); //957043
        this.rebateList =result.data.model;
          console.log(this.rebateList,'model');
        
      })
      }else {
         this.$alert( '请输入正确的用户ID' , '必填项', {  confirmButtonText: '确定' });
      }
    },
    getUserExcel() {
       
    }
  }
};
</script>

<style scoped>
.apsetop {
  margin-top :4px; 
}
.apsespan {
   background: #ddd;
   display: flex;
}
.apsespan >span{
  flex: 1;
  height: 30px; 
  width: 10%;
}
</style>