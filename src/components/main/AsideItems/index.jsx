import React from 'react';

import { ListGroup } from 'react-bootstrap';

function AsideItems({ data }) {
  const { dueDateString, todos } = data;

  return (
    <ListGroup.Item as="li">
      <p>{dueDateString}</p>
      <span>{todos.length}개의 할 일</span>
    </ListGroup.Item>
  );
}

export default AsideItems;
