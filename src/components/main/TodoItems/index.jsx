import React, { useState } from 'react';

import {
  Card,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

function TodoItems({ data }) {
  const [modify, setModify] = useState(false);

  const { dueDateString, todos } = data;

  const onModify = () => {
    modify && setModify(false);
    !modify && setModify(true);
  };

  const onSave = () => {
    modify && setModify(false);
  };

  const onDelete = () => {

  };

  const onChangeContents = (e) => {
    console.log(e.target.value);

  };

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
                <FormControl value={item.title} readOnly={!modify} />
                <Button className="ml-1" variant="grey" onClick={onModify} onChange={onChangeContents}>수정</Button>
                <Button className="ml-1" onClick={onSave}>저장</Button>
                <Button className="ml-1" variant="red" onClick={onDelete}>삭제</Button>
              </InputGroup>
            );
          })
        }
      </Card>
    </>
  );
}

export default TodoItems;
