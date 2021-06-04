import React, { useCallback, useState } from 'react';

import UserInfo from '@components/main/UserInfo';
import TodoList from '@components/main/TodoList';
import TodoItem from '@components/main/TodoItem';
import Button from '@components/common/Button';
import { removeUserInfo } from '@utils/userInfoStorage';

function TodoSidebar({ userInfo, contents }) {
  const [activeIdx, setActiveIdx] = useState(0);

  // 로그아웃
  const onLogoutClick = useCallback(() => {
    // 유저 정보 제거
    removeUserInfo();
    // 로그인 페이지 이동
    location.href = '/';
  }, []);

  const onItemClick = useCallback((data, idx) => {
    console.log('item click~', data, idx);
    setActiveIdx(idx);

  }, []);

  return (
    <div className='todo_sidebar'>
      <UserInfo name={userInfo.name}>
        <Button className='logout_ico' onClick={onLogoutClick}/>
      </UserInfo>
      <TodoList>
        {
          contents.map((item, idx) => {
            return (
              <TodoItem key={item.dueDateString} item={item} idx={idx} isActive={idx === activeIdx} onClick={onItemClick} />
            );
          })
        }
      </TodoList>
    </div>
  );
}

export default TodoSidebar;