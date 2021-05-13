import React, { useState, useEffect } from 'react';
import '@styles/css/main';

import AsideList from '@components/main/AsideList';
import TodoList from '@components/main/TodoList';

import { axiosLoader } from '@utils/axiosLoader';
// mock data
import todoData from '@mock/data/todoData';

function Main() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [test, setTest] = useState([]);
  
  useEffect(() => {
    getListData();
  }, []);

  // 전체 리스트 조회
  const getListData = () => {
    // axios test url
    const url = 'https://jsonplaceholder.typicode.com/users';
    // const url = 'http://localhost:8081/api/content/v1/todos';
    
    setLoading(true);
    axiosLoader(url, {}, (res) => {
      console.log('res', res);
      setTest(res.data);
      setLoading(false);

    }, (err) => {
      setError(err);
    });

    // mock data
    setData(todoData);    
  };

  
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  
  console.log('data', data);
  console.log('test', test);

  return (
    <>
      <div>
        <span>axios test data</span>
        {
          test.map(item => (
              <li key={item.id}>{item.username}</li>
            )
          )
        }
      </div>
      <AsideList data={data} />
      <TodoList data={data} />
    </>
  );
}

export default Main;
