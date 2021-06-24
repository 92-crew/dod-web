import React from 'react';

import Button from '@components/common/Button';
import Title from '@components/common/Title';
import ItemList from '@components/main/ItemList';

function EditTodo({ todoItem, toggleModal, onAddItem, onRemoveItem, onModifyItem }) {
  const { dueDateString, todos } = todoItem;

  return (
    <>
      <Title className='modal_title' title={dueDateString}>
        <Button className='add_ico rotate_45' onClick={toggleModal} />
      </Title>
      <ItemList className='modal_list' todos={todos} onAddItem={onAddItem} onRemoveItem={onRemoveItem} onModifyItem={onModifyItem} />
    </>
  );
}

export default EditTodo;