import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Booking from './components/pages/Booking';
import AdminLogin from './components/pages/Admin';
import AdminBookings from './components/pages/AdminBookings'
import View from './components/pages/ViewBooking'
import EditForm from './components/pages/EditBooking'
import {useState, useEffect} from 'react'




function App() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('https://larryslawncare.herokuapp.com/bookings/')
    .then(response => response.json())
    .then(data => setRecords(data))
  }, [])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route exact path='/contact' exact component={Contact} />
        <Route exact path='/services' exact component={Services} />
        <Route exact path='/booking' exact component={Booking} />
        <Route exact path='/admin' exact component={AdminLogin} />
        <Route exact path='/admin/bookings' component={AdminBookings} />
        <Route exact path="/admin/bookings/:id/edit" render={props => <EditForm {...props} records={records} />} />
        <Route exact path="/admin/bookings/:id" render={props => <View {...props} records={records} />} />
      </Switch>
    </Router>
  );
}

export default App;
