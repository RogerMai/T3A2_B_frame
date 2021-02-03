import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import EditBooking from './EditBooking'
import Record from './Record'
import { useState, useEffect } from 'react'



function AdminBookings() {
    const [records, setRecords] = useState([])
    return (
        <BrowserRouter>
            <Link to="/bookings/:id">Edit</Link>
            <Link to="/admin/view">View</Link>
            <Switch>
                <Route path="/bookings/:id" render={() => <EditBooking records={records} />}></Route>
                <Route path="/admin/view" component={Record}></Route>
            </Switch>
        </BrowserRouter>
    );
}


export default AdminBookings;