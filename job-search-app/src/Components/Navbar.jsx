import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { withRouter, Redirect, Link, useLocation } from 'react-router-dom';

function NavJobs(props) {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container fluid className="mx-0 d-flex justify-content-between">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-0 d-inline-flex">
            <Link to="/Search" className="text-dark font-weight-bold px-3">Search</Link>
            <Link to="/Company" className="text-dark font-weight-bold px-3">Jobs</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="text-dark font-weight-bold">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="ml-auto mr-0 d-inline-flex align-items-center">
            <Link className="text-dark font-weight-bold px-3" to="/Favourites">Favourites</Link>
            {/* <Nav.Link href="#link" className="text-dark font-weight-bold">Images</Nav.Link> */}
            <Nav.Link href="#link" className="text-dark font-weight-bold px-3"><FontAwesomeIcon icon={faGripHorizontal}/></Nav.Link>
            <Nav.Link href="#link" className="text-dark font-weight-bold px-3"><Button className="btn btn-primary btn-circle btn-md">S</Button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavJobs;