import React from 'react';
import Form from '../Form.js'
import './Booking.css';

function Booking() {
    return (
        <div className="booking-bg">
            <div className="bookingCard">
                <div className="bookingContainer">
                    <div className="booking-h1">
                        <h1 className="bookingH1">BOOK A SERVICE</h1>
                    </div>
                    <div className="booking-form">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;