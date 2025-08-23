import "../styles/general.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <h1>
        NOT FOUND <br /> - 404 -
      </h1>
      <p>The page you are trying to access, does not exists!</p>
      <span>
        &gt; <Link to="/"> Back to Home</Link>
      </span>
    </div>
  );
}

export default NotFound;
