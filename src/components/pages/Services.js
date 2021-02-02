import React from 'react';
import './Services.css';
import API from '../../api'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import {useEffect, useState} from "react"
import NewService from '../NewService'
import EditService from '../EditService'


// class Services extends React.Component {
//     state = {
//         services: [],
//         loading: false
//     }

//   componentDidMount () {
//     this.setState({ loading: true })

//     fetch(`${API}/services`)
//     .then(response => response.json())
//     .then(data => this.setState({services: data, loading: false}));  
//   }

//     render() {
//         const {services, loading} = this.state

//         if(loading) {
//             return <Spinner />
//         } else {
//         return (
//             <>
//                 <div>
//                     <h1>Services</h1>
//                 </div>
//                 {services.map(service => 
//                     <table key={service.id}>
//                             { service.category_id === 1 ?
//                         <tbody>
//                             <tr>
//                             <td>{service.service_name}</td>
//                             <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
//                             </tr>
//                         </tbody> : 
//                         <tbody>
//                             <tr>
//                             <td>{service.service_name}</td>
//                             <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
//                             </tr>
//                         </tbody>
//                         }
//                     </table>
//                     )
//                 }
//             </>
//         )}
//     }
// }


// export default Services

export default function Services() {
    const [services, setServices] = useState([])
    const { path, url} = useRouteMatch()
    
    useEffect(() => {
        fetch(`${API}/services`)
        .then(response => response.json())
        .then(data => setServices(data));
    }, []) 
    
    return (
        <>
        <h1>Services</h1>
             {
                services.map(service => 
                    <table key={service.id}>
                        <tbody>
                            <tr>
                            <td>{service.service_name}</td>
                            <td>{service.price === 'Request quote' ? `${service.price}` : `$${service.price}`}</td>
                            <td><Link to={`${url}/edit/${service.id}`}>Edit Service</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    )
                }
                <Link to={`${url}/new`}>Add a new service</Link>
                <Switch>
                <Route path={`${path}/new`}>
                    <NewService />
                </Route>
                <Route path={`${path}/edit/:service_id`}>
                    <EditService />
                </Route>
                </Switch>
        </>
        )
}




