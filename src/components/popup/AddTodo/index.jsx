import React from 'react';
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

import Button from '@components/common/Button';
import Title from '@components/common/Title';
import Contents from '@components/common/Contents';
import AddItem from '@components/main/AddItem';

function AddTodo({ dueDate, toggleModal, onAddItem, selectedDay, onChangeDate }) {
  return (
    <>
      <Title className='modal_title' title='할일 추가'>
        <Button className='add_ico rotate_45' onClick={toggleModal} />
      </Title>
      <div className='card_list'>
        <AddItem
          dueDate={dueDate}
          onSubmit={onAddItem}
        />
      </div>
      <Contents className='modal_calendar'>
        <Title className='modal_title' title='완료 예정일' />
        <Calendar
          value={selectedDay}
          onChange={onChangeDate}
          colorPrimary='#f1404b'
          shouldHighlightWeekends
        />
      </Contents>
    </>
  );
}

export default AddTodo;