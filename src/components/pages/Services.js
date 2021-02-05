import React from 'react';
import './Services.css';
import { Link } from "react-router-dom"

export default function Services(props) {

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
                    {props.services.map((service) => (
                        <tr key={service.id}>
                            <td>{service.service_name}</td>
                            <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
                            <td><Link to={`services/${service.id}/edit`}>Edit Service </Link></td>
                            <td><Link to={`services/${service.id}/delete`}> Delete Service</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <Link to="services/new">Add a new service</Link>
        </>
        )
}