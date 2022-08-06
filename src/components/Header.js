import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.png"


const Header = () => {
  return (
    <Navbar expand="lg"  className="navbar_bg">
      <Container>
        <img src={logo} />
      </Container>
    </Navbar>
  )
}

export default Header