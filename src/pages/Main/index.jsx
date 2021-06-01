import React, { useState, useEffect } from 'react';
import '@styles/css/main';

import TodoSidebar from './TodoSidebar'
import TodoContents from './TodoContents';
import { getUserInfo } from '@utils/userInfoStorage';

function Main() {
  console.log(getUserInfo());
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  // useEffect(() => {
  //   getListData();
  // }, []);

  // // 전체 리스트 조회
  // const getListData = () => {
  //   const url = '/api/content/v1/todos';
    
  //   setLoading(true);
  //   axiosLoader(url, {}, (res) => {
  //     setData(res.data);
  //     setLoading(false);
  //   }, (err) => {
  //     setError(err);
  //   });
  // };

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다.</div>;  
  
  // console.log('data', data);
  return (
    <>
      <TodoSidebar />
      <TodoContents />
    </>
  );
}

export default Main;
