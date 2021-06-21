import React, { useState } from 'react';

import Form from '@components/common/Form';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Checkbox from '@components/common/Checkbox';

function CheckItem({ item, dueDate, actions }) {
  const [text, setText] = useState(item && item.title || '');
  const [checked, setChecked] = useState(item && item.status === 'RESOLVED' || false);
  const { modify, remove } = actions;
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
    console.log(target.value);
    setText(target.value);
  };

  const onChangeChecked = (target) => {
    const { checked: isChecked } = target;

    setChecked(isChecked);
    modify(getItemData(text, isChecked), itemId);
  };

  const onSubmitHandler = (target) => {
    console.log(target, target.name);
    if (!text || !text.length) { return; }

    const data = getItemData(text, checked);
    const actionFn = actions[target.name];

    typeof actionFn === 'function' && actionFn(data, itemId);
  };

  return (
    <div className='card_item' >
        <Form name='modify' onSubmit={onSubmitHandler}>
          <div className='item_check'>
            <Checkbox id={`chk_${itemId}`} onChange={onChangeChecked} checked={checked} />
          </div>
          <div className='item_text'>
            <Input type='text' name='text' value={text} onChange={onChangeText} disabled={checked} />
          </div>
        </Form>
        <Button className='trash_ico' onClick={() => remove(itemId)}></Button>
    </div>
  );
}

export default CheckItem;