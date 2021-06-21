import React, { useState } from 'react';

import Form from '@components/common/Form';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

function AddItem({ item, dueDate, actions }) {
  const [text, setText] = useState(item && item.title || '');
  const itemId = item && item.id;

  const getItemData = (title, isChecked) => {
    return {
      title,
      status: isChecked ? 'RESOLVED' : 'UNRESOLVED',
      dueDate,
      id: itemId,
    };
  };

  const onChangeText = (target) => {
    setText(target.value);
  };

  const onSubmitHandler = (target) => {
    console.log(target, target.name);
    if (!text || !text.length) { return; }

    const data = getItemData(text, false);
    const actionFn = actions[target.name];

    typeof actionFn === 'function' && actionFn(data, itemId);
    setText('');
  };

  return (
    <div className='card_item' >
      <Form name='add' onSubmit={onSubmitHandler}>
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

export default AddItem;