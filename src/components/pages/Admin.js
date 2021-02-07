import React, { Component } from 'react';
import axios from 'axios';
import Login from '../Login';

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
    }

    handleLogoutClick() {
        axios.delete("http://larryslawncare.herokuapp.com/logout", { withCredentials: true}).then(Response => {
            this.props.handleLogout();
        }).catch(error => {
            console.log("logout error", error);
        })
    }

    render() {
        return (
            <div>
                <h1>Admin Login</h1>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        );
    }
}

