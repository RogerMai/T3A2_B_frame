import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import API from '../../api'
import Spinner from '../layout/Spinner'

class Contact extends React.Component {
    state = {
        name: []
    }

  componentDidMount () {
    this.setState({ loading: true })

    fetch(`${API}/suburbs`)
    .then(response => response.json())
    .then(data => this.setState({name: data, loading: false}));  
  }


  render() {
    const {name, loading} = this.state

    if(loading) {
        return <Spinner />
    } else {
    return (
        <>
        <h1 className="contactUs">Contact Us</h1>
            <div>Contact Number: 07 3805 7265</div>
            <div>Email: Larry@larryslawncare.com.au</div>
            <div>
                <a href="https://www.facebook.com/" target="_blank" className="fab fa-facebook-square fa-3x"> </a>
                <a href="https://www.instagram.com/?hl=en" target="_blank" className="fab fa-instagram-square fa-3x"> </a>
            </div>

            <h2>Servicing these areas...</h2>
            <div>
                {name.map(suburb => <p key={suburb.id}>{suburb.name + ","}</p>)}
            </div>

            <img src="./images/Contact_Page_Image.jpg" alt="Contact Us" />
        </>
    )};
  }
}

export default Contact