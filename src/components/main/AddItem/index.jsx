import React, { useState } from 'react';

import Form from '@components/common/Form';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

function AddItem({ dueDate, onSubmit }) {
  const [text, setText] = useState('');

  const onChangeText = (target) => {
    setText(target.value);
  };

  const onSubmitHandler = () => {
    if (!text || !text.length) { return; }

    const data = getItemData(text, dueDate);

    onSubmit && onSubmit(data);
    setText('');
  };

  return (
    <div className='card_item' >
      <Form onSubmit={onSubmitHandler}>
        <div className='item_add'>
          <Button className='add_ico' type='submit'></Button>
        </div>
        <div className='item_text'>
          <Input type='text' name='text' value={text} onChange={onChangeText} />
        </div>
      </Form>
    </div>
  );
}

function getItemData(title, dueDate) {
  return {
    title,
    dueDate,
    status: 'UNRESOLVED',
  };
}

export default AddItem;