(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4575"],{"1tLE":function(e,t,a){"use strict";a.r(t);var n,o=a("YEIV"),s=a.n(o),i={data:function(){return{list:null,listLoading:!0,subject:"",userData:[],showMessage:"",postArgument:"",others:"",indexType:"",pageData:{page:1,total:100,size:30},radioVal:"",modelname:"",modelprice:"",paramsargument:{},modelTypes:"",gobackpatha:"",models:[{id:1,name:"精品课"},{id:2,name:"专栏"},{id:3,name:"小课"},{id:4,name:"快听"},{id:5,name:"杂志"},{id:6,name:"快听合辑"},{id:7,name:"合辑"},{id:8,name:"听书"},{id:9,name:"大咖说"},{id:10,name:"听周刊"},{id:11,name:"文章"},{id:12,name:"听外刊"},{id:13,name:"专题列表"},{id:14,name:"中部广告"},{id:3,name:"免费专区"},{id:16,name:"主题书单"},{id:17,name:"vip会员权益图片"},{id:18,name:"首页底部文章"}],postdata:[],postneed:0}},created:function(){this.gobackpath},computed:{addcontentPath:function(){return"/administer/management/indexAddContent"==this.$route.path||"/administer/vipmanagement/indexAddContent"==this.$route.path||"/administer/vipmanagement/advertising"==this.$route.path||"/administer/management/advertising"==this.$route.path},selectVal:function(){if(this.$route.query.modeltype)return this.models=new Array(this.models[this.$route.query.modeltype-1]),this.models[0].id&&(this.modelTypes=this.models[0].id),this.models},gobackpath:function(){return"/administer/management/indexAddContent"==this.$route.path?this.gobackpatha="/administer/management/indexContent":"/administer/management/indexAddContent"==this.$route.path?this.gobackpatha="/administer/vipmanagement/indexContent":void 0}},methods:(n={fn:function(e){if(14==this.$route.query.modeltype){var t=e;this.keepcontent(t)}},goback:function(e){history.go(-1)},showRes:function(){var e=this;"/administer/management/addcontent"==this.$route.path?this.indexType="2":this.indexType="1",this.indexType?this.indexType:this.indexType=2,this.modelTypes||this.modelname?this.$http.get("api/portal/model/searchContent",{params:{modelType:this.modelTypes,name:this.modelname,price:Number(this.modelprice),pgNo:this.pageData.page,rowNum:30}}).then(function(t){t.data.model.list instanceof Array&&t.data.model.list.length>0?(e.pageData={page:t.data.model.currPage,size:30,total:t.data.model.totalRowCount},e.userData=t.data.model.list,console.log(e.userData),e.userData.forEach(function(t){e.$set(t,"checked",!1)})):(e.userData=[],e.$message({type:"success",message:"没有找到内容"}))}):this.userData=[],this.listLoading=!1}},s()(n,"goback",function(){history.go(-1)}),s()(n,"keepcontent",function(e){var t=this;this.$confirm("是否确认保存？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",distinguishCancelAndClose:!1,type:"warning"}).then(function(){15!=t.$route.query.modeltype?(t.userData.map(function(e){e.checked&&(e.imageUrl=e.imageUrl.split("?")[0],t.postdata[t.postneed]={title:e.name,imageUrl:e.imageUrl,description:e.description,modelTypeId:t.modelTypes,attrId:e.id},t.postneed++)}),t.postcontent(t.postdata),14==t.$route.query.modeltype&&t.addAdverst(e)):(t.userData.map(function(e){if(e.checked&&0!=e.price){var a=t.$createElement;t.$notify({title:"提示信息",type:"warning",message:a("span",{style:"color: blue"},"请选择价格为零的选项!")}),distinguishCancelAndClose=!0}}),t.userData.map(function(e){e.checked&&(t.postdata[t.postneed]={title:e.name,imageUrl:e.imageUrl,description:e.description,modelTypeId:t.modelTypes,attrId:e.id},t.postneed++)}),t.postcontent(t.postdata))}).catch(function(){t.$message({type:"info",message:"取消"}),t.postneed=0})}),s()(n,"addAdverst",function(e){var t={name:e.name,skipType:0,contentType:0,modelType:this.indexType,attrId:e.id,imageUrl:e.imageUrl};this.$http.post("api/portal/centerAdvert",t).then(function(e){})}),s()(n,"postcontent",function(e){var t=this;this.$http.post("api/portal/model/"+this.$route.query.indexId+"/content",e).then(function(e){!0===e.data.success&&(t.$router.push({path:t.gobackpatha,query:t.$route.query}),t.postneed=0,t.postdata=[],"/administer/management/indexAddContent"==t.$route.path?t.$router.push({path:"/administer/management/indexContent",query:t.$route.query}):"/administer/vipmanagement/indexAddContent"==t.$route.path&&t.$router.push({path:"/administer/vipmanagement/indexContent",query:t.$route.query}),t.$message({type:"success",message:"成功!"}))})}),s()(n,"packagingFn",function(e,t,a){var n=this;this.$confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.$http.put(t,a).then(function(e){!0===e.data.success&&n.$message({type:"success",message:"成功!"})})}).catch(function(){n.$message({type:"info",message:"取消"})})}),s()(n,"modelsVal",function(){var e=this;this.$http.get("api/portal/model/style").then(function(t){t.data.model&&(e.models=t.data.model)})}),s()(n,"changePage",function(e){this.pageData=e,this.showRes()}),n)},d=(a("hRp4"),a("KHd+")),r=Object(d.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("router-view"),e._v(" "),e.addcontentPath?a("el-row",{staticClass:"addcontentText tableTop",attrs:{type:"flex",justify:"end"}},[a("el-col",{attrs:{span:3}},[e._v("标题")]),e._v(" "),a("el-col",{attrs:{span:3,offset:1}},[a("el-input",{attrs:{size:"small"},model:{value:e.modelname,callback:function(t){e.modelname=t},expression:"modelname"}})],1),e._v(" "),a("el-col",{attrs:{span:2}},[e._v("类型")]),e._v(" "),a("el-col",{attrs:{span:3,offset:1}},[a("el-select",{attrs:{placeholder:"全部",size:"small"},model:{value:e.modelTypes,callback:function(t){e.modelTypes=t},expression:"modelTypes"}},e._l(e.selectVal,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{size:"small"},on:{click:e.showRes}},[e._v("搜索")])],1)],1):e._e(),e._v(" "),e.addcontentPath?a("el-table",{staticStyle:{width:"100%",height:"100"},attrs:{data:e.userData,stripe:""}},[a("el-table-column",{attrs:{label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(t.row.id)}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"标题",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(t.row.name)}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"价格"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(t.row.price)}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"选择"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{attrs:{label:"选中"},on:{change:function(a){e.fn(t.row)}},model:{value:t.row.checked,callback:function(a){e.$set(t.row,"checked",a)},expression:"scope.row.checked"}})]}}])})],1):e._e(),e._v(" "),e.addcontentPath?a("el-row",{staticClass:"addcontentindexTextpo"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.goback()}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.keepcontent}},[e._v("保存")])],1):e._e(),e._v(" "),a("pagination",{attrs:{pageData:e.pageData},on:{pageChange:e.changePage}})],1)},[],!1,null,"46676ca6",null);r.options.__file="index.vue";t.default=r.exports},hRp4:function(e,t,a){"use strict";var n=a("moV8");a.n(n).a},moV8:function(e,t,a){}}]);