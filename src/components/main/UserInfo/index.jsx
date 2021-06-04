import React from 'react';

function UserInfo({ name, children }) {
  return (
    <div className='user_info'>
      <span><em>{name}</em> 님</span>
      {children}
    </div>
  );
}

export default UserInfo;