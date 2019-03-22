<template><!--  v-if="modelEdit"-->
<el-form  label-width="100px" class="subjectStyle" v-model="contentedit">
    <h3>首页内容-{{this.$route.query.indexName?this.$route.query.indexName:''}}-内容编辑</h3>
     <el-form-item :label="contentedit.name"> <el-input  prop="EditData.title" v-model="EditData.title"></el-input></el-form-item>
     <el-form-item>
       <upload-sub v-on:childByValue="childByValue"></upload-sub>

     </el-form-item>
     <!-- <el-form-item :label="contentedit.subject"> <el-row><el-col class="contentImg"></el-col></el-row></el-form-item> v-model="EditData.description"-->
    <el-form-item :label="contentedit.subjectVal">
        <!-- <div name="" id="" style="width:70%; min-height:700px"  prop="EditData.description"  v-html="EditData.description"> </div> -->
        <textarea  cols="46" rows="16" prop="EditData.description"  v-model="EditData.description"></textarea>
    </el-form-item>
      <el-form-item class="buttons">
      <el-button @click="goback" >返回</el-button>
      <el-button @click="EditDatachange" >提交</el-button>
      </el-form-item>

  </el-form>

</template>
<script>

import FileUpload from 'vue-upload-component'

export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      name : 'addsubject',
      contentEditData : '',
      newname: '',
      EditData : {
        title :'',
        description :'',
        imageUrl : ''
      },
      pageData : {
            page : 1,
            size :10,
            total :10
          },
      contentedit :  {
        name : '标题',
        subject: '图片',
        subjectVal: '简介',
        managementType :'',
        managementName :''
      },
      options: '',
      type: ''
    }
  },
  created() {
   this.contentData()
  },
  computed :{
    modelEdit() { //模块编辑+this.$route.query.modelId+"/"+this.$route.query.contentId+"/content"
      return this.$route.path =='/administer/management/indexContent/contentEdit'|| this.$route.path =='/administer/vipmanagement/indexContent/contentEdit'? true : false;
    }
  },

  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      this.newname = childValue
      console.log(this.newname,'我接受到的子组件传值')
    },
    contentData() {
          this.$http.get('api/portal/model/modelContentList',{params: {pgNo: 1 ,  rowNum: 10,modelId : this.$route.query.indexId }})
          .then(res => {
          this.contentEditData = res.data.model.list ;
          // console.log( this.contentEditData);
          this.contentEditData.map( (item ,index) =>{
            if(item.id == this.$route.query.contentEdit) {
            return this.EditData =  this.contentEditData[index]
          }
          })
          //console.log(  this.EditData)
        });
       this.listLoading = true;
    },
    goback(){
      history.go(-1)
    },
    getOption() {
      this.$http.get('api/portal/model/type').then(res =>{
         if(res.data.success === true)  this.options =res.data.model
      })
    },
    // contentSub() {
    //   this.$route.path =='/administer/vipmanagement/edit' ? this.type = 2 : this.type = 1 ;
    //   //  if(this.type && this.contentedit.managementType) {
    //   this.$http.put('api/portal/model/'+this.$route.query.indexId+'/content',{id:this.$route.query.indexId, type: this.type, modelName :this.contentedit.managementName ,contentType :this.contentedit.managementType}).then(res =>{
    //   // console.log(res);
    //   })
    // } ,
    EditDatachange() {
      this.$confirm('是否确认保存', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: 'error'
        }).then(( ) => {
          this.$http.put('api/portal/model/'+this.$route.query.indexId+'/content',
           {'id': this.$route.query.contentEdit ,'title' : this.EditData.title ,'description':this.EditData.description }
           ).then(res=> {
              if (res.data.success === true) {
                this.$message({
                    type: 'success',
                    message: '成功!'
                  });
                  this.contentData()
              }
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消更改'
          });
        });
    } ,

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
  .buttons {
    text-align: right;
  }
  .contentImg {
    width: 400px;
    height: 120px;
    background: #321;
    margin: 0 auto;
    text-align: center;
  }

</style>
