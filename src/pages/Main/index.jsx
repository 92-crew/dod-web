import React from 'react';
import '../../css/main.css';
import {
  Card,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

import Aside from '@components/main/Aside';

function Main() {
  return (
    <>
      <Aside />
      <div className="main-container">
        <div className="title-wrap">
          <div className="title">
            <h4>To Do List</h4>
          </div>
        </div>
        <div className="card-wrap">
          <Card className="mb-5">
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
        </div>
      </div>
    </>
  );
}

export default Main;
