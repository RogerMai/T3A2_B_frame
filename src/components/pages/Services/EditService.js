import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from '../../config/api'
import './EditService.css';
import { Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditService({setServices, services, match, history, id }) {
    // console.log(props)
    const [formInfo, setFormInfo] = useState({
        service_name: "",
        price: ""
    })

    useEffect(() => {
        fetch(`${API}services/${match.params.id}`)
            .then(result => result.json())
            .then(data => setFormInfo(data))
    }, [services, match])

    const onSubmit = (e) => {
        let response = {...formInfo}
        // console.log(response) // Checking the response received when submitting

        // fetches the API for Rails, formats data into JSON to post to database with checks on result status. Redirects back to the Services page once successfully completed.
        e.preventDefault()
            fetch(`${API}services/` + formInfo.id, {
            method: "PUT",
            body: JSON.stringify(formInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.status === 201) { // 201 status - success
                return result.json()
            } else {
                alert("There has been an error processing this update. Please check the details and try again NOTE: Fields can not be blank") // Will return an unprocessible entity error
                throw new Error()
            }
        }).then(service => {
            if (service !== null) {
                let currentListOfServices = [...services] // cloning the original array
                let index = currentListOfServices.findIndex(element => element.id === service.id)
                // currentListOfServices[index] = service
                currentListOfServices.splice(index, 1, service)
                setServices(currentListOfServices)
                alert("Service has been successfully updated")
                setServices(currentListOfServices) // resetting the state of services
                history.push("/services") // redirects to /services page
            }
        }).catch(() => {})
    }

    const onChange = (e) => {
        let editData = e.target.id // Data received from form and stored in variable
        // console.log(editData)
        setFormInfo({...formInfo, [editData]: e.target.value}) // destructure formInfo and set the state with values from form 
    }

    return (
        <div className="editService-bg">
            <div className="editServiceCard">
                <div className="editServiceContainer">
                    <div className="editService-h1">
                        <h1>Edit Service</h1>
                    </div>
                    <Col>
                        <Form onSubmit={onSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="service_name">Service Name:</Form.Label>
                                <Form.Control onChange={onChange} id="service_name" name="service_name"  value={formInfo.service_name} />
                            </Form.Group>
                            <Form.Group className="editPrice">
                                <Form.Label htmlFor="price">Price:</Form.Label>
                                <Form.Control onChange={onChange} id="price" name="price"  value={formInfo.price} /> 
                            </Form.Group>
                            <Form.Control id="editPriceSub" type="submit" onChange={onChange} value={id} />
                        </Form>
                        <Link to="/services" className="backService">Back to Services</Link>
                    </Col>
                </div>
            </div>
        </div>
    )
}