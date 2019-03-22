import Vue from 'vue'
import App from './App'
import router from './router'
import axiso from 'axios'

/*  全局组件 */
import weChatPay from '../../components/weChat'
import Common from '../../components/weChat/common'
import Wxpay from '../../components/weChat/wxpay' //微信支付
import WXConfig from '../../components/weChat/wx.jsapi'

/* UI框架 */
import {Button, Row, Col, NavBar, Dialog, Field, Icon, Popup, Lazyload } from 'vant'

Vue.use(Button).use(Row).use(Col).use(NavBar).use(Dialog).use(Field).use(Icon).use(Popup).use(Lazyload)

/*  标记引用 */
import Vconsole from 'vconsole'
let vConsole = new Vconsole;
Vue.use(vConsole);

/* 实例组件 */
Vue.prototype.$http = axiso;
Vue.config.productionTip = false;
Vue.prototype.toPath = function (path) {
    this.$router.push(path);
};
Vue.use(weChatPay)
Vue.prototype.common = Common
Vue.prototype.wxpay = Wxpay //实例微信支付
Vue.prototype.WXConfig = WXConfig


/*  首页标题展示 */
Vue.directive('title', {
    inserted: function (el, binding) {
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
