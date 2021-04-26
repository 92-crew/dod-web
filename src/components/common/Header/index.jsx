import React from 'react';
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Navbar.Brand href="/">Do or Die</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Button variant="outline-primary">할 일 추가</Button>
            </Nav.Item>
          </Nav>
          <NavDropdown title="남광우 님" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/join" active>회원가입</NavDropdown.Item>
            <NavDropdown.Item href="/modify">회원정보 수정</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="logout">로그아웃</NavDropdown.Item>
          </NavDropdown>
          <Button>Setting</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
