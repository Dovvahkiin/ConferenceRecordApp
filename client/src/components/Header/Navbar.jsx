import "../../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navigationLeft">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/profile">
          Profile
        </Link>
      </div>
      <div className="navigationRight">
        <Link to="/login" className="navLink">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
