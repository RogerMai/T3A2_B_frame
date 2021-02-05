import React from 'react';
import './Services.css';
import API from '../../api'
import { Link } from "react-router-dom"
import {useEffect, useState} from "react"


export default function Services(props) {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch(`${API}services`)
        .then(response => response.json())
        .then(data => setServices(data));
    }, []) 
    
    return (
        <>
        <h1>Services</h1>
            <table>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.services.map((service, idx) => (
                        <tr key={service.id}>
                            <td>{service.service_name}</td>
                            <td>{service.price}</td>
                            <td><Link to={`services/${idx}/edit`}>Edit Service</Link></td>
                            <td><Link to={`services/${idx}/delete`}>Delete Service</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <Link to="services/new" services={services}>Add a new service</Link>
        </>
        )
}



