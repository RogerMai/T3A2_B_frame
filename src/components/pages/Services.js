import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import API from '../../api'
import Spinner from '../layout/Spinner'
import { Form, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Services extends React.Component {
    state = {
        services: [],
        loading: false
    }

  componentDidMount () {
    this.setState({ loading: true })

    fetch(`${API}/services`)
    .then(response => response.json())
    .then(data => this.setState({services: data, loading: false}));  
  }

    render() {
        const {services, loading} = this.state

        if(loading) {
            return <Spinner />
        } else {
        return (
            <div className="service-bg">
                <div className="serviceCard">
                    <div className="serviceContainer">
                        <div className="service-h1">
                            <h1 className="servicesH1">Services</h1>
                        </div>
                        <div className="servicePList">
                        {services.map(service => 
                            <table key={service.id}>
                                    { service.category_id === 1 ?
                                <tbody>
                                    <tr>
                                    <td>{service.service_name}</td>
                                    <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
                                    </tr>
                                </tbody> : 
                                <tbody>
                                    <tr>
                                    <td>{service.service_name}</td>
                                    <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
                                    </tr>
                                </tbody>
                                }
                            </table>
                            )
                        }
                        </div>
                        <Link to='services'>
                            <button className='b_services'>Our Services</button>
                        </Link>
                    </div>
                </div>
            </div>
        )}
    }
}


export default Services
