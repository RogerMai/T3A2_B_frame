import React from 'react';
import './Services.css';
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import API from '../../config/api'

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
                <div className="serviceContainer">
                    <h1>Services</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.services.map(service => (
                                <tr key={service.id}>
                                    <td>{service.service_name}</td>
                                    <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
                                    <td id="edit"><Link to={`/services/${service.id}/edit`}>Edit Service </Link></td>
                                    <td id="delete"><Link to={`/services/${service.id}/delete`}> Delete Service</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <Link to="/services/new">Add a new service</Link>
                    <h3>Check to see if we service your area...</h3>
                    <div>
                        {suburbs.map(suburb => 
                        <p key={suburb.id}>{suburb.name + ","}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}