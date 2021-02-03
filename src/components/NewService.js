import React from 'react'
import { useState } from 'react'
import API from '../api'
import { Link } from 'react-router-dom'

export default function NewService(props) {
    const [servicename, setServicename] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")    
    
    const onSubmit = async (event) => {
        event.preventDefault()
        await fetch(`${API}services`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                service_name: servicename,
                price: price,
                category_id: category
            })
        })
        props.history.push("/")
    }
    
    return (
    <>
    <h1>Add New Service</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label>Service Name:</label>
                <input value={servicename} onChange={event => setServicename(event.target.value)}/>
            </div>
            <div>
                <label>Price:</label>
                <input value={price} onChange={event => setPrice(event.target.value)} />
            </div>
            <div>
                <label>Category:</label>
                <input value={category} onChange={event => setCategory(event.target.value)} />
            </div>
            <button>Add New Service</button>
            <Link to="/services">Back to Services</Link>
        </form>
    </>
    )
}