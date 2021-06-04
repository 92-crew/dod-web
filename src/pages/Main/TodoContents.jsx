import React, { useCallback, useState } from 'react';
import CardList from '@components/main/CardList';
import CardItem from '@components/main/CardItem';

function TodoContents({ contents }) {
  const [text, setText] = useState('');
  console.log(contents);

  const eventHandler = {
    onCheckBox: useCallback((e) => {
      const checked = e.target.checked;

      console.log(checked);
    }, []),
    onChangeTxt: useCallback((e) => {
      console.log(e.target.value);
      const value = e.target.value;
      setText(value);
    }, []),
    onAddClick: useCallback((id) => {
      console.log(id);
    }, []),
    onRemoveClick: useCallback((id) => {
      console.log(id);
    }, []),
  }

  const cardWrap = (item) => {
    const { dueDateString, todos } = item;

    return (
      <CardList key={`cardList_${dueDateString}`} title={dueDateString}>
        {
          todos.map(item =>
            <CardItem
              key={`cardItem_${item.id}`}
              type='basic'
              text={item.title || text}
              id={item.id}
              isChecked={item.status === 'RESOLVED'}
              eventHandler={eventHandler}
            />)
        }
        <CardItem
          type='add'
          eventHandler={eventHandler}
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
