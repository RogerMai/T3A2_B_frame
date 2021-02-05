import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import API from '../api'


export default function EditService(props) {
    console.log(props)
    const [formInfo, setFormInfo] = useState({
        service_name: "",
        price: "",
        category_id: ""
    })

    useEffect(() => {
        let service = props.services[props.match.params.id]
        setFormInfo(service)
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        await fetch(`${API}services/` + formInfo._id, {
            method: "PUT",
            body: JSON.stringify(formInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.status === 200) {
                props.history.push("/services")
            } else {
                alert("There has been an error processing this update. Please check the details and try again")
            }
        })
    }

    const onChange = (e) => {
        let editData = e.target.id
        setFormInfo({...formInfo, [editData]: e.target.value})
    }

    return (
        <>
        <h1>Edit Service</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="service_name">Service Name:</label>
                <input id="service_name" onChange={onChange} value={formInfo.service_name}/>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input id="price" onChange={onChange} value={formInfo.price}/>
            </div>
            <button>Add New Service</button>
        </form>
        <Link to="/services">Back to Services</Link>
        </>
    )
}