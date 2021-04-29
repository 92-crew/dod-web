import React from 'react';
import { ListGroup, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function Aside() {
  return (
    <aside>
      <div className="aside-fixed">
        <div className="aside-radio">
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}>전체 할 일</ToggleButton>
            <ToggleButton value={2}>오늘 할 일</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className="aside-list">
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            <p>2021년 4월 22일</p>
            <span>2개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            <p>2021년 4월 21일</p>
            <span>3개의 할 일</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </aside>
  );
}

export default Aside;
