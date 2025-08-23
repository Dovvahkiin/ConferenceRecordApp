import "../../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/register" className="navLink">
        Register
      </Link>
      <Link to="/login" className="navLink fullRight">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
