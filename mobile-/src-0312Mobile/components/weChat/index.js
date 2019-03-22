import MyweChatPay from './weChatPay'

const weChatPay ={
    install: function(Vue){
        Vue.component('weChatPay',MyweChatPay)
    }
}

export default weChatPay
