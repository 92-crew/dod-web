import React, { useCallback } from 'react';
import CardList from '@components/main/CardList';
import CardItem from '@components/main/CardItem';
import { addTodoItem, modifyTodoItem, removeTodoItem } from '@apis/todos';

function TodoContents({ contents }) {
  console.log(contents);

  const eventHandler = {
    onAddItem: useCallback((data) => {
      console.log('addItem',data);
      addTodoItem(data, successClbk, errorClbk);
    }, []),
    onModifyItem: useCallback((id, data) => {
      console.log('modifyItem', id, data);
      modifyTodoItem(id, data, successClbk, errorClbk);
    }, []),
    onRemoveItem: useCallback((id) => {
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
    const todoId = todos.find(item => item.dueDate).dueDate;

    return (
      <CardList key={`cardList_${dueDateString}`} title={dueDateString} todoId={todoId}>
        {
          todos.map(item =>
            <CardItem
              key={`cardItem_${item.id}`}
              type='default'
              item={item}
              todoId={todoId}
              eventHandler={eventHandler}
            />)
        }
        <CardItem 
          type='add'
          eventHandler={eventHandler}
          todoId={todoId}
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
