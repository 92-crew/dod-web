import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '@styles/css/login';
import icon from '@styles/images/dod_logo.png';

import Button from '@components/common/Button';
import { doLogin } from '@apis/member';
import { setUserInfo } from '@utils/userInfo';

function Login({ history }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const inputRef = useRef();

  const onClickLogin = () => {
    const params = {
      email: id,
      password: pw,
    };

    console.log('history', history);

    doLogin(params, (res) => {
      if (!res.data) { return; }
      
      setUserInfo(res.data);
      // main 페이지 이동
      history.push('/main');
    }, (err, msg) => {
      alert(msg);
      console.log(err);
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
        <Link to='/join'>회원가입하기</Link>
      </div>
    </div>
  );
}

export default Login;
