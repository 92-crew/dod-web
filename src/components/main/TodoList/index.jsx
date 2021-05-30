import React from 'react';

function TodoList({ data }) {
  // const { contents } = data;

  return (
    <div class="todo_contents">
      <div class="card_wrap">
        <div class="card_list">
          <div class="card_title">
            <p>2021년 4월 21일 (월)</p>
          </div>
          <div class="card_item">
            <div class="item_check">
              <input type="checkbox" />
            </div>
            <div class="item_text">
              <input type="text" name="" id="" value="html 만들기" />
            </div>
            <button class="trash_ico"></button>
          </div>
          <div class="card_item">
            <div class="item_check">
              <input type="checkbox" checked />
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
        </div>
        <div class="card_list">
          <div class="card_title">
            <p>2021년 4월 20일 (화)</p>
          </div>
          <div class="card_item">
            <div class="item_check">
              <input type="checkbox" />
            </div>
            <div class="item_text">
              <input type="text" name="" id="" value="html 만들기" />
            </div>
            <button class="trash_ico"></button>
          </div>
          <div class="card_item">
            <div class="item_check">
              <input type="checkbox" />
            </div>
            <div class="item_text">
              <input type="text" name="" id="" value="html 만들기" />
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
        </div>
        <div class="card_list">
          <div class="card_title">
            <p>2021년 4월 20일 (화)</p>
          </div>
          <div class="card_item">
            <div class="item_check">
              <input type="checkbox" />
            </div>
            <div class="item_text">
              <input type="text" name="" id="" value="html 만들기" />
            </div>
            <button class="trash_ico"></button>
          </div>
          <div class="card_item">
            <div class="item_check">
              <input type="checkbox" />
            </div>
            <div class="item_text">
              <input type="text" name="" id="" value="html 만들기" />
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
        </div>
        <div class="card_list">
          <div class="card_title">
            <p>2021년 4월 20일 (화)</p>
          </div>
          <div class="card_item">
            <div class="item_check">
              <input type="checkbox" />
            </div>
            <div class="item_text">
              <input type="text" name="" id="" value="html 만들기" />
            </div>
            <button class="trash_ico"></button>
          </div>
          <div class="card_item">
            <div class="item_check">
              <input type="checkbox" />
            </div>
            <div class="item_text">
              <input type="text" name="" id="" value="html 만들기" />
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
        </div>
      </div>
    </div>
  );
}

export default TodoList;
