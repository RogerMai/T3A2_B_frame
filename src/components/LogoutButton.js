import React from 'react'
import './LogoutButton.css';
import { Link } from 'react-router-dom';

export function LogoutButton() {
    return (
        <Link to='/'>
            <button id='b_Logout'>Logout</button>
        </Link>
        
        // <Link>
        //     {loggedInStatus === "LOGGED_IN" && <button onClick={handleLogoutClick}>Log out!!</button>}
        // </Link>
    )
}
