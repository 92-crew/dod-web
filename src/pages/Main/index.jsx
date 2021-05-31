import React, { useState, useEffect } from 'react';
import '@styles/css/main';

import { axiosLoader } from '@utils/axiosLoader';

import TodoSidebar from './TodoSidebar'
import TodoContents from './TodoContents';

const url = '/api/v1/member/check/duplicate';
const url2 = '/api/v1/member/login';

axiosLoader(url, {
  type: 'get',
  prams: {
    email: 'sample@sample.com',
  },
}, (res) => {
  console.log(res);
}, (err) => {
  console.log(err);
});

axiosLoader(url2, {
  type: 'post',
  params: {
    email: 'sample@sample.com',
    password: 'sample',
  },
}, (res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})

function Main() {
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
