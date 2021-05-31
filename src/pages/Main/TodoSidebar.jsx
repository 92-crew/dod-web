import React from 'react';

import Wrap from '@components/common/Wrap'
import UserInfo from '@components/main/UserInfo';
import TodoList from '@components/main/TodoList';
import TodoItem from '@components/main/TodoItem';
import Button from '@components/common/Button';

function TodoSidebar() {

  const onLogoutClick = () => {
    console.log('logout~');
  };

  const onItemClick = () => {
    console.log('item click~');
  };

  return (
    <Wrap classNames='todo_sidebar'>
      <UserInfo>
        <Button classNames='logout_ico' onClick={onLogoutClick}/>
      </UserInfo>
      <TodoList>
        <TodoItem onClick={onItemClick} />
      </TodoList>
    </Wrap>
  );
}

export default TodoSidebar;