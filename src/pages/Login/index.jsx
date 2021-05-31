import React, { useState, useRef } from 'react';
import '@styles/css/login';
import icon from '@styles/images/dod_logo.png';

import { axiosLoader } from '@utils/axiosLoader';

import Button from '@components/common/Button';

const API_LIST = {
  LOGIN: '/api/v1/member/login',
}

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const inputRef = useRef();

  const onClickLogin = () => {
    const params = {
      email: id,
      password: pw,
    };
    
    doLogin(params);
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

/**
 * 로그인 실행
 * @param {Object} params param data
 */
function doLogin(params) {
  axiosLoader(API_LIST.LOGIN, {
    type: 'post',
    params,
  }, (res) => {
    // user info localstorage 저장
    console.log(res);

    // main 페이지 이동
    window.location.href = '/main';
  }, errorClbk);
}

function errorClbk(err) {
  alert('로그인에 실패하였습니다.\n다시 시도해주십시오.')
  console.log(err);
}

export default Login;
