import Vue from 'vue'
import App from './App'
import router from './router'
import axiso from 'axios'

/* UI框架 */
import {Button, Row, Col, NavBar, Dialog, Field, Icon, Popup } from 'vant'

Vue.use(Button).use(Row).use(Col).use(NavBar).use(Dialog).use(Field).use(Icon).use(Popup)


Vue.config.productionTip = false
Vue.prototype.$http = axiso;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
