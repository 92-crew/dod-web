import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@styles/css/login';
import icon from '@styles/images/dod_logo.png';

import Form from '@components/common/Form';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import KakaoLogin from './KakaoLogin';

import { memberLogin } from '@apis/member';
import { setUserInfo } from '@utils/userInfo';

const ALERT_MSG = {
  CONNECT_FAIL: '처리 중 오류가 발생하였습니다. 다시 시도해주십시오.',
  LOGIN_FAIL: '로그인에 실패하였습니다. 다시 시도해주십시오.',
}

function Login({ history }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const doLogin = () => {
    const params = {
      email: id,
      password: pw,
    };

    memberLogin(params, (res) => {
      if (!res.data) {
        alert(ALERT_MSG.CONNECT_FAIL);
        return;
      }
      
      setUserInfo(res.data);
      // main 페이지 이동
      history.push('/main');
    }, (err) => {
      const message = err.message ? err.message : ALERT_MSG.LOGIN_FAIL;
      
      alert(message);
    });
  };

  const onChangeInput = (target) => {
    const { name, value } = target;
    const setInput = {
      id: setId,
      pw: setPw,
    };
    setInput[name](value);
  }

  return (
    <Form className='login' onSubmit={doLogin}>
      <div className='login_logo'>
        <img src={icon} alt='logo'></img>
      </div>
      <div className='login_id'>
        <Input type='email' name='id' placeholder='example@naver.com' value={id} onChange={onChangeInput} />
      </div>
      <div className='login_pw'>
        <Input type='password' name='pw' placeholder='비밀번호' value={pw} onChange={onChangeInput} />
      </div>
      <Button className='login_btn' type='submit' text='로그인' />
      <KakaoLogin />
      <div className='login_etc'>
        <Link to='/join'>회원가입하기</Link>
      </div>
    </Form>
  );
}

export default Login;
