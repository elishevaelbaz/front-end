import React from "react";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.setItem("booklub", "");

    props.setLoggedIn("");
    history.push("/login");
  };

  return (
    <div className="nav">
      {props.loggedIn ? (
        <>
          <NavLink to="/home" exact>
            <h2>Home</h2>
          </NavLink>
          <NavLink to="/books" exact>
            <h2>Books</h2>
          </NavLink>
          <NavLink to="/booklubs">
            <h2>My Clubs</h2>
          </NavLink>
          <div style={{ marginLeft: "80%" }}>
            <NavLink to="/profile">
              <h2>Profile</h2>
            </NavLink>
            <NavLink onClick={handleLogout} to="/home">
              <h2>Logout</h2>
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <NavLink to="/home" exact>
            <h2>BooKlub</h2>
          </NavLink>
          <div style={{ marginLeft: "80%" }}>
            <NavLink to="/signup" exact>
              <h2>Register</h2>
            </NavLink>
            <NavLink to="/login" exact>
              <h2>Log In</h2>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
