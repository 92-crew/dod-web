import React from 'react';
import CardList from '@components/main/CardList';
import Wrap from '@components/common/Wrap';
import CardItem from '@components/main/CardItem';

function TodoContents() {
  return (
    <Wrap classNames='todo_contents'>
      <CardList>
        <CardItem />
      </CardList>
    </Wrap>
  );
}

export default TodoContents;
