import React from 'react';
import '@styles/css/main';

import AsideList from '@components/main/AsideList';
import TodoList from '@components/main/TodoList';

// mock data
import todoData from '@mock/data/todoData';

// 리스트 조회
const getListData = () => todoData;

function Main() {
  const data = getListData();

  return (
    <>
      <AsideList data={data} />
      <TodoList data={data} />
    </>
  );
}

export default Main;
