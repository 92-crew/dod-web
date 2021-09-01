import React from 'react';

function KakaoLogin() {
  const doKakaoLogin = () => {
    Kakao.Auth.login({
      success: (authObj) => {
        alert(JSON.stringify(authObj));
        console.log(authObj);
        getUserInfo(authObj.access_token);
      },
      fail: (err) => {
        alert(JSON.stringify(err));
      },
    })
  }

  return (
    <>
      <a className="login_kakao" id="custom-login-btn" onClick={doKakaoLogin}>
        <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"/>
      </a>
    </>
  );
}

export default KakaoLogin;

function getUserInfo(accessToken) {
  const token = accessToken;
  if(token) {
    Kakao.Auth.setAccessToken(token)
    Kakao.Auth.getStatusInfo(({ status, user }) => {
      if(status === 'connected') {
        alert(JSON.stringify(user));
        console.log(user);
      } else {
        Kakao.Auth.setAccessToken(null)
      }
    })
  }
}
