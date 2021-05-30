import React from 'react';

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (`0${(1 + date.getMonth())}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);

  return `${year}-${month}-${day}`;
}

function AsideList({ data }) {
  // const { contents } = data;

  // const today = getToday();
  // console.log(today);

  return (
    <div class="sidebar">
      <div class="user_info">
        <span><em>닉네임</em> 님</span>
        <button class="logout_ico"></button>
      </div>
      <div class="todo_list">
        <div class="todo_title">
          <h3>할일 목록</h3>
        </div>
        <ul>
          <li>
            <a href="javascript:void(0);" class="on">
              <span>2021년 4월 22일</span>
              <span>2개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2021년 4월 21일</span>
              <span>3개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2021년 4월 20일</span>
              <span>25개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2021년 3월 22일</span>
              <span>1개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>2020년 4월 22일</span>
              <span>278개의 할일</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AsideList;
