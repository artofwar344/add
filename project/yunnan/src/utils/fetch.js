import axios from 'axios';
axios.defaults.baseURL = 'http://128.196.63.105:8180'

var headers = {};
if (window.sessionStorage.getItem("CHNL_ID") === 'CC03C004') {
  headers = { 'C-App-Id': 'ccbynt#ynzwAppId', 'C-Dynamic-Password-Foruser': window.sessionStorage.getItem('usertoken') }
} else {
  headers = { 'C-App-Id': 'GSP_APP_001', 'C-Dynamic-Password-Foruser': window.sessionStorage.getItem('usertoken') }
}
// 创建axios实例
const service = axios.create({
  baseURL: '"http://128.196.63.105:8180"',
  timeout: 50000,                // 请求超时时间
  headers: headers
});

// request拦截器
service.interceptors.request.use((config) => {
  // 需要在请求发出前做的全局处理逻辑可以添加在这里
  return config;
}, (error) => {
  // 可以在这里统一处理请求错误
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use((response) => {
  if (response) {
    return response.data;
    // 可以在这里统一处理响应错误
    // return Promise.reject(response.data);
  }
  // return response.data.content;
}, (error) => {
  // 可以在这里统一处理响应错误
  return Promise.reject(error);
});
export default service;
