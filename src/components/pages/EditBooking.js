import React, {useState} from "react"
import Select from 'react-select'

class EditForm extends React.Component {
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
             date: '',
             suburb: {value: "", label: ""},
             service: {value: "", label: ""}
        }
    }
    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({[name]: value})
    }


    handleOptions = selectedService => {
        this.setState({service_id: selectedService.value})
    }

    handleSuburb = selectedSuburb => {
      this.setState({suburb_id: selectedSuburb.value})
    }

    handleSubmit = (event) => {
      event.preventDefault()
      let ph = this.state.phonenumber
      if (!Number(ph)) {
          alert("Phone must be a number")
      }
      fetch('https://larryslawncare.herokuapp.com/bookings/' + this.state.id, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
          if (response.status == 200) {
              this.props.history.push("/bookings")
          } else {
            alert("Please fill in all fields")
          }
      })
    }

    componentDidUpdate() {
        if (this.state.suburb_id != null && this.state.suburb.value == "") {
            const found = this.state.suburbs.find(suburb => suburb.value == this.state.suburb_id);
            this.setState({...this.state, suburb: found})
        }
        if (this.state.service_id != null && this.state.service.value == "") {
            const foundservice = this.state.optionsServices.find(service => service.value == this.state.service_id);
            this.setState({...this.state, service: foundservice})
            console.log(foundservice)
        }
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
          this.setState({optionsServices: array})
        })
        //   console.log(array)

        fetch('https://larryslawncare.herokuapp.com/suburbs')
        .then(result => result.json())
        .then (data => {
            let suburbs = []
            data.forEach((element) => {
            suburbs.push({
                value: element.id,
                label: element.name
            })
            })
            this.setState({suburbs: suburbs})
        //   console.log(suburbs)
        })

        fetch(`https://larryslawncare.herokuapp.com/bookings/${this.props.match.params.id}`)
        .then(result => result.json())
        .then(booking => this.setState(booking))
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
                  value={this.state.first_name}
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
                  value={this.state.last_name}
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
                  value={this.state.phonenumber}
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
                  value={this.state.email} 
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
                  value={this.state.address}
                />
                <label htmlFor="suburb_id">
                  Suburb
                </label>
                <Select 
                    className="u-full-width"
                    onChange={this.handleSuburb}
                    name="suburb_id"
                    options={this.state.suburbs}
                    value={this.state.suburb}
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
                      value={this.state.booking_date}
                    />
                <label htmlFor="notes">
                  Notes
                </label>
                <textarea 
                    className="u-full-width" 
                    name="notes"
                    onChange={this.handleChange}
                    value={this.state.notes}
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

export default EditForm;