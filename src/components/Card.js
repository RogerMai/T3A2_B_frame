import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


function Card() {
    const [name, setName] = useState('ABOUT')
    const [about, setAbout] = useState("With over 50 years’ experience in the Australian turf industry, we know our stuff when it comes to lawn care. Now, we’re opening the door to you. Lawn Care Supplies is proudly backed by Larry's lawncare, which has serviced the turf industry since 1969. K&B Adams supplies premium turf maintenance products to industry professionals across Australia, from golf courses and bowls clubs to tennis courts and professional stadiums. From 2020, Lawn Care Supplies is bringing these expert products to you. Whether you need fertilisers, fungicides or wetting agents, you’ll find the best professional lawn products from Lawn Care Supplies. Visit our Facebook to keep up to date with new products and special offers. ")

    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src="" alt=" " height="100px" width="100px" /> 
                </div>
            </div>
            <div className='lower-container'>
                <h3> { name }</h3>
                <p>  { about }</p>
                <Link to="/booking">
                    <button>Booking Now!</button>
                </Link>
            </div>
        </div>
    )
}

export default Card



