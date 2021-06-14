import React, { useCallback, useState } from 'react';

import UserInfo from '@components/main/UserInfo';
import SideList from '@components/main/SideList';
import SideItem from '@components/main/SideItem';
import Button from '@components/common/Button';
import { removeUserInfo } from '@utils/userInfo';
import AddModal from '@components/main/AddModal';

function TodoSidebar({ userInfo, contents }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  const onItemClick = useCallback((data, idx) => {
    console.log('item click~', data, idx);
    setActiveIdx(idx);
  }, []);

  return (
    <>
      <div className='todo_sidebar'>
        <UserInfo name={userInfo.name}>
          <Button className='logout_ico' onClick={onLogoutClick} />
        </UserInfo>
        <SideList onAddItem={toggleModal}>
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
        </SideList>
      </div>
      <AddModal isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}

export default TodoSidebar;