import React from 'react';
import './Contact.css';
import { ButtonBooking } from '../Button';
import API from '../../api'

class Contact extends React.Component {
    state = {
        name: []
    }

  componentDidMount () {
    fetch(`${API}/suburbs`)
    .then(response => response.json())
    .then(data => this.setState({name: data}));  
  }


  render() {
    const {name} = this.state

    return (
        <>
        <h1>Contact Us</h1>
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

            <ButtonBooking 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large' 
            >
                MAKE A BOOKING <i className='far fa-play-circle' /> 
            </ButtonBooking>
            <img src="./images/Contact_Page_Image.jpg" alt="Contact Us" /> 
        </>
    );
  }
}

export default Contact