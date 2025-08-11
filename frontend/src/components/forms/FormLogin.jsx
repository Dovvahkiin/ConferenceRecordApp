import React, { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email, "password", password);
  };

  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>
          Please insert your credentials and login!
        </h1>
        <div className="formField">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={emailChange}
          />
        </div>
        <div className="formField">
          <label htmlFor="">Password:</label>
          <input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={passwordChange}
          />
        </div>
        <button className="classicButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
