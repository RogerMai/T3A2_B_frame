import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import EditBooking from './EditBooking'
import Record from './Record'
import {useState, useEffect} from 'react'
import seedRecords from './seedRecords'



function AdminBookings() {
 const [records, setRecords] = useState([])
 useEffect(() => {
   let mockRecords = seedRecords()
   setRecords(mockRecords)
   }, [])
  return (
    <BrowserRouter>
        <Link to="/bookings/:id">Edit</Link>
        <Link to="/view">View</Link>
        <Switch>
          <Route path="/bookings/:id" render={() => <EditBooking records={records}/>}></Route>
          <Route path="/view" component={Record}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default AdminBookings;
import React from 'react'

export default function Bookings() {
    return (
        <>
            <table>
                <th>
                    <tr>
                        <td>Date</td>
                        <td>Customer</td>
                        <td>Address</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Service</td>
                        <td>Notes</td>
                    </tr>
                </th>
                <tbody>
                    <tr>
                    
                    </tr>
                </tbody>
            </table>
        </>
    );
}
