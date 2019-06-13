<template>
  <div> 
<!-- 新建模块 -->
  <el-form  label-width="100px" class="subjectStyle"  v-if="modelEdit"> 
    <el-form-item><h3 v-text="management.name" class="subjectTitle"></h3></el-form-item>
    <el-form-item :label="management.subject"><el-input v-model="management.managementName"></el-input></el-form-item>
    <el-form-item :label="management.subjectVal">
      <template>
      <el-select v-model="management.managementType" filterable @focus="getOption" placeholder="请选择" >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
      </el-select>
      </template>
    </el-form-item>
    <el-form-item><el-button @click="managementSub" v-if="$route.path =='/administer/management/edit'">提交</el-button><el-button @click="fn()">返回</el-button></el-form-item> 
  </el-form>
<!-- 新建专题   -->
  <el-form label-width="100px" class="subjectStyle" v-if="$route.path =='/administer/subject/addmodel'">
    <el-form-item><h3 v-text="subject.name" class="subjectTitle"></h3></el-form-item>
    <el-form-item :label="subject.subject">
    <el-input v-model="subject.subjectVal"></el-input>
    </el-form-item>
    <el-form-item :label="subject.imgName" >
      <el-row> <!--  type="flex" justify="space-between" :gutter="0" flex class="flxexx"-->
        <el-col >
          <span class="imagespan"><img src="" alt="" srcset="" v-show="subject.imageUrl"></span><el-button>首页缩略图</el-button>
          <span class="imagedivs"><img src="" alt="" srcset="" v-show="subject.imageUrl"></span><el-button>列表图</el-button>
          <span class="imagedivb"><img src="" alt="" srcset="" v-show="subject.imageUrl"></span> <el-button>详情图</el-button>
        </el-col>  
        <el-col :span="4">
          <el-button> <label for="imageUrl">上传图片</label></el-button>  
          <input type="file" name="imageUrl" id="imageUrl" v-show="false"/>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item :label="subject.particular">
      <el-input type="textarea" v-model="subject.description" :autosize="{ minRows: 6}"></el-input>
    </el-form-item>
    <el-form-item >
      <el-button @click ="fn()" href= "javascript:void(0);">取消</el-button> 
      <el-button @click ="fn()" href= "javascript:void(0);">保存</el-button> 
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return { 
      name : 'addsubject',
      subject :  {
        name : '专题模块--新建',
        subject: '专题名',
        subjectVal: '',
        imgName: '图片',
        imageUrl: '',
        particular: '简介',
        description: '',
        fileList:[],
      },
      management :  {
        name : '新建模块',
        subject: '模块名',
        subjectVal: '类型' ,
        managementType :'',
        managementName :''
      },
      options: '',
      type: ''
    }
  },
  created() { 
   
  },
  computed :{
    modelEdit() { //模块编辑
      return this.$route.path =='/administer/vipmanagement/edit'|| this.$route.path =='/administer/management/edit'? true : false;
    } 
  },
  methods: {
    fn(){
      history.go(-1)
    },
    getOption() {
      this.$http.get('api/portal/model/type').then(res =>{
         if(res.data.success === true)  this.options =res.data.model
      })
    },
    managementSub() {  
      this.$route.path =='/administer/vipmanagement/edit' ? this.type = 2 : this.type = 1 ;
      if(this.type && this.management.managementType) {
        this.$http.put('api/portal/model/addModel/'+this.type+'/'+this.management.managementType ,{type: this.type, name :this.management.managementName ,contentType :this.management.managementType}).then(res =>{
              console.log(res.data.success);
            if(res.data.success == true){
              history.go(-1)
            }
          })
      }
      
      
    } 
  }
} 
</script>
<style>
  .subjectStyle{
    width: 46%;
    margin: 0 auto;
    padding-top: 40px;
    text-align: center;
  }
  .subjectTitle{
    text-align: left;
  }
  .el-select {
    width: 100%;
  }
  .imagespan {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #666;
  }
  .imagedivs {
    display: inline-block;
    width: 75px;
    height: 25px;
    background: #666;
  }
  .imagedivb {
    display: inline-block;
    width: 75px;
    height: 35px;
    background: #666;
  }
  .flxexx {
    display: flex;
    justify-content:space-between; 
  }
 
</style> 


