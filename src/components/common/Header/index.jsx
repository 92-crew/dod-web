import React from 'react';
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

import AddTodosModal from '../AddTodosModal';
// mock data
import loginData from '@mock/data/loginData';

function getLoginData() {
  return loginData;
}

function Header() {
  const users = getLoginData();
  
  return (
    <header>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="/">Do or Die</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <AddTodosModal />
            </Nav.Item>
          </Nav>
          <NavDropdown title={`${users.name} 님`} id="collasible-nav-dropdown">
            <NavDropdown.Item href="/login">로그인</NavDropdown.Item>
            <NavDropdown.Item href="/join" active>회원가입</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="logout">로그아웃</NavDropdown.Item>
          </NavDropdown>
          <Button variant="navy">Setting</Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
