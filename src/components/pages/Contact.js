import React from 'react';
import './Contact.css';
import API from '../../api';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Form, Col, Container, Row, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'bootstrap';

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
        <div className="contact-bg">
            <div className="contactCard">
                <div className="contactContainer">
                    <Container>
                        <Form>
                            <Row>
                                <Col>
                                    <Card className="uppart">
                                        <Card.Header className="contact-h1">
                                            <h1 className="contactUs">Contact Us</h1>
                                        </Card.Header>
                                        <Card.Body className="contactList">
                                            <ul className="list-group">
                                                <li className="list-group-item">Contact Number: 07 3805 7265</li>
                                                <li className="list-group-item">Email: Larry@larryslawncare.com.au</li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Body className="contactIcon">
                                            <a href="https://www.facebook.com/" target="_blank" className="fab fa-facebook-square fa-3x"> </a>
                                            <a href="https://www.instagram.com/?hl=en" target="_blank" className="fab fa-instagram-square fa-3x"> </a>
                                        </Card.Body>
                                    </Card>
                                    
                                    <Card className="downpart">
                                        <Card.Header className="contact-h1">
                                            <h3 className="service-area">Servicing these areas...</h3>
                                        </Card.Header>
                                        <Card.Text>
                                            {name.map(suburb => <p key={suburb.id}>{suburb.name + ","}</p>)}
                                        </Card.Text>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="contactrightpart" >
                                        <Card.Img src="images/Contact_Page_Image.jpg" alt="Contact Us" />
                                        <Card.Body className="contactBButton">
                                            <Link to='booking'>
                                                <button id='c_booking'>Booking Now<i className='far fa-play-circle' /></button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    )};
  }
}

export default Contact