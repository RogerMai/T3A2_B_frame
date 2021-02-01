// import './normalize.css'
// import './skeleton.css'
import React, {useState} from "react"
import Select from 'react-select'

const optionsServices = [
{value: "lorem", label: "Lorem"},
{value: "ipsum", label: "ipsum"},
{value: "dolor", label: "dolor"},
{value: "sitamet", label: "sit amet"}
]

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
             suburb: 'lorem',
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

                <div className="row">
                  <div className="one-half column">
                    <label htmlFor="suburb">
                      Suburb
                    </label>
                    <select 
                        className="u-full-width"
                        onChange={this.handleChange}
                        name="suburb"
                    >
                      <option value="lorem">Lorem</option>
                      <option value="ipsum">ipsum</option>
                    </select>
                  </div>
                  <div className="one-half column">
                    <label htmlFor="postcode">
                      Postcode
                    </label>
                    <select 
                        className="u-full-width"
                        onChange={this.handleChange}
                        name="postcode"
                    >
                      <option value="4000">4000</option>
                      <option value="4001">4001</option>
                    </select>
                  </div>
                </div>

              </div>
              <div className="one-half column">
                <label htmlFor="services">
                  Services required
                </label>
                <Select 
                    className="u-full-width"
                    onChange={this.handleOptions}
                    name="selectedService"
                    options={optionsServices}
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