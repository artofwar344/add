export function submitAdd() {
  this.$http.get("api/portal/oss/token" ).then(res => { 
    
    var that = this; 
    const result = res.body.model;
    //  这里是OSS
    const client = new OSS.Wrapper({
      region: result.region,
      accessKeyId: result.AccessKeyId,
      accessKeySecret: result.AccessKeySecret, 
      bucket: result.bucket,
      stsToken: result.StsToken
    });
    that.ZDbucket =result.bucket;  
     
      var f = fNum[i].file; 
      const Name = f.name;
      const suffix = Name.substr(Name.indexOf("."));
      let date = new Date();
      let path =
        result.uploadPath +
        date.getFullYear() +
        (date.getMonth() + 1) +
        date.getDate() +
        date.getHours() +
        date.getMinutes() +
        date.getSeconds() +
        date.getMilliseconds() +
        suffix; 
      client.multipartUpload(path, f).then(function(result) {
        that.Value4 =  result.res.requestUrls[0];
        if( that.ZDbucket =='zhongdu' ||that.Value4.indexOf("?") != -1) {
          that.Value4 = that.Value4.replace('http://zhongdu.oss-cn-beijing.aliyuncs.com','http://zdimg.lifeweek.com.cn')  
          that.Value4 = that.Value4.split("?")[0];
          //  console.log(that.Value4 ,'替换后路径');
        } 
        that.$emit('emitChange4',that.Value4)
      }); 
  });  
}    
