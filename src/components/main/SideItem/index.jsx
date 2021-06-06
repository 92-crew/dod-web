import React, { useCallback } from 'react';

function SideItem({ item, idx, isActive, onClick }) {
  const { dueDateString, todos } = item;
  const todoId = todos.find(item => item.dueDate).dueDate;

  const onClickHandler = useCallback(() => {
    onClick && onClick(todos, idx);
  })

  return (
    <li>
      <a href={`#${todoId}`} className={isActive ? 'on' : ''} onClick={onClickHandler}>
        <span>{dueDateString}</span>
        <span>{todos.length}개의 할일</span>
      </a>
    </li>
  );
}

export default SideItem;