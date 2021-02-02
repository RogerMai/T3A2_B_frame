// import './normalize.css'
// import './skeleton.css'
import React, {useState, useEffect} from "react"
import Select from 'react-select'



class Form extends React.Component {
  
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

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({[name]: value})
    }

    handleOptions = selectedService => {
        this.setState({selectedService})
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
    .then(result => this.setState({suburbs: result}))
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
      this.setState({services: array})
    })
  }

  render() {
    const { selectedService } = this.state
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <label htmlFor="firstname">
                  First Name
                </label>
                <input 
                  className="u-full-width"
                  type="text" 

                  name="firstname" 
                  id="firstname"
                  onChange={this.handleChange}
                />
                <label htmlFor="lastname">
                  Last Name
                </label>
                <input 
                  className="u-full-width"
                  type="text" 
                  name="lastname"  
                  id="lastname" 
                  onChange={this.handleChange}
                />
                <label htmlFor="phone">
                  Phone
                </label>
                <input 
                  className="u-full-width"
                  type="tel" 
                  name="phone"  
                  id="phone" 
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
                  <label htmlFor="suburb">
                    Suburb
                  </label>
                  <select 
                      className="u-full-width"
                      onChange={this.handleChange}
                      name="suburb"
                  >
                    {this.state.suburbs.map(suburb => (
                      <option key={suburb.id} value={suburb.id}>{suburb.name}</option>
                    ))}
                  </select>
              </div>
              <div className="one-half column">
                <label htmlFor="services">
                  Services required
                </label>
                <Select 
                    className="u-full-width"
                    onChange={this.handleOptions}
                    name="selectedService"
                    options={this.state.services}
                    placeholder="Select all services required"
                    isMulti
                />
                <label htmlFor="date">
                      Date
                    </label>
                    <input 
                      className="u-full-width"
                      type="date" 
                      name="date"  
                      id="date" 
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

export default Form;