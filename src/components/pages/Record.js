import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import {Link, Route} from 'react-router-dom'
import EditBooking from './EditBooking'

const clickDelete = () => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to delete this booking?',
      buttons: [
        {
          label: 'Delete',
          onClick: () => alert('Delete')
        },
        {
          label: 'Cancel',
          onClick: () => console.log()
        }
      ]
    })
  };

  const clickEdit = () => {
      alert('edit')
  }

const Record = () => {
    let data = [
        {
            id: 1,
            date: "12-02-2021",
            customer: "John Doe",
            address: "123 Fake St, Brisbane 4000",
            phone: "1404 123 123",
            email: "email@email.com",
            service: "Mowing",
            notes: 'Lorem ipsum dolor sit amet'
        }, {
            id: 2,
            date: "13-02-2021",
            customer: "Jane Smith",
            address: "12 Street St, Brisbane 4001",
            phone: "0402 234 234",
            email: "jane@jane.com",
            service: "Gutter clearing",
            notes: ''
        }
    ]

    return (
        <>
        <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Customer</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Service</td>
            <td>Notes</td>
          </tr>
        </thead>
        <tbody>
          {data.map(data => (
            <tr key={data.id}>
                  <td>
                      <p>{data.date}</p>
                  </td>
                  <td>
                      <p>{data.customer}</p>
                  </td>
                  <td>
                      <p>{data.address}</p>
                  </td>
                  <td>
                      <p>{data.phone}</p>
                  </td>
                  <td>
                      <p>{data.email}</p>
                  </td>
                  <td>
                      <p>{data.service}</p>
                  </td>
                  <td>
                      <p>{data.notes}</p>
                  </td>
                  <td>
                      <Link to="/edit">
                        <button>Edit</button>
                      </Link>
                  </td>
                  <td>
                      <button onClick={clickDelete}>Delete</button>
                  </td>
              </tr>
          ))}
        </tbody>
    </table>
    <Route path="/edit" component={EditBooking}></Route>
    </>
    )
  }

export default Record