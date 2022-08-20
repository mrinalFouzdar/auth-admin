import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "./nav.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
const Navbarcomponent = () => {
  const auth = localStorage.getItem("user");
  const [authstate, setAuthState] = useState(false);
  const nevigate = useNavigate();
  useEffect(() => {
    setAuthState(auth);
  }, [auth]);

  const logOut = () => {
    console.log("logOut");
    localStorage.clear();
    setAuthState(false)
    nevigate("/signUp");
  };

  return (
    <Navbar expand="lg" className={styled.navContainer}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Desboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {authstate ? (
              <>
                <Nav.Link as={Link} to="/">
                  User
                </Nav.Link>
                <Nav.Link as={Link} to="/signUp" onClick={logOut}>
                  Logout({JSON.parse(auth).name})
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signUp">
                  SignUp
                </Nav.Link>
                <Nav.Link as={Link} to="/logIn">
                  LogIn
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomponent;
