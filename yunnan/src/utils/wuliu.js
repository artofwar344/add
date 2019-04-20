import axios from 'axios';
var urls = window.location;
      let UrlIp = "";
      if (urls.hostname == "web.yn.gov.cn") {
        UrlIp = "https://zwfw.yn.gov.cn";
      } else {
        UrlIp = "http://128.192.179.84:8088";
      }
const wuliu = axios.create({
  baseURL:UrlIp,
  timeout: 60000,  // 请求超时时间
  //'C-Business-Id':timescode+systemID+channelType+AppSerialNumber+DeviceNumber,
  headers: {  "Content-Type":"application/json",
"C-Business-Id":"20181115124830231010100100010010",
"C-App-Id":"GSP_APP_001",
"C-Tenancy-Id":"530000000000"}
});
export default wuliu;