import './normalize.css'
import './skeleton.css'
import React from "react"


class Form extends React.Component {

  onFormSubmit = (event) => {
    event.preventDefault()
    console.log("yay")
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <label htmlFor="firstName">
                  First Name
                </label>
                <input 
                  className="u-full-width"
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                />
                <label htmlFor="lastName">
                  Last Name
                </label>
                <input 
                  className="u-full-width"
                  type="text" 
                  name="lastName"  
                  id="lastName" 
                />
                <label htmlFor="phone">
                  Phone
                </label>
                <input 
                  className="u-full-width"
                  type="tel" 
                  name="phone"  
                  id="phone" 
                />
                <label htmlFor="email">
                  Email
                </label>
                <input 
                className="u-full-width"
                type="email" 
                name="email"  
                id="email" 
                />
                <label htmlFor="address">
                  Address
                </label>
                <input 
                  className="u-full-width"
                  type="text" 
                  name="address"  
                  id="address" 
                />

                <div className="row">
                  <div className="one-half column">
                    <label htmlFor="suburb">
                      Suburb
                    </label>
                    <select className="u-full-width">
                      <option value="lorem">Lorem</option>
                      <option value="ipsum">ipsum</option>
                    </select>
                  </div>
                  <div className="one-half column">
                    <label htmlFor="postcode">
                      Postcode
                    </label>
                    <select className="u-full-width">
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
                <select className="u-full-width">
                  <option value="lorem">Lorem</option>
                  <option value="ipsum">ipsum</option>
                </select>
                <label htmlFor="date">
                      Date
                    </label>
                    <input 
                      className="u-full-width"
                      type="date" 
                      name="date"  
                      id="date" 
                    />
                <label htmlFor="notes">
                  Notes
                </label>
                <textarea className="u-full-width" /> 
                <input class="button-primary" type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;

