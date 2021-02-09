import React, { useState } from 'react'
import { AdminButton } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoutButton from './LogoutButton';


function Navbar(props) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const { loggedInStatus } = props;


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
                    <li id='larrynav-item'>
                        <Link to='/' id='larrynav-links-mobile' onClick={closeMobileMenu}>Logout</Link>
                    </li>
                </ul>
                {/* <div className="changeBut">
                    <AdminButton id="adminButton" />
                </div> */}
                {loggedInStatus === "NOT_LOGGED_IN" ? (
                    <div className="changeBut">
                        <AdminButton id="adminButton" />
                    </div>
                ) : (
                        <div className="changeBut">
                            <LogoutButton id="logOut" />
                        </div>
                    )}
                {/* {loggedInStatus === "LOGGED_IN" && (
                    <div className="changeBut">
                        <LogoutButton />
                    </div>
                )} */}

            </nav>
        </>
    );
}

export default Navbar;