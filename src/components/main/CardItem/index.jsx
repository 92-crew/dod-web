import React, { useCallback } from 'react';

function CardItem({ type, text, id, isChecked, eventHandler }) {

  const { onCheckBox, onChangeTxt, onAddClick, onRemoveClick } = eventHandler;

  const onChangeHandler = useCallback(type => e => {
    const action = {
      checkbox: onCheckBox,
      text: onChangeTxt,
    }
    action[type] && action[type](e);
  }, []);

  const onClickHandler = useCallback(type => e => {
    const action = {
      add: onAddClick,
      remove: onRemoveClick,
    }
    action[type] && action[type](id || 0);
  }, []);

  // 아이템 추가
  if(type === 'add') {
    return (
      <div className='card_item'>
        <div className='item_add'>
          <button className='add_ico' onClick={onClickHandler('add')}></button>
        </div>
        <div className='item_text'>
          <input type='text' value={text} onChange={onChangeHandler('text')} />
        </div>
      </div>
    );
  }

  // 기본 아이템
  return (
    <div className='card_item'>
      <div className='item_check'>
        <input type='checkbox' id={`chk_${id}`} onChange={onChangeHandler('checkbox')} defaultChecked={isChecked} />
        <label htmlFor={`chk_${id}`}></label>
      </div>
      <div className='item_text'>
        <input type='text' value={text} onChange={onChangeHandler('text')} />
      </div>
      <button className='trash_ico' onClick={onClickHandler('remove')}></button>
    </div>
  );
}

export default CardItem;