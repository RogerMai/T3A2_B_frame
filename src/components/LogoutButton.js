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
      <button onClick={handleLogoutClick}>Log out</button>
    </div>
  )
};

export default Dashboard;