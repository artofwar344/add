(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-30e6"],{DBqK:function(t,e,o){"use strict";var n=o("fsRb");o.n(n).a},fsRb:function(t,e,o){},ixql:function(t,e,o){"use strict";o.r(e);var n=o("X4fA"),a={data:function(){return{name:"homepage",parsword:"1111",bool:1,meg:"helloworld",tableData:[],options:[{value:1001,label:"IOS"},{value:1002,label:"Android"},{value:0,label:"全部"}],types:0}},created:function(){var t=sessionStorage.getItem("bool");this.bool="2"==t?"2":"1",this.refreshData()},watch:{$route:function(t){console.log(t)}},mounted:function(){"2"!=this.bool&&this.goinner()},methods:{refreshData:function(){var t=this;this.$http.post("api/portal/baseConfig/configList",{pageNo:1,type:this.types},{emulateJSON:!0}).then(function(e){t.tableData=e.data.resultModel.model.list})},goinner:function(){var t=this;this.$prompt("请输入密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"请输入正确的密码"}).then(function(e){e.value==t.parsword?(t.bool="2",sessionStorage.setItem("bool","2")):t.bool="1"}).catch(function(){t.bool="1",sessionStorage.setItem("bool","1")})},editVersion:function(t){var e=this;this.$prompt("请输入修改版本号","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"请输入正确版本号"}).then(function(o){var n=o.value;e.$http.post("api/portal/baseConfig/updateConfig",{version:n,id:t.id},{emulateJSON:!0}).then(function(t){console.log(t,"res post version"),e.refreshData()})}).catch(function(){e.$message({type:"info",message:"取消输入"})})},editValue:function(t){var e=this;this.$prompt("请输入修改value","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"请输入正确value"}).then(function(o){var n=o.value;e.$http.post("api/portal/baseConfig/updateConfig",{id:t.id,value:n},{emulateJSON:!0}).then(function(t){console.log(t,"res post version"),e.refreshData()})}).catch(function(){e.$message({type:"info",message:"取消输入"})})},gettime:function(t){return Object(n.c)(t.createTime)},editType:function(){this.refreshData()}}},i=(o("DBqK"),o("KHd+")),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:"2"==this.bool,expression:"this.bool =='2'"}],staticStyle:{padding:"20px 14px 5px"}},[o("el-card",{staticStyle:{"margin-bottom":"4px"}},[o("div",{staticStyle:{float:"right","margin-bottom":"4px","margin-top":"-8px"}},[o("el-select",{attrs:{placeholder:"请选择"},on:{change:t.editType},model:{value:t.types,callback:function(e){t.types=e},expression:"types"}},t._l(t.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),o("el-card",[[o("el-table",{staticStyle:{width:"100%","font-size":"16px"},attrs:{data:t.tableData}},[o("el-table-column",{attrs:{prop:"key",label:"配置名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"font-size":"12px"},domProps:{textContent:t._s(e.row.key)}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"value",label:"配置的值"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"font-size":"12px"},domProps:{textContent:t._s(e.row.value)}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"type",label:"适用模块",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{domProps:{textContent:t._s(1001==e.row.type?"IOS":1e3==e.row.type?"Server":"Android")}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"version",label:"版本号",width:"120"}}),t._v(" "),o("el-table-column",{attrs:{prop:"desc",label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"font-size":"12px"},domProps:{textContent:t._s(e.row.desc)}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"font-size":"14px",display:"inline-block","margin-right":"16px","word-wrap":"break-word","word-break":"normal","text-align":"right"},domProps:{textContent:t._s(t.gettime(e.row))}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"shelvesState",label:"管理",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"small",disabled:"1"==e.row.id||"3"==e.row.id||"7"==e.row.id||"8"==e.row.id||"9"==e.row.id||"10"==e.row.id||"11"==e.row.id||"14"==e.row.id||"15"==e.row.id||"16"==e.row.id||"17"==e.row.id||"18"==e.row.id||"19"==e.row.id},on:{click:function(o){t.editVersion(e.row)}}},[t._v("修改版本")]),t._v(" "),o("el-button",{attrs:{size:"small",disabled:"5"==e.row.id||"6"==e.row.id||"12"==e.row.id||"13"==e.row.id},on:{click:function(o){t.editValue(e.row)}}},[t._v("修改 值")])]}}])})],1)]],2)],1)])},[],!1,null,"5c34335f",null);s.options.__file="index.vue";e.default=s.exports}}]);