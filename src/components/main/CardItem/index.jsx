import React from 'react';

function CardItem() {
  return (
    <>
      <div className='card_item'>
        <div className='item_check'>
          <input type='checkbox' id='chk_1' />
          <label for='chk_1'></label>
        </div>
        <div className='item_text'>
          <input type='text' name='' id='' value='html 만들기' />
        </div>
        <button className='trash_ico'></button>
      </div>
      <div className='card_item'>
        <div className='item_check'>
          <input type='checkbox' id='chk_2' checked />
          <label for='chk_2'></label>
        </div>
        <div className='item_text'>
          <input className='complete' type='text' name='' id='' value='html 만들기' />
        </div>
        <button className='trash_ico'></button>
      </div>
      <div className='card_item'>
        <div className='item_add'>
          <button className='add_ico'></button>
        </div>
        <div className='item_text'>
          <input type='text' name='' id='' />
        </div>
      </div>
    </>
  );
}

export default CardItem;