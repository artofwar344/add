import Vue from 'vue'
import Axios from "axios";

export function uploadSub(IMGURL ,Files ) {
  Axios.get("api/portal/oss/token", {}).then(res => {
    // console.log(res,'new data')
      console.log( res.status);
    const result = res.data.model;
    //  这里是OSS
    const client = new OSS.Wrapper({
      region: result.region,
      accessKeyId: result.AccessKeyId,
      accessKeySecret: result.AccessKeySecret,
      bucket: result.bucket,
      stsToken: result.StsToken
    });
    if (res.status === 200 || res.status === 304) {
     // this.status = "finished";
      res.status 
     
      // console.log('upload success!')
    } else {
      console.log(`error：error code ${res.status}`);
    }  
    console.log(Files);
    
      var f = Files[0].file;
      console.log(f.size);
      const isLt2M = f.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("请上传2M以下的.xlsx文件");
        return false;
      }
      const Name = f.name;
      const suffix = Name.substr(Name.indexOf("."));
        //  时间戳 
      const timeForUpload = (() => {
        const time = new Date();
        const y = time.getFullYear();
        const m = time.getMonth() + 1;
        const d = time.getDate();
        const h = time.getHours();
        const mm = time.getMinutes();
        const s = time.getSeconds();
        const ms = time.getMilliseconds();
        return (
          "" +
          y +
         ( ((numB) => {return numB < 10 ? "0" + numB : numB})(m)) +
         ( ((numB) => {return numB < 10 ? "0" + numB : numB})(d)) +
         ( ((numB) => {return numB < 10 ? "0" + numB : numB})(h)) +
         ( ((numB) => {return numB < 10 ? "0" + numB : numB})(mm)) +
         ( ((numB) => {return numB < 10 ? "0" + numB : numB})(s)) +
         ( ((numB) => {return numB < 10 ? "0" + numB : numB})(ms))  
        );
      } ) ()

      //const storeAs = "zhongdu/" + timeForUpload + suffix; //  路径+时间戳+后缀名
      const storeAs = result.uploadPath + timeForUpload + suffix; //  路径+时间戳+后缀名
     // console.log(storeAs);
      client.multipartUpload(storeAs, f).then(function(result) {
        return IMGURL =  result.res.requestUrls[0] 
      }); 
  });
 // console.log(this.files, "是内容吗？"); 
}
export function isContain(Files){
  return Files.find(
    item => item.name === file.name && item.size === file.size
  );


  }

export function html5Reader(file, item) {
  const reader = new FileReader();
  reader.onload = e => {
    this.$set(item, "src", e.target.result);
  };
  reader.readAsDataURL(file);
}


// export function  fileChanged(Files) { 
//   for (let i = 0; i < Files.length; i++) {
//     if (!isContain(Files[i])) {
//       const item = {
//         name: Files[0].name,
//         size: Files[0].size,
//         file: Files[0]
//       };
//       html5Reader(Files[0], item);
//       Files.push(item);
//     }
//   }
//   Files.value = "";
//  // this.$refs.file.value = "";
// }