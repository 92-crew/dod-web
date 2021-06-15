import React, { useState, useRef } from 'react';
import '@styles/css/join';

import Button from '@components/common/Button';
import { checkDuplicateId, doJoin } from '@apis/member';
import { setUserInfo } from '@utils/userInfo';

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

    checkDuplicateId(params, (res) => {
      if (!res.data) { return; }

      doJoin(params, (res) => {
        setUserInfo(res.data);
        // main 페이지 이동
        location.href = '/main';
      }, (err, msg) => {
        alert(msg);
        console.log(err);
      });
    });
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

export default Join;
