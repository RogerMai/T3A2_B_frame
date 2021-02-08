import React, { Component } from 'react'

export default class Logout extends Component {
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
      window.location.href = "/";
    }
    
    render() {
        return(
            <div>
                {this.props.loggedInStatus === "LOGGED_IN" && <button onClick={this.handleLogoutClick}>Log out!!</button>}
            </div>

        )
    }
}