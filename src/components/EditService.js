import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from '../api'


export default function EditService(props) {
    // console.log(props)
    
    const [formInfo, setFormInfo] = useState({
        service_name: "",
        price: ""
    })
    
    useEffect(() => {
        let service = props.services
        console.log(service)
        setFormInfo(service)
    }, [])

    const onSubmit = (e) => {
        let response = {...formInfo}
        console.log(response)

        e.preventDefault()
            fetch(`${API}services/` + formInfo.id, {
            method: "PUT",
            body: JSON.stringify(formInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.status === 201) {
                props.history.push("/services")
                alert("Service has been successfully updated")
            } else {
                alert("There has been an error processing this update. Please check the details and try again")
            }
        })
    }

    const onChange = (e) => {
        let editData = e.target.id
        // console.log(editData)
        setFormInfo({...formInfo, [editData]: e.target.value})
    }

    return (
        <>
        <h1>Edit Service</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="service_name">Service Name:</label>
                <input id="service_name" onChange={onChange} value={props.service_name} />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input id="price" onChange={onChange} value={props.price} />
            </div>
            <button>Update Service</button>
        </form>
        <Link to="/services">Back to Services</Link>
        </>
    )
}