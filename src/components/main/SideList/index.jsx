import React from 'react';

function SideList({ children }) {
  return (
    <div className='todo_list'>
      <div className='todo_title'>
        <h3>할일 목록</h3>
      </div>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default SideList;