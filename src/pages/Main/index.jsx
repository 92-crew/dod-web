import React, { useState, useEffect } from 'react';
import '@styles/css/main';

import TodoSidebar from './TodoSidebar'
import TodoContents from './TodoContents';
import { getUserInfo } from '@utils/userInfo';
import { getTodoList } from '@apis/todos';

function Main() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  

  const userInfo = getUserInfo();
  const isLogin = !!userInfo && !!userInfo.name;
  
  // 전체 리스트 조회
  useEffect(() => {
    getTodoList((res) => {
      setLoading(false);
      setTodo(res.data);
    }, (err) => {
      setError(err);
    });
  }, []);

  if (!isLogin) {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      // login 페이지 이동
      location.href = '/login';
    }, 3000);
    return <div> 로그인이 필요합니다. 잠시 후 로그인 페이지로 이동합니다.</div>
  }

  if (loading) return <div>데이터를 읽어오는 중 입니다...</div>;
  
  if (error || !todo) return <div>데이터를 읽는 중 에러가 발생하였습니다.</div>;  
  
  return (
    <>
      <TodoSidebar userInfo={userInfo} contents={todo.contents} />
      <TodoContents contents={todo.contents} />
    </>
  );
}

export default Main;
