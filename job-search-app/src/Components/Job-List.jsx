import React, { useState, useEffect, setState } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button, InputGroup, FormControl, Row, Col, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { withRouter, Redirect } from 'react-router-dom';

function ResultList(props) {

    console.log(props.location.search)
    const searchQ = props.location.search;
    const params = new URLSearchParams(searchQ);
    const searchReq = params.get('search');
    console.log(searchReq)

    const [searchRequest, setSearchRequest] = useState(searchReq);
    const [searchResult, setSearchResult] = useState(searchReq);

    useEffect(() => {
        const url =
        fetch(`${url}${searchRequest}`).then(
            res => setState(res.data)
        )
    })

  return (
      <Container className="d-flex" style={{height: "100%"}}>
        <Row style={{width: "100%"}}>
            <Col md={12} lg={12}>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
               
            </Col>
        </Row>
      </Container>
  );
}

export default withRouter(ResultList);