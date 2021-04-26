import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Aside() {
  return (
    <aside>
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
      </ListGroup>
    </aside>
  );
}

export default Aside;
