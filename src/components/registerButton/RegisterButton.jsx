import React, { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { Link } from "react-router-dom";
import './registerButton.css';

function RegisterButton() {
    const user = useContext(AuthContext);

    const handleLogout = () => {
      localStorage.removeItem("user");
      window.location.reload(true);
    };
  
  return (
    <div className="navItems">
      {user.currentUser != null ? (
        <button className="navButton" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <div>
          <Link to="/register">
            <button className="navButton">Register</button>
          </Link>
          <Link to="/login">
            <button className="navButton">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default RegisterButton;
