import React from 'react';

function CardList({ children }) {
  return (
    <>
      <div className='card_list'>
        <div className='card_title'>
          <p>2021년 4월 21일 (월)</p>
        </div>
        {children}
      </div>

      <div className='card_list'>
        <div className='card_title'>
          <p>2021년 4월 20일 (화)</p>
        </div>
        <div className='card_item'>
          <div className='item_check'>
            <input type='checkbox' id='chk_3' />
            <label for='chk_3'></label>
          </div>
          <div className='item_text'>
            <input type='text' name='' id='' value='html 만들기' />
          </div>
          <button className='trash_ico'></button>
        </div>
        <div className='card_item'>
          <div className='item_check'>
            <input type='checkbox' id='chk_4' />
            <label for='chk_4'></label>
          </div>
          <div className='item_text'>
            <input type='text' name='' id='' value='html 만들기' />
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
      </div>

      <div className='card_list'>
        <div className='card_title'>
          <p>2021년 4월 20일 (화)</p>
        </div>
        <div className='card_item'>
          <div className='item_check'>
            <input type='checkbox' id='chk_5' />
            <label for='chk_5'></label>
          </div>
          <div className='item_text'>
            <input type='text' name='' id='' value='html 만들기' />
          </div>
          <button className='trash_ico'></button>
        </div>
        <div className='card_item'>
          <div className='item_check'>
            <input type='checkbox' id='chk_6' />
            <label for='chk_6'></label>
          </div>
          <div className='item_text'>
            <input type='text' name='' id='' value='html 만들기' />
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
      </div>

      <div className='card_list'>
        <div className='card_title'>
          <p>2021년 4월 20일 (화)</p>
        </div>
        <div className='card_item'>
          <div className='item_check'>
            <input type='checkbox' id='chk_7' />
            <label for='chk_7'></label>
          </div>
          <div className='item_text'>
            <input type='text' name='' id='' value='html 만들기' />
          </div>
          <button className='trash_ico'></button>
        </div>
        <div className='card_item'>
          <div className='item_check'>
            <input type='checkbox' id='chk_8' />
            <label for='chk_8'></label>
          </div>
          <div className='item_text'>
            <input type='text' name='' id='' value='html 만들기' />
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
      </div>
    </>
  );
}

export default CardList;