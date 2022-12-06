import { useState } from "react";

function Dashboard() {
  let [token, setToken] = useState("");
  localStorage.getItem("token") ? setToken(localStorage.getItem("token")) : setToken("No token");
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{token}</h2>
    </div>
    //TODO: Fetch DBD codes
    //TODO: Make dashboard look nice, add a logout button 
  );
}

export default Dashboard;