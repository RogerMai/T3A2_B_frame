import React, { useState } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

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
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services<i className='fas fa-caret-down' /></Link>
                            {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/booking' className='nav-links' onClick={closeMobileMenu}>Booking Now</Link>
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