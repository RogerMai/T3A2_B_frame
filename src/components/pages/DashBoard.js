import React, { Component } from 'react'
import axios from 'axios';

export default class Test extends Component {
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
      window.location.href = "/";
    }

    render() {
        return (
            <div>
                <h1>Test</h1>

                {this.props.loggedInStatus === "LOGGED_IN" && <button onClick={this.handleLogoutClick}>Log out!!</button>}

            </div>
        );
    }
}