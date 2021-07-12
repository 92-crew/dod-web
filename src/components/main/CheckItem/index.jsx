import React, { useState } from 'react';

import Form from '@components/common/Form';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Checkbox from '@components/common/Checkbox';

function CheckItem({ className, item, onSubmit, onClick }) {
  const [text, setText] = useState(item && item.title || '');
  const [checked, setChecked] = useState(item && item.status === 'RESOLVED' || false);
  const { id, dueDate } = item;

  const onChangeHandler = (target) => {
    setText(target.value);
  };

  const onCheckHandler = (target) => {
    const { checked: isChecked } = target;
    const data = getItemData(text, id, dueDate, isChecked);

    setChecked(isChecked);
    onSubmit && onSubmit(data);
  };

  const onSubmitHandler = () => {
    if (!text || !text.length) { return; }

    const data = getItemData(text, id, dueDate, checked);
    
    onSubmit && onSubmit(data);
  };

  const onClickHandler = () => {
    const data = getItemData(text, id, dueDate, checked);
    
    onClick && onClick(data);
  }

  return (
    <div className='card_item' >
        <Form onSubmit={onSubmitHandler}>
          <div className='item_check'>
            <Checkbox id={`${className}_chk_${id}`} onChange={onCheckHandler} checked={checked} />
          </div>
          <div className='item_text'>
            <Input type='text' name='text' value={text} onChange={onChangeHandler} disabled={checked} />
          </div>
        </Form>
        <Button className='trash_ico' onClick={onClickHandler}></Button>
    </div>
  );
}

function getItemData(title, id, dueDate, isChecked) {
  return {
    title,
    id,
    dueDate,
    status: isChecked ? 'RESOLVED' : 'UNRESOLVED',
  };
}

export default CheckItem;