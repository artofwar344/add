(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-af8c"],{"14Xm":function(t,e,r){t.exports=r("u938")},"8LzG":function(t,e,r){"use strict";var i=r("G672");r.n(i).a},G672:function(t,e,r){},G84c:function(t,e,r){"use strict";r.r(e);var i=r("14Xm"),n=r.n(i),o={name:"upload-image",data:function(){return{url:"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin/pub/upload/file",postData:{token:this.constant.QINIU_UPLOAD.token},headers:{"X-Auth-Token":window.sessionStorage.getItem("staff_uc")},imageUrl:"",dialogShowImageVisible:!1,dialogImageUrl:"",crop:!1,dialogCropVisible:!1,scaleX:-1,scaleY:-1,myCroppa:{},cropImg:"",loading:!1,showMultiple:!0}},props:{fileId:{type:String,default:"upload-image"},imgUrl:{type:[String,Array],require:!0},width:{type:Number,default:null},height:{type:Number,default:null},modal:{type:Boolean,default:!0},msg:{type:String,default:"只能上传jpg/png/gif文件，且不超过6M"}},created:function(){this.width&&(this.crop=!0),"string"==typeof this.imgUrl?(this.isListImg=!1,this.imageUrl=this.imgUrl,this.resize()):(this.isListImg=!0,this.imageList=this.addListName(this.imgUrl).slice())},methods:{beforeUpload:function(t){var e=-1!=="image/jpeg,image/png,image/gif".indexOf(t.type),r=t.size/1024/1024<6;return e?r?"image/gif"===t.type?e&&r:this.crop&&e&&r?(this.dialogCropVisible=!0,this.cropImg=URL.createObjectURL(t),this.getCrop(),!1):"oss"===this.constant.UPLOAD_SERVER?(this.ossUploadFile(t),!1):e&&r:(this.$message.error("上传图片大小不能超过 6MB!"),!1):(this.$message.error("上传图片只能是 JPG,PNG 格式!"),!1)},ossUploadFile:function(t){var e=this,r=new OSS.Wrapper(this.constant.ALI_OSS),i=Date.now()+"",o=function(t){200===t.res.status&&(e.isListImg?(e.imageList.push({name:t.name,url:t.res.requestUrls[0]}),e.showMultiple=!0,e.$emit("getUrl",e.removeListName(e.imageList))):(e.imageUrl=t.res.requestUrls[0],e.$emit("getUrl",e.imageUrl),e.resize(e.width,e.height)),e.dialogCropVisible=!1)};t.size>=102400?co(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.head(i);case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}},t,this)})).catch(function(t){console.log(t)}):r.multipartUpload(i+"",t).then(function(t){return o(t)})},getCrop:function(){var t=this;setTimeout(function(){t.cropper=new Cropper($(".container > img").get(0),{aspectRatio:t.width/t.height,dragMode:"move",viewMode:1,preview:".preview",ready:function(){t.croppable=!0}})},200)},_base64ToBlob:function(t){for(var e=window.atob(t),r=e.length,i=new Uint8Array(r),n=0;n<r;n++)i[n]=e.charCodeAt(n);return new Blob([i],{type:"image/png"})},uploadCrop:function(t){var e=this;this.loading=!0,this.showMultiple=!1;var r="data:image/jpeg;base64,"+this.cropper.getCroppedCanvas().toDataURL().split(",")[1];this.axios.post("/pub/upload/file-base64",{fileBase64:r}).then(function(t){200===t.code?(e.loading=!1,e.imageUrl=t.data.url,e.$emit("getUrl",t.data),e.resize(e.width,e.height),e.dialogCropVisible=!1):console.log(t.message)})},resize:function(t,e){var r=this;setTimeout(function(){var i=$("#"+r.fileId);r.crop&&i.find(".avatar").css({width:r.width,height:r.height});var n=t||i.find(".avatar").width(),o=e||i.find(".avatar").height();i.find(".el-upload-dragger").css({width:n,height:o})},500)},handleSingleSuccess:function(t){this.imageUrl=t.data.url,this.$emit("getUrl",t.data),this.resize(this.width,this.height)},handleMultipleRemove:function(t){if(t){for(var e=0;e<this.imageList.length;e++)(t.response&&this.imageList[e].name===t.response.key||this.imageList[e].name===t.name)&&this.imageList.splice(e,1);this.$emit("getUrl",this.removeListName(this.imageList))}},handleMultipleCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogShowImageVisible=!0},addListName:function(t){for(var e=[],r=0;r<t.length;r++)e.push({name:r,url:t[r]});return e},removeListName:function(t){for(var e=[],r=0;r<t.length;r++)e.push(t[r].url);return e}},mounted:function(){return""}},a=(r("8LzG"),r("KHd+")),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isListImg?t._e():r("el-upload",{attrs:{drag:"",id:t.fileId,data:t.postData,action:t.url,"on-success":t.handleSingleSuccess,"before-upload":t.beforeUpload,"show-file-list":!1}},[t.imageUrl?r("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):r("div",[r("i",{staticClass:"el-icon-upload"}),t._v(" "),r("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或\n        "),r("em",[t._v("点击上传")])])]),t._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.msg))])]),t._v(" "),r("el-button",{attrs:{type:"success"},on:{click:function(e){t.uploadCrop()}}},[t._v("确 定")])],1)},[],!1,null,"3f563a6a",null);s.options.__file="index.vue";e.default=s.exports},ls82:function(t,e){!function(e){"use strict";var r,i=Object.prototype,n=i.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=L;var h="suspendedStart",f="suspendedYield",p="executing",g="completed",d={},m={};m[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==i&&n.call(y,a)&&(m=y);var w=U.prototype=x.prototype=Object.create(m);_.prototype=w.constructor=U,U.constructor=_,U[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,U):(t.__proto__=U,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,r,i){var n=new O(L(t,e,r,i));return l.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},E(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var i=e.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},l.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,n){return s.type="throw",s.arg=t,e.next=i,n&&(e.method="next",e.arg=r),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:N(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=r),d}}}function L(t,e,r,i){var n=e&&e.prototype instanceof x?e:x,o=Object.create(n.prototype),a=new C(i||[]);return o._invoke=function(t,e,r){var i=h;return function(n,o){if(i===p)throw new Error("Generator is already running");if(i===g){if("throw"===n)throw o;return j()}for(r.method=n,r.arg=o;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=p;var c=b(t,e,r);if("normal"===c.type){if(i=r.done?g:f,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=g,r.method="throw",r.arg=c.arg)}}}(t,r,a),o}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function _(){}function U(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(r,i){function o(){return new Promise(function(e,o){!function e(r,i,o,a){var s=b(t[r],t,i);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},a)}a(s.arg)}(r,i,e,o)})}return e=e?e.then(o,o):o()}}function S(t,e){var i=t.iterator[e.method];if(i===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=b(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},u938:function(t,e,r){var i=function(){return this}()||Function("return this")(),n=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=n&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=r("ls82"),n)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(t){i.regeneratorRuntime=void 0}}}]);