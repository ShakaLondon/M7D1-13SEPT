import React, { useState, useEffect, setState } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button, InputGroup, FormControl, Row, Col, ListGroup, Card } from 'react-bootstrap'
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
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const url = `https://strive-jobs-api.herokuapp.com/jobs?search=`
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzE3NzI3MTIsImV4cCI6MTYzMjk4MjMxMn0.2YWhQrKLUrKnO_spK_yPMr-orqdslBjHVr-zMEUyYPk'
            }
        }
        fetch(`${url}${searchRequest}`, options)
        .then(res => res.json())
        .then((jobs) => {
            console.log(jobs.data)
            setSearchResult(jobs.data)
            console.log(searchResult)
        })
        .catch((error) => {console.log(error)})
    }, [])



  return (
      <Container className="d-flex" style={{height: "100%"}}>
        <Row style={{width: "100%"}}>
            <Col md={12} lg={12}>
                <ListGroup>
                    
                    { searchResult ? (
                        searchResult.map((job) => 
                            <ListGroup.Item className="border-0">
                                <Card style={{ width: '100%' }}>
                                    <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>)) :
                            (<h2>There are no results for your search! Try again!</h2>)
                    }
                    
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