import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/logow.png";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="xl"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Patron's Message" id="basic-nav-dropdown">
                <NavDropdown.Item href="#director">Director's Message</NavDropdown.Item>
                <NavDropdown.Item href="#TPO">P.I. Message</NavDropdown.Item>
                <NavDropdown.Item href="#PI">TPO Message</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Objective" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Objective">Vision</NavDropdown.Item>
                <NavDropdown.Item href="#Mission">Mission</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Highlights">Highlights</Nav.Link>

              <NavDropdown title="Procedure" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Procedure">Recruiters</NavDropdown.Item>
                <NavDropdown.Item href="#Students">Students</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Seat">Seat Matrix</Nav.Link>
              <Nav.Link href="#Stats">Placement Statistics</Nav.Link>
              <Nav.Link href="#FAQs">FAQs</Nav.Link>
              <Nav.Link href="#footer">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
