import React, { useCallback } from 'react';
import CardItem from '@components/main/CardItem';
import Contents from '@components/common/Contents';
import Title from '@components/common/Title';
import { addTodoItem, modifyTodoItem, removeTodoItem } from '@apis/todos';

function TodoContents({ contents }) {
  console.log(contents);

  const eventHandler = {
    add: useCallback((data) => {
      console.log('addItem',data);
      addTodoItem(data, successClbk, errorClbk);
    }, []),
    modify: useCallback((id, data) => {
      console.log('modifyItem', id, data);
      modifyTodoItem(id, data, successClbk, errorClbk);
    }, []),
    remove: useCallback((id) => {
      console.log('removeItem', id);
      removeTodoItem(id, successClbk, errorClbk);
    }, []),
  };

  const successClbk = (res) => {
    console.log(res);
  };

  const errorClbk = (err) => {
    console.log(err);
  };

  const cardWrap = (item) => {
    const { dueDateString, todos } = item;
    const { dueDate } = todos.find(item => item.dueDate);

    return (
      <Contents key={`cardList_${dueDateString}`} className='card' id={dueDate}>
        <Title className='card_title' title={dueDateString} />
        {
          todos.map(item =>
            <CardItem
              key={`cardItem_${item.id}`}
              type='check'
              item={item}
              dueDate={dueDate}
              eventHandler={eventHandler}
            />)
        }
        <CardItem 
          type='add'
          dueDate={dueDate}
          eventHandler={eventHandler}
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
