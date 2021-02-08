import React, { useState, useEffect } from "react";
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
      suburb: '',
      suburbs: [],
      services: [],
      postcode: '4000',
      date: ''
    }
  }

  //   this.state = {
  //       firstname: '',
  //       lastname: '',
  //       phone: '',
  //       email: '',
  //       address: '',
  //       notes: '',
  //       selectedService: null,
  //       suburb: 'lorem',
  //       postcode: '4000',
  //       date: ''
  //   }
  // }

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

componentDidMount() {
  fetch('https://larryslawncare.herokuapp.com/suburbs')
    .then(data => data.json())
    .then(result => this.setState({ suburbs: result }))
}

componentDidMount() {
  fetch('https://larryslawncare.herokuapp.com/services')
    .then(data => data.json())
    .then(result => {
      // recreating the services list array to work with the multi select package
      let newResultList = result.slice()
      let array = []
      newResultList.forEach(element => {
        console.log(element)
        let obj = {}
        obj.label = element.service_name
        obj.value = element.id
        array.push(obj)
      })
      this.setState({ services: array })
    })
}


render() {
  const { selectedService } = this.state
  return (
    <div className="Form">
      <form onSubmit={this.handleSubmit}>
        <Container>
          <Form>
            <Row>
              <Col className="leftCol">
                <div className="leftpart">
                  <Form.Group controlId="formFirstName">
                    <Form.Label htmlFor="firstname">First Name</Form.Label>
                    <Form.Control className="u-full-width" type="text" name="firstname" id="firstname" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group className="input_field">
                    <Form.Label htmlFor="lastname">Last Name</Form.Label>
                    <Form.Control className="u-full-width" type="text" name="lastname" id="lastname" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group className="input_field">
                    <Form.Label htmlFor="phone">Phone</Form.Label>
                    <Form.Control className="u-full-width" type="tel" name="phone" id="phone" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group className="input_field">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control className="u-full-width" type="email" name="email" id="email" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group className="input_field">
                    <Form.Label htmlFor="address">Address</Form.Label>
                    <Form.Control className="u-full-width" type="text" name="address" id="address" onChange={this.handleChange} />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group className="two-half-column">
                        <Form.Label htmlFor="suburb">Suburb</Form.Label>
                        <Form.Control as="select" className="suburb-width" onChange={this.handleChange} name="suburb" >
                          <option value="lorem">Lorem</option>
                          <option value="ipsum">ipsum</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="one-half column">
                        <Form.Label htmlFor="postcode">Postcode </Form.Label>
                        <Form.Control as="select"
                          className="postcode-width"
                          onChange={this.handleChange}
                          name="postcode"
                        >
                          <option value="4000">4000</option>
                          <option value="4001">4001</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col className="rightCol">
                <div className="rightpart">
                  <Form.Group className="input_field2">
                    <Form.Label htmlFor="services">Services required</Form.Label>
                    <Select
                      className="service-width"
                      onChange={this.handleOptions}
                      name="selectedService"
                      options={optionsServices}
                      placeholder="Select all services required"
                      isMulti />
                  </Form.Group>

                  <Form.Group className="input_field2">
                    <Form.Label htmlFor="date">Date</Form.Label>
                    <Form.Control className="date-width" type="date" name="date" id="date" onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group className="input_field2">
                    <Form.Label htmlFor="notes">Notes</Form.Label>
                    <textarea className="u-full-width" name="notes" onChange={this.handleChange} />
                    <Form.Control className="button-primary" type="submit" value="Submit" />
                  </Form.Group>
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