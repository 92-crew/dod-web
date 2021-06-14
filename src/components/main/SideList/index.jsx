import React from 'react';
import Button from '@components/common/Button';

function SideList({ onAddItem, children }) {
  return (
    <>
      <div className='todo_title'>
        <h3>할일 목록</h3>
        <Button className='add_ico' onClick={onAddItem}/>
      </div>
      <div className='todo_list'>
        <ul>
          {children}
        </ul>
      </div>
    </>
  );
}

export default SideList;