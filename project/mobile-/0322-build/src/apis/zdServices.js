export default {
    geUserInfo: function (ticket) {
        let data = {
            ticket: ticket

        }
        let url = process.env.ZDAPIS +'getUser.do'
        return Vue.prototype.$http.get(url, {params: data})
    }
}
