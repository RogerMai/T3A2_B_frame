import React, {useState, useEffect} from "react"
import Select from 'react-select'

function EditBooking(props) {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    phonenumber: '',
    email: '',
    address: '',
    notes: '',
    service_id: null,
    suburb_id: null,
    // suburbs: [],
    // optionsServices: [],
    postcode: '4000',
    booking_date: '',
    suburb: {value: "", label: ""},
    service: {value: "", label: ""}
  })

  const [services, setServices] = useState([])
  const [suburbs, setSuburbs] = useState([])

  const handleOptions = selectedService => {
    let newState = {...state}
    setState({...newState, service_id: selectedService.value})
}

  const handleSuburb = selectedSuburb => {
    let newState = {...state}
    setState({...newState, suburb_id: selectedSuburb.value})
  }

  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    let newState = {...state}
    setState({...newState, [name]: value})
}

  const handleSubmit = (event) => {
    event.preventDefault()
    let ph = state.phonenumber
    if (!Number(ph)) {
        alert("Phone must be a number")
    }
    fetch('https://larryslawncare.herokuapp.com/bookings/' + state.id, {
      method: 'PUT',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        if (response.status == 204) {
            props.history.push("/admin/bookings")
        } else {
          alert("Please fill in all fields")
        }
    })
  }
  
  useEffect(() => {
    const {suburb_id, suburb, service, service_id} = state
    if (suburb_id != null && suburb.value == "" && suburbs.length > 0) {
      const found = suburbs.find(suburb => suburb.value == suburb_id);
      setState({...state, suburb: found})
    }
    if (service_id != null && service.value == "" && services.length > 0) {
      const foundservice = services.find(service => service.value == service_id);
      setState({...state, service: foundservice})
    }
  })

  // useEffect(() => {
  //   const {service_id, service} = state
  //   if (service_id != null && service.value == "") {
  //     const foundservice = services.find(service => service.value == service_id);
  //     setState({...state, service: foundservice})
  //   }
  // }, [state.service_id])

  useEffect(() => {
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
      setServices(array)
    })

    fetch('https://larryslawncare.herokuapp.com/suburbs')
    .then(result => result.json())
    .then (data => {
        let array = []
        data.forEach((element) => {
        array.push({
            value: element.id,
            label: element.name
        })
        })
        setSuburbs(array)
    })

    fetch(`https://larryslawncare.herokuapp.com/bookings/${props.match.params.id}`)
    .then(result => result.json())
    .then(booking => {
      setState({...state, ...booking})
    })
  }, [])



  return (
    <div className="bookingForm">
      <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
                value={state.first_name}
              />
              <label htmlFor="last_name">
                Last Name
              </label>
              <input 
                className="u-full-width"
                type="text" 
                name="last_name"  
                id="last_name" 
                onChange={handleChange}
                value={state.last_name}
              />
              <label htmlFor="phonenumber">
                Phone
              </label>
              <input 
                className="u-full-width"
                type="tel" 
                name="phonenumber"  
                id="phonenumber" 
                onChange={handleChange}
                value={state.phonenumber}
              />
              <label htmlFor="email">
                Email
              </label>
              <input 
              className="u-full-width"
              type="email" 
              name="email"  
              id="email"
                onChange={handleChange}
                value={state.email} 
              />
              <label htmlFor="address">
                Address
              </label>
              <input 
                className="u-full-width"
                type="text" 
                name="address"  
                id="address"
                onChange={handleChange} 
                value={state.address}
              />
              <label htmlFor="suburb_id">
                Suburb
              </label>
              <Select 
                  id="suburbselect"
                  className="u-full-width"
                  onChange={handleSuburb}
                  name="suburb_id"
                  options={suburbs}
                  value={state.suburb}
              >
              </Select>
            </div>
            <div className="one-half column">
              <label htmlFor="service_id">
                Services required
              </label>
              <Select 
                  id="serviceselect"
                  className="u-full-width"
                  onChange={handleOptions}
                  name="service_id"
                  options={services}
                  placeholder="Select all services required"
                  value={state.service}
              />
              <label htmlFor="booking_date">
                    Date
                  </label>
                  <input 
                    className="u-full-width"
                    type="date" 
                    name="booking_date"  
                    id="booking_date" 
                    onChange={handleChange}
                    value={state.booking_date}
                  />
              <label htmlFor="notes">
                Notes
              </label>
              <textarea 
                  className="u-full-width" 
                  name="notes"
                  onChange={handleChange}
                  value={state.notes || ""}
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

export default EditBooking;