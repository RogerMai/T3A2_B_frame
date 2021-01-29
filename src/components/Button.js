import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='/admin'>
            <button className='b_admin'>Admin Login</button>
        </Link>
    )
}
