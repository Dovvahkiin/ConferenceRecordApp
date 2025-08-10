import React from "react";
import "../../styles/headerStyles/navBarStyle.css";
import { LoginPage, RegisterPage } from "../logRegPage";

function Navbar() {
  return (
    <div className="container">
      <div className="navBarMain">
        <a href={LoginPage}>Login</a>
        <a href="../forms/FormRegister.jsx">Register</a>
      </div>
    </div>
  );
}

export default Navbar;
