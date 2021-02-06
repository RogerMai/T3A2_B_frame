import React, { useState, useEffect } from 'react';
import './Admin.css';
import LoginForm from '../LoginForm'


function Admin() {
    const adminUser = {
      username: "admin",
      password: "admin"
    }
  
    const [user,setUser] = useState({name: "", username: ""});
    const [error, setError] = useState("");
  
    const Login = details => {
      console.log(details);
  
      // API call to login - pass email and password (POST request)
      // Returns token (JWT)
    // useEffect(() => {
    //   const token = localStorage.getItem("token")
    //     if(token){
    //       fetch(`https://larryslawncare.herokuapp.com/auto_login`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       })
    //       .then(resp => resp.json())
    //       .then(data => {
    //         setUser(data)
    //       })
    //   }

    //   const handleAuthClick = () => {
    //     const token = localStorage.getItem("token")
    //       fetch(`https://larryslawncare.herokuapp.com/user_is_autehed`, {
    //         headers: {
    //           "Authorization": `Bear ${token}`
    //         }
    //       })
    //       .then(resp => resp.json())
    //       .then(data => console.log(data))
    //   }
    // }, [])

    // const token = localStorage.getItem("token")

    // above 

      if (details.username === adminUser.username && details.password === adminUser.password) {
        console.log("Logged In")
        setUser({
          name: details.name,
          username: details.username
        });
      } else {
        console.log("Details do not match")
        setError("Details do not match")
      }
    }
  
    const Logout = () => {
      console.log("Logout");
        setUser({ name: "", username: ""});
    }
  
    return (
      <div className="App">
        {(user.username !== "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    );
  }
  
  export default Admin;