import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services/Services';
import Booking from './components/pages/Booking';
import AdminLogin from './components/pages/Admin';
import AdminBookings from './components/pages/AdminBookings'
import NewService from './components/pages/Services/NewService'
import EditService from './components/pages/Services/EditService'
import DeleteService from './components/pages/Services/DeleteService'
import {useState, useEffect} from 'react'
import API from './api'


function App() {
  // set the services/categories to be passed down as props
  const [services, setServices] = useState([])
    
  useEffect(() => {
    // fetch list of services from Rails API
      fetch(`${API}services`)
      .then(response => response.json())
      .then(data => setServices(data));
  }, []) 

  
  // props are destructured in the Router to allow for use in services component
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route exact path='/services' render={props => <Services {...props} services={services} />} />
        <Route exact path='/services/new' render={props => <NewService {...props} services={services} />} />
        <Route exact path='/services/:id/edit' render={props => <EditService {...props} services={services} />} />
        <Route exact path='/services/:id/delete' render={props => <DeleteService {...props} services={services} />} />
        <Route path='/booking' exact component={Booking} />
        <Route path='/admin' exact component={AdminLogin} />
        <Route path='/admin/bookings' component={AdminBookings} />
      </Switch>
    </Router>
  );
}

export default App;
