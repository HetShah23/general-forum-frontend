import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SignupPage = () => {
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-secondary mt-5 p-3 text-center rounded">
          Register
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
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="text-primary"
                    type="name"
                    placeholder="Enter Name"
                  />
                </Form.Group>
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
                <small>Already have an account? <a href='/login'>Login Here</a></small>
                <Button variant="primary" size="lg" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
