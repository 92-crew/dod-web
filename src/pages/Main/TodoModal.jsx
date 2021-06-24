import React, { useState } from 'react';
import Modal from 'react-modal';

import Contents from '@components/common/Contents';
import AddTodo from '@components/popup/AddTodo';
import EditTodo from '@components/popup/EditTodo';

import { formatDate, getToday } from '@utils/date';

Modal.setAppElement("#root");

function TodoModal({ isOpen, toggleModal, actions, todoItem }) {
  const today = getToday();
  const [dueDate, setDueDate] = useState(formatDate(today));
  const [selectedDay, setSelectedDay] = useState(today);
  const { add, modify, remove } = actions;

  const onAddItem = (data) => {
    add(data);
  };

  const onRemoveItem = (data) => {
    remove(data);
  };

  const onModifyItem = (data) => {
    modify(data);
  };

  const onChangeDate = (date) => {
    setDueDate(formatDate(date));
    setSelectedDay(date);
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
          <EditTodo
            todoItem={todoItem}
            toggleModal={toggleModal}
            onAddItem={onAddItem}
            onModifyItem={onModifyItem}
            onRemoveItem={onRemoveItem}
          />
        ) || (
            <AddTodo
              dueDate={dueDate}
              toggleModal={toggleModal}
              onAddItem={onAddItem}
              onChangeDate={onChangeDate}
              selectedDay={selectedDay}
            />
          )}
      </Contents>
    </Modal>
  );
}

export default TodoModal;