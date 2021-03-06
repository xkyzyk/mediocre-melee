import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import fox from "./fox-r.png";
import shines from "./shines.png";

const TopNav = () => {
  return (
    <Navbar style={{ background: "#18181B" }} variant="dark" expand="md">
      <Navbar.Brand>
        <img
          alt=""
          src={fox}
          width="60"
          height="40"
          className="d-inline-block align-top"
        />{" "}
        mediocre melee
      </Navbar.Brand>
      <img
        alt=""
        src={shines}
        width="200"
        height="40"
        className="d-inline-block align-top"
      />{" "}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          <LinkContainer exact to="/">
            <Nav.Link>home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>about</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
