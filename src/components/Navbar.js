import React, { useState, useEffect } from 'react'
import { AdminButton } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav id='larrynavbar'>
                <Link to='/' id='larrynavbar-logo'>
                    Larry's Lawncare
                </Link>
                <div className='larrymenu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'larrynav-menu active' : 'larrynav-menu'}>
                    <li id='larrynav-item'>
                        <Link to='/services' id='larrynav-links' onClick={closeMobileMenu}>Services</Link> 
                    </li>
                    <li id='larrynav-item'>
                        <Link to='/booking' id='larrynav-links' onClick={closeMobileMenu}>Booking</Link> 
                    </li>
                    <li id='larrynav-item'>
                        <Link to='/contact' id='larrynav-links' onClick={closeMobileMenu}>Contact Us</Link> 
                    </li>
                    <li id='larrynav-item'>
                        <Link to='/admin' id='larrynav-links-mobile' onClick={closeMobileMenu}>Admin Login</Link> 
                    </li>
                </ul>
                <AdminButton id="adminButton" />
            </nav>
        </>
    )
}

export default Navbar;