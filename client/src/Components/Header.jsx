import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaCloudSun, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="md" className="header-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaCloudSun className="brand-icon me-2" />
          <span className="brand-text">Weather Dashboard</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              <FaInfoCircle className="me-1" /> About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;