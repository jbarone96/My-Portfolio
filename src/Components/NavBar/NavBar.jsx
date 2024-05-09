import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineMail, HiOutlineCollection } from "react-icons/hi";
import "../NavBar/NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar variant="dark" className="nav">
        <Container>
          <Navbar.Brand className="title" style={{ fontSize: "16px" }}>
            <Nav>
              <Link className="nav-link" to="/">
                Jordan's Portfolio
              </Link>
            </Nav>
          </Navbar.Brand>
          <Nav className="nav-bar-group">
            <Link className="nav-link" to="/">
              <BiHomeAlt className="icon" />
              Home
            </Link>
            <Link className="nav-link" to="/Projects">
              <HiOutlineCollection className="icon" />
              Projects
            </Link>
            <Link className="nav-link" to="/Resume">
              <IoDocumentTextOutline className="icon" />
              Resume
            </Link>
            <Link className="nav-link" to="/About">
              <AiOutlineUser className="icon" />
              About
            </Link>
            <Link className="nav-link" to="/Contact">
              <HiOutlineMail className="icon" />
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
