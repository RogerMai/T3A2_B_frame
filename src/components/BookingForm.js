import React from "react"
import Select from 'react-select'
import { Form, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BookingForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      phonenumber: '',
      email: '',
      address: '',
      notes: '',
      service_id: null,
      suburb_id: null,
      suburbs: [],
      optionsServices: [],
      postcode: '4000',
      booking_date: ''
    }
  }


  handleOptions = selectedService => {
    this.setState({ service_id: selectedService.value })
  }

  handleSuburb = selectedSuburb => {
    this.setState({ suburb_id: selectedSuburb.value })
  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // let ph = this.state.phonenumber
    // if (!Number(ph)) {
    //   alert("Phone must be a number")
    // }
    fetch('https://larryslawncare.herokuapp.com/bookings', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then((data) => console.log(data))
      .catch(() => alert("Please fill in all fields"))
  }

  componentDidMount() {
    fetch('https://larryslawncare.herokuapp.com/services')
      .then(result => result.json())
      .then(data => {
        let array = []
        data.forEach((element) => {
          array.push({
            value: element.id,
            label: element.service_name
          })
        })
        this.setState({ optionsServices: array })
        console.log(array)

        fetch('https://larryslawncare.herokuapp.com/suburbs')
          .then(result => result.json())
          .then(data => {
            let suburbs = []
            data.forEach((element) => {
              suburbs.push({
                value: element.id,
                label: element.name
              })
            })
            this.setState({ suburbs: suburbs })
            console.log(suburbs)
          })
      })
  }

  render() {
    const { selectedService } = this.state
    return (
      <div className="bookingForm">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <label htmlFor="first_name">
                  First Name
                </label>
                <input
                  className="u-full-width"
                  type="text"

                  name="first_name"
                  id="first_name"
                  onChange={this.handleChange}
                />
                <label htmlFor="last_name">
                  Last Name
                </label>
                <input
                  className="u-full-width"
                  type="text"
                  name="last_name"
                  id="last_name"
                  onChange={this.handleChange}
                />
                <label htmlFor="phonenumber">
                  Phone
                </label>
                <input
                  className="u-full-width"
                  type="tel"
                  name="phonenumber"
                  id="phonenumber"
                  onChange={this.handleChange}
                />
                <label htmlFor="email">
                  Email
                </label>
                <input
                  className="u-full-width"
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
                <label htmlFor="address">
                  Address
                </label>
                <input
                  className="u-full-width"
                  type="text"
                  name="address"
                  id="address"
                  onChange={this.handleChange}
                />
                <label htmlFor="suburb_id">
                  Suburb
                </label>
                <Select
                  className="u-full-width"
                  onChange={this.handleSuburb}
                  name="suburb_id"
                  options={this.state.suburbs}
                >
                </Select>
              </div>
              <div className="one-half column">
                <label htmlFor="service_id">
                  Services required
                </label>
                <Select
                  className="u-full-width"
                  onChange={this.handleOptions}
                  name="service_id"
                  options={this.state.optionsServices}
                  placeholder="Select all services required"
                />
                <label htmlFor="booking_date">
                  Date
                    </label>
                <input
                  className="u-full-width"
                  type="date"
                  name="booking_date"
                  id="booking_date"
                  onChange={this.handleChange}
                />
                <label htmlFor="notes">
                  Notes
                </label>
                <textarea
                  className="u-full-width"
                  name="notes"
                  onChange={this.handleChange}
                />
                <input
                  className="button-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BookingForm;