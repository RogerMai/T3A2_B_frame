import React from 'react';
import '../App.css';
import { ButtonService, ButtonBooking, Button_1, Button_2 } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="video/video-3.mp4" autoPlay loop muted />
            <h1>Larry's Lawncare</h1>
            <p className='pTitle'>What are you waiting for?</p>
            <p>With over 30 years’ experience in the Australian turf industry, we know our stuff when it comes to lawn care. Now, we’re opening the door to you.Lawn Care Supplies is proudly backed by Larry's lawncare, which has serviced the turf industry since 1969. 
             </p>
            <p>Larry's lawncare supplies premium turf maintenance products to industry professionals across Australia, from golf courses and bowls clubs to tennis courts and professional stadiums. From 2020, Lawn Care Supplies is bringing these expert products to you.</p>
            <p>Whether you need fertilisers, fungicides or wetting agents, you’ll find the best professional lawn products from Lawn Care Supplies. Visit our Facebook to keep up to date with new products and special offers.</p>
            <div className="hero-btns">
                
                {/* <ButtonService 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large' 
                >
                    OUR SERVICES 
                </ButtonService> */}
                
                {/* <ButtonBooking 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large' 
                    >
                    MAKE BOOKING <i className='far fa-play-circle' /> 
                </ButtonBooking> */}

                <Link to='services'>
                    <button className='b_services'>Our Services</button>
                </Link>

                <Link to='booking'>
                    <button className='b_booking'>Booking Now<i className='far fa-play-circle' /></button>
                </Link>
                
            </div>
        </div>
    )
}

export default HeroSection
