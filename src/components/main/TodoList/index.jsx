import React from 'react';

function TodoList({ children }) {
  return (
    <div class="todo_list">
      <div class="todo_title">
        <h3>할일 목록</h3>
      </div>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default TodoList;