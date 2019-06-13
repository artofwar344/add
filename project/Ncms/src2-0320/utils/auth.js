// import Cookies from 'js-cookie'

//  console.log('index user info ');
 
// let tokenCookie =  Cookies.set('staff_uc', 'ck1547621897253synsf'); 
// const TokenKey = tokenCookie 
// const token666 =  Cookies.get('staff_uc');
 

// // Cookies.set('staff_uc', 'ck1547621897253synsf'); 

// export function getToken() {
//     console.log(Cookies.get(TokenKey),'get 用户token');
//     return Cookies.get(TokenKey)
// }

// export function setToken() { 
//     return Cookies.set(TokenKey, (token666 ? token666 : '')) 
// }

// export function componentGetV(ulrTile) {
//   return () => import('@/views/' + ulrTile)
// }
// export function componentGetC(ulrTile) {
//   return () => import('@/components/' + ulrTile)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

import Cookies from 'js-cookie'
const getInfo =  Cookies.get('staff_uc');
// console.log(getInfo,'staff_uc - -  - 获取成功')
var userName = sessionStorage.getItem('JSESSIONID');
// console.log(userName,'GET SERVER - SESSION') 

export function getToken() {
  if(getInfo === '' || getInfo === "undefined"){
    window.location.href ='http://madmindev.lifeweek.com.cn/login'
  }else if(getInfo !== getInfo){
    window.location.href ='http://madmindev.lifeweek.com.cn/login'
  }else{
    return 'admin'
  }
  // return Cookies.get(TokenKey)
}

export function setToken(token) { 
  return 'Admin-Token=admin'  
  // return Cookies.set(TokenKey, token)
}

export function componentGetV(ulrTile) {
  return () => import('@/views/' + ulrTile)
}
export function componentGetC(ulrTile) {
  return () => import('@/components/' + ulrTile)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}