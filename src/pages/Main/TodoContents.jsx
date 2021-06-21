import React from 'react';
import Contents from '@components/common/Contents';
import Title from '@components/common/Title';
import ItemList from '@components/main/ItemList';

function TodoContents({ contents, actions }) {
  console.log(contents);
  const { add, modify, remove } = actions;

  const onAddItem = (data) => {
    add(data);
  };

  const onRemoveItem = (data) => {
    remove(data);
  };

  const onModifyItem = (data) => {
    modify(data);
  };

  return (
    <div className='todo_contents'>
      {contents.map(item => {
        const { dueDateString, todos } = item;

        return (
          <Contents key={`cardList_${dueDateString}`} className='card'>
            <Title className='card_title' title={dueDateString} />
            <ItemList className='card_list' todos={todos} onAddItem={onAddItem} onRemoveItem={onRemoveItem} onModifyItem={onModifyItem} />
          </Contents>
        );
      })}
    </div>
  );
}

export default TodoContents;
