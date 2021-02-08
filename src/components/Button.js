import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

export function AdminButton() {
    return (
        <Link to='/admin'>
            <button id='b_admin'>Admin Login</button>
        </Link>
    )
}
