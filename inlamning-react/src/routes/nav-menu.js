import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from "react-router-bootstrap"

export function NavMenu() {
  return (
    <div className="container">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <LinkContainer to="/">
        <Navbar.Brand>Krolles music collection</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer to="/">
                 <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/groups">
                 <Nav.Link>Music groups</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
