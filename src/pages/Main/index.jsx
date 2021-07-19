import React, { useState, useEffect } from 'react';
import '@styles/css/main';

import TodoSidebar from './TodoSidebar'
import TodoContents from './TodoContents';
import { useTodoStateContext, useTodoDispatchContext } from './TodoContext';

import { getUserInfo } from '@utils/userInfo';
import { getTodoList, addTodoItem, modifyTodoItem, removeTodoItem } from '@apis/todos';

function Main() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [focusIdx, setFocusIdx] = useState(-1);
  const { contents } = useTodoStateContext();
  const todoDispatch = useTodoDispatchContext();

  const userInfo = getUserInfo();
  const isLogin = !!userInfo;

  // 전체 리스트 조회
  const setTotalList = () => {
    getTodoList((res) => {
      const { data } = res;
      setLoading(false);
      todoDispatch({
        type: 'REFRESH',
        contents: data.contents,
      });
      onRefresh(data.contents);
    }, (err) => {
      setLoading(false);
      setError(err);
    });
  };

  const actions = {
    add: (data) => {
      addTodoItem(data, setTotalList);
    },
    modify: (data) => {
      modifyTodoItem(data, setTotalList);
    },
    remove: (data) => {
      removeTodoItem(data, setTotalList);
    },
  };

  const onRefresh = (contents) => {
    if (focusIdx < 0 && !!contents) {
      const lastIdx = contents.length - 1;
      setFocusIdx(lastIdx);
      document.getElementById(`card_${lastIdx}`).scrollIntoView();
    }
  };

  useEffect(() => {
    setTotalList();
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
  
  if (error || !contents) return <div>데이터를 읽는 중 에러가 발생하였습니다.</div>;  
  
  return (
    <>
      <TodoSidebar userInfo={userInfo} contents={contents} actions={actions} />
      <TodoContents contents={contents} actions={actions} />
    </>
  );
}

export default Main;
