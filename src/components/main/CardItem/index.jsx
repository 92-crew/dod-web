import React, { useCallback, useState } from 'react';

function CardItem({ type, item, isChecked, eventHandler }) {
  const [text, setText] = useState('');

  const { title, id } = item;
   
  const { onCheckBox, onChangeTxt, onAddClick, onRemoveClick } = eventHandler;

  const onChangeHandler = useCallback(type => e => {
    const action = {
      text: () => {
        console.log(e.target.value);
        setText(e.target.value);
        return onChangeTxt;
      },
      checkbox: onCheckBox,
    }
    action[type] && action[type](e);
  }, []);

  const onClickHandler = useCallback(type => e => {
    const action = {
      add: onAddClick,
      remove: onRemoveClick,
    }
    action[type] && action[type](e, id || 0);
    console.log(text);
  }, []);

  // const onSubmitHandler = useCallback((e) => {
  //   e.preventDefault();
  //   console.log(e.target.value, text);

  //   onAddClick(e);
  // }, []);

  // 아이템 추가
  if(type === 'add') {
    return (
      <div className='card_item'>
        <div className='item_add'>
          <button className='add_ico' type='submit' onClick={onClickHandler('add')}></button>
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
        <input type='text' defaultValue={title} onChange={onChangeHandler('text')} />
      </div>
      <button className='trash_ico' onClick={onClickHandler('remove')}></button>
    </div>
  );
}

export default CardItem;