/**
 * 유저 정보 반환
 * @returns {Object} userInfo data
 */
 export function getUserInfo() {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo', userInfo));
  
  return userInfo || null;
}

/**
 * 유저 정보 세팅
 * @param {Object} data userInfo data
 */
export function setUserInfo(data) {
  const userInfo = JSON.stringify(data);
  
  sessionStorage.setItem('userInfo', userInfo);
}

/**
 * 유저 정보 제거
 */
 export function removeUserInfo() {
   sessionStorage.removeItem('userInfo');
}
