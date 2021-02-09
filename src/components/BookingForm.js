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
          <Container className="container">
            <Form>
              <Row>
                <Col className="leftCol">
                  <div className="left-column">
                    <Form.Group controlId="formFirstName">
                      <Form.Label htmlFor="first_name">First Name</Form.Label>
                      <Form.Control
                        className="u-full-width"
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        id="first_name"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="last_name">Last Name</Form.Label>
                      <Form.Control
                        className="u-full-width"
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        id="last_name"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="phonenumber">
                        Phone
                      </Form.Label>
                      <Form.Control
                        className="u-full-width"
                        type="tel"
                        placeholder="Phone Number"
                        name="phonenumber"
                        id="phonenumber"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        className="u-full-width"
                        type="email"
                        placeholder="Example@email.com"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="address">Address</Form.Label>
                      <Form.Control
                        className="u-full-width"
                        type="text"
                        placeholder="Address"
                        name="address"
                        id="address"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="suburb_id">Suburb</Form.Label>
                      <Select 
                        id="suburbs"
                          className="u-full-width"
                          onChange={this.handleSuburb}
                          name="suburb_id"
                          options={this.state.suburbs}
                          >
                      </Select>
                    </Form.Group>
                  </div>
                </Col>
                <Col> 
                  <div className="one-half column">
                    <Form.Group>
                      <Form.Label htmlFor="service_id">
                        Services required
                      </Form.Label>
                      <Select 
                          id="services"
                          className="u-full-width"
                          onChange={this.handleOptions}
                          name="service_id"
                          options={this.state.optionsServices}
                          placeholder="Select all services required"
                          />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="booking_date">
                        Date
                          </Form.Label>
                      <Form.Control
                        className="u-full-width"
                        type="date"
                        name="booking_date"
                        id="booking_date"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label htmlFor="notes">
                        Notes
                      </Form.Label>
                      <textarea
                        className="u-full-width"
                        name="notes"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Control
                      className="button-primary"
                      type="submit"
                      value="Submit"
                    />
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