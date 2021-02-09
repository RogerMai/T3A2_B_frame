import React from 'react';
import { useState } from 'react';
import API from '../../config/api';
import { Link } from 'react-router-dom';
import './NewService.css';
import { Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewService(props) {
    const [newService, setNewService] = useState({
        service_name: "",
        price: "",
        category_id: 12
    })

    const onSubmit = (e) => {
        // let response = {...newService}
        // console.log(response)

        e.preventDefault()
        fetch(`${API}services`, {
            method: "POST",
            body: JSON.stringify(newService),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.status === 201) {
                return result.json()
            } else {
                alert("All fields must be completed to proceed")
                throw new Error()
            }
        }).then(service => {
            if (service !== null) {
                const currentListOfServices = [...props.services]
                currentListOfServices.push(service)
                alert("The service has been successfully added")
                props.setServices(currentListOfServices)
                props.history.push("/services")
            }
        }).catch(() => {})
    }

    const onChange = (e) => {
        let serviceDetails = e.target.id
        // console.log(serviceDetails)
        setNewService({ ...newService, [serviceDetails]: e.target.value })
    }

    // if (loggedInStatus === "NOT_LOGGED_IN") {
    //   window.location.href = "/";
    // }

    return (
        <div className="newService-bg">
            <div className="newServiceCard">
                <div className="newServiceContainer">
                    <div className="newService-h1">
                        <h1>Add New Service</h1>
                    </div>
                    <Col>
                        <Form onSubmit={onSubmit} className="newServiceForm">
                    
                            <Form.Group>
                                <Form.Label htmlFor="service_name">Service Name:</Form.Label>
                                <Form.Control id="service_name" onChange={onChange} value={(newService.service_name)} />
                            </Form.Group>
                            <Form.Group className="priceService">
                                <Form.Label htmlFor="price">Price:</Form.Label>
                                <Form.Control id="price" onChange={onChange} value={(newService.price)} />
                            </Form.Group>
                            <button id="newServiceButton">Add New Service</button>
                        </Form>
                        <Link to="/services" className="backService">Back to Services</Link>
                    </Col>
                </div>
            </div>
        </div>
    )
}