import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styled = styled.div`
  .nav-shad {
    box-shadow: 0px 0px 10px #000;
  }
`;
export const Navigation = () => {
  return (
    <Styled>
      <Navbar fixed="top" bg="light" expand="lg" className="nav-shad">
        <Container>
          <Navbar.Brand href="#home">BH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Projects</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styled>
  );
};
