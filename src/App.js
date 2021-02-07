import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Booking from './components/pages/Booking';
import AdminLogin from './components/pages/Admin';
import AdminBookings from './components/pages/AdminBookings'
import axios from 'axios';
import DashBoard from './components/pages/DashBoard'

import { Redirect } from "react-router-dom";


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    console.log("Hello!!")
  }
  

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "Not_Logged_In",
      user: {}
    })
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.username
    });
  }

  render() {
    return (
      <Router>
        <Navbar />
      
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/services' exact component={Services} />
          <Route path='/booking' exact component={Booking} />
          {/* <Route path='/admin' exact component={AdminLogin} /> */}
          <Route
            exact
            path='/admin'
            render={
              (props) => {
                return this.state.loggedInStatus === "NOT_LOGGED_IN"
                  ? <AdminLogin handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
                  : <Redirect to="/dashboard" />
              }
            }
          />
          <Route path='/admin/bookings' component={AdminBookings} />
          <Route exact path={"/"}
            render={props => (
              <Home {...props}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus} />
            )}
          />

          <Route exact path={"/dashboard"}
            render={props => (
              <DashBoard {...props} loggedInStatus={this.state.loggedInStatus} />
            )}
          />

        </Switch>
      </Router>
    );
  }  
}

