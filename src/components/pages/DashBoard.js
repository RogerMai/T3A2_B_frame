import React, { Component } from 'react'
import axios from 'axios';

export default class Test extends Component {
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        axios.delete("http://larryslawncare.herokuapp.com/logout", { withCredentials: true }).then(Response => {
            this.props.history.push("/");
        }).catch(error => {
            console.log("logout error", error);
        })
    }

    render() {
        return (
            <div>
                <h1>Test</h1>

                <button onClick={() => this.handleLogoutClick()}>Logout</button>

            </div>
        );
    }
}