import React, { useState, useEffect } from 'react';
import '@styles/css/main';
import axios from 'axios';

import AsideList from '@components/main/AsideList';
import TodoList from '@components/main/TodoList';

// mock data
import todoData from '@mock/data/todoData';

function Main() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 전체 리스트 조회
  const getListData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/content/v1/todos');
      setData(response.data);
      
      // mock data
      // setData(todoData);
    } catch (err) {
      setError(err);
      console.log('error', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getListData();
  }, []);
  
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  console.log('data', data);

  return (
    <>
      <AsideList data={data} />
      <TodoList data={data} />
    </>
  );
}

export default Main;
