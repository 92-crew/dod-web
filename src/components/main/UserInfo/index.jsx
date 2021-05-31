import React from 'react';

function UserInfo({ children }) {
  return (
    <div className='user_info'>
      <span><em>닉네임</em> 님</span>
      {children}
    </div>
  );
}

export default UserInfo;