import React from 'react';

function CardList({ title, children }) {
  return (
    <div className='card_list'>
      <div className='card_title'>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
}

export default CardList;