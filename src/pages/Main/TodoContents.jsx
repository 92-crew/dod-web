import React from 'react';
import Contents from '@components/common/Contents';
import Title from '@components/common/Title';
import CheckItem from '@components/main/CheckItem';
import AddItem from '@components/main/AddItem';

function TodoContents({ contents, actions }) {
  console.log(contents);

  const cardWrap = (item) => {
    const { dueDateString, todos } = item;
    const { dueDate } = todos.find(item => item.dueDate);

    return (
      <Contents key={`cardList_${dueDateString}`} className='card' id={dueDate}>
        <Title className='card_title' title={dueDateString} />
        {
          todos.map(item =>
            <CheckItem
              key={`cardItem_${item.id}`}
              item={item}
              dueDate={dueDate}
              actions={actions}
            />)
        }
        <AddItem
          dueDate={dueDate}
          actions={actions}
        />
      </Contents>
    );
  };

  return (
    <div className='todo_contents'>
      { contents.map(item => cardWrap(item))}
    </div>
  );
}

export default TodoContents;
