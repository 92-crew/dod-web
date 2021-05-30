import React from 'react';
import '@styles/css/join';


function Join() {
  return (
    <>
      <div class="join">
        <div class="join_info">
          <h2>안녕하세요.</h2>
          <h2>처음 오셨군요.</h2>
        </div>
        <div class="join_id">
          <input type="email" name="" id="" placeholder="example@naver.com" />
          <input type="text" name="" id="" placeholder="닉네임(선택)" />
        </div>
        <div class="join_etc">
          <p>설정하지 않는다면 기본값인 <em>example</em>이 됩니다.</p>
        </div>
        <div class="join_pw">
          <input type="password" name="" id="" placeholder="비밀번호" />
          <input type="password" name="" id="" placeholder="비밀번호 확인" />
        </div>
        <div class="submit">
          <input type="submit" value="회원가입 후 로그인" />
        </div>
      </div>
    </>
  );
}

export default Join;
