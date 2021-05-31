import React from 'react';

function CardItem() {
  return (
    <>
      <div class="card_item">
        <div class="item_check">
          <input type="checkbox" id="chk_1" />
          <label for="chk_1"></label>
        </div>
        <div class="item_text">
          <input type="text" name="" id="" value="html 만들기" />
        </div>
        <button class="trash_ico"></button>
      </div>
      <div class="card_item">
        <div class="item_check">
          <input type="checkbox" id="chk_2" checked />
          <label for="chk_2"></label>
        </div>
        <div class="item_text">
          <input class="complete" type="text" name="" id="" value="html 만들기" />
        </div>
        <button class="trash_ico"></button>
      </div>
      <div class="card_item">
        <div class="item_add">
          <button class="add_ico"></button>
        </div>
        <div class="item_text">
          <input type="text" name="" id="" />
        </div>
      </div>
    </>
  );
}

export default CardItem;