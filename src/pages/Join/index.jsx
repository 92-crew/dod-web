import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@styles/css/join';

import Form from '@components/common/Form';
import Input from '@components/common/Input';
import Button from '@components/common/Button';

import { checkDuplicateId, memberJoin } from '@apis/member';
import { setUserInfo } from '@utils/userInfo';

const ALERT_MSG = {
  CONNECT_FAIL: '처리 중 오류가 발생하였습니다. 다시 시도해주십시오.',
  JOIN_FAIL: '회원가입에 실패하였습니다. 다시 시도해주십시오.',
  DUPLICATED_ID: '중복된 ID입니다. 다시 시도해주십시오.',
}

function Join({ history }) {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');

  const doJoin = () => {
    const params = {
      email: id,
      name: nick,
      password: pw,
    };

    // true: pass / false: fail
    checkDuplicateId(params, (res) => {
      if (!res.data) {
        alert(ALERT_MSG.DUPLICATED_ID);
        return;
      }

      memberJoin(params, (res) => {
        setUserInfo(res.data);
        // main 페이지 이동
        history.push('/main');
      }, (err) => {
        const message = err.message ? err.message : ALERT_MSG.LOGIN_FAIL;
        
        alert(message);
      });
    }, () => {
      alert(ALERT_MSG.CONNECT_FAIL);
    });
  };

  const onChangeInput = (target) => {
    const { name, value } = target;
    const setInput = {
      id: setId,
      nick: setNick,
      pw: setPw,
      cpw: setCpw,
    };
    setInput[name](value);
  }

  return (
    <Form className='join' onSubmit={doJoin} >
      <div className='join_info'>
        <h2>안녕하세요.</h2>
        <h2>처음 오셨군요.</h2>
      </div>
      <div className='join_id'>
        <Input type='email' placeholder='example@naver.com' name='id' value={id} onChange={onChangeInput} />
        <Input type='text' placeholder='닉네임(선택)' name='nick' value={nick} onChange={onChangeInput} />
      </div>
      <div className='join_explain'>
        <p>설정하지 않는다면 기본값인 <em>example</em>이 됩니다.</p>
      </div>
      <div className='join_pw'>
        <Input type='password' placeholder='비밀번호' name='pw' value={pw} onChange={onChangeInput} />
        <Input type='password' placeholder='비밀번호 확인' name='cpw' value={cpw} onChange={onChangeInput} />
      </div>
      <Button className='join_btn' type='submit' text='회원가입 후 로그인' />
      <div className='join_etc'>
        <Link to='/login'>로그인하기</Link>
      </div>
    </Form>
  );
}

export default Join;
