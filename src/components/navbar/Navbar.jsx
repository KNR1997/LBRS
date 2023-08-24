import { useContext } from "react";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const user = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
        <div className="navItems">
          {user.currentUser != null ? (
            <button className="navButton">Logout</button>
          ) : (
            <div>
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
