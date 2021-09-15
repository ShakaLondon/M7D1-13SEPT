import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'


function SearchJobs(props) {

    const [searchQuery, setSearchQuery] = useState(null);

    const handleSubmit= (e) => {
        e.preventDefault();
        // ???
      }

    
  return (
      <Container className="d-flex align-items-center" style={{height: "100%"}}>
        {/* <div> */}
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Type in your ideal job here"
                aria-label="Job Search Box"
                aria-describedby="Job Search Box"
                name="searchQuery"
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-secondary" id="button-addon2" type="submit">
                Search Jobs
                </Button>
            </InputGroup>
        {/* </div> */}
      </Container>
  );
}

export default SearchJobs;