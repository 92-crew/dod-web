import React, { useCallback } from 'react';

function SideItem({ item, idx, isActive, onClick }) {
  const { dueDateString, todos } = item;

  const onClickHandler = useCallback(() => {
    onClick && onClick(todos, idx);
  })

  return (
    <li>
      <a href='#none' className={isActive ? 'on' : ''} onClick={onClickHandler}>
        <span>{dueDateString}</span>
        <span>{todos.length}개의 할일</span>
      </a>
    </li>
  );
}

export default SideItem;