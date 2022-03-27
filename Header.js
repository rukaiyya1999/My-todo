import React from 'react'
import {Navbar, Container, Nav, } from 'react-bootstrap'
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">My Todo List</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
