<template>
  <div> 
  <div class="distriClass">
     <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="课程名称">
        <el-input v-model="formInline.user"  size="small"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <template> 
           <div class="block">
         <el-date-picker  type="date" placeholder="选择日期" v-model="data2" style="width: 100%;"  size="small"></el-date-picker> 
           </div>  
        </template>
      </el-form-item>
      <el-form-item label="至">
         <el-date-picker type="date" placeholder="选择日期" v-model="data3" style="width: 100%;"  size="small"></el-date-picker> 
      </el-form-item> 
    </el-form>
  </div>
  <div class="distriClass">
     <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="返佣用户">
        <el-select v-model="formInline.region" size="small" style="width:120px;">
          <el-option label="昵称" value="shanghai"></el-option>
          <el-option label="手机号" value="shanghai"></el-option>
          <el-option label="ID" value="beijing"></el-option>
        </el-select> 
      </el-form-item>
       <el-form-item>
           <el-input v-model="formInline.user"  size="small"></el-input>
          </el-form-item>
      <el-form-item label="购买用户">
        <el-select v-model="formInline.region"  size="small"  style="width:120px;">
          <el-option label="昵称" value="shanghai"></el-option>
          <el-option label="手机号" value="shanghai"></el-option>
          <el-option label="ID" value="beijing"></el-option>
        </el-select> 
      </el-form-item>
        <el-form-item>
           <el-input v-model="formInline.user"  size="small"></el-input>
          </el-form-item>
      <el-form-item> 
        <el-button type="primary" @click="onSubmit" :disabled="distriDis"  size="small">搜索</el-button>
        <el-button type="primary" @click="onSubmit"  size="small">导出</el-button>
      </el-form-item>
    </el-form>
  </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "homepage",
      meg: "helloworld",
      value1:'',
      formInline: {
          user: '',
          region: '' 
        },
       data2:'',
       data3:'',
       distriDis: true
    };
  },
  watch :{ 
     data3 (val) {
       console.log(val ,'val');  
       this.data3 = val 
       this.nline()
     },
     data2( val) {
        this.nline()
     }
  },
  computed  :{
    
   
  },
  created() { 
  },
  methods: {
    onSubmit() {
        console.log('submit!');
      },
    nline() {
       console.log( this.data2 ,'data2')
       console.log( this.data3,'data3')
       if (this.data2&&this.data3) {
         this.distriDis =false
        const cha = this.data3  -this.data2 ;
        console.log(cha /3600/1000/24)
     }
    }
  }
};
</script>

<style scoped>
.distriClass {
  margin:0 auto;
}
</style>
