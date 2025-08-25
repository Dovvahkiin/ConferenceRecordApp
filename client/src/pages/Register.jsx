import { useState } from "react";
import { Link } from "react-router";

function Register() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    passwordAgain: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <main className="mainFormat login">
      <form className="logRegPage">
        <h1>Register Page</h1>
        <div className="inputField reg inputs">
          <label htmlFor="username">Enter Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
            value={values.username}
          />
        </div>
        <div className="inputField reg inputs">
          <label htmlFor="password">Enter Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <div className="inputField reg inputs">
          <label htmlFor="password">Confirm Password: </label>
          <input
            type="password"
            name="passwordAgain"
            placeholder="Enter your password"
            onChange={handleChange}
            value={values.passwordAgain}
          />
        </div>
        <div className="inputField">
          <button type="submit">Register</button>
        </div>
        <hr className="loginLine" />
        <div className="inputField">
          <span>
            Already have an account? <Link to="/login">Login here</Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default Register;
