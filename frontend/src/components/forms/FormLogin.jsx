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
          Ulogujte se da bi pristupili aplikaciji
        </h1>

        <div className="formField">
          <label htmlFor="">Email:</label>
          <input type="email" value={email} onChange={emailChange} />
        </div>
        <div className="formField">
          <label htmlFor="">Password:</label>
          <input type="password" value={password} onChange={passwordChange} />
        </div>
        <button type="submit">Prijavi se</button>
      </form>
    </div>
  );
}

export default FormLogin;
