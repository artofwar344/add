(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-42dd"],{CbXY:function(n,t,e){"use strict";var s=e("nUcU");e.n(s).a},c11S:function(n,t,e){"use strict";var s=e("gTgX");e.n(s).a},gTgX:function(n,t,e){},nUcU:function(n,t,e){},ntYl:function(n,t,e){"use strict";e.r(t);e("p46w");var s={name:"Login",data:function(){return{loginForm:{username:"admin",password:"admin"},loading:!1,pwdType:"password",redirect:void 0}},created:function(){this.handleLogin()},watch:{$route:{handler:function(n){this.redirect=n.query&&n.query.redirect},immediate:!0}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.loading=!0,this.$store.dispatch("Login",this.loginForm).then(function(){n.loading=!1,n.$router.push({path:n.redirect||"/"})}).catch(function(){n.loading=!1})}}},o=(e("c11S"),e("CbXY"),e("KHd+")),a=Object(o.a)(s,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,"auto-complete":"on","label-position":"left"}},[e("h3",{staticClass:"title"},[n._v("vue-admin-template")]),n._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),e("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"username"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),n._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),e("el-input",{attrs:{type:n.pwdType,name:"password","auto-complete":"on",placeholder:"password"},nativeOn:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.handleLogin(t):null}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),n._v(" "),e("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),n.handleLogin(t)}}},[n._v("\n        Sign in\n      ")])],1),n._v(" "),e("div",{staticClass:"tips"},[e("span",{staticStyle:{"margin-right":"20px"}},[n._v("username: admin")]),n._v(" "),e("span",[n._v(" password: 1111")])])],1)],1)},[],!1,null,"0891a044",null);a.options.__file="index.vue";t.default=a.exports}}]);