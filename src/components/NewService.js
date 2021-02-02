import React from 'react'
import { useState } from 'react'
import API from '../api'

export default function NewService() {
    const [servicename, setServicename] = useState("")
    const [price, setPrice] = useState("")
    
    const onSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch(`${API}/services`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                service_name: servicename,
                price: price
            })
        })
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
            <button>Add New Service</button>
        </form>
    </>
    )
}