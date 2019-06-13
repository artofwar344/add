// import Cookies from 'js-cookie'

//  console.log('index user info ');
 
// export function componentGetC(ulrTile) {
//   return () => import('@/components/' + ulrTile)
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
// export function  fulltime(timer) {
export function  fulltime(timer) {
  let date = new Date(timer) 
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  if(m<10){m='0'+m}
  let d = date.getDate();
  if(d<10){d='0'+d}
  let h = date.getHours();
  if(h<10){h='0'+h}
  let i = date.getMinutes();
  if(i<10){i='0'+i}
  let s = date.getSeconds() ;
  if(s<10){s='0'+s}
  const a = date.getDay(); 
  return y+'-'+m+'-'+d +' '+h+':'+i+':'+s 
}
export function  endfulltime(timer) {
  let date = new Date(timer)
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  if(m<10){m='0'+m}
  let d = date.getDate();
  if(d<10){d='0'+d}
  let h = 23; 
  let i = 59; 
  let s = 59;  
  return y+'-'+m+'-'+d +' '+h+':'+i+':'+s 
}