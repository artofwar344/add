export default {
    getYearMembersList: function (k, p ,h) {
        let data = {
            k: k,
            p:p,
            h:h
        }

        let url = '/h5/newvip/indexV1?k=" + this.k + "&p=" + this.p + "&h=" + this.h'
        return url;
        //return Vue.prototype.$http.post(url, {params: data})
    }
}
