import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="../images/video-3.mp4" autoPlay loop muted />
            <h1>Larry's Lawncare</h1>
            <p>What are you waiting for?</p>
            <p>With over 30 years’ experience in the Australian turf industry, we know our stuff when it comes to lawn care. Now, we’re opening the door to you.
            </p>
            <div className="hero-btns">
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large' 
                >
                    Our Service 
                </Button>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large' 
                >
                        Make a Booking 
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
