import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Booking from './components/pages/Booking';
import AdminLogin from './components/pages/Admin';
import Mowing from './components/pages/Mowing';
import Gardening from './components/pages/Gardening';
import Landscaping from './components/pages/Landscaping';
import GutterClearing from './components/pages/GutterClearing';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/services' exact component={Services} />
        <Route path='/booking' exact component={Booking} />
        <Route path='/admin' exact component={AdminLogin} />
        <Route path='/mowing' exact component={Mowing} />
        <Route path='/gardening' exact component={Gardening} />
        <Route path='/landscaping' exact component={Landscaping} />
        <Route path='/gutterclearing' exact component={GutterClearing} />
      </Switch>
    </Router>
  );
}

export default App;
