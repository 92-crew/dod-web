export function setUserInfo(data) {
  const userInfo = JSON.stringify(data);
  sessionStorage.setItem('userInfo', userInfo);
}

export function getUserInfo() {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo', userInfo));
  return userInfo;
}