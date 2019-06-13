import axios from 'axios'

var urls = ''
  if(window.location.hostname=='web.yn.gov.cn'){
    urls= "https://zwfw.yn.gov.cn"
  }else{
    urls= "http://128.192.179.84:8088"
  }
const axiosCommonConfig = Object.freeze({
  timeout: 30000,
  baseURL: urls,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/json;charset=UTF-8'
  }
})

export const httpRequestMethods = Object.freeze({
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
  PATCH: 'patch'
})

export const axiosInstance = axios.create(axiosCommonConfig) // 创建一个请求

axiosInstance.interceptors.response.use(function (response) {   //拦截器
  let cent = JSON.stringify(response.data)
  cent = cent.replace('C-Response-Body', 'content')
  cent = cent.replace('C-API-Status', 'status')
  cent = cent.replace('C-Response-Desc', 'desc')
  cent = JSON.parse(cent)
  console.log(cent)
  if (cent.status === '01') {
    return Promise.reject(new Error(cent.desc))
  } else {
    if (cent.content !== '{"status":01,"msg":"需要选择执业机构"}') {
      let data = JSON.parse(cent.content)
      Promise.resolve()
      return data
    } else {
      Promise.resolve()
      return cent.content
    }
  }
},
function (error) {
  return Promise.reject(error)
})

export const baseAPIRequest = function (endPoint, method, params) {
  let config = {
    method: method,
    url: endPoint,
    headers: {
      'C-App-Id': 'GSP_APP_001', 'C-Dynamic-Password-Foruser':window.sessionStorage.getItem("usertoken") != 'null' ? window.sessionStorage.getItem("usertoken") : '1234567890'
    }
  }

  if (['post', 'put', 'patch'].includes(method)) {
    config.data = JSON.stringify(params) 
  } else {
    config.params = params
  }

  return axiosInstance.request(config).then(function (data) {
    return Promise.resolve(data)
  },function (error) {
    return Promise.reject(error)
  }).catch(function (e) {
    console.log(e)
    return Promise.reject(e)
  })
}