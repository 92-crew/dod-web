import React, { useCallback, useState } from 'react';

function CardItem({ type, item, eventHandler, todoId }) {
  const [text, setText] = useState(item && item.title || '');
  const [checked, setChecked] = useState(item && item.status === 'RESOLVED' || false);
  const { onAddItem, onModifyItem, onRemoveItem } = eventHandler;

  const itemId = item && item.id || 0;

  const getItemData = useCallback((title, isChecked) => {
    return {
      title,
      status: isChecked ? 'RESOLVED' : 'UNRESOLVED',
      dueDate: todoId,
    };
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onChangeCheck = (e) => {
    setChecked(e.target.checked);
    onModifyItem(itemId, getItemData(text, e.target.checked));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!text || !text.length) { return; }

    const data = getItemData(text, checked);
    // 추가하기
    if(type === 'add') {
      onAddItem(data);
      return;
    }
    // 수정하기
    onModifyItem(itemId, data);
  };
  
  if(type === 'add') {
    // todo 아이템 추가 component
    return (
      <div className='card_item'>
        <form onSubmit={onSubmitHandler}>
          <div className='item_add'>
            <button className='add_ico' type='submit'></button>
          </div>
          <div className='item_text'>
            <input type='text' value={text} onChange={onChangeText} />
          </div>
        </form>
      </div>
    );
  }

  // todo 아이템 component
  return (
    <div className='card_item' >
      <form onSubmit={onSubmitHandler}>
        <div className='item_check'>
          <input type='checkbox' id={`chk_${itemId}`} onChange={onChangeCheck} checked={checked} />
          <label htmlFor={`chk_${itemId}`}></label>
        </div>
        <div className='item_text'>
          <input type='text' value={text} onChange={onChangeText} disabled={checked} />
        </div>
      </form>
      <button className='trash_ico' onClick={() => onRemoveItem(itemId)}></button>
    </div>
  );
}

export default CardItem;