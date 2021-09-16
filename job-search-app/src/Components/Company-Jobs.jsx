import React, { useState, useEffect, setState } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button, InputGroup, FormControl, Row, Col, ListGroup, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { withRouter, Redirect, Link } from 'react-router-dom';

function CompanyJobs(props) {

    console.log(props.location.search)
    const searchQ = props.location.search;
    const params = new URLSearchParams(searchQ);
    const searchReq = params.get('jobs');
    console.log(searchReq)

    const [searchRequest, setSearchRequest] = useState(searchReq);
    const [searchResult, setSearchResult] = useState([]);
    const [searchCompanyJobs, setSearchCompanyJobs] = useState(null);

    useEffect(() => {
        const url = `https://strive-jobs-api.herokuapp.com/jobs?company=`
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

    // const showCompanyJobs = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     // return <Redirect to={`/Results?search=${searchQuery}`}/>
    //     props.history.push(`/Results?company=${e.target.value}`)
    //   }


  return (
      <Container fluid className="d-flex" style={{ height: "100%", width: "80vw", marginTop: "100px" }}>
        <Row style={{width: "100%"}}>
            <Col md={12} lg={12}>
                <h2 className="my-3 pl-4">{`Search Results for company: '${searchReq}'`}</h2>
                <ListGroup>
                    
                    { searchResult ? (
                        searchResult.map((job) => {

                            const jobHTML = job.description
                            const descripParent = `<div>${jobHTML}</div>`

                            return (
                            <ListGroup.Item className="border-0" key={job._id} >
                                    <Card style={{ width: '100%', height: '400px' }}>
                                        <Card.Body>
                                        <Card.Title style={{ fontSize: '25px' }} className="py-2">{job.title}</Card.Title>
                                        <Link className="py-2 mb-3" to={`/Company?jobs=${job.company_name}`} >{job.company_name}</Link>
                                            <Card style={{ width: '100%' }}>
                                            <Card.Body className="overflow-auto">
                                                    <Card.Text dangerouslySetInnerHTML={{
                                                                __html: descripParent
                                                            }} style={{ height: '150px' }}>
                                                        
                                                    </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    <Button variant="primary" className="my-3" href={job.url} >Apply Here</Button>
                                    </Card.Body>
                                </Card>
                            </ListGroup.Item>)})) :
                            (<h2>There are no results for your search! Try again!</h2>)
                    }
                
                </ListGroup>
               
            </Col>
        </Row>
      </Container>
  );
}

export default withRouter(CompanyJobs);