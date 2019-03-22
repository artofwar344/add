export function userInfoToggle( ) { 
  var user1 = 'management'
  // var user1 = 'admin'
  // console.log(user1, 'user1');
  var userValue = 0;
  if (user1 === 'management') {
      userValue = 3 //  超级管理员
  } else if (user1 === 'admin') {
      userValue = 2 // 管理员
  } else if (user1 === 'caoren') {
      userValue = 1 //员工
  } else {
      userValue = 0
  }
  return userValue
}