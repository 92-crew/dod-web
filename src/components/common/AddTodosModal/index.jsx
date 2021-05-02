import React, { useState } from 'react';

import {
  Button,
  Modal,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

function AddTodosModal() {
  const [show, setShow] = useState(false);
  const [contents, setContents] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setContents('');
    setYear('');
    setMonth('');
    setDay('');

    setShow(true);
  };

  const addTodos = () => {
    // 데이터 추가하기(ajax 통신)
    console.log(contents, year, month, day);

    // 모달 닫기
    handleClose();
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  const onChangeDay = (e) => {
    setDay(e.target.value);
  };

  return (
    <>
      <Button variant="outline-navy" onClick={handleShow}> 할 일 추가 </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>할 일 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <label>내용</label>
            <InputGroup>
              <FormControl placeholder="내용을 입력해주세요." value={contents} onChange={onChangeContents} />
            </InputGroup>
          </div>
          <div className="mb-2">
            <label>일시</label>
            <InputGroup>
              <FormControl placeholder="yyyy" value={year} type="number" onChange={onChangeYear} />
              <FormControl placeholder="mm" value={month} type="number" onChange={onChangeMonth} />
              <FormControl placeholder="dd" value={day} type="number" onChange={onChangeDay} />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="grey" onClick={handleClose}>
            닫기
          </Button>
          <Button onClick={addTodos}>
            추가하기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTodosModal;
