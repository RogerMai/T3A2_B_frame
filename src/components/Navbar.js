import React, { useState, useEffect } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Larry's Lawncare
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/booking' className='nav-links' onClick={closeMobileMenu}>Booking</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link> 
                    </li>
                    <li className='nav-item'>
                        <Link to='/admin' className='nav-links-mobile' onClick={closeMobileMenu}>Admin Login</Link> 
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;