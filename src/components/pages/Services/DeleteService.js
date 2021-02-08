import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from '../../../api'

export default function DeleteService(props) {

    // setting the initial state of the service to blank - setServiceInfo called in useEffect upon mounting
    const [serviceInfo, setServiceInfo] = useState({
        service_name: "",
        price: ""
    })

    const handleDelete = (id) => {
        fetch(`${API}services/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.status === 200) {
                alert("The service has been successfully deleted")
                props.history.push("/")
            } else {
                alert("There has been an error processing this request. Please try again")
                props.history.push("/services")
            }
        })
    }
    
    useEffect(() => {
        let service = props.services[props.match.params.id]
        console.log(service) // checks to see that data is being returned upon mounting - Object including service details returned
        setServiceInfo(service) // sets the data for the form to allow for editing
    }, [])


    return (
        <>
        <h1>Delete Service</h1>
        <h4>Are you sure you want to delete this service?</h4>
        <h5>Service name: {serviceInfo.service_name}</h5>
        <h5>Price: {serviceInfo.price}</h5>
        <button onClick={() => handleDelete(serviceInfo.id)}>Delete</button>
        <br></br>
        <Link to="/services">Back to Services</Link>
        </>
    )
}