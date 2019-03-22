<template>
  <div style="padding:20px;" >
    <el-card shadow='never'>
      <div class="distriClass">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="分销类型">
            <!-- <el-input v-model="formData.distributionType" size="small"></el-input> -->
           <el-select v-model="formData.distributionType" placeholder="请选择" @change="getDistribution">
            <el-option
              v-for="item in distribType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="起始时间">
            <template>
              <div class="block">
                <el-date-picker 
                  type="date"
                  placeholder="选择日期"
                  format="yyyy-MM-dd HH:mm:ss"  
                  v-model="beginTime"
                  style="width: 100%;"
                  size="small"
                ></el-date-picker>
              </div>
            </template>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-date-picker
              type="date"
              placeholder="选择日期" 
              format="yyyy-MM-dd 23:59:59"
              v-model="endTime"  
              style="width: 100%;"
              size="small"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div class="distriClass">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="返佣用户">
            <el-select v-model="rebate" size="small" style="width:120px;">
              <el-option label="ID" value="commissionUserId"></el-option>
              <el-option label="昵称" value="commissionUserName"></el-option>
              <el-option label="手机号" value="commissionUserPhone"></el-option>
            </el-select>
          </el-form-item> 
          <el-form-item>
            <el-input v-model="formData.commissionUserId" size="small" v-show="rebate =='commissionUserId'" placeholder="返佣用户id" type="number"></el-input>
            <el-input v-model="formData.commissionUserName" size="small" v-show="rebate =='commissionUserName'" placeholder="返佣用户名称"></el-input>
            <el-input v-model="formData.commissionUserPhone" size="small" v-show="rebate =='commissionUserPhone'" placeholder="返佣用户手机号" type="number"></el-input> 
          </el-form-item>
          <el-form-item label="购买用户">
            <el-select v-model="purchase" size="small" style="width:120px;">
              <el-option label="ID" value="buyerId"></el-option>
              <el-option label="昵称" value="buyerName"></el-option>
              <el-option label="手机号" value="buyerPhone"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
               <el-input v-model="formData.buyerId" size="small" v-show="purchase =='buyerId'" placeholder="购买用户id" type="number"></el-input>
            <el-input v-model="formData.buyerName" size="small" v-show="purchase =='buyerName'" placeholder="购买用户名称"></el-input>
            <el-input v-model="formData.buyerPhone" size="small" v-show="purchase =='buyerPhone'" placeholder="购买用户手机号" type="number"></el-input> 
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchDistribution" size="small">搜索</el-button>
            <el-button type="primary" @click="subappData" size="small" :disabled= "this.searchData">导出</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>  
       <el-table 
      :data="distributionData"

      style="width: 100%">
      <el-table-column
        fixed
        prop="orderId"
        label="订单id">
      </el-table-column>
      <el-table-column
        prop="itemName"
        label="名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="distributionType"
        label="分销类型"
        width="100">
        <template slot-scope="scope">
          <span
                v-text="scope.row.distributionType==0?'课程':scope.row.distributionType==1?'月卡会员':scope.row.distributionType==3?'年卡会员':''"
              ></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="itemPrice"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="itemPricePeriod"
          width="92"
        label="分销比例">
      </el-table-column>
      <el-table-column
        prop="commissionPrice"
          width="92"
        label="返佣金额">
      </el-table-column>
      <el-table-column
        prop="commissionType"
        width="92"
        label="返佣类型"> 
        <template slot-scope="scope">
         <span>{{ scope.row.commissionType==1?'读币':'非读币' }}</span></template> 
      </el-table-column>
      <el-table-column 
        prop="commissionUserId"
        label="返佣用户ID">
      </el-table-column>
      <el-table-column
        prop="commissionUserName" 
        width="160"
        label="返佣用户昵称">
      </el-table-column>
      <el-table-column
        prop="commissionUserPhone"
         width="140"
        label="返佣用户手机">
      </el-table-column>
      <el-table-column
        prop="buyerId" 
        label="购买用户ID">
      </el-table-column>
      <el-table-column
        prop="buyerName"
        width="160"
        label="购买用户昵称">
      </el-table-column>
      <el-table-column
        prop="buyerPhone"
        width="140" 
        label="购买用户手机">
        <!-- <template slot-scope="scope">
         <span>{{new Date(Number(scope.row.buyerPhone)) }}</span></template> -->
      </el-table-column>
      <el-table-column
       width="180"
        prop="createTime" 
        fixed="right"
        label="	创建时间"> 
        <template slot-scope="scope">
          <span  v-text="scope.row.createTime ?fulltimes(scope.row.createTime):'' "></span>
        </template>
      </el-table-column> 
    </el-table>  
  <div style="margin-top:22px;"> 
      <pagination :pageData="pageData" @pageChange="changePage" ></pagination>
    </div>
   
  </div>
</template>
<script>
import {fulltime,endfulltime} from '@/utils/auth'
import { setInterval } from 'timers';
export default {
  data() {
    return {
      name: "homepage",
      meg: "helloworld",
      value1: "",  
      rebate: "commissionUserId",   // 反佣用户
      purchase: "buyerId",  // 购买用户
      searchData: false,
      formInline: {
        user: "",
      },
      pageData: {
        page: 1,
        total: 100,
        size: 10
      },
      distribType: [
        {
          value: null,
          label: "全部"
        }, 
        {
          value: 3,
          label: "年卡会员"
        },  
         {
          value: 1,
          label: "月卡会员"
        },
        {
          value: 0,
          label: "课程"
        } 
       
      ],
      formData :{
      "distributionType":null,// 课程名称
      "beginTime":null,
      "endTime":null,
      "commissionUserId":null,
      "commissionUserName":null,
      "commissionUserPhone":null,
      "buyerId":null,
      "buyerName":null,
      "buyerPhone":null
      },  
      beginTime:null,
      endTime:null,
      distributionShow:false,
      distributionData:[]
    };
  },
  watch: {
    rebate(val) {
     if(val == 'commissionUserId') {
       this.formData.commissionUserName = null
       this.formData.commissionUserPhone = null
     }else if(val == 'commissionUserName'){
       this.formData.commissionUserId = null
       this.formData.commissionUserPhone = null 
     }else if(val == 'commissionUserPhone'){
       this.formData.commissionUserId = null
       this.formData.commissionUserName = null 
     }
    },
    purchase(val) {
     if(val == 'buyerId') {
       this.formData.buyerName = null
       this.formData.buyerPhone = null
     }else if(val == 'buyerName'){
       this.formData.buyerId = null
       this.formData.buyerPhone = null 
     }else if(val == 'buyerPhone'){
       this.formData.buyerId = null
       this.formData.buyerName = null 
     }
    }
    
  },
  computed: {
      
  },
  created() { 
    this.getDistribution()
   
  },
  methods: {
    fulltimes(val){
      return fulltime(val)
    },
    getDistribution() {
       this.beginTime?
this.formData.beginTime = fulltime(this.beginTime ): this.formData.beginTime =null; 
            this.endTime?
this.formData.endTime = endfulltime(this.endTime) : this.formData.beginTime = null ; 
console.log(this.formData.distributionType );

      this.$http.post('api/portal/appDistribution/distributionList?pageNo='+this.pageData.page+'&pageSize='+30,
       // ('https://www.easy-mock.com/mock/5c66305fb998e7687343289e/api/portal/appDistribution/distributionList?pageNo='+this.pageData.page+'&pageSize='+30, 
       this.formData ).then(res => { 
        if(res.data.resultModel.success ==true) {
           this.pageData = {
            page: Number( res.data.resultModel.model.currPage), // 当前页
            size: Number(res.data.resultModel.model.rowsPerPage), // 每页条目
            total: Number( res.data.resultModel.model.totalRowCount) //总条数
          };
          this.distributionData =res.data.resultModel.model.list          
        } 
      }) 
    },
    
    subappData() {       
            this.beginTime?
            this.formData.beginTime = fulltime(this.beginTime ): this.formData.beginTime =null ; 
            this.endTime?
            this.formData.endTime = endfulltime(this.endTime) :  this.formData.beginTime = null ; 
          this.distributionData.length >0?
          this.$http.post('api/portal/appDistribution/distributionExport',
           this.formData ,
           { responseType: 'arraybuffer' }).then(resultData =>{ 
           this.download(resultData.data)
          }) :""
        
    },
     download(data) {  
        if (!data) {
          return
        }
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download','分校订单数据.xlsx') 
        document.body.appendChild(link)
        link.click()
      },
    changePage(pageData) {
      this.pageData = pageData;
      this.getDistribution();
    }, 
     searchshowdata(){
        this.distributionData.length>0?this.searchData = false:this.searchData = true;
     },
    
    searchDistribution() {
        this.pageData.page = 1;     
        // if(this.formData.beginTime&&this.formData.endTime) {
        // var cha =( this.formData.endTime - this.formData.beginTime) / 3600 / 1000 / 24;
        // var that =this
        //   if(cha >=0 &&cha <92){
        //     // this.formData.beginTime = fulltime(this.formData.beginTime)
            
        //     this.formData.beginTime?
        //     this.beginTime = fulltime(this.formData.beginTime ):"" ; 
        //     this.formData.endTime?
        //     this.endTime = endfulltime(this.formData.endTime) :"" ; 
             
        //      that.searchshowdata() 
        //   }else if (cha >=92){
        //   that.$alert('请选择3个月以内的时间', '提示', {confirmButtonText: '确定'})
        //   }
        // }else {
        //    this.$message({ type: "success", message: "选择3个月以内时间段,可导出数据" });
        // }
       this.getDistribution()
    }
  }
};
</script>

<style scoped>
.distriClass {
  margin: 0 auto;
}
</style>
