import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navigation.css";

function Navigation() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" sticky="top">
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#rsvp">RSVP</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
