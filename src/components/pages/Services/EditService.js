import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from '../../../api'

export default function EditService(props) {
    // console.log(props)
    const [formInfo, setFormInfo] = useState({
        service_name: "",
        price: ""
    })
    
    useEffect(() => {
        let service = props.services[props.match.params.id]
        console.log(service) // checks to see that data is being returned upon mounting - Object including service details returned
        setFormInfo(service) // sets the data for the form to allow for editing
    }, [])

    const onSubmit = (e) => {
        // let response = {...formInfo}
        // console.log(response) // Checking the response received when submitting

        // fetches the API for Rails, formats data into JSON to post to database with checks on result status. Redirects back to the Services page once successfully completed.
        e.preventDefault()
            fetch(`${API}services/` + formInfo.id, {
            method: "PUT",
            body: JSON.stringify(formInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.status === 201) { // 201 status - success
                return result.json()
            } else {
                alert("There has been an error processing this update. Please check the details and try again") // Will return an unprocessible entity error
            }
        }).then(service => {
            let currentListOfServices = [...props.services] // cloning the original array
            currentListOfServices.push(service)
            alert("Service has been successfully updated")
            props.setServices(currentListOfServices) // resetting the state of services
            props.history.push("/services") // redirects to /services page
        })
    }

    const onChange = (e) => {
        let editData = e.target.id // Data received from form and stored in variable
        // console.log(editData)
        setFormInfo({...formInfo, [editData]: e.target.value}) // destructure formInfo and set the state with values from form 
    }

    return (
        <>
        <h1>Edit Service</h1>
        
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="service_name">Service Name:</label>
                <input onChange={onChange} id="service_name" name="service_name"  value={formInfo.service_name} />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input onChange={onChange} id="price" name="price"  value={formInfo.price} /> 
            </div>
            <input type="submit" onChange={onChange} value={props.id} />
        </form>
        <Link to="/services">Back to Services</Link>
        </>
    )
}