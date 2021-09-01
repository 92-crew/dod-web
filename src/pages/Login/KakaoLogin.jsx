import React from 'react';

function KakaoLogin() {
  const doKakaoLogin = () => {
    console.log('kakao');
    Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);
      },
      fail: (err) => {
        console.log(err);
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