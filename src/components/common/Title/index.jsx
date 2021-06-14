import React from 'react';

function Title({ className, title, children }) {
  return (
    <div className={className || 'todo_title'}>
      <p>{title}</p>
      {children}
    </div>
  );
}

export default Title;