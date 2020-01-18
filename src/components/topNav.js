import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import fox from "./fox-r.png";

const TopNav = () => {
  return (
    <Navbar
      style={{ background: "#18181B" }}
      sticky="top"
      variant="dark"
      expand="md"
    >
      <Navbar.Brand href="#home">
        <img
          src={fox}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="fox"
        />
        mediocre melee
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">home</Nav.Link>
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#contact">contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
