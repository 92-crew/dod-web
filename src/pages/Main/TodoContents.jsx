import React, { useCallback, useState } from 'react';
import CardList from '@components/main/CardList';
import CardItem from '@components/main/CardItem';

function TodoContents({ contents }) {
  // const [text, setText] = useState('');
  console.log(contents);

  const eventHandler = {
    onCheckBox: useCallback((e) => {
      const checked = e.target.checked;

      console.log(checked);
    }, []),
    onChangeTxt: useCallback((e) => {
      // console.log(e.target.value);
      // cone.log(e, e.target.value, text);
    }, []),
    onAddClick: useCallback((e) => {
      console.log(e, e.target.value);
    }, []),
    onRemoveClick: useCallback((e, id) => {
      console.log(e, id);
    }, []),
  }

  const cardWrap = (item) => {
    const { dueDateString, todos } = item;
    const todoId = todos.find(item => item.dueDate).dueDate;

    return (
      <CardList key={`cardList_${dueDateString}`} title={dueDateString} todoId={todoId}>
        {
          todos.map(item =>
            <CardItem
              key={`cardItem_${item.id}`}
              type='basic'
              item={item}
              isChecked={item.status === 'RESOLVED'}
              eventHandler={eventHandler}
            />)
        }
        <CardItem
          type='add'
          eventHandler={eventHandler}
          item={{}}
        />
      </CardList>
    );
  };

  return (
    <div className='todo_contents'>
      { contents.map(item => cardWrap(item))}
    </div>
  );
}

export default TodoContents;
