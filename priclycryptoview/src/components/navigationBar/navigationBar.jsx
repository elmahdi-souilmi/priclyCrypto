import React from 'react'
import './navigationBar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function navigationBar() {
    return (
      
<Navbar  expand="lg">
  <img src={logo}  alt="logo" /> 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
    <Nav>
      <Nav.Link className="left"  href="#Alerts"> Alerts  </Nav.Link>
      <Nav.Link className="left"  href="#Pricing"> Pricing  </Nav.Link>
      <Nav.Link className="left"  href="#Privacy"> Privacy  </Nav.Link>
      <Nav.Link className="left"  href="#Contact"> Contact  </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      
    )
}
