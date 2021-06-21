import React from 'react';

import Button from '@components/common/Button';
import Title from '@components/common/Title';
import Contents from '@components/common/Contents';
import Input from '@components/common/Input';

import AddItem from '@components/main/AddItem';


function AddTodo({ date, toggleModal, onAddItem, onChangeDate }) {
  const onChange = (target) => {
    onChangeDate(target.value);
  };

  return (
    <>
      <Title className='modal_title' title='할일 추가'>
        <Button className='add_ico rotate_45' onClick={toggleModal} />
      </Title>
      <div className='card_list'>
        <AddItem
          dueDate={date}
          onSubmit={onAddItem}
        />
      </div>
      <Contents className='modal_calendar'>
        <Title className='modal_title' title='완료 예정일' />
        {/* @todo 임시 input > calendar 개발 */}
        <Input value={date} onChange={onChange} />
      </Contents>
    </>
  );
}

export default AddTodo;