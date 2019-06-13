import Vue from 'vue'
import App from './App'
import router from './router'
import axiso from 'axios'

/*  全局组件 */ 

/* UI框架 */  

import {Icon, Button, Row, Col ,NavBar,Dialog ,Field ,Tabbar, TabbarItem, Tab, Tabs, Collapse, CollapseItem,List} from 'vant'
Vue.use(Button).use(Row).use(Col).use(NavBar).use(Dialog).use(Field).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Collapse).use(CollapseItem).use(Icon).use(List)

/*  标记引用 */
import Vconsole from 'vconsole'
let vConsole = new Vconsole;
Vue.use(vConsole)

/* 实例组件 */
Vue.prototype.$http = axiso;
Vue.config.productionTip = false;
Vue.prototype.router = router;   
Vue.prototype.toPath = function (path) { this.$router.replace(path) };

/*  首页标题展示 */
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
