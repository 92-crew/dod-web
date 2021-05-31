import React, { useState, useRef } from 'react';
import '@styles/css/join';

import Button from '@components/common/Button';
import { axiosLoader } from '@utils/axiosLoader';

const API_LIST = {
  DUPLICATE: '/api/v1/member/check/duplicate',
  JOIN: '/api/v1/member/join',
}

function Join() {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');

  const inputRef = useRef();

  const onClickJoin = () => {
    console.log(id, nick, pw, cpw);
    const params = {
      email: id,
      name: nick,
      password: pw,
    };

    doJoin(params);
  };

  const onChangeInput = (type) => (e) => {
    const setInput = {
      id: setId,
      nick: setNick,
      pw: setPw,
      cpw: setCpw,
    };
    setInput[type](e.target.value);
  }

  return (
    <div className='join'>
      <div className='join_info'>
        <h2>안녕하세요.</h2>
        <h2>처음 오셨군요.</h2>
      </div>
      <div className='join_id'>
        <input type='email' placeholder='example@naver.com' value={id} onChange={onChangeInput('id')} ref={inputRef} />
        <input type='text' placeholder='닉네임(선택)' value={nick} onChange={onChangeInput('nick')} ref={inputRef} />
      </div>
      <div className='join_etc'>
        <p>설정하지 않는다면 기본값인 <em>example</em>이 됩니다.</p>
      </div>
      <div className='join_pw'>
        <input type='password' placeholder='비밀번호' value={pw} onChange={onChangeInput('pw')} ref={inputRef} />
        <input type='password' placeholder='비밀번호 확인' value={cpw} onChange={onChangeInput('cpw')} ref={inputRef} />
      </div>
      <Button className='join_btn' text='회원가입 후 로그인' onClick={onClickJoin} />
    </div>
  );
}

function doJoin(params) {
  const { email } = params;
  
  checkDuplicateId({ email }, (res) => {
    console.log(res);
    res.data && axiosLoader(API_LIST.JOIN, {
      type: 'post',
      params,
    }, (res) => {
      // user info localstorage 저장
      console.log(res);

      // main 페이지 이동
      window.location.href = '/main';
    }, errorClbk);
  });
}

function checkDuplicateId(params, successClbk) {
  axiosLoader(API_LIST.DUPLICATE, {
    type: 'get',
    params,
  }, successClbk, errorClbk);
}

function errorClbk(err) {
  alert('회원가입에 실패하였습니다.\n다시 시도해주십시오.')
  console.log(err);
}

export default Join;
