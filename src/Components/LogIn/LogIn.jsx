import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Formhook } from "../../Customhook/Formhook/Formhook";
const Login = () => {
    const {handleInputChange,handleSubmitLogin}=Formhook({
        email:"",
        password:""
    })
  return (
    <Container className="flex mt-5">
      <Row className="justify-content-center">
        <Col lg={4} sm={6}>
          <Card>
            <Card.Header>LogIn</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" >
                  <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Control type="password" placeholder="Password" name="password" onChange={handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
