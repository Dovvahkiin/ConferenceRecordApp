import { useState } from "react";
import { Link } from "react-router";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  }

  return (
    <main className="mainFormat login">
      <form className="logRegPage">
        <h1>Login Page</h1>
        <div className="inputField">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </div>
        <div className="inputField">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        <div className="inputField">
          <button type="submit">Login</button>
        </div>
        <hr className="loginLine" />
        <div className="inputField">
          <span>
            Create account if you do not have one:{" "}
            <Link to="/register">Register here</Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default Login;
