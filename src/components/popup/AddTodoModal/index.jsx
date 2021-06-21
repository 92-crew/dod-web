import React, { useState } from 'react';
import Modal from 'react-modal';

import Button from '@components/common/Button';
import Title from '@components/common/Title';
import Contents from '@components/common/Contents';
import Input from '@components/common/Input';

import { getToday } from '@utils/date';
import AddItem from '@components/main/AddItem';
import CheckItem from '@components/main/CheckItem';

Modal.setAppElement("#root");

function AddTodoModal({ isOpen, toggleModal, actions, todos }) {
  const [date, setDate] = useState(getToday());
  const { add, modify, remove } = actions;

  const onChangeDate = (target) => {
    setDate(target.value);
  };

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
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className="modal card"
      overlayClassName="modal_dimmed"
      closeTimeoutMS={250}
    >
      <Contents>
        <Title className='modal_title' title='할일 추가'>
          <Button className='add_ico rotate_45' onClick={toggleModal} />
        </Title>
        <div className='card_list'>
          {
            (todos.length > 0) && todos.map(item =>
              <CheckItem
                key={`cardItem_${item.id}`}
                item={item}
                onClick={onRemoveItem}
                onSubmit={onModifyItem}
              />
            ) || (
              <AddItem
                dueDate={date}
                onSubmit={onAddItem}
              />
            )
          }
        </div>
      </Contents>
      <Contents className='modal_calendar'>
        <Title className='modal_title' title='완료 예정일' />
        {/* @todo 임시 input > calendar 개발 */}
        <Input value={date} onChange={onChangeDate} />
      </Contents>
    </Modal>
  );
}

export default AddTodoModal;