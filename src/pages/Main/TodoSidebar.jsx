import React, { useCallback, useState } from 'react';

import Button from '@components/common/Button';
import Contents from '@components/common/Contents';
import Title from '@components/common/Title';
import UserInfo from '@components/main/UserInfo';
import SideItem from '@components/main/SideItem';
import TodoModal from './TodoModal';

import { removeUserInfo } from '@utils/userInfo';

function TodoSidebar({ userInfo, contents, actions }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [todoItem, setTodoItem] = useState(null);

  // 로그아웃
  const onLogoutClick = useCallback(() => {
    // 유저 정보 제거
    removeUserInfo();
    // 로그인 페이지 이동
    location.href = '/';
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onAddClick = useCallback(() => {
    setTodoItem(null);
    
    toggleModal();
  }, [isOpen]);

  const onItemClick = useCallback((idx) => {
    console.log('item click~', idx);
    setActiveIdx(idx);
    setTodoItem(contents[idx]);

    toggleModal();
  }, [isOpen]);

  return (
    <div className='todo_sidebar'>
      <UserInfo name={userInfo.name}>
        <Button className='logout_ico' onClick={onLogoutClick} />
      </UserInfo>
      <Contents className='todo_list'>
        <Title title='할일 목록'>
          <Button className='add_ico' onClick={onAddClick} />
        </Title>
        <ul>
          {
            contents.map((item, idx) => {
              return (
                <SideItem
                  key={`sideItem_${item.dueDateString}`}
                  item={item}
                  idx={idx}
                  isActive={idx === activeIdx}
                  onClick={onItemClick}
                />
              );
            })
          }
        </ul>
      </Contents>
      <TodoModal isOpen={isOpen} toggleModal={toggleModal} actions={actions} todoItem={todoItem} />
    </div>
  );
}

export default TodoSidebar;