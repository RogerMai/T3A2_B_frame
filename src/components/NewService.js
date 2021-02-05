import React from 'react'
import { useState, useEffect } from 'react'
import API from '../api'
import { Link } from 'react-router-dom'

export default function NewService(props) {
    const [newService, setNewService] = useState({
        service_name: "",
        price: ""
    })
    // const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`${API}categories`)
        .then(response => response.json())
        .then(data => setCategories(data));
    }, []) 
    
    const onSubmit = async (e) => {
        e.preventDefault()
        await fetch(`${API}services`, {
            method: "POST",
            body: JSON.stringify(newService),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.status === 201) {
                props.history.push("/services")
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
            <div>
                <select htmlFor="category_name" onChange={onChange}>
                    {categories.map(cat => (
                        <option id="category_name" value={cat.category_id} key={cat.id}>{cat.category_name}</option>
                    ))}
                </select>
            </div>
            <button>Add New Service</button>
        </form>
        <Link to="/services">Back to Services</Link>
    </>
    )
}