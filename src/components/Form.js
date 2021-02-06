import React, { useState } from "react";
import Select from 'react-select';
import { Form, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const optionsServices = [
  { value: "lorem", label: "Lorem" },
  { value: "ipsum", label: "ipsum" },
  { value: "dolor", label: "dolor" },
  { value: "sitamet", label: "sit amet" }
]

class BookingForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      address: '',
      notes: '',
      selectedService: null,
      suburb: 'lorem',
      postcode: '4000',
      date: ''
    }
  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  handleOptions = selectedService => {
    this.setState({ selectedService })
    console.log(selectedService)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let ph = this.state.phone
    if (!Number(ph)) {
      alert("Phone must be a number")
    }
    console.log(this.state)
  }

  render() {
    const { selectedService } = this.state
    return (
      <div className="bookingForm">
        <form onSubmit={this.handleSubmit}>
          <Container>
            <Form>
              <Row>
                <Col className="leftCol">
                  <div className="leftpart">
                    <Form.Group controlId="formFirstName">
                      <label htmlFor="firstname">First Name</label>
                      <input className="u-full-width" type="text" name="firstname" id="firstname" onChange={this.handleChange} />
                    </Form.Group>

                    <div className="input_field">
                      <label htmlFor="lastname">Last Name</label>
                      <input className="u-full-width" type="text" name="lastname" id="lastname" onChange={this.handleChange} />
                    </div>

                    <div className="input_field">
                      <label htmlFor="phone">Phone</label>
                      <input className="u-full-width" type="tel" name="phone" id="phone" onChange={this.handleChange} />
                    </div>

                    <div className="input_field">
                      <label htmlFor="email">Email</label>
                      <input className="u-full-width" type="email" name="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input_field">
                      <label htmlFor="address">Address</label>
                      <input className="u-full-width" type="text" name="address" id="address" onChange={this.handleChange} />
                    </div>

                    <div className="row">
                      <div className="two-half-column">
                        <label htmlFor="suburb">Suburb</label>
                        <select className="suburb-width" onChange={this.handleChange} name="suburb" >
                          <option value="lorem">Lorem</option>
                          <option value="ipsum">ipsum</option>
                        </select>
                      </div>
                      <div className="one-half column">
                        <label htmlFor="postcode">Postcode</label>
                        <select
                          className="postcode-width"
                          onChange={this.handleChange}
                          name="postcode"
                        >
                          <option value="4000">4000</option>
                          <option value="4001">4001</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col className="rightCol">
                  <div className="rightpart">
                    <div className="input_field2">
                      <label htmlFor="services">Services required</label>
                      <Select
                        className="service-width"
                        onChange={this.handleOptions}
                        name="selectedService"
                        options={optionsServices}
                        placeholder="Select all services required"
                        isMulti />
                    </div>

                    <div className="input_field2">
                      <label htmlFor="date">Date</label>
                      <input className="date-width" type="date" name="date" id="date" onChange={this.handleChange} />
                    </div>

                    <div className="input_field2">
                      <label htmlFor="notes">Notes</label>
                      <textarea className="u-full-width" name="notes" onChange={this.handleChange} />
                      <input className="button-primary" type="submit" value="Submit" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </Container>
        </form>
      </div>
    )
  }
}

export default BookingForm;