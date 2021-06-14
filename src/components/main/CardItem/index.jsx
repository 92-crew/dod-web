import React, { useCallback, useState } from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Checkbox from '@components/common/Checkbox';

function CardItem({ type, item, dueDate, eventHandler }) {
  const [text, setText] = useState(item && item.title || '');
  const [checked, setChecked] = useState(item && item.status === 'RESOLVED' || false);
  const { add, modify, remove } = eventHandler;

  const isAddType = type === 'add';
  const itemId = item && item.id || 0;

  const getItemData = (title, isChecked) => {
    return {
      title,
      status: isChecked ? 'RESOLVED' : 'UNRESOLVED',
      dueDate,
    };
  };

  const onChangeText = useCallback((val) => {
    setText(val);
  }, []);

  const onChangeChecked = (isChecked) => {
    setChecked(isChecked);
    modify(itemId, getItemData(text, isChecked));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!text || !text.length) { return; }

    const data = getItemData(text, checked);
    // 추가하기
    if(isAddType) {
      add(data);
      return;
    }
    // 수정하기
    modify(itemId, data);
  };

  return (
    <div className='card_item' >
      <form onSubmit={onSubmitHandler}>
        {
          isAddType && (
            <div className='item_add'>
            <Button className='add_ico' type='submit'></Button>
          </div>
          ) || (
            <div className='item_check'>
            <Checkbox id={`chk_${itemId}`} onChange={onChangeChecked} checked={checked} />
          </div>            
          )
        }
        <div className='item_text'>
          <Input type='text' value={text} onChange={onChangeText} disabled={checked} />
        </div>
      </form>
      {isAddType || (
        <Button className='trash_ico' onClick={() => remove(itemId)}></Button>
      )}
    </div>
  );
}

export default CardItem;