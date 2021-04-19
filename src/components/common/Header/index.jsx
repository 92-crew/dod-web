import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
        <li><Link to="/">메인</Link></li>
        <li><Link to="/login">로그인</Link></li>
        <li><Link to="/join">회원가입</Link></li>
      </ul>
    </div>
  );
}

export default Header;
