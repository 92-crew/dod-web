import React, { useState } from 'react';
import Modal from 'react-modal';

import Button from '@components/common/Button';
import Title from '@components/common/Title';
import Contents from '@components/common/Contents';
import Input from '@components/common/Input';

import { getToday } from '@utils/date';
import AddItem from '@components/main/AddItem';

Modal.setAppElement("#root");

function AddTodoModal({ isOpen, toggleModal, actions }) {
  const [date, setDate] = useState(getToday());

  const onChangeDate = (target) => {
    setDate(target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="add todo item"
      className="modal card"
      overlayClassName="modal_dimmed"
      closeTimeoutMS={250}
    >
      <Contents>
        <Title className='modal_title' title='할일 추가'>
          <Button className='add_ico rotate_45' onClick={toggleModal} />
        </Title>
        <AddItem
          dueDate={date}
          actions={actions}
        />
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