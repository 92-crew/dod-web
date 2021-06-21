import React, { useState } from 'react';
import Modal from 'react-modal';

import Contents from '@components/common/Contents';
import AddTodo from '@components/popup/AddTodo';
import EditTodo from '@components/popup/EditTodo';

import { getToday } from '@utils/date';

Modal.setAppElement("#root");

function TodoModal({ isOpen, toggleModal, actions, todoItem }) {
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
        {todoItem && (
          <EditTodo todoItem={todoItem} toggleModal={toggleModal} onAddItem={onAddItem} onModifyItem={onModifyItem} onRemoveItem={onRemoveItem} />
        ) || (
            <AddTodo date={date} toggleModal={toggleModal} onAddItem={onAddItem} onChangeDate={onChangeDate} />
          )}
      </Contents>
    </Modal>
  );
}

export default TodoModal;