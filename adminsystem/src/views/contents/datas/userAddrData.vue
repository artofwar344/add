<template>
  <div style="padding:20px;" >
    <el-card shadow='never'>
      <div class="distriClass">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="所在地区">
            <el-cascader
            placeholder=" 搜索 :省、市、区"
            :options="options" 
            v-model="selectedOptions" 
            filterable
            :clearable="true"
            :change-on-select ="true"  
            @change="handleChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="用户">
            <el-select v-model="rebate" size="small" style="width:120px;">
              <el-option label="昵称" value="nickName"></el-option>
              <el-option label="手机号" value="receiverTel"></el-option>
              <el-option label="ID" value="userId"></el-option>
            </el-select>
          </el-form-item> 
        <el-form-item> 
            <el-input v-model="userDataAddress.userId" size="small" v-show="rebate =='userId'" placeholder="用户id" type="number" clearable></el-input>
            <el-input v-model="userDataAddress.nickName" size="small" v-show="rebate =='nickName'" placeholder="用户昵称" clearable></el-input>
            <el-input v-model="userDataAddress.receiverTel" size="small" v-show="rebate =='receiverTel'" placeholder="用户手机号" type="number" clearable></el-input> 
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="searchUserData" :disabled='userDataShow' size="small">搜索</el-button>
              <el-button type="primary" @click="userDataExport" size="small" v-show="false">导出</el-button> 
          </el-form-item>
        </el-form>
      </div>
      <div class="distriClass">
        <el-form :inline="true" :model="formInline" class="demo-form-inline"> 
          <el-form-item label="用户类型">
            <el-select v-model="userDataAddress.userType" @focus="getUserType" size="small" style="width:120px;">
              <el-option label="全部" value= ''></el-option>
              <el-option label="非会员" value= '0'></el-option>
              <el-option label="月卡会员" value="1"></el-option>
              <el-option label="连续包月" value="2"></el-option> 
              <el-option label="年卡会员" value="3"></el-option>
            </el-select>
          </el-form-item> 
        </el-form>
      </div>
    </el-card>  
       <el-table 
      :data="getUserAddList" 
      style="width: 100%"> 
      <el-table-column
        prop="userId"
        label="用户ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="userType"
        width="100"
        label="用户类型">
        <template slot-scope="scope">
          <span v-text=" scope.row.userType ==0?'非会员':scope.row.userType==1?'月卡会员':scope.row.userType==2?'连续包月会员':scope.row.userType==3?'年卡会员':''" ></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="username"
        width="140"
        label="昵称">
      </el-table-column>
      <el-table-column
        prop="sex"
        width="60"
        label="性别">
         <template slot-scope="scope">
          <span v-text=" scope.row.sex ==2?'女':scope.row.sex==1?'男':'未填'" ></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="userBirth"
          width="110"
        label="生日">
      </el-table-column>
      <el-table-column 
        prop="receiverName"
        label="收货人">
      </el-table-column>
      <el-table-column
        prop="receiverTel" 
        width="120"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="province"
         width="80"
        label="所在省">
      </el-table-column>
      <el-table-column
        prop="city" 
        width="110"
        label="市">
      </el-table-column>
      <el-table-column
        prop="area" 
        label="区">
      </el-table-column>
      <el-table-column
        prop="fullAddress"
        width="200" 
        label="详细地址"> 
      </el-table-column>
      <el-table-column
       width="120"
        prop="updateTime" 
        fixed="right"
        label="更新时间"> 
        <template slot-scope="scope">
                <span
                  v-text="gettimer(scope.row)"
                  style="font-size:14px;    display: inline-block;margin-right: 16px;word-wrap:break-word; word-break:normal; text-align: right;"
                ></span>
              </template> 
      </el-table-column> 
    </el-table>  
  <div style="margin-top:22px;"> 
      <pagination :pageData="pageData" @pageChange="changePage" ></pagination>
    </div>
   
  </div>
</template>
<script>  
import addressArray from './address'
import { fulltime } from "@/utils/auth";
import { regionData,CodeToText } from 'element-china-area-data'
export default {
  data() {
    return {
      name: "homepage", 
      rebate: "nickName",   //  用户昵称  
      formInline: {
        user: "",
      },
      pageData: {
        page: 1,
        total: 100,
        size: 30
      },
      userDataAddress :{
      "province":null,// 课程名称
      "city":null,
      "area":null,
      "userId":null,
      "nickName":null,
      "userType": '',
      "receiverTel":null,  
      "buyerPhone":null,
      "flag": null
      },   
      searButionShow:false,
      getUserAddList:[],
      userDataShow:true,
      options: regionData,
      selectedOptions: []  
      //  options: addressArray.addressArray
    } 
  },
  watch: {
      rebate(val) { 
      // serDataAddress.userId  userDataAddress.nickName userDataAddress.receiverTel 
        if(val == 'nickName') {
          this.userDataAddress.userId = null
          this.userDataAddress.receiverTel= null 
        }else if(val == 'userId'){
          this.userDataAddress.nickName = null
          this.userDataAddress.receiverTel= null
        }else if(val == 'receiverTel'){
          this.userDataAddress.userId = null
          this.userDataAddress.nickName= null
        }
      }
  },
  updated() {
    if(this.userDataAddress.province|| this.userDataAddress.userId||
       this.userDataAddress.receiverTel|| this.userDataAddress.nickName ||this.searButionShow ) {
      this.userDataShow =false
    }else {
       this.userDataShow =true
    }
  },
  computed: {
      
  },
  created() { 
    this.getUserData()
   
  },
  methods: { 
    getUserData() {  
      this.userDataAddress.ticket ='1525324356902uunhg'
      this.userDataAddress.pgNo = this.pageData.page
      this.userDataAddress.size = this.pageData.size
      this.userDataAddress.flag	= 0
      // console.log("params", this.userDataAddress );
      
      this.$http.get('api/portal/model/getOrExportUserinfo',{params: this.userDataAddress}).then( res => { 
     
        if( res.data.success ==true ) { 
        this.pageData = {
          page: Number( res.data.model.currPage), // 当前页
          size: Number(res.data.model.rowsPerPage), // 每页条目
          total: Number( res.data.model.totalRowCount) //总条数
        };
          this.getUserAddList = res.data.model.list
        }
      })
 
    }, 
    changePage(pageData) {
      this.pageData = pageData;
      this.getUserData();
    } , 
    searchUserData() {
        this.pageData.page = 1;     
        // if(this.userDataAddress.beginTime&&this.userDataAddress.endTime) { 
        //   }else if (cha >=92){
        //   that.$alert('请选择3个月以内的时间', '提示', {confirmButtonText: '确定'})
        //   }
        // }else {
        //    this.$message({ type: "success", message: "选择3个月以内时间段,可导出数据" });
        // }
       this.getUserData()
    },
    userDataExport() { 
      this.userDataAddress.ticket ='1525324356902uunhg'
      this.userDataAddress.pgNo = this.pageData.page
      this.userDataAddress.size = this.pageData.size
      this.userDataAddress.flag	= 1
      
       this.$http.get('api/portal/model/getOrExportUserinfo',{ responseType: "arraybuffer"}).then( res => { 
       this.download(res.data,'用户地址信息.xlsx');  
        
      })
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
    gettimer(val) {
      if(val.updateTime ==null) {return  ''}else { return fulltime(val.updateTime); }
     
    },
    handleChange (value) { 
     
        // CodeToText[value]
        // if(value.length ==3) {  
        //   for (var ss=0;ss<value.length;ss++)
        //     {
        //     console.log(  CodeToText[value[ss]] ,ss)  
        //     }
        // } 
        // for (var ss=0;ss<this.selectedOptions.length;ss++)
        //     {
        //      console.log(  CodeToText[this.selectedOptions[ss]] ,ss)  
             this.userDataAddress.province =this.selectedOptions[0]?CodeToText[this.selectedOptions[0]]:null
             this.userDataAddress.city =  CodeToText[this.selectedOptions[1]]=='市辖区'?'': CodeToText[this.selectedOptions[1]]
             this.userDataAddress.area =this.selectedOptions[2]?CodeToText[this.selectedOptions[2]]:null
            // }
    },
     getUserType( ) {
       this.searButionShow =true
      // for (var ss=0;ss<this.selectedOptions.length;ss++)
      //       {
      //       console.log(  CodeToText[this.selectedOptions[ss]] ,ss)  
      //       }
      
     }

  }
};
</script>

<style scoped>
.distriClass {
  margin: 0 auto;
}
</style>
