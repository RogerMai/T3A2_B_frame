import React from 'react';
import './Services.css';
import API from '../../api'
import { Link, useRouteMatch } from "react-router-dom"
import {useEffect, useState} from "react"

const ServicesTable = (props) => {
    const { url } = useRouteMatch()
    return (
    <table>
    <tbody>
        <tr>
        <td>{props.service.service_name}</td>
        <td>{props.service.price === 'Request quote' ? `${props.service.price}` : `$${props.service.price}`}</td>
        <td><Link to={`${url}/edit/${props.service.id}`} service={props.service}>Edit Service</Link></td>
        </tr>
    </tbody>
    </table>
    )
}

export default function Services() {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch(`${API}/services`)
        .then(response => response.json())
        .then(data => setServices(data));
    }, []) 
    
    return (
        <>
        <h1>Services</h1>
            {
                services.map(service => 
                    <ServicesTable service={service} key={service.id} />
                )
            }
                <Link to="services/new" services={services}>Add a new service</Link>
        </>
        )
}




