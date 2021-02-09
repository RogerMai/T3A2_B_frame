import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services/Services';
import Booking from './components/pages/Booking';
import EditBooking from './components/pages/EditBooking';
import AdminLogin from './components/pages/Admin';
import AdminBookings from './components/pages/AdminBookings'
import View from './components/pages/ViewBooking';
import NewService from './components/pages/Services/NewService'
import EditService from './components/pages/Services/EditService'
import DeleteService from './components/pages/Services/DeleteService'
import {useState, useEffect} from 'react'
import API from './components/config/api'
import DashBoard from './components/pages/DashBoard'
import { Redirect } from "react-router-dom";

function App() {
  // set the services to be passed down as props
  const [services, setServices] = useState([])
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");

  const handleLogin = (data) => {
    setLoggedInStatus("LOGGED_IN")
  }

  useEffect(() => {
    // fetch list of services from Rails API
    fetch(`${API}services`)
      .then(response => response.json())
      .then(data => setServices(data));
  }, [])

  // props are destructured in the Router to allow for use in services component
  return (
    <Router>
      <Navbar loggedInStatus={loggedInStatus} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route exact path='/services' render={props => <Services {...props} services={services} />} />
        <Route exact path='/services/new' render={props => <NewService {...props} services={services} setServices={setServices} />} />
        <Route exact path='/services/:id/edit' render={props => <EditService {...props} services={services} setServices={setServices} />} />
        <Route exact path='/services/:id/delete' render={props => <DeleteService {...props} services={services} setServices={setServices} />} />
        <Route path='/booking' exact component={Booking} />
        {/* <Route path='/admin' exact component={AdminLogin} /> */}
        <Route exact path='/admin/bookings' component={AdminBookings} />
        <Route exact path="/admin/bookings/:id/edit" render={props => <EditBooking {...props} />} />
        <Route exact path="/admin/bookings/:id" render={props => <View {...props} />} />
        <Route exact path={"/"}
          render={props => (
            <Home {...props}
              handleLogin={handleLogin}
             
              loggedInStatus={loggedInStatus} />
          )}
        />
        <Route exact path={"/dashboard"}
          render={props => (
            <DashBoard {...props} loggedInStatus={loggedInStatus} />
          )}
        />
        <Route
          exact
          path='/admin'
          render={
            (props) => {
              return loggedInStatus === "NOT_LOGGED_IN"
                ? <AdminLogin handleLogin={handleLogin} />
                : <Redirect to="/dashboard" />
            }
          }
        />
      </Switch>
    </Router>
  );
}

export default App;