import React from 'react';
import CardList from '@components/main/CardList';
import CardItem from '@components/main/CardItem';

function TodoContents() {
  return (
    <div className='todo_contents'>
      <CardList>
        <CardItem />
      </CardList>
    </div>
  );
}

export default TodoContents;
