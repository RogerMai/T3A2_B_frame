import React from 'react'
import './LogoutButton.css';

const LogoutButton = () => {
    const handleLogoutClick = () => {
        window.location.href = "/";
    }

    return (
      <div>
        <button onClick={handleLogoutClick} id="logout-Bu">Log out</button>
      </div>
    )
}

export default LogoutButton;