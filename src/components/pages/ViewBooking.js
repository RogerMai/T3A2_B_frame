import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function View(props) {
    const [booking, setBooking] = useState({})

    useEffect(() => {
        fetch(`https://larryslawncare.herokuapp.com/bookings/${props.match.params.id}`)
        .then(result => result.json())
        .then(json => setBooking(json))

    }, [props.match.params.id])

    const handleDelete = (id) => {
        props.deleteRecord(id)
        props.history.push("/admin/bookings")
    }

    return (
        <>
            <h1 className='consulting'>View booking</h1>
            <div>
                <p>{booking.first_name} {booking.last_name}</p>
                <p>{booking.address}, {booking.suburb_id}</p>
                <p>{booking.phonenumber}</p>
                <p>{booking.email}</p>
            </div>
            <div>
                <p>{booking.service_id}</p>
                <p>{booking.booking_date}</p>
                <p>{booking.notes}</p>
            </div>
            <Link to={`/admin/bookings/${booking.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(props.match.params.id)}>Delete</button>
        </>
    );
}