import React from 'react';

import Contents from '@components/common/Contents';
import CheckItem from '@components/main/CheckItem';
import AddItem from '@components/main/AddItem';

function ItemList({ className, todos, onAddItem, onRemoveItem, onModifyItem }) {
  const { dueDate } = todos.find(item => item.dueDate);

  return (
    <Contents className={className}>
      {
        todos.map(item =>
          <CheckItem
            key={`${className}_checkItem_${item.id}`}
            item={item}
            onClick={onRemoveItem}
            onSubmit={onModifyItem}
          />)
      }
      <AddItem
        dueDate={dueDate}
        onSubmit={onAddItem}
      />
    </Contents>
  );
}

export default ItemList;