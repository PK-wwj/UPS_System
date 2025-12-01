import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/Login/LoginPage.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import TrackingDetail from "./pages/TrackingDetail/TrackingDetail.js";


console.log("Navbar =", Navbar, "type =", typeof Navbar);
console.log("LoginPage =", LoginPage, "type =", typeof LoginPage);

function App() {
  return (
    <>
      <Navbar />
      <TrackingDetail />
    </>
  );
}

export default App;
