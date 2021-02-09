import React from "react";

const Dashboard = (props) => {
  const { loggedInStatus } = props;

  if (loggedInStatus === "NOT_LOGGED_IN") {
    window.location.href = "/";
  }

  const handleLogoutClick = () => {
    window.location.href = "/";
  }

  return (
    <div>
      <h1>Test</h1>
      
    
    </div>
  )
};

export default Dashboard;