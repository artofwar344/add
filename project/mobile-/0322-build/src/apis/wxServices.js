import Vue from 'vue'

export default {
    wxGetToken: function (wxCode) {
        let url = process.env.HTTPS_WXSNS + '/sns/oauth2/access_token?appid=wx8e37f57c6f92f001&secret=89738e371fef0522916e3efeb30c7692&code=' + wxCode + '&grant_type=authorization_code
        return Vue.prototype.$http.get(url)
    }
}
