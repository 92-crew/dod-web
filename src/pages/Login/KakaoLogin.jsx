import React from 'react';

function displayToken(accessToken) {
  const token = accessToken;
  if(token) {
    Kakao.Auth.setAccessToken(token)
    Kakao.Auth.getStatusInfo(({ status }) => {
      if(status === 'connected') {
        document.getElementById('token-result').innerText = 'login success. token: ' + Kakao.Auth.getAccessToken()
      } else {
        Kakao.Auth.setAccessToken(null)
      }
    })
  }
}

function KakaoLogin() {
  const doKakaoLogin = () => {
    Kakao.Auth.login({
      success: (authObj) => {
        alert(JSON.stringify(authObj));
        console.log(authObj);
        displayToken(authObj.access_token);
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
      <p id="token-result"></p>
    </>
  );
}

export default KakaoLogin;