import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
//import LogInImg from "../images/login.svg";

const LoginPage = () => {
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-secondary mt-5 p-3 text-center rounded">
          Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <div className="d-grid gap-3 text-secondary">
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="text-primary"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <small>Do not have an account? <a href='/signup'>Signup Here</a></small>
                <a variant="primary" href='/home' size="lg" type="submit">
                  Login
                </a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
