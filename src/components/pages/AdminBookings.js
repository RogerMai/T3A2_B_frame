import {useEffect, useState} from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Records from './Records'



function AdminBookings(props) {
    const [records, setRecords] = useState([])

    useEffect(() => {
      fetch('https://larryslawncare.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setRecords(data))
  }, [])

    const deleteRecord = (id) => {
      fetch('https://larryslawncare.herokuapp.com/bookings/' + id, {
        method: "DELETE"
      })
        .then(response => {
          if (response.status == 200) {
            let newRecords = [...records]
            newRecords = newRecords.filter(record => record.id != id)
            setRecords(newRecords)
            console.log(newRecords)
          }
        })
      }

    return (
      <>
        <Records records={records} deleteRecord={deleteRecord}  />
      </>
    );
}


export default AdminBookings;