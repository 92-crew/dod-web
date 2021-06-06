import React from 'react';

function CardList({ title, todoId, children }) {
  return (
    <div className='card_list' id={todoId}>
      <div className='card_title'>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
}

export default CardList;