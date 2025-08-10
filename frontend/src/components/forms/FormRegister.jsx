import React, { useState } from "react";

function FormRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setRepeatedPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const repeatPassword = (e) => {
    setRepeatedPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != againPassword) {
      alert("Error:  --- Passwords don't match ---");
    }
  };

  return (
    <div className="loginForm reg">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>
          Registrujte novi nalog se da bi pristupili aplikaciji
        </h1>
        <div className="formField reg">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={emailChange}
          />
        </div>
        <div className="formField reg">
          <label htmlFor="">Password:</label>
          <input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={passwordChange}
          />
        </div>
        <div className="formField reg">
          <label htmlFor="">Repeat Password:</label>
          <input
            placeholder="Enter your password again"
            type="password"
            value={againPassword}
            onChange={repeatPassword}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FormRegister;
