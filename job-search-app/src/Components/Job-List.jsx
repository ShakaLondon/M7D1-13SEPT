import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'

function JobList(props) {
  return (
      <Container className="d-flex" style={{height: "100%"}}>
        {/* <div> */}
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Type in your ideal job here"
                aria-label="Job Search Box"
                aria-describedby="Job Search Box"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Search Jobs
                </Button>
            </InputGroup>
        {/* </div> */}
      </Container>
  );
}

export default JobList;