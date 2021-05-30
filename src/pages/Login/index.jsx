import React from 'react';
import '@styles/css/login';
import icon from '@styles/images/dod_logo.png';

function Login() {
  return (
    <>
      <div class="login">
        <div class="login_logo">
          <img src={icon} alt="logo"></img>
        </div>
        <div class="login_id">
          <input type="email" name="" id="" placeholder="example@naver.com" />
        </div>
        <div class="login_pw">
          <input type="password" name="" id="" placeholder="비밀번호" />
        </div>
        <div class="submit">
          <input type="submit" value="로그인" />
        </div>
        <div class="login_etc">
          <a href="/join">회원가입하기</a>
        </div>
      </div>
    </>
  );
}

export default Login;
