(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7a4d"],{KFWP:function(t,e,i){},"d+g8":function(t,e,i){"use strict";var a=i("KFWP");i.n(a).a},mWll:function(t,e,i){"use strict";i.r(e);var a={data:function(){return{name:"addsubject",contentEditData:"",EditData:{title:"",description:"",imageUrl:""},pageData:{page:1,size:10,total:10},contentedit:{name:"标题",subjectList:"详情图片",subjectDetails:"列表图片",subjectVal:"简介",managementType:"",managementName:""},options:"",indexType:"",fils:"",modelnimg:{width:750,height:350},modelbimg:{width:750,height:250}}},created:function(){this.contentData(),this.contentModeltype(),this.indexTypex()},computed:{modelEdit:function(){return"/administer/management/indexContent/contentEdit"==this.$route.path||"/administer/vipmanagement/indexContent/contentEdit"==this.$route.path}},methods:{emitChange4:function(t){this.EditData.imageUrl=t},emitChange3:function(t){this.EditData.surfaceImageUrl=t},contentData:function(){var t=this;this.$http.get("api/portal/model/modelContentList",{params:{pgNo:this.$route.query.page,rowNum:30,modelId:this.$route.query.indexId}}).then(function(e){t.contentEditData=e.data.model.list,t.contentEditData.map(function(e,i){if(e.id==t.$route.query.contentEdit)return t.EditData=t.contentEditData[i]})}),this.listLoading=!0},goback:function(){history.go(-1)},getOption:function(){var t=this;this.$http.get("api/portal/model/type").then(function(e){!0===e.data.success&&(t.options=e.data.model)})},contentModeltype:function(){switch(Number(this.$route.query.modeltype)){case 18:this.modelnimg={width:400,height:400};break;case 17:this.modelnimg={width:343,height:250};break;case 16:this.modelnimg={width:750,height:350};break;case 15:this.modelnimg={width:106,height:137};break;case 13:this.modelnimg={width:400,height:400};break;case 12:this.modelnimg={width:400,height:520};break;case 11:this.modelnimg={width:400,height:400};break;case 10:this.modelnimg={width:400,height:520};break;case 9:this.modelnimg={width:400,height:400};break;case 8:this.modelnimg={width:400,height:520};break;case 7:case 6:this.modelnimg={width:200,height:200};break;case 5:this.modelnimg={width:520,height:400};break;case 4:this.modelnimg={width:400,height:400};break;case 3:case 2:case 1:this.modelnimg={width:400,height:520}}},indexTypex:function(){return"/administer/management/indexContent/contentEdit"==this.$route.path?this.indexType=2:this.indexType=1},EditDatachange:function(){var t=this;this.$confirm("是否确认保存","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"error"}).then(function(){t.$http.put("api/portal/model/"+t.$route.query.indexId+"/content/"+t.indexType,{id:t.$route.query.contentEdit,imageUrl:t.EditData.imageUrl,title:t.EditData.title,modelType:t.indexType,surfaceImageUrl:t.EditData.surfaceImageUrl,description:t.EditData.description}).then(function(e){!0===e.data.success&&(t.$message({type:"success",message:"成功!"}),t.goback())})}).catch(function(){t.$message({type:"info",message:"取消更改"})})}}},n=(i("d+g8"),i("KHd+")),o=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{staticClass:"subjectStyle",attrs:{"label-width":"100px"},nativeOn:{submit:function(t){t.preventDefault()}},model:{value:t.contentedit,callback:function(e){t.contentedit=e},expression:"contentedit"}},[i("h3",[t._v("首页内容-"+t._s(this.$route.query.indexName?this.$route.query.indexName:"")+"-内容编辑")]),t._v(" "),i("el-form-item",{attrs:{label:t.contentedit.name}},[i("el-input",{attrs:{prop:"EditData.title"},model:{value:t.EditData.title,callback:function(e){t.$set(t.EditData,"title",e)},expression:"EditData.title"}})],1),t._v(" "),16==this.$route.query.modeltype?i("el-form-item",{attrs:{label:t.contentedit.subjectDetails}},[i("el-row",[i("upload-tree",{attrs:{addModel:t.EditData,modelbimg:t.modelbimg},on:{emitChange3:t.emitChange3}})],1)],1):t._e(),t._v(" "),i("el-form-item",{attrs:{label:t.contentedit.subjectList}},[i("el-row",[i("manage-content",{attrs:{EditData:t.EditData,modelnimg:t.modelnimg},on:{emitChange4:t.emitChange4}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:t.contentedit.subjectVal}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.EditData.description,expression:"EditData.description"}],attrs:{cols:"60",rows:"16",prop:"EditData.description"},domProps:{value:t.EditData.description},on:{input:function(e){e.target.composing||t.$set(t.EditData,"description",e.target.value)}}})]),t._v(" "),i("el-form-item",{staticClass:"buttons"},[i("el-button",{on:{click:t.goback}},[t._v("返回")]),t._v(" "),i("el-button",{on:{click:t.EditDatachange}},[t._v("提交")])],1)],1)},[],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports}}]);