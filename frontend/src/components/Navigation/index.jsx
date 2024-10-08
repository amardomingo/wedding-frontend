import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">A & S</Navbar.Brand>
        <Container>
          <Nav>
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="/rsvp">Confirmar Asistencia</Nav.Link>
            <Nav.Link href="/location">Localización</Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
