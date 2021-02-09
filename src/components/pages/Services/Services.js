import React from 'react';
import './Services.css';
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import API from '../../config/api'
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


export default function Services(props) {
    const [suburbs, setSuburbs] = useState([])

    useEffect(() => {
        fetch(`${API}suburbs`)
        .then(response => response.json())
        .then(data => setSuburbs(data));  
    }, [])

    
    // List of services - both customer & admin view. Checks needed on edit/delete/add buttons to see if user is logged in. Services are mapped over and compiled into a table
    return (
        <div className="service-bg">
            <div className="serviceCard">
                <Container className="serviceContainer">
                    <div className="service-h1">
                        <h1>Services</h1>
                    </div>
                    <Form>
                        <Row>
                            <Col md>
                                <div className="serviceContainer-left">
                                    <table>
                                        <thead className="Item-Name">
                                            <tr>
                                                <th>Service Name</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="serviceContent">
                                            {props.services.map(service => service && (
                                                <tr key={service.id}>
                                                    <td>{service.service_name}</td>
                                                    <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
                                                    {/* <div className="editSerBu"> */}
                                                    {props.loggedInStatus === "LOGGED_IN" && (
                                                    <td id="edit"><Link to={`/services/${service.id}/edit`}>Edit Service </Link></td>
                                                    )}
                                                    
                                                    <div className="delSerBu">
                                                    {props.loggedInStatus === "LOGGED_IN" && (
                                                    <td id="delete"><Link to={`/services/${service.id}/delete`}> Delete Service</Link></td>
                                                    )}
                                                    </div>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="newSerButton">
                                        {props.loggedInStatus === "LOGGED_IN" && (
                                            <Link to={`/services/new`}>Add a New Service</Link>
                                        )}
                                    </div>
                                </div>
                            </Col>   
                            <Col md>
                                <Card className="serviceContainer-right">
                                    <Card.Header>
                                        <h5>Check to see if we service your area...</h5>
                                    </Card.Header>
                                    <ul className="subarea">
                                        {suburbs.map(suburb => 
                                        <p key={suburb.id}>{suburb.name + ","}</p>)}
                                    </ul>
                                </Card>
                            </Col>
                        </Row>    
                    </Form>    
                </Container>
            </div>                   
        </div>
    )
}


