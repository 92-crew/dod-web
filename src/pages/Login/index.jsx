import React from 'react';
import '@styles/css/login';
import icon from '@styles/images/92-crew.png';

import {
  Form,
  Button,
  Figure,
} from 'react-bootstrap';

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-wrap">
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={icon}
            />
          </Figure>
          <div className="login-form">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="login-btn">
                <Button className="ml-3" variant="red" type="submit">로그인</Button>
                <Button className="ml-3" variant="navy" type="submit">회원가입</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
