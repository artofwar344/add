export default{
    wxUserInfo(){
       var userInfoCode = function () {
            var url = location.search; //获取url中"?"符后的字串
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                }
            }
            console.log(theRequest.code, '获取code85858858u57557777');
            this.$http.get('/sns/oauth2/access_token?appid=wx8e37f57c6f92f001&secret=89738e371fef0522916e3efeb30c7692&code=' + theRequest.code + '&grant_type=authorization_code', {})
                .then(res => {
                    console.log(res, 'code返回？');
                    this.userInfoItem = res.data;
                    this.userOpenid = this.userInfoItem.openid;
                    Cookies.set('slZhongDu_uc', this.userOpenid, {expires: 30, path: '/'})
                    userInforToken(this.userInfoItem.refresh_token)
                    this.tokenCookie = Cookies.get('slZhongDu_uc')
                })
                .catch(error => {
                    console.log(error, '获取失败');
                })
        };
       var userInforToken = function (refreshToken) {
            console.log(refreshToken, 'afasfafsfd');
            this.$http.get('/sns/oauth2/refresh_token?appid=wx8e37f57c6f92f001&grant_type=refresh_token&refresh_token=' + refreshToken, {})
                .then(res => {
                    console.log(res, 'token___________返回？');
                    this.pcToken = res.data;
                    userSex(this.pcToken)
                    userTokenCodeTime(this.pcToken)
                })
                .catch(error => {
                    console.log(error, '获取失败');
                })
        };
       var  userSex = function (userinfo) {
            this.$http.get('/sns/userinfo?access_token=' + userinfo.access_token + '&openid=' + userinfo.openid + '&lang=zh_CN', {})
                .then(res => {
                    console.log(res.data, 'userInfoSex___________返回？');
                    this.tokenTime = res.data;
                })
                .catch(error => {
                    console.log(error, '获取失败');
                })
        };
      var userTokenCodeTime = function (tokenTime) {
            this.$http.get('/sns/auth?access_token=' + tokenTime.access_token + '&openid=' + tokenTime.openid, {})
                .then(res => {
                    console.log(res.data, 'userTokenCodeTime？');
                })
                .catch(error => {
                    console.log(error, '获取失败');
                })
        }
    }

}
