import React from 'react'
import { useState } from 'react'
import API from '../api'
import { Link } from 'react-router-dom'

export default function NewService(props) {
    const [newService, setNewService] = useState({
        service_name: "",
        price: "",
        category_id: 11
    })

    const onSubmit = (e) => {
        let response = {...newService}
        console.log(response)

        e.preventDefault()
         fetch(`${API}services`, {
            method: "POST",
            body: JSON.stringify(newService),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.status === 201) {
                props.history.push("/services")
                alert("The service has been successfully added")
            } else {
                alert("All fields must be completed to proceed")
            }
        })
    }

    const onChange = (e) => {
        let serviceDetails = e.target.id
        console.log(serviceDetails)
        setNewService({ ...newService, [serviceDetails]: e.target.value })
    }
    
    return (
    <>
    <h1>Add New Service</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="service_name">Service Name:</label>
                <input id="service_name" onChange={onChange} value={(newService.service_name)}/>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input id="price" onChange={onChange} value={(newService.price)}/>
            </div>
            <button>Add New Service</button>
        </form>
        <Link to="/services">Back to Services</Link>
    </>
    )
}