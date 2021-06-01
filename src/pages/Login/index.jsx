import React, { useState, useRef } from 'react';
import '@styles/css/login';
import icon from '@styles/images/dod_logo.png';

import Button from '@components/common/Button';
import { doLogin } from '@apis/member';
import { setUserInfo } from '@utils/userInfoStorage';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const inputRef = useRef();

  const onClickLogin = () => {
    const params = {
      email: id,
      password: pw,
    };

    doLogin(params, (res) => {
      if (!res.data) { return; }
      
      setUserInfo(res.data);
      // main 페이지 이동
      location.href = '/main';
    });
  };

  const onChangeInput = (type) => (e) => {
    const setInput = {
      id: setId,
      pw: setPw,
    };
    setInput[type](e.target.value);
  }

  return (
    <div className='login'>
      <div className='login_logo'>
        <img src={icon} alt='logo'></img>
      </div>
      <div className='login_id'>
        <input type='email' placeholder='example@naver.com' value={id} onChange={onChangeInput('id')} ref={inputRef} />
      </div>
      <div className='login_pw'>
        <input type='password' placeholder='비밀번호' value={pw} onChange={onChangeInput('pw')} ref={inputRef} />
      </div>
      <Button className='login_btn' text='로그인' onClick={onClickLogin} />
      <div className='login_etc'>
        <a href='/join'>회원가입하기</a>
      </div>
    </div>
  );
}

export default Login;
