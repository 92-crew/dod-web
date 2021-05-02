import React from 'react';

import TodoItems from '@components/main/TodoItems';

function TodoList({ data }) {
  const { contents } = data;

  return (
    <div className="main-container">
      <div className="title-wrap">
        <div className="title">
          <h4>To Do List</h4>
        </div>
      </div>
      <div className="card-wrap">
        {
          contents.map((item, idx) => {
            return (
              <TodoItems key={`${contents.dueDateString}_${idx}`} data={item} />
            );
          })
        }
      </div>
    </div>
  );
}

export default TodoList;
