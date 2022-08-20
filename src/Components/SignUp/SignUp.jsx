import React from "react"
import { useEffect } from "react"
import { Container,Row,Col, Card,Form, Button } from "react-bootstrap"
import { Formhook } from "../../Customhook/Formhook/Formhook"
const SignUp =()=>{
    const {form,handleInputChange,handleSubmit,nevigatFun}=Formhook({
        name:"",
        email:"",
        password:""
    })
    useEffect(()=>{
        nevigatFun()
    },[nevigatFun])
    return(

        <Container  className="flex mt-3" >
            <Row className="justify-content-center align-self-center">
                <Col  lg={4}>
                    <Card>
                        <Card.Header>
                            Register
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Name" name="name" onChange={handleInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleInputChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button variant="warning" type="submit">Sign Up</Button>
                                </Form.Group>
                                
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp