import React from 'react';
import {
  Container,
  Card,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

function Main() {
  return (
    <Container>
      <h4 className="mt-2">To Do List</h4>
      <Card className="mt-3 mb-5">
        <Card.Header>2021년 4월 22일</Card.Header>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="디자인 전달" aria-label="todo items" readOnly />
        </InputGroup>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="UI 만들기" aria-label="todo items" readOnly />
        </InputGroup>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="CSS 적용하기" aria-label="todo items" readOnly />
        </InputGroup>
        <Button className="m-1">저장</Button>
      </Card>
      <Card className="mb-5">
        <Card.Header>2021년 4월 21일</Card.Header>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="환경 세팅" aria-label="todo items" readOnly />
        </InputGroup>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="vs code 설치" aria-label="todo items" readOnly />
        </InputGroup>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="92-Crew manse" aria-label="todo items" readOnly />
        </InputGroup>
        <Button className="m-1" variant="success">저장</Button>
      </Card>
      <Card className="mb-5">
        <Card.Header>2021년 4월 21일</Card.Header>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="환경 세팅" aria-label="todo items" readOnly />
        </InputGroup>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="vs code 설치" aria-label="todo items" readOnly />
        </InputGroup>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="92-Crew manse" aria-label="todo items" readOnly />
        </InputGroup>
        <Button className="m-1" variant="success">저장</Button>
      </Card>
      <Card className="mb-5">
        <Card.Header>2021년 4월 21일</Card.Header>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="환경 세팅" aria-label="todo items" readOnly />
        </InputGroup>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="vs code 설치" aria-label="todo items" readOnly />
        </InputGroup>
        <InputGroup className="p-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <FormControl value="92-Crew manse" aria-label="todo items" readOnly />
        </InputGroup>
        <Button className="m-1" variant="success">저장</Button>
      </Card>
    </Container>
  );
}

export default Main;
