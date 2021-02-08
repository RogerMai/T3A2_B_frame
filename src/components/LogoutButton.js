// import React, { Component } from 'react'
// import './LogoutButton.css';

// export default class LogoutButton extends Component {
//     constructor(props) {
//         super(props);

//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     }

//     handleLogoutClick() {
//         window.location.href = "/";
//     }

//     render() {
//         return (

//             <div>
//                 {this.props.loggedInStatus === "LOGGED_IN" && <button onClick={this.handleLogoutClick}>Log out!!</button>}
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'
import './LogoutButton.css';

const LogoutButton = () => {
    const handleLogoutClick = () => {
        window.location.href = "/";
    }

    return (
      <div>
        <button onClick={handleLogoutClick}>Log out!!</button>
      </div>
    )
}

export default LogoutButton;