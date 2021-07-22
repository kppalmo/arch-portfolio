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
      <Navbar fixed="top" bg="light" expand="lg" className="nav-shad mr-auto">
        <Container>
          <Navbar.Brand href="#home">BH Real Estate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item><Nav.Link href="#home">Projects</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#home">About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#home">Contact</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styled>
  );
};
