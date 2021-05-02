import React from 'react';

import {
  Card,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

function TodoItems({ data }) {
  const { dueDateString, todos } = data;

  return (
    <>
      <Card className="mb-5">
        <Card.Header>{dueDateString}</Card.Header>
        {
          todos.map((item, idx) => {
            return (
              <InputGroup className="p-1" key={`${item.id}_${idx}`}>
                <InputGroup.Prepend>
                  <InputGroup.Checkbox />
                </InputGroup.Prepend>
                <FormControl value={item.title} readOnly />
              </InputGroup>
            );
          })
        }
        <Button className="m-1">저장</Button>
      </Card>
    </>
  );
}

export default TodoItems;
